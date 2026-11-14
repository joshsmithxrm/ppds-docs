"""Validate/copy inert docs capture data. No network, Git, or artifact code execution."""
import argparse
import json
import os
from pathlib import Path
import re
import shutil

SAFE_NAME = re.compile(r"[a-z0-9][a-z0-9-]*\Z")
SHOT_NAME = re.compile(r"[0-9]{2}-[a-z0-9][a-z0-9-]*\Z")
PNG_NAME = re.compile(r"[0-9]{2}-[a-z0-9][a-z0-9-]*\.(light|dark)\.png\Z")


def require(condition, message):
    if not condition:
        raise ValueError(message)


def read_object(path):
    require(path.stat().st_size <= 2_000_000, f"JSON file too large: {path.name}")
    value = json.loads(path.read_text(encoding="utf-8"))
    require(isinstance(value, dict), f"Expected JSON object: {path.name}")
    return value


def validate(root, source):
    require(root.is_dir() and not root.is_symlink(), "Capture root must be a real directory")
    inventory = []
    for directory, dirs, files in os.walk(root, followlinks=False):
        for name in dirs + files:
            path = Path(directory) / name
            require(not path.is_symlink(), "Capture symlinks are prohibited")
            relative = path.relative_to(root)
            parts = relative.parts
            if path.is_dir():
                require(parts == ("docs",) or (len(parts) == 2 and parts[0] == "docs" and SAFE_NAME.fullmatch(parts[1])), "Unexpected capture directory")
            else:
                require(path.is_file(), "Capture contains a non-regular file")
                require(parts == ("manifest.json",) or (len(parts) == 3 and parts[0] == "docs" and SAFE_NAME.fullmatch(parts[1]) and (parts[2] == "meta.json" or PNG_NAME.fullmatch(parts[2]))), "Unexpected capture file")
                inventory.append(relative)
    require(Path("manifest.json") in inventory, "Missing capture manifest")
    manifest = read_object(root / "manifest.json")
    require(manifest.get("schemaVersion") == 1, "Unsupported capture schema")
    require(all(manifest.get("source", {}).get(key) == value for key, value in source.items()), "Capture source differs from workflow context")
    require(set(manifest.get("surfaces", {})) == {"docs"}, "Expected only the docs surface")
    entries = manifest["surfaces"]["docs"].get("entries")
    require(isinstance(entries, list) and entries, "Missing capture entries")
    by_id = {}
    summary = dict(total=len(entries), ok=0, error=0, skipped=0)
    for entry in entries:
        require(isinstance(entry, dict), "Invalid capture entry")
        identifier = entry.get("id")
        require(isinstance(identifier, str) and SAFE_NAME.fullmatch(identifier) and identifier not in by_id, "Invalid/duplicate capture entry ID")
        require(entry.get("state") in {"ok", "error", "skipped"}, "Invalid capture state")
        by_id[identifier] = entry
        summary[entry["state"]] += 1
        shots = entry.get("screenshots")
        require(isinstance(shots, list), "Missing screenshot list")
        for shot in shots:
            require(isinstance(shot, dict) and isinstance(shot.get("name"), str) and SHOT_NAME.fullmatch(shot["name"]) and shot.get("theme") in {"light", "dark"}, "Invalid screenshot identity")
            expected = f"docs/{identifier}/{shot['name']}.{shot['theme']}.png"
            require(shot.get("path") == expected and Path(expected) in inventory, "Missing/unsafe screenshot path")
        if entry["state"] == "ok":
            require(entry.get("metaPath") == f"docs/{identifier}/meta.json" and Path(entry["metaPath"]) in inventory, "Missing/unsafe metadata path")
    require(manifest.get("summary") == summary, "Capture summary differs from actual entries")
    for relative in inventory:
        path = root / relative
        if relative == Path("manifest.json"):
            continue
        require(relative.parts[1] in by_id, "File belongs to an unknown capture entry")
        if path.suffix == ".png":
            with path.open("rb") as handle:
                require(handle.read(8) == b"\x89PNG\r\n\x1a\n", "Invalid PNG signature")
        else:
            meta = read_object(path)
            require(meta.get("id") == relative.parts[1] and meta.get("surface") == "docs", "Metadata identity mismatch")
    return inventory, summary


def copy_validated(root, destination, source):
    inventory, summary = validate(root, source)
    require(destination.is_dir() and not destination.is_symlink(), "Destination must be a real directory")
    # Validate every target before writing any bytes; never follow existing links.
    for relative in inventory:
        target = destination
        for index, part in enumerate(relative.parts):
            target = target / part
            require(not target.is_symlink(), "Destination symlinks are prohibited")
            if target.exists():
                require(target.is_file() if index == len(relative.parts)-1 else target.is_dir(), "Destination path type mismatch")
    for relative in inventory:
        target = destination / relative
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(root / relative, target)
    return summary


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("root", type=Path)
    parser.add_argument("--destination", type=Path)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    source = {key: os.environ[env] for key, env in (("repo", "AUDIT_SOURCE_REPO"), ("ref", "AUDIT_SOURCE_REF"), ("commit", "AUDIT_SOURCE_COMMIT"))}
    require(re.fullmatch(r"[0-9a-f]{40}", source["commit"]), "Invalid workflow source SHA")
    summary = copy_validated(args.root, args.destination, source) if args.destination else validate(args.root, source)[1]
    if args.output:
        with args.output.open("a", encoding="utf-8") as handle:
            for key, value in summary.items():
                handle.write(f"{key}={value}\n")
    print(json.dumps(summary))


if __name__ == "__main__":
    main()

import copy
import json
from pathlib import Path
import tempfile
import unittest

from audit_artifact import copy_validated, validate

SOURCE = {"repo": "joshsmithxrm/ppds-docs", "ref": "refs/heads/main", "commit": "a" * 40}


class AuditArtifactTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.base = Path(self.temporary.name)
        self.root = self.base / "capture"
        self.destination = self.base / "audit"
        (self.root / "docs/intro").mkdir(parents=True)
        self.destination.mkdir()
        self.manifest = {
            "schemaVersion": 1, "source": SOURCE.copy(),
            "surfaces": {"docs": {"entries": [{"id": "intro", "state": "ok", "metaPath": "docs/intro/meta.json", "screenshots": [
                {"name": "01-top", "theme": "light", "path": "docs/intro/01-top.light.png"},
            ]}]}}, "summary": {"total": 1, "ok": 1, "error": 0, "skipped": 0},
        }
        (self.root / "docs/intro/01-top.light.png").write_bytes(b"\x89PNG\r\n\x1a\nfixture")
        (self.root / "docs/intro/meta.json").write_text(json.dumps({"id": "intro", "surface": "docs"}))
        self.write_manifest()

    def write_manifest(self):
        (self.root / "manifest.json").write_text(json.dumps(self.manifest))

    def assert_rejected_before_copy(self):
        with self.assertRaises((ValueError, TypeError, AttributeError)):
            copy_validated(self.root, self.destination, SOURCE)
        self.assertEqual(list(self.destination.iterdir()), [])

    def test_valid_capture_copies_only_data_and_preserves_source(self):
        result = copy_validated(self.root, self.destination, SOURCE)
        self.assertEqual(result, self.manifest["summary"])
        self.assertEqual(json.loads((self.destination / "manifest.json").read_text())["source"], SOURCE)
        self.assertEqual((self.destination / "docs/intro/01-top.light.png").read_bytes(), (self.root / "docs/intro/01-top.light.png").read_bytes())

    def test_partial_failure_with_leftover_images_is_preserved(self):
        self.manifest["surfaces"]["docs"]["entries"][0] = {"id": "intro", "state": "error", "screenshots": [], "error": "render failed"}
        self.manifest["summary"] = {"total": 1, "ok": 0, "error": 1, "skipped": 0}
        self.write_manifest()
        self.assertEqual(copy_validated(self.root, self.destination, SOURCE)["error"], 1)

    def test_unexpected_control_and_executable_payloads_are_rejected(self):
        for name in [".git/config", ".github/workflows/injected.yml", "docs/intro/run.py", "docs/intro/config.json", "docs/unknown/a.light.png", "docs/.hooks/x.light.png"]:
            with self.subTest(name=name):
                path = self.root / name
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text("payload")
                self.assert_rejected_before_copy()
                path.unlink()
                # Remove only this test's now-empty auxiliary directories.
                parent = path.parent
                while parent != self.root and parent != self.root / "docs" and not list(parent.iterdir()):
                    parent.rmdir()
                    parent = parent.parent

    def test_false_source_identity_is_rejected(self):
        for key in SOURCE:
            with self.subTest(key=key):
                self.manifest["source"] = {**SOURCE, key: "forged"}
                self.write_manifest()
                self.assert_rejected_before_copy()

    def test_traversal_and_missing_reference_are_rejected(self):
        for path in ["../outside.png", "docs/intro/../../.git/config", "docs/intro/missing.light.png", "docs\\intro\\01-top.light.png"]:
            with self.subTest(path=path):
                self.manifest["surfaces"]["docs"]["entries"][0]["screenshots"][0]["path"] = path
                self.write_manifest()
                self.assert_rejected_before_copy()

    def test_false_summary_invalid_png_and_metadata_are_rejected(self):
        baseline = copy.deepcopy(self.manifest)
        self.manifest["summary"]["error"] = 0.5
        self.write_manifest()
        self.assert_rejected_before_copy()
        self.manifest = baseline
        self.write_manifest()
        image = self.root / "docs/intro/01-top.light.png"
        image.write_bytes(b"#!/bin/bash")
        self.assert_rejected_before_copy()
        image.write_bytes(b"\x89PNG\r\n\x1a\nfixture")
        (self.root / "docs/intro/meta.json").write_text('{"id":"other","surface":"docs"}')
        self.assert_rejected_before_copy()

    def test_source_and_destination_symlinks_are_rejected(self):
        outside = self.base / "outside"
        outside.mkdir()
        link = self.root / "docs/linked"
        # Hosted Linux always supports symlinks; Windows developer mode is needed locally.
        try:
            link.symlink_to(outside, target_is_directory=True)
        except OSError as error:
            self.skipTest(f"Host cannot create symlinks: {error}")
        self.assert_rejected_before_copy()
        link.unlink()
        target = self.destination / "docs"
        target.symlink_to(outside, target_is_directory=True)
        with self.assertRaisesRegex(ValueError, "Destination symlinks"):
            copy_validated(self.root, self.destination, SOURCE)
        self.assertEqual(list(outside.iterdir()), [])
        self.assertFalse((self.destination / "manifest.json").exists())


if __name__ == "__main__":
    unittest.main()

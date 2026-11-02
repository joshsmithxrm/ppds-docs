# Documentation CI security

**Code:** `.github/workflows/`, `tools/ci/`

The documentation dependency graph executes only in jobs with `contents: read`, without Pages, OIDC, App credentials, or retained checkout credentials. Pages deployment consumes the completed build artifact in its own job with only `pages: write` and `id-token: write`. All dependency jobs use Node 24 and run `npm audit --include=dev --audit-level=high` before build or capture; errors and high/critical findings block the job.

Manual audit capture remains manual. Dependency execution and browser capture are isolated from the separate recording job. Recording accepts only the documented JSON/PNG capture layout, validates source identity against workflow context, and never executes captured files. App authorization is restricted to contents-write in `ppds-v1-audit`, with no persisted checkout credentials. Requested branches must be valid `capture/` branches and cannot be the default or an existing protected branch.

| AC | Requirement | Test | Status |
|---|---|---|---|
| AC-01 | Build/test/capture have only contents-read; deployment alone has Pages/OIDC; checkouts do not persist credentials | `test-ci-security.mjs`: workflow permission boundaries | ✅ |
| AC-02 | Every dependency job uses Node 24, npm ci, and a blocking full-graph high/critical audit | `test-ci-security.mjs`: audit cannot be omitted or bypassed | ✅ |
| AC-03 | Capture and credentialed recording use separate jobs, recording does not install or execute dependencies | `test-ci-security.mjs`: manual capture isolation | ✅ |
| AC-04 | Recording rejects traversal, symlinks, control/config/executable files, malformed capture data and false source identity before copying | `test_audit_artifact.py` | ✅ |
| AC-05 | Recording accepts successful and partially failed JSON/PNG captures while preserving trusted source and actual failure counts | `test_audit_artifact.py` | ✅ |
| AC-06 | Recording uses a narrow App token, capture-only branches, default/protected branch refusal, and transient Git authentication | `test-ci-security.mjs`: recording authorization | ✅ |

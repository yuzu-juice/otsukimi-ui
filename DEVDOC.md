# Otsukimi UI DEVDOC

## Release

Releases are managed by **release-please** and published to npm via GitHub Actions.

### Pull Request titles

PR titles should follow Conventional Commits.

### Version bumps

release-please determines releases from commit messages:

- `fix: ...` → patch release
- `feat: ...` → minor release
- `feat!: ...`, `fix!: ...`, `refactor!: ...`, etc. → major release
- `docs: ...`, `chore: ...`, `ci: ...`, `test: ...` → no release by default

Use `fix:` or `feat:` when the change should be included in an npm release.

### Release flow

1. Merge PRs into `main`.
2. release-please opens a release PR.
3. Merge the release PR.
4. GitHub creates a version tag and release.
5. GitHub Actions publishes the package to npm.

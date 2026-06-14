# Otsukimi UI

ﾕﾒｶﾜﾃﾞｻﾞｲﾝｼｽﾃﾑ

## Concept

- ﾕﾒｶﾜ
- ﾌﾜﾌﾜ
- ﾓﾁﾓﾁ
- ｶﾜｲｲ!

## Status

- Version: v0 preview
- WCAG 2.2 AA full audit: planned for v1.0

## Installation

**npm**

```bash

npm install otsukimi-ui
```

**pnpm**

```bash
pnpm add otsukimi-ui
```

**yarn**

```bash
yarn add otsukimi-ui
```

**bun**

```bash
bun add otsukimi-ui
```

## Usage

```ts
import { version } from "otsukimi-ui";

console.log(version);
```

## Release

Releases are managed by **release-please** and published to npm via GitHub Actions.

### Pull Request titles

This repository uses **Squash and Merge**. The PR title becomes the final commit message on `main`, so PR titles should follow Conventional Commits.

### Version bumps

release-please determines releases from commit messages:

- `fix: ...` → patch release
- `feat: ...` → minor release
- `feat!: ...`, `fix!: ...`, `refactor!: ...`, etc. → major release
- `docs: ...`, `chore: ...`, `ci: ...`, `test: ...` → no release by default

Use `fix:` or `feat:` when the change should be included in an npm release.

### Release flow

1. Merge PRs into `main` using squash merge.
2. release-please opens a release PR.
3. Merge the release PR.
4. GitHub creates a version tag and release.
5. GitHub Actions publishes the package to npm.

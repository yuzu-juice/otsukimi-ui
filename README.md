# Otsukimi UI

ﾕﾒｶﾜﾃﾞｻﾞｲﾝｼｽﾃﾑ

## Storybook

Live component docs are published to GitHub Pages:

https://yuzu-juice.github.io/otsukimi-ui/

## Concept

- ﾕﾒｶﾜ
- ﾌﾜﾌﾜ
- ﾓﾁﾓﾁ
- ｶﾜｲｲ!

## Status

- Version: v0 preview
- Accessibility: automated axe checks with 0 violations on all components; page-level WCAG conformance is the consuming application's responsibility

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

Components need the design tokens and component styles. Import the CSS once:

```tsx
import { Button, Input } from "otsukimi-ui";
import "otsukimi-ui/tokens.css"; // design tokens (colors, radii, spacing)
import "otsukimi-ui/index.css"; // component styles
```

`otsukimi-ui` requires React 19 as a peer dependency.

> Note: the font tokens (`--otsukimi-font-body-family` / `--otsukimi-font-heading-family`)
> reference "LINE Seed JP" and "Zen Maru Gothic", but the library does not load these fonts.
> Consumers should self-host or bundle them, otherwise the system fallback is used.

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

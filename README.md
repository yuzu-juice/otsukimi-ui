# Otsukimi UI

ﾕﾒｶﾜﾃﾞｻﾞｲﾝｼｽﾃﾑ

## Links

- Figma design: <https://www.figma.com/design/atxB4VVIPrH5OuvmUAOpeo/Otsukimi-UI>
- npm: <https://www.npmjs.com/package/otsukimi-ui>
- Storybook (live docs): <https://yuzu-juice.github.io/otsukimi-ui/>
- Repository: <https://github.com/yuzu-juice/otsukimi-ui>

## Documentation

- [Concept](docs/concept.md)
- [Foundations](docs/foundations.md)
- [Components](docs/components.md)
- [Accessibility](docs/accessibility.md)

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

## Quickstart

Components inject their own styles, so a single import is all you need:

```tsx
import { Button, Input } from "otsukimi-ui";

function App() {
  return (
    <main>
      <Button variant="moon">Get started!</Button>
      <Input placeholder="Your name" />
    </main>
  );
}
```

`otsukimi-ui` requires React 19 as a peer dependency.

> Note: the font tokens (`--otsukimi-font-body-family` / `--otsukimi-font-heading-family`)
> reference "LINE Seed JP" and "Zen Maru Gothic", but the library does not load these fonts.
> Consumers should self-host or bundle them, otherwise the system fallback is used.

## Customizing tokens

Design tokens are CSS variables defined in `:root`. To override them, import
`otsukimi-ui/tokens.css` and set the variables you care about after it:

```tsx
import "otsukimi-ui/tokens.css";
```

```css
:root {
  --otsukimi-color-brand-primary-deep: #3f4a9e;
}
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

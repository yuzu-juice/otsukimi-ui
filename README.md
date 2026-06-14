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

Releases are published via GitHub Actions when a version tag is pushed.

```bash
git checkout main
git pull origin main
git tag -a v0.0.1 -m "Release v0.0.1"
git push origin v0.0.1
```

# Otsukimi UI

ﾕﾒｶﾜﾃﾞｻﾞｲﾝｼｽﾃﾑ

Otsukimi UI is a React component library.

## Links

- [Figma design](https://www.figma.com/design/atxB4VVIPrH5OuvmUAOpeo/Otsukimi-UI)
- [npm](https://www.npmjs.com/package/otsukimi-ui)
- [Storybook](https://yuzu-juice.github.io/otsukimi-ui)
- [Repository](https://github.com/yuzu-juice/otsukimi-ui)

## Documentation

- [Foundations](docs/foundations.md)
- [Components](docs/components.md)
- [Accessibility](docs/accessibility.md)

## Concept

- ﾕﾒｶﾜ
- ﾌﾜﾌﾜ
- ﾓﾁﾓﾁ
- ｶﾜｲｲ!

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

```css
@import "otsukimi-ui/styles.css";
```

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

## Cascade layer

All styles ship inside the `otsukimi` cascade layer, so any unlayered CSS in your
app beats them without `!important`.

Layer order follows first appearance, so with Tailwind CSS v4 declare the order
yourself to keep `otsukimi` below Tailwind's utilities:

```css
@layer otsukimi, theme, base, components, utilities;

@import "tailwindcss";
@import "otsukimi-ui/styles.css";
```

Without that first line, importing the library after Tailwind would let it win
over utility classes such as `bg-white`.

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

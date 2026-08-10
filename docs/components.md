# Components

Otsukimi UI is a ﾕﾒｶﾜ (yume-kawaii) React 19 component library. Components
inject their own styles, so importing the components is enough.

```tsx
import { Button } from "otsukimi-ui";
```

To override the design tokens, import `otsukimi-ui/tokens.css` and redefine the
CSS variables you need.

Each component below links to its live interactive page on Storybook.

## Overview

| Component   | Export        | Native element            |
| ----------- | ------------- | ------------------------- |
| Button      | `Button`      | `<button>`                |
| Input       | `Input`       | `<input>`                 |
| Card        | `Card`        | `<div>`                   |
| Badge       | `Badge`       | `<span>`                  |
| Checkbox    | `Checkbox`    | `<input type="checkbox">` |
| RadioButton | `RadioButton` | `<input type="radio">`    |
| Accordion   | `Accordion`   | `<div>` + `<button>`      |
| Divider     | `Divider`     | `<div>`                   |
| Link        | `Link`        | `<a>`                     |
| SearchBar   | `SearchBar`   | `<form>`                  |
| ListItem    | `ListItem`    | `<div>`                   |

---

## Button

A pill-shaped button.

```tsx
<Button>Get started!</Button>
<Button variant="moon">Good night</Button>
<Button variant="transparent">See docs</Button>
<Button disabled>Disabled</Button>
```

Props:

| Name    | Type                                   | Required | Description                        |
| ------- | -------------------------------------- | -------- | ---------------------------------- |
| variant | `"default" \| "moon" \| "transparent"` | no       | Visual style. Default: `"default"` |

Inherits all native `<button>` attributes (e.g. `type`, `disabled`, `onClick`).
The `moon` variant renders a moon icon automatically.

[Storybook →](https://yuzu-juice.github.io/otsukimi-ui/?path=/story/components-button--default)

---

## Input

A text input.

```tsx
<Input placeholder="Type something" />
<Input placeholder="Disabled" disabled />
```

Props: none beyond native `<input>` attributes.

Inherits all native `<input>` attributes.

[Storybook →](https://yuzu-juice.github.io/otsukimi-ui/?path=/story/components-input--default)

---

## Card

A rounded container for grouping content.

```tsx
<Card>
  <p>Hello</p>
  <p>It is raining today</p>
</Card>
```

Props: none beyond native `<div>` attributes.

Inherits all native `<div>` attributes.

[Storybook →](https://yuzu-juice.github.io/otsukimi-ui/?path=/story/components-card--default)

---

## Badge

A small pill label for statuses or categories.

```tsx
<Badge>New</Badge>
<Badge variant="primary">In progress</Badge>
<Badge variant="moonlight">New</Badge>
<Badge variant="accent-soft">Coming soon</Badge>
```

Props:

| Name    | Type                                                     | Required | Description                            |
| ------- | -------------------------------------------------------- | -------- | -------------------------------------- |
| variant | `"default" \| "primary" \| "moonlight" \| "accent-soft"` | no       | Background color. Default: `"default"` |

Inherits all native `<span>` attributes.

[Storybook →](https://yuzu-juice.github.io/otsukimi-ui/?path=/story/components-badge--default)

---

## Checkbox

A checkable toggle rendered as a star or moon icon.

```tsx
<Checkbox label="Subscribe" defaultChecked />
<Checkbox variant="moon" label="Dark mode" />
```

Props:

| Name    | Type               | Required | Description                        |
| ------- | ------------------ | -------- | ---------------------------------- |
| variant | `"star" \| "moon"` | no       | Checked icon. Default: `"star"`    |
| label   | `string`           | no       | Text rendered next to the checkbox |

Inherits all native `<input>` attributes except `type`.

[Storybook →](https://yuzu-juice.github.io/otsukimi-ui/?path=/story/components-checkbox--unchecked)

---

## RadioButton

A single-select radio input.

```tsx
<RadioButton name="theme" label="Light" defaultChecked />
<RadioButton name="theme" label="Dark" />
```

Props:

| Name  | Type     | Required | Description                     |
| ----- | -------- | -------- | ------------------------------- |
| label | `string` | no       | Text rendered next to the radio |

Inherits all native `<input>` attributes except `type`. Use the same `name`
attribute to group radios.

[Storybook →](https://yuzu-juice.github.io/otsukimi-ui/?path=/story/components-radiobutton--unchecked)

---

## Accordion

An expandable / collapsible section.

```tsx
<Accordion title="Frequently asked questions" defaultOpen>
  Yes, this is a frequently asked question.
</Accordion>
```

Props:

| Name        | Type                      | Required | Description                          |
| ----------- | ------------------------- | -------- | ------------------------------------ |
| title       | `string`                  | no       | Header text                          |
| open        | `boolean`                 | no       | Controlled open state                |
| defaultOpen | `boolean`                 | no       | Initial open state. Default: `false` |
| onToggle    | `(open: boolean) => void` | no       | Called with the next state on toggle |

Inherits all native `<div>` attributes except `onToggle`.

[Storybook →](https://yuzu-juice.github.io/otsukimi-ui/?path=/story/components-accordion--closed)

---

## Divider

A horizontal separator.

```tsx
<Divider />
<Divider variant="dashed" />
```

Props:

| Name    | Type                  | Required | Description                    |
| ------- | --------------------- | -------- | ------------------------------ |
| variant | `"solid" \| "dashed"` | no       | Line style. Default: `"solid"` |

[Storybook →](https://yuzu-juice.github.io/otsukimi-ui/?path=/story/components-divider--solid)

---

## Link

An inline link with a trailing arrow icon.

```tsx
<Link href="/docs">Read the docs</Link>
```

Props: none beyond native `<a>` attributes.

Inherits all native `<a>` attributes (e.g. `href`, `target`, `rel`).

[Storybook →](https://yuzu-juice.github.io/otsukimi-ui/?path=/story/components-link--default)

---

## SearchBar

A search input paired with a submit button.

```tsx
<SearchBar
  placeholder="Search tasks"
  buttonLabel="Search"
  searchLabel="Search tasks"
  onSearch={(value) => console.log(value)}
/>
```

Props:

| Name         | Type                       | Required | Description                             |
| ------------ | -------------------------- | -------- | --------------------------------------- |
| placeholder  | `string`                   | no       | Input placeholder                       |
| value        | `string`                   | no       | Controlled input value                  |
| defaultValue | `string`                   | no       | Initial input value                     |
| onChange     | `(value: string) => void`  | no       | Called with the input value             |
| onSearch     | `(value: string) => void`  | no       | Called with the trimmed value on submit |
| buttonLabel  | `string`                   | no       | Submit button text                      |
| searchLabel  | `string`                   | no       | Accessible name for the input           |
| inputProps   | `InputHTMLAttributes<...>` | no       | Extra attributes for the input          |

Inherits all native `<form>` attributes except `onSubmit` and `onChange`.

[Storybook →](https://yuzu-juice.github.io/otsukimi-ui/?path=/story/components-searchbar--default)

---

## ListItem

A list row with a leading icon.

```tsx
<ListItem>Life</ListItem>
<ListItem variant="dot">Life</ListItem>
```

Props:

| Name    | Type              | Required | Description                     |
| ------- | ----------------- | -------- | ------------------------------- |
| variant | `"star" \| "dot"` | no       | Leading icon. Default: `"star"` |

[Storybook →](https://yuzu-juice.github.io/otsukimi-ui/?path=/story/components-listitem--star)

---

## Icons

Icons are small SVG components. All icons accept `IconProps`, which extends
the native SVG attributes with an optional accessible `title`:

```ts
type IconProps = SVGProps<SVGSVGElement> & {
  title?: string;
};
```

```tsx
import { StarIcon } from "otsukimi-ui";

<StarIcon style={{ width: 32, height: 32, color: "var(--otsukimi-color-brand-primary-deep)" }} />;
```

Available icons: `ArrowDownIcon`, `ArrowLeftIcon`, `ArrowRightIcon`,
`ArrowUpIcon`, `ChevronDownIcon`, `ChevronLeftIcon`, `ChevronRightIcon`,
`ChevronUpIcon`, `DotIcon`, `MoonIcon`, `SparkleIcon`, `StarIcon`.

[Storybook gallery →](https://yuzu-juice.github.io/otsukimi-ui/?path=/story/icons-gallery--default)

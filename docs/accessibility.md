# Accessibility

## Stance

Otsukimi UI provides accessible building blocks; it does not certify page-level WCAG conformance. WCAG conformance is evaluated against a finished web page, so the responsibility splits:

- Otsukimi UI: accessible components — keyboard-operable, real labels, accessible names, visible focus indicators, contrast-checked tokens
- Consuming application: assembling components into a page that meets WCAG

## Release bar

- All stories pass the Storybook a11y addon (axe-core) with Violations = 0
- `Incomplete` / "needs review" results are triaged manually per component
- Interactive components (Button, Input, Checkbox, RadioButton, Accordion, SearchBar) are manually checked with Tab / Enter / Space / arrow keys

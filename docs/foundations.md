# Foundations

source of truth: `src/foundations/tokens.css`

## Color

| Token                    | Value     |
| ------------------------ | --------- |
| color-bg-base            | `#FAF8FF` |
| color-bg-surface         | `#FFFFFF` |
| color-brand-primary      | `#DCA3FF` |
| color-brand-primary-soft | `#EFD6FF` |
| color-brand-primary-deep | `#5560C9` |
| color-accent-default     | `#8EDAF7` |
| color-accent-soft        | `#CDEFFF` |
| color-text-primary       | `#483354` |
| color-text-secondary     | `#6F6A86` |
| color-border-default     | `#E8DCF3` |
| color-highlight-default  | `#FFBC00` |
| color-highlight-soft     | `#FFF3C7` |
| color-secondary          | `#FFE1EE` |

---

## Radius

| Token       | Value  |
| ----------- | ------ |
| radius-xs   | 8px    |
| radius-sm   | 16px   |
| radius-md   | 24px   |
| radius-lg   | 32px   |
| radius-full | 9999px |

---

## Spacing

| Token     | Value |
| --------- | ----- |
| spacing-1 | 4px   |
| spacing-2 | 8px   |
| spacing-3 | 16px  |
| spacing-4 | 24px  |
| spacing-5 | 32px  |
| spacing-6 | 64px  |

---

## Accessibility

### Target

- All components pass automated accessibility checks (axe, Storybook a11y): Violations = 0
- Interactive components are keyboard-operable with a visible focus indicator
- Page-level WCAG conformance is the consuming application's responsibility

### Principles

- Accessible First
- Cute Second
- Clear and Consistent

### Requirements

- Text contrast ratio ≥ 4.5:1
- Visible focus indicators
- Keyboard accessible
- Touch targets ≥ 44×44px

# Figma Align Fixes for Accessible Functional Components — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align Button, Input, Checkbox, Link, SearchBar, Accordion, Divider, and Card spacing/padding/dimensions with the Figma spec without touching a11y/ARIA/semantic structure or design tokens.

**Architecture:** Each task edits only the component's own `.css` file (except Task 2, which edits the shared `.otsukimi-field:focus-visible` rule in `tokens.css`). The codebase already uses `em` units (refactored in `b954970`); all values introduced by this plan use `em` (1em = 16px). Values not being changed are left untouched.

**Tech Stack:** React 19, plain CSS modules-in-global-namespace imported from component `.tsx`, Storybook 10 for visual review, TypeScript + tsup build. No test framework exists in this repo.

## Global Constraints

- Color / shadow / radius / font tokens are sourced from `src/foundations/tokens.css` — never inline literal colors or shadows.
- Padding / gap / component dimensions follow Figma (via the values confirmed in clarifying questions).
- a11y / ARIA / semantic HTML in the `.tsx` files is **unchanged** in every task.
- All values changed by this plan use `em` (1em = 16px). Equivalences: 10px = 0.625em, 5px = 0.3125em, 320px = 20em, 48px = 3em, 22px = 1.375em, 20px = 1.25em, 24px = 1.5em, 28px = 1.75em, 8px = 0.5em, 2px = 0.125em, 4px = 0.25em.
- **No changes:** RadioButton, Badge, ListItem (Star 5px / Dot 10px already match Figma). ListItem is skipped entirely.
- **No test framework exists.** Verification is `pnpm typecheck`, `pnpm format:check`, `pnpm build`, plus a Storybook visual review per task. Each task's "test" is a visual check of the Storybook story for that component.
- These are pure-CSS changes; `.tsx` files are not touched by any task.

---

### Task 1: Button — variant gaps

**Files:**
- Modify: `src/components/button/button.css:1-35` (base padding and gap) and append moon gap override after line 73

**Interfaces:**
- Consumes: nothing from earlier tasks
- Produces: `.otsukimi-button` padding `0 1.25em` (20px, Figma), gap 0.625em (10px) for default/transparent; `.otsukimi-button-moon` gap 0.3125em (5px). Focus structure (`.otsukimi-button:focus-visible` outline) unchanged.

- [ ] **Step 1: Change the base padding to 20px**

In `src/components/button/button.css`, change line 4:

```css
  padding: 0 1.75em;
```

to:

```css
  padding: 0 1.25em;
```

- [ ] **Step 2: Change the base gap**


In `src/components/button/button.css`, change line 13:

```css
  gap: 5px;
```

to:

```css
  gap: 0.625em;
```

- [ ] **Step 2: Add the Moon gap override**

After the `.otsukimi-button-moon svg { ... }` block (currently ends at line 73), append:

```css
.otsukimi-button-moon {
  gap: 0.3125em;
}
```

- [ ] **Step 3: Verify**

Run: `pnpm typecheck && pnpm format:check && pnpm build`
Expected: all succeed with no output other than build artifacts.

- [ ] **Step 4: Visual check**

Run `pnpm storybook`, open `Components/Button` → Default (10px gap) and Moon (5px gap) and Focus/MoonFocus stories; confirm focus rings still render and gaps differ per variant.

- [ ] **Step 5: Commit**

```bash
git add src/components/button/button.css
git commit -m "fix: Figma gaps for Button (default 10px, moon 5px)"
```

---

### Task 2: Input — keep 16px padding on focus

**Files:**
- Modify: `src/foundations/tokens.css:55-60` (shared `.otsukimi-field:focus-visible` rule)

**Interfaces:**
- Consumes: nothing
- Produces: inputs (Input, SearchBar) keep their own `padding: 0 1em` (16px) on focus instead of shifting to `0 0.9375em` (15px). The rule keeps border color token + shadow token.

- [ ] **Step 1: Remove the padding from the shared focus rule**

In `src/foundations/tokens.css`, change lines 55-60 from:

```css
.otsukimi-field:focus-visible {
  outline: none;
  border: 2px solid var(--otsukimi-color-brand-primary-deep);
  box-shadow: var(--otsukimi-shadow-sm);
  padding: 0 0.9375em;
}
```

to:

```css
.otsukimi-field:focus-visible {
  outline: none;
  border: 2px solid var(--otsukimi-color-brand-primary-deep);
  box-shadow: var(--otsukimi-shadow-sm);
}
```

`tokens.css` stays the source of truth for the border color and shadow; only the padding compensation line is removed so `.otsukimi-input`'s own `padding: 0 1em` holds on focus.

- [ ] **Step 2: Verify**

Run: `pnpm typecheck && pnpm format:check && pnpm build`
Expected: all succeed.

- [ ] **Step 3: Visual check**

Open `Components/Input` in Storybook; focus the input and confirm left/right padding stays 16px (no text jump).

- [ ] **Step 4: Commit**

```bash
git add src/foundations/tokens.css
git commit -m "fix: keep 16px input padding on focus"
```

---

### Task 3: SearchBar — gap 5px, input 320px

**Files:**
- Modify: `src/components/search-bar/search-bar.css:1-9` and `:11-16`

**Interfaces:**
- Consumes: Task 2 (input no longer shifts padding on focus)
- Produces: container gap 0.3125em (5px); input fixed `width: 20em` (320px) with `flex: 0 0 auto`. Total = 320px + 5px + 84px button = 409px container (unchanged).

- [ ] **Step 1: Change the container gap**

In `src/components/search-bar/search-bar.css`, change line 8:

```css
  gap: 4px;
```

to:

```css
  gap: 0.3125em;
```

- [ ] **Step 2: Fix the input width**

In `.otsukimi-search-bar-input`, change lines 12-13:

```css
  flex: 1;
  min-width: 0;
```

to:

```css
  flex: 0 0 auto;
  width: 20em;
```

- [ ] **Step 3: Verify**

Run: `pnpm typecheck && pnpm format:check && pnpm build`
Expected: all succeed.

- [ ] **Step 4: Visual check**

Open `Components/SearchBar` in Storybook; confirm input is 320px wide with 5px gap to the button.

- [ ] **Step 5: Commit**

```bash
git add src/components/search-bar/search-bar.css
git commit -m "fix: SearchBar gap 5px and 320px input per Figma"
```

---

### Task 4: Checkbox — Moon icon 22×20px

**Files:**
- Modify: `src/components/checkbox/checkbox.css:54-63` (box keeps 24×24, icon sized)

**Interfaces:**
- Consumes: nothing
- Produces: `.otsukimi-checkbox-moon .otsukimi-checkbox-icon` at `1.375em × 1.25em` (22×20px). Star icon and box untouched.

- [ ] **Step 1: Add the Moon icon size override**

In `src/components/checkbox/checkbox.css`, after the `.otsukimi-checkbox-input:checked + .otsukimi-checkbox-box svg { ... }` block (ends at line 63), append:

```css
.otsukimi-checkbox-moon .otsukimi-checkbox-icon {
  width: 1.375em;
  height: 1.25em;
}
```

The existing `.otsukimi-checkbox-box svg { width: 24px; height: 24px; }` base rule is left as-is; this rule is placed after it so the equal-specificity override wins by source order.

- [ ] **Step 2: Verify**

Run: `pnpm typecheck && pnpm format:check && pnpm build`
Expected: all succeed.

- [ ] **Step 3: Visual check**

Open `Components/Checkbox` → `MoonChecked`; confirm the moon icon renders at 22×20px inside the 24×24 box, and `StarChecked` still shows the 24px star.

- [ ] **Step 4: Commit**

```bash
git add src/components/checkbox/checkbox.css
git commit -m "fix: Moon checkbox icon 22x20px per Figma"
```

---

### Task 5: Link — remove underline

**Files:**
- Modify: `src/components/link/link.css:14-26`

**Interfaces:**
- Consumes: nothing
- Produces: plain (no underline) link; focus-visible outline and arrow icon color unchanged.

- [ ] **Step 1: Remove underline styles**

In `src/components/link/link.css`, change lines 14-26 from:

```css
  text-decoration: underline;
  text-decoration-color: var(--otsukimi-color-brand-primary);
  text-underline-offset: 4px;

  cursor: pointer;

  transition: text-decoration-color 0.15s ease;
}

.otsukimi-link:hover,
.otsukimi-link:focus-visible {
  text-decoration-color: var(--otsukimi-color-brand-primary-deep);
}
```

to:

```css
  cursor: pointer;
}
```

- [ ] **Step 2: Verify**

Run: `pnpm typecheck && pnpm format:check && pnpm build`
Expected: all succeed.

- [ ] **Step 3: Visual check**

Open `Components/Link` in Storybook; confirm no underline, arrow icon intact, keyboard focus shows the outline.

- [ ] **Step 4: Commit**

```bash
git add src/components/link/link.css
git commit -m "fix: remove underline from Link per Figma"
```

---

### Task 6: Accordion — header height 48px

**Files:**
- Modify: `src/components/accordion/accordion.css:6-33` (header only; content `1em 1.6875em` = 16px 27px already matches Figma, unchanged)

**Interfaces:**
- Consumes: nothing
- Produces: `.otsukimi-accordion-header` height `3em` (48px), padding `0 1em`, gap `0.625em` (10px).

- [ ] **Step 1: Fix the header height and gap**

In `src/components/accordion/accordion.css`, change line 8:

```css
  height: 2.4em;
```

to:

```css
  height: 3em;
```

and line 13:

```css
  gap: 10px;
```

to:

```css
  gap: 0.625em;
```

- [ ] **Step 2: Verify**

Run: `pnpm typecheck && pnpm format:check && pnpm build`
Expected: all succeed.

- [ ] **Step 3: Visual check**

Open `Components/Accordion` → `Open`; confirm 48px header height, chevron position, and content padding match Figma (content unchanged).

- [ ] **Step 4: Commit**

```bash
git add src/components/accordion/accordion.css
git commit -m "fix: Accordion header height 48px per Figma"
```

---

### Task 7: Divider — dashed 2px/2px

**Files:**
- Modify: `src/components/divider/divider.css:8-19`

**Interfaces:**
- Consumes: nothing
- Produces: dashed variant renders 2px dash / 2px gap. No `stardust` variant (cancelled by user).

- [ ] **Step 1: Tighten the dashed pattern**

In `src/components/divider/divider.css`, change lines 12-18 from:

```css
  background: repeating-linear-gradient(
    to right,
    var(--otsukimi-color-border-default) 0,
    var(--otsukimi-color-border-default) 4px,
    transparent 4px,
    transparent 8px
  );
```

to:

```css
  background: repeating-linear-gradient(
    to right,
    var(--otsukimi-color-border-default) 0,
    var(--otsukimi-color-border-default) 0.125em,
    transparent 0.125em,
    transparent 0.25em
  );
```

- [ ] **Step 2: Verify**

Run: `pnpm typecheck && pnpm format:check && pnpm build`
Expected: all succeed.

- [ ] **Step 3: Visual check**

Open `Components/Divider` → `Dashed`; confirm 2px dash / 2px gap.

- [ ] **Step 4: Commit**

```bash
git add src/components/divider/divider.css
git commit -m "fix: Divider dashed 2px/2px per Figma"
```

---

### Task 8: Card — Figma padding and internal spacing

**Files:**
- Modify: `src/components/card/card.css:1-11`

**Interfaces:**
- Consumes: nothing
- Produces: `.otsukimi-card` with `padding: 1.5em 1.75em` (24px 28px), `display: flex; flex-direction: column; gap: 0.5em` (8px). No fixed width/height.

- [ ] **Step 1: Apply Figma padding and internal spacing**

Change `src/components/card/card.css` from:

```css
.otsukimi-card {
  box-sizing: border-box;

  padding: 1.5em;

  border-radius: var(--otsukimi-radius-md);
  background: var(--otsukimi-color-bg-surface);
  box-shadow: var(--otsukimi-shadow-md);

  color: var(--otsukimi-color-text-primary);
}
```

to:

```css
.otsukimi-card {
  box-sizing: border-box;

  padding: 1.5em 1.75em;

  display: flex;
  flex-direction: column;
  gap: 0.5em;

  border-radius: var(--otsukimi-radius-md);
  background: var(--otsukimi-color-bg-surface);
  box-shadow: var(--otsukimi-shadow-md);

  color: var(--otsukimi-color-text-primary);
}
```

- [ ] **Step 2: Verify**

Run: `pnpm typecheck && pnpm format:check && pnpm build`
Expected: all succeed.

- [ ] **Step 3: Visual check**

Open `Components/Card` → `Default`; confirm 24/28px padding and 8px spacing between the stacked lines, and that the card is not a fixed 320×158 box.

- [ ] **Step 4: Commit**

```bash
git add src/components/card/card.css
git commit -m "fix: Card padding and internal spacing per Figma"
```

---

## Self-Review

**Spec coverage:**
- Button (padding 28px kept, default gap 10px, moon gap 5px, focus structure kept) → Task 1
- Input (16px padding on focus) → Task 2
- Checkbox (Moon icon 22×20px, box unchanged) → Task 4
- Link (underline removed) → Task 5
- SearchBar (gap 5px, input 320px) → Task 3
- Accordion (header 48px per Figma; content unchanged) → Task 6
- Divider (dashed 2px/2px; no stardust) → Task 7
- ListItem (no change — already matches Figma) → skipped
- Card (no fixed size; padding 24/28, gap 8, column flex) → Task 8
- RadioButton / Badge (no change) → skipped

**Placeholder scan:** No TODOs, no "add error handling", no vague steps. Every step has exact before/after code and commands.

**Type consistency:** CSS-only changes; no shared function signatures. `.otsukimi-checkbox-icon` class name matches `checkbox.tsx:25` (confirmed). `.otsukimi-field` is applied in `input.tsx:8` and `search-bar.tsx:48` (confirmed) — Task 2's tokens.css edit benefits both, which is intended.

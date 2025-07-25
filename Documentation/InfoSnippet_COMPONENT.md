# InfoSnippet Component Documentation

## Overview

The `InfoSnippet` component is a flexible, responsive, and theme-aware UI block designed for displaying project or case study information with text and visuals. It features a powerful floating Docker bar for live layout and style controls, and is built for easy reuse and future extension.

---

## Design & Features

- **Responsive Layout:**
  - 12-column grid on large screens, 6 on medium, 1 on mobile.
  - Text and visuals split by configurable columns.
  - Stacks vertically on mobile or when toggled.

- **Visuals (Canvas):**
  - Supports images, video, and embeds.
  - Canvas area always maintains a 16:9 aspect ratio.
  - Canvas can be placed left or right of text, or stacked below.

- **Text Area:**
  - Heading, subheading, and body fields.
  - Vertical alignment (top, middle, bottom) is user-controllable (except when stacked).
  - Heading font and size are set by global settings; subheading/body use the global body font.

- **Theming:**
  - Fully adapts to dark/light mode for all text, icons, and borders.
  - Uses CSS variables and Tailwind classes for theme-aware styling.

- **Docker Bar Controls:**
  - **Pointer Positioner:** Toggle crosshair overlay on canvas.
  - **Text Alignment:** Cycle text vertical alignment (top, middle, bottom).
  - **Canvas Placement:** Toggle canvas left/right of text.
  - **Stacking:** Toggle vertical/horizontal layout.
  - **Canvas Width:** Cycle through allowed column widths (4, 6, 8, 9).
  - **Show/Hide Controls:** Only the layout button is visible by default; others are hidden until toggled.
  - **Placement:** Docker is absolutely positioned at the bottom-right of the InfoSnippet section, and hidden on mobile screens.

- **Accessibility:**
  - All controls have `aria-label`s and are keyboard accessible.
  - Disabled state for controls when not applicable (e.g., text alignment when stacked).

---

## Code Structure

- **Component:** `components/InfoSnippet.tsx`
- **Docker Bar:** Rendered in `app/page.tsx`, passes control state as props to `InfoSnippet`.
- **Icons:** All Docker icons are React components in `components/icons/` and use `currentColor` for theme adaptation.
- **Global Fonts:** Uses CSS variables (`--font-bodoni`, `--font-manrope`) from `public/GlobalSettings.ts` for heading/body fonts.

---

## Usage Example

```
<InfoSnippet
  snippet={snippet}
  pointerMode={pointerMode}
  canvasLeft={canvasLeft}
  stacked={stacked}
  textAlign={textAlign}
/>
```

- `snippet`: The content object (heading, subheading, body, visuals, layout).
- `pointerMode`: Enables pointer crosshair overlay on canvas.
- `canvasLeft`: If true, canvas is left of text; otherwise, right.
- `stacked`: If true, text and canvas are stacked vertically.
- `textAlign`: 'top' | 'middle' | 'bottom' (vertical alignment of text column).

---

## Responsive & Theming Constraints

- **Hidden on Mobile:** Docker bar is hidden on screens `< md`.
- **Theme Adaptation:** All text, icons, and borders adapt to dark/light mode.
- **Font Sizing:** Heading (32px), subheading (20px), body (inherits global size).
- **Font Family:** Always uses global settings for heading/body.

---

## Layout Defaults

- `layout.canvasLeft` (default: `false`): Visuals appear on the right by default. Set to `true` to place visuals on the left.
- `layout.stacked` (default: `false`): Visuals and text are side-by-side (row) by default. Set to `true` to stack them vertically.

You can override these per-snippet in your content file as needed.

---

## Maintenance & Future Use

- **Extensible:**
  - Add new Docker controls by creating new icon components and updating state/props.
  - Visuals can be extended to support more types (e.g., Lottie, custom embeds).
- **Portable:**
  - All icons are in `components/icons/` for easy reuse.
  - Docker logic is in `app/page.tsx` for separation of concerns.
- **Constraints:**
  - Each InfoSnippet instance manages its own Docker bar and controls independently.
  - Multiple InfoSnippet components (and Dockers) can be used on the same page.
  - Docker is desktop-only by design; add a mobile alternative if needed.
  - All font and color changes should be made via `public/GlobalSettings.ts`.

---

## Integration & Usage
- The `InfoSnippet` component is used in conjunction with the `ProjectSlider` for dynamic case study display. Each InfoSnippet instance is independently controlled, and multiple can exist on a page.
- When a project card is clicked in the slider, the page automatically scrolls to the revealed InfoSnippet section for improved user experience.

---

## To Do / Future Ideas
- Add tooltips to Docker controls for better UX.
- Animate Docker open/close button.
- Add mobile-friendly controls or summary view.
- Support more flexible aspect ratios for canvas.
- Allow per-snippet override of default fonts/colors if needed. 
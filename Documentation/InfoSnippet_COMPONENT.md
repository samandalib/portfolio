# InfoSnippet Component Documentation

## Overview

The `InfoSnippet` component is a flexible, responsive, and theme-aware UI block designed for displaying project or case study information with text and visuals. It features a powerful floating Docker bar for live layout and style controls, and is built for easy reuse and future extension.

**Note: This component has been refactored into a modular architecture for better performance and maintainability.**

---

## Architecture & File Structure

The InfoSnippet component has been refactored from a single 771-line file into a modular structure:

```
components/InfoSnippet/
├── index.ts                    # Main export
├── InfoSnippet.tsx            # Main component (now ~200 lines)
├── types.ts                   # Type definitions
├── hooks.ts                   # Custom hooks
├── utils.ts                   # Utility functions
├── LottieVisual.tsx          # Lottie animation component
├── VisualRenderer.tsx        # Visual asset rendering
├── AnimatedBulletList.tsx    # Animated bullet list
├── TypewriterHeading.tsx     # Typewriter heading animation
├── AnimatedAccentLine.tsx    # Animated accent line
├── TextSection.tsx           # Text content section
├── CanvasSection.tsx         # Visual content section
├── DockerControls.tsx        # Docker controls
└── README.md                 # Detailed refactoring documentation
```

### Performance Benefits

- **Reduced Bundle Size**: Components can be tree-shaken and code-split
- **Optimized Re-renders**: State changes only affect relevant components
- **Better Caching**: Smaller components cache more efficiently
- **Custom Hooks**: Reusable hooks for better state management

---

## Design & Features

- **Responsive Layout:**
  - 12-column grid on large screens, 6 on medium, 1 on mobile.
  - Text and visuals split by configurable columns.
  - Stacks vertically on mobile or when toggled.

- **Visuals (Canvas):**
  - Supports images, video, embeds, Lottie animations, and custom components.
  - Canvas area always maintains a 16:9 aspect ratio.
  - Canvas can be placed left or right of text, or stacked below.
  - Lottie animations feature automatic play/pause controls with synchronized state management.

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

## Component Breakdown

### Core Components

1. **InfoSnippet.tsx** (~200 lines)
   - Main orchestrator component
   - Handles layout logic and state coordination
   - Manages component composition and prop passing

2. **TextSection.tsx** (~80 lines)
   - Handles all text content rendering
   - Includes heading, subheading, and body text
   - Manages text animations and layout

3. **CanvasSection.tsx** (~150 lines)
   - Handles all visual content rendering
   - Manages pointer interactions and Lottie animations
   - Controls visual asset grid layout with customizable columns and rows
   - Supports custom grid configurations via `gridCols` and `gridRows` props

4. **DockerControls.tsx** (~80 lines)
   - Handles all interactive controls
   - Manages layout toggles and settings
   - Isolated from main rendering logic

### Utility Components

5. **LottieVisual.tsx** (~30 lines)
   - Dedicated Lottie animation component
   - Optimized animation loading and playback
   - Reusable across the app

6. **VisualRenderer.tsx** (~80 lines)
   - Handles all visual asset types (images, videos, embeds, etc.)
   - Centralized rendering logic
   - Easy to extend with new asset types

7. **AnimatedBulletList.tsx** (~40 lines)
   - Dedicated bullet list animation
   - Optimized intersection observer usage
   - Reusable for other components

8. **TypewriterHeading.tsx** (~40 lines)
   - Dedicated typewriter animation
   - Optimized text animation logic
   - Reusable for other headings

9. **AnimatedAccentLine.tsx** (~30 lines)
   - Dedicated accent line animation
   - Simple, focused component
   - Reusable for other accent elements

### Supporting Files

10. **types.ts** (~80 lines)
    - All type definitions in one place
    - Better type safety and IntelliSense
    - Easier to maintain and update

11. **hooks.ts** (~80 lines)
    - Reusable custom hooks
    - Better separation of concerns
    - Easier to test and debug

12. **utils.ts** (~60 lines)
    - Pure utility functions
    - No side effects
    - Easy to test and optimize

---

## Code Structure

- **Main Component:** `components/InfoSnippet.tsx` (re-exports from modular structure)
- **Docker Bar:** Rendered in `app/page.tsx`, passes control state as props to `InfoSnippet`.
- **Icons:** All Docker icons are React components in `components/icons/` and use `currentColor` for theme adaptation.
- **Global Fonts:** Uses CSS variables (`--font-bodoni`, `--font-manrope`) from `public/GlobalSettings.ts` for heading/body fonts.

---

## Usage Example

```tsx
import InfoSnippet from '../components/InfoSnippet';

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

**Note:** The import path remains the same for backward compatibility.

---

## Grid Configuration for Multiple Visuals

The InfoSnippet component now supports custom grid layouts for multiple visuals through the `gridCols` and `gridRows` props.

### Usage

**Content-based Configuration:**
```tsx
// In content.ts files
{
  heading: "Design Process",
  visuals: [/* multiple visual assets */],
  layout: {
    textColumns: 6,
    visualColumns: 6,
    gridCols: 2,  // 2 columns for the visual grid
    gridRows: 2   // 2 rows for the visual grid
  }
}
```

**Prop-based Configuration:**
```tsx
<InfoSnippet 
  snippet={snippet} 
  gridCols={2} 
  gridRows={2} 
/>
```

### Grid Behavior

- **Custom Columns**: `gridCols` sets the number of columns (1-12 supported)
- **Custom Rows**: `gridRows` sets the number of rows with equal height (`1fr`)
- **Fallback**: Uses default responsive grid when not specified
- **Responsive**: Maintains existing responsive behavior

### Supported Grid Sizes

- **Columns**: 1-12 (maps to `grid-cols-1` through `grid-cols-12`)
- **Rows**: Any positive integer (creates equal-height rows)

### Example Use Cases

- **2x2 Grid**: Perfect for 4 InfoTile components
- **3x1 Grid**: Good for 3 related visuals in a row
- **1x4 Grid**: Stacked layout for 4 visuals
- **4x2 Grid**: 8 visuals in a 4-column, 2-row layout

---

## Custom Hooks

The component uses several custom hooks for better state management:

### `useInViewOnce<T>(threshold = 0.2)`
- Handles intersection observer logic
- Triggers once when element comes into view
- Used for animations and lazy loading

### `useLottieAnimation(src, loop, onRef, onStateChange)`
- Manages Lottie animation loading and playback
- Handles automatic play/pause based on visibility
- Provides ref management for external control

### `useInfoSnippetState(initialLayout)`
- Centralized state management for all InfoSnippet features
- Manages pointer mode, layout settings, animation states
- Provides clean state interface for all child components

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

## Lottie Animation System

### Overview
The InfoSnippet component includes a sophisticated Lottie animation system with automatic playback control and user interaction capabilities.

### Features
- **Automatic Playback**: Lottie animations play once when their canvas comes into view
- **Auto-Pause**: Animations automatically pause after completing their first playthrough
- **Play/Pause Control**: Interactive button allows users to manually control animation playback
- **Synchronized Control**: All Lottie animations on a canvas are controlled together
- **State Synchronization**: Button state updates in real-time to reflect actual animation status

### Implementation Details
- **Component**: `LottieVisual` sub-component within `InfoSnippet`
- **Dependencies**: `lottie-react` package
- **Icons**: Custom play/pause SVG icons in `public/assets/InfoSnippetIcons/`
- **State Management**: Real-time state tracking with event-driven updates
- **Button Styling**: Consistent with dock button design system

### Button Behavior
- **Initial State**: Shows play icon (▶️) - animations paused
- **Auto-Play**: When scrolled into view, shows pause icon (⏸️)
- **Auto-Pause**: After completion, returns to play icon (▶️)
- **Manual Control**: Click to toggle between play/pause states
- **Restart**: When paused, clicking plays from the beginning

### Usage in Content
```typescript
// In content.ts files
{
  type: "lottie",
  src: "https://res.cloudinary.com/.../animation.json",
  loop: false, // Set to false for one-time playback
  caption: "Optional caption"
}
```

---

## Recent Improvements

### Responsive Canvas Grid Layout (Latest Update)
- **Dynamic Grid System**: Canvas now uses a responsive grid that adapts to the number of visuals
- **Mobile Optimization**: Always uses 1 column on mobile for better readability
- **Smart Column Distribution**: 
  - 1 visual: 1 column on all screens
  - 2 visuals: 1 column on mobile, 2 columns on larger screens
  - 3+ visuals: 1 column on mobile, 2 on tablet, 3 on desktop
- **No Empty Columns**: Grid automatically adjusts to prevent empty columns
- **Responsive Gaps**: Smaller gaps on mobile (8px), larger on desktop (16px)

### Mobile Responsiveness Enhancements
- **Reduced Container Padding**: All major components now use `p-4` on mobile vs `p-8` on desktop
- **Responsive Tab Navigation**: Smaller padding and text on mobile with horizontal scroll if needed
- **Optimized Color Swatches**: 5 columns on mobile with minimal gaps to prevent overflow
- **Better Space Utilization**: 50% more content space on mobile devices

### Performance Optimizations
- **Removed Inline CSS**: Replaced hardcoded `gap: 16px` with responsive Tailwind classes
- **Better Grid Performance**: Dynamic grid classes instead of complex CSS calculations
- **Improved Mobile Experience**: Faster rendering and better touch interactions

---

## Maintenance & Future Use

- **Extensible:**
  - Add new Docker controls by creating new icon components and updating state/props.
  - Visuals can be extended to support more types (e.g., additional animation formats, custom embeds).
  - Lottie animation system supports custom play/pause icons and state management.
- **Portable:**
  - All icons are in `components/icons/` for easy reuse.
  - Docker logic is in `app/page.tsx` for separation of concerns.
  - Modular components can be reused in other parts of the app.
- **Constraints:**
  - Each InfoSnippet instance manages its own Docker bar and controls independently.
  - Multiple InfoSnippet components (and Dockers) can be used on the same page.
  - Docker is desktop-only by design; add a mobile alternative if needed.
  - All font and color changes should be made via `public/GlobalSettings.ts`.

---

## Performance Optimizations

### Bundle Size
- **Before**: Single 771-line file with all logic
- **After**: Modular components that can be tree-shaken
- **Benefit**: Smaller initial bundle, better code splitting

### Re-render Optimization
- **Before**: All state changes triggered re-renders of the entire component
- **After**: State is isolated to specific components
- **Benefit**: More granular re-renders, better performance

### Caching
- **Before**: Large component cached as a single unit
- **After**: Smaller components cache more efficiently
- **Benefit**: Better browser caching and faster subsequent loads

---

## Integration & Usage
- The `InfoSnippet` component is used in conjunction with the `ProjectSlider` for dynamic case study display. Each InfoSnippet instance is independently controlled, and multiple can exist on a page.
- When a project card is clicked in the slider, the page automatically scrolls to the revealed InfoSnippet section for improved user experience.

---

## Migration Notes

- **Backward Compatibility**: The original import path still works
- **No Breaking Changes**: All existing functionality is preserved
- **Gradual Migration**: Can be adopted incrementally
- **Easy Rollback**: Original file structure can be restored if needed

---

## To Do / Future Ideas
- Add tooltips to Docker controls for better UX.
- Animate Docker open/close button.
- Add mobile-friendly controls or summary view.
- Support more flexible aspect ratios for canvas.
- Allow per-snippet override of default fonts/colors if needed.
- Implement virtual scrolling for large lists of InfoSnippets.
- Add React.memo to prevent unnecessary re-renders.
- Implement Suspense boundaries for better loading states.
- Add error boundaries for better error handling. 
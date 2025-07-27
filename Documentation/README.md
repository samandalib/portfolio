This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Font Automation

Font imports are managed automatically. To change which fonts are loaded and available in the app, edit the `defaultFonts` and `fontPresets` properties in `public/GlobalSettings.ts`. The watcher will keep `app/fonts.ts` in sync with these settings.

## Asset Hosting

All images and visual assets are now hosted on Cloudinary (or a similar external service). Reference the full external URL in your content files (e.g., `landing-content.ts`). The sync-content script will use these URLs for downstream usage. Local asset files in `public/assets/` are not required unless you need them for offline or fallback purposes.

## Feature Overview

- The `InfoSnippet` component displays project/case study information with a responsive layout and a floating Docker bar for live controls. Each instance is independent and theme-aware.
- The `ProjectSlider` is linked to case studies: clicking a card reveals the corresponding InfoSnippet section(s) and scrolls to them automatically.
- Case study content is managed in TypeScript files (e.g., `public/assets/case studies/project1/content.ts`) and rendered dynamically. To add a new case study, add a new content file and update the case studies array in `app/page.tsx`.

## Lottie Animation System

### Overview
The project includes a sophisticated Lottie animation system with automatic playback control and user interaction capabilities.

### Features
- **Automatic Playback**: Lottie animations play once when their canvas comes into view
- **Auto-Pause**: Animations automatically pause after completing their first playthrough
- **Play/Pause Control**: Interactive button allows users to manually control animation playback
- **Synchronized Control**: All Lottie animations on a canvas are controlled together
- **State Synchronization**: Button state updates in real-time to reflect actual animation status

### Implementation
- **Component**: `LottieVisual` in `components/InfoSnippet.tsx`
- **Dependencies**: `lottie-react` package
- **Icons**: Custom play/pause SVG icons in `public/assets/InfoSnippetIcons/`
- **State Management**: Real-time state tracking with event-driven updates

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

### Button Behavior
- **Initial State**: Shows play icon (▶️) - animations paused
- **Auto-Play**: When scrolled into view, shows pause icon (⏸️)
- **Auto-Pause**: After completion, returns to play icon (▶️)
- **Manual Control**: Click to toggle between play/pause states
- **Restart**: When paused, clicking plays from the beginning

## DesignSystemSpecs Component

### Overview
A comprehensive design system specification component that displays colors, typography, and dimensions in an organized tabbed interface.

### Features
- **Color Palette**: Full color swatches with tooltips showing hex codes
- **Surface Colors**: Light and dark mode surface and on-surface color displays
- **Typography**: Font examples with proper font family rendering
- **Dimensions**: Visual representation of spacing and corner radius values
- **Tabbed Interface**: Organized content with smooth transitions
- **Dark Mode Support**: Consistent styling across light and dark themes

### Implementation
- **Component**: `DesignSystemSpecs` in `components/DesignSystemSpecs.tsx`
- **Fonts**: Integrates with project's font system (Bricolage Grotesque, Manrope)
- **Styling**: Uses project's design tokens and utility classes
- **Responsive**: Adapts to different screen sizes

### Usage in Content
```typescript
// In content.ts files
{
  type: "component",
  src: "design-system-specs",
  componentName: "DesignSystemSpecs"
}
```

## ProjectDetailsDisplay Component

### Overview
Enhanced project details display with domain labels, skill pills, and improved visual hierarchy.

### Features
- **Domain Label**: Vertical accent line with domain text
- **Project Details**: Pill-shaped tags with tooltips for keys
- **Skills Section**: Organized skill pills with consistent styling
- **Accent Color Integration**: Uses project's accent color system
- **Responsive Design**: Adapts to different screen sizes

### Styling
- **Pills**: Accent-colored borders with semi-transparent fills
- **Typography**: Uses project's font system
- **Spacing**: Consistent with design system
- **Dark Mode**: Full dark mode support

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

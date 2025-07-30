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
- The `ProjectSlider` is linked to case studies: clicking a card navigates to a dedicated case study page at `/case-study/[slug]`.
- Case study content is managed in TypeScript files (e.g., `public/assets/case studies/project1/content.ts`) and rendered dynamically on dedicated pages.
- **Case Study Pages**: Individual case studies are now served via dynamic routes with consistent layout structure (AccentDock, ProjectDetailsDisplay, InfoSnippets).
- **Navigation**: Project cards navigate to dedicated pages instead of revealing sections on the landing page, providing better SEO and user experience.
- **Grid Configuration**: InfoSnippet supports custom grid layouts with `gridCols` and `gridRows` properties for precise visual arrangement.

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

## InfoTile Component

### Overview
A simple, reusable card component that displays an icon, heading, and body text. Designed to be used as a visual in InfoSnippet components and other parts of the application.

### Features
- **Flexible Icon Support**: Accepts React components, string identifiers, or URL-based SVGs
- **Customizable Styling**: Multiple color schemes, sizes, and effects
- **Consistent Design**: Matches the styling patterns of ProjectStats component
- **Dark Mode Support**: Fully compatible with the application's dark mode
- **Responsive Design**: Adapts to different screen sizes
- **All Props Optional**: Can be used with just an icon, just text, or any combination
- **Animated Border**: Optional animated border with accent color trim path animation

### Implementation
- **Component**: `InfoTile` in `components/InfoTile/InfoTile.tsx`
- **Fixed Dimensions**: 320px width × 260px height (1.23:1 aspect ratio)
- **Styling**: Uses project's design tokens and utility classes
- **Integration**: Works with VisualRenderer for InfoSnippet components
- **Border Animation**: 20-second cycle with 10-second pause and 10-second drawing animation

### Usage in Content
```typescript
// In content.ts files
{
  type: "component",
  src: "info-tile",
  componentName: "InfoTile",
  componentProps: {
    icon: "chart",
    heading: "Interaction Analysis",
    body: "Novel method to compare design efficiency against legacy systems",
    color: "blue"
  }
}
```

## ProjectStats Component

### Overview
A statistics display component that shows key metrics and data points. Designed for displaying business statistics, project metrics, and performance indicators.

### Features
- **Multiple Layouts**: Grid, Cards, Combined, and ComboStats layouts
- **Animated Numbers**: Optional animated counting effect for numerical values
- **Color Coding**: Support for different color schemes (blue, purple, green, orange, indigo, accent)
- **Responsive Design**: Adapts to different screen sizes
- **Dark Mode Support**: Fully compatible with the application's dark mode

### Implementation
- **Component**: `SimpleProjectStats` in `components/ProjectStats/SimpleProjectStats.tsx`
- **Layouts**: 
  - `grid`: Standard grid layout for multiple stats
  - `cards`: Card-based layout
  - `combined`: Combined layout for mixed content
  - `ComboStats`: Specialized business layout with corporate operations and authorized network sections
- **Animation**: Built-in `AnimatedNumber` component for counting animations

### Usage in Content
```typescript
// In content.ts files
{
  type: "component",
  src: "project-stats",
  componentName: "ProjectStats",
  componentProps: {
    title: "Market Leadership",
    subtitle: "Powering retail excellence through strategic operations",
    stats: [
      {
        value: 28,
        label: "Billion Revenue",
        color: "blue",
        prefix: "$",
        suffix: "B",
        animateValue: true
      }
    ],
    layout: "ComboStats"
  }
}
```

## ProjectSlider Navigation System

### Overview
The ProjectSlider component features a comprehensive navigation system that supports multiple input methods with intelligent interaction patterns.

### Features
- **Multi-Input Support**: Trackpad gestures, touch swipes, mouse drag, and keyboard navigation
- **Intelligent Interaction**: Two-step interaction for background cards, one-step for front cards
- **Visual Feedback**: Accent ring indicates when a card is ready to be opened
- **Accessibility**: Full keyboard navigation support with arrow keys
- **Sensitivity Control**: Configurable thresholds for different input methods

### Navigation Methods
- **Trackpad**: Horizontal scroll with 200px accumulated delta threshold
- **Touch**: Swipe gestures with 50px threshold for mobile/tablet devices
- **Mouse**: Click and drag with 50px threshold for desktop users
- **Keyboard**: Left/Right arrow keys for accessibility
- **Click**: Background cards → bring to front, front cards → open project

### Interaction Patterns
- **Background Cards**: First click brings to front, second click opens project
- **Front-facing Cards**: Single click opens project immediately
- **Visual Feedback**: Accent ring appears on front cards that were just brought to front
- **State Management**: Resets interaction state when using other navigation methods

### Implementation
- **Gesture System**: Enhanced `useTouchGestures` hook with keyboard support
- **Interaction Logic**: Smart click handling in ProjectSlider component
- **Visual Feedback**: Accent ring styling with dynamic accent color integration
- **Event Handling**: Proper `passive: false` configuration for wheel events
  componentProps: {
    icon: "chart",
    heading: "Revenue Growth",
    body: "Increased revenue by 25% through improved UX design.",
    color: "blue"
  }
}
```

## Grid Configuration System

### Overview
The InfoSnippet component now supports custom grid layouts for multiple visuals through configurable columns and rows.

### Features
- **Custom Grid Layouts**: Specify exact number of columns and rows
- **Content-based Configuration**: Set grid layout in content files
- **Prop-based Configuration**: Override grid layout via component props
- **Responsive Design**: Maintains existing responsive behavior
- **Backward Compatible**: Existing content works without changes

### Implementation
- **CanvasSection**: Enhanced with `gridCols` and `gridRows` props
- **Tailwind Integration**: Uses explicit grid classes for reliable CSS generation
- **Content Interface**: Updated InfoSnippet interface in all content files
- **Fallback System**: Uses default responsive grid when not specified

### Usage Examples
```typescript
// Content-based configuration
{
  heading: "Design Process",
  visuals: [/* multiple visual assets */],
  layout: {
    textColumns: 6,
    visualColumns: 6,
    gridCols: 2,  // 2 columns
    gridRows: 2   // 2 rows
  }
}

// Prop-based configuration
<InfoSnippet 
  snippet={snippet} 
  gridCols={2} 
  gridRows={2} 
/>
```

### Supported Grid Sizes
- **Columns**: 1-12 (maps to `grid-cols-1` through `grid-cols-12`)
- **Rows**: Any positive integer (creates equal-height rows)

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

## ResearchSynthesis Component

### Overview
A comprehensive research presentation component that displays research findings, methodologies, testimonials, and insights in a structured, visually appealing format.

### Features
- **Research Process Display**: Step-by-step process visualization with numbered indicators
- **Statistics Dashboard**: Interview counts and duration metrics with icons
- **User Testimonials**: Quote-based testimonials with author information
- **Key Findings**: Categorized findings with impact indicators and evidence
- **Research Methods**: Detailed methodology cards with participant counts
- **Key Takeaways**: Highlighted main insights and conclusions
- **Recommendations**: Actionable recommendations with visual indicators
- **Theme-Aware**: Full light/dark mode support with consistent color schemes

### Implementation
- **Component**: `ResearchSynthesis` in `components/ResearchSynthesis/ResearchSynthesis.tsx`
- **Content Separation**: Supports dedicated `ResearchContent.ts` files for content management
- **Styling**: Uses project's theme color system and typography
- **Animations**: Smooth entrance animations with staggered delays

### Usage in Content
```typescript
// In content.ts files
{
  type: "component",
  src: "research-synthesis",
  componentName: "ResearchSynthesis",
  componentProps: researchContent // Imported from ResearchContent.ts
}
```

### Content Separation
The component supports content separation through dedicated content files:
```typescript
// public/assets/case studies/project1/ResearchContent.ts
import { ResearchSynthesisProps } from '../../../../components/ResearchSynthesis/ResearchSynthesis';

export const researchContent: ResearchSynthesisProps = {
  title: "From casual conversations to structured interviews",
  subtitle: "Key insights from user interviews and behavioral analysis",
  processSteps: ["Step 1", "Step 2", "Step 3"],
  stats: { interviews: 21, duration: "60-80" },
  testimonials: [{ quote: "...", author: "Name", age: 30 }],
  keyTakeaway: "Main insight from research"
};
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

# ProjectSlider Component Documentation

## Overview

The `ProjectSlider` component is a sophisticated card-based navigation system that displays project cards with multiple layout options. It includes both an original fan layout and an experimental grid layout, with a switcher component to toggle between them.

---

## Features

### Core Functionality
- **Multiple Layouts**: Fan layout (original) and grid layout (experimental)
- **Easy Switching**: Toggle between layouts with ProjectSliderSwitcher
- **Touch Gestures**: Full touch and mouse support for swiping between cards
- **Navigation Dots**: Click-to-navigate functionality for jumping to any card
- **Card Clicking**: Click front card to open case study, click background cards to bring to front
- **Responsive Design**: Adapts to different screen sizes
- **Theme Support**: Adapts to light/dark mode

### Visual Design
- **Fan Layout**: Cards arranged in a 3D fan with depth and perspective
- **Grid Layout**: Clean 2x2 responsive grid showing all projects at once
- **Smooth Animations**: Framer Motion-powered transitions between cards
- **Hover Effects**: Interactive hover states for better UX

### Integration
- **Case Study Routing**: Links to `/case-study/[slug]` pages
- **Content Management**: Uses TypeScript content files for project data
- **Theme Support**: Adapts to light/dark mode

---

## Component Architecture

### File Structure
```
components/
├── ProjectSlider/                    # Original fan layout
│   ├── index.ts                     # Main export
│   ├── ProjectSlider.tsx            # Main component
│   ├── SingleProjectSlider.tsx      # Single card component
│   ├── types.ts                     # Type definitions
│   ├── hooks/
│   │   ├── useProjectNavigation.ts  # Navigation logic
│   │   └── useTouchGestures.ts      # Touch/mouse handling
│   ├── components/
│   │   ├── CardFan.tsx              # 3D fan layout
│   │   ├── ProjectCard.tsx          # Individual card
│   │   └── NavigationDots.tsx       # Dot navigation
│   └── utils/
│       └── transformCalculations.ts # Layout calculations
├── ProjectSliderExperimental/       # Experimental grid layout
│   ├── index.ts                     # Main export
│   ├── ProjectSlider.tsx            # Grid layout component
│   ├── SingleProjectSlider.tsx      # Single project slider
│   ├── types.ts                     # Type definitions
│   ├── components/
│   │   ├── ProjectCard.tsx          # Grid card component
│   │   ├── GridLayout.tsx           # 2x2 grid layout
│   │   ├── CardFan.tsx              # Original fan layout (preserved)
│   │   └── NavigationDots.tsx       # Navigation dots (preserved)
│   ├── hooks/
│   │   ├── useProjectNavigation.ts
│   │   └── useTouchGestures.ts
│   └── utils/
│       └── transformCalculations.ts
├── ProjectSliderSwitcher.tsx        # Layout switcher component
└── ProjectSliderWrapper.tsx         # Wrapper for easy switching
```

### Key Components

1. **ProjectSlider.tsx** (Original)
   - Main orchestrator component for fan layout
   - Handles navigation state and touch gestures
   - Manages card interactions and routing

2. **ProjectSlider.tsx** (Experimental)
   - Grid layout implementation
   - Simplified navigation (direct click)
   - Always visible content

3. **ProjectSliderSwitcher.tsx**
   - Toggle between fan and grid layouts
   - Visual feedback for active layout
   - Accessible design with proper ARIA labels

4. **ProjectSliderWrapper.tsx**
   - Wrapper component for easy version switching
   - Manages state between original and experimental versions

---

## Usage

### Basic Implementation

#### Using the Switcher (Recommended)
```tsx
import ProjectSliderSwitcher from '../components/ProjectSliderSwitcher';

// Shows both slider and toggle switch
<ProjectSliderSwitcher />
```

#### Using the Wrapper
```tsx
import ProjectSliderWrapper from '../components/ProjectSliderWrapper';

// Use original (fan layout)
<ProjectSliderWrapper />

// Use experimental (grid layout)
<ProjectSliderWrapper useExperimental={true} />
```

#### Direct Import
```tsx
// Original fan layout
import ProjectSlider from '../components/ProjectSlider';
<ProjectSlider />

// Experimental grid layout
import ExperimentalProjectSlider from '../components/ProjectSliderExperimental';
<ExperimentalProjectSlider />
```

### Content Structure
Projects are defined in `public/assets/landing/project-slider-cards.ts`:

```typescript
export const projectSliderCards: ProjectSliderCard[] = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description",
    image: "https://example.com/image.jpg",
    slug: "project-slug",
    tags: ["tag1", "tag2"],
    color: "from-blue-500 to-purple-600"
  }
];
```

---

## Layout Comparison

### Fan Layout (Original)

#### Features
- **3D Fan Arrangement**: Cards positioned in a 3D fan with depth and perspective
- **Bounded Navigation**: No infinite looping - users must swipe in opposite direction to navigate back
- **Touch Gestures**: Full touch and mouse support for swiping between cards
- **Navigation Dots**: Click-to-navigate functionality for jumping to any card
- **Card Clicking**: Click front card to open case study, click background cards to bring to front

#### Navigation Behavior
- **First Card**: Swiping left stays on first card
- **Last Card**: Swiping right stays on last card
- **Middle Cards**: Normal navigation works as before
- **Navigation Dots**: Still work normally for jumping to any card

#### Implementation
```typescript
// In useProjectNavigation.ts
const nextProject = () => {
  setCurrentIndex((prev) => {
    // Don't go beyond the last project
    if (prev >= totalProjects - 1) {
      return prev;
    }
    return prev + 1;
  });
};

const prevProject = () => {
  setCurrentIndex((prev) => {
    // Don't go before the first project
    if (prev <= 0) {
      return prev;
    }
    return prev - 1;
  });
};
```

#### User Experience Benefits
- **No Accidental Skipping**: Users can't accidentally jump from last to first card
- **Clear Boundaries**: Visual feedback when reaching navigation limits
- **Intuitive Flow**: Natural back-and-forth navigation pattern
- **Predictable Behavior**: Consistent with most modern carousel implementations

### Grid Layout (Experimental)

#### Features
- **2x2 Grid Display**: Projects displayed in a responsive 2x2 grid
- **Always Visible Content**: Card content is always visible (no hover required)
- **Direct Navigation**: Click any card to navigate directly to the case study
- **Responsive Design**: Single column on mobile, 2 columns on larger screens
- **Simplified Interaction**: No complex animations or navigation dots needed

#### Visual Design
- **Clean Layout**: Organized grid showing all projects at once
- **Square Cards**: Maintains aspect ratio for consistent appearance
- **Hover Effects**: Subtle scale animation on hover
- **Glass Effect**: Consistent with original design language

#### Interaction
- **Direct Click**: Click any card to navigate to case study
- **No Navigation**: All projects visible simultaneously
- **Responsive**: Adapts to different screen sizes
- **Accessible**: Proper focus and keyboard navigation

#### Content Display
- **Always Visible**: Project titles, descriptions, and tags always shown
- **Gradient Overlay**: Ensures text readability over images
- **Consistent Styling**: Matches original design system

---

## ProjectSliderSwitcher Component

### Overview
A component that provides an easy way to switch between the original and experimental versions of the ProjectSlider.

### Features
- **Easy Switching**: Toggle between original and experimental versions with a single click
- **Visual Feedback**: Clear indication of which version is currently active
- **Accessible**: Proper ARIA labels and keyboard navigation
- **Theme Aware**: Adapts to light/dark mode
- **Informative**: Shows helpful text about each version

### Usage
```tsx
import ProjectSliderSwitcher from '../components/ProjectSliderSwitcher';

<ProjectSliderSwitcher />
```

### Customization
```tsx
import ProjectSliderToggle from '../components/ProjectSliderToggle';

const [useExperimental, setUseExperimental] = useState(false);

<ProjectSliderToggle
  useExperimental={useExperimental}
  onToggle={setUseExperimental}
  showLabel={true} // or false for compact version
  className="custom-class"
/>
```

---

## Navigation Events

### Fan Layout
- **Swipe Right**: Navigate to next project (bounded)
- **Swipe Left**: Navigate to previous project (bounded)
- **Click Front Card**: Open case study page
- **Click Background Card**: Bring card to front
- **Click Navigation Dot**: Jump to specific project

### Grid Layout
- **Click Any Card**: Navigate directly to case study
- **Hover**: Subtle scale animation
- **Keyboard Navigation**: Tab through cards

---

## Recent Updates

### Navigation Enhancement (Latest)
- **Problem**: Infinite loop navigation was confusing
- **Solution**: Implemented bounded navigation with boundary checks
- **Result**: More intuitive user experience with clear navigation limits

### Grid Layout Implementation
- **2x2 Grid**: Projects displayed in responsive grid layout
- **Always Visible Content**: No hover required to see project details
- **Simplified Navigation**: Direct click navigation
- **Mobile Responsive**: Single column on mobile, 2 columns on larger screens

### SingleProjectSlider Component
- **Custom Content**: Support for custom titles, descriptions, and images
- **Direct Links**: External URL navigation via `href` prop
- **Flexible Styling**: Custom colors and always-visible content options
- **Tag Control**: Optional tag display for cleaner design

---

## Technical Details

### Dependencies
- **Framer Motion**: For smooth animations and transitions
- **Next.js Router**: For case study navigation
- **TypeScript**: For type safety and development experience

### Performance
- **Optimized Animations**: Hardware-accelerated transforms
- **Efficient Re-renders**: Minimal state updates
- **Touch Optimization**: Responsive gesture handling

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels and descriptions
- **Focus Management**: Logical tab order and focus indicators

---

## Making Changes

### Experimental Development
1. **Edit the experimental version** in `components/ProjectSliderExperimental/`
2. **Test your changes** by setting `useExperimental={true}` in the wrapper
3. **Keep the original intact** for easy rollback
4. **When satisfied**, you can either:
   - Replace the original with the experimental version
   - Keep both versions for different use cases
   - Merge specific features from experimental into original

### Rollback
To rollback to the original version, simply use:
```tsx
<ProjectSliderWrapper useExperimental={false} />
```

Or import the original directly:
```tsx
import OriginalProjectSlider from '../components/ProjectSlider';
```

---

## Future Enhancements

### Potential Improvements
- **Auto-play**: Optional automatic card rotation
- **Keyboard Shortcuts**: Arrow key navigation
- **Gesture Customization**: Configurable swipe thresholds
- **Animation Variants**: Multiple animation styles
- **Loading States**: Better loading indicators
- **Different Grid Layouts**: 3x2, 4x1, etc.
- **Alternative Card Designs**: New visual styles
- **New Interaction Patterns**: Different navigation methods

### Integration Opportunities
- **Analytics**: Track navigation patterns
- **A/B Testing**: Different navigation behaviors
- **Performance Monitoring**: Animation performance tracking

---

## Troubleshooting

### Common Issues

1. **Layout Not Switching**
   - Ensure ProjectSliderSwitcher is properly imported
   - Check that both versions are available
   - Verify state management is working

2. **Navigation Issues**
   - Check touch gesture thresholds
   - Verify navigation bounds are set correctly
   - Ensure proper event handling

3. **Styling Problems**
   - Verify Tailwind CSS is properly configured
   - Check for CSS conflicts
   - Ensure theme variables are defined

### Debug Mode
To debug the component, check the browser console for any errors and verify that all props are being passed correctly.

---

## Related Components

- **InfoSnippet**: Parent component that may contain project sliders
- **CaseStudyFooter**: Footer component for case study pages
- **AccentDock**: Theme and accent color management
- **ThemeToggle**: Dark/light theme switching

---

*Last updated: December 2024* 
# ProjectSlider Component Documentation

## Overview

The `ProjectSlider` component is a sophisticated card-based navigation system that displays project cards in a fan layout with touch/swipe gestures and bounded navigation. It's designed to showcase case studies with smooth animations and intuitive user interactions.

---

## Features

### Navigation System
- **Bounded Navigation**: No infinite looping - users must swipe in opposite direction to navigate back
- **Touch Gestures**: Full touch and mouse support for swiping between cards
- **Navigation Dots**: Click-to-navigate functionality for jumping to any card
- **Card Clicking**: Click front card to open case study, click background cards to bring to front

### Visual Design
- **Fan Layout**: Cards arranged in a 3D fan with depth and perspective
- **Smooth Animations**: Framer Motion-powered transitions between cards
- **Responsive Design**: Adapts to different screen sizes
- **Hover Effects**: Interactive hover states for better UX

### Integration
- **Case Study Routing**: Links to `/case-study/[slug]` pages
- **Content Management**: Uses TypeScript content files for project data
- **Theme Support**: Adapts to light/dark mode

---

## Navigation Behavior

### Bounded Navigation (Updated)
The ProjectSlider now uses bounded navigation instead of infinite looping:

- **First Card**: Swiping left stays on first card
- **Last Card**: Swiping right stays on last card
- **Middle Cards**: Normal navigation works as before
- **Navigation Dots**: Still work normally for jumping to any card

### Implementation
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

### User Experience Benefits
- **No Accidental Skipping**: Users can't accidentally jump from last to first card
- **Clear Boundaries**: Visual feedback when reaching navigation limits
- **Intuitive Flow**: Natural back-and-forth navigation pattern
- **Predictable Behavior**: Consistent with most modern carousel implementations

---

## Component Architecture

### File Structure
```
components/ProjectSlider/
├── index.ts                    # Main export
├── ProjectSlider.tsx           # Main component
├── SingleProjectSlider.tsx     # Single card component
├── types.ts                    # Type definitions
├── hooks/
│   ├── useProjectNavigation.ts # Navigation logic
│   └── useTouchGestures.ts     # Touch/mouse handling
├── components/
│   ├── CardFan.tsx            # 3D fan layout
│   ├── ProjectCard.tsx        # Individual card
│   └── NavigationDots.tsx     # Dot navigation
└── utils/
    └── transformCalculations.ts # Layout calculations
```

### Key Components

1. **ProjectSlider.tsx** (~69 lines)
   - Main orchestrator component
   - Handles navigation state and touch gestures
   - Manages card interactions and routing

2. **useProjectNavigation.ts** (~24 lines)
   - Navigation state management
   - Bounded navigation logic
   - Project index tracking

3. **useTouchGestures.ts**
   - Touch and mouse gesture handling
   - Swipe detection and threshold management
   - Gesture state management

4. **CardFan.tsx**
   - 3D fan layout implementation
   - Card positioning and animations
   - Depth and perspective effects

---

## Usage

### Basic Implementation
```typescript
import ProjectSlider from '../components/ProjectSlider';

// In your component
<ProjectSlider />
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

### Navigation Events
- **Swipe Right**: Navigate to next project (bounded)
- **Swipe Left**: Navigate to previous project (bounded)
- **Click Front Card**: Open case study page
- **Click Background Card**: Bring card to front
- **Click Navigation Dot**: Jump to specific project

---

## Recent Updates

### Navigation Enhancement (Latest)
- **Problem**: Infinite loop navigation was confusing
- **Solution**: Implemented bounded navigation with boundary checks
- **Result**: More intuitive user experience with clear navigation limits

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

## Future Enhancements

### Potential Improvements
- **Auto-play**: Optional automatic card rotation
- **Keyboard Shortcuts**: Arrow key navigation
- **Gesture Customization**: Configurable swipe thresholds
- **Animation Variants**: Multiple animation styles
- **Loading States**: Better loading indicators

### Integration Opportunities
- **Analytics**: Track navigation patterns
- **A/B Testing**: Different navigation behaviors
- **Performance Monitoring**: Animation performance tracking 
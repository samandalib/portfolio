# ProjectSlider Experimental

This is an experimental copy of the ProjectSlider component for iteration and experimentation. The original ProjectSlider remains intact and can be swapped back at any time.

## Current Experimental Features

### Grid Layout (Latest)
- **2x2 Grid Display**: Projects are now displayed in a responsive 2x2 grid instead of the fan layout
- **Always Visible Content**: Card content is always visible (no hover required)
- **Direct Navigation**: Click any card to navigate directly to the case study
- **Responsive Design**: Single column on mobile, 2 columns on larger screens
- **Simplified Interaction**: No complex animations or navigation dots needed

## Structure

```
components/ProjectSliderExperimental/
├── README.md                 # This file
├── index.ts                  # Main export
├── ProjectSlider.tsx         # Main component (updated for grid layout)
├── SingleProjectSlider.tsx   # Single project slider (copy of original)
├── types.ts                  # Type definitions (updated)
├── components/               # Sub-components
│   ├── ProjectCard.tsx       # Project card component (updated for grid)
│   ├── GridLayout.tsx        # NEW: 2x2 grid layout
│   ├── CardFan.tsx          # Original fan layout (preserved)
│   └── NavigationDots.tsx   # Navigation dots (preserved)
├── hooks/                    # Custom hooks
│   ├── useProjectNavigation.ts
│   └── useTouchGestures.ts
└── utils/                    # Utility functions
    └── transformCalculations.ts
```

## Usage

### Option 1: Use the Wrapper Component
```tsx
import ProjectSliderWrapper from '../components/ProjectSliderWrapper';

// Use original (fan layout)
<ProjectSliderWrapper />

// Use experimental (grid layout)
<ProjectSliderWrapper useExperimental={true} />
```

### Option 2: Import Directly
```tsx
import ExperimentalProjectSlider from '../components/ProjectSliderExperimental';

<ExperimentalProjectSlider />
```

## Grid Layout Features

### Visual Design
- **2x2 Grid**: Clean, organized layout showing all projects at once
- **Square Cards**: Maintains aspect ratio for consistent appearance
- **Hover Effects**: Subtle scale animation on hover
- **Glass Effect**: Consistent with original design language

### Interaction
- **Direct Click**: Click any card to navigate to case study
- **No Navigation**: All projects visible simultaneously
- **Responsive**: Adapts to different screen sizes
- **Accessible**: Proper focus and keyboard navigation

### Content Display
- **Always Visible**: Project titles, descriptions, and tags always shown
- **Gradient Overlay**: Ensures text readability over images
- **Consistent Styling**: Matches original design system

## Making Changes

1. **Edit the experimental version** in `components/ProjectSliderExperimental/`
2. **Test your changes** by setting `useExperimental={true}` in the wrapper
3. **Keep the original intact** for easy rollback
4. **When satisfied**, you can either:
   - Replace the original with the experimental version
   - Keep both versions for different use cases
   - Merge specific features from experimental into original

## Current Status

- ✅ **Grid Layout**: 2x2 responsive grid implementation
- ✅ **Simplified Navigation**: Direct click navigation
- ✅ **Always Visible Content**: No hover required
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Original Version Preserved**: Fan layout remains untouched
- ✅ **Easy Switching**: Toggle between versions with wrapper

## Experimentation Ideas

- Different grid layouts (3x2, 4x1, etc.)
- Alternative card designs
- New interaction patterns
- Different visual styles
- Performance optimizations
- Accessibility improvements
- Animation variations

## Rollback

To rollback to the original version, simply use:
```tsx
<ProjectSliderWrapper useExperimental={false} />
```

Or import the original directly:
```tsx
import OriginalProjectSlider from '../components/ProjectSlider';
``` 
# CaseStudyFooter Component

## Overview

The `CaseStudyFooter` component is a reusable footer designed specifically for case study pages. It provides navigation functionality and branding while maintaining consistency across all case study pages.

## Features

- **Back to Top** - Smooth scroll to page top
- **Next Project Navigation** - Links to the next case study in sequence
- **Brand Logo** - Links back to the landing page
- **Responsive Design** - Adapts to different screen sizes
- **Theme Support** - Works with both light and dark themes
- **Accessibility** - Proper semantic markup and keyboard navigation

## Usage

### Basic Implementation

```tsx
import CaseStudyFooter from '../components/CaseStudyFooter';

// In your case study content.ts file
{
  visuals: [
    {
      type: "component",
      src: "case-study-footer",
      componentName: "CaseStudyFooter",
      componentProps: {
        nextProject: {
          title: "Next Project Title",
          slug: "next-project-slug"
        }
      }
    }
  ],
  layout: { textColumns: 12, visualColumns: 0, stacked: true }
}
```

### Props Interface

```tsx
interface CaseStudyFooterProps {
  nextProject?: {
    title: string;  // Display name of the next project
    slug: string;   // URL slug for navigation
  };
}
```

## Component Structure

### HTML Structure

```html
<footer class="w-full border-t border-gray-200/50 dark:border-gray-700/50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm mt-16">
  <div class="max-w-6xl mx-auto px-8 py-12">
    <!-- Navigation Section -->
    <div class="flex flex-col sm:flex-row justify-between items-start gap-6">
      <!-- Back to Top Button -->
      <button class="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300 group">
        <svg>...</svg>
        <span class="font-medium">Back to Top</span>
      </button>
      
      <!-- Next Project Link -->
      <a class="flex flex-col items-end gap-0.5 text-accent hover:text-accent/80 transition-colors duration-300 group" href="/case-study/[slug]">
        <div class="flex items-center gap-1">
          <span class="font-medium">Next Project</span>
          <svg>...</svg>
        </div>
        <span class="text-sm opacity-80">Project Title</span>
      </a>
    </div>
    
    <!-- Logo Section -->
    <div class="flex justify-center mt-8">
      <a class="opacity-60 hover:opacity-80 transition-opacity duration-300" href="/">
        <svg>...</svg>
      </a>
    </div>
  </div>
</footer>
```

## Styling

### Design System Integration

- **Colors**: Uses accent color for interactive elements
- **Typography**: Follows the project's font system (Manrope)
- **Spacing**: Consistent with the overall design system
- **Borders**: Subtle top border with theme-aware colors
- **Background**: Semi-transparent backdrop with blur effect

### Responsive Behavior

- **Mobile**: Stacked layout with centered alignment
- **Tablet/Desktop**: Side-by-side layout with top alignment
- **Logo**: Centered and responsive across all screen sizes

### Theme Support

- **Light Theme**: Light backgrounds with dark text
- **Dark Theme**: Dark backgrounds with light text
- **Accent Color**: Consistent across both themes

## Navigation Flow

### Case Study Sequence

1. **VO2Max** → **AT&T Retail POS Redesign** (`attpos`)
2. **AT&T Retail POS Redesign** → **VR Interior Design Tool** (`vr`)
3. **VR Interior Design Tool** → **Road265** (`Road265`)
4. **Road265** → **VO2Max** (`vo2max`)

### Link Destinations

- **Back to Top**: Smooth scroll to `window.scrollTo({ top: 0, behavior: 'smooth' })`
- **Next Project**: Navigates to `/case-study/[slug]`
- **Logo**: Navigates to `/` (landing page)

## Implementation Details

### File Location

```
components/
└── CaseStudyFooter.tsx
```

### Dependencies

- **React**: Core component framework
- **Next.js**: Link component for navigation
- **Tailwind CSS**: Styling system

### Key Functions

```tsx
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
```

## Integration with InfoSnippet

The footer is integrated into case studies through the `InfoSnippet` component system:

1. **Component Type**: `"component"`
2. **Component Name**: `"CaseStudyFooter"`
3. **Layout**: Full-width with no visual columns (`textColumns: 12, visualColumns: 0`)
4. **Stacked**: `true` for full-width display

## Accessibility Features

- **Semantic HTML**: Uses `<footer>` element
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Proper ARIA labels and semantic structure
- **Focus Management**: Visible focus indicators
- **Color Contrast**: Meets WCAG guidelines

## Recent Updates

### Version History

- **v1.0.0**: Initial implementation with basic navigation
- **v1.1.0**: Added logo linking to landing page
- **v1.2.0**: Implemented top alignment for navigation buttons
- **v1.3.0**: Removed bottom margin for better page integration

### Latest Changes

- ✅ **Top-aligned navigation** - Both "Back to Top" and "Next Project" are now aligned to the top
- ✅ **Linked logo** - Logo now navigates to the landing page (`/`)
- ✅ **Removed bottom margin** - Footer integrates seamlessly with page content
- ✅ **Responsive design** - Works across all device sizes

## Future Enhancements

### Potential Improvements

- **Previous Project** - Add navigation to the previous case study
- **Breadcrumbs** - Show current position in case study sequence
- **Social Links** - Include social media links
- **Contact Info** - Add contact information or email link
- **Share Functionality** - Add social sharing buttons

### Technical Considerations

- **Performance**: Lightweight component with minimal dependencies
- **SEO**: Proper semantic markup for search engines
- **Analytics**: Ready for tracking navigation interactions
- **Internationalization**: Prepared for multi-language support

## Troubleshooting

### Common Issues

1. **Next Project Not Showing**
   - Ensure `nextProject` prop is passed correctly
   - Check that `title` and `slug` are defined

2. **Logo Not Displaying**
   - Verify SVG path is correct
   - Check theme compatibility

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check for CSS conflicts

### Debug Mode

To debug the component, check the browser console for any errors and verify that all props are being passed correctly.

## Related Components

- **InfoSnippet**: Parent component that renders the footer
- **ProjectSlider**: Landing page component for project navigation
- **AccentDock**: Theme and accent color management
- **ThemeToggle**: Dark/light theme switching

---

*Last updated: December 2024* 
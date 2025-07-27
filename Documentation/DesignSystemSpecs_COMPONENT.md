# DesignSystemSpecs Component Documentation

## Overview

The `DesignSystemSpecs` component is a comprehensive design system specification display that showcases colors, typography, and dimensions in an organized tabbed interface. It's designed to be used as a visual asset within InfoSnippets to demonstrate design system specifications.

---

## Features

### Color Palette Display
- **Full Color Palette**: Grid of color swatches with tooltips showing hex codes
- **Surface Colors**: Light and dark mode surface and on-surface color displays
- **Interactive Swatches**: Hover tooltips with color names and hex values
- **Organized Layout**: Colors grouped by category with consistent spacing

### Typography Examples
- **Font Rendering**: Uses actual project fonts (Bricolage Grotesque, Manrope)
- **Size Examples**: Visual representation of different font sizes and weights
- **Sample Text**: "The quick brown fox jumps over the lazy dog" for each typography style
- **Font Integration**: Properly imports and applies project font families

### Dimensions Visualization
- **Corner Radius**: Visual squares showing different border radius values
- **Spacing**: Line thickness representation of spacing values
- **Interactive Elements**: Visual demonstrations of design tokens

### Tabbed Interface
- **Organized Content**: Three main tabs: Colors, Typography, Dimensions
- **Smooth Transitions**: Framer Motion animations for tab switching
- **Responsive Design**: Adapts to different screen sizes
- **Dark Mode Support**: Consistent styling across light and dark themes

---

## Implementation

### Component Structure
- **File**: `components/DesignSystemSpecs.tsx`
- **Type**: Client Component (`"use client"`)
- **Dependencies**: 
  - `framer-motion` for animations
  - `next/font/google` for font imports
  - Project's design system tokens

### Key Components
- **ColorSwatch**: Individual color display with tooltip
- **Tab System**: Custom tab implementation with smooth transitions
- **Typography Examples**: Dynamic font rendering based on specifications
- **Dimension Visuals**: Interactive spacing and radius demonstrations

### Styling System
- **Design Tokens**: Uses project's CSS variables and Tailwind utilities
- **Modern Classes**: `modern-border-radius`, `modern-shadow`, `glass-effect`
- **Responsive**: Mobile-first design with responsive breakpoints
- **Theme Support**: Full dark/light mode compatibility

---

## Usage

### In Content Files
```typescript
// In content.ts files
{
  type: "component",
  src: "design-system-specs",
  componentName: "DesignSystemSpecs"
}
```

### Component Props
```typescript
interface DesignSystemSpecsProps {
  title?: string; // Optional custom title
}
```

### Default Data
The component uses built-in design system data including:
- **Color Palette**: Grays, greens, purples, blues, yellows, reds
- **Typography**: Title, Body Large, Body Medium, Body Small, etc.
- **Dimensions**: Corner radius and spacing values

---

## Design System Integration

### Font System
- **Bricolage Grotesque**: Used for headings and display text
- **Manrope**: Used for body text and UI elements
- **Dynamic Loading**: Fonts imported via `next/font/google`
- **CSS Variables**: Uses `--font-bricolage_grotesque` and `--font-manrope`

### Color System
- **Accent Colors**: Integrates with project's accent color system
- **Surface Colors**: Light and dark mode surface variations
- **Tooltip System**: Hover interactions for color information
- **Accessibility**: Proper contrast ratios and color naming

### Spacing System
- **Consistent Values**: Uses project's spacing scale
- **Visual Representation**: Line thickness shows actual spacing values
- **Interactive**: Demonstrates spacing in context

---

## Customization

### Adding New Colors
```typescript
// In the component's color data
const colorPalette = {
  newCategory: [
    {
      name: "Color Name",
      hex: "#HEXCODE",
      rgb: "R, G, B"
    }
  ]
};
```

### Adding New Typography
```typescript
// In the component's typography data
const typography = [
  {
    name: "New Style",
    font: "Font Family",
    size: "fontSize/lineHeight",
    weight: "Font Weight"
  }
];
```

### Modifying Dimensions
```typescript
// Update corner radius or spacing values
const dimensions = {
  cornerRadius: [
    { name: "new", value: "8px" }
  ],
  spacing: [
    { name: "new", value: "16px" }
  ]
};
```

---

## Technical Details

### Performance
- **Lazy Loading**: Fonts loaded efficiently via Next.js font optimization
- **Animation Performance**: Framer Motion optimizations for smooth transitions
- **Bundle Size**: Minimal impact on overall application size

### Accessibility
- **Keyboard Navigation**: Full keyboard support for tab switching
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Meets WCAG guidelines for text contrast
- **Focus Management**: Clear focus indicators and logical tab order

### Browser Support
- **Modern Browsers**: Full support for CSS Grid, Flexbox, and modern features
- **Fallbacks**: Graceful degradation for older browsers
- **Mobile**: Optimized for touch interactions and mobile viewports

---

## Future Enhancements

### Planned Features
- **Export Functionality**: Generate design system documentation
- **Interactive Editing**: Live editing of design tokens
- **Code Generation**: Generate CSS/SCSS from specifications
- **Version Control**: Track changes to design system over time

### Extension Points
- **Custom Data Sources**: Load specifications from external APIs
- **Theme Variations**: Support for multiple theme configurations
- **Component Library**: Generate component examples from specifications
- **Integration**: Connect with design tools and style guides

---

## Maintenance

### Updates
- **Design Tokens**: Update color, typography, and spacing values as needed
- **Font Management**: Add new fonts through the project's font system
- **Component Styling**: Maintain consistency with project's design system
- **Documentation**: Keep specifications up to date with actual implementation

### Best Practices
- **Consistency**: Ensure all specifications match actual implementation
- **Testing**: Verify accessibility and cross-browser compatibility
- **Performance**: Monitor bundle size and loading performance
- **User Feedback**: Gather feedback on usability and clarity 
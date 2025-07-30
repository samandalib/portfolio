# InfoTile Component

A simple, reusable card component that displays an icon, heading, and body text. Designed to be used as a visual in InfoSnippet components and other parts of the application.

## Features

- **Flexible Icon Support**: Accepts React components or string identifiers
- **Customizable Styling**: Multiple color schemes, sizes, and effects
- **Consistent Design**: Matches the styling patterns of ProjectStats component
- **Dark Mode Support**: Fully compatible with the application's dark mode
- **Responsive Design**: Adapts to different screen sizes

## Usage

### Basic Usage

```tsx
import InfoTile from '@/components/InfoTile';

<InfoTile
  icon="chart"
  heading="Revenue Growth"
  body="Increased revenue by 25% through improved user experience design."
  color="blue"
/>

// Minimal usage with just an icon
<InfoTile icon="star" />

// With just heading and body
<InfoTile 
  heading="Simple Card" 
  body="This is a simple info tile." 
/>
```

### As InfoSnippet Visual

```tsx
// In content.ts
{
  heading: "Key Metrics",
  body: "Our design improvements led to significant business outcomes.",
  visuals: [
    {
      type: "component",
      src: "info-tile",
      componentName: "InfoTile",
      componentProps: {
        icon: "chart",
        heading: "Revenue Growth",
        body: "Increased revenue by 25% through improved user experience design.",
        color: "blue"
      }
    }
  ],
  layout: { textColumns: 6, visualColumns: 6, stacked: false }
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ReactNode \| string` | `undefined` | Icon to display (React component or string identifier) |
| `heading` | `string` | `undefined` | Main heading text |
| `body` | `string` | `undefined` | Body text content |
| `color` | `'blue' \| 'purple' \| 'green' \| 'orange' \| 'indigo' \| 'accent'` | `'accent'` | Color scheme for the icon |
| `className` | `string` | `''` | Additional CSS classes |
| `iconSize` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the icon |
| `headingSize` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'lg'` | Size of the heading text |
| `bodySize` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the body text |
| `showBorder` | `boolean` | `true` | Whether to show the card border |
| `showShadow` | `boolean` | `true` | Whether to show the card shadow |
| `hoverEffect` | `boolean` | `true` | Whether to show hover effects |

## Color Schemes

The component supports the same color schemes as ProjectStats:

- **blue**: Blue theme with blue-500 background
- **purple**: Purple theme with purple-500 background
- **green**: Green theme with green-500 background
- **orange**: Orange theme with orange-500 background
- **indigo**: Indigo theme with indigo-500 background
- **accent**: Uses the application's accent color

## Size Options

### Icon Sizes
- **sm**: 32px × 32px (w-8 h-8)
- **md**: 40px × 40px (w-10 h-10)
- **lg**: 48px × 48px (w-12 h-12)

### Heading Sizes
- **sm**: text-lg
- **md**: text-xl
- **lg**: text-2xl
- **xl**: text-3xl

### Body Sizes
- **sm**: text-sm
- **md**: text-base
- **lg**: text-lg

## Styling

The component uses the same styling patterns as ProjectStats:

- **Background**: White in light mode, gray-900 in dark mode
- **Border**: Subtle border with opacity
- **Shadow**: Consistent shadow system
- **Typography**: Uses font-heading for headings and text-sans for body
- **Colors**: Follows the application's color system
- **Hover Effects**: Subtle lift and shadow increase on hover
- **SVG Icons**: Use accent color (`text-accent`) for React component icons
- **String Icons**: Use colored backgrounds with white rectangles (matching ProjectStats)

## Examples

### Multiple InfoTiles in a Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <InfoTile
    icon="users"
    heading="User Satisfaction"
    body="95% of users reported improved satisfaction with the new interface."
    color="green"
  />
  <InfoTile
    icon="clock"
    heading="Training Time"
    body="Reduced training time by 40% through intuitive design."
    color="blue"
  />
  <InfoTile
    icon="chart"
    heading="Error Reduction"
    body="Decreased user errors by 60% with better visual feedback."
    color="purple"
  />
</div>
```

### Custom Styling

```tsx
<InfoTile
  icon="star"
  heading="Premium Feature"
  body="This feature is available for premium users only."
  color="orange"
  iconSize="lg"
  headingSize="xl"
  bodySize="lg"
  className="border-2 border-orange-200"
  hoverEffect={false}
/>
```

## Integration with InfoSnippet

To use InfoTile as a visual in InfoSnippet components, add it to the VisualRenderer:

```tsx
// In VisualRenderer.tsx
import InfoTile from '../InfoTile/InfoTile';

// Add to the component mapping
if (ComponentName === "InfoTile") {
  return <InfoTile {...asset.componentProps} />;
}
```

## Grid Layout Integration

InfoTile components work seamlessly with the new grid configuration system:

```tsx
// In content.ts
{
  heading: "Design Process",
  visuals: [
    {
      type: "component",
      componentName: "InfoTile",
      componentProps: {
        icon: "chart",
        heading: "Revenue Growth",
        body: "Increased revenue by 25%",
        color: "blue"
      }
    },
    // ... more InfoTile components
  ],
  layout: {
    textColumns: 6,
    visualColumns: 6,
    gridCols: 2,  // 2 columns
    gridRows: 2   // 2 rows
  }
}
```

This creates a perfect 2x2 grid layout for 4 InfoTile components. 
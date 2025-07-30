# ProjectStats Component

A flexible, reusable component for displaying project statistics with animations and multiple layout options.

## Features

- **Multiple Layouts**: Grid, Cards, and Combined layouts
- **Animated Numbers**: Optional counting animations
- **Theme Support**: Full dark/light mode support
- **Responsive Design**: Mobile-first responsive grid
- **Customizable Colors**: Predefined color schemes or accent color
- **Staggered Animations**: Cards animate in with delays

## Usage

### Basic Usage

```tsx
import ProjectStats from '@/components/ProjectStats';

const stats = [
  {
    icon: "DollarSign",
    value: 28,
    label: "Billion Revenue",
    description: "Corporate retail operations",
    color: "blue",
    prefix: "$",
    suffix: "B",
    animateValue: true
  },
  {
    icon: "Store",
    value: 1509,
    label: "Stores",
    description: "Direct retail network",
    color: "purple",
    animateValue: true
  },
  {
    icon: "Users",
    value: 19000,
    label: "Employees",
    description: "Corporate workforce",
    color: "green",
    animateValue: true
  }
];

<ProjectStats
  title="Market Leadership"
  subtitle="Powering retail excellence through strategic operations"
  stats={stats}
  layout="grid"
/>
```

### Different Layouts

#### Grid Layout (Default)
```tsx
<ProjectStats
  stats={stats}
  layout="grid"
/>
```

#### Cards Layout
```tsx
<ProjectStats
  stats={stats}
  layout="cards"
/>
```

#### Combined Layout
```tsx
<ProjectStats
  stats={stats}
  layout="combined"
/>
```

### Without Header
```tsx
<ProjectStats
  stats={stats}
  showHeader={false}
/>
```

## Props

### ProjectStatsProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Optional title for the stats section |
| `subtitle` | `string` | - | Optional subtitle |
| `stats` | `StatCardProps[]` | - | Array of stat objects |
| `layout` | `'grid' \| 'cards' \| 'combined'` | `'grid'` | Layout type |
| `showHeader` | `boolean` | `true` | Whether to show title/subtitle |
| `className` | `string` | `''` | Additional CSS classes |

### StatCardProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ReactNode \| string` | - | Icon component or string name |
| `value` | `string \| number` | - | Stat value |
| `label` | `string` | - | Stat label |
| `description` | `string` | - | Optional description |
| `color` | `'blue' \| 'purple' \| 'green' \| 'orange' \| 'indigo' \| 'accent'` | `'accent'` | Color theme |
| `delay` | `number` | `0` | Animation delay in ms |
| `prefix` | `string` | `''` | Value prefix (e.g., "$") |
| `suffix` | `string` | `''` | Value suffix (e.g., "B") |
| `animateValue` | `boolean` | `false` | Whether to animate the number |
| `animationDuration` | `number` | `2000` | Animation duration in ms |

## Color Schemes

The component supports predefined color schemes:

- `blue` - Blue theme
- `purple` - Purple theme  
- `green` - Green theme
- `orange` - Orange theme
- `indigo` - Indigo theme
- `accent` - Uses project's accent color (default)

## Supported Icons

When using string-based icons, the component supports these Lucide React icons:

- `Building2`, `Store`, `Users`, `DollarSign`, `Network`, `TrendingUp`
- `ShoppingCart`, `CreditCard`, `Smartphone`, `Wifi`, `Shield`
- `Star`, `Award`, `Target`, `Zap`, `Globe`, `Home`
- `Briefcase`, `Heart`, `Settings`

You can also pass React components directly for custom icons.

## Styling

The component uses the project's design system:

- **Fonts**: `font-heading` for titles, `font-sans` for body text
- **Colors**: Theme-aware with `text-foreground-light dark:text-foreground-dark`
- **Shadows**: Uses project's shadow system
- **Border Radius**: `rounded-2xl` for cards
- **Spacing**: Consistent with project's spacing scale

## Integration with InfoSnippet

To use as a visual in InfoSnippet:

```tsx
// In content.ts files
{
  type: "component",
  src: "project-stats",
  componentName: "ProjectStats",
  componentProps: {
    title: "Market Leadership",
    stats: [
      // ... stat objects
    ]
  }
}
```

## Performance

- **Lazy Loading**: Components are loaded on demand
- **Optimized Animations**: Uses `requestAnimationFrame` for smooth animations
- **Minimal Re-renders**: Efficient state management
- **Tree Shaking**: Unused code can be eliminated 
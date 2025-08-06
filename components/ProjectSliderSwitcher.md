# ProjectSliderSwitcher Component

A component that provides an easy way to switch between the original and experimental versions of the ProjectSlider.

## Features

- **Easy Switching**: Toggle between original and experimental versions with a single click
- **Visual Feedback**: Clear indication of which version is currently active
- **Accessible**: Proper ARIA labels and keyboard navigation
- **Theme Aware**: Adapts to light/dark mode
- **Informative**: Shows helpful text about each version

## Usage

### Basic Usage
```tsx
import ProjectSliderSwitcher from '../components/ProjectSliderSwitcher';

<ProjectSliderSwitcher />
```

### Components Included

1. **ProjectSliderSwitcher** - Main component with slider and toggle
2. **ProjectSliderToggle** - Reusable toggle component
3. **ProjectSliderWrapper** - Wrapper that manages version switching

## How It Works

1. **Default State**: Shows the original ProjectSlider
2. **Toggle**: Click the toggle switch to switch between versions
3. **State Management**: Uses React state to track which version is active
4. **Instant Switch**: Changes are applied immediately without page reload

## Version Information

### Original Version
- **Status**: Stable and tested
- **Features**: All existing functionality
- **Use Case**: Production-ready, reliable experience

### Experimental Version
- **Status**: For iteration and testing
- **Features**: New features and layouts being developed
- **Use Case**: Testing new ideas and improvements

## Customization

### Using ProjectSliderToggle Separately
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

### Using ProjectSliderWrapper Directly
```tsx
import ProjectSliderWrapper from '../components/ProjectSliderWrapper';

<ProjectSliderWrapper useExperimental={true} />
```

## Accessibility

- **ARIA Labels**: Proper labels for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Clear focus indicators
- **Role Attributes**: Proper semantic roles

## Styling

The component uses Tailwind CSS classes and adapts to:
- **Light/Dark Mode**: Automatic theme switching
- **Accent Colors**: Uses CSS variables for consistent theming
- **Responsive Design**: Works on all screen sizes 
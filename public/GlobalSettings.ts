// NOTE: Any changes to this file (fonts, colors, presets) are automatically picked up by the watcher and font sync scripts.
// Font imports and content will be updated in the background and reflected in your app after a refresh or rebuild.
// THEME COLOR SYNC: Any changes to theme color values here are now automatically synced to CSS variables in app/globals.css via scripts/sync-theme-colors.js, which runs before every build.

export const GlobalSettings = {
  accentColors: [
    '#16A34A', // green
    '#A21CAF', // purple
    '#F59E42', // orange
    '#3B82F6', // blue
    //'#E11D48', // pink/red
    
  ],
  defaultAccentColor: '#16A34A', // green
  themeColors: {
    background: {
      light: '#fafafa',
      dark: '#0c0c0c',
    },
    foreground: {
      light: '#0f0f0f',
      dark: '#f5f5f5',
    },
    accent: {
      light: '#16A34A',
      dark: '#16A34A',
    },
  },
  defaultTheme: 'dark', // or 'light'
  fonts: {
    heading: 'Bodoni Moda', // via --font-bodoni
    body: 'Manrope',   // via --font-manrope
    tailwind: {
      heading: "font-heading",
      sans: "font-sans"
    },
    cssVars: {
      heading: 'var(--font-bodoni)',
      sans: 'var(--font-manrope)'
    }
  },
  defaultFonts: {
    heading: 'Bodoni Moda',
    body: 'Manrope'
  },
  fontSize: {
    body: 'var(--body-font-size, 16px)'
  },
  fontPresets: [
    // Optionally add 'weight' (or headingWeight/bodyWeight) to control Google Fonts import weights
    { label: "Serif", heading: "Bodoni Moda, Roboto Serif", body: "Bodoni Moda, Roboto Serif", icon: "serif.svg", weight: 400 },
    { label: "Sans", heading: "Manrope, Roboto", body: "Manrope, Roboto", icon: "sans.svg", weight: 400 },
    { label: "Retro", heading: "IBM Plex Mono", body: "IBM Plex Mono", icon: "retro.svg", weight: 400 },
    { label: "Handwriting", heading: "Dancing Script, cursive", body: "Caveat, cursive", icon: "handwriting.svg", weight: 400 },
    { label: "Combo", heading: "Bodoni Moda, Roboto Serif", body: "Manrope, Roboto", icon: "combo.svg", weight: 400 }
  ]
}; 
// NOTE: Any changes to this file (fonts, colors, presets) are automatically picked up by the watcher and font sync scripts.
// Font imports and content will be updated in the background and reflected in your app after a refresh or rebuild.

export const GlobalSettings = {
  accentColors: [
    '#16A34A', // green
    '#F59E42', // orange
    //'#3B82F6', // blue
    '#E11D48', // pink/red
    //'#A21CAF', // purple
  ],
  defaultAccentColor: '#16A34A', // green
  themeColors: {
    background: {
      light: '#f7f7f7',
      dark: '#262626',
      cssLight: '#ffffff', // from globals.css :root
      cssDark: '#0a0a0a',  // from globals.css @media dark
    },
    foreground: {
      light: '#222222',
      dark: '#ffffff',
      cssLight: '#171717', // from globals.css :root
      cssDark: '#ededed',  // from globals.css @media dark
    },
    accent: {
      light: '#16A34A',
      dark: '#16A34A',
    },
  },
  defaultTheme: 'light', // or 'dark'
  fonts: {
    heading: 'Bodoni Moda, serif', // via --font-bodoni
    body: 'Manrope, sans-serif',   // via --font-manrope
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
    heading: 'Bodoni Moda, serif',
    body: 'Manrope, sans-serif'
  },
  fontSize: {
    body: 'var(--body-font-size, 15px)'
  },
  fontPresets: [
    // Optionally add 'weight' (or headingWeight/bodyWeight) to control Google Fonts import weights
    { label: "Serif", heading: "'Bodoni Moda', serif", body: "'Bodoni Moda', serif", icon: "serif.svg", weight: 400 },
    { label: "Sans", heading: "'Manrope', sans-serif", body: "'Manrope', sans-serif", icon: "sans.svg", weight: 400 },
    { label: "Retro", heading: "'Courier New', monospace", body: "'Courier New', monospace", icon: "retro.svg", weight: 400 },
    { label: "Handwriting", heading: "'Rock Salt', cursive", body: "'Playwrite AU NSW', cursive", icon: "handwriting.svg", weight: 400 },
    { label: "Combo", heading: "'Bodoni Moda', serif", body: "'Manrope', sans-serif", icon: "combo.svg", weight: 400 }
  ]
}; 
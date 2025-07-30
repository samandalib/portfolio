import { useEffect } from 'react';

// Function to convert hex color to CSS filter values
function hexToFilter(hex: string) {
  // Remove # if present
  const cleanHex = hex.replace('#', '');
  
  // Convert hex to RGB
  const r = parseInt(cleanHex.substr(0, 2), 16);
  const g = parseInt(cleanHex.substr(2, 2), 16);
  const b = parseInt(cleanHex.substr(4, 2), 16);
  
  // Calculate filter values (simplified approximation)
  // This is a basic conversion - for more accuracy, you'd need a more complex algorithm
  const brightness = (r + g + b) / 3 / 255;
  const saturation = Math.max(r, g, b) - Math.min(r, g, b);
  const hue = Math.atan2(Math.sqrt(3) * (g - b), 2 * r - g - b) * 180 / Math.PI;
  
  return {
    invert: Math.round((1 - brightness) * 100),
    sepia: Math.round(saturation / 255 * 100),
    saturate: Math.round(saturation / 255 * 2000 + 500),
    hue: Math.round(hue),
    brightness: Math.round(brightness * 120 + 100),
    contrast: Math.round(100 + saturation / 255 * 50)
  };
}

export function useAccentColor(accent: string) {
  // Set CSS variable for accent color on client after mount
  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accent);
    
    // Calculate and set filter variables for SVG icons
    const filterValues = hexToFilter(accent);
    document.documentElement.style.setProperty('--accent-invert', `${filterValues.invert}%`);
    document.documentElement.style.setProperty('--accent-sepia', `${filterValues.sepia}%`);
    document.documentElement.style.setProperty('--accent-saturate', `${filterValues.saturate}%`);
    document.documentElement.style.setProperty('--accent-hue', `${filterValues.hue}deg`);
    document.documentElement.style.setProperty('--accent-brightness', `${filterValues.brightness}%`);
    document.documentElement.style.setProperty('--accent-contrast', `${filterValues.contrast}%`);
  }, [accent]);
} 
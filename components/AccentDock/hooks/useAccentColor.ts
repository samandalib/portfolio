import { useEffect } from 'react';

export function useAccentColor(accent: string) {
  // Set CSS variable for accent color on client after mount
  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accent);
  }, [accent]);
} 
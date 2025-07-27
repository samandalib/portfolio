import { useEffect } from 'react';

export function useFontSync(fontIndex: number, fontPresets: any[]) {
  // Set font family globally for heading and body
  useEffect(() => {
    document.documentElement.style.setProperty('--font-bodoni', fontPresets[fontIndex].heading);
    document.documentElement.style.setProperty('--font-manrope', fontPresets[fontIndex].body);
  }, [fontIndex, fontPresets]);
} 
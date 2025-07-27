import type { VisualAssetWithRadius } from './types';

// Static mapping for allowed Tailwind radius classes
export const radiusClassMap: Record<string, string> = {
  'rounded': 'modern-border-radius',
  'rounded-md': 'modern-border-radius',
  'rounded-lg': 'modern-border-radius-lg',
  'rounded-xl': 'modern-border-radius-lg',
  'rounded-2xl': 'modern-border-radius-xl',
  'rounded-full': 'rounded-full',
};

// Explicit mappings for Tailwind col-start and col-span classes
export const colStartClass: Record<number, string> = {
  1: "lg:col-start-1 md:col-start-1",
  2: "lg:col-start-2 md:col-start-2",
  3: "lg:col-start-3 md:col-start-3",
  4: "lg:col-start-4 md:col-start-4",
  5: "lg:col-start-5 md:col-start-5",
  6: "lg:col-start-6 md:col-start-6",
  7: "lg:col-start-7",
  8: "lg:col-start-8",
  9: "lg:col-start-9",
  10: "lg:col-start-10",
  11: "lg:col-start-11",
  12: "lg:col-start-12",
};

export const colSpanClass: Record<number, string> = {
  1: "lg:col-span-1 md:col-span-1",
  2: "lg:col-span-2 md:col-span-2",
  3: "lg:col-span-3 md:col-span-3",
  4: "lg:col-span-4 md:col-span-4",
  5: "lg:col-span-5 md:col-span-5",
  6: "lg:col-span-6 md:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  9: "lg:col-span-9",
  10: "lg:col-span-10",
  11: "lg:col-span-11",
  12: "lg:col-span-12",
};

export const CANVAS_COL_OPTIONS = [4, 6, 8, 9];

export function normalizeBody(body: any) {
  if (Array.isArray(body) && body.length === 1 && Array.isArray(body[0])) {
    return body[0];
  }
  return body;
}

export function getHorizontalOffset(offset: number) {
  if (typeof window === 'undefined') return Math.min(offset * 120, 200); // SSR fallback
  
  const screenWidth = window.innerWidth;
  
  if (screenWidth < 640) { // Mobile
    return Math.min(offset * 20, 40);
  } else if (screenWidth < 1024) { // Tablet
    return Math.min(offset * 40, 80);
  } else { // Desktop
    return Math.min(offset * 120, 200);
  }
} 
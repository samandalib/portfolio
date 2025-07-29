import type { ComponentType } from 'react';

export interface AccentDockProps {}

export interface ColorSwatchesProps {
  accentColors: string[];
  currentAccent: string;
  onAccentChange: (color: string) => void;
}

export interface FontSizeSliderProps {
  fontSize: number;
  onFontSizeChange: (size: number) => void;
}

export interface FontToggleProps {
  fontIndex: number;
  fontPresets: any[];
  onFontChange: (index: number) => void;
  isDark: boolean;
}

export interface FontIconMap {
  [key: string]: ComponentType<any>;
} 
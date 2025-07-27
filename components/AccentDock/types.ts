import type { ReactComponentType } from 'react';

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
  onFontChange: () => void;
  isDark: boolean;
}

export interface FontIconMap {
  [key: string]: ReactComponentType<any>;
} 
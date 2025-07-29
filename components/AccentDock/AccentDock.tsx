"use client";

import React, { useState } from "react";
import ThemeToggle from "../ThemeToggle";
import { GlobalSettings } from "../../public/GlobalSettings";
import ColorSwatches from "./components/ColorSwatches";
import FontSizeSlider from "./components/FontSizeSlider";
import FontToggle from "./components/FontToggle";
import { useThemeSync } from './hooks/useThemeSync';
import { useFontSync } from './hooks/useFontSync';
import { useAccentColor } from './hooks/useAccentColor';
import type { AccentDockProps } from './types';

const accentColors = GlobalSettings.accentColors;
const defaultAccent = GlobalSettings.defaultAccentColor;
const fontPresets = GlobalSettings.fontPresets;

const defaultFontIndex = fontPresets.findIndex(preset => preset.label === "Combo");

const AccentDock: React.FC<AccentDockProps> = () => {
  const [accent, setAccent] = useState(defaultAccent);
  const [fontSize, setFontSize] = useState(18); // default to middle value of new range (14-24)
  const [fontIndex, setFontIndex] = useState(defaultFontIndex !== -1 ? defaultFontIndex : 0);
  
  const { dark } = useThemeSync();
  useFontSync(fontIndex, fontPresets);
  useAccentColor(accent);

  const handleFontChange = (index: number) => {
    setFontIndex(index);
  };

  // Set CSS variable for font size on client after mount
  React.useEffect(() => {
    document.documentElement.style.setProperty('--body-font-size', fontSize + 'px');
  }, [fontSize]);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center">
      <div className="flex flex-col items-center gap-3 px-3 py-4 modern-border-radius-xl modern-shadow-xl glass-effect">
        {/* Theme Toggle - moved to top */}
        <div className="mb-1">
          <ThemeToggle size={8} />
        </div>
        
        {/* Color Swatches */}
        <ColorSwatches
          accentColors={accentColors}
          currentAccent={accent}
          onAccentChange={setAccent}
        />
        
        {/* Font Size Slider */}
        <FontSizeSlider
          fontSize={fontSize}
          onFontSizeChange={setFontSize}
        />
        
        {/* Font Changer Button */}
        <FontToggle
          fontIndex={fontIndex}
          fontPresets={fontPresets}
          onFontChange={handleFontChange}
          isDark={dark}
        />
      </div>
    </div>
  );
};

export default AccentDock; 
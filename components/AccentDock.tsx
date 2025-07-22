"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useRef } from "react";

const accentColors = [
  '#16A34A', // green
  '#F59E42', // orange
  '#3B82F6', // blue
  '#E11D48', // pink/red
  '#A21CAF', // purple
];

export default function AccentDock() {
  const [accent, setAccent] = useState(accentColors[0]);
  const [fontSize, setFontSize] = useState(15); // default to middle value
  const sliderRef = useRef<HTMLInputElement>(null);

  // Set CSS variable for accent color
  if (typeof window !== 'undefined') {
    document.documentElement.style.setProperty('--accent-color', accent);
  }

  // Set CSS variable for font size
  if (typeof window !== 'undefined') {
    document.documentElement.style.setProperty('--body-font-size', fontSize + 'px');
  }

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
      <div className="flex flex-col items-center gap-5 px-2 py-3 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/40 dark:bg-black/30 border border-black/10 dark:border-white/10">
        {/* Color Swatches */}
        {accentColors.map((color) => (
          <button
            key={color}
            className={`w-7 h-7 rounded-full transition-all duration-200 flex items-center justify-center ${accent === color ? 'ring-2 ring-accent scale-110' : ''}`}
            style={{ background: color }}
            aria-label={`Set accent color to ${color}`}
            onClick={() => setAccent(color)}
          />
        ))}
        {/* Font Size Slider */}
        <div className="flex flex-col items-center mt-6">
          <label htmlFor="font-size-slider" className="text-xs mb-2 text-gray-500 dark:text-gray-300">A</label>
          <input
            ref={sliderRef}
            id="font-size-slider"
            type="range"
            min={12}
            max={18}
            value={fontSize}
            onChange={e => setFontSize(Number(e.target.value))}
            className="appearance-none w-1 h-24 bg-gray-200 dark:bg-gray-700 rounded-full outline-none slider-thumb-vertical"
            style={{ WebkitAppearance: 'slider-vertical' }} // For Chrome/Safari vertical slider
            aria-label="Font size"
          />
          <span className="text-xs mt-2 text-gray-500 dark:text-gray-300">A</span>
        </div>
        {/* Theme Toggle */}
        <div className="mt-6">
          <ThemeToggle size={8} />
        </div>
      </div>
    </div>
  );
} 
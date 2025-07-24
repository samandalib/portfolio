"use client";
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import { GlobalSettings } from "../public/GlobalSettings";
import SerifIcon from "./SerifIcon";
import SansIcon from "./SansIcon";
import RetroIcon from "./RetroIcon";
import HandwritingIcon from "./HandwritingIcon";
import ComboIcon from "./ComboIcon";

const accentColors = GlobalSettings.accentColors;
const defaultAccent = GlobalSettings.defaultAccentColor;
const fontPresets = GlobalSettings.fontPresets;

const defaultFontIndex = fontPresets.findIndex(preset => preset.label === "Combo");

export default function AccentDock() {
  const [accent, setAccent] = useState(defaultAccent);
  const [fontSize, setFontSize] = useState(15); // default to middle value
  const [fontIndex, setFontIndex] = useState(defaultFontIndex !== -1 ? defaultFontIndex : 0);
  const sliderRef = useRef<HTMLInputElement>(null);
  const [dark, setDark] = useState(false);

  // Track dark mode
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Set CSS variable for accent color on client after mount
  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accent);
  }, [accent]);

  // Set CSS variable for font size on client after mount
  useEffect(() => {
    document.documentElement.style.setProperty('--body-font-size', fontSize + 'px');
  }, [fontSize]);

  // Set font family globally for heading and body
  useEffect(() => {
    document.documentElement.style.setProperty('--font-bodoni', fontPresets[fontIndex].heading);
    document.documentElement.style.setProperty('--font-manrope', fontPresets[fontIndex].body);
  }, [fontIndex]);

  const handleFontChange = () => {
    setFontIndex((prev) => (prev + 1) % fontPresets.length);
  };

  // Map font preset label to icon component
  const fontIconMap: Record<string, React.ComponentType<any>> = {
    'Serif': SerifIcon,
    'Sans': SansIcon,
    'Retro': RetroIcon,
    'Handwriting': HandwritingIcon,
    'Combo': ComboIcon,
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center">
      <div className="flex flex-col items-center gap-5 px-2 py-3 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/40 dark:bg-black/30 border border-black/10 dark:border-white/10">
        {/* Theme Toggle - moved to top */}
        <div className="mb-4">
          <ThemeToggle size={8} />
        </div>
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
          <label htmlFor="font-size-slider" className="text-lg mb-2 text-gray-500 dark:text-gray-300">A</label>
          <input
            ref={sliderRef}
            type="range"
            min={12}
            max={18}
            value={fontSize}
            onChange={e => setFontSize(Number(e.target.value))}
            className="font-slider"
            style={{ writingMode: 'vertical-lr', direction: 'rtl' }}
            aria-label="Font size slider"
          />
          <span className="text-xs mt-2 text-gray-500 dark:text-gray-300">A</span>
        </div>
        {/* Font Changer Button */}
        <button
          onClick={handleFontChange}
          className={`w-8 h-8 flex items-center justify-center rounded-full border shadow mt-6 transition-colors duration-300
            ${dark ? 'bg-black/60 border-gray-600' : 'bg-white/80 border-gray-300'}
          `}
          aria-label={`Switch font to ${fontPresets[(fontIndex + 1) % fontPresets.length].label}`}
        >
          {(() => {
            const Icon = fontIconMap[fontPresets[fontIndex].label] || SerifIcon;
            return <Icon width={24} height={24} color={dark ? '#ededed' : '#171717'} />;
          })()}
        </button>
      </div>
      <style jsx>{`
  input[type='range'].font-slider {
    --slider-track: #333;
    --slider-bg: #fff;
    --slider-thumb: #fff;
    appearance: none;
    width: 0.25rem;
    height: 8rem;
    background: linear-gradient(to top, var(--slider-track) 0%, var(--slider-track) 100%) no-repeat;
    background-size: 100% var(--progress, 100%);
    background-position: bottom;
    border-radius: 9999px;
    outline: none;
  }
  input[type='range'].font-slider::-webkit-slider-thumb {
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: var(--slider-thumb);
    border: 2px solid var(--slider-track);
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    cursor: pointer;
    transition: background 0.2s;
  }
  input[type='range'].font-slider::-webkit-slider-runnable-track {
    height: 8rem;
    background: var(--slider-bg);
    border-radius: 9999px;
  }
  input[type='range'].font-slider:focus::-webkit-slider-thumb {
    outline: 2px solid var(--slider-track);
  }
  input[type='range'].font-slider::-moz-range-thumb {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: var(--slider-thumb);
    border: 2px solid var(--slider-track);
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    cursor: pointer;
    transition: background 0.2s;
  }
  input[type='range'].font-slider::-moz-range-track {
    height: 8rem;
    background: var(--slider-bg);
    border-radius: 9999px;
  }
  input[type='range'].font-slider::-ms-thumb {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: var(--slider-thumb);
    border: 2px solid var(--slider-track);
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    cursor: pointer;
    transition: background 0.2s;
  }
  input[type='range'].font-slider::-ms-fill-lower {
    background: var(--slider-track);
    border-radius: 9999px;
  }
  input[type='range'].font-slider::-ms-fill-upper {
    background: var(--slider-bg);
    border-radius: 9999px;
  }
  input[type='range'].font-slider:focus {
    outline: none;
  }
`}</style>
    </div>
  );
} 
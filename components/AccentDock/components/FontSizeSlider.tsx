import React, { useRef } from 'react';
import type { FontSizeSliderProps } from '../types';

const FontSizeSlider: React.FC<FontSizeSliderProps> = ({ 
  fontSize, 
  onFontSizeChange 
}) => {
  const sliderRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-center mt-8">
      <label htmlFor="font-size-slider" className="text-lg mb-3 text-gray-500 dark:text-gray-300 font-medium">A</label>
      <input
        ref={sliderRef}
        type="range"
        min={12}
        max={18}
        value={fontSize}
        onChange={e => onFontSizeChange(Number(e.target.value))}
        className="font-slider"
        style={{ writingMode: 'vertical-lr', direction: 'rtl' }}
        aria-label="Font size slider"
      />
      <span className="text-xs mt-3 text-gray-500 dark:text-gray-300 font-medium">A</span>
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
};

export default FontSizeSlider; 
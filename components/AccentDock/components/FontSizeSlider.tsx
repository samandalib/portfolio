import React, { useRef } from 'react';
import type { FontSizeSliderProps } from '../types';

const FontSizeSlider: React.FC<FontSizeSliderProps> = ({ 
  fontSize, 
  onFontSizeChange 
}) => {
  const sliderRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-center mt-4">
      <label htmlFor="font-size-slider" className="text-lg mb-3 text-gray-500 dark:text-gray-300 font-medium">A</label>
      <input
        ref={sliderRef}
        type="range"
        min={14}
        max={24}
        step={2}
        value={fontSize}
        onChange={e => onFontSizeChange(Number(e.target.value))}
        className="font-slider"
        style={{ writingMode: 'vertical-lr', direction: 'rtl' }}
        aria-label="Font size slider"
      />
      <span className="text-xs mt-3 text-gray-500 dark:text-gray-300 font-medium">A</span>
      <style jsx>{`
        input[type='range'].font-slider {
          appearance: none;
          width: 0.25rem;
          height: 8rem;
          background: linear-gradient(to top, #333 0%, #333 100%) no-repeat;
          background-size: 100% var(--progress, 100%);
          background-position: bottom;
          border-radius: 9999px;
          outline: none;
        }
        
        html.dark input[type='range'].font-slider {
          background: linear-gradient(to top, #666 0%, #666 100%) no-repeat;
        }
        input[type='range'].font-slider::-webkit-slider-thumb {
          appearance: none;
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #333;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: background 0.2s;
        }
        
        html.dark input[type='range'].font-slider::-webkit-slider-thumb {
          background: #f3f4f6;
          border: 2px solid #666;
        }
        input[type='range'].font-slider::-webkit-slider-runnable-track {
          height: 8rem;
          background: #fff;
          border-radius: 9999px;
        }
        
        html.dark input[type='range'].font-slider::-webkit-slider-runnable-track {
          background: #374151;
        }
        input[type='range'].font-slider:focus::-webkit-slider-thumb {
          outline: 2px solid #333;
        }
        
        html.dark input[type='range'].font-slider:focus::-webkit-slider-thumb {
          outline: 2px solid #666;
        }
        input[type='range'].font-slider::-moz-range-thumb {
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #333;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: background 0.2s;
        }
        
        html.dark input[type='range'].font-slider::-moz-range-thumb {
          background: #f3f4f6;
          border: 2px solid #666;
        }
        
        input[type='range'].font-slider::-moz-range-track {
          height: 8rem;
          background: #fff;
          border-radius: 9999px;
        }
        
        html.dark input[type='range'].font-slider::-moz-range-track {
          background: #374151;
        }
        input[type='range'].font-slider::-ms-thumb {
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #333;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: background 0.2s;
        }
        
        html.dark input[type='range'].font-slider::-ms-thumb {
          background: #f3f4f6;
          border: 2px solid #666;
        }
        
        input[type='range'].font-slider::-ms-fill-lower {
          background: #333;
          border-radius: 9999px;
        }
        
        html.dark input[type='range'].font-slider::-ms-fill-lower {
          background: #666;
        }
        
        input[type='range'].font-slider::-ms-fill-upper {
          background: #fff;
          border-radius: 9999px;
        }
        
        html.dark input[type='range'].font-slider::-ms-fill-upper {
          background: #374151;
        }
        input[type='range'].font-slider:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default FontSizeSlider; 
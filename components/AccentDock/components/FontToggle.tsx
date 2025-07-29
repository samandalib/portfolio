import React, { useState } from 'react';
import type { FontToggleProps } from '../types';

// Map font labels to their SVG file paths
const fontSvgMap: { [key: string]: string } = {
  'Serif': '/assets/Docker/serif.svg',
  'Sans': '/assets/Docker/sans.svg',
  'Retro': '/assets/Docker/retro.svg',
  'Handwriting': '/assets/Docker/handwriting.svg',
  'Combo': '/assets/Docker/combo.svg',
};

const FontToggle: React.FC<FontToggleProps> = ({ 
  fontIndex, 
  fontPresets, 
  onFontChange, 
  isDark 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      {/* Main Font Toggle Button */}
      <button
        onClick={toggleExpanded}
        className={`w-9 h-9 flex items-center justify-center modern-border-radius modern-shadow mt-4 transition-all duration-300 hover:scale-105
          ${isDark ? 'glass-effect border-gray-600' : 'glass-effect border-gray-300'}
        `}
        aria-label="Open font selection"
      >
        {(() => {
          const currentFont = fontPresets[fontIndex];
          const svgPath = fontSvgMap[currentFont.label];
          return (
            <img 
              src={svgPath} 
              alt={currentFont.label}
              className="w-5 h-5"
              style={{ filter: isDark ? 'invert(1)' : 'none' }}
            />
          );
        })()}
      </button>

      {/* Mini Font Dock */}
      {isExpanded && (
        <div className="absolute left-full ml-2 top-0 mt-4 flex flex-row space-x-2 z-50 modern-border-radius-xl modern-shadow-xl glass-effect bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          {fontPresets.map((font, index) => {
            const svgPath = fontSvgMap[font.label];
            const isSelected = index === fontIndex;
            
            return (
              <button
                key={font.label}
                onClick={() => {
                  onFontChange(index);
                  setIsExpanded(false);
                }}
                className={`w-9 h-9 flex items-center justify-center modern-border-radius modern-shadow transition-all duration-300 hover:scale-105 group relative
                  ${isSelected 
                    ? (isDark ? 'glass-effect border-blue-500 bg-blue-500/20' : 'glass-effect border-blue-600 bg-blue-100')
                    : (isDark ? 'glass-effect border-gray-600 hover:border-gray-500' : 'glass-effect border-gray-300 hover:border-gray-400')
                  }
                `}
                title={font.label}
                aria-label={`Select ${font.label} font`}
              >
                <img 
                  src={svgPath} 
                  alt={font.label}
                  className="w-5 h-5"
                  style={{ filter: isDark ? 'invert(1)' : 'none' }}
                />
                
                {/* Tooltip */}
                <div className={`absolute bottom-full mb-2 px-2 py-1 text-xs font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50
                  ${isDark ? 'bg-gray-800 text-gray-200 border border-gray-600' : 'bg-white text-gray-800 border border-gray-300'}
                `}>
                  {font.label}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FontToggle; 
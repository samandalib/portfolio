import React from 'react';
import { fontIconMap } from '../utils/fontIconMap';
import type { FontToggleProps } from '../types';

const FontToggle: React.FC<FontToggleProps> = ({ 
  fontIndex, 
  fontPresets, 
  onFontChange, 
  isDark 
}) => {
  const Icon = fontIconMap[fontPresets[fontIndex].label] || fontIconMap['Serif'];

  return (
    <button
      onClick={onFontChange}
      className={`w-9 h-9 flex items-center justify-center modern-border-radius modern-shadow mt-4 transition-all duration-300 hover:scale-105
        ${isDark ? 'glass-effect border-gray-600' : 'glass-effect border-gray-300'}
      `}
      aria-label={`Switch font to ${fontPresets[(fontIndex + 1) % fontPresets.length].label}`}
    >
      <Icon width={24} height={24} color={isDark ? '#ededed' : '#171717'} />
    </button>
  );
};

export default FontToggle; 
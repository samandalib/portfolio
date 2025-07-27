import React from 'react';
import type { ColorSwatchesProps } from '../types';

const ColorSwatches: React.FC<ColorSwatchesProps> = ({ 
  accentColors, 
  currentAccent, 
  onAccentChange 
}) => {
  return (
    <>
      {accentColors.map((color) => (
        <button
          key={color}
          className={`w-8 h-8 rounded-full transition-all duration-300 flex items-center justify-center hover:scale-110 ${currentAccent === color ? 'ring-2 ring-accent scale-110 modern-shadow-md' : 'hover:modern-shadow'}`}
          style={{ background: color }}
          aria-label={`Set accent color to ${color}`}
          onClick={() => onAccentChange(color)}
        />
      ))}
    </>
  );
};

export default ColorSwatches; 
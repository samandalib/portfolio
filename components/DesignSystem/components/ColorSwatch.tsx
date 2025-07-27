import React from 'react';
import { motion } from 'framer-motion';
import { useClipboard } from '../hooks/useClipboard';
import type { ColorSwatchProps } from '../types';

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, showLetter = true }) => {
  const { copied, copyToClipboard } = useClipboard();

  return (
    <motion.div
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => copyToClipboard(color.hex)}
    >
      <div
        className="w-16 h-16 rounded-lg border-2 border-gray-200 dark:border-gray-700 shadow-md relative overflow-hidden"
        style={{ backgroundColor: color.hex }}
      >
        {showLetter && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-lg drop-shadow-lg">
              {color.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Tooltip with all details */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
        <div className="font-semibold">{color.name}</div>
        <div className="text-gray-300">{color.hex}</div>
        <div className="text-gray-300">RGB({color.rgb})</div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>

      {/* Copy feedback */}
      {copied && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full"
        >
          Copied!
        </motion.div>
      )}
    </motion.div>
  );
};

export default ColorSwatch; 
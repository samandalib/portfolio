import React from 'react';
import { motion } from 'framer-motion';
import { useClipboard } from '../hooks/useClipboard';
import type { DimensionSpecProps } from '../types';

const DimensionSpec: React.FC<DimensionSpecProps> = ({ dimension }) => {
  const { copied, copyToClipboard } = useClipboard();

  // Extract the pixel value for the border radius
  const pixelValue = dimension.value.includes('px') ? dimension.value : '16px';

  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => copyToClipboard(dimension.value)}
    >
      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div 
              className="w-12 h-12 bg-accent"
              style={{ 
                borderTopLeftRadius: pixelValue,
                borderTopRightRadius: '0px',
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '0px'
              }}
            ></div>
            <span className="font-medium text-gray-800 dark:text-gray-200">{dimension.name}</span>
          </div>
          <div 
            className="text-sm text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded min-w-[60px] text-right"
          >
            {dimension.value}
          </div>
        </div>
        
        {/* Copy feedback */}
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded"
          >
            Copied!
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default DimensionSpec; 
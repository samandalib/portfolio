import React from 'react';
import { motion } from 'framer-motion';
import { useClipboard } from '../hooks/useClipboard';
import type { IconSpecProps } from '../types';

const IconSpec: React.FC<IconSpecProps> = ({ icon }) => {
  const { copied, copyToClipboard } = useClipboard();

  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => copyToClipboard(icon.name)}
    >
      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
            <span className="text-lg">🎨</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{icon.name}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">{icon.useCase}</div>
            <div className="text-xs text-gray-500 dark:text-gray-500">Source: {icon.source}</div>
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

export default IconSpec; 
import React from 'react';
import { motion } from 'framer-motion';
import { useClipboard } from '../hooks/useClipboard';
import type { TypographySpecProps } from '../types';

const TypographySpec: React.FC<TypographySpecProps> = ({ spec }) => {
  const { copied, copyToClipboard } = useClipboard();

  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => copyToClipboard(`${spec.font} ${spec.size} ${spec.weight}`)}
    >
      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow duration-200">
        <div 
          className="mb-2 text-gray-900 dark:text-gray-100"
          style={{ 
            fontFamily: spec.font === 'Bricolage Grotesque' ? 'var(--font-bricolage)' : 'var(--font-manrope)',
            fontSize: spec.size.split('/')[0] + 'px',
            lineHeight: spec.size.split('/')[1] + 'px',
            fontWeight: spec.weight === 'ExtraBold' ? '800' : spec.weight === 'Bold' ? '700' : '400'
          }}
        >
          {spec.name}
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
          <div>Font: {spec.font}</div>
          <div>Size: {spec.size}</div>
          <div>Weight: {spec.weight}</div>
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

export default TypographySpec; 
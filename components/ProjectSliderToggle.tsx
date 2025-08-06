"use client";

import React from 'react';

interface ProjectSliderToggleProps {
  useExperimental: boolean;
  onToggle: (useExperimental: boolean) => void;
  className?: string;
  showLabel?: boolean;
}

const ProjectSliderToggle: React.FC<ProjectSliderToggleProps> = ({
  useExperimental,
  onToggle,
  className = "",
  showLabel = true
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showLabel && (
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Version:
        </span>
      )}
      
      <button
        onClick={() => onToggle(!useExperimental)}
        className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        style={{
          backgroundColor: useExperimental ? 'var(--accent-color, #16A34A)' : '#d1d5db',
        }}
        role="switch"
        aria-checked={useExperimental}
        aria-label={`Switch to ${useExperimental ? 'original' : 'experimental'} version`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
            useExperimental ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      
      {showLabel && (
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
          {useExperimental ? 'Experimental' : 'Original'}
        </span>
      )}
    </div>
  );
};

export default ProjectSliderToggle; 
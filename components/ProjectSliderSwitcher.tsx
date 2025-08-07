"use client";

import React, { useState, useEffect } from 'react';
import ProjectSliderWrapper from './ProjectSliderWrapper';

const ProjectSliderSwitcher: React.FC = () => {
  const [useExperimental, setUseExperimental] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    // Check screen size
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768); // Mobile breakpoint
      setIsTablet(width >= 768 && width < 1024); // Tablet breakpoint
    };

    // Check initially
    checkDarkMode();
    checkScreenSize();

    // Set up observer to watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Set up resize listener
    window.addEventListener('resize', checkScreenSize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Determine which layout to use based on screen size
  const getLayoutToUse = () => {
    if (isMobile || isTablet) {
      return true; // Always use grid for mobile and tablet
    } else {
      return useExperimental; // Use user preference for desktop
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      {/* Container that allows natural height */}
      <div className="relative w-full">
        {/* Project Slider - positioned to fill the container */}
        <div className="relative">
          <ProjectSliderWrapper useExperimental={getLayoutToUse()} />
        </div>
        
        {/* Layout Switcher Controls - positioned at bottom of content, hidden on mobile and tablet */}
        {!isMobile && !isTablet && (
          <div className="flex justify-center mt-4">
            {/* Layout Switcher Buttons */}
            <div className="flex items-center gap-3 px-3 py-2 modern-border-radius-xl modern-shadow-xl glass-effect">
              {/* Fan Layout Button */}
              <button
                onClick={() => setUseExperimental(false)}
                className={`w-9 h-9 flex items-center justify-center modern-border-radius modern-shadow transition-all duration-300 hover:scale-105 group relative
                  ${!useExperimental 
                    ? 'glass-effect border-gray-400 dark:border-gray-500 bg-gray-100 dark:bg-gray-700 ring-2 ring-gray-300 dark:ring-gray-600' 
                    : 'glass-effect border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                  }
                `}
                aria-label="Switch to fan layout"
                title="Fan Layout"
              >
                <img 
                  src="/assets/landing/cards_star.svg" 
                  alt="Fan Layout"
                  className="w-5 h-5 transition-all duration-300"
                  style={{ 
                    filter: !useExperimental 
                      ? (isDark ? 'invert(1)' : 'brightness(0) saturate(100%) invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0.8) contrast(1.2)')
                      : (isDark ? 'invert(1)' : 'none')
                  }}
                />
                
                {/* Tooltip */}
                <div className={`absolute bottom-full mb-2 px-2 py-1 text-xs font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50
                  ${!useExperimental ? 'bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 border border-gray-600 dark:border-gray-400' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600'}
                `}>
                  Fan Layout
                </div>
              </button>

              {/* Grid Layout Button */}
              <button
                onClick={() => setUseExperimental(true)}
                className={`w-9 h-9 flex items-center justify-center modern-border-radius modern-shadow transition-all duration-300 hover:scale-105 group relative
                  ${useExperimental 
                    ? 'glass-effect border-gray-400 dark:border-gray-500 bg-gray-100 dark:bg-gray-700 ring-2 ring-gray-300 dark:ring-gray-600' 
                    : 'glass-effect border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                  }
                `}
                aria-label="Switch to grid layout"
                title="Grid Layout"
              >
                <img 
                  src="/assets/landing/grid_view.svg" 
                  alt="Grid Layout"
                  className="w-5 h-5 transition-all duration-300"
                  style={{ 
                    filter: useExperimental 
                      ? (isDark ? 'invert(1)' : 'brightness(0) saturate(100%) invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0.8) contrast(1.2)')
                      : (isDark ? 'invert(1)' : 'none')
                  }}
                />
                
                {/* Tooltip */}
                <div className={`absolute bottom-full mb-2 px-2 py-1 text-xs font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50
                  ${useExperimental ? 'bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 border border-gray-600 dark:border-gray-400' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600'}
                `}>
                  Grid Layout
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSliderSwitcher; 
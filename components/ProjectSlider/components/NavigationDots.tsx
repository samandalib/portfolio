import React from 'react';
import type { NavigationDotsProps } from '../types';

const NavigationDots: React.FC<NavigationDotsProps> = ({ 
  totalProjects, 
  currentIndex, 
  onDotClick 
}) => {
  return (
    <div className="flex justify-center mt-12 space-x-3">
      {Array.from({ length: totalProjects }, (_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`transition-all duration-300 modern-border-radius ${
            index === currentIndex
              ? 'w-10 h-2.5 bg-accent modern-shadow'
              : 'w-2.5 h-2.5 bg-foreground-light/30 dark:bg-foreground-dark/30 hover:bg-accent/60 hover:scale-110'
          }`}
          aria-label={`Go to project ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots; 
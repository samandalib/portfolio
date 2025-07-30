"use client";
import React from 'react';
import { InfoTileProps } from './types';

const InfoTile: React.FC<InfoTileProps> = ({
  icon,
  heading,
  body,
  color = 'accent',
  className = '',
  iconSize = 'md',
  headingSize = 'lg',
  bodySize = 'md',
  showBorder = true,
  showShadow = true,
  hoverEffect = true
}) => {

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500 text-white';
      case 'purple':
        return 'bg-purple-500 text-white';
      case 'green':
        return 'bg-green-500 text-white';
      case 'orange':
        return 'bg-orange-500 text-white';
      case 'indigo':
        return 'bg-indigo-500 text-white';
      case 'accent':
      default:
        return 'bg-accent text-white';
    }
  };

  const getIconSizeClasses = (size: string) => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8';
      case 'lg':
        return 'w-12 h-12';
      case 'md':
      default:
        return 'w-10 h-10';
    }
  };

  const getHeadingSizeClasses = (size: string) => {
    switch (size) {
      case 'sm':
        return 'text-lg';
      case 'md':
        return 'text-xl';
      case 'lg':
        return 'text-2xl';
      case 'xl':
        return 'text-3xl';
      default:
        return 'text-2xl';
    }
  };

  const getBodySizeClasses = (size: string) => {
    switch (size) {
      case 'sm':
        return 'text-sm';
      case 'lg':
        return 'text-lg';
      case 'md':
      default:
        return 'text-base';
    }
  };

  const renderIcon = () => {
    if (!icon) return null;

    if (typeof icon === 'string') {
      // Check if it's a URL (starts with http or https)
      if (icon.startsWith('http://') || icon.startsWith('https://')) {
        // URL-based icon - render as image with theme-aware filter
        return (
          <div className={`${getIconSizeClasses(iconSize)} flex items-center justify-center`}>
            <img 
              src={icon} 
              alt="Icon" 
              className="w-full h-full object-contain dark:invert dark:brightness-0 dark:contrast-200"
            />
          </div>
        );
      } else {
        // Simple colored rectangle for string identifiers (matching ProjectStats pattern)
        const colorClasses = getColorClasses(color);
        return (
          <div className={`${colorClasses} ${getIconSizeClasses(iconSize)} rounded-lg flex items-center justify-center`}>
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
        );
      }
    }

    // For React components (SVGs), use accent color and no background
    return (
      <div className={`${getIconSizeClasses(iconSize)} flex items-center justify-center text-accent`}>
        {icon}
      </div>
    );
  };

  const baseClasses = "bg-white dark:bg-gray-900 rounded-2xl p-6 w-80 h-65 relative overflow-hidden";
  const borderClasses = showBorder ? "border border-gray-200/50 dark:border-gray-700/50" : "";
  const shadowClasses = showShadow ? "shadow-lg" : "";
  const hoverClasses = hoverEffect ? "hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1" : "";

  return (
    <div className={`${baseClasses} ${borderClasses} ${shadowClasses} ${hoverClasses} ${className}`}>
      {/* Animated border overlay */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 320 260" preserveAspectRatio="none">
          <rect
            x="2"
            y="2"
            width="316"
            height="256"
            rx="16"
            fill="none"
            stroke="var(--accent-color)"
            strokeWidth="1"
            strokeDasharray="1144"
            strokeDashoffset="1144"
            className="animate-info-tile-border"
          />
        </svg>
      </div>
      
      <div className="flex flex-col space-y-4">
        {icon && (
          <div className="flex justify-start">
            {renderIcon()}
          </div>
        )}
        
        {(heading || body) && (
          <div className="space-y-2">
            {heading && (
              <h3 className={`font-heading font-bold text-foreground-light dark:text-foreground-dark ${getHeadingSizeClasses(headingSize)}`}>
                {heading}
              </h3>
            )}
            {body && (
              <p className={`text-sans text-gray-600 dark:text-gray-400 ${getBodySizeClasses(bodySize)}`}>
                {body}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoTile; 
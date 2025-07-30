"use client";

import React, { useState, useEffect } from 'react';
import { StatCardProps } from './types';
import AnimatedNumber from './AnimatedNumber';
import { getIconComponent } from './utils';

const StatCard: React.FC<StatCardProps> = ({ 
  icon, 
  value, 
  label, 
  description, 
  color = 'accent', 
  delay = 0,
  prefix = '',
  suffix = '',
  animateValue = false,
  animationDuration = 2000
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-500',
          text: 'text-blue-600',
          bgLight: 'bg-blue-50 dark:bg-blue-900/20',
          border: 'border-blue-200/50 dark:border-blue-700/50'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500',
          text: 'text-purple-600',
          bgLight: 'bg-purple-50 dark:bg-purple-900/20',
          border: 'border-purple-200/50 dark:border-purple-700/50'
        };
      case 'green':
        return {
          bg: 'bg-green-500',
          text: 'text-green-600',
          bgLight: 'bg-green-50 dark:bg-green-900/20',
          border: 'border-green-200/50 dark:border-green-700/50'
        };
      case 'orange':
        return {
          bg: 'bg-orange-500',
          text: 'text-orange-600',
          bgLight: 'bg-orange-50 dark:bg-orange-900/20',
          border: 'border-orange-200/50 dark:border-orange-700/50'
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-500',
          text: 'text-indigo-600',
          bgLight: 'bg-indigo-50 dark:bg-indigo-900/20',
          border: 'border-indigo-200/50 dark:border-indigo-700/50'
        };
      case 'accent':
      default:
        return {
          bg: 'bg-accent',
          text: 'text-accent',
          bgLight: 'bg-accent/10 dark:bg-accent/20',
          border: 'border-accent/20 dark:border-accent/30'
        };
    }
  };

  const colorClasses = getColorClasses(color);

  const renderValue = () => {
    if (animateValue && typeof value === 'number') {
      return (
        <AnimatedNumber 
          end={value} 
          duration={animationDuration}
          prefix={prefix}
          suffix={suffix}
          className={`text-4xl font-bold ${colorClasses.text}`}
        />
      );
    }
    
    return (
      <div className={`text-4xl font-bold ${colorClasses.text}`}>
        {prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}
      </div>
    );
  };

  return (
    <div 
      className={`bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50`}
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${colorClasses.bg} text-white`}>
        {getIconComponent(icon)}
      </div>
      <div className="mb-3">
        {renderValue()}
        <div className="text-lg font-semibold text-foreground-light dark:text-foreground-dark mb-1">
          {label}
        </div>
        {description && (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard; 
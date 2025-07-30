"use client";

import React, { useState, useEffect } from 'react';
import { AnimatedNumberProps } from './types';

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ 
  end, 
  duration, 
  prefix = '', 
  suffix = '',
  className = ''
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCurrent(Math.floor(end * easeOutQuart));
      
      if (progress >= 1) {
        clearInterval(timer);
        setCurrent(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span className={className}>
      {prefix}{current.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedNumber; 
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { AnimatedNumberProps } from './types';

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ 
  end, 
  duration, 
  prefix = '', 
  suffix = '',
  className = ''
}) => {
  const [current, setCurrent] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
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
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}{current.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedNumber; 
import React from 'react';

export interface StatCardProps {
  icon: React.ReactNode | string;
  value: string | number;
  label: string;
  description?: string;
  color?: 'blue' | 'purple' | 'green' | 'orange' | 'indigo' | 'accent';
  delay?: number;
  prefix?: string;
  suffix?: string;
  animateValue?: boolean;
  animationDuration?: number;
}

export interface ProjectStatsProps {
  title?: string;
  subtitle?: string;
  stats: StatCardProps[];
  layout?: 'grid' | 'cards' | 'combined';
  showHeader?: boolean;
  className?: string;
}

export interface AnimatedNumberProps {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
  className?: string;
} 
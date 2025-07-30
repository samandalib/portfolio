"use client";

import React from 'react';
import { ProjectStatsProps } from './types';
import StatCard from './StatCard';
import { getIconComponent } from './utils';

const ProjectStats: React.FC<ProjectStatsProps> = ({
  title,
  subtitle,
  stats,
  layout = 'grid',
  showHeader = true,
  className = ''
}) => {
  const renderHeader = () => {
    if (!showHeader || (!title && !subtitle)) return null;

    return (
      <div className="text-center mb-12">
        {title && (
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground-light dark:text-foreground-dark mb-4">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    );
  };

  const renderGridLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          {...stat}
          delay={stat.delay || index * 100}
        />
      ))}
    </div>
  );

  const renderCardsLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${
              stat.color === 'accent' ? 'bg-accent' : 
              stat.color === 'blue' ? 'bg-blue-500' :
              stat.color === 'purple' ? 'bg-purple-500' :
              stat.color === 'green' ? 'bg-green-500' :
              stat.color === 'orange' ? 'bg-orange-500' :
              stat.color === 'indigo' ? 'bg-indigo-500' :
              'bg-accent'
            } text-white`}>
              {getIconComponent(stat.icon)}
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-foreground-light dark:text-foreground-dark">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
              )}
            </div>
          </div>
          <div className="text-4xl font-bold text-accent">
            {stat.prefix || ''}{typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}{stat.suffix || ''}
          </div>
        </div>
      ))}
    </div>
  );

  const renderCombinedLayout = () => {
    const [mainStats, ...otherStats] = stats;
    
    return (
      <div className="space-y-8">
        {/* Main stat */}
        {mainStats && (
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent text-white mb-6">
              {getIconComponent(mainStats.icon)}
            </div>
            <div className="text-5xl font-bold text-accent mb-4">
              {mainStats.prefix || ''}{typeof mainStats.value === 'number' ? mainStats.value.toLocaleString() : mainStats.value}{mainStats.suffix || ''}
            </div>
            <div className="text-xl font-heading font-semibold text-foreground-light dark:text-foreground-dark mb-2">
              {mainStats.label}
            </div>
            {mainStats.description && (
              <div className="text-gray-600 dark:text-gray-400">
                {mainStats.description}
              </div>
            )}
          </div>
        )}

        {/* Other stats */}
        {otherStats.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherStats.map((stat, index) => (
              <StatCard
                key={index}
                {...stat}
                delay={stat.delay || index * 100}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderLayout = () => {
    switch (layout) {
      case 'cards':
        return renderCardsLayout();
      case 'combined':
        return renderCombinedLayout();
      case 'grid':
      default:
        return renderGridLayout();
    }
  };

  return (
    <div className={`${className}`}>
      {renderHeader()}
      {renderLayout()}
    </div>
  );
};

export default ProjectStats; 
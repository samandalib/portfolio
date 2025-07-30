"use client";

import React, { useState, useEffect } from 'react';
import { ProjectStatsProps } from './types';
import AnimatedNumber from './AnimatedNumber';

const SimpleProjectStats: React.FC<ProjectStatsProps> = ({
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

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500 text-blue-600';
      case 'purple':
        return 'bg-purple-500 text-purple-600';
      case 'green':
        return 'bg-green-500 text-green-600';
      case 'orange':
        return 'bg-orange-500 text-orange-600';
      case 'indigo':
        return 'bg-indigo-500 text-indigo-600';
      case 'accent':
      default:
        return 'bg-accent text-accent';
    }
  };

  const renderComboStatsLayout = () => {
    // Split stats into corporate and authorized network
    const corporateStats = stats.filter(stat => stat.color === 'blue');
    const authorizedStats = stats.filter(stat => stat.color === 'purple');

    return (
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Corporate Operations Card */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500">
          <div className="mb-6">
            <h2 className="text-2xl font-heading font-bold text-foreground-light dark:text-foreground-dark">Corporate Operations</h2>
            <p className="text-gray-600 dark:text-gray-400">Direct retail network</p>
          </div>

                    <div className="space-y-6">
            {/* Main Revenue Stat */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl">
              <div className="text-5xl font-bold text-accent min-h-[4rem] flex items-center">
                <div className="w-[8rem]">
                  {corporateStats[0]?.prefix || '$'}
                  {corporateStats[0]?.animateValue && typeof corporateStats[0]?.value === 'number' ? (
                    <AnimatedNumber 
                      end={corporateStats[0].value} 
                      duration={corporateStats[0].animationDuration || 2000}
                      suffix={corporateStats[0].suffix || 'B'}
                    />
                  ) : (
                    `${corporateStats[0]?.value?.toLocaleString() || '28'}${corporateStats[0]?.suffix || 'B'}`
                  )}
                </div>
              </div>
              <div className="text-sans text-gray-600 dark:text-gray-400">Total Revenue</div>
            </div>

            {/* Stores and Employees */}
                        <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl text-center">
                <div className="text-3xl font-bold text-accent min-h-[3rem] flex items-center justify-center">
                  <div className="w-[5rem]">
                    {corporateStats[1]?.animateValue && typeof corporateStats[1]?.value === 'number' ? (
                      <AnimatedNumber 
                        end={corporateStats[1].value} 
                        duration={corporateStats[1].animationDuration || 2500}
                      />
                    ) : (
                      corporateStats[1]?.value?.toLocaleString() || '1,509'
                    )}
                  </div>
                </div>
                <div className="text-sans text-gray-600 dark:text-gray-400 font-medium">Stores</div>
              </div>
                                           <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl text-center">
                <div className="text-3xl font-bold text-accent min-h-[3rem] flex items-center justify-center">
                  <div className="w-[6rem]">
                    {corporateStats[2]?.animateValue && typeof corporateStats[2]?.value === 'number' ? (
                      <AnimatedNumber 
                        end={corporateStats[2].value} 
                        duration={corporateStats[2].animationDuration || 2500}
                      />
                    ) : (
                      corporateStats[2]?.value?.toLocaleString() || '19,000'
                    )}
                  </div>
                </div>
                <div className="text-sans text-gray-600 dark:text-gray-400 font-medium">Employees</div>
              </div>
            </div>
          </div>
        </div>

        {/* Authorized Network Card */}
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500">
          <div className="mb-6">
            <h2 className="text-2xl font-heading font-bold text-foreground-light dark:text-foreground-dark">Authorized Network</h2>
            <p className="text-gray-600 dark:text-gray-400">Partner retail network</p>
          </div>

                    <div className="space-y-6">
            {/* Main Network Revenue Stat */}
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
              <div className="text-5xl font-bold text-accent min-h-[4rem] flex items-center">
                <div className="w-[8rem]">
                  {authorizedStats[0]?.prefix || '$'}
                  {authorizedStats[0]?.animateValue && typeof authorizedStats[0]?.value === 'number' ? (
                    <AnimatedNumber 
                      end={authorizedStats[0].value} 
                      duration={authorizedStats[0].animationDuration || 2000}
                      suffix={authorizedStats[0].suffix || 'B'}
                    />
                  ) : (
                    `${authorizedStats[0]?.value?.toLocaleString() || '19'}${authorizedStats[0].suffix || 'B'}`
                  )}
                </div>
              </div>
              <div className="text-sans text-gray-600 dark:text-gray-400">Network Revenue</div>
            </div>

            {/* Partner Stores */}
                                     <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl text-center">
              <div className="text-4xl font-bold text-accent min-h-[3.5rem] flex items-center justify-center">
                <div className="w-[5.5rem]">
                  {authorizedStats[1]?.animateValue && typeof authorizedStats[1]?.value === 'number' ? (
                    <AnimatedNumber 
                      end={authorizedStats[1].value} 
                      duration={authorizedStats[1].animationDuration || 2500}
                    />
                  ) : (
                    authorizedStats[1]?.value?.toLocaleString() || '3,823'
                  )}
                </div>
              </div>
              <div className="text-sans text-gray-600 dark:text-gray-400 font-medium">Partner Stores</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderGridLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => {
        const colorClasses = getColorClasses(stat.color || 'accent');

        const renderValue = () => {
          if (stat.animateValue && typeof stat.value === 'number') {
            return (
              <AnimatedNumber 
                end={stat.value} 
                duration={stat.animationDuration || 2000}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className={`text-4xl font-bold ${colorClasses.split(' ')[1]}`}
              />
            );
          }
          
          return (
            <div className={`text-4xl font-bold ${colorClasses.split(' ')[1]}`}>
              {stat.prefix || ''}{typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}{stat.suffix || ''}
            </div>
          );
        };

        return (
          <div 
            key={index}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="mb-3">
              {renderValue()}
              <div className="text-lg font-semibold text-foreground-light dark:text-foreground-dark mb-1">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderLayout = () => {
    switch (layout) {
      case 'ComboStats':
        return renderComboStatsLayout();
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

export default SimpleProjectStats; 
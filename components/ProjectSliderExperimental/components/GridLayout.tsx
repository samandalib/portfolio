import React from 'react';
import ProjectCard from './ProjectCard';
import type { CardFanProps } from '../types';

const GridLayout: React.FC<CardFanProps> = ({ 
  projects, 
  currentIndex, 
  justBroughtToFront, 
  onCardClick,
  alwaysShowContent = false,
  hideTags = false
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Responsive Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <div key={project.id} className="w-full">
            <ProjectCard
              project={project}
              index={index}
              currentIndex={currentIndex}
              isActive={index === currentIndex}
              justBroughtToFront={justBroughtToFront === index}
              onCardClick={onCardClick}
              alwaysShowContent={alwaysShowContent}
              hideTags={hideTags}
              isGridLayout={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLayout; 
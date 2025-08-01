import React from 'react';
import ProjectCard from './ProjectCard';
import type { CardFanProps } from '../types';

const CardFan: React.FC<CardFanProps> = ({ 
  projects, 
  currentIndex, 
  justBroughtToFront, 
  onCardClick,
  alwaysShowContent = false,
  hideTags = false
}) => {
  return (
    <div 
      className="relative w-full flex items-center justify-center select-none" 
      style={{ 
        perspective: '1200px',
        width: 'min(50vh, 500px)',
        height: 'min(50vh, 500px)',
        margin: '0 auto'
      }}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          currentIndex={currentIndex}
          isActive={index === currentIndex}
          justBroughtToFront={justBroughtToFront === index}
          onCardClick={onCardClick}
          alwaysShowContent={alwaysShowContent}
          hideTags={hideTags}
        />
      ))}
    </div>
  );
};

export default CardFan; 
import React from 'react';
import ProjectCard from './ProjectCard';
import type { CardFanProps } from '../types';

const CardFan: React.FC<CardFanProps> = ({ projects, currentIndex, onCardClick }) => {
  return (
    <div 
      className="relative w-full flex items-center justify-center touch-pan-y select-none" 
      style={{ 
        perspective: '1200px',
        height: '50vh',
        aspectRatio: '1 / 1',
        maxWidth: '50vh',
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
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default CardFan; 
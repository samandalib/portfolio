import React from 'react';
import Image from 'next/image';
import { calculateCardTransform } from '../utils/transformCalculations';
import type { ProjectCardProps } from '../types';

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  index, 
  currentIndex, 
  isActive, 
  onCardClick 
}) => {
  const offset = index - currentIndex;
  const { transform, opacity, zIndex } = calculateCardTransform(offset, isActive);

  return (
    <div
      className={`absolute transition-all duration-700 ease-out cursor-pointer ${
        !isActive ? 'hover:scale-105' : ''
      } aspect-square group`}
      style={{
        transform,
        zIndex,
        opacity,
        transformStyle: 'preserve-3d',
        width: '100%',
        height: '100%',
      }}
      onClick={() => onCardClick(index)}
    >
      <div className="w-full h-full modern-border-radius-lg overflow-hidden border border-white/20 relative glass-effect modern-shadow-lg group-hover:modern-shadow-xl transition-all duration-300 p-0.5">
        {/* Project Image */}
        <div className="relative h-full w-full overflow-hidden flex items-stretch justify-stretch modern-border-radius-lg">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={400}
            className="object-contain w-full h-full modern-border-radius-lg"
            style={index === 0 ? { objectPosition: 'left center' } : {}}
            priority={index === 0}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Frosted Glass Text Overlay */}
          <div className="absolute bottom-4 left-4 right-4 p-6 glass-effect modern-border-radius-lg modern-shadow opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-white drop-shadow-lg text-left font-heading">
              {project.title}
            </h3>
            <p className="font-sans text-white/90 mb-5 leading-relaxed line-clamp-2 drop-shadow-md text-left">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="font-sans px-3 py-1.5 font-medium glass-effect text-white modern-border-radius border text-sm"
                  style={{ borderColor: 'var(--accent-color, #16A34A)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 
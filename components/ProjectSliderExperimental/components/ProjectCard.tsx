import React from 'react';
import Image from 'next/image';
import { calculateCardTransform } from '../utils/transformCalculations';
import type { ProjectCardProps } from '../types';

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  index, 
  currentIndex, 
  isActive, 
  justBroughtToFront,
  onCardClick,
  alwaysShowContent = false,
  hideTags = false,
  isGridLayout = false
}) => {
  const offset = index - currentIndex;
  const { transform, opacity, zIndex } = calculateCardTransform(offset, isActive);

  // Grid layout styling
  if (isGridLayout) {
    return (
      <div
        className="relative transition-all duration-300 cursor-pointer hover:scale-105 aspect-square group"
        onClick={() => onCardClick(index)}
      >
        <div className="w-full h-full modern-border-radius-lg overflow-hidden border border-white/20 relative glass-effect modern-shadow-lg group-hover:modern-shadow-xl transition-all duration-300">
          {/* Project Image */}
          <div className="relative h-full w-full overflow-hidden modern-border-radius-lg">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={400}
              className="object-cover w-full h-full modern-border-radius-lg"
              priority={index < 4}
            />
            
            {/* Gradient Overlay - Only visible on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content - Only visible on hover */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <h3 className="text-lg font-bold mb-2 text-white font-heading">
                  {project.title}
                </h3>
                <p className="font-sans text-white/90 mb-3 leading-relaxed text-sm line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                {!hideTags && (
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="font-sans px-1.5 py-0.5 font-medium bg-white/20 text-white rounded border border-accent text-xs"
                        style={{ fontSize: '12px' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Original fan layout styling
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
        ...(isActive && justBroughtToFront && {
          boxShadow: `0 0 0 2px var(--accent-color, #16A34A)`,
          borderRadius: 'var(--border-radius-lg, 16px)',
        }),
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
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
            alwaysShowContent ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`} />
          
          {/* Frosted Glass Text Overlay */}
          <div className={`absolute bottom-4 left-4 right-4 p-6 glass-effect modern-border-radius-lg modern-shadow transition-all duration-300 ${
            alwaysShowContent 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0'
          }`}>
            <h3 className="text-xl font-bold mb-3 text-white drop-shadow-lg text-left font-heading">
              {project.title}
            </h3>
            <p className="font-sans text-white/90 mb-5 leading-relaxed line-clamp-2 drop-shadow-md text-left">
              {project.description}
            </p>
            
            {/* Tags - Only show if not hidden */}
            {!hideTags && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 
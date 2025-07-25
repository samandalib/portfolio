"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';
import { projectSliderCards } from "../public/assets/landing/project-slider-cards";
import type { ProjectSliderCard } from "../public/assets/landing/project-slider-cards";

const projects: ProjectSliderCard[] = projectSliderCards;

export default function ProjectSlider({ onCardClick }: { onCardClick?: (idx: number) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextProject();
    }
    if (isRightSwipe) {
      prevProject();
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      {/* Fanned Cards Container */}
      <div 
        className="relative h-[550px] w-full flex items-center justify-center touch-pan-y select-none" 
        style={{ perspective: '1200px' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project, index) => {
          const offset = index - currentIndex;
          const absOffset = Math.abs(offset);
          const isActive = index === currentIndex;
          
          // Calculate positioning for fanned effect
          let transform = '';
          let zIndex = projects.length - absOffset;
          let opacity = 1;
          
          if (offset === 0) {
            // Active card - center front
            transform = 'translateX(0) translateZ(0) rotateY(0deg)';
            opacity = 1;
            zIndex = 10;
          } else if (offset > 0) {
            // Cards to the right - fan out
            const angle = Math.min(offset * 25, 45);
            const translateX = Math.min(offset * 120, 200);
            const translateZ = -Math.min(offset * 50, 100);
            transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(-${angle}deg)`;
            opacity = Math.max(0.7 - (absOffset - 1) * 0.2, 0.3);
          } else {
            // Cards to the left - fan out
            const angle = Math.min(absOffset * 25, 45);
            const translateX = -Math.min(absOffset * 120, 200);
            const translateZ = -Math.min(absOffset * 50, 100);
            transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${angle}deg)`;
            opacity = Math.max(0.7 - (absOffset - 1) * 0.2, 0.3);
          }

          return (
            <div
              key={project.id}
              className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                !isActive ? 'hover:scale-105' : ''
              } aspect-[4/5.5] group`}
              style={{
                transform,
                zIndex,
                opacity,
                transformStyle: 'preserve-3d',
                width: '400px',
                height: undefined,
              }}
              onClick={() => {
                goToProject(index);
                if (onCardClick) onCardClick(index);
              }}
            >
              <div className="w-full h-full modern-border-radius-lg overflow-hidden border border-white/20 relative glass-effect modern-shadow-lg group-hover:modern-shadow-xl transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-full w-full overflow-hidden flex items-stretch justify-stretch">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={500}
                    className="object-cover w-full h-full"
                    style={index === 0 ? { objectPosition: 'left center' } : {}}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Frosted Glass Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-6 glass-effect modern-border-radius-lg modern-shadow">
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
        })}
      </div>

      {/* Minimal Dots Indicator */}
      <div className="flex justify-center mt-12 space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className={`transition-all duration-300 modern-border-radius ${
              index === currentIndex
                ? 'w-10 h-2.5 bg-accent modern-shadow'
                : 'w-2.5 h-2.5 bg-foreground-light/30 dark:bg-foreground-dark/30 hover:bg-accent/60 hover:scale-110'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { projectSliderCards } from "../../public/assets/landing/project-slider-cards";
import { useProjectNavigation } from './hooks/useProjectNavigation';
import { useTouchGestures } from './hooks/useTouchGestures';
import CardFan from './components/CardFan';
import NavigationDots from './components/NavigationDots';
import type { ProjectSliderProps } from './types';

const projects = projectSliderCards.sort((a, b) => a.id - b.id);

const ProjectSlider: React.FC<ProjectSliderProps> = () => {
  const { currentIndex, nextProject, prevProject, goToProject } = useProjectNavigation(projects.length, 1);
  const { handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseDown, handleMouseMove, handleMouseUp, containerRef } = useTouchGestures(nextProject, prevProject);
  const router = useRouter();
  
  // Track if the current card was just brought to the front
  const [justBroughtToFront, setJustBroughtToFront] = React.useState<number | null>(null);

  // Reset justBroughtToFront when navigation happens through other means
  React.useEffect(() => {
    setJustBroughtToFront(null);
  }, [currentIndex]);

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      {/* Fanned Cards Container */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <CardFan
          projects={projects}
          currentIndex={currentIndex}
          justBroughtToFront={justBroughtToFront}
          onCardClick={(index) => {
            // If this card is currently front-facing, open the project immediately
            if (index === currentIndex) {
              const slug = projects[index].slug;
              if (slug) router.push(`/case-study/${slug}`);
              setJustBroughtToFront(null); // Reset after opening
            } else {
              // If it's a background card, bring it to the front
              goToProject(index);
              setJustBroughtToFront(index);
            }
          }}
        />
      </div>

      {/* Navigation Dots */}
      <NavigationDots
        totalProjects={projects.length}
        currentIndex={currentIndex}
        onDotClick={goToProject}
      />
    </div>
  );
};

export default ProjectSlider; 
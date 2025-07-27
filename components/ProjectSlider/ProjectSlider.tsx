"use client";

import React from 'react';
import { projectSliderCards } from "../../public/assets/landing/project-slider-cards";
import { useProjectNavigation } from './hooks/useProjectNavigation';
import { useTouchGestures } from './hooks/useTouchGestures';
import CardFan from './components/CardFan';
import NavigationDots from './components/NavigationDots';
import type { ProjectSliderProps } from './types';

const projects = projectSliderCards.sort((a, b) => a.id - b.id);

const ProjectSlider: React.FC<ProjectSliderProps> = ({ onCardClick }) => {
  const { currentIndex, nextProject, prevProject, goToProject } = useProjectNavigation(projects.length, 1);
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchGestures(nextProject, prevProject);

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      {/* Fanned Cards Container */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <CardFan
          projects={projects}
          currentIndex={currentIndex}
          onCardClick={(index) => {
            goToProject(index);
            if (onCardClick) onCardClick(projects[index].caseStudyIndex);
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
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { projectSliderCards } from "../../public/assets/landing/project-slider-cards";
import GridLayout from './components/GridLayout';
import type { ProjectSliderProps } from './types';

const projects = projectSliderCards.sort((a, b) => a.id - b.id);

const ProjectSlider: React.FC<ProjectSliderProps> = () => {
  const router = useRouter();

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      {/* Grid Layout Container */}
      <div className="w-full">
        <GridLayout
          projects={projects}
          currentIndex={0} // Not used in grid layout
          justBroughtToFront={null} // Not used in grid layout
          onCardClick={(index) => {
            const slug = projects[index].slug;
            if (slug) router.push(`/case-study/${slug}`);
          }}
          alwaysShowContent={true} // Always show content in grid layout
          hideTags={false}
        />
      </div>
    </div>
  );
};

export default ProjectSlider; 
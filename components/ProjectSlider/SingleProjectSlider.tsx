"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { projectSliderCards } from "../../public/assets/landing/project-slider-cards";
import CardFan from './components/CardFan';
import type { ProjectSliderProps } from './types';

const SingleProjectSlider: React.FC<ProjectSliderProps> = () => {
  const router = useRouter();
  
  // Filter to show only Road265
const singleProject = projectSliderCards.filter(project => project.slug === 'Road265');

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      {/* Single Card Container */}
      <div>
        <CardFan
          projects={singleProject}
          currentIndex={0}
          justBroughtToFront={null}
          onCardClick={(index) => {
            // Navigate to the project page using the slug
            const slug = singleProject[index].slug;
            if (slug) router.push(`/case-study/${slug}`);
          }}
        />
      </div>
    </div>
  );
};

export default SingleProjectSlider; 
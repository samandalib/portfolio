"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { projectSliderCards } from "../../public/assets/landing/project-slider-cards";
import CardFan from './components/CardFan';
import type { ProjectSliderCard } from "../../public/assets/landing/project-slider-cards";
import type { SingleProjectSliderProps } from './types';

/**
 * SingleProjectSlider Component
 * 
 * A specialized version of ProjectSlider that displays only one project card.
 * Supports custom images, text content, and direct href links.
 * 
 * @example
 * // Basic usage with custom image (uses Road265 as fallback)
 * <SingleProjectSlider customImage="https://example.com/custom-image.png" />
 * 
 * @example
 * // With specific project slug and custom image
 * <SingleProjectSlider 
 *   projectSlug="Road265"
 *   customImage="https://example.com/custom-image.png" 
 * />
 * 
 * @example
 * // With custom image and direct link
 * <SingleProjectSlider 
 *   href="https://myproject.com" 
 *   customImage="https://example.com/custom-image.png" 
 * />
 * 
 * @example
 * // Fully custom card with editable text
 * <SingleProjectSlider 
 *   href="https://myproject.com"
 *   customImage="https://example.com/custom-image.png"
 *   customTitle="My Custom Project"
 *   customDescription="This is my custom project description"
 *   customTags={["Custom", "Project", "Tags"]}
 *   customColor="from-blue-500 to-purple-500"
 *   alwaysShowContent={true}
 * />
 */
const SingleProjectSlider: React.FC<SingleProjectSliderProps> = ({ 
  href, 
  customImage, 
  projectSlug = 'Road265',
  customTitle,
  customDescription,
  customTags,
  customColor,
  alwaysShowContent = false,
  hideTags = false
}) => {
  const router = useRouter();
  
  // Filter to show the specified project or default to Road265
  let singleProject = projectSliderCards.filter(project => project.slug === projectSlug);
  
  // If no project found, use Road265 as fallback
  if (singleProject.length === 0) {
    const fallbackProject = projectSliderCards.filter(project => project.slug === 'Road265');
    if (fallbackProject.length === 0) {
      return (
        <div className="w-full max-w-5xl mx-auto relative">
          <div className="flex items-center justify-center p-8 text-gray-500">
            <p>No projects found. Please check project configuration.</p>
          </div>
        </div>
      );
    }
    singleProject = fallbackProject;
  }
  
  // Create a fully customized project card
  const modifiedProject: ProjectSliderCard = {
    ...singleProject[0],
    // Override with custom content if provided
    title: customTitle || singleProject[0].title,
    description: customDescription || '', // Use empty string if no custom description provided
    image: customImage,
    tags: customTags || singleProject[0].tags,
    color: customColor || singleProject[0].color
  };

  // Auto-hide tags if no custom tags provided and hideTags is not explicitly set
  const shouldHideTags = hideTags || (!customTags && hideTags !== false);

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      {/* Single Card Container */}
      <div>
        <CardFan
          projects={[modifiedProject]}
          currentIndex={0}
          justBroughtToFront={null}
          onCardClick={(index) => {
            if (href) {
              // Use direct href if provided
              window.open(href, '_blank');
            } else {
              // Fallback to slug-based navigation
              const slug = modifiedProject.slug;
              if (slug) router.push(`/case-study/${slug}`);
            }
          }}
          alwaysShowContent={alwaysShowContent}
          hideTags={shouldHideTags}
        />
      </div>
    </div>
  );
};

export default SingleProjectSlider; 
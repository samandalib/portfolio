"use client";

import React from 'react';
import OriginalProjectSlider from './ProjectSlider';
import ExperimentalProjectSlider from './ProjectSliderExperimental';

interface ProjectSliderWrapperProps {
  useExperimental?: boolean;
}

const ProjectSliderWrapper: React.FC<ProjectSliderWrapperProps> = ({ 
  useExperimental = false 
}) => {
  if (useExperimental) {
    return <ExperimentalProjectSlider />;
  }
  
  return <OriginalProjectSlider />;
};

export default ProjectSliderWrapper; 
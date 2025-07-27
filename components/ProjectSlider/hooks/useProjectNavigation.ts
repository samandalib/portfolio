import { useState } from 'react';

export function useProjectNavigation(totalProjects: number, initialIndex: number = 1) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    nextProject,
    prevProject,
    goToProject,
  };
} 
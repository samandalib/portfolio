import { useState } from 'react';

export function useProjectNavigation(totalProjects: number, initialIndex: number = 1) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextProject = () => {
    setCurrentIndex((prev) => {
      // Don't go beyond the last project
      if (prev >= totalProjects - 1) {
        return prev;
      }
      return prev + 1;
    });
  };

  const prevProject = () => {
    setCurrentIndex((prev) => {
      // Don't go before the first project
      if (prev <= 0) {
        return prev;
      }
      return prev - 1;
    });
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
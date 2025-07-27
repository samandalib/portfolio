import type { ProjectSliderCard } from "../../public/assets/landing/project-slider-cards";

export interface ProjectSliderProps {
  // onCardClick prop removed - ProjectSlider now only navigates to dedicated pages
}

export interface ProjectCardProps {
  project: ProjectSliderCard;
  index: number;
  currentIndex: number;
  isActive: boolean;
  onCardClick: (index: number) => void;
}

export interface CardFanProps {
  projects: ProjectSliderCard[];
  currentIndex: number;
  onCardClick: (index: number) => void;
}

export interface NavigationDotsProps {
  totalProjects: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export interface TouchGestureHandlers {
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
} 
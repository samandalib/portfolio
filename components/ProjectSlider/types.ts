import type { ProjectSliderCard } from "../../public/assets/landing/project-slider-cards";

export interface ProjectSliderProps {
  // onCardClick prop removed - ProjectSlider now only navigates to dedicated pages
}

export interface SingleProjectSliderProps {
  href?: string; // Direct link instead of slug
  customImage: string; // Required custom image URL
  projectSlug?: string; // Optional project slug - will use Road265 as fallback
  // Custom text content props
  customTitle?: string; // Custom title for the card
  customDescription?: string; // Custom description for the card
  customTags?: string[]; // Custom tags for the card
  customColor?: string; // Custom color gradient for the card
  alwaysShowContent?: boolean; // Always show card content instead of on hover
  hideTags?: boolean; // Hide tags completely (when no custom tags provided)
}

export interface ProjectCardProps {
  project: ProjectSliderCard;
  index: number;
  currentIndex: number;
  isActive: boolean;
  justBroughtToFront: boolean;
  onCardClick: (index: number) => void;
  alwaysShowContent?: boolean; // Always show card content instead of on hover
  hideTags?: boolean; // Hide tags completely
}

export interface CardFanProps {
  projects: ProjectSliderCard[];
  currentIndex: number;
  justBroughtToFront: number | null;
  onCardClick: (index: number) => void;
  alwaysShowContent?: boolean; // Always show card content instead of on hover
  hideTags?: boolean; // Hide tags completely
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
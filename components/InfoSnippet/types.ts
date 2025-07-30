import type { InfoSnippet as InfoSnippetType } from "../../public/assets/case studies/Road265/content";

// Patch the InfoSnippetType to allow optional textAlign in layout
export type InfoSnippetLayout = {
  textColumns: number;
  visualColumns: number;
  textAlign?: 'top' | 'middle' | 'bottom';
  canvasLeft?: boolean;
  stacked?: boolean;
};

export type InfoSnippetWithLayout = Omit<InfoSnippetType, 'layout'> & { layout?: InfoSnippetLayout };

export interface InfoSnippetProps {
  snippet: InfoSnippetType;
  pointerMode?: boolean;
  canvasLeft?: boolean;
  stacked?: boolean;
  textAlign?: 'top' | 'middle' | 'bottom';
  gridCols?: number; // Custom number of columns for the grid
  gridRows?: number; // Custom number of rows for the grid
}

export type VisualAssetWithRadius = {
  type: "image" | "video" | "embed" | "lottie" | "component";
  src: string;
  alt?: string;
  caption?: string;
  embedType?: "youtube" | "vimeo" | "other";
  radius?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;     // URL to poster image (shows before video plays)
  startTime?: number;  // Time in seconds to start the video at (e.g., 5.5 for 5.5 seconds)
  aspectRatio?: string; // e.g. '16/9', '4/3', '1/1'
  componentName?: string;
  componentProps?: any;
};

export interface LottieVisualProps {
  src: string;
  caption?: string;
  loop?: boolean;
  onRef?: (ref: React.RefObject<any>) => void;
  onStateChange?: (isPlaying: boolean) => void;
}

export interface AnimatedBulletListProps {
  items: string[];
}

export interface TypewriterHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface VisualRendererProps {
  asset: VisualAssetWithRadius;
  onLottieRef?: (ref: React.RefObject<any>) => void;
  onStateChange?: (isPlaying: boolean) => void;
}

export interface InfoSnippetTextSectionProps {
  snippet: InfoSnippetType;
  justify: string;
  stackedState: boolean;
  textCols: number;
  textGridClass: string;
}

export interface InfoSnippetCanvasSectionProps {
  snippet: InfoSnippetType;
  pointerMode: boolean;
  canvasLeftState: boolean;
  visualCols: number;
  canvasGridClass: string;
  stackedState: boolean;
  pointer: { x: number; y: number; xPct: number; yPct: number } | null;
  hasLottieAnimations: boolean;
  isPlaying: boolean;
  lottieRefs: React.RefObject<any>[];
  onPointerMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPointerLeave: () => void;
  onTogglePlayPause: () => void;
  onLottieRef: (ref: React.RefObject<any>) => void;
  onAnimationStateChange: (isPlaying: boolean) => void;
  gridCols?: number; // Custom number of columns for the grid
  gridRows?: number; // Custom number of rows for the grid
}

export interface InfoSnippetDockerProps {
  snippet: InfoSnippetType;
  showDockerControls: boolean;
  pointerMode: boolean;
  textAlign: 'top' | 'middle' | 'bottom';
  canvasLeftState: boolean;
  stackedState: boolean;
  canvasCols: number;
  onToggleDockerControls: () => void;
  onTogglePointerMode: () => void;
  onCycleTextAlign: () => void;
  onToggleCanvasLeft: () => void;
  onToggleStacked: () => void;
  onCycleCanvasCols: () => void;
} 
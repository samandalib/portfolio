import React from 'react';

export function useInViewOnce<T extends HTMLElement = HTMLElement>(threshold = 0.2) {
  const ref = React.useRef<T>(null);
  const [inView, setInView] = React.useState(false);
  
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  
  return [ref, inView] as const;
}

export function useLottieAnimation(
  src: string,
  loop: boolean = true,
  onRef?: (ref: React.RefObject<any>) => void,
  onStateChange?: (isPlaying: boolean) => void
) {
  const [animationData, setAnimationData] = React.useState<any>(null);
  const [ref, inView] = useInViewOnce<HTMLDivElement>(0.3);
  const lottieRef = React.useRef<any>(null);
  
  // Pass ref to parent component
  React.useEffect(() => {
    if (onRef) {
      onRef(lottieRef);
    }
  }, [onRef]);

  React.useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => setAnimationData(null));
  }, [src]);

  // Control animation playback based on inView state
  React.useEffect(() => {
    if (lottieRef.current && animationData) {
      if (inView) {
        lottieRef.current.play();
        onStateChange?.(true);
        // Pause after animation completes (for non-looping animations)
        if (!loop) {
          const duration = lottieRef.current.getDuration();
          setTimeout(() => {
            if (lottieRef.current) {
              lottieRef.current.pause();
              onStateChange?.(false);
            }
          }, duration * 1000);
        }
      } else {
        lottieRef.current.pause();
        onStateChange?.(false);
      }
    }
  }, [inView, animationData, loop, onStateChange]);

  return { ref, animationData, lottieRef };
}

export function useInfoSnippetState(initialLayout?: any) {
  const [pointerMode, setPointerMode] = React.useState(false);
  const [canvasLeftState, setCanvasLeft] = React.useState(initialLayout?.canvasLeft || false);
  const [stackedState, setStacked] = React.useState(initialLayout?.stacked || false);
  const [showDockerControls, setShowDockerControls] = React.useState(false);
  const [textAlign, setTextAlign] = React.useState<'top' | 'middle' | 'bottom'>(
    initialLayout?.textAlign || 'top'
  );
  const [canvasCols, setCanvasCols] = React.useState(initialLayout?.visualColumns ?? 8);
  const [pointer, setPointer] = React.useState<{ x: number; y: number; xPct: number; yPct: number } | null>(null);
  const [lottieRefs, setLottieRefs] = React.useState<React.RefObject<any>[]>([]);
  const [hasLottieAnimations, setHasLottieAnimations] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);

  return {
    pointerMode,
    setPointerMode,
    canvasLeftState,
    setCanvasLeft,
    stackedState,
    setStacked,
    showDockerControls,
    setShowDockerControls,
    textAlign,
    setTextAlign,
    canvasCols,
    setCanvasCols,
    pointer,
    setPointer,
    lottieRefs,
    setLottieRefs,
    hasLottieAnimations,
    setHasLottieAnimations,
    isPlaying,
    setIsPlaying,
  };
} 
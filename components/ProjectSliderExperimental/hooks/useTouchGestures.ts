import { useRef, useEffect } from 'react';

export function useTouchGestures(onNext: () => void, onPrev: () => void) {
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const lastWheelTime = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const mouseStartX = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const accumulatedDeltaX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      onNext();
    }
    if (isRightSwipe) {
      onPrev();
    }
  };

  // Use useEffect to add wheel event listener with passive: false
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      console.log('Wheel event detected:', { deltaX: e.deltaX, deltaY: e.deltaY, deltaMode: e.deltaMode });
      
      // Prevent default to avoid page scrolling
      e.preventDefault();
      
      // Accumulate deltaX for smoother gesture detection
      accumulatedDeltaX.current += e.deltaX;
      
      // Throttle wheel events to prevent rapid firing
      const now = Date.now();
      if (now - lastWheelTime.current < 100) return; // Shorter throttle for accumulation
      lastWheelTime.current = now;

      // Higher threshold for better control
      const threshold = 200; // Increased threshold to prevent accidental triggers
      
      // Check for horizontal scroll (trackpad gestures)
      if (Math.abs(accumulatedDeltaX.current) > threshold) {
        console.log('Horizontal scroll detected:', accumulatedDeltaX.current);
        if (accumulatedDeltaX.current > threshold) {
          console.log('Next project triggered');
          onNext();
          accumulatedDeltaX.current = 0; // Reset after navigation
        } else if (accumulatedDeltaX.current < -threshold) {
          console.log('Previous project triggered');
          onPrev();
          accumulatedDeltaX.current = 0; // Reset after navigation
        }
      }
      // Also check for vertical scroll with shift key (alternative trackpad gesture)
      else if (e.shiftKey && Math.abs(e.deltaY) > threshold) {
        console.log('Shift + vertical scroll detected:', e.deltaY);
        if (e.deltaY > threshold) {
          console.log('Next project triggered (shift + scroll)');
          onNext();
        } else if (e.deltaY < -threshold) {
          console.log('Previous project triggered (shift + scroll)');
          onPrev();
        }
      }
    };

    // Add event listener with passive: false to allow preventDefault
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [onNext, onPrev]);

  // Add keyboard event listener for arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle arrow keys
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault(); // Prevent page scrolling
        
        if (e.key === 'ArrowLeft') {
          console.log('Left arrow key pressed - Previous project');
          onPrev();
        } else if (e.key === 'ArrowRight') {
          console.log('Right arrow key pressed - Next project');
          onNext();
        }
      }
    };

    // Add global keyboard event listener
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onNext, onPrev]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    
    const deltaX = e.clientX - mouseStartX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        onPrev();
      } else {
        onNext();
      }
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    containerRef,
  };
} 
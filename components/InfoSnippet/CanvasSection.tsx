import React, { useRef, useEffect } from 'react';
import renderVisual from './VisualRenderer';
import type { InfoSnippetCanvasSectionProps } from './types';

const CanvasSection: React.FC<InfoSnippetCanvasSectionProps> = ({
  snippet,
  pointerMode,
  canvasLeftState,
  visualCols,
  canvasGridClass,
  stackedState,
  pointer,
  hasLottieAnimations,
  isPlaying,
  lottieRefs,
  onPointerMove,
  onPointerLeave,
  onTogglePlayPause,
  onLottieRef,
  onAnimationStateChange,
}) => {
  const isDev = typeof process !== 'undefined' && process.env.NODE_ENV === 'development';
  const canvasRef = useRef<HTMLDivElement>(null);

  // Use passive event listeners to avoid scroll interference
  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement || !pointerMode) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (onPointerMove) {
        onPointerMove(e as any);
      }
    };

    const handleMouseLeave = () => {
      if (onPointerLeave) {
        onPointerLeave();
      }
    };

    // Add passive event listeners
    canvasElement.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvasElement.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      canvasElement.removeEventListener('mousemove', handleMouseMove);
      canvasElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pointerMode, onPointerMove, onPointerLeave]);

  // Check for visuals after all hooks
  if (!snippet.visuals || snippet.visuals.length === 0) return null;

  return (
    <div
      className={`canvas flex items-center justify-center h-full ${isDev ? 'bg-gray-100/50' : ''} modern-border-radius-lg ${stackedState ? 'col-span-12 w-full' : `col-span-1 md:col-span-${Math.min(visualCols,6)} md:w-full ${canvasGridClass}`}`}
      style={{ transition: 'background 0.2s', position: 'relative' }}
    >
      <div
        ref={canvasRef}
        className="w-full aspect-w-16 aspect-h-9 relative"
        style={{ position: 'relative' }}
      >
        <div
          className="h-full w-full"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${Math.min(3, snippet.visuals.length)}, 1fr)`,
            gridTemplateRows: `repeat(${Math.ceil(snippet.visuals.length / 3)}, auto)`,
            gap: '16px',
            width: '100%',
            height: '100%',
          }}
        >
          {snippet.visuals.map((asset, i) => (
            <div key={i} className="flex items-center justify-center w-full h-full">
              {renderVisual({ 
                asset, 
                onLottieRef, 
                onStateChange: onAnimationStateChange 
              })}
            </div>
          ))}
        </div>
        
        {/* Pointer crosshairs */}
        {pointerMode && pointer && (
          <>
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                left: pointer.x,
                top: 0,
                width: 1,
                height: '100%',
                background: 'rgba(0,0,0,0.3)',
                zIndex: 10,
                pointerEvents: 'none', // Ensure crosshairs don't interfere with events
              }}
            />
            {/* Horizontal line */}
            <div
              style={{
                position: 'absolute',
                top: pointer.y,
                left: 0,
                height: 1,
                width: '100%',
                background: 'rgba(0,0,0,0.3)',
                zIndex: 10,
                pointerEvents: 'none', // Ensure crosshairs don't interfere with events
              }}
            />
            {/* Pointer marker and coordinates */}
            <div
              style={{
                position: 'absolute',
                left: pointer.x,
                top: pointer.y,
                transform: 'translate(-100%, -100%)', // top left of pointer
                zIndex: 20,
                pointerEvents: 'none',
              }}
            >
              <div className="text-xs bg-white bg-opacity-80 rounded px-1 border border-gray-200" style={{ whiteSpace: 'nowrap', marginBottom: 2 }}>
                {Math.round(pointer.xPct)}w, {Math.round(pointer.yPct)}h
              </div>
            </div>
          </>
        )}
        
        {/* Lottie Play/Pause Button */}
        {hasLottieAnimations && (
          <button
            onClick={onTogglePlayPause}
            className="absolute top-4 right-4 z-30 w-9 h-9 flex items-center justify-center modern-border-radius modern-shadow transition-all duration-300 hover:scale-105 glass-effect border-gray-300 dark:border-gray-600"
            title={isPlaying ? "Pause all animations" : "Play all animations"}
            aria-label={isPlaying ? "Pause all animations" : "Play all animations"}
          >
            {isPlaying ? (
              <img 
                src="/assets/InfoSnippetIcons/pause.svg" 
                alt="Pause" 
                className="w-5 h-5"
              />
            ) : (
              <img 
                src="/assets/InfoSnippetIcons/paly.svg" 
                alt="Play" 
                className="w-5 h-5"
              />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default CanvasSection; 
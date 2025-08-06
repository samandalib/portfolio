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
  gridCols,
  gridRows,
}) => {
  const isDev = typeof process !== 'undefined' && process.env.NODE_ENV === 'development';
  const canvasRef = useRef<HTMLDivElement>(null);

  // Function to get grid columns class based on number
  const getGridColsClass = (cols: number) => {
    switch (cols) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-2';
      case 3: return 'grid-cols-3';
      case 4: return 'grid-cols-4';
      case 5: return 'grid-cols-5';
      case 6: return 'grid-cols-6';
      case 7: return 'grid-cols-7';
      case 8: return 'grid-cols-8';
      case 9: return 'grid-cols-9';
      case 10: return 'grid-cols-10';
      case 11: return 'grid-cols-11';
      case 12: return 'grid-cols-12';
      default: return 'grid-cols-1';
    }
  };

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
      className={`canvas flex items-center justify-center h-full modern-border-radius-lg ${stackedState ? 'col-span-12 w-full' : `col-span-1 md:col-span-${Math.min(visualCols,6)} md:w-full ${canvasGridClass}`}`}
      style={{ transition: 'background 0.2s', position: 'relative' }}
    >
      <div
        ref={canvasRef}
        className="w-full aspect-w-16 aspect-h-9 relative"
        style={{ position: 'relative' }}
      >
        <div
          className={`h-full w-full grid gap-2 sm:gap-3 md:gap-4 ${
            gridCols ? `grid-cols-1 sm:${getGridColsClass(gridCols)} md:${getGridColsClass(gridCols)} lg:${getGridColsClass(gridCols)} xl:${getGridColsClass(gridCols)}` :
            snippet.visuals.length === 1 ? 'grid-cols-1' :
            snippet.visuals.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
            'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
          }`}
          style={{
            gridTemplateRows: gridRows ? `repeat(${gridRows}, 1fr)` : `repeat(${snippet.visuals.length}, auto)`,
          }}
        >
          {snippet.visuals.map((asset, i) => {
            // Determine alignment class based on asset.align prop
            const getAlignmentClass = (align?: 'left' | 'center' | 'right') => {
              switch (align) {
                case 'left':
                  return 'justify-start';
                case 'right':
                  return 'justify-end';
                case 'center':
                default:
                  return 'justify-center';
              }
            };

            return (
              <div 
                key={i} 
                className={`flex items-center ${getAlignmentClass(asset.align)} w-full h-full`}
              >
                {renderVisual({ 
                  asset, 
                  onLottieRef, 
                  onStateChange: onAnimationStateChange 
                })}
              </div>
            );
          })}
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
            className="absolute top-4 right-4 z-30 w-9 h-9 flex items-center justify-center modern-border-radius modern-shadow transition-all duration-300 hover:scale-105 glass-effect border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
            title={isPlaying ? "Pause all animations" : "Play all animations"}
            aria-label={isPlaying ? "Pause all animations" : "Play all animations"}
          >
            {isPlaying ? (
              <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <mask id="mask0_5800_15312" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="21">
                  <rect x="0.34668" y="0.77002" width="20" height="20" fill="currentColor"/>
                </mask>
                <g mask="url(#mask0_5800_15312)">
                  <path d="M8.76972 12.9498H9.43639V8.5906H8.76972V12.9498ZM11.2568 12.9498H11.9235V8.5906H11.2568V12.9498ZM10.3551 17.9368C9.36972 17.9368 8.44132 17.7514 7.56993 17.3804C6.69868 17.0093 5.93577 16.4983 5.28118 15.8475C4.6266 15.1965 4.11278 14.4378 3.73972 13.5714C3.36653 12.705 3.17993 11.779 3.17993 10.7933C3.17993 10.3166 3.22292 9.84824 3.30889 9.3881C3.39486 8.9281 3.52924 8.47852 3.71201 8.03935L4.23764 8.56497C4.11583 8.9122 4.02021 9.27178 3.95077 9.64372C3.88132 10.0155 3.8466 10.391 3.8466 10.7702C3.8466 12.5757 4.47854 14.1105 5.74243 15.3743C7.00632 16.6382 8.54104 17.2702 10.3466 17.2702C12.1522 17.2702 13.6869 16.6382 14.9508 15.3743C16.2147 14.1105 16.8466 12.5757 16.8466 10.7702C16.8466 8.96463 16.2147 7.4299 14.9508 6.16602C13.6869 4.90213 12.1533 4.27018 10.3499 4.27018C9.9866 4.27018 9.62021 4.30143 9.25076 4.36393C8.88118 4.42643 8.51514 4.51859 8.15264 4.64039L7.63181 4.11956C8.04208 3.98595 8.47077 3.86657 8.91785 3.76143C9.36507 3.65615 9.80924 3.60352 10.2503 3.60352C11.257 3.60352 12.197 3.78782 13.0703 4.15643C13.9437 4.52504 14.7128 5.03921 15.3778 5.69893C16.0428 6.35865 16.565 7.12143 16.9443 7.98727C17.3236 8.85324 17.5133 9.77845 17.5133 10.7629C17.5133 11.7475 17.3269 12.6755 16.9541 13.5468C16.5813 14.4181 16.068 15.181 15.4141 15.8356C14.7602 16.4902 13.9999 17.004 13.1333 17.3771C12.2666 17.7503 11.3406 17.9368 10.3551 17.9368ZM5.4491 6.60997C5.25146 6.60997 5.07924 6.5365 4.93243 6.38956C4.78549 6.24261 4.71201 6.07032 4.71201 5.87268C4.71201 5.67504 4.78549 5.50282 4.93243 5.35602C5.07924 5.20907 5.25146 5.1356 5.4491 5.1356C5.64674 5.1356 5.81903 5.20907 5.96597 5.35602C6.11292 5.50282 6.18639 5.67504 6.18639 5.87268C6.18639 6.07032 6.11292 6.24261 5.96597 6.38956C5.81903 6.5365 5.64674 6.60997 5.4491 6.60997Z" fill="currentColor"/>
                </g>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <mask id="mask0_5800_15306" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="21">
                  <rect x="0.34668" y="0.944824" width="20" height="20" fill="currentColor"/>
                </mask>
                <g mask="url(#mask0_5800_15306)">
                  <path d="M4.78889 15.4192C4.28042 14.7995 3.88514 14.1125 3.60306 13.3584C3.32097 12.6041 3.17993 11.7995 3.17993 10.9448C3.17993 9.0933 3.79424 7.49156 5.02285 6.13962C6.25146 4.78753 7.7691 4.01427 9.57577 3.81982V4.48649C7.96146 4.69163 6.60299 5.40531 5.50035 6.62753C4.39785 7.84976 3.8466 9.28885 3.8466 10.9448C3.8466 11.7087 3.96813 12.4309 4.21118 13.1115C4.45424 13.792 4.79799 14.4101 5.24243 14.9657L4.78889 15.4192ZM10.3466 18.1115C9.49188 18.1115 8.68472 17.9697 7.92514 17.6861C7.16556 17.4023 6.46896 17.0062 5.83535 16.4977L6.32097 16.0282C6.87653 16.4726 7.49535 16.8198 8.17743 17.0698C8.85965 17.3198 9.58271 17.4448 10.3466 17.4448C11.1105 17.4448 11.8335 17.3172 12.5158 17.0619C13.1978 16.8065 13.822 16.4566 14.3883 16.0121L14.8739 16.4817C14.2403 16.9902 13.5437 17.3889 12.7841 17.6779C12.0245 17.967 11.212 18.1115 10.3466 18.1115ZM15.9203 15.4032L15.4508 14.9336C15.8845 14.378 16.2256 13.7627 16.4741 13.0875C16.7224 12.4123 16.8466 11.698 16.8466 10.9448C16.8466 9.28885 16.298 7.8551 15.2008 6.64357C14.1035 5.43205 12.7531 4.71837 11.1495 4.50253V3.83587C12.9455 4.04101 14.4551 4.81427 15.6783 6.15566C16.9016 7.49691 17.5133 9.0933 17.5133 10.9448C17.5133 11.7995 17.3749 12.6014 17.0983 13.3502C16.8215 14.0991 16.4288 14.7834 15.9203 15.4032ZM8.76327 13.6757V8.21399L13.0774 10.9448L8.76327 13.6757Z" fill="currentColor"/>
                </g>
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default CanvasSection; 
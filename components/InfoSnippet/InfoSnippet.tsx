"use client";

import React, { MouseEvent } from "react";
import { motion } from "framer-motion";
import { useInViewOnce, useInfoSnippetState } from './hooks';
import { colStartClass, colSpanClass, CANVAS_COL_OPTIONS } from './utils';
import TextSection from './TextSection';
import CanvasSection from './CanvasSection';
import DockerControls from './DockerControls';
import type { InfoSnippetProps } from './types';

const InfoSnippet: React.FC<InfoSnippetProps> = ({ snippet }) => {
  const layout = snippet.layout as any;
  const canvasLeft = typeof layout?.canvasLeft === 'boolean' ? layout.canvasLeft : false;
  const stacked = typeof layout?.stacked === 'boolean' ? layout.stacked : false;
  
  // Use custom hook for state management
  const {
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
  } = useInfoSnippetState(layout);

  // Viewport detection for fade-in animation
  const [ref, inView] = useInViewOnce<HTMLDivElement>(0.15);

  const visualCols = canvasCols;
  const textCols = 12 - visualCols;

  // Check if there are Lottie animations and collect refs
  React.useEffect(() => {
    if (snippet.visuals) {
      const lottieAssets = snippet.visuals.filter(asset => asset.type === "lottie");
      setHasLottieAnimations(lottieAssets.length > 0);
    }
  }, [snippet.visuals, setHasLottieAnimations]);

  // Handlers for pointer mode
  function handlePointerMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const yPct = Math.max(0, Math.min(100, (y / rect.height) * 100));
    setPointer({ x, y, xPct, yPct });
  }
  
  function handlePointerLeave() {
    setPointer(null);
  }

  // Track animation state changes
  const handleAnimationStateChange = (isPlaying: boolean) => {
    setIsPlaying(isPlaying);
  };

  // Function to toggle play/pause all Lottie animations
  const togglePlayPause = () => {
    if (isPlaying) {
      // Pause all animations
      lottieRefs.forEach(ref => {
        if (ref.current) {
          ref.current.pause();
        }
      });
      setIsPlaying(false);
    } else {
      // Play all animations from the beginning
      lottieRefs.forEach(ref => {
        if (ref.current) {
          ref.current.goToAndPlay(0);
        }
      });
      setIsPlaying(true);
    }
  };

  // Layout logic
  let justify = 'justify-center';
  if (!stackedState) {
    if (textAlign === 'top') justify = 'justify-start';
    else if (textAlign === 'bottom') justify = 'justify-end';
    else justify = 'justify-center';
  }
  
  // Calculate grid placement for text and canvas
  const textColStart = canvasLeftState ? visualCols + 1 : 1;
  const canvasColStart = canvasLeftState ? 1 : textCols + 1;
  const textColSpan = textCols;
  const canvasColSpan = visualCols;

  // Build Tailwind classes for grid placement
  const textGridClass = `${colStartClass[textColStart] || ''} ${colSpanClass[textColSpan] || ''}`;
  const canvasGridClass = `${colStartClass[canvasColStart] || ''} ${colSpanClass[canvasColSpan] || ''}`;

  // Order logic
  let children;
  if (stackedState) {
    children = [
      <TextSection 
        key="text"
        snippet={snippet}
        justify={justify}
        stackedState={stackedState}
        textCols={textCols}
        textGridClass={textGridClass}
      />,
      <CanvasSection 
        key="canvas"
        snippet={snippet}
        pointerMode={pointerMode}
        canvasLeftState={canvasLeftState}
        visualCols={visualCols}
        canvasGridClass={canvasGridClass}
        stackedState={stackedState}
        pointer={pointer}
        hasLottieAnimations={hasLottieAnimations}
        isPlaying={isPlaying}
        lottieRefs={lottieRefs}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onTogglePlayPause={togglePlayPause}
        onLottieRef={(ref) => {
          setLottieRefs(prev => {
            if (!prev.find(r => r === ref)) {
              return [...prev, ref];
            }
            return prev;
          });
        }}
        onAnimationStateChange={handleAnimationStateChange}
      />
    ].filter(Boolean);
  } else if (canvasLeftState) {
    children = [
      <CanvasSection 
        key="canvas"
        snippet={snippet}
        pointerMode={pointerMode}
        canvasLeftState={canvasLeftState}
        visualCols={visualCols}
        canvasGridClass={canvasGridClass}
        stackedState={stackedState}
        pointer={pointer}
        hasLottieAnimations={hasLottieAnimations}
        isPlaying={isPlaying}
        lottieRefs={lottieRefs}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onTogglePlayPause={togglePlayPause}
        onLottieRef={(ref) => {
          setLottieRefs(prev => {
            if (!prev.find(r => r === ref)) {
              return [...prev, ref];
            }
            return prev;
          });
        }}
        onAnimationStateChange={handleAnimationStateChange}
      />,
      <TextSection 
        key="text"
        snippet={snippet}
        justify={justify}
        stackedState={stackedState}
        textCols={textCols}
        textGridClass={textGridClass}
      />
    ].filter(Boolean);
  } else {
    children = [
      <TextSection 
        key="text"
        snippet={snippet}
        justify={justify}
        stackedState={stackedState}
        textCols={textCols}
        textGridClass={textGridClass}
      />,
      <CanvasSection 
        key="canvas"
        snippet={snippet}
        pointerMode={pointerMode}
        canvasLeftState={canvasLeftState}
        visualCols={visualCols}
        canvasGridClass={canvasGridClass}
        stackedState={stackedState}
        pointer={pointer}
        hasLottieAnimations={hasLottieAnimations}
        isPlaying={isPlaying}
        lottieRefs={lottieRefs}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onTogglePlayPause={togglePlayPause}
        onLottieRef={(ref) => {
          setLottieRefs(prev => {
            if (!prev.find(r => r === ref)) {
              return [...prev, ref];
            }
            return prev;
          });
        }}
        onAnimationStateChange={handleAnimationStateChange}
      />
    ].filter(Boolean);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }}
      className="w-full relative"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 my-8 items-start w-full"
        style={{ height: '100%' }}
      >
        {children}
      </div>
      
      <DockerControls
        snippet={snippet}
        showDockerControls={showDockerControls}
        pointerMode={pointerMode}
        textAlign={textAlign}
        canvasLeftState={canvasLeftState}
        stackedState={stackedState}
        canvasCols={canvasCols}
        onToggleDockerControls={() => setShowDockerControls((v: boolean) => !v)}
        onTogglePointerMode={() => setPointerMode((v: boolean) => !v)}
        onCycleTextAlign={() => setTextAlign((a: string) => a === 'top' ? 'middle' : a === 'middle' ? 'bottom' : 'top')}
        onToggleCanvasLeft={() => setCanvasLeft((v: boolean) => !v)}
        onToggleStacked={() => setStacked((v: boolean) => !v)}
        onCycleCanvasCols={() => setCanvasCols(CANVAS_COL_OPTIONS[(CANVAS_COL_OPTIONS.indexOf(canvasCols) + 1) % CANVAS_COL_OPTIONS.length])}
      />
    </motion.div>
  );
};

export default InfoSnippet; 
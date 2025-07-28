import React from 'react';
import Lottie from "lottie-react";
import { useLottieAnimation } from './hooks';
import type { LottieVisualProps } from './types';

const LottieVisual: React.FC<LottieVisualProps> = ({ 
  src, 
  caption, 
  loop = true, 
  onRef, 
  onStateChange 
}) => {
  const { ref, animationData, lottieRef } = useLottieAnimation(src, loop, onRef, onStateChange);

  return (
    <div ref={ref} className="mb-4 w-full h-full flex flex-col items-center justify-center">
      {animationData ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={loop}
          autoplay={false}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400">Loading animation...</div>
      )}
      {caption && <div className="text-xs text-gray-500 mt-1">{caption}</div>}
    </div>
  );
};

export default LottieVisual; 
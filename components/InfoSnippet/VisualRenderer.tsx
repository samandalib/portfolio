import React from 'react';
import LottieVisual from './LottieVisual';
import { radiusClassMap } from './utils';
import type { VisualRendererProps } from './types';

function renderVisual({ 
  asset, 
  onLottieRef, 
  onStateChange 
}: VisualRendererProps) {
  if (asset.type === "image") {
    return (
      <figure className="mb-4">
        <img src={asset.src} alt={asset.alt || ""} className={`w-full ${radiusClassMap[asset.radius || 'modern-border-radius']}`} />
        {asset.caption && <figcaption className="text-xs text-gray-500 mt-1">{asset.caption}</figcaption>}
      </figure>
    );
  }
  
  if (asset.type === "video" && asset.embedType === "youtube") {
    return (
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          src={asset.src.replace("watch?v=", "embed/")}
          title={asset.caption || asset.alt || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={`w-full h-full ${radiusClassMap[asset.radius || 'modern-border-radius']} modern-shadow`}
        />
        {asset.caption && <div className="text-xs text-gray-500 mt-1">{asset.caption}</div>}
      </div>
    );
  }
  
  if (asset.type === "video" && asset.embedType === "vimeo") {
    return (
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          src={asset.src.replace("vimeo.com", "player.vimeo.com/video")}
          title={asset.caption || asset.alt || "Vimeo video"}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className={`w-full h-full ${radiusClassMap[asset.radius || 'modern-border-radius']} modern-shadow`}
        />
        {asset.caption && <div className="text-xs text-gray-500 mt-1">{asset.caption}</div>}
      </div>
    );
  }
  
  if (asset.type === "video" && !asset.embedType) {
    return (
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <video
          controls
          autoPlay={!!asset.autoplay}
          loop={!!asset.loop}
          muted={!!asset.muted}
          className={`w-full h-full ${radiusClassMap[asset.radius || 'modern-border-radius']}`}
        >
          <source src={asset.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {asset.caption && <div className="text-xs text-gray-500 mt-1">{asset.caption}</div>}
      </div>
    );
  }
  
  if (asset.type === "embed") {
    return (
      <div className="mb-4">
        <iframe
          src={asset.src}
          title={asset.caption || asset.alt || "Embedded content"}
          className={`w-full h-64 ${radiusClassMap[asset.radius || 'modern-border-radius']} modern-shadow`}
          allowFullScreen
        />
        {asset.caption && <div className="text-xs text-gray-500 mt-1">{asset.caption}</div>}
      </div>
    );
  }
  
  if (asset.type === "lottie") {
    return (
      <LottieVisual 
        src={asset.src} 
        caption={asset.caption} 
        loop={asset.loop}
        onRef={onLottieRef}
        onStateChange={onStateChange}
      />
    );
  }
  
  if (asset.type === "component") {
    // Dynamic component rendering
    const ComponentName = asset.componentName;
    if (ComponentName === "DesignSystemSpecs") {
      const DesignSystemSpecs = require("../DesignSystemSpecs").default;
      return <DesignSystemSpecs {...asset.componentProps} />;
    }
    return <div className="text-gray-500">Component {asset.componentName} not found</div>;
  }
  
  return null;
}

export default renderVisual; 
import React from 'react';
import LottieVisual from './LottieVisual';
import { radiusClassMap } from './utils';
import type { VisualRendererProps } from './types';
import DesignSystemSpecs from '../DesignSystemSpecs';
import ResearchSynthesis from '../ResearchSynthesis';
import SingleProjectSlider from '../ProjectSlider/SingleProjectSlider';
import SimpleProjectStats from '../ProjectStats/SimpleProjectStats';
import InfoTile from '../InfoTile/InfoTile';
import MobileFrame from '../MobileFrame';

function renderVisual({ 
  asset, 
  onLottieRef, 
  onStateChange 
}: VisualRendererProps) {
  if (asset.type === "image") {
    const imageStyle: React.CSSProperties = {};
    if (asset.maxWidth) imageStyle.maxWidth = asset.maxWidth;
    if (asset.maxHeight) imageStyle.maxHeight = asset.maxHeight;
    if (asset.width) imageStyle.width = asset.width;
    if (asset.height) imageStyle.height = asset.height;
    
    return (
      <figure className="mb-4">
        <img 
          src={asset.src} 
          alt={asset.alt || ""} 
          className={`${asset.maxWidth || asset.width ? '' : 'w-full'} ${radiusClassMap[asset.radius || 'modern-border-radius']}`}
          style={imageStyle}
        />
        {asset.caption && (
          <figcaption className="text-xs text-gray-500 mt-1">
            {asset.href ? (
              <a 
                href={asset.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300 underline"
              >
                {asset.caption}
              </a>
            ) : (
              asset.caption
            )}
          </figcaption>
        )}
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
          poster={asset.poster}
          className={`w-full h-full ${radiusClassMap[asset.radius || 'modern-border-radius']}`}
          onLoadedMetadata={(e) => {
            // Set the video to start at a specific time if startTime is provided
            if (asset.startTime && e.currentTarget.duration >= asset.startTime) {
              e.currentTarget.currentTime = asset.startTime;
            }
          }}
        >
          <source src={asset.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {asset.caption && <div className="text-xs text-gray-500 mt-1">{asset.caption}</div>}
      </div>
    );
  }
  
  if (asset.type === "embed") {
    // Special handling for Jumpshare embeds
    if (asset.src.includes("jumpshare.com")) {
      return (
        <div className="mb-4">
          <iframe
            src={asset.src}
            title={asset.caption || asset.alt || "Jumpshare embed"}
            className={`w-full h-96 ${radiusClassMap[asset.radius || 'modern-border-radius']} modern-shadow`}
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
          />
          {asset.caption && <div className="text-xs text-gray-500 mt-1">{asset.caption}</div>}
        </div>
      );
    }
    
    // Default embed handling
    return (
      <div className="mb-4">
        <iframe
          src={asset.src}
          title={asset.caption || asset.alt || "Embedded content"}
          className={`w-full h-64 ${radiusClassMap[asset.radius || 'modern-border-radius']} modern-shadow`}
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
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
    // Component rendering
    const ComponentName = asset.componentName;
    if (ComponentName === "DesignSystemSpecs") {
      return <DesignSystemSpecs {...asset.componentProps} />;
    }
    if (ComponentName === "ResearchSynthesis") {
      return <ResearchSynthesis {...asset.componentProps} />;
    }
    if (ComponentName === "SingleProjectSlider") {
      return <SingleProjectSlider {...asset.componentProps} />;
    }
    if (ComponentName === "ProjectStats") {
      return <SimpleProjectStats {...asset.componentProps} />;
    }
    if (ComponentName === "InfoTile") {
      return <InfoTile {...asset.componentProps} />;
    }
    if (ComponentName === "MobileFrame") {
      return <MobileFrame {...asset.componentProps} />;
    }
    return <div className="text-gray-500">Component {asset.componentName} not found</div>;
  }
  
  return null;
}

export default renderVisual; 
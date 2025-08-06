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
import CaseStudyFooter from '../CaseStudyFooter';

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
    
    const radiusClass = asset.radius ? radiusClassMap[asset.radius] || radiusClassMap['rounded'] : radiusClassMap['rounded'];
    
    return (
      <figure className="mb-4">
        <img 
          src={asset.src || ""} 
          alt={asset.alt || ""} 
          className={`${asset.maxWidth || asset.width ? '' : 'w-full'} ${radiusClass}`}
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
    const radiusClass = asset.radius ? radiusClassMap[asset.radius] || radiusClassMap['rounded'] : radiusClassMap['rounded'];
    return (
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          src={asset.src?.replace("watch?v=", "embed/") || ""}
          title={asset.caption || asset.alt || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={`w-full h-full ${radiusClass} modern-shadow`}
        />
        {asset.caption && <div className="text-xs text-gray-500 mt-1">{asset.caption}</div>}
      </div>
    );
  }
  
  if (asset.type === "video" && asset.embedType === "vimeo") {
    const radiusClass = asset.radius ? radiusClassMap[asset.radius] || radiusClassMap['rounded'] : radiusClassMap['rounded'];
    return (
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          src={asset.src?.replace("vimeo.com", "player.vimeo.com/video") || ""}
          title={asset.caption || asset.alt || "Vimeo video"}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className={`w-full h-full ${radiusClass} modern-shadow`}
        />
        {asset.caption && <div className="text-xs text-gray-500 mt-1">{asset.caption}</div>}
      </div>
    );
  }
  
  if (asset.type === "video" && !asset.embedType) {
    const radiusClass = asset.radius ? radiusClassMap[asset.radius] || radiusClassMap['rounded'] : radiusClassMap['rounded'];
    return (
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <video
          controls
          autoPlay={!!asset.autoplay}
          loop={!!asset.loop}
          muted={!!asset.muted}
          poster={asset.poster}
          className={`w-full h-full ${radiusClass}`}
          onLoadedMetadata={(e) => {
            // Set the video to start at a specific time if startTime is provided
            if (asset.startTime && e.currentTarget.duration >= asset.startTime) {
              e.currentTarget.currentTime = asset.startTime;
            }
          }}
        >
          <source src={asset.src || ""} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {asset.caption && <div className="text-xs text-gray-500 mt-1">{asset.caption}</div>}
      </div>
    );
  }
  
  if (asset.type === "embed") {
    // Special handling for Jumpshare embeds
    if (asset.src?.includes("jumpshare.com")) {
      const radiusClass = asset.radius ? radiusClassMap[asset.radius] || radiusClassMap['rounded'] : radiusClassMap['rounded'];
      
      // Try different Jumpshare embed formats
      const jumpshareUrl = asset.src;
      const alternativeUrl = jumpshareUrl.replace('/embed/', '/v/');
      
      // Create styles that only apply on large screens
      const embedStyle: React.CSSProperties = {};
      
      // Only apply custom styles if they exist
      if (asset.width || asset.height || asset.maxWidth || asset.maxHeight || asset.aspectRatio) {
        // Use CSS custom properties for large screen styles
        const customProperties: { [key: string]: string } = {};
        if (asset.width) customProperties['--lg-width'] = asset.width;
        if (asset.height) customProperties['--lg-height'] = asset.height;
        if (asset.maxWidth) customProperties['--lg-max-width'] = asset.maxWidth;
        if (asset.maxHeight) customProperties['--lg-max-height'] = asset.maxHeight;
        if (asset.aspectRatio) {
          const [width, height] = asset.aspectRatio.split('/').map(Number);
          if (width && height) {
            customProperties['--lg-aspect-ratio'] = `${width}/${height}`;
          }
        }
        
        // Apply custom properties to the style object
        Object.assign(embedStyle, customProperties);
      }
      
      return (
        <div className="mb-4">
          <iframe
            src={jumpshareUrl}
            title={asset.caption || asset.alt || "Jumpshare embed"}
            className={`w-full h-96 lg:w-[var(--lg-width,auto)] lg:h-[var(--lg-height,auto)] lg:max-w-[var(--lg-max-width,none)] lg:max-h-[var(--lg-max-height,none)] lg:aspect-[var(--lg-aspect-ratio,auto)] ${radiusClass} modern-shadow`}
            style={embedStyle}
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            onError={(e) => {
              console.error('Jumpshare iframe error:', e);
              // Try alternative URL format
              const iframe = e.currentTarget;
              if (iframe.src === jumpshareUrl) {
                iframe.src = alternativeUrl;
              }
            }}
            onLoad={() => {
              console.log('Jumpshare iframe loaded successfully');
            }}
          />
          {asset.caption && <div className="text-xs text-gray-500 mt-1">{asset.caption}</div>}
        </div>
      );
    }
    
    // Default embed handling
    const radiusClass = asset.radius ? radiusClassMap[asset.radius] || radiusClassMap['rounded'] : radiusClassMap['rounded'];
    
    // Create styles that only apply on large screens
    const embedStyle: React.CSSProperties = {};
    
    // Only apply custom styles if they exist
    if (asset.width || asset.height || asset.maxWidth || asset.maxHeight || asset.aspectRatio) {
      // Use CSS custom properties for large screen styles
      const customProperties: { [key: string]: string } = {};
      if (asset.width) customProperties['--lg-width'] = asset.width;
      if (asset.height) customProperties['--lg-height'] = asset.height;
      if (asset.maxWidth) customProperties['--lg-max-width'] = asset.maxWidth;
      if (asset.maxHeight) customProperties['--lg-max-height'] = asset.maxHeight;
      if (asset.aspectRatio) {
        const [width, height] = asset.aspectRatio.split('/').map(Number);
        if (width && height) {
          customProperties['--lg-aspect-ratio'] = `${width}/${height}`;
        }
      }
      
      // Apply custom properties to the style object
      Object.assign(embedStyle, customProperties);
    }
    
    return (
      <div className="mb-4">
        <iframe
          src={asset.src || ""}
          title={asset.caption || asset.alt || "Embedded content"}
          className={`w-full h-64 lg:w-[var(--lg-width,auto)] lg:h-[var(--lg-height,auto)] lg:max-w-[var(--lg-max-width,none)] lg:max-h-[var(--lg-max-height,none)] lg:aspect-[var(--lg-aspect-ratio,auto)] ${radiusClass} modern-shadow`}
          style={embedStyle}
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          onError={(e) => {
            console.error('Embed iframe error:', e);
          }}
          onLoad={() => {
            console.log('Embed iframe loaded successfully');
          }}
        />
        {asset.caption && <div className="text-xs text-gray-500 mt-1">{asset.caption}</div>}
      </div>
    );
  }
  
  if (asset.type === "lottie") {
    return (
      <LottieVisual 
        src={asset.src || ""} 
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
      try {
        return <MobileFrame {...asset.componentProps} />;
      } catch (error) {
        console.error('Error rendering MobileFrame:', error);
        return <div className="text-gray-500">Error loading MobileFrame component</div>;
      }
    }
    if (ComponentName === "CaseStudyFooter") {
      return <CaseStudyFooter {...asset.componentProps} />;
    }
    return <div className="text-gray-500">Component {asset.componentName} not found</div>;
  }
  
  return null;
}

export default renderVisual; 
import React, { useState, useEffect } from 'react';

/**
 * MobileFrame Component - Highly customizable mobile device frame
 * 
 * USAGE EXAMPLES:
 * 
 * // Basic iPhone frame
 * <MobileFrame 
 *   src="https://myapp.com" 
 *   deviceType="iphone" 
 *   width="375px" 
 *   height="812px" 
 * />
 * 
 * // iPhone Pro with custom styling
 * <MobileFrame 
 *   src="https://myapp.com"
 *   deviceType="iphone-pro"
 *   frameColor="#1f2937"
 *   shadowIntensity="heavy"
 *   scale={0.8}
 *   showNotch={false}
 * />
 * 
 * // Android device with custom dimensions
 * <MobileFrame 
 *   src="https://myapp.com"
 *   deviceType="android"
 *   width="360px"
 *   height="640px"
 *   borderRadius="large"
 * />
 * 
 * // Scaled down iPhone SE
 * <MobileFrame 
 *   src="https://myapp.com"
 *   deviceType="iphone-se"
 *   scale={0.7}
 *   shadowIntensity="light"
 * />
 * 
 * // Custom colored frame
 * <MobileFrame 
 *   src="https://myapp.com"
 *   deviceType="iphone"
 *   frameColor="#3b82f6"
 *   shadowIntensity="none"
 *   className="my-custom-class"
 * />
 */
interface MobileFrameProps {
  /** URL or image source to display inside the frame */
  src: string;
  /** Alt text for accessibility (default: "Mobile app preview") */
  alt?: string;
  /** Caption displayed below the frame */
  caption?: string;
  /** Device type to emulate (default: 'iphone') */
  deviceType?: 'iphone' | 'android' | 'generic' | 'iphone-pro' | 'iphone-se' | 'pixel' | 'samsung';
  /** Frame width (default: "375px") */
  width?: string;
  /** Frame height (default: "812px") */
  height?: string;
  /** Whether to render as image or iframe (default: false) */
  isImage?: boolean;
  /** Show/hide the notch (default: true for devices that have it) */
  showNotch?: boolean;
  /** Show/hide the home indicator (default: true) */
  showHomeIndicator?: boolean;
  /** Custom frame color (overrides device default) */
  frameColor?: string;
  /** Shadow intensity (default: 'medium') */
  shadowIntensity?: 'none' | 'light' | 'medium' | 'heavy';
  /** Border radius style (default: 'medium') */
  borderRadius?: 'none' | 'small' | 'medium' | 'large' | 'extra-large';
  /** Scale factor for the entire component (default: 1) */
  scale?: number;
  /** Additional CSS classes */
  className?: string;
  /** Allow fullscreen for iframe (default: true) */
  allowFullScreen?: boolean;
}

const MobileFrame: React.FC<MobileFrameProps> = ({
  src,
  alt = "Mobile app preview",
  caption,
  deviceType = 'iphone',
  width = "375px",
  height = "812px",
  isImage = false,
  showNotch,
  showHomeIndicator = true,
  frameColor,
  shadowIntensity = 'medium',
  borderRadius = 'medium',
  scale = 1,
  className = "",
  allowFullScreen = true
}) => {
  const [iframeError, setIframeError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset error state when src changes
    setIframeError(false);
    setIsLoading(true);
  }, [src]);

  const handleIframeError = () => {
    setIframeError(true);
    setIsLoading(false);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const getDeviceStyles = () => {
    const baseStyles = {
      frame: "",
      screen: "",
      notch: null as string | null,
      homeIndicator: null as string | null
    };

    switch (deviceType) {
      case 'iphone':
        return {
          ...baseStyles,
          frame: "rounded-3xl border-[14px] border-gray-900 bg-gray-900 shadow-2xl",
          screen: "rounded-3xl overflow-hidden",
          notch: "absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10",
          homeIndicator: "absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-900 rounded-full z-10"
        };
      case 'iphone-pro':
        return {
          ...baseStyles,
          frame: "rounded-3xl border-[14px] border-gray-900 bg-gray-900 shadow-2xl",
          screen: "rounded-3xl overflow-hidden",
          notch: "absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl z-10",
          homeIndicator: "absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-900 rounded-full z-10"
        };
      case 'iphone-se':
        return {
          ...baseStyles,
          frame: "rounded-2xl border-[10px] border-gray-900 bg-gray-900 shadow-xl",
          screen: "rounded-2xl overflow-hidden",
          notch: null,
          homeIndicator: "absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-900 rounded-full z-10"
        };
      case 'android':
        return {
          ...baseStyles,
          frame: "rounded-2xl border-4 border-gray-800 bg-gray-800 shadow-xl",
          screen: "rounded-xl overflow-hidden",
          notch: null,
          homeIndicator: null
        };
      case 'pixel':
        return {
          ...baseStyles,
          frame: "rounded-2xl border-4 border-gray-800 bg-gray-800 shadow-xl",
          screen: "rounded-xl overflow-hidden",
          notch: "absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gray-800 rounded-b-2xl z-10",
          homeIndicator: null
        };
      case 'samsung':
        return {
          ...baseStyles,
          frame: "rounded-3xl border-4 border-gray-700 bg-gray-700 shadow-lg",
          screen: "rounded-2xl overflow-hidden",
          notch: "absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-gray-700 rounded-b-2xl z-10",
          homeIndicator: null
        };
      default:
        return {
          ...baseStyles,
          frame: "rounded-lg border-2 border-gray-300 bg-gray-300 shadow-lg",
          screen: "rounded overflow-hidden",
          notch: null,
          homeIndicator: null
        };
    }
  };

  const getShadowClass = () => {
    switch (shadowIntensity) {
      case 'none': return '';
      case 'light': return 'shadow-md';
      case 'medium': return 'shadow-xl';
      case 'heavy': return 'shadow-2xl';
      default: return 'shadow-xl';
    }
  };

  const getBorderRadiusClass = () => {
    switch (borderRadius) {
      case 'none': return 'rounded-none';
      case 'small': return 'rounded-md';
      case 'medium': return 'rounded-lg';
      case 'large': return 'rounded-xl';
      case 'extra-large': return 'rounded-2xl';
      default: return 'rounded-lg';
    }
  };

  const styles = getDeviceStyles();
  const shadowClass = getShadowClass();
  const borderRadiusClass = getBorderRadiusClass();

  // Apply custom frame color if provided
  const frameStyle = frameColor ? { borderColor: frameColor, backgroundColor: frameColor } : {};

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`} style={{ transform: `scale(${scale})` }}>
      <div 
        className={`relative ${styles.frame} ${shadowClass} ${borderRadiusClass}`}
        style={{ width, height, ...frameStyle }}
      >
        {showNotch !== false && styles.notch && <div className={styles.notch} />}
        <div className={`w-full h-full ${styles.screen}`}>
          {isImage ? (
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : iframeError ? (
            // Fallback when iframe fails to load
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-4 text-center">
              <div className="text-gray-500 dark:text-gray-400 mb-2">
                <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <p className="text-sm font-medium">Iframe blocked</p>
                <p className="text-xs text-gray-400 mt-1">This content cannot be embedded</p>
              </div>
              <a 
                href={src} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-blue-500 hover:text-blue-600 underline"
              >
                Open in new tab →
              </a>
            </div>
          ) : (
            <iframe
              src={src}
              title={alt}
              className="w-full h-full border-0"
              allowFullScreen={allowFullScreen}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              onError={handleIframeError}
              onLoad={handleIframeLoad}
            />
          )}
          {isLoading && !iframeError && !isImage && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
            </div>
          )}
        </div>
        {showHomeIndicator && styles.homeIndicator && <div className={styles.homeIndicator} />}
      </div>
      {caption && (
        <p className="text-sm text-gray-600 text-center max-w-xs">
          {caption}
        </p>
      )}
    </div>
  );
};

export default MobileFrame; 
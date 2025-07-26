import React, { useState, MouseEvent, useRef, useEffect } from "react";
import type { InfoSnippet as InfoSnippetType } from "../public/assets/case studies/project1/content";
import PointerIcon from "./icons/PointerIcon";
import CanvasLeftIcon from "./icons/CanvasLeftIcon";
import CanvasRightIcon from "./icons/CanvasRightIcon";
import StackedIcon from "./icons/StackedIcon";
import SideBySideIcon from "./icons/SideBySideIcon";
import CanvasWidthIcon from "./icons/CanvasWidthIcon";
import LayoutIcon from "./icons/LayoutIcon";
import TextTopIcon from "./icons/TextTopIcon";
import TextMiddleIcon from "./icons/TextMiddleIcon";
import TextBottomIcon from "./icons/TextBottomIcon";
import Tooltip from "./Tooltip";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

// Patch the InfoSnippetType to allow optional textAlign in layout
type InfoSnippetLayout = {
  textColumns: number;
  visualColumns: number;
  textAlign?: 'top' | 'middle' | 'bottom';
  canvasLeft?: boolean;
  stacked?: boolean;
};

type InfoSnippetWithLayout = Omit<InfoSnippetType, 'layout'> & { layout?: InfoSnippetLayout };

interface InfoSnippetProps {
  snippet: InfoSnippetType;
  pointerMode?: boolean;
  canvasLeft?: boolean;
  stacked?: boolean;
  textAlign?: 'top' | 'middle' | 'bottom';
}

type VisualAssetWithRadius = {
  type: "image" | "video" | "embed";
  src: string;
  alt?: string;
  caption?: string;
  embedType?: "youtube" | "vimeo" | "other";
  radius?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

const LottieVisual: React.FC<{ src: string; caption?: string; loop?: boolean }> = ({ src, caption, loop = true }) => {
  const [animationData, setAnimationData] = React.useState<any>(null);
  const [ref, inView] = useInViewOnce<HTMLDivElement>(0.3);
  const lottieRef = React.useRef<any>(null);

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
      } else {
        lottieRef.current.pause();
      }
    }
  }, [inView, animationData]);

  return (
    <div ref={ref} className="mb-4 w-full h-full flex items-center justify-center">
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

function renderVisual(asset: VisualAssetWithRadius | { type: "lottie"; src: string; alt?: string; caption?: string; loop?: boolean }) {
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
    return <LottieVisual src={asset.src} caption={asset.caption} loop={asset.loop} />;
  }
  return null;
}

const CANVAS_COL_OPTIONS = [4, 6, 8, 9];

// Explicit mappings for Tailwind col-start and col-span classes
const colStartClass: Record<number, string> = {
  1: "lg:col-start-1 md:col-start-1",
  2: "lg:col-start-2 md:col-start-2",
  3: "lg:col-start-3 md:col-start-3",
  4: "lg:col-start-4 md:col-start-4",
  5: "lg:col-start-5 md:col-start-5",
  6: "lg:col-start-6 md:col-start-6",
  7: "lg:col-start-7",
  8: "lg:col-start-8",
  9: "lg:col-start-9",
  10: "lg:col-start-10",
  11: "lg:col-start-11",
  12: "lg:col-start-12",
};
const colSpanClass: Record<number, string> = {
  1: "lg:col-span-1 md:col-span-1",
  2: "lg:col-span-2 md:col-span-2",
  3: "lg:col-span-3 md:col-span-3",
  4: "lg:col-span-4 md:col-span-4",
  5: "lg:col-span-5 md:col-span-5",
  6: "lg:col-span-6 md:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  9: "lg:col-span-9",
  10: "lg:col-span-10",
  11: "lg:col-span-11",
  12: "lg:col-span-12",
};

// Static mapping for allowed Tailwind radius classes
const radiusClassMap: Record<string, string> = {
  'rounded': 'modern-border-radius',
  'rounded-md': 'modern-border-radius',
  'rounded-lg': 'modern-border-radius-lg',
  'rounded-xl': 'modern-border-radius-lg',
  'rounded-2xl': 'modern-border-radius-xl',
  'rounded-full': 'rounded-full',
};

function normalizeBody(body: any) {
  if (Array.isArray(body) && body.length === 1 && Array.isArray(body[0])) {
    return body[0];
  }
  return body;
}

function useInViewOnce<T extends HTMLElement = HTMLElement>(threshold = 0.2) {
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

// Separate component to handle animated bullet lists with hooks
const AnimatedBulletList: React.FC<{ items: string[] }> = ({ items }) => {
  const [ref, inView] = useInViewOnce<HTMLUListElement>(0.1);
  
  // Bullet list animation variants
  const bulletListVariants = {
    hidden: {},
    visible: {
      transition: {
        delay: 1.5,
        staggerChildren: 0.12,
      },
    },
  };
  
  const bulletItemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.ul
      ref={ref}
      className="custom-bullets mb-2 text-gray-700 dark:text-gray-200 font-sans"
      variants={bulletListVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {items.map((bullet: string, idx: number) => (
        <motion.li key={idx} variants={bulletItemVariants}>{bullet}</motion.li>
      ))}
    </motion.ul>
  );
};

const InfoSnippet: React.FC<InfoSnippetProps> = ({ snippet }) => {
  const layout: InfoSnippetLayout | undefined = snippet.layout as InfoSnippetLayout | undefined;
  const canvasLeft = typeof layout?.canvasLeft === 'boolean' ? layout.canvasLeft : false;
  const stacked = typeof layout?.stacked === 'boolean' ? layout.stacked : false;
  // Docker state (per instance)
  const [pointerMode, setPointerMode] = React.useState(false);
  const [canvasLeftState, setCanvasLeft] = React.useState(canvasLeft);
  const [stackedState, setStacked] = React.useState(stacked);
  const [showDockerControls, setShowDockerControls] = React.useState(false);
  const [textAlign, setTextAlign] = React.useState<'top' | 'middle' | 'bottom'>(
    layout?.textAlign || 'top'
  );
  const [canvasCols, setCanvasCols] = useState(layout?.visualColumns ?? 8);
  
  // Viewport detection for fade-in animation
  const [ref, inView] = useInViewOnce<HTMLDivElement>(0.15);

  const visualCols = canvasCols;
  const textCols = 12 - visualCols;
  const isDev = typeof process !== 'undefined' && process.env.NODE_ENV === 'development';

  // Pointer state
  const [pointer, setPointer] = useState<{ x: number; y: number; xPct: number; yPct: number } | null>(null);

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

  let textSection = (
    <div
      className={`flex flex-col ${justify} h-full ${stackedState ? 'col-span-12 w-full' : `col-span-1 md:col-span-${Math.min(textCols,6)} md:w-full ${textGridClass}`}`}
    >
      {snippet.heading && (
        <div style={{ position: 'relative', width: '100%' }}>
          <TypewriterHeading
            text={snippet.heading}
            className="font-bold mb-1 text-gray-900 dark:text-gray-100 font-heading"
            style={{ fontSize: 32 }}
          />
          {/* Animated accent line */}
          <AnimatedAccentLine />
        </div>
      )}
      {snippet.subheading && <h4 className="font-normal mb-2 text-gray-600 dark:text-gray-300 font-sans" style={{ fontSize: 20 }}>{snippet.subheading}</h4>}
      {(() => { console.log('snippet.body:', snippet.body); return null; })()}
      {Array.isArray(snippet.body) ? (
        (() => {
          const normalizedBody = normalizeBody(snippet.body);
          if (Array.isArray(normalizedBody)) {
            // If every item is a string, render as a single animated <ul>
            if (normalizedBody.every(item => typeof item === 'string')) {
              return (
                <AnimatedBulletList items={normalizedBody} />
              );
            }
            // Otherwise, render mixed content
            return (
              <>
                {normalizedBody.map((item, idx) => {
                  if (typeof item === 'string') {
                    return (
                      <p key={idx} className="mb-2 text-gray-700 dark:text-gray-200 font-sans">
                        {item}
                      </p>
                    );
                  } else if (Array.isArray(item)) {
                    return (
                      <AnimatedBulletList key={idx} items={item} />
                    );
                  } else {
                    return null;
                  }
                })}
              </>
            );
          } else if (typeof normalizedBody === 'string') {
            return (
              <p className="mb-2 text-gray-700 dark:text-gray-200 font-sans">
                {normalizedBody}
              </p>
            );
          } else {
            return null;
          }
        })()
      ) : snippet.body ? (
        <p className="mb-2 text-gray-700 dark:text-gray-200 font-sans">
          {snippet.body.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      ) : null}
    </div>
  );
  let canvasSection = (snippet.visuals && snippet.visuals.length > 0) ? (
    <div
      className={`canvas flex items-center justify-center h-full ${isDev ? 'bg-gray-100/50' : ''} modern-border-radius-lg ${stackedState ? 'col-span-12 w-full' : `col-span-1 md:col-span-${Math.min(visualCols,6)} md:w-full ${canvasGridClass}`}`}
      style={{ transition: 'background 0.2s', position: 'relative' }}
    >
      <div
        className="w-full aspect-w-16 aspect-h-9 relative"
        style={{ position: 'relative' }}
        onMouseMove={pointerMode ? handlePointerMove : undefined}
        onMouseLeave={pointerMode ? handlePointerLeave : undefined}
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
              {renderVisual(asset)}
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
      </div>
    </div>
  ) : null;

  // Order logic
  let children;
  if (stackedState) {
    children = [
      textSection && React.cloneElement(textSection, { key: 'text' }),
      canvasSection && React.cloneElement(canvasSection, { key: 'canvas' })
    ].filter(Boolean);
  } else if (canvasLeftState) {
    children = [
      canvasSection && React.cloneElement(canvasSection, { key: 'canvas' }),
      textSection && React.cloneElement(textSection, { key: 'text' })
    ].filter(Boolean);
  } else {
    children = [
      textSection && React.cloneElement(textSection, { key: 'text' }),
      canvasSection && React.cloneElement(canvasSection, { key: 'canvas' })
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
      className="w-full"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 my-8 items-start w-full"
        style={{ height: '100%' }}
      >
        {children}
      </div>
      {/* Docker bar absolutely positioned bottom-right of InfoSnippet */}
      <div className="absolute bottom-4 right-4 z-50">
        <div className="hidden md:flex items-center gap-4 px-3 py-2 modern-border-radius-xl modern-shadow-xl glass-effect flex-wrap transition-all duration-300 ease-in-out overflow-hidden w-fit">
          {showDockerControls && (
            <>
              <Tooltip label={pointerMode ? 'Disable pointer positioner' : 'Enable pointer positioner'}>
                <button
                  onClick={() => setPointerMode((v) => !v)}
                  className={`w-10 h-10 p-0 modern-border-radius border text-sm font-bold transition-all duration-300 flex items-center justify-center text-gray-700 dark:text-gray-200 ${pointerMode ? 'bg-accent text-white border-accent modern-shadow-md' : 'glass-effect border-gray-300 dark:border-gray-600 hover:scale-105 hover:modern-shadow'}`}
                  aria-label={pointerMode ? 'Disable pointer positioner' : 'Enable pointer positioner'}
                >
                  <PointerIcon width={20} height={20} />
                </button>
              </Tooltip>
              <Tooltip label="Cycle text vertical alignment">
                <button
                  onClick={() => setTextAlign(a => a === 'top' ? 'middle' : a === 'middle' ? 'bottom' : 'top')}
                  className={`w-10 h-10 p-0 modern-border-radius border text-sm font-bold transition-all duration-300 flex items-center justify-center text-gray-700 dark:text-gray-200 glass-effect border-gray-300 dark:border-gray-600 ${stackedState ? 'opacity-50 pointer-events-none' : 'hover:scale-105 hover:modern-shadow'}`}
                  aria-label="Cycle text vertical alignment"
                  disabled={stackedState}
                >
                  {textAlign === 'top' && <TextTopIcon width={20} height={20} />}
                  {textAlign === 'middle' && <TextMiddleIcon width={20} height={20} />}
                  {textAlign === 'bottom' && <TextBottomIcon width={20} height={20} />}
                </button>
              </Tooltip>
              <Tooltip label={canvasLeftState ? 'Canvas on left' : 'Canvas on right'}>
                <button
                  onClick={() => setCanvasLeft((v) => !v)}
                  className={`w-10 h-10 p-0 modern-border-radius border text-sm font-bold transition-all duration-300 flex items-center justify-center text-gray-700 dark:text-gray-200 ${canvasLeftState ? 'bg-accent text-white border-accent modern-shadow-md' : 'glass-effect border-gray-300 dark:border-gray-600 hover:scale-105 hover:modern-shadow'}`}
                  aria-label={canvasLeftState ? 'Canvas on left' : 'Canvas on right'}
                >
                  {canvasLeftState ? <CanvasLeftIcon width={20} height={20} /> : <CanvasRightIcon width={20} height={20} />}
                </button>
              </Tooltip>
              <Tooltip label={stackedState ? 'Stacked layout' : 'Side-by-side layout'}>
                <button
                  onClick={() => setStacked((v) => !v)}
                  className={`w-10 h-10 p-0 modern-border-radius border text-sm font-bold transition-all duration-300 flex items-center justify-center text-gray-700 dark:text-gray-200 ${stackedState ? 'bg-accent text-white border-accent modern-shadow-md' : 'glass-effect border-gray-300 dark:border-gray-600 hover:scale-105 hover:modern-shadow'}`}
                  aria-label={stackedState ? 'Stacked layout' : 'Side-by-side layout'}
                >
                  {stackedState ? <StackedIcon width={20} height={20} /> : <SideBySideIcon width={20} height={20} />}
                </button>
              </Tooltip>
              <Tooltip label="Cycle canvas columns">
                <button
                  onClick={() => setCanvasCols(CANVAS_COL_OPTIONS[(CANVAS_COL_OPTIONS.indexOf(canvasCols) + 1) % CANVAS_COL_OPTIONS.length])}
                  className={`h-10 px-3 modern-border-radius border text-sm font-bold transition-all duration-300 flex items-center justify-center text-gray-700 dark:text-gray-200 glass-effect border-gray-300 dark:border-gray-600 hover:scale-105 hover:modern-shadow`}
                  aria-label="Cycle canvas columns"
                >
                  <CanvasWidthIcon width={20} height={20} className="mr-2" />
                  <span className="text-gray-700 dark:text-gray-200">{canvasCols}</span>
                </button>
              </Tooltip>
            </>
          )}
          <Tooltip label={showDockerControls ? 'Hide controls' : 'Show controls'}>
            <button
              onClick={() => setShowDockerControls((v) => !v)}
              className="w-10 h-10 p-0 modern-border-radius border text-sm font-bold transition-all duration-300 flex items-center justify-center text-gray-700 dark:text-gray-200 glass-effect border-gray-300 dark:border-gray-600 hover:scale-105 hover:modern-shadow"
              aria-label={showDockerControls ? 'Hide controls' : 'Show controls'}
            >
              <LayoutIcon width={20} height={20} />
            </button>
          </Tooltip>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoSnippet;

function AnimatedAccentLine() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: inView ? 1 : 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full h-0.5 bg-accent modern-border-radius mt-2 mb-4"
      style={{ transformOrigin: 'left' }}
    />
  );
}

function TypewriterHeading({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [inView, text]);

  return (
    <h3 ref={ref} className={className} style={style} aria-label={text}>
      {displayed}
      <span style={{ opacity: displayed.length < text.length ? 1 : 0 }}>|</span>
    </h3>
  );
} 
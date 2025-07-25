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
};

const LottieVisual: React.FC<{ src: string; caption?: string }> = ({ src, caption }) => {
  const [animationData, setAnimationData] = React.useState<any>(null);

  React.useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => setAnimationData(null));
  }, [src]);

  return (
    <div className="mb-4 w-full h-full flex items-center justify-center">
      {animationData ? (
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400">Loading animation...</div>
      )}
      {caption && <div className="text-xs text-gray-500 mt-1">{caption}</div>}
    </div>
  );
};

function renderVisual(asset: VisualAssetWithRadius | { type: "lottie"; src: string; alt?: string; caption?: string }) {
  if (asset.type === "image") {
    return (
      <figure className="mb-4">
        <img src={asset.src} alt={asset.alt || ""} className="w-full rounded" />
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
          className="w-full h-full rounded shadow"
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
          className="w-full h-full rounded shadow"
        />
        {asset.caption && <div className="text-xs text-gray-500 mt-1">{asset.caption}</div>}
      </div>
    );
  }
  if (asset.type === "video" && !asset.embedType) {
    return (
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <video controls className={`w-full h-full ${radiusClassMap[asset.radius || 'rounded']}`}>
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
          className="w-full h-64 rounded shadow"
          allowFullScreen
        />
        {asset.caption && <div className="text-xs text-gray-500 mt-1">{asset.caption}</div>}
      </div>
    );
  }
  if (asset.type === "lottie") {
    return <LottieVisual src={asset.src} caption={asset.caption} />;
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
  'rounded': 'rounded',
  'rounded-md': 'rounded-md',
  'rounded-lg': 'rounded-lg',
  'rounded-xl': 'rounded-xl',
  'rounded-2xl': 'rounded-2xl',
  'rounded-full': 'rounded-full',
};

function normalizeBody(body: any) {
  if (Array.isArray(body) && body.length === 1 && Array.isArray(body[0])) {
    return body[0];
  }
  return body;
}

function useInViewOnce(threshold = 0.2) {
  const ref = React.useRef<HTMLUListElement>(null);
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

const InfoSnippet: React.FC<InfoSnippetProps> = ({ snippet }) => {
  const layout: InfoSnippetLayout | undefined = snippet.layout as InfoSnippetLayout | undefined;
  // Docker state (per instance)
  const [pointerMode, setPointerMode] = React.useState(false);
  const [canvasLeft, setCanvasLeft] = React.useState(false);
  const [stacked, setStacked] = React.useState(false);
  const [showDockerControls, setShowDockerControls] = React.useState(false);
  const [textAlign, setTextAlign] = React.useState<'top' | 'middle' | 'bottom'>(
    layout?.textAlign || 'top'
  );
  const [canvasCols, setCanvasCols] = useState(layout?.visualColumns ?? 8);

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
  if (!stacked) {
    if (textAlign === 'top') justify = 'justify-start';
    else if (textAlign === 'bottom') justify = 'justify-end';
    else justify = 'justify-center';
  }
  // Calculate grid placement for text and canvas
  const textColStart = canvasLeft ? visualCols + 1 : 1;
  const canvasColStart = canvasLeft ? 1 : textCols + 1;
  const textColSpan = textCols;
  const canvasColSpan = visualCols;

  // Build Tailwind classes for grid placement
  const textGridClass = `${colStartClass[textColStart] || ''} ${colSpanClass[textColSpan] || ''}`;
  const canvasGridClass = `${colStartClass[canvasColStart] || ''} ${colSpanClass[canvasColSpan] || ''}`;

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

  let textSection = (
    <div
      className={`flex flex-col ${justify} h-full ${stacked ? 'col-span-12 w-full' : `col-span-1 md:col-span-${Math.min(textCols,6)} md:w-full ${textGridClass}`}`}
    >
      {snippet.heading && (
        <div style={{ position: 'relative', width: '100%' }}>
          <TypewriterHeading
            text={snippet.heading}
            className="font-bold mb-1 text-gray-900 dark:text-gray-100"
            style={{ fontSize: 32, fontFamily: 'var(--font-bodoni)' }}
          />
          {/* Animated accent line */}
          <AnimatedAccentLine />
        </div>
      )}
      {snippet.subheading && <h4 className="font-semibold mb-2 text-gray-600 dark:text-gray-300" style={{ fontSize: 20, fontFamily: 'var(--font-manrope)' }}>{snippet.subheading}</h4>}
      {(() => { console.log('snippet.body:', snippet.body); return null; })()}
      {Array.isArray(snippet.body) ? (
        (() => {
          const normalizedBody = normalizeBody(snippet.body);
          if (Array.isArray(normalizedBody)) {
            // If every item is a string, render as a single animated <ul>
            if (normalizedBody.every(item => typeof item === 'string')) {
              const [ref, inView] = useInViewOnce(0.1);
              return (
                <motion.ul
                  ref={ref}
                  className="custom-bullets mb-2 text-gray-700 dark:text-gray-200"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                  variants={bulletListVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {normalizedBody.map((bullet: string, idx: number) => (
                    <motion.li key={idx} variants={bulletItemVariants}>{bullet}</motion.li>
                  ))}
                </motion.ul>
              );
            }
            // Otherwise, render mixed content
            return (
              <>
                {normalizedBody.map((item, idx) => {
                  if (typeof item === 'string') {
                    return (
                      <p key={idx} className="mb-2 text-gray-700 dark:text-gray-200" style={{ fontFamily: 'var(--font-manrope)' }}>
                        {item}
                      </p>
                    );
                  } else if (Array.isArray(item)) {
                    const [ref, inView] = useInViewOnce(0.1);
                    return (
                      <motion.ul
                        key={idx}
                        ref={ref}
                        className="custom-bullets mb-2 text-gray-700 dark:text-gray-200"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                        variants={bulletListVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                      >
                        {item.map((bullet: string, bidx: number) => (
                          <motion.li key={bidx} variants={bulletItemVariants}>{bullet}</motion.li>
                        ))}
                      </motion.ul>
                    );
                  } else {
                    return null;
                  }
                })}
              </>
            );
          } else if (typeof normalizedBody === 'string') {
            return (
              <p className="mb-2 text-gray-700 dark:text-gray-200" style={{ fontFamily: 'var(--font-manrope)' }}>
                {normalizedBody}
              </p>
            );
          } else {
            return null;
          }
        })()
      ) : snippet.body ? (
        <p className="mb-2 text-gray-700 dark:text-gray-200" style={{ fontFamily: 'var(--font-manrope)' }}>
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
      className={`canvas flex items-center justify-center h-full ${isDev ? 'bg-gray-100' : ''} ${stacked ? 'col-span-12 w-full' : `col-span-1 md:col-span-${Math.min(visualCols,6)} md:w-full ${canvasGridClass}`}`}
      style={{ transition: 'background 0.2s', position: 'relative' }}
    >
      <div
        className="w-full aspect-w-16 aspect-h-9 relative flex items-center justify-center"
        style={{ position: 'relative' }}
        onMouseMove={pointerMode ? handlePointerMove : undefined}
        onMouseLeave={pointerMode ? handlePointerLeave : undefined}
      >
        {snippet.visuals.map((asset, i) => (
          <div key={i} className="w-full h-full flex items-center justify-center">
            {renderVisual(asset)}
          </div>
        ))}
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
  if (stacked) {
    children = [
      textSection && React.cloneElement(textSection, { key: 'text' }),
      canvasSection && React.cloneElement(canvasSection, { key: 'canvas' })
    ].filter(Boolean);
  } else if (canvasLeft) {
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
    <div className="w-full">
      <div
        className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 my-8 items-start w-full"
        style={{ height: '100%' }}
      >
        {children}
      </div>
      {/* Docker bar absolutely positioned bottom-right of InfoSnippet */}
      <div className="absolute bottom-4 right-4 z-50">
        <div className="hidden md:flex items-center gap-4 px-1 py-1 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/40 dark:bg-black/30 border border-black/10 dark:border-white/10 flex-wrap transition-all duration-300 ease-in-out overflow-hidden w-fit">
          {showDockerControls && (
            <>
              <Tooltip label={pointerMode ? 'Disable pointer positioner' : 'Enable pointer positioner'}>
                <button
                  onClick={() => setPointerMode((v) => !v)}
                  className={`w-10 h-10 p-0 rounded-full border text-sm font-bold transition-colors duration-200 flex items-center justify-center text-gray-700 dark:text-gray-200 ${pointerMode ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-neutral-800'}`}
                  aria-label={pointerMode ? 'Disable pointer positioner' : 'Enable pointer positioner'}
                >
                  <PointerIcon width={20} height={20} />
                </button>
              </Tooltip>
              <Tooltip label="Cycle text vertical alignment">
                <button
                  onClick={() => setTextAlign(a => a === 'top' ? 'middle' : a === 'middle' ? 'bottom' : 'top')}
                  className={`w-10 h-10 p-0 rounded-full border text-sm font-bold transition-colors duration-200 flex items-center justify-center text-gray-700 dark:text-gray-200 bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-700 ${stacked ? 'opacity-50 pointer-events-none' : 'hover:bg-gray-200 dark:hover:bg-neutral-800'}`}
                  aria-label="Cycle text vertical alignment"
                  disabled={stacked}
                >
                  {textAlign === 'top' && <TextTopIcon width={20} height={20} />}
                  {textAlign === 'middle' && <TextMiddleIcon width={20} height={20} />}
                  {textAlign === 'bottom' && <TextBottomIcon width={20} height={20} />}
                </button>
              </Tooltip>
              <Tooltip label={canvasLeft ? 'Canvas on left' : 'Canvas on right'}>
                <button
                  onClick={() => setCanvasLeft((v) => !v)}
                  className={`w-10 h-10 p-0 rounded-full border text-sm font-bold transition-colors duration-200 flex items-center justify-center text-gray-700 dark:text-gray-200 ${canvasLeft ? 'bg-green-600 text-white border-green-600' : 'bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-700 hover:bg-green-100 dark:hover:bg-neutral-800'}`}
                  aria-label={canvasLeft ? 'Canvas on left' : 'Canvas on right'}
                >
                  {canvasLeft ? <CanvasLeftIcon width={20} height={20} /> : <CanvasRightIcon width={20} height={20} />}
                </button>
              </Tooltip>
              <Tooltip label={stacked ? 'Stacked layout' : 'Side-by-side layout'}>
                <button
                  onClick={() => setStacked((v) => !v)}
                  className={`w-10 h-10 p-0 rounded-full border text-sm font-bold transition-colors duration-200 flex items-center justify-center text-gray-700 dark:text-gray-200 ${stacked ? 'bg-purple-600 text-white border-purple-600' : 'bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-700 hover:bg-purple-100 dark:hover:bg-neutral-800'}`}
                  aria-label={stacked ? 'Stacked layout' : 'Side-by-side layout'}
                >
                  {stacked ? <StackedIcon width={20} height={20} /> : <SideBySideIcon width={20} height={20} />}
                </button>
              </Tooltip>
              <Tooltip label="Cycle canvas columns">
                <button
                  onClick={() => setCanvasCols(CANVAS_COL_OPTIONS[(CANVAS_COL_OPTIONS.indexOf(canvasCols) + 1) % CANVAS_COL_OPTIONS.length])}
                  className={`h-10 px-3 rounded-full border text-sm font-bold transition-colors duration-200 flex items-center justify-center text-gray-700 dark:text-gray-200 bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-neutral-800`}
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
              className="w-10 h-10 p-0 rounded-full border text-sm font-bold transition-colors duration-200 flex items-center justify-center text-gray-700 dark:text-gray-200 bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-neutral-800"
              aria-label={showDockerControls ? 'Hide controls' : 'Show controls'}
            >
              <LayoutIcon width={20} height={20} />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
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
      style={{
        transformOrigin: 'left',
        height: 2, // thinner line
        width: '100%',
        background: 'var(--accent-color)',
        borderRadius: 2,
        marginTop: 4,
      }}
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
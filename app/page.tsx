"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ProjectSlider from "../components/ProjectSlider";
// @ts-ignore: If type declaration is missing, ignore for now
import { landingContent } from "../content/landing/landing-content";
import InfoSnippet from "../components/InfoSnippet";
import type { InfoSnippet as InfoSnippetType, CaseStudyContent } from "../public/assets/case studies/project1/content";
import caseStudy from "../public/assets/case studies/project1/content";
import React, { useState, useRef } from "react";
import CanvasLeftIcon from "../components/icons/CanvasLeftIcon";
import CanvasRightIcon from "../components/icons/CanvasRightIcon";
import StackedIcon from "../components/icons/StackedIcon";
import SideBySideIcon from "../components/icons/SideBySideIcon";
import PointerIcon from "../components/icons/PointerIcon";
import CanvasWidthIcon from "../components/icons/CanvasWidthIcon";
import LayoutIcon from "../components/icons/LayoutIcon";
import TextTopIcon from "../components/icons/TextTopIcon";
import TextMiddleIcon from "../components/icons/TextMiddleIcon";
import TextBottomIcon from "../components/icons/TextBottomIcon";

const CANVAS_COL_OPTIONS = [4, 6, 8, 9];

const baseSnippet: InfoSnippetType = {
  heading: "Canvas Visual Example",
  subheading: "This is a placeholder visual asset.",
  body: "The canvas area below shows a fixed 16:9 ratio with a placeholder image. In development, the canvas background is light gray.",
  visuals: [
    {
      type: "image",
      src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753379562/placeholder_ios7om.png",
      alt: "Canvas placeholder",
      caption: "Cloudinary-hosted placeholder image"
    }
  ],
  layout: { textColumns: 4, visualColumns: 8 }
};

// Import additional case studies here as needed
const caseStudies = [
  require("../public/assets/case studies/project1/content").default,
  // Add more case studies here
];

export default function Home() {
  // Ensure the accent circle is always a perfect circle
  const circleSize = Math.min(
    landingContent.profileImage.width,
    landingContent.profileImage.height
  );

  // Docker state for canvas columns
  const [canvasCols, setCanvasCols] = useState(8);
  const [pointerMode, setPointerMode] = useState(false);
  const [canvasLeft, setCanvasLeft] = useState(false);
  const [stacked, setStacked] = useState(false);
  const [showDockerControls, setShowDockerControls] = useState(false);
  const [textAlign, setTextAlign] = useState<'top' | 'middle' | 'bottom'>('middle');
  const textCols = 12 - canvasCols;
  const [activeCaseStudyIndex, setActiveCaseStudyIndex] = useState<number | null>(null);
  const infoSectionRef = useRef<HTMLDivElement | null>(null);
  // const snippet: InfoSnippetType = {
  //   ...baseSnippet,
  //   layout: { textColumns: textCols, visualColumns: canvasCols }
  // };

  return (
    <main className="main-content flex flex-col min-h-screen px-8 py-12">
      <div className="w-full max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
        {/* Left Column - Text Content */}
        <div className="flex flex-col items-center lg:items-start justify-center">
          <div className="flex flex-col md:flex-row lg:flex-col items-center lg:items-start gap-8 lg:gap-12">
            {/* Profile Image */}
            <div
              className="relative flex-shrink-0 flex items-center justify-center"
              style={{
                width: circleSize,
                height: circleSize,
                transform: 'scaleX(-1)'
              }}
            >
              {/* Accent color circle */}
              {landingContent.accentCircle && (
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ zIndex: 1, background: "var(--accent-color, #16A34A)" }}
                />
              )}
              {/* Profile image on top of the circle */}
              <Image
                src={landingContent.profileImage.src.startsWith('http') ? landingContent.profileImage.src : `/assets/landing/${landingContent.profileImage.src}`}
                alt={landingContent.profileImage.alt}
                width={landingContent.profileImage.width}
                height={landingContent.profileImage.height}
                className="object-cover absolute"
                style={{ ...(landingContent.profileImage.style as React.CSSProperties), zIndex: 2 }}
                priority
                unoptimized
              />
            </div>
            {/* Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="font-sans font-light max-w-lg text-foreground-light dark:text-foreground-dark leading-relaxed mb-2">{landingContent.intro}</span>
              <h1 className="text-4xl md:text-6xl font-light mb-4 font-heading text-foreground-light dark:text-foreground-dark">{landingContent.heading}</h1>
              <p className="font-sans font-light max-w-lg text-foreground-light dark:text-foreground-dark leading-relaxed">
                {landingContent.subheading}
              </p>
            </div>
          </div>
        </div>
        {/* Right Column - Project Slider */}
        <div className="flex items-center justify-center">
          {landingContent.projectSlider && (
            <ProjectSlider
              onCardClick={(idx: number) => {
                setActiveCaseStudyIndex((prev) => (prev === idx ? null : idx));
                setTimeout(() => {
                  if (infoSectionRef.current && idx !== null) {
                    infoSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 0);
              }}
            />
          )}
        </div>
      </div>
      {activeCaseStudyIndex !== null && (
        <section ref={infoSectionRef} className="w-full max-w-5xl mx-auto mt-16">
          {caseStudies[activeCaseStudyIndex].infoSnippets.map((snippet: InfoSnippetType, idx: number) => (
            <div key={idx} className="relative mb-16">
              <InfoSnippet snippet={snippet} />
            </div>
          ))}
        </section>
      )}
      {/* Social Media Logos Row */}
      <div className="w-full flex justify-center gap-2 mt-auto mb-8">
        {landingContent.socialIcons.map((icon: { name: string; url: string; icon: string }) => (
          <a
            key={icon.name}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label={icon.name}
          >
            {icon.icon.endsWith('.svg') ? (
              <img src={`/assets/landing/${icon.icon}`} alt={icon.name} className="w-7 h-7" />
            ) : (
              // For inline SVG or fallback, just render the name for now
              icon.name
            )}
          </a>
        ))}
      </div>
    </main>
  );
}


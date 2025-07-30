"use client";
import Image from "next/image";
import ProjectSlider from "../components/ProjectSlider";
// @ts-ignore: If type declaration is missing, ignore for now
import { landingContent } from "../content/landing/landing-content";
import React from "react";

export default function Home() {
  // Ensure the accent circle is always a perfect circle
  const circleSize = Math.min(
    landingContent.profileImage.width,
    landingContent.profileImage.height
  );

  return (
    <main className="main-content flex flex-col min-h-screen px-8 py-16">
      <section className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[calc(100vh-300px)]">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center lg:items-start justify-center lg:pr-16">
            <div className="flex flex-col md:flex-row lg:flex-col items-center lg:items-start gap-10 lg:gap-16">
              {/* Profile Image */}
              <div
                className="relative flex-shrink-0 flex items-center justify-center group"
                style={{
                  width: circleSize,
                  height: circleSize,
                  transform: 'scaleX(-1)'
                }}
              >
                {/* Accent color circle */}
                {landingContent.accentCircle && (
                  <div
                    className="absolute inset-0 rounded-full transition-all duration-500 group-hover:scale-105"
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
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:max-w-[500px]">
                <span className="font-sans font-medium max-w-lg text-foreground-light/80 dark:text-foreground-dark/80 leading-relaxed mb-3 text-lg tracking-wide">{landingContent.intro}</span>
                <h1 className="text-7xl font-light mb-6 font-heading gradient-text tracking-tight">{landingContent.heading}</h1>
                <p 
                  className="font-sans font-normal max-w-lg text-foreground-light/90 dark:text-foreground-dark/90 leading-relaxed text-lg"
                  dangerouslySetInnerHTML={{ __html: landingContent.subheading }}
                />
              </div>
            </div>
          </div>
          {/* Right Column - Project Slider */}
          <div className="flex items-center justify-center w-full max-w-lg lg:max-w-xl mx-auto">
            {landingContent.projectSlider && (
              <ProjectSlider />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}


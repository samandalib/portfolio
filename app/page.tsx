import Image from "next/image";
import styles from "./page.module.css";
import ProjectSlider from "../components/ProjectSlider";
// @ts-ignore: If type declaration is missing, ignore for now
import { landingContent } from "../content/landing/landing-content";

export default function Home() {
  // Ensure the accent circle is always a perfect circle
  const circleSize = Math.min(
    landingContent.profileImage.width,
    landingContent.profileImage.height
  );

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
          {landingContent.projectSlider && <ProjectSlider />}
        </div>
      </div>
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

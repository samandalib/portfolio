"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with seamless user experience and intuitive design patterns.",
    image: "/assets/landing/acc.png",
    tags: ["UI/UX", "E-commerce", "Mobile"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Healthcare App",
    description: "Redesigning healthcare accessibility through thoughtful digital experiences and user-centered design.",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Healthcare", "Mobile", "Accessibility"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description: "Simplifying complex financial data into clear, actionable insights for better decision making.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Fintech", "Dashboard", "Data Viz"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Social Platform",
    description: "Building meaningful connections through innovative social features and community-driven design.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Social", "Community", "Mobile"],
    color: "from-orange-500 to-red-500"
  }
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextProject();
    }
    if (isRightSwipe) {
      prevProject();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      {/* Fanned Cards Container */}
      <div 
        className="relative h-[500px] w-full flex items-center justify-center touch-pan-y select-none" 
        style={{ perspective: '1200px' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project, index) => {
          const offset = index - currentIndex;
          const absOffset = Math.abs(offset);
          const isActive = index === currentIndex;
          
          // Calculate positioning for fanned effect
          let transform = '';
          let zIndex = projects.length - absOffset;
          let opacity = 1;
          
          if (offset === 0) {
            // Active card - center front
            transform = 'translateX(0) translateZ(0) rotateY(0deg)';
            opacity = 1;
            zIndex = 10;
          } else if (offset > 0) {
            // Cards to the right - fan out
            const angle = Math.min(offset * 25, 45);
            const translateX = Math.min(offset * 120, 200);
            const translateZ = -Math.min(offset * 50, 100);
            transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(-${angle}deg)`;
            opacity = Math.max(0.7 - (absOffset - 1) * 0.2, 0.3);
          } else {
            // Cards to the left - fan out
            const angle = Math.min(absOffset * 25, 45);
            const translateX = -Math.min(absOffset * 120, 200);
            const translateZ = -Math.min(absOffset * 50, 100);
            transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${angle}deg)`;
            opacity = Math.max(0.7 - (absOffset - 1) * 0.2, 0.3);
          }

          return (
            <div
              key={project.id}
              className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                !isActive ? 'hover:scale-105' : ''
              } aspect-[4/5.5]`}
              style={{
                transform,
                zIndex,
                opacity,
                transformStyle: 'preserve-3d',
                width: '400px',
                height: undefined,
              }}
              onClick={() => !isActive && goToProject(index)}
            >
              <div className="w-full h-full rounded-2xl shadow-2xl overflow-hidden border border-white/10 relative group">
                {/* Project Image */}
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-110 ${index === 0 ? 'animate-zoomrotate' : ''}`}
                    style={index === 0 ? { objectPosition: 'left center' } : {}}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Frosted Glass Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl">
                    <h3 className="text-xl font-bold mb-2 text-white drop-shadow-lg text-left">
                      {project.title}
                    </h3>
                    <p className="font-sans text-white/90 mb-4 leading-relaxed line-clamp-2 drop-shadow-md text-left">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="font-sans px-3 py-1 font-medium bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Minimal Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-2 bg-foreground-light/60 dark:bg-foreground-dark/60'
                : 'w-2 h-2 bg-foreground-light/30 dark:bg-foreground-dark/30 hover:bg-foreground-light/50 dark:hover:bg-foreground-dark/50'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
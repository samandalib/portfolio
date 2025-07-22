"use client";
import { useState } from 'react';
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
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
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

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-lg mx-auto relative">
      {/* Stacked Cards Container */}
      <div className="relative h-[500px] w-full perspective-1000">
        {projects.map((project, index) => {
          const isActive = index === currentIndex;
          const offset = index - currentIndex;
          const absOffset = Math.abs(offset);
          
          // Calculate positioning and styling based on card position
          let transform = '';
          let zIndex = projects.length - absOffset;
          let opacity = 1;
          let scale = 1;
          
          if (offset === 0) {
            // Active card - front and center
            transform = 'translateX(0) translateY(0) rotateY(0deg)';
            scale = 1;
            opacity = 1;
          } else if (offset > 0) {
            // Cards to the right
            transform = `translateX(${Math.min(offset * 20, 60)}px) translateY(${offset * 8}px) rotateY(-${Math.min(offset * 15, 25)}deg)`;
            scale = Math.max(0.85 - (absOffset - 1) * 0.1, 0.7);
            opacity = Math.max(0.4 - (absOffset - 1) * 0.2, 0.2);
          } else {
            // Cards to the left
            transform = `translateX(${Math.max(offset * 20, -60)}px) translateY(${absOffset * 8}px) rotateY(${Math.min(absOffset * 15, 25)}deg)`;
            scale = Math.max(0.85 - (absOffset - 1) * 0.1, 0.7);
            opacity = Math.max(0.4 - (absOffset - 1) * 0.2, 0.2);
          }

          return (
            <div
              key={project.id}
              className={`absolute inset-0 transition-all duration-700 ease-out cursor-pointer ${
                !isActive ? 'hover:scale-105' : ''
              }`}
              style={{
                transform: `${transform} scale(${scale})`,
                zIndex,
                opacity,
                transformStyle: 'preserve-3d',
              }}
              onClick={() => !isActive && goToProject(index)}
            >
              <div className="w-full h-full rounded-3xl shadow-2xl overflow-hidden border border-white/20 relative group">
                {/* Full Project Image */}
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Navigation Arrows - Only show on active card */}
                  {isActive && (
                    <>
                      {/* Left Arrow */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevProject();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 group/arrow"
                        aria-label="Previous project"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="text-white group-hover/arrow:text-white transition-colors duration-300"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Right Arrow */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextProject();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 group/arrow"
                        aria-label="Next project"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="text-white group-hover/arrow:text-white transition-colors duration-300"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Frosted Glass Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/10 backdrop-blur-lg border-t border-white/20">
                    <h3 className="text-xl font-bold mb-2 text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-4 leading-relaxed line-clamp-2 drop-shadow-md">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button - only show on active card */}
                    {isActive && (
                      <button className="w-full py-3 px-4 bg-white/20 backdrop-blur-md text-white rounded-xl font-semibold transition-all duration-300 hover:bg-white/30 hover:scale-105 transform border border-white/30">
                        View Project
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Minimal Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-2 bg-white/80'
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
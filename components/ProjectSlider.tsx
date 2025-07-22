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
      <div className="relative h-96 w-full perspective-1000">
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
              <div className="w-full h-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 z-10`} />
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Project Content */}
                <div className="relative z-20 p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground-light dark:text-foreground-dark">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${project.color} text-white rounded-full shadow-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button - only show on active card */}
                  {isActive && (
                    <button className={`w-full py-3 px-4 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform`}>
                      View Project
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center mt-8 space-x-6">
        {/* Previous Button */}
        <button
          onClick={prevProject}
          className="group p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100 dark:border-gray-700"
          aria-label="Previous project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-gray-600 dark:text-gray-300 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-3 bg-gradient-to-r from-accent-light to-accent-dark'
                  : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-125'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextProject}
          className="group p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100 dark:border-gray-700"
          aria-label="Next project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-gray-600 dark:text-gray-300 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Project Counter */}
      <div className="text-center mt-6">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {currentIndex + 1} / {projects.length}
        </span>
      </div>
    </div>
  );
}
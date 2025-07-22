"use client";
import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with seamless user experience and intuitive design patterns.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["UI/UX", "E-commerce", "Mobile"]
  },
  {
    id: 2,
    title: "Healthcare App",
    description: "Redesigning healthcare accessibility through thoughtful digital experiences and user-centered design.",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Healthcare", "Mobile", "Accessibility"]
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description: "Simplifying complex financial data into clear, actionable insights for better decision making.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Fintech", "Dashboard", "Data Viz"]
  },
  {
    id: 4,
    title: "Social Platform",
    description: "Building meaningful connections through innovative social features and community-driven design.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Social", "Community", "Mobile"]
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

  const currentProject = projects[currentIndex];

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Project Card */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={currentProject.image}
            alt={currentProject.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-foreground-light dark:text-foreground-dark">
            {currentProject.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
            {currentProject.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {currentProject.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-accent-light/10 text-accent-light dark:bg-accent-dark/10 dark:text-accent-dark rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Project Button */}
          <button className="w-full py-2 px-4 bg-accent-light dark:bg-accent-dark text-white rounded-lg font-medium transition-all duration-200 hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 hover:shadow-md">
            View Project
          </button>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Previous Button */}
        <button
          onClick={prevProject}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          aria-label="Previous project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-gray-600 dark:text-gray-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-accent-light dark:bg-accent-dark w-6'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextProject}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          aria-label="Next project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-gray-600 dark:text-gray-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Project Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {currentIndex + 1} of {projects.length}
        </span>
      </div>
    </div>
  );
}
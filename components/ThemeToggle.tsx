"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDark(isDark);
  };

  if (!mounted) return null;
  
  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
      aria-label="Toggle light/dark mode"
    >
      {/* Toggle Track */}
      <div className="relative w-full h-full">
        {/* Toggle Circle */}
        <div
          className={`absolute top-0 left-0 w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
            dark ? 'translate-x-7' : 'translate-x-0'
          }`}
        >
          {/* Icon inside the circle */}
          <div className="w-3 h-3 flex items-center justify-center">
            {dark ? (
              // Moon icon
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="12" 
                height="12" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                className="text-gray-600"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" 
                />
              </svg>
            ) : (
              // Sun icon
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="12" 
                height="12" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                className="text-yellow-500"
              >
                <circle cx="12" cy="12" r="5" strokeWidth={2.5} />
                <path 
                  strokeLinecap="round" 
                  strokeWidth={2.5} 
                  d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" 
                />
              </svg>
            )}
          </div>
        </div>
        
        {/* Background Icons */}
        <div className="absolute inset-0 flex items-center justify-between px-1.5">
          {/* Sun icon on the left */}
          <div className={`transition-opacity duration-300 ${dark ? 'opacity-30' : 'opacity-0'}`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="10" 
              height="10" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              className="text-yellow-400"
            >
              <circle cx="12" cy="12" r="5" strokeWidth={2.5} />
              <path 
                strokeLinecap="round" 
                strokeWidth={2.5} 
                d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" 
              />
            </svg>
          </div>
          
          {/* Moon icon on the right */}
          <div className={`transition-opacity duration-300 ${!dark ? 'opacity-30' : 'opacity-0'}`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="10" 
              height="10" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              className="text-blue-300"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" 
              />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}
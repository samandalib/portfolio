"use client";
import { useEffect, useState } from "react";
import { GlobalSettings } from "../content/public/GlobalSettings";

export default function ThemeToggle({ size = 14 }: { size?: number }) {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(true); // Start with true to match server (dark mode)

  useEffect(() => {
    setMounted(true);
    
    // Check if theme is already set in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      // Use saved theme preference
      const isDark = savedTheme === 'dark';
      setDark(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Use default theme from GlobalSettings
      const defaultTheme = GlobalSettings.defaultTheme;
      const isDark = defaultTheme === 'dark';
      setDark(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      // Save the default theme to localStorage
      localStorage.setItem('theme', defaultTheme);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDark(isDark);
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div
        style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
        className="flex items-center justify-center modern-border-radius border-2 border-gray-300 glass-effect modern-shadow"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
      className="flex items-center justify-center modern-border-radius border-2 border-gray-300 dark:border-gray-600 glass-effect modern-shadow transition-all duration-300 hover:scale-105 hover:modern-shadow-md"
      aria-label="Toggle light/dark mode"
    >
      {dark ? (
        // Sun icon for light mode
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-700 dark:text-gray-300">
          <circle cx="12" cy="12" r="5" strokeWidth={2.5} />
          <path strokeLinecap="round" strokeWidth={2.5} d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-700 dark:text-gray-300">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
}
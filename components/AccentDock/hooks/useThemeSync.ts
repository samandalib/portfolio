import { useState, useEffect } from 'react';

export function useThemeSync() {
  const [dark, setDark] = useState(false);

  // Track dark mode
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return { dark };
} 
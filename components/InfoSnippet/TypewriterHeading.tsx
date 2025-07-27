import React, { useRef, useState, useEffect } from 'react';
import type { TypewriterHeadingProps } from './types';

function TypewriterHeading({ text, className, style }: TypewriterHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [inView, text]);

  return (
    <h3 ref={ref} className={className} style={style} aria-label={text}>
      {displayed}
      <span style={{ opacity: displayed.length < text.length ? 1 : 0 }}>|</span>
    </h3>
  );
}

export default TypewriterHeading; 
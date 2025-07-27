import React, { useRef, useEffect } from 'react';
import { motion } from "framer-motion";

function AnimatedAccentLine() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: inView ? 1 : 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full h-0.5 bg-accent modern-border-radius mt-2 mb-4"
      style={{ transformOrigin: 'left' }}
    />
  );
}

export default AnimatedAccentLine; 
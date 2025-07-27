import React from 'react';
import { motion } from "framer-motion";
import { useInViewOnce } from './hooks';
import type { AnimatedBulletListProps } from './types';

const AnimatedBulletList: React.FC<AnimatedBulletListProps> = ({ items }) => {
  const [ref, inView] = useInViewOnce<HTMLUListElement>(0.1);
  
  // Bullet list animation variants
  const bulletListVariants = {
    hidden: {},
    visible: {
      transition: {
        delay: 1.5,
        staggerChildren: 0.12,
      },
    },
  };
  
  const bulletItemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.ul
      ref={ref}
      className="custom-bullets mb-2 text-gray-700 dark:text-gray-200 font-sans"
      variants={bulletListVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {items.map((bullet: string, idx: number) => (
        <motion.li key={idx} variants={bulletItemVariants}>{bullet}</motion.li>
      ))}
    </motion.ul>
  );
};

export default AnimatedBulletList; 
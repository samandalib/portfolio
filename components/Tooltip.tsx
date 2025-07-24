import React, { useState, ReactNode, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  label: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ label, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState<{ left: number; top: number; width: number } | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (visible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        left: rect.left + rect.width / 2,
        top: rect.top,
        width: rect.width,
      });
    }
  }, [visible]);

  return (
    <span
      className="relative inline-block"
      ref={triggerRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      tabIndex={0}
    >
      {children}
      {visible && coords && typeof window !== 'undefined' && createPortal(
        <span
          className="z-[9999] px-3 py-1 rounded-lg bg-white/90 dark:bg-neutral-900/90 text-gray-900 dark:text-gray-100 text-xs font-medium shadow-lg border border-black/10 dark:border-white/10"
          style={{
            fontFamily: 'var(--font-manrope)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            position: 'fixed',
            left: coords.left,
            top: coords.top - 36, // 36px above the trigger
            transform: 'translateX(-50%)',
          }}
        >
          {label}
        </span>,
        document.body
      )}
    </span>
  );
};

export default Tooltip; 
export function getHorizontalOffset(offset: number) {
  if (typeof window === 'undefined') return Math.min(offset * 120, 200); // SSR fallback
  
  const screenWidth = window.innerWidth;
  
  if (screenWidth < 640) { // Mobile
    return Math.min(offset * 20, 40);
  } else if (screenWidth < 1024) { // Tablet
    return Math.min(offset * 40, 80);
  } else { // Desktop
    return Math.min(offset * 120, 200);
  }
}

export function calculateCardTransform(offset: number, isActive: boolean) {
  const absOffset = Math.abs(offset);
  
  if (offset === 0) {
    // Active card - center front
    return {
      transform: 'translateX(0) translateZ(0) rotateY(0deg)',
      opacity: 1,
      zIndex: 10,
    };
  } else if (offset > 0) {
    // Cards to the right - fan out
    const angle = Math.min(offset * 25, 45);
    const translateX = getHorizontalOffset(offset);
    const translateZ = -Math.min(offset * 50, 100);
    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(-${angle}deg)`,
      opacity: Math.max(0.7 - (absOffset - 1) * 0.2, 0.3),
      zIndex: 0,
    };
  } else {
    // Cards to the left - fan out
    const angle = Math.min(absOffset * 25, 45);
    const translateX = -getHorizontalOffset(absOffset);
    const translateZ = -Math.min(absOffset * 50, 100);
    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${angle}deg)`,
      opacity: Math.max(0.7 - (absOffset - 1) * 0.2, 0.3),
      zIndex: 0,
    };
  }
} 
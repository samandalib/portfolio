export function getHorizontalOffset(offset: number) {
  // Use consistent values that work for both SSR and client
  // This prevents hydration mismatches while still providing good visual results
  return Math.min(offset * 60, 120);
}

export function calculateCardTransform(offset: number, isActive: boolean) {
  const absOffset = Math.abs(offset);
  
  if (offset === 0) {
    // Active card - center front
    return {
      transform: 'translateX(0) translateZ(0) rotateY(0deg)',
      opacity: 1,
      zIndex: 100, // Much higher z-index for active card
    };
  } else if (offset > 0) {
    // Cards to the right - fan out
    const angle = Math.min(offset * 25, 45);
    const translateX = getHorizontalOffset(offset);
    const translateZ = -Math.min(offset * 50, 100);
    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(-${angle}deg)`,
      opacity: Math.max(0.8 - (absOffset - 1) * 0.15, 0.4), // Adjusted opacity calculation
      zIndex: 100 - absOffset, // Higher z-index for closer cards
    };
  } else {
    // Cards to the left - fan out
    const angle = Math.min(absOffset * 25, 45);
    const translateX = -getHorizontalOffset(absOffset);
    const translateZ = -Math.min(absOffset * 50, 100);
    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${angle}deg)`,
      opacity: Math.max(0.8 - (absOffset - 1) * 0.15, 0.4), // Adjusted opacity calculation
      zIndex: 100 - absOffset, // Higher z-index for closer cards
    };
  }
} 
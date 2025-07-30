# Animations & Transitions Documentation

## Required Libraries

- **Framer Motion** (`framer-motion`): For declarative, performant React animations (used for staggered lists, accent line, etc.)
- **Lottie React** (`lottie-react`): For rendering Lottie JSON vector animations
- **Tailwind CSS**: For utility-based CSS transitions and responsive styling
- **IntersectionObserver API** (native): For scroll-triggered/in-view animations (used via React hooks)

---

This document lists all custom and notable animations and transitions used in the project, including where they are used and the code file where they are set.

---

## 1. InfoSnippet Heading Typewriter Animation
- **Description:** The heading of each InfoSnippet animates in with a typewriter effect when it comes into view (one character at a time, with a blinking cursor).
- **Where Used:** InfoSnippet headings
- **Code File:** `components/InfoSnippet.tsx` (TypewriterHeading component)
- **Key Details:**
  - Triggered by IntersectionObserver when heading enters viewport
  - Speed: 60ms per character

---

## 2. InfoSnippet Heading Accent Line Animation
- **Description:** An accent-colored line under each InfoSnippet heading animates from left to right (grows in width) when the snippet comes into view.
- **Where Used:** Under InfoSnippet headings
- **Code File:** `components/InfoSnippet.tsx` (AnimatedAccentLine component)
- **Key Details:**
  - Triggered by IntersectionObserver when heading enters viewport
  - Uses Framer Motion for smooth scaleX animation
  - Color: CSS variable `--accent-color`

---

## 3. InfoSnippet Bullet List Staggered Animation
- **Description:** Each bullet point in InfoSnippet lists fades in and slides up, staggered from top to bottom, when the list comes into view.
- **Where Used:** Unordered lists in InfoSnippet body
- **Code File:** `components/InfoSnippet.tsx` (motion.ul and motion.li with Framer Motion)
- **Key Details:**
  - Triggered by IntersectionObserver when list enters viewport
  - 1.5s delay before animation starts
  - Each bullet animates with 0.5s fade/slide and 0.12s stagger

---

## 4. General CSS Transitions
- **Description:** Various UI elements use Tailwind's transition utilities for hover, color, and layout changes.
- **Where Used:** Buttons, Docker bar, accent color changes, etc.
- **Code Files:** Throughout components, especially in `components/`, `app/globals.css`
- **Key Details:**
  - Use of `transition-all`, `duration-300`, `ease-in-out`, etc.

---

## 5. Lottie Animation System
- **Description:** Sophisticated Lottie animation system with automatic playback control and user interaction capabilities.
- **Where Used:** InfoSnippet visuals (if type is 'lottie')
- **Code File:** `components/InfoSnippet.tsx` (LottieVisual component)
- **Key Details:**
  - Uses `lottie-react` for playback
  - Animation data loaded from external JSON
  - Automatic play/pause based on viewport visibility
  - Interactive play/pause button with custom icons
  - Real-time state synchronization
  - Synchronized control of multiple animations
  - Custom play/pause SVG icons from `public/assets/InfoSnippetIcons/`

---

## 6. ProjectSlider Trackpad Gesture System
- **Description:** Advanced gesture detection system for ProjectSlider navigation using trackpad, touch, and mouse interactions.
- **Where Used:** ProjectSlider component on landing page
- **Code File:** `components/ProjectSlider/hooks/useTouchGestures.ts`
- **Key Details:**
  - **Trackpad Support:** Horizontal scroll gestures with native wheel events
  - **Touch Support:** Swipe gestures for mobile/tablet devices
  - **Mouse Support:** Click and drag functionality for desktop
  - **Sensitivity Settings:**
    - Trackpad threshold: 200px accumulated deltaX
    - Touch threshold: 50px swipe distance
    - Mouse drag threshold: 50px drag distance
  - **Throttling:** 100ms throttle for trackpad events to prevent rapid firing
  - **Event Handling:** Uses `addEventListener` with `passive: false` to allow `preventDefault()`
  - **Accumulation:** Tracks accumulated scroll delta for smoother gesture detection
  - **Reset Logic:** Accumulated delta resets after each navigation action

---

## 7. InfoTile Border Trim Path Animation
- **Description:** Animated border with trim path effect that draws itself around InfoTile components using the accent color.
- **Where Used:** InfoTile components in case studies
- **Code Files:** `components/InfoTile/InfoTile.tsx`, `app/globals.css`
- **Key Details:**
  - SVG trim path animation with `stroke-dasharray` and `stroke-dashoffset`
  - Duration: 20s total animation cycle
  - Pause duration: 50% (10 seconds pause before drawing)
  - Drawing time: 50% (10 seconds to complete border drawing)
  - Timing function: `ease-in-out`
  - Repeat: `infinite`
  - Color: Uses CSS variable `var(--accent-color)`
  - Thickness: 1px stroke width
  - Border radius: 16px to match card corners

---

> Update this file whenever a new animation or transition is added to the project, or when an existing one is changed. 
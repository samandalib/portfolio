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

## 5. Lottie Animations
- **Description:** Lottie JSON animations are used for certain visuals in InfoSnippets.
- **Where Used:** InfoSnippet visuals (if type is 'lottie')
- **Code File:** `components/InfoSnippet.tsx` (LottieVisual component)
- **Key Details:**
  - Uses `lottie-react` for playback
  - Animation data loaded from external JSON
  - Viewport-triggered playback (starts when 30% visible)
  - Configurable loop property from content.ts

---

## 6. InfoSnippet Container Fade-In Animation
- **Description:** Each InfoSnippet container fades in and slides up when it comes into view, creating a progressive reveal effect as users scroll.
- **Where Used:** All InfoSnippet components
- **Code File:** `components/InfoSnippet.tsx` (main InfoSnippet component)
- **Key Details:**
  - Triggered by IntersectionObserver when 15% of container enters viewport
  - Initial state: `opacity: 0, y: 40` (invisible and 40px below)
  - Final state: `opacity: 1, y: 0` (fully visible and in position)
  - Duration: 0.8s with custom cubic-bezier easing `[0.25, 0.46, 0.45, 0.94]`
  - Delay: 0.2s before animation starts
  - One-time trigger (animates only once per component)

---

> Update this file whenever a new animation or transition is added to the project, or when an existing one is changed. 
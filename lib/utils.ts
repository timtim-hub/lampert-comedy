import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Motion tokens - curated easing and timing
export const motionTokens = {
  // Durations (in seconds)
  duration: {
    instant: 0.15,
    fast: 0.3,
    medium: 0.5,
    slow: 0.8,
    cinematic: 1.2,
  },
  
  // Easing curves
  easing: {
    // Exit: decelerate
    out: [0, 0, 0.2, 1],
    // Enter: accelerate  
    in: [0.4, 0, 1, 1],
    // Both: smooth
    inOut: [0.4, 0, 0.2, 1],
    // Elastic: playful bounce
    elastic: [0.68, -0.55, 0.265, 1.55],
    // Dramatic: theatrical
    dramatic: [0.87, 0, 0.13, 1],
    // Snappy: quick response
    snappy: [0.25, 0.1, 0.25, 1],
  },
  
  // Spring configs
  spring: {
    gentle: { type: "spring", stiffness: 120, damping: 20 },
    bouncy: { type: "spring", stiffness: 300, damping: 15 },
    snappy: { type: "spring", stiffness: 400, damping: 30 },
    smooth: { type: "spring", stiffness: 100, damping: 25 },
  },
};

// Reusable variants
export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: motionTokens.duration.medium,
      ease: motionTokens.easing.out 
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: motionTokens.duration.fast,
      ease: motionTokens.easing.in 
    }
  },
};

export const slideUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing.dramatic 
    }
  },
};

export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: motionTokens.duration.medium,
      ease: motionTokens.easing.elastic 
    }
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: motionTokens.duration.medium,
      ease: motionTokens.easing.out 
    }
  },
};

export const clipRevealVariants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { 
    clipPath: "inset(0 0% 0 0)",
    transition: { 
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing.dramatic 
    }
  },
};

export const spotlightVariants = {
  initial: { 
    background: "radial-gradient(circle at 50% 50%, rgba(255,107,53,0.15) 0%, transparent 50%)" 
  },
  hover: { 
    background: "radial-gradient(circle at 50% 50%, rgba(255,107,53,0.3) 0%, transparent 60%)",
    transition: { duration: 0.4 }
  },
};

"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { motionTokens } from "@/lib/utils";

interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function KineticText({ 
  text, 
  className = "", 
  delay = 0,
  staggerDelay = 0.03 
}: KineticTextProps) {
  const letters = text.split("");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ perspective: "1000px" }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ 
            transformStyle: "preserve-3d",
            marginRight: letter === " " ? "0.25em" : "0" 
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function SplitRevealText({ 
  text, 
  className = "",
  delay = 0 
}: KineticTextProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: motionTokens.duration.slow,
          delay,
          ease: motionTokens.easing.dramatic,
        }}
      >
        {text}
      </motion.span>
    </div>
  );
}

export function ScrambleText({ 
  text, 
  className = "",
  hover = false 
}: KineticTextProps & { hover?: boolean }) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
  useEffect(() => {
    if (!hover || !isHovering) {
      setDisplayText(text);
      return;
    }
    
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      iteration += 1 / 3;
      
      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [text, hover, isHovering]);

  return (
    <span 
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
    </span>
  );
}

export function ParallaxText({ 
  text, 
  className = "",
  speed = 0.5 
}: KineticTextProps & { speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const x = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ x: springX }} className={className}>
        {text}
      </motion.div>
    </div>
  );
}

"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { KineticText, SplitRevealText } from "./KineticText";
import { MagneticButton, MagneticLink } from "./MagneticButton";
import { motionTokens } from "@/lib/utils";
import { ChevronDown, Instagram } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Animated background layers */}
      <div className="absolute inset-0 z-0">
        {/* Primary spotlight */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255,107,53,0.4) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary floating orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,107,53,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,107,53,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 px-6 md:px-12 lg:px-24"
        style={{ opacity, scale: springScale, y: springY }}
      >
        {/* Pre-title */}
        <motion.div
          className="mb-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.span 
            className="inline-flex items-center gap-3 text-warm font-display text-sm tracking-[0.3em] uppercase"
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: motionTokens.easing.out }}
          >
            <span className="w-12 h-px bg-warm" />
            Stand Up Comedy
          </motion.span>
        </motion.div>

        {/* Main title */}
        <h1 className="font-display text-[clamp(4rem,20vw,16rem)] font-bold leading-[0.85] tracking-tighter text-cream mb-8">
          <KineticText text="LAMPERT" delay={0.5} staggerDelay={0.05} />
        </h1>

        {/* Tagline */}
        <div className="max-w-2xl">
          <SplitRevealText
            text="Einer dieser Abende"
            className="font-display text-2xl md:text-4xl lg:text-5xl text-cream-dim mb-6"
            delay={1.2}
          />
          <motion.p
            className="text-cream-dim/70 text-lg md:text-xl max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Vom Lucky Punch München bis zum Quatsch Comedy Club – 
            Comedy, die unter die Haut geht und zum Lachen bringt.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <MagneticButton onClick={() => document.getElementById('tour')?.scrollIntoView({ behavior: 'smooth' })}>
            Termine
          </MagneticButton>
          <MagneticLink href="https://instagram.com" className="flex items-center gap-2 px-6 py-4 text-cream-dim hover:text-warm transition-colors">
            <Instagram className="w-5 h-5" />
            <span className="font-display text-sm tracking-wider uppercase">Instagram</span>
          </MagneticLink>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <span className="text-cream-dim/50 text-xs tracking-[0.3em] uppercase font-display">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-warm" />
        </motion.div>
      </motion.div>

      {/* Side text */}
      <motion.div
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span 
          className="block font-display text-xs tracking-[0.5em] uppercase text-cream-dim/30"
          style={{ writingMode: "vertical-rl" }}
        >
          Stand Up Comedy seit 2015
        </span>
      </motion.div>
    </section>
  );
}

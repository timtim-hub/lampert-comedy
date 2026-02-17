"use client";

import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { motionTokens, staggerContainer, slideUpVariants } from "@/lib/utils";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const springY = useSpring(parallaxY, { stiffness: 100, damping: 30 });

  return (
    <section 
      ref={ref}
      id="about"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background element */}
      <motion.div
        className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-10"
        style={{ y: springY }}
      >
        <div className="w-full h-full border-l border-warm/30" />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column - Label */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span
              variants={slideUpVariants}
              className="inline-block text-warm font-display text-sm tracking-[0.3em] uppercase mb-6"
            >
              Über Mich
            </motion.span>
            
            <motion.div
              variants={slideUpVariants}
              className="w-24 h-px bg-gradient-to-r from-warm to-transparent mb-12"
            />

            {/* Large quote */}
            <motion.blockquote
              variants={slideUpVariants}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight"
            >
              "Aus Bayern nach Köln – mit einem großen Sprung ins{" "}
              <span className="text-warm">Ungewisse</span>."
            </motion.blockquote>
          </motion.div>

          {/* Right column - Story */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.p
              variants={slideUpVariants}
              className="text-cream-dim text-lg md:text-xl leading-relaxed"
            >
              Fabians Comedykarriere hat mit einem großen Sprung ins Ungewisse begonnen. 
              So ist er aus Bayern nach Köln gezogen, um sich einen Traum zu verwirklichen: 
              Auf der Bühne Menschen zum Lachen zu bringen.
            </motion.p>
            
            <motion.p
              variants={slideUpVariants}
              className="text-cream-dim/80 text-lg leading-relaxed"
            >
              Mit Erfolg, denn mittlerweile ist Fabian nicht mehr von den Bühnen dieses 
              Landes wegzudenken. Regelmäßig begeistert er das Publikum in den etablierten 
              Showformaten wie Nightwash oder dem Quatsch Comedy Club.
            </motion.p>

            <motion.p
              variants={slideUpVariants}
              className="text-cream-dim/80 text-lg leading-relaxed"
            >
              Ebenso stark vertreten in der jungen Generation der Comedy Clubs – vom 
              Münchner Lucky Punch bis zum Downstairs in Berlin.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={slideUpVariants}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-warm/10"
            >
              {[
                { number: "8+", label: "Jahre auf der Bühne" },
                { number: "100+", label: "Shows pro Jahr" },
                { number: "15", label: "Städte" },
              ].map((stat, i) => (
                <div key={i}>
                  <span className="block font-display text-3xl md:text-4xl font-bold text-warm mb-1">
                    {stat.number}
                  </span>
                  <span className="text-cream-dim/60 text-sm">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

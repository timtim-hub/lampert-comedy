"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motionTokens, staggerContainer, slideUpVariants, scaleVariants } from "@/lib/utils";
import { Tv, Play } from "lucide-react";

const tvAppearances = [
  { show: "Nightwash", channel: "TV NOW / RTL", year: "2023", highlight: true },
  { show: "Quatsch Comedy Club", channel: "ProSieben", year: "2022", highlight: true },
  { show: "Lucky Punch", channel: "BR Fernsehen", year: "2023", highlight: false },
  { show: "Comedy Central", channel: "Comedy Central", year: "2022", highlight: false },
  { show: "Downstairs", channel: "Berlin TV", year: "2024", highlight: false },
];

export function TVSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section 
      ref={ref}
      id="tv"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Parallax background elements */}
      <motion.div
        className="absolute left-1/4 top-20 w-96 h-96 rounded-full opacity-5"
        style={{ y: y1 }}
      >
        <div className="w-full h-full bg-warm blur-3xl" />
      </motion.div>
      
      <motion.div
        className="absolute right-1/4 bottom-20 w-64 h-64 rounded-full opacity-5"
        style={{ y: y2 }}
      >
        <div className="w-full h-full bg-accent blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Header with TV icon animation */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-start gap-6 mb-16"
        >
          <motion.div
            variants={scaleVariants}
            className="relative"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-warm/10 flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Tv className="w-10 h-10 md:w-12 md:h-12 text-warm" />
              </motion.div>
            </div>
            {/* Pulse rings */}
            <motion.div
              className="absolute inset-0 rounded-full border border-warm/30"
              animate={{ scale: [1, 1.5], opacity: [1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          
          <div>
            <motion.span
              variants={slideUpVariants}
              className="inline-block text-warm font-display text-sm tracking-[0.3em] uppercase mb-2"
            >
              Media
            </motion.span>
            <motion.h2
              variants={slideUpVariants}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight"
            >
              Mama, ich war<br />im Fernsehen
            </motion.h2>
          </div>
        </motion.div>

        {/* TV Appearances Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tvAppearances.map((appearance, index) => (
            <motion.div
              key={appearance.show}
              className={`group relative depth-card p-8 rounded-sm overflow-hidden cursor-pointer ${
                appearance.highlight ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                ease: motionTokens.easing.out 
              }}
              whileHover={{ y: -5 }}
            >
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-warm/10 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-warm font-display text-sm">{appearance.year}</span>
                  {appearance.highlight && (
                    <motion.span
                      className="px-3 py-1 bg-warm/20 text-warm text-xs font-display tracking-wider uppercase rounded-full"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Highlight
                    </motion.span>
                  )}
                </div>
                
                <h3 className="font-display text-2xl font-bold text-cream mb-2 group-hover:text-warm transition-colors duration-300">
                  {appearance.show}
                </h3>
                <p className="text-cream-dim/60 text-sm">{appearance.channel}</p>

                {/* Play button on hover */}
                <motion.div
                  className="absolute bottom-6 right-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-warm flex items-center justify-center">
                    <Play className="w-5 h-5 text-void ml-0.5" fill="currentColor" />
                  </div>
                </motion.div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                <motion.div
                  className="absolute bottom-0 right-0 w-32 h-32 bg-warm/5 rotate-45 translate-x-16 translate-y-16"
                  whileHover={{ translateX: 8, translateY: 8 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          className="text-center text-cream-dim/50 mt-12 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Weitere Auftritte auf YouTube und Social Media
        </motion.p>
      </div>
    </section>
  );
}

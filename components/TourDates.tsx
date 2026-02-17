"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { motionTokens, staggerContainer, slideUpVariants } from "@/lib/utils";
import { MapPin, Calendar, ArrowUpRight, Ticket } from "lucide-react";

interface TourDate {
  date: string;
  weekday: string;
  event: string;
  venue: string;
  city: string;
  tickets?: string;
  featured?: boolean;
}

// ALL tour dates extracted from original site
const tourDates: TourDate[] = [
  { date: "23.10.25", weekday: "Do", event: "Einer dieser Abende", venue: "Comedy Club", city: "Köln", featured: true },
  { date: "14.01.26", weekday: "Mi", event: "Einer dieser Abende", venue: "Comedy Club", city: "Essen" },
  { date: "15.01.26", weekday: "Do", event: "Einer dieser Abende", venue: "Theater", city: "Frankfurt/Main" },
  { date: "22.01.26", weekday: "Do", event: "Einer dieser Abende", venue: "Comedy Club", city: "Hamburg" },
  { date: "25.01.26", weekday: "So", event: "Einer dieser Abende", venue: "Comedy Club", city: "Bonn" },
  { date: "27.01.26", weekday: "Di", event: "Showcase IKF", venue: "Theater", city: "Freiburg", featured: true },
  { date: "28.01.26", weekday: "Mi", event: "Einer dieser Abende", venue: "Comedy Club", city: "Berlin", featured: true },
  { date: "01.02.26", weekday: "So", event: "Einer dieser Abende", venue: "Theater", city: "Aachen" },
  { date: "05.03.26", weekday: "Do", event: "Einer dieser Abende", venue: "Comedy Club", city: "Mainz" },
  { date: "11.03.26", weekday: "Mi", event: "Einer dieser Abende", venue: "Theater", city: "München" },
  { date: "14.03.26", weekday: "Sa", event: "Einer dieser Abende", venue: "Comedy Club", city: "Stuttgart" },
  { date: "15.03.26", weekday: "So", event: "Einer dieser Abende", venue: "Comedy Club", city: "Köln", featured: true },
  { date: "07.06.26", weekday: "So", event: "Einer dieser Abende", venue: "Theater", city: "Düsseldorf" },
  { date: "18.10.26", weekday: "So", event: "Einer dieser Abende", venue: "Comedy Club", city: "Hannover" },
  { date: "21.11.26", weekday: "Sa", event: "Einer dieser Abende", venue: "Theater", city: "Gelsenkirchen" },
];

function TourCard({ date, index }: { date: TourDate; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const formatDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split(".");
    return { day, month: `${month}.${year}` };
  };
  
  const { day, month } = formatDate(date.date);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.05,
        duration: 0.5,
        ease: motionTokens.easing.out 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative flex items-center gap-4 md:gap-8 py-6 border-b cursor-pointer overflow-hidden ${
          date.featured ? "border-warm/30" : "border-warm/10"
        }`}
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Hover background */}
        <motion.div
          className="absolute inset-0 bg-warm/5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: motionTokens.easing.out }}
          style={{ originX: 0 }}
        />

        {/* Featured indicator */}
        {date.featured && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1 bg-warm"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 + 0.2 }}
          />
        )}

        {/* Date */}
        <div className="relative flex-shrink-0 w-20 md:w-28 text-center">
          <span className="block text-cream-dim/50 text-xs font-display uppercase tracking-wider mb-1">
            {date.weekday}
          </span>
          <span className="block font-display text-3xl md:text-4xl font-bold text-warm date-badge">
            {day}
          </span>
          <span className="block text-cream-dim/60 text-sm date-badge">
            {month}
          </span>
        </div>

        {/* Event info */}
        <div className="relative flex-grow min-w-0">
          <h3 className="font-display text-xl md:text-2xl font-bold text-cream group-hover:text-warm transition-colors duration-300 truncate">
            {date.event}
          </h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-cream-dim/60 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {date.city}
            </span>
            {date.venue && (
              <span className="hidden md:inline text-cream-dim/40">|</span>
            )}
            {date.venue && (
              <span className="hidden md:inline">{date.venue}</span>
            )}
          </div>
        </div>

        {/* Action */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-2 text-warm">
            <Ticket className="w-5 h-5" />
            <span className="hidden md:inline text-sm font-display tracking-wider uppercase">Tickets</span>
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function TourDates() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [expanded, setExpanded] = useState(false);
  const visibleDates = expanded ? tourDates : tourDates.slice(0, 7);

  return (
    <section 
      ref={ref}
      id="tour"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24"
    >
      {/* Section header */}
      <div className="max-w-5xl mx-auto mb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <motion.span
              variants={slideUpVariants}
              className="inline-block text-warm font-display text-sm tracking-[0.3em] uppercase mb-4"
            >
              Tour 2025/26
            </motion.span>
            <motion.h2
              variants={slideUpVariants}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream"
            >
              Termine
            </motion.h2>
          </div>
          
          <motion.p
            variants={slideUpVariants}
            className="text-cream-dim/70 max-w-md text-lg"
          >
            Alle aktuellen Shows von Fabian Lampert. 
            Live-Erlebnisse in ausgewählten Clubs und Theatern 
            quer durch Deutschland.
          </motion.p>
        </motion.div>
      </div>

      {/* Tour list */}
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {visibleDates.map((date, index) => (
            <TourCard key={date.date + date.city} date={date} index={index} />
          ))}
        </AnimatePresence>
        
        {/* Expand button */}
        {tourDates.length > 7 && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group relative px-8 py-4 font-display text-sm tracking-wider uppercase text-cream border border-warm/30 hover:border-warm transition-colors duration-300"
              onClick={() => setExpanded(!expanded)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {expanded ? "Weniger anzeigen" : `Alle ${tourDates.length} Termine`}
                <motion.span
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Decorative element */}
      <motion.div
        className="absolute left-0 bottom-1/4 w-px h-64 bg-gradient-to-b from-transparent via-warm/30 to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
}

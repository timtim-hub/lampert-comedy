"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { motionTokens, staggerContainer, slideUpVariants } from "@/lib/utils";
import { MagneticLink } from "./MagneticButton";
import { Instagram, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      ref={ref}
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-warm/10"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none">
        <div className="w-full h-full bg-warm blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
        >
          {/* Brand */}
          <motion.div variants={slideUpVariants} className="lg:col-span-2">
            <h3 className="font-display text-4xl md:text-5xl font-bold text-cream mb-2">
              Fabian Lampert
            </h3>
            <p className="text-warm font-display text-sm tracking-wider uppercase mb-4">
              Stand Up Comedy
            </p>
            <p className="text-cream-dim/60 max-w-sm mb-6">
              Fabian Lampert ist Stand Up Comedian aus Köln. 
              Vom Bayern nach Köln – und quer durch Deutschland 
              begeistert er sein Publikum.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.instagram.com/fabian.lampert/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-warm/30 flex items-center justify-center text-cream hover:bg-warm hover:text-void hover:border-warm transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:info@fabianlampert.de"
                className="w-12 h-12 rounded-full border border-warm/30 flex items-center justify-center text-cream hover:bg-warm hover:text-void hover:border-warm transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={slideUpVariants}>
            <h4 className="font-display text-sm tracking-wider uppercase text-warm mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <MagneticLink 
                  href="#about"
                  className="text-cream-dim/70 hover:text-cream transition-colors"
                >
                  Über Fabian
                </MagneticLink>
              </li>
              <li>
                <MagneticLink 
                  href="#tour"
                  className="text-cream-dim/70 hover:text-cream transition-colors"
                >
                  Termine
                </MagneticLink>
              </li>
              <li>
                <MagneticLink 
                  href="#tv"
                  className="text-cream-dim/70 hover:text-cream transition-colors"
                >
                  TV & Media
                </MagneticLink>
              </li>
              <li>
                <Link 
                  href="/presse"
                  className="text-cream-dim/70 hover:text-cream transition-colors underline-hover"
                >
                  Pressebilder
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={slideUpVariants}>
            <h4 className="font-display text-sm tracking-wider uppercase text-warm mb-6">
              Kontakt
            </h4>
            <div className="space-y-3 text-cream-dim/70">
              <p>
                <a href="mailto:info@fabianlampert.de" className="hover:text-warm transition-colors">
                  info@fabianlampert.de
                </a>
              </p>
              <p className="text-sm">Für Booking-Anfragen und Presse</p>
              <p className="pt-2">
                <a 
                  href="https://www.instagram.com/fabian.lampert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-warm hover:text-cream transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @fabian.lampert
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Large CTA */}
        <motion.div
          className="py-16 border-y border-warm/10 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a 
            href="#tour"
            className="group flex items-center justify-between hover:opacity-80 transition-opacity"
          >
            <span className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-cream">
              Zum nächsten Termin
            </span>
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-warm flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-8 h-8 text-warm" />
            </motion.div>
          </a>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-cream-dim/40 text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p>© {currentYear} Fabian Lampert. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-cream transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-cream transition-colors">Datenschutz</Link>
          </div>
        </motion.div>

        {/* Back to top */}
        <motion.button
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-warm text-void flex items-center justify-center shadow-lg shadow-warm/20 z-40"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Zurück nach oben"
        >
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↑
          </motion.span>
        </motion.button>
      </div>
    </footer>
  );
}

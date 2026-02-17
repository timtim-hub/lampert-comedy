"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { motionTokens, staggerContainer, slideUpVariants } from "@/lib/utils";
import { MagneticLink } from "./MagneticButton";
import { Instagram, Mail, ArrowUpRight } from "lucide-react";

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
            <h3 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
              LAMPERT
            </h3>
            <p className="text-cream-dim/60 max-w-sm mb-6">
              Stand Up Comedy aus Leidenschaft. 
              Vom Bayern nach Köln – und quer durch Deutschland.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://instagram.com"
                className="w-12 h-12 rounded-full border border-warm/30 flex items-center justify-center text-cream hover:bg-warm hover:text-void hover:border-warm transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:info@fabianlampert.de"
                className="w-12 h-12 rounded-full border border-warm/30 flex items-center justify-center text-cream hover:bg-warm hover:text-void hover:border-warm transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
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
              {[
                { label: "Über mich", href: "#about" },
                { label: "Termine", href: "#tour" },
                { label: "TV & Media", href: "#tv" },
                { label: "Pressebilder", href: "#gallery" },
              ].map((link) => (
                <li key={link.label}>
                  <MagneticLink 
                    href={link.href}
                    className="text-cream-dim/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </MagneticLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={slideUpVariants}>
            <h4 className="font-display text-sm tracking-wider uppercase text-warm mb-6">
              Kontakt
            </h4>
            <div className="space-y-3 text-cream-dim/70">
              <p>info@fabianlampert.de</p>
              <p className="text-sm">Für Booking-Anfragen und Presse</p>
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
            <a href="#" className="hover:text-cream transition-colors">Impressum</a>
            <a href="#" className="hover:text-cream transition-colors">Datenschutz</a>
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

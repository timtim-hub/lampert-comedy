"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";

const navItems = [
  { label: "Über", href: "#about" },
  { label: "Termine", href: "#tour" },
  { label: "TV", href: "#tv" },
  { label: "Presse", href: "#gallery" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.95)"]
  );
  
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* Main nav */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24"
        style={{ backgroundColor }}
      >
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px bg-warm"
          style={{ opacity: borderOpacity }}
        />
        
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-display text-xl md:text-2xl font-bold text-cream"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="hidden md:inline">Fabian Lampert</span>
            <span className="md:hidden">F. Lampert</span>
          </motion.a>

          {/* Desktop nav */}
          <motion.nav
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative font-display text-sm tracking-wider uppercase text-cream-dim hover:text-cream transition-colors group"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-px bg-warm origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            {/* Instagram link */}
            <motion.a
              href="https://www.instagram.com/fabian.lampert/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-warm/30 flex items-center justify-center text-cream hover:bg-warm hover:text-void hover:border-warm transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
          </motion.nav>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden relative w-12 h-12 flex items-center justify-center text-cream"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-void md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="font-display text-3xl font-bold text-cream"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              
              {/* Mobile Instagram */}
              <motion.a
                href="https://www.instagram.com/fabian.lampert/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mt-8 text-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.4 }}
              >
                <Instagram className="w-6 h-6" />
                <span className="font-display text-lg">@fabian.lampert</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

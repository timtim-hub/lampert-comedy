"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { motionTokens, staggerContainer, slideUpVariants } from "@/lib/utils";
import { Download, X, ZoomIn } from "lucide-react";

// Placeholder images using gradient patterns instead of external URLs
const galleryItems = [
  { 
    id: 1, 
    title: "Bühnenportrait",
    gradient: "from-warm/40 to-warm-dim/20",
    size: "large"
  },
  { 
    id: 2, 
    title: "Nightwash Auftritt", 
    gradient: "from-cream/20 to-warm/30",
    size: "medium"
  },
  { 
    id: 3, 
    title: "Quatsch Comedy Club",
    gradient: "from-accent/20 to-warm/20", 
    size: "medium"
  },
  { 
    id: 4, 
    title: "Backstage",
    gradient: "from-void to-stage",
    size: "small"
  },
  { 
    id: 5, 
    title: "Publikum",
    gradient: "from-warm/30 to-void",
    size: "small"
  },
  { 
    id: 6, 
    title: "Tour 2024",
    gradient: "from-cream-dim/20 to-warm/40",
    size: "large"
  },
];

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section 
      ref={ref}
      id="gallery"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            variants={slideUpVariants}
            className="inline-block text-warm font-display text-sm tracking-[0.3em] uppercase mb-4"
          >
            Press & Media
          </motion.span>
          <motion.h2
            variants={slideUpVariants}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6"
          >
            Bilder zum<br />Download
          </motion.h2>
          <motion.p
            variants={slideUpVariants}
            className="text-cream-dim/70 max-w-lg text-lg"
          >
            Hochauflösende Pressebilder für Veranstalter, Medien und Partner.
          </motion.p>
        </motion.div>
      </div>

      {/* Masonry Gallery */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                item.size === "large" ? "col-span-2 row-span-2" :
                item.size === "medium" ? "col-span-1 row-span-2" :
                "col-span-1 row-span-1"
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                ease: motionTokens.easing.out 
              }}
              onClick={() => setSelectedImage(item)}
            >
              {/* Image placeholder with gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: motionTokens.easing.out }}
              />
              
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-void/60"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-xl font-bold text-cream mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-warm text-sm hover:text-cream transition-colors">
                    <ZoomIn className="w-4 h-4" />
                    <span className="font-display tracking-wider uppercase text-xs">Ansicht</span>
                  </button>
                  <button className="flex items-center gap-2 text-warm text-sm hover:text-cream transition-colors">
                    <Download className="w-4 h-4" />
                    <span className="font-display tracking-wider uppercase text-xs">Download</span>
                  </button>
                </div>
              </motion.div>

              {/* Border animation */}
              <motion.div
                className="absolute inset-0 border-2 border-warm/0"
                whileHover={{ borderColor: "rgba(255,107,53,0.5)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-void/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-warm/10 flex items-center justify-center text-cream hover:bg-warm/20 transition-colors z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Image */}
            <motion.div
              className={`relative w-full max-w-4xl bg-gradient-to-br ${selectedImage.gradient} rounded-sm overflow-hidden`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/3] w-full" />
              
              {/* Info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-void to-transparent">
                <h3 className="font-display text-2xl font-bold text-cream mb-2">
                  {selectedImage.title}
                </h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-warm text-void font-display text-sm tracking-wider uppercase rounded-sm hover:bg-warm-dim transition-colors">
                  <Download className="w-4 h-4" />
                  Download HD
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Download all button */}
      <motion.div
        className="max-w-7xl mx-auto mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className="group flex items-center gap-3 px-8 py-4 border border-warm/30 text-cream hover:border-warm hover:bg-warm/5 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Download className="w-5 h-5 text-warm group-hover:animate-bounce" />
          <span className="font-display text-sm tracking-wider uppercase">Alle Bilder (ZIP)</span>
        </motion.button>
      </motion.div>
    </section>
  );
}

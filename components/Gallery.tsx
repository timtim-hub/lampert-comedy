"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { motionTokens, staggerContainer, slideUpVariants } from "@/lib/utils";
import { Download, X, ZoomIn, ImageIcon } from "lucide-react";
import Image from "next/image";

// Gallery items with actual downloaded images
const galleryItems = [
  { 
    id: 1, 
    title: "Fabian Lampert Portrait",
    src: "/images/fabian-portrait.png",
    size: "large",
    category: "Portrait"
  },
  { 
    id: 2, 
    title: "Live on Stage", 
    src: "/images/stage-wide.jpg",
    size: "wide",
    category: "Live"
  },
  { 
    id: 3, 
    title: "Show Moment",
    src: "/images/gallery-1.jpg", 
    size: "medium",
    category: "Live"
  },
  { 
    id: 4, 
    title: "Backstage",
    src: "/images/gallery-2.png",
    size: "medium",
    category: "Behind the Scenes"
  },
  { 
    id: 5, 
    title: "Bühnenauftritt",
    src: "/images/gallery-3.jpg",
    size: "medium",
    category: "Live"
  },
  { 
    id: 6, 
    title: "Fabian Lampert",
    src: "/images/fabian-hero.png",
    size: "large",
    category: "Portrait"
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
            Hochauflösende Pressebilder von Fabian Lampert für Veranstalter, 
            Medien und Partner. Alle Bilder stehen zur freien Verwendung bei 
            Nennung des Namens zur Verfügung.
          </motion.p>
        </motion.div>
      </div>

      {/* Masonry Gallery */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                item.size === "large" ? "col-span-2 row-span-2" :
                item.size === "wide" ? "col-span-2" :
                "col-span-1"
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
              <div className={`relative ${
                item.size === "large" ? "aspect-square" :
                item.size === "wide" ? "aspect-[2/1]" :
                "aspect-[3/4]"
              }`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
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
                  <span className="text-warm text-xs font-display uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg md:text-xl font-bold text-cream mb-3">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-cream hover:text-warm transition-colors text-sm">
                      <ZoomIn className="w-4 h-4" />
                      <span className="font-display tracking-wider uppercase text-xs">Ansicht</span>
                    </button>
                    <button className="flex items-center gap-2 text-cream hover:text-warm transition-colors text-sm">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-void/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-warm/10 flex items-center justify-center text-cream hover:bg-warm/20 transition-colors z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Image */}
            <motion.div
              className="relative max-w-5xl max-h-[85vh] w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-void via-void/80 to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-warm text-xs font-display uppercase tracking-wider">
                      {selectedImage.category}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-cream mt-1">
                      {selectedImage.title}
                    </h3>
                  </div>
                  <a
                    href={selectedImage.src}
                    download
                    className="flex items-center gap-2 px-6 py-3 bg-warm text-void font-display text-sm tracking-wider uppercase rounded-sm hover:bg-warm-dim transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download HD
                  </a>
                </div>
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
          <ImageIcon className="w-5 h-5 text-warm" />
          <span className="font-display text-sm tracking-wider uppercase">Alle Bilder (ZIP)</span>
          <Download className="w-4 h-4 text-warm group-hover:translate-y-0.5 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
}

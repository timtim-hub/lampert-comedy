"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motionTokens } from "@/lib/utils";
import { Download, X, ZoomIn, ImageIcon } from "lucide-react";
import Image from "next/image";

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

export function PressGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Grid */}
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
                
                <motion.div
                  className="absolute inset-0 bg-void/60"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

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
                    <span className="flex items-center gap-2 text-cream text-sm">
                      <ZoomIn className="w-4 h-4" />
                      <span className="font-display tracking-wider uppercase text-xs">Ansicht</span>
                    </span>
                    <span className="flex items-center gap-2 text-cream text-sm">
                      <Download className="w-4 h-4" />
                      <span className="font-display tracking-wider uppercase text-xs">Download</span>
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute inset-0 border-2 border-warm/0"
                  whileHover={{ borderColor: "rgba(255,107,53,0.5)" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download all button */}
        <motion.div
          className="flex justify-center mt-12"
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

        {/* Usage info */}
        <div className="mt-16 p-8 bg-stage/50 rounded-sm border border-warm/10">
          <h3 className="font-display text-xl font-bold text-cream mb-4">Nutzungsrechte</h3>
          <p className="text-cream-dim/70 leading-relaxed">
            Alle Bilder dürfen für Pressezwecke, Veranstaltungsankündigungen und 
            Werbematerialien verwendet werden. Bei Veröffentlichung bitte Namensnennung: 
            „Fabian Lampert". Bei Fragen zur Bildnutzung kontaktieren Sie uns unter{" "}
            <a href="mailto:info@fabianlampert.de" className="text-warm hover:underline">
              info@fabianlampert.de
            </a>.
          </p>
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
            <motion.button
              className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-warm/10 flex items-center justify-center text-cream hover:bg-warm/20 transition-colors z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

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
    </section>
  );
}

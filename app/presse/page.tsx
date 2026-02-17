import { Navigation, Footer, CursorSpotlight } from "@/components";
import { PressGallery } from "./PressGallery";

export const metadata = {
  title: "Presse & Media | Fabian Lampert",
  description: "Hochauflösende Pressebilder von Fabian Lampert für Veranstalter, Medien und Partner.",
};

export default function PressePage() {
  return (
    <main className="relative min-h-screen bg-void">
      <div className="noise-overlay" />
      <CursorSpotlight />
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block text-warm font-display text-sm tracking-[0.3em] uppercase mb-4">
            Press & Media
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6">
            Bilder zum Download
          </h1>
          <p className="text-cream-dim/70 max-w-2xl text-lg md:text-xl">
            Hochauflösende Pressebilder von Fabian Lampert für Veranstalter, 
            Medien und Partner. Alle Bilder stehen zur freien Verwendung bei 
            Nennung des Namens zur Verfügung.
          </p>
        </div>
      </section>

      <PressGallery />
      <Footer />
    </main>
  );
}

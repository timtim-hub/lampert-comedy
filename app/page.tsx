import { 
  Navigation, 
  Hero, 
  About, 
  TourDates, 
  TVSection, 
  Footer,
  CursorSpotlight 
} from "@/components";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Cursor spotlight effect (desktop only) */}
      <CursorSpotlight />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Page sections */}
      <Hero />
      <About />
      <TourDates />
      <TVSection />
      <Footer />
    </main>
  );
}

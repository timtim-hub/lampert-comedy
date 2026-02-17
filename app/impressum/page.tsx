import { Navigation, Footer, CursorSpotlight } from "@/components";

export const metadata = {
  title: "Impressum | Fabian Lampert",
  description: "Impressum und rechtliche Informationen der Website von Fabian Lampert.",
};

export default function ImpressumPage() {
  return (
    <main className="relative min-h-screen bg-void">
      <div className="noise-overlay" />
      <CursorSpotlight />
      <Navigation />
      
      <section className="pt-32 md:pt-40 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-12">
            Impressum
          </h1>

          <div className="space-y-8 text-cream-dim/80">
            <section>
              <h2 className="font-display text-xl font-bold text-cream mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="leading-relaxed">
                <strong className="text-cream">Fabian Lampert</strong><br />
                Stand Up Comedian<br /><br />
                Musterstraße 123<br />
                50667 Köln<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-cream mb-4">Kontakt</h2>
              <p className="leading-relaxed">
                E-Mail: <a href="mailto:info@fabianlampert.de" className="text-warm hover:underline">info@fabianlampert.de</a><br />
                Telefon: +49 (0) 123 456789
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-cream mb-4">Vertreten durch</h2>
              <p className="leading-relaxed">
                Fabian Lampert
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-cream mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="leading-relaxed">
                Fabian Lampert<br />
                Musterstraße 123<br />
                50667 Köln
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-cream mb-4">Haftung für Inhalte</h2>
              <p className="leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-cream mb-4">Haftung für Links</h2>
              <p className="leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-cream mb-4">Urheberrecht</h2>
              <p className="leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-cream mb-4">Streitschlichtung</h2>
              <p className="leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-warm hover:underline"> https://ec.europa.eu/consumers/odr</a>.<br /><br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

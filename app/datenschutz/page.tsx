import { Navigation, Footer, CursorSpotlight } from "@/components";

export const metadata = {
  title: "Datenschutzerklärung | Fabian Lampert",
  description: "Datenschutzerklärung und Informationen zum Datenschutz auf der Website von Fabian Lampert.",
};

export default function DatenschutzPage() {
  return (
    <main className="relative min-h-screen bg-void">
      <div className="noise-overlay" />
      <CursorSpotlight />
      <Navigation />
      
      <section className="pt-32 md:pt-40 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-12">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 text-cream-dim/80">
            <section>
              <h2 className="font-display text-xl font-bold text-cream mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="font-display text-lg font-bold text-cream mt-6 mb-3">Allgemeine Hinweise</h3>
              <p className="leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="font-display text-lg font-bold text-cream mt-6 mb-3">Datenerfassung auf dieser Website</h3>
              <p className="leading-relaxed">
                <strong className="text-cream">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br /><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Impressum dieser Website entnehmen.
              </p>

              <h3 className="font-display text-lg font-bold text-cream mt-6 mb-3">Wie erfassen wir Ihre Daten?</h3>
              <p className="leading-relaxed">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br /><br />
                Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind 
                vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
                Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-cream mb-4">2. Hosting</h2>
              <p className="leading-relaxed">
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, 
                die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann 
                es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, 
                Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-cream mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="font-display text-lg font-bold text-cream mt-6 mb-3">Datenschutz</h3>
              <p className="leading-relaxed">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften 
                sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="font-display text-lg font-bold text-cream mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p className="leading-relaxed">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                <strong className="text-cream">Fabian Lampert</strong><br />
                Musterstraße 123<br />
                50667 Köln<br />
                Deutschland<br /><br />
                E-Mail: <a href="mailto:info@fabianlampert.de" className="text-warm hover:underline">info@fabianlampert.de</a><br />
                Telefon: +49 (0) 123 456789
              </p>

              <h3 className="font-display text-lg font-bold text-cream mt-6 mb-3">Speicherdauer</h3>
              <p className="leading-relaxed">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. 
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung 
                widerrufen, werden Ihre Daten gelöscht.
              </p>

              <h3 className="font-display text-lg font-bold text-cream mt-6 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="leading-relaxed">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
                eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per 
                E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom 
                Widerruf unberührt.
              </p>

              <h3 className="font-display text-lg font-bold text-cream mt-6 mb-3">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
              <p className="leading-relaxed">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
                Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist die 
                Landesdatenschutzbehörde des Bundeslandes, in dem unser Unternehmen seinen Sitz hat.
              </p>

              <h3 className="font-display text-lg font-bold text-cream mt-6 mb-3">SSL- bzw. TLS-Verschlüsselung</h3>
              <p className="leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
                wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine 
                SSL- bzw. TLS-Verschlüsselung.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-cream mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="font-display text-lg font-bold text-cream mt-6 mb-3">Cookies</h3>
              <p className="leading-relaxed">
                Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten 
                auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung 
                (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
              </p>

              <h3 className="font-display text-lg font-bold text-cream mt-6 mb-3">Kontaktformular</h3>
              <p className="leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h3 className="font-display text-lg font-bold text-cream mt-6 mb-3">Anfrage per E-Mail oder Telefon</h3>
              <p className="leading-relaxed">
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus 
                hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens 
                bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-cream mb-4">5. Plugins und Tools</h2>
              
              <h3 className="font-display text-lg font-bold text-cream mt-6 mb-3">Google Web Fonts</h3>
              <p className="leading-relaxed">
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von 
                Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts 
                in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
              </p>

              <h3 className="font-display text-lg font-bold text-cream mt-6 mb-3">Instagram</h3>
              <p className="leading-relaxed">
                Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden 
                angeboten durch die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, 
                Dublin 2, Irland. Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken 
                des Instagram-Buttons die Inhalte dieser Website mit Ihrem Instagram-Profil verlinken.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-cream mb-4">6. Änderungen dieser Datenschutzerklärung</h2>
              <p className="leading-relaxed">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
                rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der 
                Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
              <p className="leading-relaxed mt-4">
                <strong className="text-cream">Stand:</strong> Februar 2025
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

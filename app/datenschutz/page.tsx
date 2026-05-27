import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Datenschutz — Calvin Linke",
  description: "Datenschutzerklärung gemäß DSGVO — Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
};

export default function DatenschutzPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-5 sm:px-8 bg-[#091426] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-[0.1em] uppercase mb-8">
              Rechtliches
            </span>
            <h1
              className="text-5xl sm:text-6xl font-bold text-white leading-[1.1] max-w-3xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Datenschutz.
              <br />
              <span className="text-white/60">Transparenz über Datenverarbeitung.</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Inhalt */}
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-sm text-[#6B7280] leading-relaxed">

              <div>
                <h2 className="text-xl font-bold text-[#191c1e] mb-3">1. Verantwortlicher</h2>
                <p>Calvin Linke</p>
                <p>Königstraße 4, 01097 Dresden</p>
                <p>E-Mail: <a href="mailto:info@renditeundrealitaet.de" className="hover:text-[#091426] transition-colors">info@renditeundrealitaet.de</a></p>
                <p>Telefon: <a href="tel:+491621766880" className="hover:text-[#091426] transition-colors">+49 162 1766880</a></p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#e0e3e5]">
                <h2 className="text-xl font-bold text-[#191c1e] mb-3">2. Allgemeines zur Datenverarbeitung</h2>
                <p>
                  Ich nehme den Schutz Ihrer persönlichen Daten ernst. Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und den Zweck der Verarbeitung personenbezogener Daten auf dieser Website auf.
                </p>
                <p className="mt-3">
                  Personenbezogene Daten werden nur im technisch notwendigen Umfang erhoben. Eine Weitergabe an Dritte erfolgt nicht, soweit dies nicht ausdrücklich angegeben ist.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#e0e3e5]">
                <h2 className="text-xl font-bold text-[#191c1e] mb-3">3. Hosting</h2>
                <p>
                  Diese Website wird bei <strong className="text-[#191c1e]">Hostinger</strong> gehostet (UAB „Hostinger international", Jonavos g. 60C, Kaunas, Litauen, EU).
                </p>
                <p className="mt-3">
                  Beim Besuch dieser Website werden durch den Hostinganbieter automatisch sogenannte Server-Log-Dateien gespeichert. Dazu gehören: IP-Adresse, Browsertyp und -version, Betriebssystem, Referrer-URL, Datum und Uhrzeit der Anfrage. Diese Daten sind nicht einer bestimmten Person zuordbar und werden nicht mit anderen Datenquellen zusammengeführt.
                </p>
                <p className="mt-3">
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an dem sicheren und fehlerfreien Betrieb der Website).
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#e0e3e5]">
                <h2 className="text-xl font-bold text-[#191c1e] mb-3">4. Kontaktformular und E-Mail-Kontakt</h2>
                <p>
                  Wenn Sie das Kontaktformular nutzen, werden die eingegebenen Daten (Name, E-Mail-Adresse, Nachricht) ausschließlich lokal in Ihrem Browser verarbeitet und per <code className="bg-[#f2f4f6] px-1 py-0.5 rounded text-xs text-[#191c1e]">mailto:</code>-Protokoll an Ihr lokales E-Mail-Programm übergeben. Es findet <strong className="text-[#191c1e]">keine serverseitige Speicherung</strong> dieser Daten durch mich statt.
                </p>
                <p className="mt-3">
                  Wenn Sie mir per E-Mail schreiben, werden Ihre Angaben (einschließlich der von Ihnen angegebenen Kontaktdaten) zum Zweck der Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen bei mir gespeichert.
                </p>
                <p className="mt-3">
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung / vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#e0e3e5]">
                <h2 className="text-xl font-bold text-[#191c1e] mb-3">5. Google Maps</h2>
                <p>
                  Auf der Seite „Kontakt" wird Google Maps verwendet, ein Kartendienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (bzw. für Nutzer aus der EU: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland).
                </p>
                <p className="mt-3">
                  Durch die Nutzung von Google Maps kann Google Daten über die Nutzung der Maps-Funktionen durch Websitebesucher erfassen und verarbeiten. Dies kann unter anderem die IP-Adresse, Standortdaten und Browserinformationen umfassen. Die Daten können in die USA übertragen werden. Google hat sich den EU-US Data Privacy Framework Standards unterworfen.
                </p>
                <p className="mt-3">
                  Weitere Informationen finden Sie in der Datenschutzerklärung von Google:{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#091426] underline underline-offset-2 hover:no-underline">
                    policies.google.com/privacy
                  </a>
                </p>
                <p className="mt-3">
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Standortdarstellung).
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#e0e3e5]">
                <h2 className="text-xl font-bold text-[#191c1e] mb-3">6. Google Fonts</h2>
                <p>
                  Diese Website nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts, die von Google bereitgestellt werden (Google Fonts, Google LLC / Google Ireland Limited). Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in Ihren Browser-Cache, um Texte und Schriftarten korrekt anzuzeigen. Dabei wird Ihre IP-Adresse an Google-Server übertragen, die sich ggf. in den USA befinden können.
                </p>
                <p className="mt-3">
                  Weitere Informationen zu Google Fonts finden Sie unter{" "}
                  <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-[#091426] underline underline-offset-2 hover:no-underline">
                    developers.google.com/fonts/faq
                  </a>{" "}
                  sowie in der Datenschutzerklärung von Google:{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#091426] underline underline-offset-2 hover:no-underline">
                    policies.google.com/privacy
                  </a>
                </p>
                <p className="mt-3">
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer konsistenten Darstellung der Website).
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#e0e3e5]">
                <h2 className="text-xl font-bold text-[#191c1e] mb-3">7. Ihre Rechte nach der DSGVO</h2>
                <p className="mb-3">Sie haben gegenüber mir folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
                <ul className="space-y-1.5 pl-4">
                  <li className="flex gap-2"><span className="text-[#091426] font-bold mt-0.5">·</span><span><strong className="text-[#191c1e]">Recht auf Auskunft</strong> (Art. 15 DSGVO)</span></li>
                  <li className="flex gap-2"><span className="text-[#091426] font-bold mt-0.5">·</span><span><strong className="text-[#191c1e]">Recht auf Berichtigung</strong> (Art. 16 DSGVO)</span></li>
                  <li className="flex gap-2"><span className="text-[#091426] font-bold mt-0.5">·</span><span><strong className="text-[#191c1e]">Recht auf Löschung</strong> (Art. 17 DSGVO)</span></li>
                  <li className="flex gap-2"><span className="text-[#091426] font-bold mt-0.5">·</span><span><strong className="text-[#191c1e]">Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</span></li>
                  <li className="flex gap-2"><span className="text-[#091426] font-bold mt-0.5">·</span><span><strong className="text-[#191c1e]">Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</span></li>
                  <li className="flex gap-2"><span className="text-[#091426] font-bold mt-0.5">·</span><span><strong className="text-[#191c1e]">Recht auf Widerspruch gegen die Verarbeitung</strong> (Art. 21 DSGVO)</span></li>
                </ul>
                <p className="mt-4">
                  Zur Wahrnehmung dieser Rechte wenden Sie sich bitte an:{" "}
                  <a href="mailto:info@renditeundrealitaet.de" className="text-[#091426] underline underline-offset-2 hover:no-underline">
                    info@renditeundrealitaet.de
                  </a>
                </p>
                <p className="mt-4">
                  Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die zuständige Aufsichtsbehörde in Sachsen ist:
                </p>
                <p className="mt-3">
                  Sächsischer Datenschutzbeauftragter<br />
                  Devrientstraße 5, 01067 Dresden<br />
                  E-Mail: <a href="mailto:saechsdsb@slt.sachsen.de" className="text-[#091426] underline underline-offset-2 hover:no-underline">saechsdsb@slt.sachsen.de</a>
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#e0e3e5]">
                <h2 className="text-xl font-bold text-[#191c1e] mb-3">8. Aktualität dieser Datenschutzerklärung</h2>
                <p>
                  Diese Datenschutzerklärung hat den Stand: Mai 2026. Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.
                </p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

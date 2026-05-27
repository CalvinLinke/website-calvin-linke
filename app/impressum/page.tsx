import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Impressum — Calvin Linke",
  description: "Angaben gemäß §5 TMG — Calvin Linke, Königstraße 4, 01097 Dresden.",
};

export default function ImpressumPage() {
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
              className="text-5xl sm:text-6xl font-bold text-white leading-[1.1] max-w-2xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Impressum.
              <br />
              <span className="text-white/60">Angaben nach §5 TMG.</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Inhalt */}
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="space-y-0 text-sm text-[#6B7280] leading-relaxed">

              {/* Angaben */}
              <div>
                <h2 className="text-xl font-bold text-[#191c1e] mb-3">Angaben gemäß §5 TMG</h2>
                <p>Calvin Linke</p>
                <p>Königstraße 4</p>
                <p>01097 Dresden</p>
                <p className="mt-4 font-semibold text-[#191c1e]">Kontakt</p>
                <p>Telefon: <a href="tel:+491621766880" className="hover:text-[#091426] transition-colors">+49 162 1766880</a></p>
                <p>E-Mail: <a href="mailto:info@renditeundrealitaet.de" className="hover:text-[#091426] transition-colors">info@renditeundrealitaet.de</a></p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#e0e3e5]">
                <h2 className="text-xl font-bold text-[#191c1e] mb-3">Verantwortlich für den Inhalt nach §18 Abs. 2 MStV</h2>
                <p>Calvin Linke</p>
                <p>Königstraße 4</p>
                <p>01097 Dresden</p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#e0e3e5]">
                <h2 className="text-xl font-bold text-[#191c1e] mb-3">Haftung für Inhalte</h2>
                <p>
                  Als Diensteanbieter bin ich gemäß §7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="mt-3">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#e0e3e5]">
                <h2 className="text-xl font-bold text-[#191c1e] mb-3">Haftung für Links</h2>
                <p>
                  Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p className="mt-3">
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#e0e3e5]">
                <h2 className="text-xl font-bold text-[#191c1e] mb-3">Urheberrecht</h2>
                <p>
                  Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p className="mt-3">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
                </p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

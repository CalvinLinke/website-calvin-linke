import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { FlipButton } from "@/components/ui/FlipButton";
import MehrwerteGrid from "@/components/tools/MehrwerteGrid";

export const metadata: Metadata = {
  title: "Mehrwerte — Calvin Linke",
  description:
    "Kostenlose Tools, Rechner und Checklisten für Immobilieninvestoren. Rendite berechnen, Sanierungskosten einschätzen, Finanzierung planen.",
};

export default function MehrwertePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-5 sm:px-8 bg-[#091426] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-[0.1em] uppercase mb-8">
              Mehrwerte
            </span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-3xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Tools &amp; Ressourcen.
              <br />
              <span className="text-white/60">Kostenlos. Direkt nutzbar.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl">
              Keine Daten, kein Newsletter. Nur Werkzeuge, die ich selbst täglich
              nutze — damit du bessere Entscheidungen triffst.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <MehrwerteGrid />

      {/* CTA */}
      <section className="py-24 px-5 sm:px-8 bg-[#091426]">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Noch Fragen offen?
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              Kein Tool ersetzt ein echtes Gespräch. Wenn du konkrete Fragen zu
              einem Objekt oder Projekt hast — melde dich.
            </p>
            <FlipButton
              href="/kontakt"
              text="Jetzt Kontakt aufnehmen"
              hoverText="Ich freue mich drauf."
              variant="glass"
              size="lg"
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

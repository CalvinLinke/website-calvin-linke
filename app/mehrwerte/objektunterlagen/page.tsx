import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ObjektunterlagenCheckliste from "@/components/tools/ObjektunterlagenCheckliste";

export const metadata: Metadata = {
  title: "Objektunterlagen-Checkliste — Calvin Linke",
  description:
    "Alle erforderlichen Unterlagen für Eigentumswohnung, Haus, Mehrfamilienhaus und Grundstück — interaktive Checkliste, kostenlos und druckbar.",
};

export default function ObjektunterlagenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-5 sm:px-8 bg-[#091426] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <Link
              href="/mehrwerte"
              className="inline-flex items-center gap-1.5 text-white/50 text-sm font-medium hover:text-white/80 transition-colors mb-8"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Mehrwerte
            </Link>
            <span className="block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-[0.1em] uppercase mb-6 w-fit">
              Tool 04
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-2xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Objektunterlagen-
              <br />
              Checkliste.
            </h1>
            <p className="mt-4 text-lg text-white/60 leading-relaxed max-w-xl">
              Alle notwendigen Unterlagen je Immobilientyp — interaktiv abhaken
              und als PDF speichern.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 px-5 sm:px-8 bg-[#f7f9fb]">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <ObjektunterlagenCheckliste />
          </AnimatedSection>
        </div>
      </section>

      {/* Context */}
      <section className="py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl font-bold text-[#191c1e] mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Warum vollständige Unterlagen entscheidend sind.
            </h2>
            <div className="space-y-4 text-[#6B7280] leading-relaxed">
              <p>
                Fehlende Unterlagen kosten Zeit — und oft genug das Geschäft. Ich habe
                erlebt, wie Käufer wochenlang auf einen Grundbuchauszug gewartet haben
                oder wie eine fehlende Teilungserklärung kurz vor Notartermin alles
                verzögert hat.
              </p>
              <p>
                Diese Liste orientiert sich an dem, was Notare, Banken und Makler
                tatsächlich anfordern. Je früher du alles zusammen hast, desto
                reibungsloser läuft der Kauf- oder Verkaufsprozess.
              </p>
              <p>
                Wenn du einzelne Dokumente nicht findest oder nicht weißt, wo du
                sie beantragen musst — melde dich. Ich helfe dir, das zu klären.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

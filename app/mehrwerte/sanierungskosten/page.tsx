import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SanierungsQuiz from "@/components/tools/SanierungsQuiz";

export const metadata: Metadata = {
  title: "Sanierungskosten-Indikator — Calvin Linke",
  description:
    "Schritt für Schritt Sanierungskosten einschätzen. Kostenloser Indikator für Immobilienkäufer und Investoren.",
};

export default function SanierungskostenPage() {
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
              Tool 02
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-2xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Sanierungskosten-
              <br />
              Indikator.
            </h1>
            <p className="mt-4 text-lg text-white/60 leading-relaxed max-w-xl">
              Fünf Fragen — eine realistische Kostenspanne. Kein Ersatz für eine
              Begehung, aber ein ehrlicher erster Anhaltspunkt.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-16 px-5 sm:px-8 bg-[#f7f9fb]">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <SanierungsQuiz />
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
              Warum Sanierungskosten so schwer zu schätzen sind.
            </h2>
            <div className="space-y-4 text-[#6B7280] leading-relaxed">
              <p>
                Ich habe viele Objekte gesehen, bei denen die erste Schätzung um 40–60 %
                vom tatsächlichen Ergebnis abwich — in beide Richtungen. Sanierung ist
                komplex, weil Überraschungen zum Geschäft gehören.
              </p>
              <p>
                Was diesen Indikator trotzdem nützlich macht: Er gibt dir einen
                Rahmen für die Kaufpreisverhandlung und zeigt dir, ob ein Objekt
                überhaupt wirtschaftlich sanierbar ist — bevor du Zeit in Gutachten
                und Besichtigungen investierst.
              </p>
              <p>
                Für alles, was danach kommt — verlässliche Handwerker, Förderanträge,
                Zeitplanung — braucht es ein echtes Gespräch. Ich helfe dabei.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

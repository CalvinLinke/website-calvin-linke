import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import FinanzierungsRechner from "@/components/tools/FinanzierungsRechner";

export const metadata: Metadata = {
  title: "Finanzierungsrechner — Calvin Linke",
  description:
    "Monatliche Rate, Darlehensbetrag und Jahresbelastung einfach berechnen. Kostenloser Finanzierungsrechner für Immobilienkäufer.",
};

export default function FinanzierungsrechnerPage() {
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
              Tool 03
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-2xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Finanzierungs-
              <br />
              rechner.
            </h1>
            <p className="mt-4 text-lg text-white/60 leading-relaxed max-w-xl">
              Kaufpreis, Eigenkapital und Zinssatz eingeben — monatliche Rate
              und Gesamtbelastung auf einen Blick.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 px-5 sm:px-8 bg-[#f7f9fb]">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <FinanzierungsRechner />
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
              Was ich bei Finanzierungen immer wieder sehe.
            </h2>
            <div className="space-y-4 text-[#6B7280] leading-relaxed">
              <p>
                Viele Käufer verhandeln intensiv über den Kaufpreis, nehmen aber den
                ersten Zinssatz der Hausbank. Das ist ein Fehler. Schon 0,3–0,5
                Prozentpunkte Unterschied machen über die Laufzeit Zehntausende Euro aus.
              </p>
              <p>
                Ich schaue bei jedem Objekt: Wie hoch ist die monatliche Belastung
                bei verschiedenen Szenarien? Kann ich das nachhaltig tragen, auch wenn
                Zinsen steigen oder eine Wohnung leer steht? Dieses Werkzeug hilft dir,
                diese Fragen schnell durchzuspielen.
              </p>
              <p>
                Für eine echte Finanzierungsberatung empfehle ich immer mindestens
                drei Angebote einzuholen — und jemanden zu haben, der die Zahlen
                hinter den Zahlen versteht.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

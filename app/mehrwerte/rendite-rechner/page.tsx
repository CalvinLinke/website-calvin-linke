import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import RenditeRechner from "@/components/tools/RenditeRechner";

export const metadata: Metadata = {
  title: "Rendite-Rechner — Calvin Linke",
  description:
    "Brutto- und Nettomietrendite sowie Kaufpreisfaktor einfach berechnen. Kostenloser Rendite-Rechner für Immobilieninvestoren.",
};

export default function RenditeRechnerPage() {
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
              Tool 01
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-2xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Rendite-Rechner.
            </h1>
            <p className="mt-4 text-lg text-white/60 leading-relaxed max-w-xl">
              Kaufpreis, Miete und Nebenkosten eingeben — sofort Brutto- und
              Nettomietrendite sowie Kaufpreisfaktor.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 px-5 sm:px-8 bg-[#f7f9fb]">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <RenditeRechner />
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
              Wie ich diese Zahlen einordne.
            </h2>
            <div className="space-y-4 text-[#6B7280] leading-relaxed">
              <p>
                Die <strong className="text-[#191c1e]">Bruttomietrendite</strong> ist
                ein erster Anhaltspunkt — aber sie lügt. Sie ignoriert Nebenkosten,
                Bewirtschaftungskosten und Leerstand. Ich schaue deshalb fast
                ausschließlich auf die Netto.
              </p>
              <p>
                Der <strong className="text-[#191c1e]">Kaufpreisfaktor</strong> sagt
                dir, in wie vielen Jahren du den Kaufpreis durch Mieteinnahmen
                theoretisch refinanziert hättest — ohne Zinsen, ohne Instandhaltung.
                In Dresden sehe ich aktuell Faktoren zwischen 18 und 28 als
                marktüblich.
              </p>
              <p>
                Alles unter 4 % Netto ist für mich kein Investment — es sei denn, die
                Sanierung oder Mietentwicklung rechtfertigen den Aufschlag. Über 6 %
                solltest du zweimal hinschauen: oft steckt dort entweder eine
                Perle oder ein verstecktes Problem.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { FlipButton } from "@/components/ui/FlipButton";

export const metadata: Metadata = {
  title: "Unternehmensgruppe — Calvin Linke",
  description:
    "CADA Invest GmbH, GFU Distribution und Saxovia — drei Unternehmen, eine Haltung. Entstanden aus der Praxis, nicht aus dem Businessplan.",
};

export default function UnternehmensgruppeSeite() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-5 sm:px-8 bg-[#091426] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-[0.1em] uppercase mb-8">
              Unternehmensgruppe
            </span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-3xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Drei Unternehmen.
              <br />
              <span className="text-white/60">Eine Haltung.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl">
              Entstanden aus der Praxis, nicht aus dem Businessplan — jedes Unternehmen hat sich entwickelt,
              weil Chancen oder Probleme des Alltags eine eigene Lösung gebraucht haben.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CADA Invest GmbH */}
      <section className="relative py-24 px-5 sm:px-8">
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#e0e3e5] to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
            <AnimatedSection direction="left" className="lg:sticky lg:top-32">
              <a
                href="https://www.cada-invest.de"
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card rounded-[28px] overflow-hidden hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
              >
                <div className="bg-white flex items-center justify-start px-6 py-4 border-b border-[#e0e3e5]">
                  <img
                    src="/Logo%20CADA%20transparent.png"
                    alt="CADA Invest GmbH"
                    className="h-9 w-auto max-w-[150px] object-contain"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2
                        className="text-base font-bold text-[#191c1e]"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        CADA Invest GmbH
                      </h2>
                      <span className="px-2.5 py-0.5 bg-[#091426] text-white text-xs font-semibold rounded-full">
                        2022
                      </span>
                    </div>
                    <p className="text-sm text-[#545f73] font-medium">
                      Ankauf · Entwicklung · Sanierung
                    </p>
                  </div>
                  <div className="pt-1 border-t border-[#e0e3e5]">
                    <p className="text-xs text-[#545f73] uppercase tracking-[0.1em] font-semibold mb-2">Meine Rolle</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-[#091426] text-white text-xs font-semibold rounded-full">
                        Strategisch
                      </span>
                      <span className="px-3 py-1.5 border border-[#091426] text-[#091426] text-xs font-semibold rounded-full">
                        Operativ
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-4 text-[#6B7280] leading-relaxed text-lg">
              <p>
                CADA ist das Unternehmen, das für mich am nächsten dran ist – und gleichzeitig das
                herausforderndste.
              </p>
              <p>
                Hier bin ich sowohl strategisch als auch operativ tief eingebunden. Strategisch geht es
                um die Ausrichtung des Unternehmens, Partnerschaften und die Frage, in welche Richtung
                wir uns entwickeln wollen. Operativ bin ich stark im Ankauf, in Verhandlungen, im Netzwerk
                und auch im Thema Kapitalbeschaffung.
              </p>
              <p>
                Mein Geschäftspartner ergänzt das auf der anderen Seite perfekt. Er übernimmt vor allem
                die Themen Controlling, Finanzstruktur und Steuern – und operativ die Planung, Umsetzung
                und Kontrolle der Sanierungen.
              </p>
              <p>
                Genau diese Aufteilung ist einer der Gründe, warum das Unternehmen so funktioniert, wie
                es funktioniert.
              </p>
              <p>
                CADA hat sich seit der Gründung stark entwickelt. Gleichzeitig ist es auch das
                Unternehmen, das am meisten Verantwortung mit sich bringt. Höheres Volumen bedeutet
                automatisch mehr Risiko, mehr Entscheidungen und auch mehr Themen, die gleichzeitig
                laufen.
              </p>
              <p className="text-[#191c1e] font-medium">
                Was es für mich trotzdem – oder vielleicht gerade deshalb – zum spannendsten Unternehmen
                macht, ist die Vielfalt. Kein Projekt ist gleich, keine Entscheidung lässt sich einfach
                übertragen. Man ist ständig gefordert, neu zu denken und Lösungen zu finden.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* GFU Distribution */}
      <section className="relative py-24 px-5 sm:px-8 bg-[#f2f4f6]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
            <AnimatedSection direction="left" className="lg:sticky lg:top-32">
              <a
                href="https://www.glasfaser-fuer-unternehmen.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card rounded-[28px] overflow-hidden hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
              >
                <div className="bg-white flex items-center justify-start px-6 py-4 border-b border-[#e0e3e5]">
                  <img
                    src="/gfu%20logo.svg"
                    alt="GFU Distribution"
                    className="h-9 w-auto max-w-[150px] object-contain"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2
                        className="text-base font-bold text-[#191c1e]"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        GFU Distribution
                      </h2>
                      <span className="px-2.5 py-0.5 bg-[#091426] text-white text-xs font-semibold rounded-full">
                        2022
                      </span>
                    </div>
                    <p className="text-sm text-[#545f73] font-medium">
                      Glasfaser · Infrastruktur · B2B
                    </p>
                  </div>
                  <div className="pt-1 border-t border-[#e0e3e5]">
                    <p className="text-xs text-[#545f73] uppercase tracking-[0.1em] font-semibold mb-2">Meine Rolle</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-[#091426] text-white text-xs font-semibold rounded-full">
                        Strategisch
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-4 text-[#6B7280] leading-relaxed text-lg">
              <p>Die GFU ist parallel entstanden, hat sich aber ganz anders entwickelt.</p>
              <p>
                Hier bin ich heute nicht mehr operativ im Tagesgeschäft tätig. Meine Rolle liegt klar auf
                der strategischen Ebene – insbesondere bei Themen wie Finanzplanung, Wachstum und
                teilweise auch im Marketing.
              </p>
              <p>
                Das operative Geschäft läuft eigenständig, was für mich auch ein wichtiger Schritt war.
                Nicht alles selbst machen zu müssen, sondern Strukturen zu schaffen, die auch ohne
                permanente eigene Präsenz funktionieren.
              </p>
              <p>
                Die GFU ist sehr gut gestartet und hat eine stabile Grundlage. Gleichzeitig sehe ich
                hier noch deutliches Wachstumspotenzial.
              </p>
              <p className="text-[#191c1e] font-medium">
                Für mich ist das Unternehmen ein gutes Beispiel dafür, wie sich ein Geschäftsmodell
                entwickeln kann, wenn ein klarer Bedarf vorhanden ist – auch außerhalb der eigenen
                Kernbranche.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Saxovia */}
      <section className="relative py-24 px-5 sm:px-8">
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#e0e3e5] to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
            <AnimatedSection direction="left" className="lg:sticky lg:top-32">
              <div className="glass-card rounded-[28px] overflow-hidden">
                <div className="bg-white flex items-center justify-start px-6 py-4 border-b border-[#e0e3e5]">
                  <img
                    src="/Logo%20Saxovia.png"
                    alt="Saxovia"
                    className="h-9 w-auto max-w-[150px] object-contain"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2
                        className="text-base font-bold text-[#191c1e]"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        Saxovia
                      </h2>
                      <span className="px-2.5 py-0.5 bg-[#091426] text-white text-xs font-semibold rounded-full">
                        2026
                      </span>
                    </div>
                    <p className="text-sm text-[#545f73] font-medium">
                      Immobilienvermittlung · Prozesse · System
                    </p>
                  </div>
                  <div className="pt-1 border-t border-[#e0e3e5]">
                    <p className="text-xs text-[#545f73] uppercase tracking-[0.1em] font-semibold mb-2">Meine Rolle</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-[#091426] text-white text-xs font-semibold rounded-full">
                        Operativ
                      </span>
                      <span className="px-3 py-1.5 border border-[#091426] text-[#091426] text-xs font-semibold rounded-full">
                        Strategisch
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-4 text-[#6B7280] leading-relaxed text-lg">
              <p>Saxovia ist das jüngste Unternehmen und aktuell noch im Aufbau.</p>
              <p>
                Hier ist meine Rolle vor allem operativ. Ich bin derjenige, der im direkten Kontakt mit
                Kunden steht, Prozesse begleitet und die immobilienbezogene Kompetenz mitbringt.
              </p>
              <p>
                Die strategische Ausrichtung, Prozessoptimierung und Finanzstruktur liegen stärker bei
                meinem Geschäftspartner, der aus der IT kommt und genau diese Perspektive einbringt.
              </p>
              <p>
                Das Ziel ist klar: einen strukturierten, professionellen Vermittlungsprozess aufzubauen,
                der sich von vielen klassischen Abläufen im Markt unterscheidet.
              </p>
              <p className="text-[#191c1e] font-medium">
                Saxovia ist aktuell noch in den „Kinderschuhen". Gleichzeitig ist genau das auch die
                spannende Phase – weil man Strukturen von Anfang an sauber aufbauen kann.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Zusammenspiel & Entwicklung */}
      <section className="relative py-24 px-5 sm:px-8 bg-[#091426] overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection className="mb-10">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50 block mb-3">
              Zusammenspiel
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ letterSpacing: "-0.02em" }}
            >
              Kein Unternehmen funktioniert allein.
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-[32px] p-8 sm:p-10 space-y-4 text-white/70 leading-relaxed text-lg max-w-3xl">
              <p>
                Was sich über alle Unternehmen hinweg zeigt: Kein Unternehmen funktioniert allein.
              </p>
              <p>
                Geschäftspartner spielen eine zentrale Rolle – nicht nur fachlich, sondern auch
                menschlich. Über die Jahre hat sich ein Netzwerk aufgebaut, das weit über einzelne
                Projekte hinausgeht.
              </p>
              <p>
                Viele dieser Verbindungen sind nicht nur geschäftlich geblieben, sondern haben sich zu
                echten, belastbaren Beziehungen entwickelt.
              </p>
              <p className="text-white font-semibold">
                Und genau darüber entsteht auch Wachstum. Nicht isoliert, sondern gemeinsam.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gemeinsames Learning + Abschluss */}
      <section className="relative py-24 px-5 sm:px-8 bg-[#f2f4f6]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#545f73] block mb-3">
              Learnings
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#191c1e]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Was ich übergreifend gelernt habe.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
            <AnimatedSection delay={0}>
              <div className="glass-card rounded-[32px] p-8 sm:p-10 space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  Wenn ich etwas übergreifend gelernt habe, dann ist es, dass es nie komplett planbar
                  wird.
                </p>
                <p>
                  Es gibt Phasen, in denen Dinge sehr gut laufen – und genauso Phasen, in denen
                  unerwartet Probleme entstehen. Oft genau dann, wenn man denkt, man hätte alles im
                  Griff.
                </p>
                <p>
                  Man wird immer wieder mit Situationen konfrontiert, die sich im ersten Moment nicht
                  lösen lassen.
                </p>
                <p>Was sich dabei verändert hat, ist der Umgang damit.</p>
                <p>
                  Ich habe gelernt, dass es für jedes Problem eine Lösung gibt – auch wenn sie nicht
                  sofort sichtbar ist. Und dass genau in diesen Momenten oft die größten Entwicklungen
                  entstehen.
                </p>
                <p>
                  Ein Stück weit gehört auch Druck dazu. Nicht als Dauerzustand, aber als Auslöser, um
                  neue Wege zu gehen, Dinge zu hinterfragen und bessere Lösungen zu finden.
                </p>
                <p className="text-[#191c1e] font-medium">
                  Rückblickend sind es oft genau diese Phasen, die einen weiterbringen – auch wenn sie
                  sich in dem Moment nicht so anfühlen.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-5">
              <div className="glass-card rounded-[32px] p-8 sm:p-10 space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  Am Ende ist die Unternehmensgruppe für mich kein fertiges Konstrukt, sondern ein
                  Prozess. Dinge entwickeln sich, verändern sich und wachsen mit den Erfahrungen, die
                  man sammelt.
                </p>
                <p className="text-[#191c1e] font-semibold text-lg">
                  Und genau so wird es auch weitergehen.
                </p>
              </div>

              <div className="glass-card rounded-[32px] p-8 sm:p-10">
                <p className="text-[#6B7280] leading-relaxed mb-6">
                  Du hast Fragen zu einem der Unternehmen oder Interesse an einer Zusammenarbeit?
                </p>
                <FlipButton
                  href="/kontakt"
                  text="Jetzt schreiben"
                  hoverText="Ich antworte persönlich."
                  size="lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

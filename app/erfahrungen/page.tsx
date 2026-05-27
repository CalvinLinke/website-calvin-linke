import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { FlipButton } from "@/components/ui/FlipButton";
import HeroVideo from "@/components/HeroVideo";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { AccordionItem } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Erfahrungen — Was wirklich passiert",
  description:
    "Echte Einblicke aus Immobilienprojekten in Dresden. Keine Hochglanzgeschichten — sondern was wirklich passiert, wenn man kauft, saniert und vermietet.",
};

const geschichten = [
  {
    nr: "01",
    titel: "Der sichere Deal, der keiner war",
    teaser: "Alles wirkte stimmig — zu stimmig. Erst als wir tiefer geschaut haben, wurde klar, warum wir nicht gekauft haben.",
    absaetze: [
      "Es gibt diese Momente, in denen ein Objekt auf den ersten Blick genau das ist, was man sucht.",
      "Die Eckdaten passen, die Lage ist solide, die Unterlagen sind vollständig und der Preis wirkt nachvollziehbar. Kein Stress, kein Druck, keine offensichtlichen Baustellen. Eigentlich genau die Art von Deal, bei dem man denkt: Das läuft jetzt einfach sauber durch.",
      "So war es auch in diesem Fall.",
      "Die Besichtigung war ruhig, sachlich, ohne große Überraschungen. Der Verkäufer war kooperativ, die Kommunikation klar. Alles wirkte stimmig.",
      "Und genau das war der Punkt, der mich irgendwann stutzig gemacht hat.",
      "Wir sind tiefer in die Prüfung gegangen. Nicht, weil es einen konkreten Anlass gab, sondern eher aus Gewohnheit. Und je tiefer wir geschaut haben, desto mehr sind wir auf kleine Details gestoßen, die vorher keine Rolle gespielt hatten.",
      "Nichts Dramatisches. Kein offensichtlicher Fehler. Aber Themen, die langfristig Auswirkungen gehabt hätten — auf die Nutzung, auf die Entwicklung und am Ende auch auf die Wirtschaftlichkeit.",
      "Das Interessante daran war: Niemand hat hier bewusst etwas verschwiegen. Es war einfach nicht präsent. Dinge, die nicht aktiv angesprochen werden, weil sie im Alltag untergehen oder als nicht so wichtig eingeordnet werden.",
      "Genau darin liegt oft die eigentliche Herausforderung.",
      "Viele Probleme sind nicht laut. Sie verstecken sich in Details, in Formulierungen, in kleinen Unklarheiten.",
      "Am Ende haben wir uns bewusst gegen den Ankauf entschieden.",
      "Nicht, weil das Objekt schlecht war. Sondern weil es nicht zu unserem Ansatz gepasst hat.",
    ],
    lernpunkt: "Ein guter Deal ist nicht der, der auf dem Papier gut aussieht — sondern der, der auch im Detail funktioniert. Manchmal besteht die eigentliche Disziplin darin, einen Deal nicht zu machen.",
  },
  {
    nr: "02",
    titel: "Der Termin, der eigentlich keiner war",
    teaser: "Die Wohnung war es nicht. Das Gespräch danach schon.",
    absaetze: [
      "Es gibt Termine, zu denen fährt man ohne große Erwartungen.",
      "Ein Anruf, relativ spontan: Ich hätte da eine Wohnung, vielleicht interessant für euch. Keine ausführlichen Unterlagen, kein vorbereitetes Exposé — eher ein klassischer Komm einfach mal vorbei und schau es dir an.",
      "Also hingefahren.",
      "Vor Ort angekommen, war relativ schnell klar: Die Wohnung selbst war es nicht. Zustand durchschnittlich, Lage okay, aber nichts, was direkt überzeugt hätte.",
      "Ein klassischer Fall von kann man machen, muss man aber nicht.",
      "Was den Termin dann aber interessant gemacht hat, war nicht die Immobilie — sondern das Gespräch.",
      "Aus einem kurzen Austausch wurde ein längeres Gespräch. Erst über die Wohnung, dann über den Markt, dann über Erfahrungen. Irgendwann war es kein Termin mehr, sondern eher ein offener Austausch.",
      "Und genau in solchen Momenten passieren Dinge, die man nicht planen kann.",
      "Irgendwann kam der Satz: Ich habe noch zwei weitere Objekte, die ich eigentlich gar nicht aktiv anbiete.",
      "Das war der Punkt, an dem sich die Perspektive komplett verändert hat.",
      "Aus einem Termin, der eigentlich keine große Relevanz hatte, wurde der Einstieg in mehrere Gespräche. Und daraus wiederum konkrete Möglichkeiten.",
      "Am Ende sind daraus nicht nur Deals entstanden, sondern auch eine Zusammenarbeit, die bis heute besteht.",
      "Nicht jeder Termin muss sofort erfolgreich sein. Und nicht jedes gute Geschäft beginnt mit einem perfekten Objekt.",
    ],
    lernpunkt: "Oft entstehen die besten Chancen dort, wo man sie am wenigsten erwartet — wenn man offen bleibt und sich nicht nur auf das Offensichtliche konzentriert.",
  },
  {
    nr: "03",
    titel: "Der Moment, in dem nichts mehr funktioniert — und dann doch",
    teaser: "Mehrere Projekte gleichzeitig, nichts läuft wie geplant. Über Phasen, die nach außen niemand sieht.",
    absaetze: [
      "Es gibt Phasen, in denen läuft vieles parallel.",
      "Ein Projekt verzögert sich, bei einem anderen steigen die Kosten, parallel laufen Verhandlungen, die sich ziehen. Und dann kommen noch Themen dazu, die man so nicht eingeplant hatte.",
      "So eine Phase hatten wir auch.",
      "Mehrere Baustellen gleichzeitig — im wahrsten Sinne des Wortes. Zeitpläne, die nicht mehr passen, Abstimmungen, die länger dauern als gedacht, Entscheidungen, die schneller getroffen werden müssen, obwohl eigentlich noch Informationen fehlen.",
      "Und irgendwann ist man an dem Punkt, an dem man merkt: Es wird gerade unübersichtlich.",
      "Das sind die Momente, die nach außen niemand sieht.",
      "Nach außen wirkt vieles oft ruhig und strukturiert. Intern sieht das manchmal anders aus.",
      "Was in solchen Phasen hilft, ist weniger die perfekte Lösung — sondern Struktur.",
      "Themen auseinanderziehen. Prioritäten setzen. Sich nicht von allem gleichzeitig überrollen lassen, sondern Schritt für Schritt arbeiten.",
      "Und vor allem: ruhig bleiben, auch wenn es sich in dem Moment nicht so anfühlt.",
      "Meistens löst sich nicht alles auf einmal. Aber nach und nach. Ein Thema klärt sich, dann das nächste. Entscheidungen fallen, Dinge kommen wieder in Bewegung.",
      "Und plötzlich sieht das Gesamtbild wieder anders aus.",
      "Rückblickend sind genau diese Phasen die, die am meisten prägen.",
      "Nicht, weil alles gut läuft — sondern weil man gezwungen ist, Lösungen zu finden. Weil man Entscheidungen treffen muss. Weil man Verantwortung übernimmt.",
      "Und oft merkt man erst im Nachhinein, dass genau dort Entwicklung stattgefunden hat.",
    ],
    lernpunkt: "Auch wenn es sich in dem Moment nicht so angefühlt hat.",
  },
];

const pairs = [
  { vorher: "/projekt-vorher-1.jpg", nachher: "/projekt-nachher-1.jpg", label: "Badezimmer" },
  { vorher: "/projekt-vorher-2.jpg", nachher: "/projekt-nachher-2.jpg", label: "Flur" },
  { vorher: "/projekt-vorher-3.jpg", nachher: "/projekt-nachher-3.jpg", label: "Wohnzimmer" },
  { vorher: "/projekt-vorher-4.jpg", nachher: "/projekt-nachher-4.jpg", label: "Küche" },
  { vorher: "/projekt-vorher-5.jpg", nachher: "/projekt-nachher-5.jpg", label: "Schlafzimmer" },
];

export default function ErfahrungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        <HeroVideo src="/Hero%20Besichtigung.mp4" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#091426]/65 via-[#091426]/50 to-[#091426]/70" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-8 pt-28 pb-20">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-[0.1em] uppercase mb-8">
              Momente · Entscheidungen · Lernpunkte
            </span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-3xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Manche Dinge lernt man nur,
              <br />
              <span className="text-white/70">wenn man dabei war.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/65 leading-relaxed max-w-2xl">
              Drei Situationen aus der Praxis — Deals, die ich nicht gemacht habe,
              Verbindungen, die sich unerwartet ergeben haben, und Phasen,
              die von außen niemand sieht. Ungeschönt.
            </p>
            <div className="mt-10">
              <FlipButton
                href="/kontakt"
                text="Direkt schreiben"
                hoverText="Ich antworte persönlich."
                variant="white"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Alltagsgeschichten */}
      <section className="relative py-24 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#e0e3e5] to-transparent" />

        <AnimatedSection>
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#545f73] block mb-3">
            Aus der Praxis
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#191c1e]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Drei Momente aus dem Alltag
          </h2>
          <p className="mt-3 text-[#6B7280] max-w-xl text-lg">
            Situationen, die so nicht im Lehrbuch stehen — und die mich am meisten weitergebracht haben.
          </p>
        </AnimatedSection>

        <div className="mt-12 space-y-4">
          {geschichten.map((g, i) => (
            <AnimatedSection key={g.nr} delay={i * 0.08}>
              <AccordionItem nr={g.nr} titel={g.titel} teaser={g.teaser}>
                {g.absaetze.map((p, j) => <p key={j}>{p}</p>)}
                <div className="pt-4 border-t border-[#e0e3e5]/60 flex items-start gap-2">
                  <span className="text-[#091426] mt-0.5 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[#091426]">{g.lernpunkt}</span>
                </div>
              </AccordionItem>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Das Projekt — Vorher/Nachher */}
      <section className="py-24 px-5 sm:px-8 bg-[#091426] relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Text-Block — zentriert über dem Slider */}
          <AnimatedSection>
            <div className="max-w-5xl mx-auto mb-14">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50 block mb-4 text-center">
                Das Projekt
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white leading-tight text-center mb-10"
                style={{ letterSpacing: "-0.02em" }}
              >
                Ein Erfolg, auf den ich besonders stolz bin
              </h2>
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>Es gibt nicht den einen Moment, in dem plötzlich alles geschafft ist.</p>
                <p>Zumindest habe ich den bisher noch nicht erlebt.</p>
                <p>Was es aber gibt, sind einzelne Situationen, die einem zeigen, dass man auf dem richtigen Weg ist. Oft unspektakulär von außen — aber intern ziemlich klar.</p>
                <p>Eine davon war ein Projekt, das am Anfang alles andere als einfach war.</p>
                <p>Es war keine Traumimmobilie, kein Selbstläufer, nichts, was man einfach durchplant und dann nur noch abarbeitet. Im Gegenteil — es war eines dieser Projekte, bei denen man von Anfang an weiß: Das wird nicht nur nach Lehrbuch funktionieren.</p>
                <p>Die Ausgangslage war herausfordernd. Viele offene Fragen, wenig Struktur, einige Risiken, die man nicht komplett greifen konnte.</p>
                <p>Und trotzdem haben wir uns dafür entschieden.</p>
                <p>Nicht, weil es die sichere Nummer war — sondern weil wir daran geglaubt haben, dass wir daraus etwas machen können.</p>
                <p>Die Zeit danach war geprägt von genau dem, was man oft nicht sieht: Abstimmungen, Probleme, Umplanungen, Diskussionen. Dinge, die nicht funktionieren, wie gedacht. Entscheidungen, die man trifft — und später nochmal hinterfragt.</p>
                <p>Es gab Momente, in denen es einfacher gewesen wäre, den Weg zu verlassen.</p>
                <p>Aber genau das haben wir nicht gemacht.</p>
                <p>Schritt für Schritt haben wir das Projekt weiterentwickelt. Lösungen gefunden, Dinge angepasst, neu gedacht. Nicht perfekt, aber konsequent.</p>
                <p>Und irgendwann kommt dann dieser Punkt, der sich schwer beschreiben lässt.</p>
                <p>Nicht, weil plötzlich alles spektakulär ist — sondern weil man merkt, dass es funktioniert hat.</p>
                <p>Die Immobilie steht da. Entwickelt. Nutzbar. Mit einem Ergebnis, das man am Anfang so noch nicht sehen konnte.</p>
                <p>Aber das, worauf ich wirklich stolz bin, ist nicht das fertige Objekt.</p>
                <p>Sondern der Weg dorthin.</p>
                <p>Die Entscheidungen, die man getroffen hat, obwohl nicht alles klar war. Das Dranbleiben, auch wenn es nicht leicht war. Und vor allem das Vertrauen — in sich selbst, in den Prozess und in die Menschen, mit denen man arbeitet.</p>
                <p>Es gibt viele kleinere Erfolge auf diesem Weg. Deals, Projekte, Abschlüsse.</p>
                <p>Aber die Momente, die hängen bleiben, sind die, in denen man merkt: Man hat sich durch etwas durchgearbeitet, das am Anfang größer gewirkt hat als man selbst.</p>
                <p>Und genau das ist für mich bis heute die Definition von Erfolg.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Slider — volle Breite */}
          <AnimatedSection>
            <BeforeAfterSlider pairs={pairs} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 sm:px-8 bg-[#091426] relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        <AnimatedSection className="max-w-2xl mx-auto text-center relative z-10">
          <div className="glass-card rounded-[48px] p-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#191c1e]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Sanierung, Umbau, Entwicklung —
              du hast Fragen?
            </h2>
            <p className="mt-4 text-[#6B7280] leading-relaxed text-lg">
              Ich teile gerne, was ich auf diesem Weg gelernt habe — was
              funktioniert, was nicht und worauf es wirklich ankommt.
              Meld dich einfach.
            </p>
            <FlipButton
              href="/kontakt"
              text="Jetzt melden"
              hoverText="Ich antworte persönlich."
              size="lg"
              className="mt-8"
            />
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}

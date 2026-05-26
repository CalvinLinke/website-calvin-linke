import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { AccordionItem } from "@/components/Accordion";
import { InvestorCheck } from "@/components/InvestorCheck";

export const metadata: Metadata = {
  title: "Immobilienwissen — Calvin Linke",
  description:
    "Meine Sicht auf Rendite, Risiko, Standort und Sanierung. Kein Lehrbuch — sondern wie ich diese Themen in der Praxis erlebe.",
};

export default function ImmobilienwissenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-5 sm:px-8 bg-[#091426] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-[0.1em] uppercase mb-8">
              Immobilienwissen
            </span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-3xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Meine Sicht.
              <br />
              <span className="text-white/60">Keine Lehrmeinung.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl">
              Rendite, Risiko, Standort, Sanierung — wie ich diese Themen aus
              der Praxis heraus einordne. Kein Hochglanz, keine Formeln.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-24 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="mb-10">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#545f73]">
              Themen
            </span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-bold text-[#191c1e]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Was mich beschäftigt.
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            <AnimatedSection delay={0.05}>
              <AccordionItem nr="01" titel="Rendite & Risiko">
                <p>Wenn es um Immobilien geht, drehen sich viele Gespräche sehr schnell um ein Thema: Rendite. Oft ergänzt um Begriffe wie Cashflow oder Bruttorendite.</p>
                <p>Das ist auch absolut nachvollziehbar, am Ende handelt es sich um ein Anlageprodukt. Natürlich will man wissen, was dabei herauskommt.</p>
                <p>Gleichzeitig wird dabei oft vergessen, dass Rendite und Risiko immer zusammengehören. Es gibt keine Rendite ohne Risiko. Und dort, wo die Rendite höher ist, steigt in der Regel auch das Risiko.</p>
                <p>Das klingt erstmal einfach, wird in der Praxis aber häufig ausgeblendet. Viele suchen nach der besten Rendite, möglichst hoch, möglichst sicher. Diese Kombination gibt es so nicht.</p>
                <p>Jeder muss für sich selbst klären, wie viel Risiko man bereit ist zu tragen. Und das hängt stark von der eigenen Situation ab: Einkommen, Rücklagen, Erfahrung und auch der persönlichen Einstellung zu Unsicherheit.</p>
                <p>Ein weiterer Punkt, der das Thema in den letzten Jahren deutlich verändert hat, sind die Rahmenbedingungen. Vor einigen Jahren, in der Niedrigzinsphase, konnten Finanzierungen teilweise zu unter 1 % abgeschlossen werden. Das hat viele Modelle möglich gemacht, die heute so nicht mehr funktionieren.</p>
                <p>Aktuell bewegen wir uns eher im Bereich von 4 bis 5 % Zinsen. Gleichzeitig steigen auch die Bewirtschaftungs- und Instandhaltungskosten. Das verändert die gesamte Kalkulation.</p>
                <p>Das bedeutet: Renditen, die vor ein paar Jahren noch realistisch waren, sind heute deutlich schwerer zu erreichen.</p>
                <p>Auf der anderen Seite entstehen dadurch auch neue Aspekte. Höhere Zinsen können steuerlich relevant sein und die Betrachtung verändert sich insgesamt. Es wird wieder mehr gerechnet, und weniger einfach gekauft.</p>
                <p>Was ebenfalls oft unterschätzt wird: Rendite ist kein statischer Wert. Die Bewertung zum Kaufzeitpunkt ist das eine. Die Entwicklung über die Zeit das andere. Steigende Mieten, Entwicklung des Standorts und Maßnahmen an der Immobilie selbst können die Rendite langfristig deutlich verändern.</p>
                <p>Am Ende ist Rendite kein einzelner Wert, den man einmal berechnet und dann passt es. Es ist ein Zusammenspiel aus vielen Faktoren, und lässt sich deshalb auch nicht pauschal beantworten.</p>
              </AccordionItem>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <AccordionItem nr="02" titel="Standort">
                <p>Der Satz Lage, Lage, Lage ist wahrscheinlich einer der bekanntesten im Immobilienbereich. Und gleichzeitig einer der am meisten verwendeten, oft ohne wirklich verstanden zu werden.</p>
                <p>Standort bedeutet deutlich mehr als nur gute Gegend oder schöne Straße.</p>
                <p>Man unterscheidet grundsätzlich zwischen Mikro- und Makrolage.</p>
                <p>Die Mikrolage beschreibt das direkte Umfeld der Immobilie. Also alles, was man im Alltag direkt wahrnimmt: Einkaufsmöglichkeiten, Schulen, Anbindung an den öffentlichen Nahverkehr, Nähe zu Arbeitgebern oder Universitäten.</p>
                <p>Aber auch weichere Faktoren spielen eine Rolle: Wie wird der Stadtteil wahrgenommen? Welche Zielgruppen wohnen dort? Wie entwickelt sich die Nachbarschaft?</p>
                <p>Eine Wohnung in einer Lage, in der sich Menschen wohlfühlen und ihren Alltag gut organisieren können, wird langfristig immer attraktiver bleiben.</p>
                <p>Die Makrolage geht noch einen Schritt weiter. Hier geht es um die Entwicklung einer gesamten Stadt oder Region.</p>
                <p>Wie wächst die Bevölkerung? Welche Unternehmen siedeln sich an? Gibt es wirtschaftliche Perspektiven? Wie entwickelt sich die Infrastruktur über die nächsten Jahre?</p>
                <p>Das sind Fragen, die man nicht immer direkt beantworten kann, die aber einen großen Einfluss auf den langfristigen Wert einer Immobilie haben.</p>
                <p>Ein Standort kann heute in Ordnung sein und sich über die nächsten Jahre sehr positiv entwickeln. Genauso kann es auch in die andere Richtung gehen.</p>
                <p>Deshalb ist Standort keine Momentaufnahme, sondern immer auch eine Wette auf die Zukunft.</p>
                <p>Und genau hier zeigt sich, warum das Thema oft unterschätzt wird. Es geht nicht nur darum, wo eine Immobilie heute steht, sondern wohin sich das Umfeld entwickelt.</p>
              </AccordionItem>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <AccordionItem nr="03" titel="Sanierung">
                <p>Für viele ist das Thema Sanierung schwer greifbar. Oft wird es vor allem mit Kosten verbunden, und die sind auch nicht zu unterschätzen.</p>
                <p>Eine Sanierung bedeutet erstmal: investieren. Zeit, Geld, Planung und auch ein gewisses Maß an Unsicherheit.</p>
                <p>Gleichzeitig liegt genau darin aber auch eine große Chance.</p>
                <p>Durch eine Sanierung kann man eine Immobilie aktiv entwickeln. Man ist nicht mehr nur abhängig vom aktuellen Zustand oder vom bestehenden Mietniveau, sondern kann selbst Einfluss nehmen.</p>
                <p>Ein Beispiel: Eine Wohnung ist in einem schlechten Zustand vermietet. Die Miete liegt auf einem niedrigen Niveau. Spielraum für Anpassungen ist begrenzt, auch durch gesetzliche Rahmenbedingungen.</p>
                <p>Solange sich am Zustand nichts ändert, bleibt auch die Entwicklung begrenzt.</p>
                <p>Durch eine umfassende Sanierung verändert sich die Ausgangssituation komplett. Grundrisse können angepasst werden, Ausstattung modernisiert, Wohnqualität deutlich verbessert.</p>
                <p>Und genau das wirkt sich am Ende auch auf die erzielbare Miete aus.</p>
                <p>Natürlich ist das kein Selbstläufer. Eine Sanierung bringt immer Risiken mit sich: Kosten können steigen, Zeitpläne verschieben sich, unerwartete Probleme tauchen auf, oft genau dann, wenn man sie nicht gebrauchen kann.</p>
                <p>Trotzdem ist es für viele Investoren ein zentraler Hebel.</p>
                <p>Nicht jede Immobilie eignet sich dafür, und nicht jede Sanierung macht wirtschaftlich Sinn. Aber wenn das Konzept stimmt, kann man damit Werte schaffen, die über den reinen Kauf hinausgehen.</p>
                <p>Am Ende ist Sanierung weniger ein Kostenpunkt und mehr ein Werkzeug. Die Frage ist nicht, ob man saniert, sondern wann, wie und mit welchem Ziel.</p>
              </AccordionItem>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <AccordionItem nr="04" titel="Dresden & Region">
                <p>Wenn ich über Immobilien spreche, dann fast immer mit einem klaren regionalen Fokus: Dresden, Sachsen und das direkte Umland.</p>
                <p>Das hat weniger mit Bequemlichkeit zu tun, sondern eher damit, dass ich davon überzeugt bin, dass man einen Markt wirklich verstehen muss, um in ihm gute Entscheidungen zu treffen. Und das funktioniert am besten dort, wo man Entwicklungen nicht nur aus Zahlen kennt, sondern täglich mitbekommt.</p>
                <p>Dresden ist dabei ein Standort, der auf den ersten Blick oft unterschätzt wird, auf den zweiten Blick aber extrem spannend ist.</p>
                <p>Die Stadt bringt mehrere Faktoren zusammen, die langfristig relevant sind: eine starke historische Substanz, eine hohe Lebensqualität, ein etablierter Wissenschaftsstandort und eine wachsende industrielle Basis.</p>
                <p>Gleichzeitig ist Dresden in seiner Entwicklung räumlich vergleichsweise begrenzt. Durch die Lage im Elbtal, oft als eine Art Kessel beschrieben, gibt es weniger Möglichkeiten, die Stadt einfach weiter auszudehnen, wie man es aus anderen Regionen kennt.</p>
                <p>Hinzu kommt der hohe Anteil an denkmalgeschützten Gebäuden. Das macht die Stadt architektonisch besonders, bringt aber auch Einschränkungen mit sich. Viele Gebäude können nicht einfach erweitert, aufgestockt oder grundlegend verändert werden.</p>
                <p>Das führt dazu, dass das Angebot an Wohnraum, gerade in guten Lagen, nur begrenzt ausgeweitet werden kann.</p>
                <p>Auf der anderen Seite steht eine stabile und teilweise wachsende Nachfrage.</p>
                <p>Ein wichtiger Treiber dafür ist die TU Dresden und das gesamte wissenschaftliche Umfeld. Jedes Jahr kommen neue Studierende, Absolventen und Fachkräfte in die Stadt. Ein Teil davon bleibt langfristig, und sorgt damit für eine konstante Nachfrage nach Wohnraum.</p>
                <p>Zusätzlich entwickelt sich Dresden seit Jahren immer stärker in Richtung Technologie- und Industriestandort.</p>
                <p>Ein zentraler Punkt ist dabei die Halbleiterindustrie. Mit Unternehmen wie Infineon, Bosch oder GlobalFoundries hat sich hier bereits ein starkes Ökosystem aufgebaut. Die Ansiedlung von TSMC bzw. ESMC verstärkt diese Entwicklung nochmal deutlich.</p>
                <p>Das bedeutet konkret: neue Arbeitsplätze, internationale Fachkräfte, steigende Kaufkraft und langfristig eine stärkere wirtschaftliche Dynamik.</p>
                <p>Und genau diese Kombination, begrenztes Angebot bei gleichzeitig steigender Nachfrage, ist das, was einen Immobilienmarkt langfristig prägt.</p>
                <p>Themen wie Mietpreisregulierung, energetische Anforderungen oder steigende Bewirtschaftungskosten sorgen dafür, dass viele klassische Modelle nicht mehr so funktionieren wie noch vor einigen Jahren.</p>
                <p>Zum einen wird es innerhalb von Dresden schwieriger, wirtschaftlich sinnvolle Investments zu finden, die gleichzeitig den eigenen Anforderungen entsprechen. Zum anderen rücken dadurch automatisch die umliegenden Regionen stärker in den Fokus.</p>
                <p>Standorte wie Pirna, Freital, Kesselsdorf oder generell das Dresdner Umland werden zunehmend interessanter. Nicht unbedingt, weil sie besser sind als Dresden, sondern weil sie andere Voraussetzungen mitbringen.</p>
                <p>Mehr Platz, oft geringere Einstiegspreise und gleichzeitig eine gute Anbindung an die Stadt.</p>
                <p>Was früher zu weit draußen war, ist heute oft eine bewusste Entscheidung für mehr Wohnqualität bei gleichzeitig akzeptabler Pendeldistanz.</p>
                <p>Dresden wird sich weiterentwickeln, wirtschaftlich, strukturell und auch im Hinblick auf die Nachfrage nach Wohnraum. Gleichzeitig wird das Umland immer stärker davon profitieren. Viele Entwicklungen strahlen nach außen ab und sorgen dafür, dass sich auch kleinere Standorte dynamisch entwickeln.</p>
                <p>Denn am Ende entstehen die interessantesten Chancen oft nicht dort, wo heute schon alle hinschauen, sondern dort, wo sich Veränderungen gerade erst abzeichnen.</p>
              </AccordionItem>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <AccordionItem nr="05" titel="Aus Immobiliengesprächen">
                <p>In Gesprächen über Immobilien fällt mir immer wieder auf, wie unterschiedlich das Thema wahrgenommen wird, und wie oft dabei nur ein Teil des Ganzen betrachtet wird.</p>
                <p>Viele Gespräche bleiben an der Oberfläche. Es geht schnell um Meinungen, einzelne Erfahrungen oder auch Vorurteile. Ein Bild, das dabei häufiger entsteht, ist das vom reichen Immobilientyp, der vermeintlich mit wenig Aufwand viel Geld verdient.</p>
                <p>Ich kann verstehen, woher dieses Bild kommt. Von außen wirkt vieles oft einfacher, als es tatsächlich ist. Was dabei aber selten gesehen wird, ist der Aufwand und die Verantwortung, die hinter den Ergebnissen stehen.</p>
                <p>Eine Immobilie ist kein Produkt, das man einmal kauft und dann läuft es schon. Es geht um Entscheidungen, die oft langfristige Auswirkungen haben. Um Prozesse, die koordiniert werden müssen. Und auch um Risiken, die man einschätzen und tragen muss.</p>
                <p>Gleichzeitig habe ich den Eindruck, dass viele sich zwar mit Immobilien beschäftigen, aber selten wirklich in die Tiefe gehen. Häufig wird das Thema stark vereinfacht, zum Beispiel auf Kennzahlen wie die Miete im Verhältnis zum Kaufpreis. Das ist ein Ansatzpunkt, aber in der Praxis greift das deutlich zu kurz.</p>
                <p>Ein großer Teil der Bewertung findet auf anderen Ebenen statt. Die Mikrolage spielt eine entscheidende Rolle: Wie ist die Anbindung? Welche Infrastruktur ist vorhanden? Wie entwickelt sich das direkte Umfeld? Genauso wichtig ist die Makrolage, also die Frage, wie sich ein Standort insgesamt entwickelt.</p>
                <p>Dazu kommen Themen wie Finanzierung, steuerliche Rahmenbedingungen, Instandhaltung und die Frage, welches Potenzial in einer Immobilie überhaupt steckt. Also nicht nur: Was ist heute da? Sondern auch: Was kann daraus werden?</p>
                <p>Ein Punkt, der in Gesprächen oft unterschätzt wird, ist die eigene Motivation. Viele sagen, sie möchten eine Immobilie zur Eigennutzung kaufen, mit dem Gedanken, etwas Eigenes zu haben. Das ist absolut nachvollziehbar. Gleichzeitig wird oft nicht berücksichtigt, was damit einhergeht: weniger Flexibilität, langfristige Bindung und die Verantwortung für Instandhaltung und Finanzierung.</p>
                <p>Bei Kapitalanlagen ist es ähnlich. Ich möchte Vermögen aufbauen oder Geld verdienen ist ein häufiger Ausgangspunkt. Aber auch hier wird selten konkretisiert, was das eigentlich bedeutet. Geht es darum, monatlich einen Überschuss zu erzielen? Oder steht die langfristige Wertentwicklung im Vordergrund? Welche Strategie passt zur eigenen Situation, zum eigenen Einkommen und zur eigenen Risikobereitschaft?</p>
                <p>Diese Fragen sind entscheidend, werden aber oft erst gestellt, wenn man schon mitten im Prozess ist.</p>
                <p>Genau deshalb sehe ich meinen Ansatz darin, Dinge verständlich einzuordnen. Nicht, um eine richtige Meinung vorzugeben, sondern um zu zeigen, wie komplex das Thema tatsächlich ist, und worauf es in der Praxis wirklich ankommt.</p>

                <p className="font-semibold text-[#191c1e] pt-2">Beispiele aus der Praxis — anonymisiert</p>

                <p>Wir haben eine Wohnung in einem Objekt gekauft, das wir bereits kannten. Unterlagen waren vollständig, alles geprüft, Kaufpreis verhandelt. Der nächste Schritt war die Sanierung. Und relativ schnell war klar: So, wie sie aktuell geschnitten ist, funktioniert sie nicht. Küche zu klein, Bad ebenfalls, dafür ein Schlafzimmer, das eher an einen Ballsaal erinnert. Also: Grundriss anpassen, Wohnkomfort schaffen, das Ganze sinnvoll neu denken.</p>
                <p>Dann kam der nächste Punkt. Während der Arbeiten haben wir festgestellt, dass die geplante Umsetzung für das Badezimmer so gar nicht funktioniert, weil Leitungen ganz anders verlaufen als gedacht. Also wieder einen Schritt zurück. Kurz darauf dann das nächste Thema: Ein Wasserschaden in der Wohnung darüber. Ergebnis: Verzögerung.</p>
                <p>Am Ende haben wir die Wohnung trotzdem fertiggestellt. Mit deutlich mehr Aufwand als ursprünglich geplant, aber mit einem Ergebnis, das sich sehen lassen konnte. Und genau in diesem Moment kam die nächste Überraschung: Die Hausverwaltung stellte fest, dass eine Strangsanierung notwendig ist. Das frisch sanierte Badezimmer muss wieder geöffnet werden. Dazu eine Sonderumlage.</p>
                <p>Diese Wohnung ist bis heute so eine Art Lehrstück für uns geblieben. Nicht, weil etwas komplett schiefgelaufen ist, sondern weil sie gezeigt hat, wie viele unvorhersehbare Faktoren es geben kann.</p>
                <p>Ein anderes Beispiel zeigt, dass es nicht nur bei Immobilien selbst Herausforderungen gibt, sondern oft schon davor. Ein Anleger kam auf uns zu, mit dem klaren Ziel, eine Wohnung als Kapitalanlage zu erwerben. Konzept, Strategie und Objekt waren abgestimmt. Der nächste Schritt war die Finanzierung — und dann kamen Probleme. Details fehlten, Banken lehnten ab.</p>
                <p>Also wieder zurück zum Anfang. Währenddessen lief die Zeit, und wie so oft in solchen Phasen hat sich auch das Marktumfeld verändert. Die Zinsen wurden angepasst. Das ursprüngliche Konzept hat damit so nicht mehr funktioniert.</p>
                <p>Anstatt den Deal scheitern zu lassen, haben wir eine Lösung gesucht — auch selbst ein Stück weit entgegengekommen und beim Preis nachgegeben, um das Modell wieder tragfähig zu machen. Am Ende hat es funktioniert.</p>
                <p>Und was oft unterschätzt wird: Genau solche Situationen entscheiden darüber, ob jemand wiederkommt oder nicht. In diesem Fall kam er wieder. Und nicht nur er, sondern auch ein Bekannter von ihm. Aus einem Deal wurden mehrere — nicht weil alles reibungslos lief, sondern weil man auch in schwierigen Situationen dran geblieben ist und Lösungen gesucht hat. Und genau das ist am Ende oft der Unterschied.</p>
              </AccordionItem>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Selbstcheck */}
      <section className="py-32 px-5 sm:px-8 relative overflow-hidden">
        {/* Hintergrundbild */}
        <img
          src="/Zwinger.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#091426]/70 pointer-events-none" />

        <div className="max-w-2xl mx-auto relative z-10 text-center">
          <AnimatedSection>
            <h2
              className="text-5xl sm:text-6xl font-bold text-white mb-2 inline-block border-b-2 border-white pb-2"
              style={{ letterSpacing: "-0.03em" }}
            >
              Selbstcheck
            </h2>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ letterSpacing: "-0.03em" }}
            >
              Wo stehst du?
            </h2>
            <p className="mt-4 text-white/50 text-xl leading-relaxed">
              Vier Fragen. Ein ehrliches Ergebnis.
            </p>
            <InvestorCheck />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

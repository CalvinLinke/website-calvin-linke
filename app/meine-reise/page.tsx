import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { FlipButton } from "@/components/ui/FlipButton";

export const metadata: Metadata = {
  title: "Meine Reise",
  description:
    "Calvin Linke über seinen Weg in Immobilien — vom Studium über erste Jobs bis zur Selbstständigkeit und drei eigenen Unternehmen.",
};

const milestones = [
  {
    year: "2015–2020",
    title: "Studium Vermögensmanagement",
    subtitle: "Leipzig",
    text: "Schwerpunkt Immobilienwirtschaft. Die Theorie war wichtig – aber das meiste habe ich danach in der Praxis gelernt.",
  },
  {
    year: "2020–2021",
    title: "Hausverwaltung",
    subtitle: "Erster Job, erster Reality-Check",
    text: "Viel Bürokratie, viel Verwaltung. Weniger als ein Jahr – aber wichtig, um zu verstehen, was ich nicht machen will.",
  },
  {
    year: "2021–2022",
    title: "Immobilienhandel & Makler",
    subtitle: "Junges, dynamisches Team",
    text: "Hier hat es wirklich geklickt. Ich habe gemerkt, wie vielschichtig der Markt ist – und wo ich mich sehe. Mein damaliger Chef ist bis heute Freund und Mentor.",
  },
  {
    year: "2022",
    title: "Eines der größten Maklerhäuser Dresdens",
    subtitle: "Markteinblick auf höchstem Niveau",
    text: "Viel gesehen, viel gelernt – und vor allem verstanden, wie der Markt tatsächlich funktioniert. Dort habe ich auch meinen heutigen Geschäftspartner kennengelernt.",
  },
  {
    year: "2022",
    title: "Gründung CADA Invest GmbH & GFU Distribution",
    subtitle: "Schritt in die Selbstständigkeit",
    text: "Zum Jahreswechsel 2022/2023 selbstständig – in einer Phase, in der sich der Markt spürbar verändert hat. Steigende Zinsen, mehr Unsicherheit. Für mich genau der Moment, in dem sich neue Chancen ergeben haben.",
  },
  {
    year: "2026",
    title: "Gründung Saxovia",
    subtitle: "Strukturierte Immobilienvermittlung",
    text: "Aus dem Alltag heraus entstanden – weil ich immer wieder gesehen habe, wie viel Potenzial in der Vermittlung ungenutzt bleibt.",
  },
];

const companies = [
  {
    name: "CADA Invest GmbH",
    year: "2022",
    focus: "Ankauf · Entwicklung · Sanierung",
    text: "Mein erster bewusster Schritt, wirklich selbst Verantwortung zu übernehmen. Der Fokus liegt auf dem Ankauf von Immobilien mit Entwicklungspotenzial, der Sanierung und der anschließenden Veräußerung. Was mich daran bis heute reizt: am Ende entsteht etwas Greifbares. Wohnraum, der genutzt wird.",
    logo: "/Logo%20CADA%20transparent.png",
    logoBg: true,
    href: "https://www.cada-invest.de/",
  },
  {
    name: "GFU Distribution",
    year: "2022",
    focus: "Glasfaser · Infrastruktur · B2B",
    text: "Entstanden aus einem Problem, das ich selbst immer wieder erlebt habe: fehlende digitale Infrastruktur. Gemeinsam mit 1&1 Versatel verbinden wir Unternehmen mit Glasfasernetzen – eine Grundlage, die langfristig trägt.",
    logo: "/gfu%20logo.svg",
    logoBg: true,
    href: "https://www.glasfaser-fuer-unternehmen.de/",
  },
  {
    name: "Saxovia",
    year: "2026",
    focus: "Immobilienvermittlung · Prozesse · System",
    text: "Das beste Beispiel dafür, wie sich Dinge aus dem Alltag heraus entwickeln. Gemeinsam mit einem IT-Partner bauen wir strukturierte, verlässliche Vermittlungsprozesse auf – nachvollziehbar, transparent und professionell.",
    logo: "/Logo%20Saxovia.png",
    logoBg: true,
    href: null,
  },
];

export default function MeineReisePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-5 sm:px-8 bg-[#091426] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-[0.1em] uppercase mb-8">
              Meine Reise
            </span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-3xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Ich bin auf dem Weg.
              <br />
              <span className="text-white/60">Nicht am Ziel.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl">
              27 Jahre. Dresden. Drei Unternehmen. Kein Masterplan – aber eine
              klare Haltung.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Kurzbiografie */}
      <section className="relative py-24 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#e0e3e5] to-transparent" />

        <AnimatedSection className="mb-10">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#545f73]">
            Kurzbiografie
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold text-[#191c1e]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Wer ich bin.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection direction="left">
            <div className="rounded-[32px] overflow-hidden">
              <img
                src="/Bild%20Calvin%20Linke%2010.png"
                alt="Calvin Linke"
                className="w-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="space-y-5 text-[#6B7280] leading-relaxed text-lg">
            <p>
              Ich bin Calvin, 27, komme aus Dresden – und bin der Region bis
              heute treu geblieben.
            </p>
            <p>
              Nach dem Abitur bin ich nach Leipzig gegangen und habe
              Vermögensmanagement mit Schwerpunkt Immobilienwirtschaft studiert.
              Die Theorie war wichtig – aber das meiste habe ich danach in der
              Praxis gelernt.
            </p>
            <p>
              Danach ging's relativ klassisch los: Makler, Hausverwaltung,
              Immobilienhandel und am Ende eines der größten Maklerhäuser in
              Dresden. Viel gesehen, viel gelernt – und vor allem verstanden,
              wie der Markt tatsächlich funktioniert.
            </p>
            <p>
              Selbstständig geworden bin ich zum Jahreswechsel 2022/2023. In
              einer Phase, in der sich der Markt spürbar verändert hat –
              steigende Zinsen, mehr Unsicherheit. Für mich war das genau der
              Moment, in dem sich neue Chancen ergeben haben.
            </p>
            <p>
              Heute bin ich im Immobilienmarkt selbstständig – mit Fokus auf
              Ankauf, Entwicklung und Sanierung. Mich reizt vor allem, dass am
              Ende etwas Greifbares entsteht.
            </p>
            <p className="text-[#191c1e] font-medium">
              Genau diese Erfahrungen prägen heute meinen Blick auf das Thema.
              Weniger Theorie, mehr Praxis. Weniger Hochglanz, mehr Realität.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 px-5 sm:px-8 bg-[#f2f4f6]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-14">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#545f73] block mb-3">
              Der Weg
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#191c1e]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Stationen
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px bg-[#e0e3e5]" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <AnimatedSection key={i} delay={i * 0.08} direction="left">
                  <div className="flex gap-6 sm:gap-10">
                    {/* Dot */}
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full border-2 border-[#091426] bg-white flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#091426]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="glass-card rounded-[24px] p-6 sm:p-8 flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-[#091426] text-white text-xs font-semibold rounded-full">
                          {m.year}
                        </span>
                        <span className="text-xs text-[#545f73] font-medium">
                          {m.subtitle}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#191c1e] mb-2">
                        {m.title}
                      </h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed">
                        {m.text}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wie bist du zu Immobilien gekommen */}
      <section className="relative py-24 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#e0e3e5] to-transparent" />

        <AnimatedSection className="mb-12">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#545f73] block mb-3">
            Der Anfang
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#191c1e] max-w-2xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Wie bist du zu Immobilien gekommen?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0}>
          <div className="glass-card rounded-[32px] p-8 sm:p-10 space-y-4 text-[#6B7280] leading-relaxed">
            <p>
              Zu Immobilien bin ich ehrlich gesagt nicht aus einem besonders
              „tiefen" Grund gekommen – zumindest am Anfang nicht.
            </p>
            <p>
              In meinem Umfeld gab es damals jemanden, der beruflich mit
              Immobilien zu tun hatte. Er ist immer sehr souverän aufgetreten
              und hat auch einen gewissen materiellen Erfolg ausgestrahlt. Für
              mich war das damals ziemlich klar: Immobilien = Erfolg.
            </p>
            <p>
              Heute weiß ich: So einfach ist es nicht. Es ist am Ende genauso
              anspruchsvoll und arbeitsintensiv wie jede andere Branche auch –
              nur auf eine andere Art.
            </p>
            <p>
              Mein erster Job war in einer Hausverwaltung. Und das war ziemlich
              schnell ein Reality-Check. Von dem Bild, das ich vorher im Kopf
              hatte, war da nicht viel zu sehen. Ich war dort nicht lange –
              keine sechs Monate. Aber rückblickend war genau das wichtig, um
              zu verstehen, was ich nicht machen will.
            </p>
            <p>
              Richtig geklickt hat es dann bei meinem zweiten Arbeitgeber im
              Immobilienhandel. Dort habe ich gemerkt: Das ist der Bereich, in
              dem ich mich sehe.
            </p>
            <p className="text-[#191c1e] font-medium">
              Mein damaliger Chef ist bis heute ein enger Freund und Mentor für
              mich. Und ich glaube, genau solche Menschen machen am Ende oft
              den Unterschied auf dem eigenen Weg.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Unternehmen */}
      <section className="relative py-24 px-5 sm:px-8 bg-[#091426] overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection className="mb-14">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50 block mb-3">
              Unternehmensgruppe
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ letterSpacing: "-0.02em" }}
            >
              Wann sind CADA, Saxovia
              <br />
              und GFU entstanden?
            </h2>
            <p className="mt-4 text-white/60 text-lg max-w-2xl">
              Die wenigsten davon klassisch „geplant". Vieles hat sich aus der
              Praxis heraus ergeben – aus Situationen, Problemen oder dem
              nächsten logischen Schritt.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            {companies.map((c, i) => (
              <AnimatedSection key={c.name} delay={i * 0.1} className="h-full">
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 backdrop-blur-md border border-white/15 rounded-[32px] p-8 h-full flex flex-col hover:bg-white/20 hover:border-white/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-6">
                      {c.logoBg ? (
                        <div className="bg-white rounded-xl px-3 py-2 inline-flex items-center">
                          <img src={c.logo} alt={c.name} className="h-7 w-auto max-w-[120px] object-contain" />
                        </div>
                      ) : (
                        <img src={c.logo} alt={c.name} className="h-8 w-auto max-w-[140px] object-contain" />
                      )}
                      <span className="px-3 py-1 bg-white/15 text-white/80 text-xs font-semibold rounded-full">
                        seit {c.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{c.name}</h3>
                    <p className="text-xs text-white/50 font-medium mb-4">{c.focus}</p>
                    <p className="text-sm text-white/65 leading-relaxed flex-1">{c.text}</p>
                    <p className="mt-5 text-xs text-white/40 group-hover:text-white/70 transition-colors duration-300">
                      Website besuchen →
                    </p>
                  </a>
                ) : (
                  <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-[32px] p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      {c.logoBg ? (
                        <div className="bg-white rounded-xl px-3 py-2 inline-flex items-center">
                          <img src={c.logo} alt={c.name} className="h-7 w-auto max-w-[120px] object-contain" />
                        </div>
                      ) : (
                        <img src={c.logo} alt={c.name} className="h-8 w-auto max-w-[140px] object-contain" />
                      )}
                      <span className="px-3 py-1 bg-white/15 text-white/80 text-xs font-semibold rounded-full">
                        seit {c.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{c.name}</h3>
                    <p className="text-xs text-white/50 font-medium mb-4">{c.focus}</p>
                    <p className="text-sm text-white/65 leading-relaxed flex-1">{c.text}</p>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-[32px] p-8 sm:p-10">
              <p className="text-white/70 leading-relaxed text-lg max-w-3xl">
                CADA und Saxovia greifen dabei natürlich ineinander. Viele
                Themen überschneiden sich, vieles ergänzt sich gegenseitig.
                Erfahrungen aus der einen Welt fließen in die andere ein und
                umgekehrt. Die GFU ist operativ davon getrennt, profitiert aber
                ebenfalls vom Netzwerk und den Kontakten, die sich über die
                Zeit aufgebaut haben.
              </p>
              <p className="mt-5 text-white font-semibold text-lg">
                Alle drei sind aus der gleichen Haltung entstanden: nicht darauf
                warten, dass sich Dinge von selbst lösen – sondern aktiv werden,
                wenn man ein Problem erkennt oder eine Chance sieht.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Erstes großes Learning */}
      <section className="relative py-24 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#e0e3e5] to-transparent" />

        <AnimatedSection className="mb-12">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#545f73] block mb-3">
            Learnings
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#191c1e] max-w-2xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Was war dein erstes größeres Learning?
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <AnimatedSection delay={0}>
            <div className="glass-card rounded-[32px] p-8 sm:p-10 space-y-4 text-[#6B7280] leading-relaxed">
              <p>
                Eines der ersten größeren Learnings für mich war, zu verstehen,
                wie der Markt tatsächlich funktioniert – und dass er nicht immer
                so ist, wie man ihn sich am Anfang vorstellt.
              </p>
              <p>
                Der Immobilienmarkt kann an vielen Stellen sehr hart sein. Manche
                würden sagen: ein Haifischbecken. Ich bin relativ offen
                gestartet – mit der Einstellung, dass man fair miteinander
                arbeitet und am Ende alle profitieren können.
              </p>
              <p>
                Ich musste lernen, mit Rückschlägen umzugehen, mit Situationen,
                in denen Vertrauen nicht erwidert wurde oder in denen ich Dinge
                im Nachhinein anders eingeschätzt hätte.
              </p>
              <p>
                Gleichzeitig war genau das ein Punkt, an dem ich für mich eine
                Entscheidung getroffen habe: Ich passe mich nicht komplett daran
                an. Fair bleiben, transparent arbeiten und langfristig denken –
                auch wenn das kurzfristig nicht immer der einfachste Weg ist.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-5">
            <AnimatedSection delay={0.1}>
              <div className="glass-card rounded-[32px] p-8">
                <span className="inline-block px-3 py-1 bg-[#091426] text-white text-xs font-semibold rounded-full mb-5">
                  01
                </span>
                <h3 className="text-lg font-bold text-[#191c1e] mb-3">
                  Gemeinschaft aufbauen
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  Gemeinsam mit einem Kommilitonen habe ich angefangen,
                  regelmäßige Treffen im kleinen Kreis zu organisieren. Kein
                  großes Event, kein Business-Format – ehrlicher Austausch
                  unter Leuten, die ähnliche Themen haben.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="glass-card rounded-[32px] p-8">
                <span className="inline-block px-3 py-1 bg-[#091426] text-white text-xs font-semibold rounded-full mb-5">
                  02
                </span>
                <h3 className="text-lg font-bold text-[#191c1e] mb-3">
                  Die wichtigste Erkenntnis
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                  Unterstützen, helfen und geben – ohne bei jedem Schritt direkt
                  etwas zurückzuerwarten. Das funktioniert nicht immer sofort.
                  Aber wenn man konsequent dabei bleibt, kommt vieles mit der
                  Zeit zurück.
                </p>
                <p className="text-sm font-semibold text-[#191c1e] italic">
                  „Wer Gutes gibt, bekommt Gutes zurück."
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-[32px] p-8">
                <span className="inline-block px-3 py-1 bg-[#091426] text-white text-xs font-semibold rounded-full mb-5">
                  03
                </span>
                <h3 className="text-lg font-bold text-[#191c1e] mb-3">
                  Mit wem du arbeitest, entscheidest du
                </h3>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  Du kannst den Markt nicht komplett verändern. Aber du kannst
                  entscheiden, mit wem du ihn gestaltest.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 sm:px-8 bg-[#091426] relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <AnimatedSection className="max-w-2xl mx-auto text-center relative z-10">
          <div className="glass-card rounded-[48px] p-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#191c1e]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Interesse an einem Austausch?
            </h2>
            <p className="mt-4 text-[#6B7280] leading-relaxed text-lg">
              Ich spreche offen über Projekte, Zahlen und Entscheidungen. Wenn
              du konkrete Fragen hast oder an einer Zusammenarbeit interessiert
              bist — schreib mir.
            </p>
            <FlipButton href="/kontakt" size="lg" className="mt-8" />
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}

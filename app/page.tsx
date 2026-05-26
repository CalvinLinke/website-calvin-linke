import Link from "next/link";
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { getRecentPosts, formatDatum } from "@/lib/posts";
import { FlipButton } from "@/components/ui/FlipButton";

export const metadata: Metadata = {
  title: "Rendite & Realität — Ehrliches Immobilien- und Unternehmerjournal",
  description:
    "Kein Hochglanz. Keine Erfolgsformeln. Ehrliche Einblicke in Immobilienprojekte, unternehmerische Entscheidungen und echte Learnings aus Dresden.",
};

const stats = [
  { wert: "9", label: "laufende Projekte" },
  { wert: "6+", label: "Jahre Markterfahrung" },
  { wert: "Dresden", label: "Heimatmarkt" },
];

const pillars = [
  {
    icon: "menu_book",
    titel: "Immobilienwissen",
    text: "Kalkulation, Finanzierung, Markteinschätzung — konkret und ohne Fachjargon.",
    href: "/immobilienwissen",
  },
  {
    icon: "manage_search",
    titel: "Erfahrungen",
    text: "Was in der Praxis wirklich passiert. Projekte, Fehler, Lernpunkte.",
    href: "/erfahrungen",
  },
  {
    icon: "lightbulb",
    titel: "Mehrwerte",
    text: "Checklisten, Denkansätze und Werkzeuge für bessere Entscheidungen.",
    href: "/mehrwerte",
  },
];

export default function StartPage() {
  const recentPosts = getRecentPosts(3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Hero%20Video%20neu.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#091426]/65 via-[#091426]/50 to-[#091426]/70" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-8 pt-28 pb-20">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-[0.1em] uppercase mb-8">
              Immobilien · Unternehmen · Realität
            </span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-3xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Kein Hochglanz.
              <br />
              <span className="text-white/70">Nur echte Erfahrungen.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/65 leading-relaxed max-w-2xl">
              Ich nehme dich mit — während ich Immobilienprojekte entwickle,
              Entscheidungen treffe und dabei lerne, was auf dem Papier steht
              und was die Realität daraus macht.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <FlipButton
                href="/meine-reise"
                text="Meine Reise lesen"
                hoverText="Der Weg, nicht das Ziel."
                variant="white"
              />
              <FlipButton
                href="/immobilienwissen"
                text="Zum Immobilienwissen"
                hoverText="Zum Immobilienwissen"
                variant="glass"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-16">
            <div className="inline-flex flex-wrap gap-10 bg-white/10 backdrop-blur-md border border-white/15 rounded-[32px] px-10 py-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white">{stat.wert}</p>
                  <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What you find here */}
      <section className="relative py-24 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#e0e3e5] to-transparent" />

        <AnimatedSection>
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#545f73] block mb-3">
            Das Journal
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#191c1e]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Was du hier findest
          </h2>
          <p className="mt-3 text-[#6B7280] max-w-xl text-lg">
            Kein Coaching. Keine Erfolgsversprechen. Nur das, was ich wirklich
            erfahren und gelernt habe.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.titel} delay={i * 0.1}>
              <Link
                href={pillar.href}
                className="group flex flex-col glass-card rounded-[32px] p-8 hover:shadow-xl transition-all duration-300 h-full"
              >
                <span className="material-symbols-outlined text-[#091426] text-[28px]">
                  {pillar.icon}
                </span>
                <h3 className="mt-5 text-xl font-bold text-[#191c1e] group-hover:text-[#091426] transition-colors">
                  {pillar.titel}
                </h3>
                <p className="mt-2 text-sm text-[#6B7280] leading-relaxed flex-1">
                  {pillar.text}
                </p>
                <span className="mt-6 inline-block text-sm text-[#091426] font-semibold group-hover:underline">
                  Mehr lesen →
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="relative py-24 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#e0e3e5] to-transparent" />

        <AnimatedSection className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#545f73] block mb-3">
              Aktuell
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#191c1e]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Aktuelle Beiträge
            </h2>
            <p className="mt-2 text-[#6B7280] text-lg">
              Einblicke aus laufenden Projekten und dem Dresdner Markt.
            </p>
          </div>
          <Link
            href="/immobilienwissen"
            className="text-sm text-[#091426] font-semibold hover:underline whitespace-nowrap"
          >
            Alle Artikel →
          </Link>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {recentPosts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <Link
                href={`/immobilienwissen/${post.slug}`}
                className="group flex flex-col glass-card rounded-[32px] overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="h-44 bg-[#091426]/5 flex items-center justify-center">
                  <span className="text-[#091426]/40 text-xs font-semibold uppercase tracking-widest">
                    {post.kategorie}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-[#6B7280]">
                    <span>{formatDatum(post.datum)}</span>
                    <span>·</span>
                    <span>{post.lesezeit} Min.</span>
                  </div>
                  <h3 className="mt-3 font-bold text-[#191c1e] group-hover:text-[#091426] transition-colors leading-snug">
                    {post.titel}
                  </h3>
                  <p className="mt-2 text-sm text-[#6B7280] leading-relaxed line-clamp-3 flex-1">
                    {post.teaser}
                  </p>
                  <span className="mt-5 text-sm text-[#091426] font-semibold group-hover:underline">
                    Lesen →
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Personal intro */}
      <section className="relative py-24 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#e0e3e5] to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="aspect-square max-w-sm glass-card rounded-[48px] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d8e3fb]/30 to-transparent" />
              <svg
                className="w-20 h-20 text-[#091426]/25 relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0.75}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <p className="mt-4 text-sm relative z-10 text-[#091426]/30 font-medium">
                Profilfoto folgt
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#545f73]">
              Über mich
            </span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-bold text-[#191c1e] leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Ich bin auf dem Weg.
              <br />
              Nicht am Ziel.
            </h2>
            <div className="mt-6 space-y-4 text-[#6B7280] leading-relaxed text-lg">
              <p>
                Mein Name ist Calvin Linke. Ich investiere in Immobilien und
                baue Unternehmen auf — in Dresden.
              </p>
              <p>
                Manches davon hat funktioniert. Anderes nicht. Beides steht
                hier. Ich zeige nicht, wie erfolgreich ich bin. Ich zeige, wie
                ich denke und was ich dabei lerne.
              </p>
            </div>
            <div className="mt-8">
              <FlipButton
                href="/meine-reise"
                text="Die ganze Geschichte lesen"
                hoverText="Von Anfang an. Ungeschönt."
                variant="navy"
              />
            </div>
          </AnimatedSection>
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
              Du investierst oder denkst darüber nach?
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

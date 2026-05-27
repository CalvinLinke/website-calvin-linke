import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt — Calvin Linke",
  description:
    "Fragen zu Immobilien, Projekten oder einer Zusammenarbeit? Schreib mir direkt — ich melde mich persönlich.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-5 sm:px-8 bg-[#091426] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-[0.1em] uppercase mb-8">
              Kontakt
            </span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-3xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Schreib mir.
              <br />
              <span className="text-white/60">Ich melde mich persönlich.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl">
              Ob Fragen zu Immobilien, Zusammenarbeit oder einfach ein erster Austausch — ich bin erreichbar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Hauptinhalt */}
      <section className="relative py-24 px-5 sm:px-8">
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#e0e3e5] to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-stretch">

            {/* Linke Spalte: Kontaktinfos + Karte */}
            <AnimatedSection direction="left" className="flex flex-col gap-5">
              <div className="glass-card rounded-[28px] p-6 space-y-5">
                {/* E-Mail */}
                <a
                  href="mailto:info@renditeundrealitaet.de"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#f2f4f6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#091426] transition-colors duration-200">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#091426] group-hover:text-white transition-colors duration-200">
                      <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M1 5.5l7 4.5 7-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#545f73] uppercase tracking-[0.1em] mb-0.5">E-Mail</p>
                    <p className="text-sm font-semibold text-[#091426] group-hover:underline underline-offset-2">
                      info@renditeundrealitaet.de
                    </p>
                  </div>
                </a>

                <div className="h-px bg-[#e0e3e5]" />

                {/* Telefon */}
                <a
                  href="tel:+491621766880"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#f2f4f6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#091426] transition-colors duration-200">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#091426] group-hover:text-white transition-colors duration-200">
                      <path d="M2 3a1 1 0 0 1 1-1h2.5a1 1 0 0 1 .97.757l.5 2a1 1 0 0 1-.44 1.08L5.3 6.6a8.5 8.5 0 0 0 4.1 4.1l.763-1.23a1 1 0 0 1 1.08-.44l2 .5A1 1 0 0 1 14 10.5V13a1 1 0 0 1-1 1C6.373 14 2 9.627 2 4V3z" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#545f73] uppercase tracking-[0.1em] mb-0.5">Telefon</p>
                    <p className="text-sm font-semibold text-[#091426] group-hover:underline underline-offset-2">
                      +49 162 1766880
                    </p>
                  </div>
                </a>

                <div className="h-px bg-[#e0e3e5]" />

                {/* Adresse */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f2f4f6] flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.5A4.5 4.5 0 0 1 12.5 6c0 3-4.5 8.5-4.5 8.5S3.5 9 3.5 6A4.5 4.5 0 0 1 8 1.5z" stroke="#091426" strokeWidth="1.3" />
                      <circle cx="8" cy="6" r="1.5" stroke="#091426" strokeWidth="1.3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#545f73] uppercase tracking-[0.1em] mb-0.5">Adresse</p>
                    <p className="text-sm font-semibold text-[#191c1e]">
                      Königstraße 4<br />01097 Dresden
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-[24px] overflow-hidden flex-1 min-h-[200px]">
                <iframe
                  src="https://maps.google.com/maps?q=K%C3%B6nigstra%C3%9Fe+4%2C+01097+Dresden&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Königstraße 4, 01097 Dresden"
                />
              </div>
            </AnimatedSection>

            {/* Rechte Spalte: Formular */}
            <AnimatedSection direction="right">
              <ContactForm />
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
}

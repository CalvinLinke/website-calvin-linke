"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function fmt(n: number) {
  return n.toLocaleString("de-DE", { maximumFractionDigits: 2 });
}

function fmtPct(n: number) {
  return n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

interface CtaConfig {
  text: string;
  sub: string;
}

function getCta(netto: number): CtaConfig {
  if (netto < 4) {
    return {
      text: "Schön, dass du gerechnet hast — jetzt lass uns reden.",
      sub: "Unter 4 % Netto ist für mich kein Investment, sondern Hoffnung. Ich zeige dir, wo der Hebel liegt — Kaufpreis, Miete oder Kosten.",
    };
  }
  if (netto <= 6) {
    return {
      text: "Solide. Kein Feuerwerk, aber ein guter Start.",
      sub: "Das ist marktüblich und funktioniert — wenn der Rest stimmt. Brauchst du Hilfe bei Finanzierung oder Sanierung, um mehr rauszuholen?",
    };
  }
  return {
    text: "Entweder hast du ein echtes Juwel gefunden — oder eine Falle.",
    sub: "Über 6 % Netto ist selten. Ich will wissen wie du das hinbekommen hast. Ernsthaft. Melde dich.",
  };
}

const definitions = [
  {
    label: "Bruttomietrendite",
    desc: "Jahresmiete ÷ Kaufpreis — ohne Kosten, ohne Steuern. Ein erster Orientierungswert.",
  },
  {
    label: "Nettomietrendite",
    desc: "Was nach Bewirtschaftungskosten und Nebenkosten übrig bleibt. Die Zahl, die zählt.",
  },
  {
    label: "Kaufpreisfaktor",
    desc: "In wie vielen Jahren du den Kaufpreis theoretisch durch Mieteinnahmen zurückerhältst.",
  },
];

export default function RenditeRechner() {
  const [kaufpreis, setKaufpreis] = useState("200000");
  const [kaltmiete, setKaltmiete] = useState("800");
  const [nebenkosten, setNebenkosten] = useState("10");
  const [bewirtschaftung, setBewirtschaftung] = useState("80");
  const [calculated, setCalculated] = useState(false);

  const result = useMemo(() => {
    const kp = parseFloat(kaufpreis.replace(/\./g, "").replace(",", ".")) || 0;
    const km = parseFloat(kaltmiete.replace(/\./g, "").replace(",", ".")) || 0;
    const nk = parseFloat(nebenkosten.replace(",", ".")) || 0;
    const bw = parseFloat(bewirtschaftung.replace(/\./g, "").replace(",", ".")) || 0;

    if (kp <= 0 || km <= 0) return null;

    const jahresmiete = km * 12;
    const gesamtinvestition = kp * (1 + nk / 100);
    const brutto = (jahresmiete / kp) * 100;
    const netto = ((jahresmiete - bw * 12) / gesamtinvestition) * 100;
    const faktor = kp / jahresmiete;

    return { brutto, netto, faktor, gesamtinvestition };
  }, [kaufpreis, kaltmiete, nebenkosten, bewirtschaftung]);

  const cta = result ? getCta(result.netto) : null;

  const inputClass =
    "w-full px-4 py-3 rounded-2xl border border-[#e0e3e5] bg-[#f7f9fb] text-[#191c1e] font-semibold text-base focus:outline-none focus:border-[#091426] transition-colors";
  const labelClass = "block text-xs font-semibold tracking-[0.08em] uppercase text-[#545f73] mb-2";

  return (
    <div className="bg-white rounded-[32px] border border-[#e0e3e5] p-8 sm:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div>
          <label className={labelClass}>Kaufpreis (€)</label>
          <input
            type="text"
            inputMode="numeric"
            className={inputClass}
            value={kaufpreis}
            onChange={(e) => setKaufpreis(e.target.value)}
            placeholder="200000"
          />
        </div>
        <div>
          <label className={labelClass}>Monatliche Kaltmiete (€)</label>
          <input
            type="text"
            inputMode="numeric"
            className={inputClass}
            value={kaltmiete}
            onChange={(e) => setKaltmiete(e.target.value)}
            placeholder="800"
          />
        </div>
        <div>
          <label className={labelClass}>Kaufnebenkosten (%)</label>
          <input
            type="text"
            inputMode="decimal"
            className={inputClass}
            value={nebenkosten}
            onChange={(e) => setNebenkosten(e.target.value)}
            placeholder="10"
          />
          <p className="mt-1.5 text-xs text-[#6B7280]">
            Notar, Grunderwerbsteuer, Makler — typisch 9–12 %
          </p>
        </div>
        <div>
          <label className={labelClass}>Monatl. Bewirtschaftungskosten (€)</label>
          <input
            type="text"
            inputMode="numeric"
            className={inputClass}
            value={bewirtschaftung}
            onChange={(e) => setBewirtschaftung(e.target.value)}
            placeholder="80"
          />
          <p className="mt-1.5 text-xs text-[#6B7280]">
            Hausgeld, Verwaltung, Rücklage etc.
          </p>
        </div>
      </div>

      <button
        onClick={() => setCalculated(true)}
        className="w-full py-4 rounded-full bg-[#091426] text-white font-semibold text-sm hover:bg-[#0d1f3a] transition-colors"
      >
        Rendite berechnen
      </button>

      <AnimatePresence>
        {calculated && result && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8"
          >
            {/* Results */}
            <div className="grid grid-cols-3 gap-4 mb-2">
              <div className="rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5] p-5 text-center">
                <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#545f73] mb-2">
                  Bruttomietrendite
                </p>
                <p className="text-3xl font-bold text-[#191c1e]" style={{ letterSpacing: "-0.02em" }}>
                  {fmtPct(result.brutto)} %
                </p>
              </div>
              <div className="rounded-2xl bg-[#091426] p-5 text-center">
                <p className="text-xs font-semibold tracking-[0.08em] uppercase text-white/60 mb-2">
                  Nettomietrendite
                </p>
                <p className="text-3xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
                  {fmtPct(result.netto)} %
                </p>
              </div>
              <div className="rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5] p-5 text-center">
                <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#545f73] mb-2">
                  Kaufpreisfaktor
                </p>
                <p className="text-3xl font-bold text-[#191c1e]" style={{ letterSpacing: "-0.02em" }}>
                  {fmtPct(result.faktor)}x
                </p>
              </div>
            </div>

            {/* Definitions */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {definitions.map((d) => (
                <p key={d.label} className="text-[11px] text-[#6B7280] text-center leading-snug px-1">
                  {d.desc}
                </p>
              ))}
            </div>

            <p className="text-xs text-[#6B7280] text-center mb-8">
              Gesamtinvestition inkl. Nebenkosten: ca. {fmt(Math.round(result.gesamtinvestition))} €
            </p>

            {/* CTA Panel */}
            {cta && (
              <div className="rounded-2xl bg-[#091426] p-6 sm:p-8">
                <p className="text-white font-bold text-lg mb-2">{cta.text}</p>
                <p className="text-white/70 text-sm leading-relaxed mb-5">{cta.sub}</p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#091426] text-sm font-semibold hover:bg-[#f7f9fb] transition-colors"
                >
                  Kontakt aufnehmen
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

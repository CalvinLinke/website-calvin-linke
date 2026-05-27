"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function fmt(n: number) {
  return Math.round(n).toLocaleString("de-DE");
}

function fmtDec(n: number) {
  return n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function parseNum(s: string) {
  return parseFloat(s.replace(/\./g, "").replace(",", ".")) || 0;
}

interface CtaConfig {
  text: string;
  sub: string;
}

function getZinsCta(zins: number): CtaConfig | null {
  if (zins <= 0) return null;
  if (zins <= 3) {
    return {
      text: "Wahnsinn — wie hast du das hinbekommen?",
      sub: "Ist das Objekt so gut bewertet oder deine Bonität? Teile gern deine Erfahrung mit mir.",
    };
  }
  if (zins <= 4.8) {
    return {
      text: "Gar nicht schlecht.",
      sub: "Hast du schon mehrere Angebote verglichen? Melde dich — ich schaue, ob da noch mehr drin ist.",
    };
  }
  return {
    text: "Achtung — das ist zu teuer.",
    sub: "Hier stimmt etwas nicht. Ich finde heraus, wo es hakt — melde dich.",
  };
}

const inputClass =
  "w-full px-4 py-3 rounded-2xl border border-[#e0e3e5] bg-[#f7f9fb] text-[#191c1e] font-semibold text-base focus:outline-none focus:border-[#091426] transition-colors";
const labelClass =
  "block text-xs font-semibold tracking-[0.08em] uppercase text-[#545f73] mb-2";

export default function FinanzierungsRechner() {
  const [kaufpreis, setKaufpreis] = useState("200000");
  const [eigenkapital, setEigenkapital] = useState("50000");
  const [zinssatz, setZinssatz] = useState("3,5");
  const [tilgungssatz, setTilgungssatz] = useState("2,0");
  const [calculated, setCalculated] = useState(false);
  const [zinsCta, setZinsCta] = useState<CtaConfig | null>(null);

  const result = useMemo(() => {
    const kp = parseNum(kaufpreis);
    const ek = parseNum(eigenkapital);
    const zins = parseFloat(zinssatz.replace(",", ".")) || 0;
    const tilgung = parseFloat(tilgungssatz.replace(",", ".")) || 0;

    if (kp <= 0 || ek >= kp || zins <= 0 || tilgung <= 0) return null;

    const darlehen = kp - ek;
    const monatsrate = (darlehen * (zins + tilgung)) / 100 / 12;
    const jahresbelastung = monatsrate * 12;

    // Echte Annuitäten-Laufzeit: n = -log(1 - D*r/M) / log(1+r)
    const r = zins / 100 / 12;
    const ratio = (darlehen * r) / monatsrate;
    let laufzeitLabel = "—";
    let gesamtZinsen = 0;
    if (ratio < 1) {
      const n = -Math.log(1 - ratio) / Math.log(1 + r);
      const jahre = Math.floor(n / 12);
      const monate = Math.round(n % 12);
      laufzeitLabel = monate > 0 ? `${jahre} J. ${monate} Mon.` : `${jahre} Jahre`;
      gesamtZinsen = Math.round(monatsrate * n - darlehen);
    } else {
      laufzeitLabel = "nicht tilgbar";
      gesamtZinsen = 0;
    }

    return { darlehen, monatsrate, jahresbelastung, gesamtZinsen, laufzeitLabel };
  }, [kaufpreis, eigenkapital, zinssatz, tilgungssatz]);

  // Live CTA based on interest rate input
  useEffect(() => {
    const zins = parseFloat(zinssatz.replace(",", ".")) || 0;
    const cta = getZinsCta(zins);
    const timeout = setTimeout(() => setZinsCta(cta), 400);
    return () => clearTimeout(timeout);
  }, [zinssatz]);

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
          <label className={labelClass}>Eigenkapital (€)</label>
          <input
            type="text"
            inputMode="numeric"
            className={inputClass}
            value={eigenkapital}
            onChange={(e) => setEigenkapital(e.target.value)}
            placeholder="50000"
          />
        </div>
        <div>
          <label className={labelClass}>Zinssatz (% p.a.)</label>
          <input
            type="text"
            inputMode="decimal"
            className={inputClass}
            value={zinssatz}
            onChange={(e) => setZinssatz(e.target.value)}
            placeholder="3,5"
          />
        </div>
        <div>
          <label className={labelClass}>Tilgungssatz (% p.a.)</label>
          <input
            type="text"
            inputMode="decimal"
            className={inputClass}
            value={tilgungssatz}
            onChange={(e) => setTilgungssatz(e.target.value)}
            placeholder="2,0"
          />
        </div>
      </div>

      {/* Live Zinssatz CTA */}
      <AnimatePresence mode="wait">
        {zinsCta && (
          <motion.div
            key={zinsCta.text}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mb-6 rounded-2xl bg-[#091426] p-5"
          >
            <p className="text-white font-bold text-sm mb-0.5">{zinsCta.text}</p>
            <p className="text-white/70 text-xs leading-relaxed mb-3">{zinsCta.sub}</p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-1.5 text-white/80 text-xs font-semibold hover:text-white transition-colors"
            >
              Jetzt melden
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setCalculated(true)}
        className="w-full py-4 rounded-full bg-[#091426] text-white font-semibold text-sm hover:bg-[#0d1f3a] transition-colors"
      >
        Finanzierung berechnen
      </button>

      <AnimatePresence>
        {calculated && result && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              <div className="rounded-2xl bg-[#091426] p-5">
                <p className="text-xs font-semibold tracking-[0.08em] uppercase text-white/60 mb-2">
                  Monatliche Rate
                </p>
                <p
                  className="text-3xl font-bold text-white"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {fmt(result.monatsrate)} €
                </p>
              </div>
              <div className="rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5] p-5">
                <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#545f73] mb-2">
                  Darlehensbetrag
                </p>
                <p
                  className="text-3xl font-bold text-[#191c1e]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {fmt(result.darlehen)} €
                </p>
              </div>
              <div className="rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5] p-5">
                <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#545f73] mb-2">
                  Jahresbelastung
                </p>
                <p
                  className="text-2xl font-bold text-[#191c1e]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {fmt(result.jahresbelastung)} €
                </p>
              </div>
              <div className="rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5] p-5">
                <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#545f73] mb-2">
                  Laufzeit (Festzins)
                </p>
                <p
                  className="text-2xl font-bold text-[#191c1e]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {result.laufzeitLabel}
                </p>
              </div>
              <div className="rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5] p-5">
                <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#545f73] mb-2">
                  Gesamtzinslast (ca.)
                </p>
                <p
                  className="text-2xl font-bold text-[#191c1e]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {fmt(result.gesamtZinsen)} €
                </p>
              </div>
            </div>

            <p className="text-xs text-[#6B7280] text-center">
              Vereinfachte Berechnung — für exakte Konditionen empfehle ich ein Bankgespräch.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

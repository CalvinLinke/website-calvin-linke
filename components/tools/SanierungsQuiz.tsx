"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type ObjektTyp = "Einfamilienhaus" | "Mehrfamilienhaus" | "Wohnung" | "Gewerbe";
type Zustand = "gepflegt" | "renovierungsbed" | "sanierungsbed" | "abriss";

const GEWERKE = [
  "Dach",
  "Fassade",
  "Heizung",
  "Elektrik",
  "Fenster",
  "Bad / Sanitär",
  "Böden",
  "Innenputz",
];

interface QuizState {
  typ: ObjektTyp | null;
  zustand: Zustand | null;
  gewerke: string[];
  flaeche: string;
}

function getBaseRange(zustand: Zustand): [number, number] {
  switch (zustand) {
    case "gepflegt": return [150, 300];
    case "renovierungsbed": return [400, 650];
    case "sanierungsbed": return [650, 950];
    case "abriss": return [950, 1800];
  }
}

function calcResult(state: QuizState) {
  if (!state.zustand || !state.flaeche) return null;
  const flaeche = parseFloat(state.flaeche.replace(",", "."));
  if (isNaN(flaeche) || flaeche <= 0) return null;

  const [minPsm, maxPsm] = getBaseRange(state.zustand);
  const gewerkExtra = Math.max(0, state.gewerke.length - 3) * 0.05;
  const faktor = 1.0 + gewerkExtra;

  const min = Math.round((minPsm * faktor * flaeche) / 1000) * 1000;
  const max = Math.round((maxPsm * faktor * flaeche) / 1000) * 1000;
  const avg = Math.round(((min + max) / 2) / 1000) * 1000;
  const avgPsm = Math.round(avg / flaeche);

  return { min, max, avg, avgPsm, flaeche };
}

function fmt(n: number) {
  return n.toLocaleString("de-DE");
}

const zustandLabels: Record<Zustand, { label: string; sub: string }> = {
  gepflegt: { label: "Bewohnt & gepflegt", sub: "Kleine Schönheitsreparaturen" },
  renovierungsbed: { label: "Renovierungsbedürftig", sub: "Böden, Wände, Bäder" },
  sanierungsbed: { label: "Sanierungsbedürftig", sub: "Technik, Hülle, Substanz" },
  abriss: { label: "Kernsanierung nötig", sub: "Totalertüchtigung" },
};

interface StepProps {
  title: string;
  sub?: string;
  step: number;
  total: number;
  children: React.ReactNode;
}

function Step({ title, sub, step, total, children }: StepProps) {
  return (
    <motion.div
      key={step}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold tracking-[0.08em] uppercase text-[#545f73]">
            Schritt {step} von {total}
          </span>
          <span className="text-xs text-[#6B7280]">{Math.round((step / total) * 100)} %</span>
        </div>
        <div className="h-1.5 rounded-full bg-[#e0e3e5] overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-[#091426]"
            initial={{ width: `${((step - 1) / total) * 100}%` }}
            animate={{ width: `${(step / total) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>
      <h3 className="text-xl font-bold text-[#191c1e] mb-1" style={{ letterSpacing: "-0.015em" }}>
        {title}
      </h3>
      {sub && <p className="text-sm text-[#6B7280] mb-6">{sub}</p>}
      {!sub && <div className="mb-6" />}
      {children}
    </motion.div>
  );
}

function OptionButton({
  selected,
  onClick,
  children,
  sub,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  sub?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-200 ${
        selected
          ? "border-[#091426] bg-[#091426] text-white"
          : "border-[#e0e3e5] bg-[#f7f9fb] text-[#191c1e] hover:border-[#091426]/30"
      }`}
    >
      <span className="font-semibold text-sm block">{children}</span>
      {sub && (
        <span className={`text-xs mt-0.5 block ${selected ? "text-white/60" : "text-[#6B7280]"}`}>
          {sub}
        </span>
      )}
    </button>
  );
}

export default function SanierungsQuiz() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<QuizState>({
    typ: null,
    zustand: null,
    gewerke: [],
    flaeche: "",
  });

  const TOTAL = 4;
  const result = step > TOTAL ? calcResult(state) : null;

  function next() { setStep((s) => s + 1); }
  function back() { setStep((s) => Math.max(1, s - 1)); }
  function reset() {
    setStep(1);
    setState({ typ: null, zustand: null, gewerke: [], flaeche: "" });
  }

  function toggleGewerk(g: string) {
    setState((s) => ({
      ...s,
      gewerke: s.gewerke.includes(g)
        ? s.gewerke.filter((x) => x !== g)
        : [...s.gewerke, g],
    }));
  }

  const canNext = (s: number) => {
    if (s === 1) return state.typ !== null;
    if (s === 2) return state.zustand !== null;
    if (s === 3) return state.gewerke.length > 0;
    if (s === 4) return state.flaeche !== "" && parseFloat(state.flaeche) > 0;
    return false;
  };

  return (
    <div className="bg-white rounded-[32px] border border-[#e0e3e5] p-8 sm:p-10">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <Step key="step1" title="Um was für eine Immobilie handelt es sich?" step={1} total={TOTAL}>
            <div className="grid grid-cols-2 gap-3">
              {(["Einfamilienhaus", "Mehrfamilienhaus", "Wohnung", "Gewerbe"] as ObjektTyp[]).map((t) => (
                <OptionButton
                  key={t}
                  selected={state.typ === t}
                  onClick={() => setState((s) => ({ ...s, typ: t }))}
                >
                  {t}
                </OptionButton>
              ))}
            </div>
          </Step>
        )}

        {step === 2 && (
          <Step key="step2" title="Wie ist der aktuelle Zustand?" step={2} total={TOTAL}>
            <div className="grid grid-cols-1 gap-3">
              {(Object.entries(zustandLabels) as [Zustand, { label: string; sub: string }][]).map(([key, val]) => (
                <OptionButton
                  key={key}
                  selected={state.zustand === key}
                  onClick={() => setState((s) => ({ ...s, zustand: key }))}
                  sub={val.sub}
                >
                  {val.label}
                </OptionButton>
              ))}
            </div>
          </Step>
        )}

        {step === 3 && (
          <Step key="step3" title="Was muss gemacht werden?" sub="Mehrfachauswahl möglich" step={3} total={TOTAL}>
            <div className="grid grid-cols-2 gap-3">
              {GEWERKE.map((g) => (
                <OptionButton
                  key={g}
                  selected={state.gewerke.includes(g)}
                  onClick={() => toggleGewerk(g)}
                >
                  {g}
                </OptionButton>
              ))}
            </div>
          </Step>
        )}

        {step === 4 && (
          <Step key="step4" title="Wie groß ist die Wohnfläche?" step={4} total={TOTAL}>
            <div className="relative">
              <input
                type="text"
                inputMode="decimal"
                className="w-full px-4 py-3 pr-14 rounded-2xl border border-[#e0e3e5] bg-[#f7f9fb] text-[#191c1e] font-semibold text-lg focus:outline-none focus:border-[#091426] transition-colors"
                value={state.flaeche}
                onChange={(e) => setState((s) => ({ ...s, flaeche: e.target.value }))}
                placeholder="120"
                autoFocus
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] font-semibold text-sm">
                m²
              </span>
            </div>
          </Step>
        )}

        {step > TOTAL && result && (
          <motion.div key="result" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            {/* Result */}
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#545f73] mb-1">
                Geschätzte Sanierungskosten
              </p>
              <p className="text-4xl font-bold text-[#191c1e] mb-1" style={{ letterSpacing: "-0.03em" }}>
                {fmt(result.min)} – {fmt(result.max)} €
              </p>
              <p className="text-[#6B7280] text-sm">
                Mittelwert ca. {fmt(result.avg)} € · Fläche {fmt(result.flaeche)} m²
              </p>
              <p className="text-[#6B7280] text-sm">
                ≈ {fmt(result.avgPsm)} €/m² im Mittel
              </p>
            </div>

            {/* Gewerke summary */}
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#545f73] mb-3">
                Berücksichtigte Gewerke
              </p>
              <div className="flex flex-wrap gap-2">
                {state.gewerke.map((g) => (
                  <span key={g} className="px-3 py-1 rounded-full bg-[#f7f9fb] border border-[#e0e3e5] text-xs font-semibold text-[#191c1e]">
                    {g}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs text-[#6B7280] leading-relaxed mb-8 p-4 rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5]">
              <strong className="text-[#191c1e]">Hinweis:</strong> Grober Orientierungswert auf Basis
              marktüblicher Kostenspannen. Keine Kostengarantie. Für eine belastbare Einschätzung
              braucht es eine Begehung und Fachplanung.
            </p>

            {/* CTA */}
            <div className="rounded-2xl bg-[#091426] p-6 sm:p-8 mb-6">
              <p className="text-white font-bold text-lg mb-2">
                Sanieren ist kein Hexenwerk — aber auch kein Selbstläufer.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Ich kenne das Gefühl, wenn aus &ldquo;100k Renovierung&rdquo; plötzlich 160k werden. Wenn du verlässliche Partner, eine zweite Meinung oder einfach jemanden brauchst, der das schon gemacht hat — melde dich.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#091426] text-sm font-semibold hover:bg-[#f7f9fb] transition-colors"
              >
                Kontakt aufnehmen
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            <button
              onClick={reset}
              className="w-full py-3 rounded-full border border-[#e0e3e5] text-[#6B7280] text-sm font-semibold hover:border-[#091426]/30 hover:text-[#191c1e] transition-colors"
            >
              Neu starten
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      {step <= TOTAL && (
        <div className="flex gap-3 mt-8">
          {step > 1 && (
            <button
              onClick={back}
              className="px-6 py-3 rounded-full border border-[#e0e3e5] text-[#6B7280] text-sm font-semibold hover:border-[#091426]/30 hover:text-[#191c1e] transition-colors"
            >
              Zurück
            </button>
          )}
          <button
            onClick={next}
            disabled={!canNext(step)}
            className="flex-1 py-3 rounded-full bg-[#091426] text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#0d1f3a] transition-colors"
          >
            {step === TOTAL ? "Ergebnis anzeigen" : "Weiter"}
          </button>
        </div>
      )}
    </div>
  );
}

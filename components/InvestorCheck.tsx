"use client";
import { useState } from "react";
import { FlipButton } from "@/components/ui/FlipButton";

const fragen = [
  {
    text: "Was ist dein Ziel?",
    optionen: [
      { label: "Monatlich etwas dazuverdienen", score: 1 },
      { label: "Langfristig Vermögen aufbauen", score: 2 },
      { label: "Ich bin noch unsicher", score: 0 },
    ],
  },
  {
    text: "Wie viel Erfahrung bringst du mit?",
    optionen: [
      { label: "Noch keine Immobilie gekauft", score: 0 },
      { label: "Erste Erfahrungen gesammelt", score: 1 },
      { label: "Ich bin bereits investiert", score: 2 },
    ],
  },
  {
    text: "Wie gehst du mit Unsicherheit um?",
    optionen: [
      { label: "Lieber kalkulierbar und sicher", score: 0 },
      { label: "Ein gewisses Risiko ist ok", score: 1 },
      { label: "Ich sehe Risiko als Chance", score: 2 },
    ],
  },
  {
    text: "Wo stehst du gerade?",
    optionen: [
      { label: "Ich denke erst nach", score: 0 },
      { label: "Ich suche aktiv", score: 1 },
      { label: "Ich habe ein konkretes Objekt im Blick", score: 2 },
    ],
  },
];

const ergebnisse = [
  {
    minScore: 0,
    typ: "Einsteiger",
    headline: "Du stehst am Anfang.",
    subtext:
      "Das ist ein guter Zeitpunkt. Viele unterschätzen, wie viel man in der frühen Phase richtig machen kann — bevor man überhaupt kauft.",
  },
  {
    minScore: 3,
    typ: "Cashflow-Investor",
    headline: "Du denkst pragmatisch.",
    subtext:
      "Cashflow zuerst — das ist ein klarer Ansatz. Die entscheidende Frage ist, ob das Objekt diese Erwartung auch wirklich trägt.",
  },
  {
    minScore: 5,
    typ: "Entwickler-Typ",
    headline: "Du siehst Potenzial, wo andere Probleme sehen.",
    subtext:
      "Das ist eine echte Stärke — wenn sie mit dem richtigen Konzept und einer sauberen Kalkulation kombiniert wird.",
  },
  {
    minScore: 7,
    typ: "Entscheider",
    headline: "Du bist bereit.",
    subtext:
      "Es geht jetzt um die richtigen Details, nicht mehr um grundsätzliche Fragen. Lass uns konkret werden.",
  },
];

function getErgebnis(score: number, forcedEntscheider: boolean) {
  if (forcedEntscheider) return ergebnisse[3];
  return [...ergebnisse].reverse().find((e) => score >= e.minScore) ?? ergebnisse[0];
}

export function InvestorCheck() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const [forcedEntscheider, setForcedEntscheider] = useState(false);

  const isLastStep = step === fragen.length - 1;
  const totalScore = scores.reduce((a, b) => a + b, 0);
  const ergebnis = done ? getErgebnis(totalScore, forcedEntscheider) : null;

  function handleSelect(idx: number, score: number) {
    setSelected(idx);
    const isF4C = step === 3 && idx === 2;

    setTimeout(() => {
      const newScores = [...scores, score];
      setScores(newScores);
      setSelected(null);

      if (isF4C) {
        setForcedEntscheider(true);
        setDone(true);
      } else if (isLastStep) {
        setDone(true);
      } else {
        setStep(step + 1);
      }
    }, 260);
  }

  function reset() {
    setStep(0);
    setScores([]);
    setSelected(null);
    setDone(false);
    setForcedEntscheider(false);
  }

  if (done && ergebnis) {
    return (
      <div className="mt-10 glass-card rounded-[36px] p-10 sm:p-14 text-left">
        <span className="inline-block px-3 py-1 bg-[#091426] text-white text-xs font-semibold rounded-full mb-5">
          {ergebnis.typ}
        </span>
        <h3
          className="text-2xl sm:text-3xl font-bold text-[#191c1e] leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          {ergebnis.headline}
        </h3>
        <p className="mt-4 text-[#6B7280] leading-relaxed">{ergebnis.subtext}</p>
        <div className="mt-8 flex flex-wrap gap-3 items-center">
          <FlipButton
            href="/kontakt"
            text="Lass uns reden"
            hoverText="Direkt schreiben"
            variant="navy"
            size="md"
          />
          <button
            onClick={reset}
            className="text-sm text-[#545f73] hover:text-[#191c1e] transition-colors underline underline-offset-4"
          >
            Nochmal versuchen
          </button>
        </div>
      </div>
    );
  }

  const frage = fragen[step];

  return (
    <div className="mt-10 glass-card rounded-[36px] p-10 sm:p-14 text-left">
      {/* Fortschrittsbalken */}
      <div className="w-full h-1 bg-[#e0e3e5] rounded-full mb-10 overflow-hidden">
        <div
          className="h-full bg-[#091426] rounded-full transition-all duration-500"
          style={{ width: `${(step / fragen.length) * 100}%` }}
        />
      </div>

      <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#545f73] mb-3">
        Frage {step + 1} von {fragen.length}
      </p>
      <h3
        className="text-2xl sm:text-3xl font-bold text-[#191c1e] mb-8"
        style={{ letterSpacing: "-0.02em" }}
      >
        {frage.text}
      </h3>

      <div className="space-y-3">
        {frage.optionen.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx, opt.score)}
            disabled={selected !== null}
            className={`w-full text-left rounded-[18px] px-6 py-5 border transition-all duration-200 font-medium text-base
              ${selected === idx
                ? "border-[#091426] bg-[#091426]/8 text-[#191c1e]"
                : "border-[#e0e3e5] bg-white/60 text-[#6B7280] hover:border-[#091426]/40 hover:text-[#191c1e]"
              }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

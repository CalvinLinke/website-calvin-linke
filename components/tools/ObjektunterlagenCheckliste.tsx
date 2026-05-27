"use client";

import { useState } from "react";
import Link from "next/link";
import { PrintDocument } from "@/components/tools/ChecklistePrint";

type ObjektTyp = "wohnung" | "haus" | "mfh" | "grundstueck";

interface CheckItem {
  id: string;
  label: string;
  hint?: string;
}

const CHECKLISTS: Record<ObjektTyp, { title: string; items: CheckItem[] }> = {
  wohnung: {
    title: "Eigentumswohnung",
    items: [
      {
        id: "w1",
        label: "Aktueller Grundbuchauszug",
        hint: "Nicht älter als 3 Monate — separate Stellplatz-/Garagen-Grundbuchblätter beachten",
      },
      {
        id: "w2",
        label: "Teilungserklärung",
        hint: "Inkl. aller Änderungen und Ergänzungen",
      },
      { id: "w3", label: "Abgeschlossenheitsbescheinigung" },
      { id: "w4", label: "Aufteilungsplan" },
      {
        id: "w5",
        label: "Hausgeldabrechnung",
        hint: "Letzte Abrechnung, optional die letzten drei",
      },
      { id: "w6", label: "Aktueller Wirtschaftsplan" },
      {
        id: "w7",
        label: "Eigentümerversammlungsprotokolle",
        hint: "Die letzten 3 ordentlichen sowie außerordentlichen Protokolle",
      },
      {
        id: "w8",
        label: "Grundriss",
        hint: "Bemaßt inkl. nachträglicher Änderungen",
      },
      {
        id: "w9",
        label: "Wohn- und Nutzflächenberechnung",
        hint: "Durch Architekten gemäß WoFIV + Zertifikat",
      },
      { id: "w10", label: "Energieausweis", hint: "Ausgenommen Denkmalobjekte" },
      { id: "w11", label: "Baubeschreibung oder Sanierungsbeschreibung" },
      {
        id: "w12",
        label: "Gebäudeversicherungsnachweis",
        hint: "Optional Police",
      },
      { id: "w13", label: "Liegenschaftskarte" },
      {
        id: "w14",
        label: "Mietvertrag",
        hint: "Inkl. Nachträge und Kündigungsschreiben",
      },
      { id: "w15", label: "Bilder" },
      { id: "w16", label: "Exposé" },
    ],
  },
  haus: {
    title: "Einfamilienhaus",
    items: [
      {
        id: "h1",
        label: "Aktueller Grundbuchauszug",
        hint: "Nicht älter als 3 Monate — separate Stellplatz-/Garagen-Grundbuchblätter beachten",
      },
      { id: "h2", label: "Baulastenverzeichnis" },
      {
        id: "h3",
        label: "Grundriss",
        hint: "Bemaßt inkl. nachträglicher Änderungen",
      },
      {
        id: "h4",
        label: "Wohn- und Nutzflächenberechnung",
        hint: "Durch Architekten gemäß WoFIV + Zertifikat",
      },
      { id: "h5", label: "Energieausweis", hint: "Ausgenommen Denkmalobjekte" },
      {
        id: "h6",
        label: "Baubeschreibung / Sanierungsbeschreibung / Modernisierungsübersicht",
        hint: "Ausgenommen Denkmalobjekte",
      },
      {
        id: "h7",
        label: "Gebäudeversicherungsnachweis",
        hint: "Optional Police",
      },
      { id: "h8", label: "Liegenschaftskarte" },
      {
        id: "h9",
        label: "Mietvertrag",
        hint: "Inkl. Nachträge und Kündigungsschreiben",
      },
      { id: "h10", label: "Bilder" },
      { id: "h11", label: "Exposé" },
    ],
  },
  mfh: {
    title: "Mehrfamilienhaus / Wohn- und Geschäftshaus",
    items: [
      {
        id: "m1",
        label: "Aktueller Grundbuchauszug",
        hint: "Nicht älter als 3 Monate — separate Stellplatz-/Garagen-Grundbuchblätter beachten",
      },
      {
        id: "m2",
        label: "Grundriss",
        hint: "Bemaßt inkl. nachträglicher Änderungen",
      },
      {
        id: "m3",
        label: "Wohn- und Nutzflächenberechnung",
        hint: "Durch Architekten gemäß WoFIV + Zertifikat",
      },
      { id: "m4", label: "Energieausweis", hint: "Ausgenommen Denkmalobjekte" },
      { id: "m5", label: "Baubeschreibung oder Sanierungsbeschreibung" },
      {
        id: "m6",
        label: "Gebäudeversicherungsnachweis",
        hint: "Optional Police",
      },
      { id: "m7", label: "Liegenschaftskarte" },
      {
        id: "m8",
        label: "Mieterliste sowie Mietverträge",
        hint: "Inkl. Nachträge und Kündigungsschreiben",
      },
      { id: "m9", label: "Bilder" },
      { id: "m10", label: "Exposé" },
    ],
  },
  grundstueck: {
    title: "Grundstück",
    items: [
      {
        id: "g1",
        label: "Aktueller Grundbuchauszug",
        hint: "Nicht älter als 3 Monate — separate Stellplatz-/Garagen-Grundbuchblätter beachten",
      },
      { id: "g2", label: "Altlastenauskunft" },
      { id: "g3", label: "Liegenschaftskarte" },
      {
        id: "g4",
        label: "Miet- oder Pachtvertrag",
        hint: "Inkl. Nachträge und Kündigungsschreiben",
      },
      { id: "g5", label: "Bilder" },
      { id: "g6", label: "Exposé" },
    ],
  },
};

const TABS: { key: ObjektTyp; label: string; icon: string }[] = [
  { key: "wohnung", label: "Eigentumswohnung", icon: "apartment" },
  { key: "haus", label: "Einfamilienhaus", icon: "home" },
  { key: "mfh", label: "Mehrfamilienhaus", icon: "domain" },
  { key: "grundstueck", label: "Grundstück", icon: "landscape" },
];

export default function ObjektunterlagenCheckliste() {
  const [activeTab, setActiveTab] = useState<ObjektTyp>("wohnung");
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [showPrint, setShowPrint] = useState(false);

  const currentList = CHECKLISTS[activeTab];
  const checkedCount = currentList.items.filter((i) => checked[i.id]).length;
  const total = currentList.items.length;
  const progress = total > 0 ? (checkedCount / total) * 100 : 0;

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function switchTab(tab: ObjektTyp) {
    setActiveTab(tab);
    setChecked({});
  }

  const checkedSet = new Set(
    Object.entries(checked).filter(([, v]) => v).map(([k]) => k)
  );

  function handlePrint() {
    setShowPrint(true);
  }

  return (
    <>
    <div className="bg-white rounded-[32px] border border-[#e0e3e5] overflow-hidden">
        {/* Tab Bar */}
        <div className="no-print border-b border-[#e0e3e5] p-2 flex flex-wrap gap-1">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => switchTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-[#091426] text-white"
                  : "text-[#6B7280] hover:text-[#191c1e] hover:bg-[#f7f9fb]"
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-8 sm:p-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3
                className="text-lg font-bold text-[#191c1e]"
                style={{ letterSpacing: "-0.015em" }}
              >
                {currentList.title}
              </h3>
              <p className="text-sm text-[#6B7280] mt-0.5">
                {checkedCount} von {total} erledigt
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#e0e3e5] text-[#191c1e] text-sm font-semibold hover:border-[#091426]/30 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              Als PDF speichern
            </button>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="h-1.5 rounded-full bg-[#e0e3e5] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#091426] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Items */}
          <div className="space-y-3">
            {currentList.items.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 cursor-pointer group"
                onClick={() => toggle(item.id)}
              >
                <div
                  className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-150 ${
                    checked[item.id]
                      ? "border-[#091426] bg-[#091426]"
                      : "border-[#e0e3e5] group-hover:border-[#091426]/40"
                  }`}
                >
                  {checked[item.id] && (
                    <span className="material-symbols-outlined text-white text-[14px]">check</span>
                  )}
                </div>
                <div className="flex-1">
                  <p
                    className={`text-sm font-semibold leading-snug transition-colors ${
                      checked[item.id] ? "text-[#545f73] line-through" : "text-[#191c1e]"
                    }`}
                  >
                    {item.label}
                  </p>
                  {item.hint && (
                    <p className="text-xs text-[#6B7280] mt-0.5 leading-snug">{item.hint}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl bg-[#091426] p-6 sm:p-8">
            <p className="text-white font-bold text-base mb-2">
              Unterlagen sammeln klingt trocken — ist es auch.
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Aber fehlende Dokumente kurz vor Notartermin sind das Teuerste, was dir passieren kann. Ich helfe dir, die Unterlagen vollständig und sauber zusammenzustellen — egal ob du verkaufst, kaufst oder gerade erst anfängst zu sortieren. Einfach melden.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#091426] text-xs font-semibold hover:bg-[#f7f9fb] transition-colors"
            >
              Unterstützung anfragen
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Print Modal */}
      {showPrint && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 9999, overflowY: "auto", padding: "32px 16px" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowPrint(false); }}
        >
          <div style={{ maxWidth: 860, margin: "0 auto", background: "white", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", background: "#f7f9fb", borderBottom: "1px solid #e0e3e5" }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#191c1e" }}>Druckvorschau</span>
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={() => window.print()}
                  style={{ padding: "6px 16px", background: "#091426", color: "white", border: "none", borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: "pointer" }}
                >
                  Als PDF speichern
                </button>
                <button
                  onClick={() => setShowPrint(false)}
                  style={{ padding: "6px 12px", background: "transparent", color: "#6B7280", border: "1px solid #e0e3e5", borderRadius: 999, fontSize: 13, cursor: "pointer" }}
                >
                  ✕
                </button>
              </div>
            </div>
            <PrintDocument typ={activeTab} checkedSet={checkedSet} hideControls={true} />
          </div>
        </div>
      )}
    </>
  );
}

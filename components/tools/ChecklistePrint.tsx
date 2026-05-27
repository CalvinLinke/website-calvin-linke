"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
      { id: "w1", label: "Aktueller Grundbuchauszug", hint: "Nicht älter als 3 Monate — separate Stellplatz-/Garagen-Grundbuchblätter beachten" },
      { id: "w2", label: "Teilungserklärung", hint: "Inkl. aller Änderungen und Ergänzungen" },
      { id: "w3", label: "Abgeschlossenheitsbescheinigung" },
      { id: "w4", label: "Aufteilungsplan" },
      { id: "w5", label: "Hausgeldabrechnung", hint: "Letzte Abrechnung, optional die letzten drei" },
      { id: "w6", label: "Aktueller Wirtschaftsplan" },
      { id: "w7", label: "Eigentümerversammlungsprotokolle", hint: "Die letzten 3 ordentlichen sowie außerordentlichen Protokolle" },
      { id: "w8", label: "Grundriss", hint: "Bemaßt inkl. nachträglicher Änderungen" },
      { id: "w9", label: "Wohn- und Nutzflächenberechnung", hint: "Durch Architekten gemäß WoFIV + Zertifikat" },
      { id: "w10", label: "Energieausweis", hint: "Ausgenommen Denkmalobjekte" },
      { id: "w11", label: "Baubeschreibung oder Sanierungsbeschreibung" },
      { id: "w12", label: "Gebäudeversicherungsnachweis", hint: "Optional Police" },
      { id: "w13", label: "Liegenschaftskarte" },
      { id: "w14", label: "Mietvertrag", hint: "Inkl. Nachträge und Kündigungsschreiben" },
      { id: "w15", label: "Bilder" },
      { id: "w16", label: "Exposé" },
    ],
  },
  haus: {
    title: "Einfamilienhaus",
    items: [
      { id: "h1", label: "Aktueller Grundbuchauszug", hint: "Nicht älter als 3 Monate — separate Stellplatz-/Garagen-Grundbuchblätter beachten" },
      { id: "h2", label: "Baulastenverzeichnis" },
      { id: "h3", label: "Grundriss", hint: "Bemaßt inkl. nachträglicher Änderungen" },
      { id: "h4", label: "Wohn- und Nutzflächenberechnung", hint: "Durch Architekten gemäß WoFIV + Zertifikat" },
      { id: "h5", label: "Energieausweis", hint: "Ausgenommen Denkmalobjekte" },
      { id: "h6", label: "Baubeschreibung / Sanierungsbeschreibung / Modernisierungsübersicht", hint: "Ausgenommen Denkmalobjekte" },
      { id: "h7", label: "Gebäudeversicherungsnachweis", hint: "Optional Police" },
      { id: "h8", label: "Liegenschaftskarte" },
      { id: "h9", label: "Mietvertrag", hint: "Inkl. Nachträge und Kündigungsschreiben" },
      { id: "h10", label: "Bilder" },
      { id: "h11", label: "Exposé" },
    ],
  },
  mfh: {
    title: "Mehrfamilienhaus / Wohn- und Geschäftshaus",
    items: [
      { id: "m1", label: "Aktueller Grundbuchauszug", hint: "Nicht älter als 3 Monate — separate Stellplatz-/Garagen-Grundbuchblätter beachten" },
      { id: "m2", label: "Grundriss", hint: "Bemaßt inkl. nachträglicher Änderungen" },
      { id: "m3", label: "Wohn- und Nutzflächenberechnung", hint: "Durch Architekten gemäß WoFIV + Zertifikat" },
      { id: "m4", label: "Energieausweis", hint: "Ausgenommen Denkmalobjekte" },
      { id: "m5", label: "Baubeschreibung oder Sanierungsbeschreibung" },
      { id: "m6", label: "Gebäudeversicherungsnachweis", hint: "Optional Police" },
      { id: "m7", label: "Liegenschaftskarte" },
      { id: "m8", label: "Mieterliste sowie Mietverträge", hint: "Inkl. Nachträge und Kündigungsschreiben" },
      { id: "m9", label: "Bilder" },
      { id: "m10", label: "Exposé" },
    ],
  },
  grundstueck: {
    title: "Grundstück",
    items: [
      { id: "g1", label: "Aktueller Grundbuchauszug", hint: "Nicht älter als 3 Monate — separate Stellplatz-/Garagen-Grundbuchblätter beachten" },
      { id: "g2", label: "Altlastenauskunft" },
      { id: "g3", label: "Liegenschaftskarte" },
      { id: "g4", label: "Miet- oder Pachtvertrag", hint: "Inkl. Nachträge und Kündigungsschreiben" },
      { id: "g5", label: "Bilder" },
      { id: "g6", label: "Exposé" },
    ],
  },
};

function formatDate() {
  return new Date().toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
}

interface PrintDocumentProps {
  typ: ObjektTyp;
  checkedSet: Set<string>;
  hideControls?: boolean;
}

export function PrintDocument({ typ, checkedSet, hideControls }: PrintDocumentProps) {
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);

  const list = CHECKLISTS[typ];
  const checkedCount = list.items.filter((i) => checkedSet.has(i.id)).length;

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @media screen {
          .print-page {
            max-width: 794px;
            margin: 0 auto;
            background: white;
          }
          .screen-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 24px;
            background: #f7f9fb;
            border-bottom: 1px solid #e0e3e5;
          }
          .screen-controls p {
            font-size: 13px;
            color: #6B7280;
          }
          .print-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 20px;
            background: #091426;
            color: white;
            border: none;
            border-radius: 999px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
          }
        }

        @media print {
          body * { visibility: hidden !important; }
          .print-page, .print-page * { visibility: visible !important; }
          .print-page {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
          @page {
            size: A4;
            margin: 0;
          }
        }

        /* Document */
        .doc-header {
          background: #091426;
          padding: 28px 40px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }
        .doc-logo {
          color: white;
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .doc-logo span {
          color: rgba(255,255,255,0.45);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          display: block;
          margin-top: 5px;
        }
        .doc-header-right {
          text-align: right;
        }
        .doc-header-right p {
          color: rgba(255,255,255,0.5);
          font-size: 11px;
          line-height: 1.6;
        }
        .doc-header-right strong {
          color: rgba(255,255,255,0.85);
          font-weight: 600;
        }

        .doc-body {
          padding: 32px 40px 40px;
        }

        .doc-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e8ebef;
        }
        .doc-typ-chip {
          background: #091426;
          color: white;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 6px;
        }
        .doc-meta-label {
          font-size: 11px;
          color: #9ca3af;
          font-weight: 500;
        }

        .doc-address {
          margin-bottom: 28px;
        }
        .doc-address-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 10px;
        }
        .doc-address-line {
          display: flex;
          align-items: flex-end;
          gap: 16px;
        }
        .doc-address-dotted {
          flex: 1;
          border-bottom: 1.5px dashed #c8d2dc;
          height: 22px;
          max-width: 65%;
        }
        .doc-address-hint {
          font-size: 10px;
          color: #b0bac6;
          font-style: italic;
          white-space: nowrap;
          padding-bottom: 2px;
        }

        .doc-progress-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }
        .doc-progress-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9ca3af;
        }
        .doc-progress-count {
          font-size: 10px;
          color: #6b7280;
          font-weight: 600;
        }
        .doc-progress-bar {
          height: 3px;
          background: #e8ebef;
          border-radius: 99px;
          margin-bottom: 24px;
          overflow: hidden;
        }
        .doc-progress-fill {
          height: 100%;
          background: #091426;
          border-radius: 99px;
        }

        .doc-checklist {
          columns: 2;
          column-gap: 32px;
        }
        .doc-item {
          break-inside: avoid;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 14px;
          padding-bottom: 14px;
          border-bottom: 1px solid #f0f2f4;
        }
        .doc-item:last-child {
          border-bottom: none;
        }
        .doc-checkbox {
          flex-shrink: 0;
          width: 14px;
          height: 14px;
          border: 1.5px solid #b0bac6;
          border-radius: 3px;
          margin-top: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .doc-checkbox.checked {
          background: #091426;
          border-color: #091426;
        }
        .doc-checkmark {
          color: white;
          font-size: 10px;
          font-weight: 700;
          line-height: 1;
        }
        .doc-item-label {
          font-size: 12px;
          font-weight: 600;
          color: #191c1e;
          line-height: 1.4;
        }
        .doc-item-label.checked-label {
          color: #9ca3af;
        }
        .doc-item-hint {
          font-size: 10px;
          color: #9ca3af;
          margin-top: 2px;
          line-height: 1.4;
        }

        .doc-footer {
          margin-top: 32px;
          padding-top: 20px;
          border-top: 1px solid #e8ebef;
          text-align: center;
        }
        .doc-footer p {
          font-size: 10px;
          color: #b0bac6;
          letter-spacing: 0.03em;
        }
      `}</style>

      {!hideControls && (
        <div className="screen-controls">
          <p>Dokument wird vorbereitet&hellip;</p>
          <button className="print-btn" onClick={() => window.print()}>
            Als PDF speichern
          </button>
        </div>
      )}

      <div className="print-page">
        <div className="doc-header">
          <div className="doc-logo">
            Rendite &amp; Realität
            <span>Objektunterlagen-Checkliste</span>
          </div>
          <div className="doc-header-right">
            <p><strong>Datum</strong></p>
            <p>{ready ? formatDate() : ""}</p>
            <p style={{ marginTop: "8px" }}><strong>Typ</strong></p>
            <p>{list.title}</p>
          </div>
        </div>

        <div className="doc-body">
          <div className="doc-meta">
            <span className="doc-typ-chip">{list.title}</span>
            <span className="doc-meta-label">{list.items.length} Unterlagen</span>
          </div>

          <div className="doc-address">
            <div className="doc-address-label">Objekt / Adresse</div>
            <div className="doc-address-line">
              <div className="doc-address-dotted" />
            </div>
          </div>

          <div className="doc-progress-row">
            <span className="doc-progress-label">Fortschritt</span>
            <span className="doc-progress-count">{checkedCount} von {list.items.length} erledigt</span>
          </div>
          <div className="doc-progress-bar">
            <div
              className="doc-progress-fill"
              style={{ width: `${list.items.length > 0 ? (checkedCount / list.items.length) * 100 : 0}%` }}
            />
          </div>

          <div className="doc-checklist">
            {list.items.map((item) => {
              const isChecked = checkedSet.has(item.id);
              return (
                <div key={item.id} className="doc-item">
                  <div className={`doc-checkbox ${isChecked ? "checked" : ""}`}>
                    {isChecked && <span className="doc-checkmark">✓</span>}
                  </div>
                  <div>
                    <div className={`doc-item-label ${isChecked ? "checked-label" : ""}`}>
                      {item.label}
                    </div>
                    {item.hint && (
                      <div className="doc-item-hint">{item.hint}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="doc-footer">
            <p>renditeundrealitaet.de &nbsp;·&nbsp; Calvin Linke &nbsp;·&nbsp; Alle Angaben ohne Gewähr</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ChecklistePrint() {
  const params = useSearchParams();
  const typParam = params.get("typ") as ObjektTyp | null;
  const checkedParam = params.get("checked") || "";

  const typ: ObjektTyp = typParam && CHECKLISTS[typParam] ? typParam : "wohnung";
  const checkedSet = new Set(checkedParam.split(",").filter(Boolean));

  useEffect(() => {
    const t = setTimeout(() => window.print(), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ fontFamily: "'Manrope', -apple-system, sans-serif", background: "#f7f9fb", minHeight: "100vh" }}>
      <PrintDocument typ={typ} checkedSet={checkedSet} hideControls={false} />
    </div>
  );
}

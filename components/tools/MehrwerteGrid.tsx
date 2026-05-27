"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import RenditeRechner from "@/components/tools/RenditeRechner";
import SanierungsQuiz from "@/components/tools/SanierungsQuiz";
import FinanzierungsRechner from "@/components/tools/FinanzierungsRechner";
import ObjektunterlagenCheckliste from "@/components/tools/ObjektunterlagenCheckliste";

type ToolId = "01" | "02" | "03" | "04";

const tools: {
  nr: ToolId;
  icon: string;
  title: string;
  description: string;
  cta: string;
}[] = [
  {
    nr: "01",
    icon: "percent",
    title: "Rendite-Rechner",
    description:
      "Kaufpreis, Miete und Nebenkosten eingeben — sofort Brutto- und Nettomietrendite sowie Kaufpreisfaktor.",
    cta: "Rendite berechnen",
  },
  {
    nr: "02",
    icon: "construction",
    title: "Sanierungskosten-Indikator",
    description:
      "Schritt für Schritt durch dein Objekt — am Ende eine realistische Kostenspanne für die Sanierung.",
    cta: "Kosten einschätzen",
  },
  {
    nr: "03",
    icon: "account_balance",
    title: "Finanzierungsrechner",
    description:
      "Kaufpreis, Eigenkapital und Zinssatz eingeben — monatliche Rate und Gesamtbelastung auf einen Blick.",
    cta: "Finanzierung prüfen",
  },
  {
    nr: "04",
    icon: "checklist",
    title: "Objektunterlagen-Checkliste",
    description:
      "Alle notwendigen Unterlagen für Wohnung, Haus, Mehrfamilienhaus oder Grundstück — interaktiv und druckbar.",
    cta: "Checkliste öffnen",
  },
];

function ActiveTool({ id }: { id: ToolId }) {
  if (id === "01") return <RenditeRechner />;
  if (id === "02") return <SanierungsQuiz />;
  if (id === "03") return <FinanzierungsRechner />;
  return <ObjektunterlagenCheckliste />;
}

export default function MehrwerteGrid() {
  const [activeId, setActiveId] = useState<ToolId | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  function toggle(id: ToolId) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }

  // Scroll to panel when it opens
  useEffect(() => {
    if (activeId && panelRef.current) {
      // Wait for the 450ms open animation to finish before scrolling
      setTimeout(() => {
        const el = panelRef.current;
        if (!el) return;
        if (window.innerWidth < 1024) {
          // Mobile: offset for fixed navbar (64px) + 16px breathing room
          const top = window.scrollY + el.getBoundingClientRect().top - 80;
          window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        } else {
          el.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 460);
    }
  }, [activeId]);

  const activeTool = tools.find((t) => t.nr === activeId);

  return (
    <section className="py-24 px-5 sm:px-8 bg-[#f7f9fb]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-14">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#545f73]">
            Vier Tools
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold text-[#191c1e]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Was dich weiterbringt.
          </h2>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tools.map((tool, i) => {
            const isActive = activeId === tool.nr;
            return (
              <AnimatedSection key={tool.nr} delay={i * 0.07}>
                <button
                  onClick={() => toggle(tool.nr)}
                  className={`group w-full text-left flex flex-col h-full rounded-[32px] border-2 p-8 transition-all duration-300 ${
                    isActive
                      ? "bg-[#091426] border-[#091426] shadow-xl"
                      : "bg-white border-[#e0e3e5] hover:border-[#091426]/20 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span
                      className={`flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 ${
                        isActive ? "bg-white/15" : "bg-[#091426]"
                      }`}
                    >
                      <span
                        className="material-symbols-outlined text-[22px] text-white"
                      >
                        {tool.icon}
                      </span>
                    </span>
                    <span
                      className={`text-xs font-semibold tracking-[0.12em] uppercase mt-1 transition-colors duration-300 ${
                        isActive ? "text-white/40" : "text-[#545f73]"
                      }`}
                    >
                      {tool.nr}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#191c1e]"
                    }`}
                    style={{ letterSpacing: "-0.015em" }}
                  >
                    {tool.title}
                  </h3>
                  <p
                    className={`leading-relaxed text-sm flex-1 transition-colors duration-300 ${
                      isActive ? "text-white/60" : "text-[#6B7280]"
                    }`}
                  >
                    {tool.description}
                  </p>

                  <div
                    className={`mt-6 flex items-center gap-2 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-white/80"
                        : "text-[#091426] group-hover:gap-3"
                    }`}
                  >
                    <span>{isActive ? "Schließen" : tool.cta}</span>
                    <span className="material-symbols-outlined text-[18px]">
                      {isActive ? "expand_less" : "arrow_forward"}
                    </span>
                  </div>
                </button>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Expansion Panel */}
        <AnimatePresence>
          {activeId && activeTool && (
            <motion.div
              key={activeId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
              ref={panelRef}
            >
              <div className="mt-6 relative">
                {/* Decorative glow behind the panel */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#d8e3fb]/40 via-[#f7f9fb]/20 to-transparent rounded-[48px] blur-2xl pointer-events-none" />

                <div
                  className="relative rounded-[32px] overflow-hidden"
                  style={{
                    background: "linear-gradient(160deg, #ffffff 60%, #f0f4fd 100%)",
                    boxShadow:
                      "0 32px 80px rgba(9,20,38,0.10), 0 8px 24px rgba(9,20,38,0.06), inset 0 1px 0 rgba(255,255,255,1)",
                    border: "1px solid rgba(216,227,251,0.7)",
                  }}
                >
                  {/* Decorative corner blob */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#d8e3fb]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#d8e3fb]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

                  <div className="relative p-8 sm:p-10">
                    {/* Panel header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3
                        className="text-lg font-bold text-[#191c1e]"
                        style={{ letterSpacing: "-0.015em" }}
                      >
                        {activeTool.title}
                      </h3>
                      <button
                        onClick={() => setActiveId(null)}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-[#091426]/8 hover:bg-[#091426] hover:text-white text-[#545f73] transition-colors duration-200"
                        aria-label="Schließen"
                      >
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                    </div>

                    {/* Tool content — key forces remount on tool switch */}
                    <motion.div
                      key={`content-${activeId}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25, delay: 0.15 }}
                    >
                      <ActiveTool id={activeId} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

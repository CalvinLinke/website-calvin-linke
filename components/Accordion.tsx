"use client";
import { useState } from "react";

interface AccordionItem {
  nr: string;
  titel: string;
  teaser?: string;
  children: React.ReactNode;
}

export function AccordionItem({ nr, titel, teaser, children }: AccordionItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-card rounded-[28px] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-7 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#091426] text-white text-xs font-semibold flex-shrink-0">
            {nr}
          </span>
          <div>
            <span className="text-lg font-bold text-[#191c1e]" style={{ letterSpacing: "-0.02em" }}>
              {titel}
            </span>
            {teaser && (
              <p className="mt-1 text-sm text-[#6B7280] leading-snug">{teaser}</p>
            )}
          </div>
        </div>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full border border-[#e0e3e5] flex items-center justify-center transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="#191c1e" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: open ? "2000px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="px-7 pb-7 border-t border-[#e0e3e5]/60">
          <div className="pt-6 text-[#6B7280] leading-relaxed space-y-4 text-base">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

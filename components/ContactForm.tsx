"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ANLIEGEN_OPTIONS = [
  "Sanierungsfragen",
  "Partneranfragen",
  "Beratung",
  "Projektbezogener Austausch",
  "Sonstiges",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [anliegen, setAnliegen] = useState("");
  const [anliegenOpen, setAnliegenOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const anliegenLine = anliegen ? `Anliegen: ${anliegen}\n` : "";
    const subject = encodeURIComponent(`Kontaktanfrage von ${name}${anliegen ? ` — ${anliegen}` : ""}`);
    const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n${anliegenLine}\n${message}`);
    window.location.href = `mailto:info@renditeundrealitaet.de?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-4 py-3 rounded-2xl border border-[#e0e3e5] bg-white text-[#191c1e] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#091426] focus:ring-2 focus:ring-[#091426]/10 transition-all duration-200 text-sm";

  if (submitted) {
    return (
      <div className="glass-card rounded-[32px] p-10 flex flex-col items-center justify-center text-center min-h-[320px] space-y-4">
        <div className="w-14 h-14 rounded-full bg-[#091426] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#191c1e]" style={{ letterSpacing: "-0.02em" }}>
          Anfrage geöffnet.
        </h3>
        <p className="text-[#6B7280] leading-relaxed">
          Dein E-Mail-Programm sollte sich geöffnet haben. Ich melde mich bald persönlich bei dir.
        </p>
        <button
          onClick={() => { setSubmitted(false); setName(""); setEmail(""); setAnliegen(""); setMessage(""); }}
          className="mt-2 text-sm text-[#091426] font-semibold underline underline-offset-2"
        >
          Neue Nachricht schreiben
        </button>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-[32px] p-8 sm:p-10">
      <h2 className="text-2xl font-bold text-[#191c1e] mb-6" style={{ letterSpacing: "-0.02em" }}>
        Nachricht schreiben
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#545f73] uppercase tracking-[0.1em] mb-1.5">
            Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Dein Name"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#545f73] uppercase tracking-[0.1em] mb-1.5">
            E-Mail
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="deine@email.de"
            className={inputClass}
          />
        </div>

        {/* Anliegen — aufklappbar */}
        <div>
          <label className="block text-xs font-semibold text-[#545f73] uppercase tracking-[0.1em] mb-1.5">
            Anliegen
          </label>
          <button
            type="button"
            onClick={() => setAnliegenOpen(!anliegenOpen)}
            className={`w-full px-4 py-3 rounded-2xl border text-sm text-left flex items-center justify-between transition-all duration-200 ${
              anliegenOpen
                ? "border-[#091426] ring-2 ring-[#091426]/10 bg-white"
                : "border-[#e0e3e5] bg-white hover:border-[#091426]/30"
            }`}
          >
            <span className={anliegen ? "text-[#191c1e] font-medium" : "text-[#9ca3af]"}>
              {anliegen || "Was ist der Anlass?"}
            </span>
            <motion.span
              animate={{ rotate: anliegenOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex-shrink-0 ml-2"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 5l4.5 4 4.5-4" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {anliegenOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-1.5 rounded-2xl border border-[#e0e3e5] overflow-hidden">
                  {ANLIEGEN_OPTIONS.map((option, i) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => { setAnliegen(option); setAnliegenOpen(false); }}
                      className={`w-full px-4 py-3 text-sm text-left flex items-center gap-3 transition-colors duration-150 ${
                        i > 0 ? "border-t border-[#e0e3e5]" : ""
                      } ${
                        anliegen === option
                          ? "bg-[#091426] text-white"
                          : "bg-white text-[#545f73] hover:bg-[#f2f4f6] hover:text-[#191c1e]"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${anliegen === option ? "bg-white" : "bg-[#d1d5db]"}`} />
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#545f73] uppercase tracking-[0.1em] mb-1.5">
            Nachricht
          </label>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Worum geht es? Je konkreter, desto besser."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="w-full mt-2 rounded-full overflow-hidden"
          style={{ perspective: "800px" }}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
        >
          <motion.div
            style={{ transformStyle: "preserve-3d", borderRadius: "9999px", position: "relative" }}
            animate={{ rotateX: btnHovered ? 180 : 0 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Spacer */}
            <div className="py-3.5 px-8 font-semibold text-sm invisible select-none pointer-events-none whitespace-nowrap">
              ich melde mich persönlich
            </div>
            {/* Front */}
            <div
              style={{ backfaceVisibility: "hidden", borderRadius: "9999px", position: "absolute", inset: 0, backgroundColor: "#091426", color: "#ffffff" }}
              className="py-3.5 px-8 font-semibold text-sm flex items-center justify-center whitespace-nowrap"
            >
              Nachricht senden
            </div>
            {/* Back */}
            <div
              style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)", borderRadius: "9999px", position: "absolute", inset: 0, backgroundColor: "#f7f9fb", color: "#091426" }}
              className="py-3.5 px-8 font-semibold text-sm flex items-center justify-center whitespace-nowrap"
            >
              ich melde mich persönlich
            </div>
          </motion.div>
        </button>
      </form>
    </div>
  );
}

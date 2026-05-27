import Link from "next/link";

const navLinks = [
  { href: "/meine-reise", label: "Meine Reise" },
  { href: "/immobilienwissen", label: "Immobilienwissen" },
  { href: "/erfahrungen", label: "Erfahrungen" },
  { href: "/mehrwerte", label: "Mehrwerte" },
  { href: "/unternehmensgruppe", label: "Unternehmensgruppe" },
  { href: "/kontakt", label: "Kontakt" },
];

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

// Links werden ergänzt sobald vorhanden
const socialLinks = [
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 10v7M7 7.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M11 17v-3.5a2.5 2.5 0 0 1 5 0V17M11 10v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const half = Math.ceil(navLinks.length / 2);

  return (
    <footer className="bg-[#f2f4f6] border-t border-[#e0e3e5] mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2fr] gap-10 md:gap-8">

          {/* Logo + Beschreibung */}
          <div>
            <Link href="/" className="text-[#091426] font-bold text-lg tracking-tight">
              Rendite &amp; Realität
            </Link>
            <p className="mt-3 text-sm text-[#6B7280] leading-relaxed max-w-xs">
              Ein ehrliches Journal über Immobilien, Unternehmen und echte
              Entscheidungen. Aus Dresden. Ohne Hochglanz.
            </p>
          </div>

          {/* Navigation — erste Hälfte */}
          <div>
            <ul className="flex flex-col gap-3">
              {navLinks.slice(0, half).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B7280] hover:text-[#191c1e] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation — zweite Hälfte */}
          <div>
            <ul className="flex flex-col gap-3">
              {navLinks.slice(half).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B7280] hover:text-[#191c1e] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt + Social */}
          <div className="flex flex-col gap-3">
            <a href="mailto:info@renditeundrealitaet.de" className="group flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#e8eaed] flex items-center justify-center flex-shrink-0 group-hover:bg-[#d1d5db] transition-colors duration-200">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="2.5" width="12" height="9" rx="1.5" stroke="#545f73" strokeWidth="1.2" />
                  <path d="M1 5l6 4 6-4" stroke="#545f73" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-sm text-[#6B7280] group-hover:text-[#191c1e] transition-colors duration-200 break-all">
                info@renditeundrealitaet.de
              </span>
            </a>

            <a href="tel:+491621766880" className="group flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#e8eaed] flex items-center justify-center flex-shrink-0 group-hover:bg-[#d1d5db] transition-colors duration-200">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1.75 2.625A.875.875 0 0 1 2.625 1.75H4.81a.875.875 0 0 1 .849.661l.437 1.75a.875.875 0 0 1-.385.944L4.64 5.775a7.438 7.438 0 0 0 3.588 3.588l.67-1.071a.875.875 0 0 1 .944-.385l1.75.437a.875.875 0 0 1 .661.849v2.182a.875.875 0 0 1-.875.875C5.076 12.25 1.75 8.924 1.75 4.813V2.625z" stroke="#545f73" strokeWidth="1.1" />
                </svg>
              </div>
              <span className="text-sm text-[#6B7280] group-hover:text-[#191c1e] transition-colors duration-200">
                +49 162 1766880
              </span>
            </a>

            <Link
              href="/kontakt"
              className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[#9ca3af] hover:text-[#545f73] transition-colors duration-200"
            >
              Nachricht schreiben
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Social Media */}
            <div className="flex gap-2 mt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#e8eaed] flex items-center justify-center text-[#545f73] hover:bg-[#091426] hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#e0e3e5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#9ca3af]">
            © {currentYear} Calvin Linke · Rendite &amp; Realität
          </p>
          <ul className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-[#9ca3af] hover:text-[#545f73] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f7f9fb] border-t border-[#e0e3e5] mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="text-[#091426] font-bold text-lg tracking-tight">
              Rendite &amp; Realität
            </Link>
            <p className="mt-3 text-sm text-[#6B7280] leading-relaxed max-w-xs">
              Ein ehrliches Journal über Immobilien, Unternehmen und echte
              Entscheidungen. Aus Dresden. Ohne Hochglanz.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-4">
              Seiten
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B7280] hover:text-[#091426] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-4">
              Kontakt
            </p>
            <p className="text-sm text-[#6B7280]">
              Calvin Linke
              <br />
              Dresden, Sachsen
            </p>
            <Link
              href="/kontakt"
              className="mt-4 inline-flex items-center text-sm text-[#091426] font-semibold hover:underline"
            >
              Nachricht schreiben →
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#e0e3e5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#6B7280]">
            © {currentYear} Calvin Linke · Rendite &amp; Realität
          </p>
          <ul className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-[#6B7280] hover:text-[#191c1e] transition-colors"
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

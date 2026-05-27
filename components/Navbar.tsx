"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FlipButton } from "@/components/ui/FlipButton";

const links = [
  { href: "/", label: "Start" },
  { href: "/meine-reise", label: "Meine Reise" },
  { href: "/immobilienwissen", label: "Immobilienwissen" },
  { href: "/erfahrungen", label: "Erfahrungen" },
  { href: "/mehrwerte", label: "Mehrwerte" },
  { href: "/unternehmensgruppe", label: "Unternehmensgruppe" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isHome = pathname === "/";
  const transparent = !scrolled && !menuOpen && isHome;
  const navBg = transparent
    ? "bg-transparent"
    : isHome
    ? "bg-white/95 backdrop-blur-md border-b border-[#e0e3e5] shadow-sm"
    : "bg-[#f7f9fb] border-b border-[#e0e3e5]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${navBg}`}
      >
        <nav className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
          <Link
            href="/"
            className={`font-bold text-lg tracking-tight transition-colors duration-700 ${
              transparent ? "text-white" : "text-[#091426]"
            }`}
          >
            Rendite &amp; Realität
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                      active
                        ? transparent
                          ? "text-white font-semibold"
                          : "text-[#091426] font-semibold"
                        : transparent
                        ? "text-white/70 hover:text-white"
                        : "text-[#6B7280] hover:text-[#191c1e]"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className={`absolute inset-0 rounded-full ${
                          transparent ? "bg-white/20" : "bg-[#d8e3fb]"
                        }`}
                        transition={{ type: "spring", duration: 0.4 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop only */}
          <div className="hidden lg:block">
            <FlipButton
              href="/kontakt"
              variant={transparent ? "white" : "navy"}
              size="sm"
            />
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-colors ${
              transparent ? "hover:bg-white/15" : "hover:bg-[#d8e3fb]"
            }`}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={`block w-5 h-0.5 origin-center transition-colors ${
                transparent ? "bg-white" : "bg-[#191c1e]"
              }`}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`block w-5 h-0.5 transition-colors ${
                transparent ? "bg-white" : "bg-[#191c1e]"
              }`}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className={`block w-5 h-0.5 origin-center transition-colors ${
                transparent ? "bg-white" : "bg-[#191c1e]"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-16 z-40 bg-white/98 backdrop-blur-md flex flex-col px-5 pt-6 pb-10 overflow-y-auto"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-3.5 text-base rounded-lg transition-colors ${
                        active
                          ? "bg-[#d8e3fb] text-[#091426] font-semibold"
                          : "text-[#191c1e] hover:bg-[#f2f4f6]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 pt-6 border-t border-[#e0e3e5]">
              <Link
                href="/kontakt"
                className="block w-full text-center px-4 py-3 text-sm font-semibold bg-[#091426] text-white rounded-full hover:bg-[#0f1f3d] transition-all"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

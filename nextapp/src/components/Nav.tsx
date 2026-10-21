"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#about", label: "About" },
  { href: "#favorites", label: "Favorites" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("andre-theme");
      setDark(saved === "dark");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    try { localStorage.setItem("andre-theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "color-mix(in srgb, var(--bg) 85%, transparent)" : "var(--bg)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <nav className="flex items-center justify-between mx-auto px-6 h-16" style={{ maxWidth: 1020 }}>
        <a href="#home" className="text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
          a.
        </a>

        <div className="hidden sm:flex items-center gap-8 text-[13px]" style={{ color: "var(--muted)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--ink)] transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setDark((p) => !p)}
            aria-label="Toggle theme"
            className="w-7 h-7 rounded-full border flex items-center justify-center text-sm transition-colors duration-200 hover:bg-[var(--soft)] cursor-pointer"
            style={{ borderColor: "var(--line)", background: "transparent", color: "var(--ink)" }}
          >
            {dark ? "☀" : "●"}
          </button>
        </div>

        <button
          className="sm:hidden text-[13px] cursor-pointer"
          style={{ color: "var(--muted)", background: "none", border: "none" }}
          onClick={() => setMenuOpen((p) => !p)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden sm:hidden"
          >
            <div className="flex flex-col gap-5 px-6 pb-6 text-[13px]" style={{ color: "var(--muted)" }}>
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="hover:text-[var(--ink)]">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

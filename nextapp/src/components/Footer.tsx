"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="flex justify-between items-center py-8 text-[12px]" style={{ color: "var(--muted)" }}>
      <span>© {year ?? "2026"} Andre Tsoi</span>
      <a href="#home" className="hover:text-[var(--ink)] transition-colors">Top ↑</a>
    </footer>
  );
}

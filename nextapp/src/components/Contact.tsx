"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay }}>
      {children}
    </motion.div>
  );
}

const links = [
  { label: "Email", value: "andre.tsoi123@gmail.com", href: "mailto:andre.tsoi123@gmail.com" },
  { label: "LinkedIn", value: "Andre Tsoi", href: "https://linkedin.com/in/andre-tsoi" },
  { label: "GitHub", value: "AndreTsoi", href: "https://github.com/AndreTsoi" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t" style={{ borderColor: "var(--line)" }}>
      <Reveal>
        <p className="text-[13px] uppercase tracking-[0.2em] mb-3" style={{ color: "var(--muted)" }}>Contact</p>
        <h2
          className="font-normal tracking-tight"
          style={{ fontFamily: "var(--font-space)", fontSize: "clamp(36px, 5vw, 52px)", letterSpacing: "-0.04em" }}
        >
          Let's connect
        </h2>
        <p className="text-[15px] mt-4" style={{ color: "var(--muted)" }}>
          For opportunities, projects, or a conversation.
        </p>
      </Reveal>

      <div className="mt-10">
        {links.map((l, i) => (
          <Reveal key={l.label} delay={0.04 + i * 0.05}>
            <a
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center justify-between py-5 border-t group transition-colors duration-200"
              style={{ borderColor: "var(--line)" }}
            >
              <div className="flex items-center gap-8">
                <span className="text-[13px] w-20" style={{ color: "var(--muted)" }}>{l.label}</span>
                <span className="text-base group-hover:translate-x-1 transition-transform duration-200">{l.value}</span>
              </div>
              <span className="text-[13px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--muted)" }}>↗</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

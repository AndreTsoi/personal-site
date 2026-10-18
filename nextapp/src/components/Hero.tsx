"use client";

import { motion } from "framer-motion";

const slide = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
});

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-20">
      <motion.p
        {...slide(0)}
        className="text-[13px] uppercase tracking-[0.2em] mb-6"
        style={{ color: "var(--muted)" }}
      >
        Software Engineer & ML Researcher
      </motion.p>

      <motion.h1
        {...slide(0.1)}
        className="font-medium leading-[0.95] tracking-tight"
        style={{
          fontFamily: "var(--font-space)",
          fontSize: "clamp(72px, 12vw, 140px)",
          letterSpacing: "-0.06em",
        }}
      >
        Andre
        <br />
        Tsoi<span style={{ color: "var(--muted)" }}>.</span>
      </motion.h1>

      <motion.div
        {...slide(0.25)}
        className="mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-8"
      >
        <div style={{ color: "var(--muted)" }}>
          <p className="text-base leading-relaxed" style={{ margin: 0 }}>Computer Science @ Purdue</p>
          <p className="text-base leading-relaxed" style={{ margin: 0 }}>Software Engineering + Machine Learning</p>
        </div>

        <div className="flex gap-3">
          <a
            href="#projects"
            className="px-5 py-2.5 text-[13px] font-medium rounded-md transition-all duration-200 hover:opacity-80"
            style={{ background: "var(--ink)", color: "var(--bg)" }}
          >
            View projects
          </a>
          <a
            href="Andre_Tsoi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-[13px] font-medium rounded-md border transition-all duration-200 hover:bg-[var(--soft)]"
            style={{ borderColor: "var(--line)" }}
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

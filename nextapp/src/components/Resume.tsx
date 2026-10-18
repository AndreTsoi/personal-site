"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

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

const jobs = [
  {
    date: "Aug 2026 — Present",
    title: "Software Engineering Researcher",
    org: "AstraZeneca",
    bullets: [
      "Developed a Next.js, React, and TypeScript interface for a platform integrating parsers and LLM outputs.",
      "Built authentication, responsive components, and workflows for processed research data.",
      "Collaborated with Python and LLM teams to integrate parsing and model outputs.",
    ],
  },
  {
    date: "May 2026 — Aug 2026",
    title: "Software Engineering Intern",
    org: "Genie AI",
    bullets: [
      "Built a full-stack portal, owning frontend architecture and deployment.",
      "Designed a Supabase backend with Postgres, authentication, REST APIs, and real-time progress synchronization.",
      "Developed hierarchical navigation and custom Framer Motion animations.",
    ],
  },
  {
    date: "Jan 2025 — May 2025",
    title: "Data Science Researcher",
    org: "Kautex",
    body: "Engineered ML models predicting Melt Flow Index with 97.9% validation accuracy. Built feature extraction and multivariate time-series pipelines.",
  },
  {
    date: "Aug 2024 — Dec 2025",
    title: "Machine Learning Researcher",
    org: "BASF",
    body: "Developed Temporal Convolutional Networks improving grape yield forecasting accuracy by 18%. Optimized preprocessing and training pipelines.",
  },
];

const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "Java", "C++", "C#", "SQL", "Swift", "Kotlin", "R"],
  Frameworks: ["React", "Next.js", "Node.js", "Flask", "SwiftUI", "TensorFlow", "scikit-learn", "pandas"],
  Data: ["PostgreSQL", "Supabase", "Firebase", "MongoDB"],
};

function Job({ job }: { job: typeof jobs[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5 border-b cursor-pointer" style={{ borderColor: "var(--line)" }} onClick={() => setOpen(!open)}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[13px]" style={{ color: "var(--muted)", margin: 0 }}>{job.date}</p>
          <h3 className="text-base font-medium mt-1" style={{ margin: 0 }}>{job.title}</h3>
          <p className="text-[13px] mt-0.5" style={{ color: "var(--muted)", margin: 0 }}>{job.org}</p>
        </div>
        <span className="text-lg mt-1 select-none" style={{ color: "var(--muted)" }}>
          {open ? "−" : "+"}
        </span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            {job.bullets ? (
              <ul className="mt-3 pl-4 flex flex-col gap-1.5">
                {job.bullets.map((b) => (
                  <li key={b} className="text-[14px] leading-relaxed" style={{ color: "var(--muted)" }}>{b}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "var(--muted)" }}>{job.body}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <Reveal>
        <p className="text-[13px] uppercase tracking-[0.2em] mb-3" style={{ color: "var(--muted)" }}>Experience</p>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-normal tracking-tight" style={{ fontFamily: "var(--font-space)", fontSize: "clamp(36px,5vw,52px)", letterSpacing: "-0.04em" }}>
            Resume
          </h2>
          <a href="Andre_Tsoi_Resume.pdf" target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-block text-[13px] pb-1 border-b transition-colors hover:text-[var(--ink)]"
            style={{ borderColor: "var(--line)", color: "var(--muted)" }}>
            Download PDF ↗
          </a>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-12" style={{ gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1fr)" }}>
        <div>
          {jobs.map((job, i) => (
            <Reveal key={job.title} delay={i * 0.05}>
              <Job job={job} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="sm:pl-8 sm:border-l" style={{ borderColor: "var(--line)" }}>
            <div className="mb-8">
              <p className="text-[13px] uppercase tracking-[0.15em] mb-2" style={{ color: "var(--muted)" }}>Education</p>
              <h3 className="font-medium text-base" style={{ margin: 0 }}>Purdue University</h3>
              <p className="text-[14px] mt-1" style={{ color: "var(--muted)", margin: 0 }}>B.S. Computer Science · May 2028</p>
            </div>

            <div className="mb-8">
              <p className="text-[13px] uppercase tracking-[0.15em] mb-2" style={{ color: "var(--muted)" }}>Research</p>
              <h3 className="font-medium text-base" style={{ margin: 0 }}>Software Verification</h3>
              <p className="text-[14px] mt-1" style={{ color: "var(--muted)", margin: 0 }}>
                LLM-based proof generation in Verilog under Prof. DiVincenzo
              </p>
            </div>

            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="mb-6">
                <p className="text-[13px] uppercase tracking-[0.15em] mb-2.5" style={{ color: "var(--muted)" }}>{group}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <span key={s} className="text-[12px] rounded-full px-2.5 py-0.5 border" style={{ borderColor: "var(--line)", color: "var(--muted)" }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`@media (max-width: 700px) { #resume .grid { grid-template-columns: 1fr !important; } #resume .sm\\:pl-8 { padding-left: 0 !important; border-left: 0 !important; border-top: 1px solid var(--line); padding-top: 24px; margin-top: 8px; } }`}</style>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden h-full flex flex-col" style={{ background: "#1a1a1a" }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
        <div className="ml-2 flex-1 h-5 rounded" style={{ background: "rgba(255,255,255,0.06)", maxWidth: 200 }} />
      </div>
      {/* Content */}
      <div className="relative flex-1 min-h-0">
        {children}
      </div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto" style={{ width: 160 }}>
      <div className="rounded-[20px] overflow-hidden border p-1.5" style={{ borderColor: "rgba(255,255,255,0.15)", background: "#1a1a1a" }}>
        {/* Notch */}
        <div className="mx-auto mb-1 rounded-full" style={{ width: 48, height: 4, background: "rgba(255,255,255,0.1)" }} />
        {/* Screen */}
        <div className="rounded-[14px] overflow-hidden relative" style={{ aspectRatio: "9/19.5" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "studify",
    description: "Study analytics connecting habits with performance for personalized AI recommendations.",
    tags: ["next.js", "react", "typescript", "openai"],
    result: "Personalized study feedback powered by AI",
    mockup: "browser" as const,
    image: "/studify.png",
    bg: "#0f0f0f",
    links: [
      { label: "Live", href: "https://studifyv2.vercel.app/" },
      { label: "GitHub", href: "https://github.com/AndreTsoi/study-analyzer" },
    ],
  },
  {
    title: "momentum",
    description: "Social habit-tracking iOS app using rewards, streaks, and feedback loops.",
    tags: ["swift", "firebase", "nosql", "ui design"],
    result: "100+ beta users · ~40% higher task completion",
    mockup: "phone" as const,
    image: "/covers/momentum4.png",
    bg: "#0a1510",
    links: [
      { label: "GitHub", href: "https://github.com/singhyaduvir/HabitRepo" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t" style={{ borderColor: "var(--line)" }}>
      <Reveal>
        <p className="text-[13px] uppercase tracking-[0.2em] mb-3" style={{ color: "var(--muted)" }}>
          Selected work
        </p>
        <h2
          className="font-normal tracking-tight"
          style={{ fontFamily: "var(--font-space)", fontSize: "clamp(36px, 5vw, 52px)", letterSpacing: "-0.04em" }}
        >
          Projects
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="group">
              {/* Mockup card */}
              <a
                href={p.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                style={{
                  background: p.bg,
                  height: 340,
                  ...(p.mockup === "phone" ? { display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 32px" } : {}),
                }}
              >
                {p.mockup === "browser" ? (
                  <BrowserFrame>
                    <Image src={p.image} alt={p.title} fill className="object-cover object-top" />
                  </BrowserFrame>
                ) : (
                  <PhoneFrame>
                    <Image src={p.image} alt={p.title} fill className="object-cover object-top" />
                  </PhoneFrame>
                )}
              </a>

              {/* Info below */}
              <div className="mt-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-base font-medium" style={{ margin: 0 }}>{p.title}</h3>
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] transition-colors hover:text-[var(--ink)]"
                      style={{ color: "var(--muted)" }}
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
                <p className="text-[14px] mt-2 leading-relaxed" style={{ color: "var(--muted)" }}>
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] rounded-full px-2.5 py-0.5 border" style={{ borderColor: "var(--line)", color: "var(--muted)" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-[13px] mt-3 pt-3 border-t" style={{ borderColor: "var(--line)" }}>
                  <span style={{ color: "var(--ink)", fontWeight: 500 }}>{p.result}</span>
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

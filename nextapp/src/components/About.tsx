"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}>
      {children}
    </motion.div>
  );
}

const interests = [
  {
    title: "Volleyball",
    detail: "U18 provincial silver medalist",
    video: "/volleyball.mp4",
  },
  {
    title: "Cinematography",
    detail: "Short films & visual storytelling",
    link: "#film",
    thumbnail: "https://img.youtube.com/vi/Qm75bFRk7uA/maxresdefault.jpg",
  },
  {
    title: "Perfect pitch",
    detail: "I can identify musical notes by ear",
    thumbnail: "/piano.png",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 border-t" style={{ borderColor: "var(--line)" }}>
      <Reveal>
        <p className="text-[13px] uppercase tracking-[0.2em] mb-3" style={{ color: "var(--muted)" }}>Personal</p>
        <h2 className="font-normal tracking-tight" style={{ fontFamily: "var(--font-space)", fontSize: "clamp(36px,5vw,52px)", letterSpacing: "-0.04em" }}>About</h2>
      </Reveal>

      <Reveal delay={0.06}>
        <p className="text-lg leading-relaxed mt-10 max-w-2xl" style={{ color: "var(--muted)" }}>
          I'm studying Computer Science at Purdue, graduating May 2028.
          I've worked on web applications, forecasting models, and LLM-based software verification.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
        {interests.map((item, i) => (
          <Reveal key={item.title} delay={0.08 + i * 0.06}>
            <div
              className="rounded-lg overflow-hidden group"
              style={{ background: "var(--soft)", border: "1px solid var(--line)" }}
            >
              {/* Visual area */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", background: item.video ? "transparent" : (item.thumbnail ? "var(--soft)" : "#0a0a0a") }}>
                {item.video ? (
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : item.thumbnail ? (
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" style={{ transform: "scale(1.05)" }} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl opacity-30">♫</span>
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="p-4">
                <h3 className="text-sm font-medium" style={{ margin: 0 }}>{item.title}</h3>
                <p className="text-[13px] mt-1" style={{ color: "var(--muted)", margin: 0 }}>{item.detail}</p>
                {item.link && (
                  <a href={item.link} className="text-[12px] mt-2 inline-block transition-colors hover:text-[var(--ink)]" style={{ color: "var(--muted)" }}>
                    View work ↗
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

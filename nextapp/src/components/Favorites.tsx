"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

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

const books = [
  { src: "/covers/harry-potter.jpg", title: "Harry Potter" },
  { src: "/covers/look-closer.jpg", title: "Look Closer" },
  { src: "/covers/perks.jpg", title: "The Perks of Being a Wallflower" },
  { src: "/covers/slam-dunk.jpg", title: "Slam Dunk" },
];

const films = [
  { src: "/covers/legally-blonde.jpg", title: "Legally Blonde" },
  { src: "/covers/mean-girls.jpg", title: "Mean Girls" },
  { src: "/covers/totoro.jpg", title: "My Neighbor Totoro" },
  { src: "/covers/spider-man.jpg", title: "Spider-Man 2" },
  { src: "/covers/attack-on-titan.jpg", title: "Attack on Titan" },
];

function CoverGrid({ items, cols }: { items: { src: string; title: string }[]; cols: number }) {
  return (
    <div className="grid gap-5" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.04}>
          <div className="group">
            <div
              className="rounded-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
              style={{ aspectRatio: "2/3", background: "var(--soft)" }}
            >
              <Image src={item.src} alt={item.title} width={300} height={450} className="w-full h-full object-contain" loading="lazy" />
            </div>
            <p className="text-[13px] font-medium mt-2.5 leading-snug" style={{ margin: 0 }}>{item.title}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function Favorites() {
  return (
    <section id="favorites" className="py-20 border-t" style={{ borderColor: "var(--line)" }}>
      <Reveal>
        <p className="text-[13px] uppercase tracking-[0.2em] mb-3" style={{ color: "var(--muted)" }}>Favorites</p>
        <h2 className="font-normal tracking-tight" style={{ fontFamily: "var(--font-space)", fontSize: "clamp(36px,5vw,52px)", letterSpacing: "-0.04em" }}>Books, films & more</h2>
      </Reveal>

      <div className="mt-14">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.15em] mb-5" style={{ color: "var(--muted)" }}>Books & manga</p>
        </Reveal>
        <CoverGrid items={books} cols={4} />
      </div>

      <div className="mt-14 pt-10 border-t" style={{ borderColor: "var(--line)" }}>
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.15em] mb-5" style={{ color: "var(--muted)" }}>Films & series</p>
        </Reveal>
        <CoverGrid items={films} cols={5} />
      </div>

      <style>{`@media (max-width: 600px) { #favorites .grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; } }`}</style>
    </section>
  );
}

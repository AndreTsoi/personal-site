"use client";

import { useRef, useState } from "react";
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

function VideoCard({ id }: { id: string }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div className="rounded-lg overflow-hidden relative cursor-pointer group" style={{ aspectRatio: "16/9", background: "#000" }}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="w-full h-full relative block cursor-pointer"
          style={{ background: "none", border: "none", padding: 0 }}
          aria-label="Play video"
        >
          <Image src={thumb} alt="Video thumbnail" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.9)" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <polygon points="4,1 16,9 4,17" fill="#0a0a0a" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

const videos = [
  { id: "Qm75bFRk7uA" },
  { id: "eU87x-yQt3Q" },
];

export default function Film() {
  return (
    <section id="film" className="py-20 border-t" style={{ borderColor: "var(--line)" }}>
      <Reveal>
        <p className="text-[13px] uppercase tracking-[0.2em] mb-3" style={{ color: "var(--muted)" }}>Cinematography</p>
        <h2 className="font-normal tracking-tight" style={{ fontFamily: "var(--font-space)", fontSize: "clamp(36px,5vw,52px)", letterSpacing: "-0.04em" }}>Film</h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {videos.map((v, i) => (
          <Reveal key={v.id} delay={i * 0.06}>
            <VideoCard {...v} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

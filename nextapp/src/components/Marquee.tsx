"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  "React", "Next.js", "TypeScript", "Python", "Swift", "Firebase",
  "TensorFlow", "PostgreSQL", "Node.js", "Tailwind", "Framer Motion", "Supabase",
];

export default function Marquee() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="overflow-hidden py-5 border-y select-none"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-[13px] uppercase tracking-[0.15em] whitespace-nowrap mx-6"
            style={{ color: "var(--muted)" }}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

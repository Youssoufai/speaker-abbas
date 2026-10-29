"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";

export default function AgendaCard({ item }) {
  return (
    <motion.div
      whileHover="hover"
      initial="idle"
      className="group relative flex h-[440px] flex-col justify-end overflow-hidden border border-line-invert bg-ink"
    >
      <motion.div
        variants={{ idle: { scale: 1 }, hover: { scale: 1.08 } }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <PlaceholderMedia
          src={item.image}
          alt={item.title}
          position={item.position}
          className="h-full w-full"
        />
      </motion.div>

      <motion.div
        variants={{ idle: { opacity: 0.55 }, hover: { opacity: 0.75 } }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
      />

      <div className="relative z-10 p-8">
        <span className="font-display text-[13px] text-gold-soft/80">
          {item.index}
        </span>
        <h3 className="mt-4 font-display text-[1.9rem] leading-[1.05] tracking-tight text-paper">
          {item.title}
        </h3>
        <motion.div
          variants={{
            idle: { height: 0, opacity: 0, marginTop: 0 },
            hover: { height: "auto", opacity: 1, marginTop: 16 },
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <p className="max-w-xs text-[14px] leading-relaxed text-paper/70">
            {item.description}
          </p>
        </motion.div>

        <motion.span
          variants={{ idle: { x: 0 }, hover: { x: 6 } }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 text-paper"
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </motion.span>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";

export default function AgendaCard({ item }) {
  return (
    <motion.div
      whileHover="hover"
      initial="idle"
      className="group relative flex h-[480px] flex-col justify-end overflow-hidden bg-ink"
    >
      <motion.div
        variants={{ idle: { scale: 1 }, hover: { scale: 1.1, rotate: 0.6 } }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
        variants={{ idle: { opacity: 0.7 }, hover: { opacity: 0.95 } }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent"
      />
      <motion.span
        aria-hidden="true"
        variants={{ idle: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left bg-gold"
      />
      <span className="absolute right-6 top-5 z-10 font-display text-[5rem] leading-none text-paper/10 transition-colors duration-500 group-hover:text-gold-soft/30">
        {item.index}
      </span>

      <div className="relative z-10 p-8">
        <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold-soft/90">
          Area {item.index}
        </span>
        <h3 className="mt-3 font-display text-[1.9rem] leading-[1.05] tracking-tight text-paper">
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
          variants={{ idle: { x: 0, rotate: 0 }, hover: { x: 6, rotate: 45 } }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 text-paper transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink"
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </motion.span>
      </div>
    </motion.div>
  );
}

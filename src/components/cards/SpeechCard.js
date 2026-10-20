"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/format";

export default function SpeechCard({ speech }) {
  return (
    <motion.div whileHover="hover" initial="idle" className="group relative">
      <Link
        href={`/speeches/${speech.slug}`}
        className="grid items-center gap-4 border-t border-line-invert py-8 transition-colors duration-300 md:grid-cols-[140px_1fr_auto_auto]"
      >
        <p className="text-[12px] uppercase tracking-[0.16em] text-paper/45">
          {formatDate(speech.date)}
        </p>
        <h3 className="font-display text-xl tracking-tight text-paper transition-colors duration-300 group-hover:text-gold-soft md:text-2xl">
          {speech.title}
        </h3>
        <p className="text-[13px] uppercase tracking-[0.1em] text-paper/40">
          {speech.location}
        </p>
        <span className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-gold-soft">
          Read
          <motion.span
            variants={{ idle: { x: 0 }, hover: { x: 5 } }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.span>
        </span>
      </Link>
    </motion.div>
  );
}

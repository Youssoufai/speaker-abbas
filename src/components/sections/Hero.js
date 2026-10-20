"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[720px] w-full items-end overflow-hidden bg-forest-deep text-paper">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <PlaceholderMedia
          tone="forest"
          label="Official Portrait Placeholder — Rt. Hon. Tajudeen Abbas"
          className="h-full w-full"
        />
      </motion.div>

      {/* Cinematic overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      {/* Subtle moving gradient */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-1/3 top-0 h-full w-2/3 bg-[radial-gradient(circle,rgba(182,145,60,0.12),transparent_65%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 md:px-10 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-[13px] font-medium uppercase tracking-[0.28em] text-gold-soft"
        >
          Rt. Hon. Tajudeen Abbas
        </motion.p>

        <AnimatedText
          as="h1"
          text={["Leadership Through", "Legislation."]}
          delay={0.35}
          className="font-display text-[clamp(3.2rem,9vw,9rem)] font-normal leading-[0.98] tracking-tight text-paper"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-8 max-w-xl text-balance text-[17px] leading-relaxed text-paper/75 md:text-[19px]"
        >
          {site.fullTitle}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/leadership" variant="gold">
            Explore His Work
          </Button>
          <Button href="/agenda" variant="outline" className="text-paper border-paper/35">
            The Legislative Agenda
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-14 flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-paper/50"
        >
          <span className="h-px w-10 bg-paper/30" />
          {site.institution}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-2 text-paper/50 md:flex md:right-10"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
        </motion.span>
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
      </motion.div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import AnimatedText from "@/components/ui/AnimatedText";
import Marquee from "@/components/ui/Marquee";
import { webImages } from "@/data/webImages";

const places = ["Anyigba", "Ankpa", "Dekina", "Idah", "Ochadamu", "Ofu", "Olamaboro", "Ibaji", "Bassa", "Omala", "Igalamela-Odolu"];

/**
 * Cinematic full-bleed interlude: the Niger–Benue landscape with a scroll-
 * scrubbed zoom, and a slow ticker of Kogi East communities.
 */
export default function KogiEastBand() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const clip = useTransform(scrollYProgress, [0, 0.35], ["inset(8% 6% 8% 6% round 24px)", "inset(0% 0% 0% 0% round 0px)"]);

  return (
    <section ref={ref} className="relative bg-paper">
      <motion.div
        style={{ clipPath: clip }}
        className="relative flex min-h-[90vh] items-center overflow-hidden bg-forest-deep text-paper"
      >
        <motion.div style={{ scale, y }} className="absolute inset-0">
          <PlaceholderMedia
            src={webImages.mountPatti.src}
            alt={webImages.mountPatti.alt}
            position={webImages.mountPatti.position}
            className="h-full w-full"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/35 to-ink/80" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-28 md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.28em] text-gold-soft"
          >
            <span className="h-px w-10 bg-current" />
            The Confluence State
          </motion.span>
          <AnimatedText
            as="h2"
            inView
            text={["Where the Niger", "meets the Benue."]}
            className="mt-6 max-w-5xl font-display text-[clamp(2.6rem,7.5vw,7rem)] leading-[0.98] tracking-tight"
            lineClassName="[&:last-child]:italic [&:last-child]:text-gold-soft"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 max-w-lg text-[16px] leading-relaxed text-paper/75"
          >
            Farmland, rivers and market towns across nine local government areas — the communities whose roads, hospitals and schools he carries to the Senate.
          </motion.p>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-paper/10 bg-ink/30 py-5 backdrop-blur-md">
          <Marquee
            reverse
            items={places}
            itemClassName="font-display text-[clamp(1.4rem,2.4vw,2rem)] italic text-paper/80"
          />
        </div>
      </motion.div>
    </section>
  );
}

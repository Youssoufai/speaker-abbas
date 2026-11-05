"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import AnimatedText from "@/components/ui/AnimatedText";

/**
 * Full-bleed header for interior pages: slow zoom-in on load, scroll-linked
 * parallax and fade, with a line-by-line title reveal.
 */
export default function PageHero({ eyebrow, title, description, image, height = "h-[68vh] min-h-[460px]" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className={`relative flex ${height} items-end overflow-hidden bg-forest-deep text-paper`}
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.18 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full"
        >
          {image ? (
            <PlaceholderMedia
              src={image.src}
              alt={image.alt}
              position={image.position}
              priority
              className="h-full w-full"
            />
          ) : (
            <PlaceholderMedia tone="charcoal" className="h-full w-full" />
          )}
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/70 via-transparent to-transparent" />

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10 md:pb-20"
      >
        <motion.span
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.28em] text-gold-soft"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-10 origin-left bg-current"
          />
          {eyebrow}
        </motion.span>
        <AnimatedText
          as="h1"
          text={title}
          delay={0.3}
          className="mt-5 max-w-5xl text-balance font-display text-[clamp(2.6rem,7vw,6rem)] leading-[1] tracking-tight"
        />
        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 max-w-xl text-[16px] leading-relaxed text-paper/70"
          >
            {description}
          </motion.p>
        ) : null}
      </motion.div>
    </section>
  );
}

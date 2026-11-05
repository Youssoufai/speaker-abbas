"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { webImages } from "@/data/webImages";

export default function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1.05]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-forest-deep px-6 py-28 text-paper md:px-10"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <PlaceholderMedia
          src={webImages.senate.src}
          alt=""
          position={webImages.senate.position}
          className="h-full w-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/80 via-ink/65 to-forest-deep/90" />
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(182,145,60,0.25),transparent_65%)] blur-2xl"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <AnimatedText
          as="h2"
          inView
          text="A record of the work, kept in one place."
          className="text-balance font-display text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight text-paper"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-8 max-w-md text-[16px] leading-relaxed text-paper/70"
        >
          Bills, motions, committee assignments and photographs, with the source and status each one can support.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex justify-center"
        >
          <Button href="/contact" variant="gold">
            Contact the Office
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

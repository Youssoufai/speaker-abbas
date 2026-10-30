"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { portraits } from "@/data/portraits";

export default function CTASection() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-forest-deep px-6 py-28 text-paper md:px-10">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <PlaceholderMedia
          src={portraits.closeup.src}
          alt=""
          position={portraits.closeup.position}
          className="h-full w-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/60" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <AnimatedText
          as="h2"
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

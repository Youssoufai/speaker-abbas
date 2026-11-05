"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import { portraits } from "@/data/portraits";
import { webImages } from "@/data/webImages";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";

const EASE = [0.16, 1, 0.3, 1];

const ticker = [
  "Kogi East Senatorial District",
  "10th National Assembly",
  "Committee on Customs, Excise & Tariff",
  "National Eye Centre, Ochadamu",
  "Federal University of Education, Ankpa",
  "Anyigba–Dekina–Shintaku Road",
  "Cashew Research Institute, Idah",
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-forest-deep text-paper"
    >
      {/* Backdrop: the National Assembly, slow zoom + parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 3, ease: EASE }}
          className="h-full w-full"
        >
          <PlaceholderMedia
            src={webImages.assemblyGlobe.src}
            alt={webImages.assemblyGlobe.alt}
            position={webImages.assemblyGlobe.position}
            priority
            className="h-full w-full"
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-forest-deep/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />

      {/* Slow drifting gold light */}
      <motion.div
        aria-hidden="true"
        animate={{ x: ["-10%", "15%", "-10%"], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-1/4 top-1/4 h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(circle,rgba(182,145,60,0.22),transparent_60%)] blur-2xl"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] flex-1 items-end gap-12 px-6 pb-14 pt-36 md:px-10 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:pb-20">
        <motion.div style={{ y: textY, opacity: fade }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-paper/15 bg-paper/5 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.24em] text-gold-soft backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            {site.name} · {site.nickname}
          </motion.p>

          <AnimatedText
            as="h1"
            text={["A Record of", "Public Service."]}
            delay={0.35}
            stagger={0.09}
            className="font-display text-[clamp(3.1rem,8.4vw,8.5rem)] font-normal leading-[0.95] tracking-tight text-paper"
            lineClassName="[&:last-child]:italic [&:last-child]:text-gold-soft"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
            className="mt-8 max-w-xl text-balance text-[17px] leading-relaxed text-paper/75 md:text-[19px]"
          >
            {site.fullTitle}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/legislative-work" variant="gold">
              Legislative Record
            </Button>
            <Button href="/leadership" variant="outline" className="border-paper/35 text-paper">
              Biography
            </Button>
          </motion.div>
        </motion.div>

        {/* Framed portrait card */}
        <motion.div style={{ y: portraitY }} className="relative hidden justify-self-end lg:block">
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="relative h-[540px] w-[400px] overflow-hidden shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)] xl:h-[600px] xl:w-[440px]"
          >
            <motion.div
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: EASE }}
              className="h-full w-full"
            >
              <PlaceholderMedia
                src={portraits.official.src}
                alt={portraits.official.alt}
                position={portraits.official.position}
                priority
                className="h-full w-full"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-gold-soft">Senator</p>
              <p className="mt-1 font-display text-2xl">Kogi East</p>
            </div>
          </motion.div>

          {/* Gold frame offset */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: 18, y: 18 }}
            transition={{ duration: 1.2, delay: 1.4, ease: EASE }}
            className="pointer-events-none absolute inset-0 -z-10 border border-gold/60"
          />

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.6, ease: EASE }}
            className="absolute -left-16 top-16"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="border border-paper/15 bg-ink/60 px-5 py-4 backdrop-blur-xl"
            >
              <p className="font-display text-4xl leading-none text-gold-soft">2019</p>
              <p className="mt-2 max-w-[9rem] text-[11px] uppercase leading-snug tracking-[0.16em] text-paper/70">
                First elected · returned 2023
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="relative z-10 border-t border-paper/10 bg-ink/40 py-5 backdrop-blur-md"
      >
        <Marquee
          items={ticker}
          itemClassName="text-[12px] font-medium uppercase tracking-[0.24em] text-paper/60"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-24 right-6 z-10 hidden flex-col items-center gap-3 text-paper/50 md:flex md:right-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">Scroll</span>
        <span className="relative h-14 w-px overflow-hidden bg-paper/20">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gold-soft"
          />
        </span>
        <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}

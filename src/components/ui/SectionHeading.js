"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import AnimatedText from "@/components/ui/AnimatedText";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal variant="fade">
          <span
            className={cn(
              "mb-5 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em]",
              tone === "dark" ? "text-forest" : "text-gold-soft"
            )}
          >
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-8 origin-left bg-current"
            />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <AnimatedText
        as="h2"
        inView
        text={title}
        stagger={0.05}
        className={cn(
          "text-balance font-display text-[clamp(2.1rem,4.6vw,3.8rem)] leading-[1.05] tracking-tight",
          tone === "dark" ? "text-ink" : "text-paper"
        )}
      />
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-6 text-balance text-[15px] leading-relaxed",
              tone === "dark" ? "text-ink-soft/80" : "text-paper/70"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

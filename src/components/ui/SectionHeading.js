"use client";

import Reveal from "@/components/ui/Reveal";
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
            <span className="h-px w-8 bg-current" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-balance font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.08] tracking-tight",
            tone === "dark" ? "text-ink" : "text-paper"
          )}
        >
          {title}
        </h2>
      </Reveal>
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

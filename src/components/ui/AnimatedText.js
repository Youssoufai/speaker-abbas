"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Reveals text word-by-word with a clipped upward slide. Pass a string or an
 * array of strings (one per line). With `inView`, the reveal waits until the
 * text scrolls into the viewport instead of playing on mount.
 */
export default function AnimatedText({
  text,
  as = "h1",
  className,
  lineClassName,
  delay = 0,
  stagger = 0.06,
  inView = false,
}) {
  const Tag = motion[as] ?? motion.h1;
  const lines = Array.isArray(text) ? text : [text];
  let wordIndex = 0;

  const trigger = inView
    ? { whileInView: "visible", viewport: { once: true, amount: 0.5 } }
    : { animate: "visible" };

  return (
    <Tag initial="hidden" {...trigger} className={className} aria-label={lines.join(" ")}>
      {lines.map((line, li) => (
        <span key={li} aria-hidden="true" className={cn("block", lineClassName)}>
          {line.split(" ").map((word, wi) => {
            const i = wordIndex++;
            return (
              <span
                key={wi}
                className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
              >
                <motion.span
                  className="inline-block"
                  variants={{
                    hidden: { y: "110%", rotate: 4 },
                    visible: {
                      y: "0%",
                      rotate: 0,
                      transition: { duration: 1, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  {word}
                  {wi < line.split(" ").length - 1 ? " " : ""}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

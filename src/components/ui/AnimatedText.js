"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Reveals text line-by-line (splitting on the `\n` in the provided string,
 * or treating the whole string as one line) using a clipped upward reveal.
 */
export default function AnimatedText({
  text,
  as = "h1",
  className,
  lineClassName,
  delay = 0,
  stagger = 0.12,
}) {
  const Tag = as;
  const lines = Array.isArray(text) ? text : [text];

  return (
    <Tag className={cn("overflow-hidden", className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={cn("block", lineClassName)}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Wraps a media element with a subtle vertical parallax as it scrolls
 * through the viewport. Keep offsets small to avoid nausea.
 */
export default function ParallaxImage({
  children,
  className,
  strength = 60,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="absolute inset-[-8%]">
        {children}
      </motion.div>
    </div>
  );
}

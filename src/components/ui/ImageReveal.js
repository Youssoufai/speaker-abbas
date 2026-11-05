"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { cn } from "@/lib/utils";

/**
 * An image that wipes into view with a clip-path curtain, then drifts with a
 * gentle parallax while it scrolls through the viewport.
 */
export default function ImageReveal({
  src,
  alt = "",
  position = "center",
  fit,
  className,
  direction = "up",
  delay = 0,
  parallax = 40,
  priority = false,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-parallax, parallax]);

  const hidden = {
    up: "inset(100% 0% 0% 0%)",
    down: "inset(0% 0% 100% 0%)",
    left: "inset(0% 100% 0% 0%)",
    right: "inset(0% 0% 0% 100%)",
  }[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: hidden }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.3, delay, ease: [0.76, 0, 0.24, 1] }}
      className={cn("relative overflow-hidden bg-ink", className)}
    >
      <motion.div
        style={{ y }}
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1.1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <PlaceholderMedia
          src={src}
          alt={alt}
          position={position}
          fit={fit}
          priority={priority}
          className="h-full w-full"
        />
      </motion.div>
    </motion.div>
  );
}

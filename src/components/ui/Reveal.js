"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const variantsMap = {
  up: {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -36 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 36 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
};

/**
 * Generic scroll-reveal wrapper used to bring sections/elements into view.
 */
export default function Reveal({
  children,
  as = "div",
  variant = "up",
  delay = 0,
  duration = 0.8,
  className,
  once = true,
  amount = 0.3,
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={variantsMap[variant]}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const EASE = [0.16, 1, 0.3, 1];

const variantsMap = {
  up: {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -40, filter: "blur(6px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  right: {
    hidden: { opacity: 0, x: 40, filter: "blur(6px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94, filter: "blur(8px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
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
  duration = 0.9,
  className,
  once = true,
  amount = 0.25,
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      variants={variantsMap[variant]}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

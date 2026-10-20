"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-forest text-paper border border-forest hover:bg-forest-deep",
  outline:
    "bg-transparent text-current border border-current/30 hover:border-current/60",
  ghost: "bg-transparent text-current border border-transparent",
  gold: "bg-gold text-ink border border-gold hover:bg-gold-soft",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  icon = true,
  type = "button",
}) {
  const classes = cn(
    "group relative inline-flex items-center gap-2.5 overflow-hidden px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-300",
    variants[variant],
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowUpRight
          className="relative z-10 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
        />
      )}
    </>
  );

  const MotionComp = href ? motion(Link) : motion.button;
  const extraProps = href ? { href } : { onClick, type };

  return (
    <MotionComp
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={classes}
      {...extraProps}
    >
      {content}
    </MotionComp>
  );
}

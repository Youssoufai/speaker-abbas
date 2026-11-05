"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-forest text-paper border border-forest",
  outline: "bg-transparent text-current border border-current/30 hover:border-current/70",
  ghost: "bg-transparent text-current border border-transparent",
  gold: "bg-gold text-ink border border-gold",
};

// The colour that sweeps up from the bottom on hover.
const fills = {
  primary: "bg-forest-deep",
  outline: "bg-current/10",
  ghost: "bg-transparent",
  gold: "bg-gold-soft",
};

const MotionLink = motion.create(Link);

/**
 * Button with a magnetic pull toward the cursor, a sweep-fill on hover and a
 * looping arrow that exits top-right and re-enters bottom-left.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  icon = true,
  type = "button",
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el || variant === "ghost") return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.18);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "group relative inline-flex items-center gap-2.5 overflow-hidden px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-300",
    variants[variant],
    className
  );

  const content = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100",
          fills[variant]
        )}
      />
      <span className="relative z-10">{children}</span>
      {icon && (
        <span className="relative z-10 h-4 w-4 overflow-hidden">
          <ArrowUpRight
            className="absolute inset-0 h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full group-hover:translate-x-full"
            strokeWidth={1.75}
          />
          <ArrowUpRight
            className="absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0"
            strokeWidth={1.75}
          />
        </span>
      )}
    </>
  );

  const Comp = href ? MotionLink : motion.button;
  const extraProps = href ? { href, onClick } : { onClick, type };

  return (
    <Comp
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...extraProps}
    >
      {content}
    </Comp>
  );
}

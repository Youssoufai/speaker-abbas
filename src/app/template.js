"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

// The template remounts on every navigation. On the very first load we skip
// the curtain so server HTML paints immediately; afterwards each route change
// sweeps a forest curtain off the screen.
let firstLoad = true;

export default function Template({ children }) {
  const skip = firstLoad;

  useEffect(() => {
    firstLoad = false;
  }, []);

  return (
    <>
      <motion.div
        aria-hidden="true"
        initial={skip ? false : { scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{ scaleY: 0 }}
        className="pointer-events-none fixed inset-0 z-[1001] origin-top bg-forest-deep"
      />
      {children}
    </>
  );
}

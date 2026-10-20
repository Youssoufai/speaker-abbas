"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks, site } from "@/data/site";
import Button from "@/components/ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function MobileMenu({ onClose }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[998] flex flex-col justify-between bg-forest-deep px-6 pb-10 pt-28 text-paper lg:hidden"
    >
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex flex-1 flex-col justify-center gap-2"
      >
        {navLinks.map((link, i) => (
          <motion.div key={link.href} variants={itemVariants} className="overflow-hidden border-b border-line-invert py-4">
            <Link
              href={link.href}
              onClick={onClose}
              className="font-display text-[9vw] leading-none tracking-tight text-paper/90 transition-colors hover:text-gold-soft"
            >
              <span className="mr-4 align-top text-[13px] text-gold-soft/70">
                0{i + 1}
              </span>
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6 pt-8"
      >
        <Button href="/contact" variant="gold" onClick={onClose}>
          Contact Office
        </Button>
        <p className="text-[12px] uppercase tracking-[0.2em] text-paper/40">
          {site.institution}
        </p>
      </motion.div>
    </motion.div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site, navLinks } from "@/data/site";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || menuOpen;

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-[999] transition-colors duration-500",
          solid
            ? "bg-paper/90 backdrop-blur-md border-b border-line"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/"
            className={cn(
              "font-display text-[15px] font-medium tracking-[0.14em] transition-colors duration-500",
              solid ? "text-ink" : "text-paper"
            )}
          >
            {site.wordmark}
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                link={link}
                active={pathname === link.href}
                solid={solid}
              />
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              href="/contact"
              variant={solid ? "primary" : "outline"}
              className={cn(!solid && "text-paper border-paper/40")}
            >
              Contact Office
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              "relative z-[1001] flex h-10 w-10 items-center justify-center lg:hidden transition-colors duration-500",
              solid ? "text-ink" : "text-paper"
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <X className="h-6 w-6" strokeWidth={1.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Menu className="h-6 w-6" strokeWidth={1.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function NavLink({ link, active, solid }) {
  return (
    <Link
      href={link.href}
      className={cn(
        "group relative text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-500",
        solid ? "text-ink-soft hover:text-ink" : "text-paper/85 hover:text-paper"
      )}
    >
      {link.label}
      <span
        className={cn(
          "absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100",
          active && "scale-x-100"
        )}
      />
    </Link>
  );
}

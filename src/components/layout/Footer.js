"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Camera, Globe2, MessageCircle, Video } from "lucide-react";
import { site, footerLinks } from "@/data/site";

const socialIcons = [
  { icon: MessageCircle, href: site.social.twitter, label: "Twitter / X" },
  { icon: Globe2, href: site.social.facebook, label: "Facebook" },
  { icon: Camera, href: site.social.instagram, label: "Instagram" },
  { icon: Video, href: site.social.youtube, label: "YouTube" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-forest-deep px-6 pb-8 pt-20 text-paper md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 border-b border-line-invert pb-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl tracking-tight">
              {site.wordmark}
            </p>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-paper/55">
              {site.title}
              <br />
              {site.fullTitle}
            </p>
            <div className="mt-8 flex items-center gap-4">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line-invert text-paper/70 transition-colors duration-300 hover:border-gold-soft hover:text-gold-soft"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-[12px] uppercase tracking-[0.2em] text-paper/40">
              Navigate
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-paper/70 transition-colors duration-300 hover:text-gold-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[12px] uppercase tracking-[0.2em] text-paper/40">
              Office
            </p>
            <ul className="space-y-3 text-[14px] text-paper/70">
              <li>{site.address}</li>
              <li>{site.email}</li>
              <li>{site.phone}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-8 md:flex-row md:items-center">
          <p className="text-[12px] text-paper/40">
            © {new Date().getFullYear()} {site.wordmark}. All rights reserved.
          </p>
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-paper/60 hover:text-gold-soft"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line-invert">
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

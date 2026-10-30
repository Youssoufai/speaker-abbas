"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { formatDate } from "@/lib/format";

export default function NewsCard({ article, featured = false }) {
  return (
    <Link href={`/news/${article.slug}`} className="group block">
      <motion.div whileHover="hover" initial="idle">
        <div
          className={
            "relative overflow-hidden " + (featured ? "h-[420px] md:h-[560px]" : "h-56")
          }
        >
          <motion.div
            variants={{ idle: { scale: 1 }, hover: { scale: 1.06 } }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full"
          >
            <PlaceholderMedia
              src={article.image}
              alt={article.title}
              position={article.position}
              className="h-full w-full"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink">
            {article.category}
          </span>
        </div>

        <div className="mt-5">
          {article.date ? (
            <p className="text-[12px] uppercase tracking-[0.16em] text-ink-soft/50">
              {formatDate(article.date)}
            </p>
          ) : null}
          <h3
            className={
              "mt-2 font-display tracking-tight text-ink transition-colors duration-300 group-hover:text-forest " +
              (featured ? "text-[clamp(1.6rem,3vw,2.4rem)]" : "text-xl")
            }
          >
            {article.title}
          </h3>
          <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-ink-soft/70">
            {article.excerpt}
          </p>
          {article.source ? (
            <p className="mt-3 text-[12px] uppercase tracking-[0.12em] text-ink-soft/45">
              {article.source}
            </p>
          ) : null}
          <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-forest">
            Read More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

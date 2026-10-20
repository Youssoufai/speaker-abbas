"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { formatDate } from "@/lib/format";

export default function GalleryGrid({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const next = () => setActiveIndex((i) => (i + 1) % items.length);
  const prev = () => setActiveIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (i % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover="hover"
            initial2="idle"
            className="group relative block w-full overflow-hidden text-left"
            style={{ breakInside: "avoid" }}
          >
            <motion.div
              variants={{ idle: { scale: 1 }, hover: { scale: 1.06 } }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={i % 3 === 0 ? "h-[420px]" : "h-[300px]"}
            >
              <PlaceholderMedia tone="forest" className="h-full w-full" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-[11px] uppercase tracking-[0.14em] text-gold-soft">
                {item.category}
              </p>
              <p className="mt-1 text-[13px] text-paper/80">
                {formatDate(item.date)}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-ink/95 px-6 py-10"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 text-paper"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 text-paper md:left-10"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 text-paper md:right-10"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-[70vh] w-full max-w-4xl"
            >
              <PlaceholderMedia
                tone="charcoal"
                label={items[activeIndex].caption}
                className="h-full w-full"
              />
              <p className="mt-4 text-center text-[13px] uppercase tracking-[0.14em] text-paper/60">
                {items[activeIndex].category} — {formatDate(items[activeIndex].date)}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

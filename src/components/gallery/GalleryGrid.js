"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { cn } from "@/lib/utils";

export default function GalleryGrid({ items: allItems, filterable = false }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [filter, setFilter] = useState("All");
  const categories = useMemo(
    () => ["All", ...new Set(allItems.map((item) => item.category))],
    [allItems]
  );
  const items = useMemo(
    () => (filter === "All" ? allItems : allItems.filter((item) => item.category === filter)),
    [allItems, filter]
  );

  const close = () => setActiveIndex(null);
  const next = () => setActiveIndex((i) => (i + 1) % items.length);
  const prev = () => setActiveIndex((i) => (i - 1 + items.length) % items.length);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, items.length]);

  return (
    <>
      {filterable && (
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "relative rounded-full border px-5 py-2 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-300",
                filter === cat ? "border-forest text-paper" : "border-line text-ink-soft hover:border-forest/40"
              )}
            >
              {filter === cat && (
                <motion.span
                  layoutId="gallery-filter"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-forest"
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      )}
      <div key={filter} className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            layout
            initial={{ opacity: 0, y: 40, clipPath: "inset(12% 0% 0% 0%)" }}
            whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: (i % 6) * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="group relative block w-full overflow-hidden text-left"
            style={{ breakInside: "avoid" }}
          >
            <div
              className={cn(
                "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]",
                i % 3 === 0 ? "h-[420px]" : "h-[300px]"
              )}
            >
              <PlaceholderMedia
                src={item.image}
                alt={item.caption}
                position={item.position || "center"}
                fit={item.fit}
                className="h-full w-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-[11px] uppercase tracking-[0.14em] text-gold-soft">
                {item.category}
              </p>
              <p className="mt-1 max-w-xs text-[13px] text-paper/80">
                {item.caption}
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
              <img
                src={items[activeIndex].image}
                alt={items[activeIndex].caption}
                className="h-full w-full object-contain"
              />
              <p className="mt-4 text-center text-[13px] uppercase tracking-[0.14em] text-paper/60">
                {items[activeIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { timeline } from "@/data/timeline";

export default function LeadershipTimeline({ compact = false }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.3"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-paper px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Biography"
          title="A Life in Public Service"
          description={
            !compact &&
            "From the classrooms of Kogi East to the banking floor, and then to two terms in the Senate."
          }
        />

        <div ref={ref} className="relative mt-20 pl-8 md:pl-12">
          <div className="absolute left-0 top-0 h-full w-px bg-line md:left-0" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-0 top-0 w-px bg-forest md:left-0"
          />

          <div className="space-y-16">
            {timeline.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid gap-2 md:grid-cols-[100px_1fr_1fr] md:gap-8"
              >
                <span className="absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-forest md:-left-12" />
                <span className="font-display text-[13px] text-gold">
                  {item.phase}
                </span>
                <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
                  {item.title}
                  <span className="mt-1 block text-[13px] font-sans font-normal uppercase tracking-[0.15em] text-ink-soft/50">
                    {item.period}
                  </span>
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-soft/75">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

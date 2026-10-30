"use client";

import { motion } from "framer-motion";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";

export default function ProjectCard({ project }) {
  return (
    <motion.div whileHover="hover" initial="idle" className="group">
      <div className="relative h-64 overflow-hidden">
        <motion.div
          variants={{ idle: { scale: 1 }, hover: { scale: 1.06 } }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full"
        >
          <PlaceholderMedia
            src={project.image}
            alt={project.title}
            position={project.position}
            fit={project.fit}
            className="h-full w-full"
          />
        </motion.div>
        <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink">
          {project.category}
        </span>
      </div>
      <div className="mt-5">
        <p className="text-[12px] uppercase tracking-[0.16em] text-ink-soft/50">
          {project.location}
        </p>
        {project.status ? (
          <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.12em] text-forest">
            {project.status}
          </p>
        ) : null}
        <h3 className="mt-2 font-display text-xl tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-ink-soft/70">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

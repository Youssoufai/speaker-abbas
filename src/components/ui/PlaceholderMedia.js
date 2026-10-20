"use client";

import { cn } from "@/lib/utils";

/**
 * A tasteful, deterministic placeholder for imagery that has not yet been
 * supplied. Renders a layered gradient + label instead of a broken image
 * request, so the visual system stays polished until real photography
 * is provided by the Office of the Speaker.
 */
export default function PlaceholderMedia({
  label,
  tone = "forest",
  className,
}) {
  const tones = {
    forest:
      "from-forest via-forest-deep to-ink bg-[radial-gradient(circle_at_30%_20%,rgba(182,145,60,0.18),transparent_60%)]",
    charcoal:
      "from-ink-soft via-ink to-forest-deep bg-[radial-gradient(circle_at_70%_30%,rgba(182,145,60,0.14),transparent_60%)]",
    paper:
      "from-paper-dim via-paper to-paper-dim bg-[radial-gradient(circle_at_50%_10%,rgba(14,47,36,0.08),transparent_60%)]",
  };

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-end overflow-hidden bg-gradient-to-br",
        tones[tone],
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 14px)",
          color: tone === "paper" ? "#0e2f24" : "#faf9f6",
        }}
      />
      {label ? (
        <span
          className={cn(
            "relative z-10 p-4 text-[11px] uppercase tracking-[0.18em]",
            tone === "paper" ? "text-ink-soft/60" : "text-paper/50"
          )}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}

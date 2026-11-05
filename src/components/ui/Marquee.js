import { cn } from "@/lib/utils";

/**
 * Infinite horizontal ticker. Content is duplicated so the loop is seamless.
 */
export default function Marquee({ items, className, itemClassName, reverse = false }) {
  const row = (hidden) => (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {items.map((item, i) => (
        <span key={i} className={cn("flex items-center gap-10 whitespace-nowrap", itemClassName)}>
          {item}
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("group flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max animate-marquee group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

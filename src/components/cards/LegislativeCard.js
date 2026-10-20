import { cn } from "@/lib/utils";

const statusStyles = {
  Passed: "bg-forest/10 text-forest",
  "In Progress": "bg-gold/10 text-gold",
  "Under Review": "bg-ink/10 text-ink-soft",
};

export default function LegislativeCard({ item }) {
  return (
    <div className="group border-t border-line py-8 transition-colors duration-300 first:border-t-0 md:grid md:grid-cols-[120px_1fr_auto] md:items-center md:gap-8">
      <p className="text-[12px] uppercase tracking-[0.16em] text-ink-soft/50">
        {item.date}
      </p>
      <div className="mt-3 md:mt-0">
        <span className="text-[11px] uppercase tracking-[0.14em] text-forest">
          {item.category}
        </span>
        <h3 className="mt-2 font-display text-xl tracking-tight text-ink transition-colors duration-300 group-hover:text-forest md:text-2xl">
          {item.title}
        </h3>
        <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-ink-soft/70">
          {item.description}
        </p>
      </div>
      <span
        className={cn(
          "mt-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] md:mt-0",
          statusStyles[item.status] ?? "bg-ink/10 text-ink-soft"
        )}
      >
        {item.status}
      </span>
    </div>
  );
}

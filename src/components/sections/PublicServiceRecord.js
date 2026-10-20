import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { serviceRecord, milestones } from "@/data/legislative";

export default function PublicServiceRecord() {
  return (
    <section className="bg-paper-dim px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Accountability"
          title="Public Service Record"
          description="A transparent, factual overview of parliamentary and public service activity."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-none bg-line md:grid-cols-4">
          {serviceRecord.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.06}
              className="bg-paper p-8"
            >
              <p className="font-display text-4xl tracking-tight text-forest">
                {item.value}
              </p>
              <p className="mt-3 text-[13px] font-medium uppercase tracking-[0.14em] text-ink">
                {item.label}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft/65">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {milestones.map((m, i) => (
            <Reveal
              key={m.id}
              delay={i * 0.08}
              className="flex items-start gap-5 border border-line bg-paper p-7"
            >
              <span className="mt-1 text-[12px] uppercase tracking-[0.14em] text-ink-soft/50">
                {m.date}
              </span>
              <div>
                <h3 className="font-display text-lg tracking-tight text-ink">
                  {m.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft/70">
                  {m.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

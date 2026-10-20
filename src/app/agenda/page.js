import AgendaSection from "@/components/sections/AgendaSection";
import Reveal from "@/components/ui/Reveal";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { site } from "@/data/site";

export const metadata = {
  title: "The Legislative Agenda",
  description: `The legislative agenda and priority areas championed by ${site.name}.`,
};

export default function AgendaPage() {
  return (
    <>
      <section className="relative flex h-[50vh] min-h-[360px] items-end overflow-hidden bg-ink text-paper">
        <PlaceholderMedia tone="charcoal" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10">
          <Reveal>
            <span className="text-[12px] uppercase tracking-[0.24em] text-gold-soft">
              Priorities
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-tight">
              The Legislative Agenda
            </h1>
          </Reveal>
        </div>
      </section>

      <AgendaSection />
    </>
  );
}

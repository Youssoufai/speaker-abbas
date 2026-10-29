import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import AgendaCard from "@/components/cards/AgendaCard";
import { agendaItems } from "@/data/agenda";

export default function AgendaSection() {
  return (
    <section className="bg-ink px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Priorities"
          title="The Legislative Agenda"
          description="Six priority areas shaping the legislative direction of the Senate."
          tone="light"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agendaItems.map((item, i) => (
            <Reveal key={item.id} variant="scale" delay={i * 0.06}>
              <AgendaCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

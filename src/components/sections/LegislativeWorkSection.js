import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import StatCounter from "@/components/ui/StatCounter";
import LegislativeCard from "@/components/cards/LegislativeCard";
import Button from "@/components/ui/Button";
import { legislativeStats, legislativeInitiatives } from "@/data/legislative";

export default function LegislativeWorkSection({ limit }) {
  return (
    <section className="bg-paper px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="The record"
          title="Legislative Work"
          description="Bills he sponsored for Kogi East, and the Senate resolution he secured for the Anyigba–Dekina–Shintaku Road."
        />

        {legislativeStats.length > 0 && (
          <div className="mt-16 grid grid-cols-2 gap-8 border-y border-line py-12 md:grid-cols-4">
            {legislativeStats.map((stat, i) => (
              <Reveal key={stat.id} delay={i * 0.08}>
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </Reveal>
            ))}
          </div>
        )}

        <div className={legislativeStats.length > 0 ? "mt-16" : "mt-12"}>
          {(limit ? legislativeInitiatives.slice(0, limit) : legislativeInitiatives).map(
            (item) => (
              <LegislativeCard key={item.id} item={item} />
            )
          )}
        </div>

        {limit ? (
          <Reveal className="mt-14">
            <Button href="/legislative-work" variant="outline" className="text-ink">
              View Legislative Record
            </Button>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

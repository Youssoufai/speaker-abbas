import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SpeechCard from "@/components/cards/SpeechCard";
import Button from "@/components/ui/Button";
import { speeches } from "@/data/speeches";

export default function SpeechesSection() {
  return (
    <section className="bg-forest-deep px-6 py-28 text-paper md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Voice of the House"
            title="Speeches & Statements"
            tone="light"
          />
          <Reveal>
            <Button href="/speeches" variant="outline" className="text-paper border-paper/35">
              Explore All Speeches
            </Button>
          </Reveal>
        </div>

        <div className="mt-14">
          {speeches.map((speech, i) => (
            <Reveal key={speech.slug} delay={i * 0.06}>
              <SpeechCard speech={speech} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

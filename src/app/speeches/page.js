import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SpeechCard from "@/components/cards/SpeechCard";
import { speeches } from "@/data/speeches";
import { site } from "@/data/site";

export const metadata = {
  title: "Speeches & Statements",
  description: `Speeches and statements delivered by ${site.name}.`,
};

export default function SpeechesPage() {
  return (
    <section className="bg-forest-deep px-6 py-32 text-paper md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Voice of the House"
          title="Speeches & Statements"
          tone="light"
          description="A record of formal remarks and statements delivered in the course of official duty."
        />

        <div className="mt-16">
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

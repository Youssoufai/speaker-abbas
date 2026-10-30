import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SpeechCard from "@/components/cards/SpeechCard";
import { speeches } from "@/data/speeches";
import { site } from "@/data/site";

export const metadata = {
  title: "Speeches & Statements",
  description: `Speeches and statements of ${site.name} from his service in the Senate.`,
};

export default function SpeechesPage() {
  return (
    <section className="bg-forest-deep px-6 py-32 text-paper md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Statements"
          title="Speeches & Statements"
          tone="light"
          description="Addresses and statements from his service in the Senate and across Kogi East."
        />

        <div className="mt-16">
          {speeches.length === 0 ? (
            <p className="max-w-xl text-[15px] leading-relaxed text-paper/70">
              From the floor of the Senate and from engagements with the people of Kogi East.
            </p>
          ) : (
            speeches.map((speech, i) => (
              <Reveal key={speech.slug} delay={i * 0.06}>
                <SpeechCard speech={speech} />
              </Reveal>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

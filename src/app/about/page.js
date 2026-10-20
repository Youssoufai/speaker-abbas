import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { site } from "@/data/site";

export const metadata = {
  title: "About",
  description: `About ${site.name}, ${site.fullTitle}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden bg-forest-deep text-paper">
        <PlaceholderMedia
          tone="forest"
          label="Speaker Portrait Placeholder"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10">
          <Reveal>
            <span className="text-[12px] uppercase tracking-[0.24em] text-gold-soft">
              About
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-tight">
              Rt. Hon. Tajudeen Abbas
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-2">
          <SectionHeading
            eyebrow="The Speaker"
            title="Speaker of the House of Representatives"
            description="Placeholder — a full, verified biography of Rt. Hon. Tajudeen Abbas will be provided here once supplied by the Office of the Speaker. This page is structured to present his background, career and vision for the Ninth Assembly and beyond."
          />
          <Reveal variant="scale" className="h-[360px] md:h-[460px]">
            <PlaceholderMedia
              tone="paper"
              label="Portrait Placeholder"
              className="h-full w-full"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

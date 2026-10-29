import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { site } from "@/data/site";
import { portraits } from "@/data/portraits";

export const metadata = {
  title: "About",
  description: `About ${site.name}, ${site.fullTitle}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden bg-forest-deep text-paper">
        <PlaceholderMedia
          src={portraits.closeup.src}
          alt={portraits.closeup.alt}
          position={portraits.closeup.position}
          priority
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
              {site.name}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-2">
          <SectionHeading
            eyebrow={site.nickname}
            title="Senator Representing Kogi East"
            description={`Placeholder — a full, verified biography of ${site.name}, widely known as ${site.nickname}, will be provided here once supplied by his office. This page is structured to present his background, career and vision for Kogi East and the Senate.`}
          />
          <Reveal variant="scale" className="h-[360px] md:h-[460px]">
            <PlaceholderMedia
              src={portraits.official.src}
              alt={portraits.official.alt}
              position={portraits.official.position}
              className="h-full w-full"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

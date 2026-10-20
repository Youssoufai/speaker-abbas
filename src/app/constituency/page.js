import ConstituencySection from "@/components/sections/ConstituencySection";
import Reveal from "@/components/ui/Reveal";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { site } from "@/data/site";

export const metadata = {
  title: "Constituency",
  description: `Constituency development and community engagement led by ${site.name}.`,
};

export default function ConstituencyPage() {
  return (
    <>
      <section className="relative flex h-[50vh] min-h-[360px] items-end overflow-hidden bg-forest-deep text-paper">
        <PlaceholderMedia tone="forest" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10">
          <Reveal>
            <span className="text-[12px] uppercase tracking-[0.24em] text-gold-soft">
              Constituency
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-tight">
              Serving the Constituency
            </h1>
          </Reveal>
        </div>
      </section>

      <ConstituencySection />
    </>
  );
}

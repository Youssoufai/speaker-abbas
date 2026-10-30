import LeadershipTimeline from "@/components/sections/LeadershipTimeline";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { portraits } from "@/data/portraits";

export const metadata = {
  title: "Biography",
  description: `Biography of ${site.name} (Echocho): education, banking, and Senate service for Kogi East from 2019, including the 10th National Assembly (2023–2027).`,
};

export default function LeadershipPage() {
  return (
    <>
      <section className="relative flex h-[50vh] min-h-[360px] items-end overflow-hidden bg-ink text-paper">
        <PlaceholderMedia
          src={portraits.smile.src}
          alt={portraits.smile.alt}
          position="center 18%"
          priority
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10">
          <Reveal>
            <span className="text-[12px] uppercase tracking-[0.24em] text-gold-soft">
              Biography
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-tight">
              A Life in Public Service
            </h1>
          </Reveal>
        </div>
      </section>

      <LeadershipTimeline />

      <section className="bg-paper-dim px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="Parliamentary Leadership"
            title="Representing Kogi East in the Senate"
            description="On 7 August 2023 the Senate named Jibrin Isah chairman of the Committee on Customs, Excise and Tariff. In March 2024 the Senate also asked him to chair the ad-hoc inquiry into Ways and Means and the Anchor Borrowers’ Programme."
          />
        </div>
      </section>
    </>
  );
}

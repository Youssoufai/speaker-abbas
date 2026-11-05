import PageHero from "@/components/ui/PageHero";
import { webImages } from "@/data/webImages";
import LeadershipTimeline from "@/components/sections/LeadershipTimeline";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export const metadata = {
  title: "Biography",
  description: `Biography of ${site.name} (Echocho): education, banking, and Senate service for Kogi East from 2019, including the 10th National Assembly (2023–2027).`,
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Biography"
        title={"A Life in Public Service"}
        image={webImages.assemblyMace}
      />

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

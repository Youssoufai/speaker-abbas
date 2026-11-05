import PageHero from "@/components/ui/PageHero";
import { webImages } from "@/data/webImages";
import LegislativeWorkSection from "@/components/sections/LegislativeWorkSection";
import PublicServiceRecord from "@/components/sections/PublicServiceRecord";
import { site } from "@/data/site";

export const metadata = {
  title: "Legislative Work",
  description: `Bills, motions and committee leadership of ${site.name}, senator for Kogi East.`,
};

export default function LegislativeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Legislative Record"
        title={"Legislative Work"}
        image={webImages.senate}
        description="Bills, motions and committee leadership, each stopped at the last stage its source confirms."
      />

      <LegislativeWorkSection />
      <PublicServiceRecord />
    </>
  );
}

import PageHero from "@/components/ui/PageHero";
import { webImages } from "@/data/webImages";
import ConstituencySection from "@/components/sections/ConstituencySection";
import { site } from "@/data/site";

export const metadata = {
  title: "Constituency",
  description: `Constituency projects and community engagements of ${site.name} across Kogi East.`,
};

export default function ConstituencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Constituency"
        title={"Constituency Record"}
        image={webImages.confluence}
        description="Roads, markets, youth training and community visits across Kogi East."
      />

      <ConstituencySection />
    </>
  );
}

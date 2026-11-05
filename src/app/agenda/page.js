import PageHero from "@/components/ui/PageHero";
import { webImages } from "@/data/webImages";
import AgendaSection from "@/components/sections/AgendaSection";
import { site } from "@/data/site";

export const metadata = {
  title: "Areas of Legislative Work",
  description: `Documented areas of legislative work by ${site.name} for Kogi East: health, education, agriculture, roads, customs oversight and a public-finance inquiry.`,
};

export default function AgendaPage() {
  return (
    <>
      <PageHero
        eyebrow="Recorded work"
        title={"Areas of Legislative Work"}
        image={webImages.assemblyGlobe}
      />

      <AgendaSection />
    </>
  );
}

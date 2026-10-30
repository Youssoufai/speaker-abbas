import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { gallery } from "@/data/gallery";
import { site } from "@/data/site";

export const metadata = {
  title: "Gallery",
  description: `Photographs of constituency projects, community engagements and portraits from the service of ${site.name} to Kogi East.`,
};

export default function GalleryPage() {
  return (
    <section className="bg-paper px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Visual Record"
          title="Gallery"
          description="Constituency projects, community engagements and portraits from his service to Kogi East."
        />
        <div className="mt-16">
          <GalleryGrid items={gallery} />
        </div>
      </div>
    </section>
  );
}

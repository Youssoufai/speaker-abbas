import PageHero from "@/components/ui/PageHero";
import { webImages } from "@/data/webImages";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { gallery } from "@/data/gallery";
import { site } from "@/data/site";

export const metadata = {
  title: "Gallery",
  description: `Photographs of constituency projects, community engagements and portraits from the service of ${site.name} to Kogi East.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Visual Record" title={"Gallery"} image={webImages.confluence} description="Constituency projects, community engagements and portraits from his service to Kogi East." height="h-[60vh] min-h-[420px]" />
    <section className="bg-paper px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div>
          <GalleryGrid items={gallery} filterable />
        </div>
      </div>
    </section>
    </>
  );
}

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { gallery } from "@/data/gallery";

export default function GallerySection() {
  return (
    <section className="bg-paper px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Visual Record"
            title="Gallery"
            description="Constituency projects, education, empowerment and official engagements across Kogi East."
          />
          <Reveal>
            <Button href="/gallery" variant="ghost" className="!px-0 text-ink">
              View Full Gallery
            </Button>
          </Reveal>
        </div>

        <div className="mt-16">
          <GalleryGrid items={gallery.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
}

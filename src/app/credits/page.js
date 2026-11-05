import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { webImageCredits, webImages } from "@/data/webImages";

export const metadata = {
  title: "Image Credits",
  description: "Attribution for the freely licensed photographs used on this site.",
};

export default function CreditsPage() {
  return (
    <>
      <PageHero
        eyebrow="Credits"
        title="Image Credits"
        image={webImages.kogiRivers}
        height="h-[50vh] min-h-[380px]"
        description="Landscape and institutional photographs are used under Creative Commons licences from Wikimedia Commons. Photographs of the senator and constituency projects are supplied by his office."
      />
      <section className="bg-paper px-6 py-24 md:px-10 md:py-32">
        <ul className="mx-auto max-w-[1100px] divide-y divide-line border-y border-line">
          {webImageCredits.map((img, i) => (
            <Reveal as="li" key={img.src} delay={(i % 4) * 0.05} className="grid items-center gap-5 py-6 sm:grid-cols-[140px_1fr]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} loading="lazy" className="h-24 w-full object-cover sm:w-[140px]" />
              <div>
                <p className="font-display text-lg tracking-tight text-ink">{img.title}</p>
                <p className="mt-1 text-[13px] text-ink-soft/70">
                  Photo by {img.author} · {img.license} ·{" "}
                  <a href={img.source} target="_blank" rel="noopener noreferrer" className="text-forest underline underline-offset-4">
                    Wikimedia Commons
                  </a>
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}

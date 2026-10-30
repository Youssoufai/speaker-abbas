import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { portraits } from "@/data/portraits";

export default function Introduction() {
  return (
    <section className="bg-paper px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <Reveal>
            <span className="mb-8 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em] text-forest">
              <span className="h-px w-8 bg-current" />
              The Archive
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-balance font-display text-[clamp(2rem,4vw,3.2rem)] italic leading-[1.15] tracking-tight text-ink">
              Kogi East in the Senate, set down as a record.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-ink-soft/80">
              Jibrin Isah, known as Echocho, was elected senator for Kogi East in 2019 and returned by the district in 2023. In the 10th National Assembly the Senate named him chairman of the Committee on Customs, Excise and Tariff.
            </p>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-soft/80">
              His years in the Senate have been given to legislation for Kogi East, oversight of customs and public finance, and projects in the communities he represents: health, education, roads, markets and youth training.
            </p>
          </Reveal>
          <Reveal delay={0.22} className="mt-10">
            <Button href="/about" variant="ghost" className="!px-0 text-ink">
              Read the biography
            </Button>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={0.1} className="h-[420px] md:h-[560px]">
          <PlaceholderMedia
            src={portraits.smile.src}
            alt={portraits.smile.alt}
            position={portraits.smile.position}
            className="h-full w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}

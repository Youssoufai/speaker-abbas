import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import ImageReveal from "@/components/ui/ImageReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import { portraits } from "@/data/portraits";
import { webImages } from "@/data/webImages";

const facts = [
  { value: "2019", label: "First elected to the Senate" },
  { value: "2023", label: "Returned by Kogi East" },
  { value: "9th & 10th", label: "National Assemblies served" },
];

export default function Introduction() {
  return (
    <section className="relative overflow-hidden bg-paper px-6 py-28 md:px-10 md:py-40">
      {/* Oversized watermark */}
      <Reveal
        variant="fade"
        duration={1.6}
        className="pointer-events-none absolute -right-10 top-10 select-none font-display text-[22vw] leading-none tracking-tighter text-forest/[0.04]"
      >
        <span aria-hidden="true">Echocho</span>
      </Reveal>

      <div className="relative mx-auto grid max-w-[1600px] items-center gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <Reveal>
            <span className="mb-8 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em] text-forest">
              <span className="h-px w-8 bg-current" />
              The Archive
            </span>
          </Reveal>
          <AnimatedText
            as="p"
            inView
            text="Kogi East in the Senate, set down as a record."
            className="text-balance font-display text-[clamp(2.1rem,4.2vw,3.6rem)] italic leading-[1.1] tracking-tight text-ink"
          />
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-ink-soft/80">
              Jibrin Isah, known as Echocho, was elected senator for Kogi East in 2019 and returned by the district in 2023. In the 10th National Assembly the Senate named him chairman of the Committee on Customs, Excise and Tariff.
            </p>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-soft/80">
              His years in the Senate have been given to legislation for Kogi East, oversight of customs and public finance, and projects in the communities he represents: health, education, roads, markets and youth training.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={0.2 + i * 0.08}>
                <p className="font-display text-[clamp(1.5rem,2.6vw,2.4rem)] leading-none tracking-tight text-forest">
                  {f.value}
                </p>
                <p className="mt-3 text-[11px] uppercase leading-snug tracking-[0.14em] text-ink-soft/60">
                  {f.label}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-12">
            <Button href="/about" variant="primary">
              Read the biography
            </Button>
          </Reveal>
        </div>

        <div className="relative pb-20 md:pb-28">
          <ImageReveal
            src={portraits.smile.src}
            alt={portraits.smile.alt}
            position={portraits.smile.position}
            className="h-[440px] w-[85%] md:h-[600px]"
          />
          <ImageReveal
            src={webImages.assemblyMace.src}
            alt={webImages.assemblyMace.alt}
            position={webImages.assemblyMace.position}
            direction="left"
            delay={0.35}
            parallax={70}
            className="absolute bottom-0 right-0 h-44 w-[55%] border-[6px] border-paper shadow-2xl md:h-64"
          />
          <Reveal
            variant="scale"
            delay={0.7}
            className="absolute left-[78%] top-10 hidden -translate-x-1/2 md:block"
          >
            <div className="flex h-28 w-28 animate-[spin_24s_linear_infinite] items-center justify-center rounded-full bg-forest text-paper">
              <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
                <defs>
                  <path id="circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                </defs>
                <text className="fill-current text-[9.5px] uppercase tracking-[0.32em]">
                  <textPath href="#circle">Senator · Kogi East · Echocho ·</textPath>
                </text>
              </svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

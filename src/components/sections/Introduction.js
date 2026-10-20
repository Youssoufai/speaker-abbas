import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";

export default function Introduction() {
  return (
    <section className="bg-paper px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <Reveal>
            <span className="mb-8 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em] text-forest">
              <span className="h-px w-8 bg-current" />
              Message from the Speaker
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-balance font-display text-[clamp(2rem,4vw,3.2rem)] italic leading-[1.15] tracking-tight text-ink">
              &ldquo;A legislature that works for the people.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-ink-soft/80">
              Placeholder introduction — a short message from the Speaker
              will be provided here once verified content is supplied by the
              Office of the Speaker. This section is designed to hold an
              authentic reflection on the role and responsibility of the
              House of Representatives to the Nigerian people.
            </p>
          </Reveal>
          <Reveal delay={0.22} className="mt-10">
            <Button href="/about" variant="ghost" className="!px-0 text-ink">
              Read the Speaker&rsquo;s Message
            </Button>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={0.1} className="h-[420px] md:h-[560px]">
          <PlaceholderMedia
            tone="paper"
            label="National Assembly / Speaker Portrait Placeholder"
            className="h-full w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}

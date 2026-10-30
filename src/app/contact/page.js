import Reveal from "@/components/ui/Reveal";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import ContactForm from "@/components/forms/ContactForm";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact the Office",
  description: `Contact the office of ${site.name}, senator for Kogi East.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="relative flex h-[45vh] min-h-[320px] items-end overflow-hidden bg-ink text-paper">
        <PlaceholderMedia tone="charcoal" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10">
          <Reveal>
            <span className="text-[12px] uppercase tracking-[0.24em] text-gold-soft">
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-tight">
              Contact the Office
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

import PageHero from "@/components/ui/PageHero";
import { webImages } from "@/data/webImages";
import ContactForm from "@/components/forms/ContactForm";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact the Office",
  description: `Contact the office of ${site.name}, senator for Kogi East.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={"Contact the Office"}
        image={webImages.kogiRivers}
      />

      <section className="bg-paper px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

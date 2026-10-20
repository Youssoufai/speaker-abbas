import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import NewsCard from "@/components/cards/NewsCard";
import { news } from "@/data/news";
import { site } from "@/data/site";

export const metadata = {
  title: "News",
  description: `Latest news from the Office of ${site.name}.`,
};

export default function NewsPage() {
  return (
    <section className="bg-paper px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Newsroom"
          title="Latest from the Office"
          description="Announcements, legislative updates and engagements from the Office of the Speaker."
        />

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((article, i) => (
            <Reveal key={article.slug} delay={(i % 3) * 0.08}>
              <NewsCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

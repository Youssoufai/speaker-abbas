import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import NewsCard from "@/components/cards/NewsCard";
import Button from "@/components/ui/Button";
import { news } from "@/data/news";

export default function NewsSection() {
  const featured = news.find((n) => n.featured) ?? news[0];
  const rest = news.filter((n) => n.slug !== featured.slug).slice(0, 3);

  return (
    <section className="bg-paper px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="Newsroom" title="Latest from the Office" />
          <Reveal>
            <Button href="/news" variant="ghost" className="!px-0 text-ink">
              View All News
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <NewsCard article={featured} featured />
          </Reveal>
          <div className="grid gap-10">
            {rest.map((article, i) => (
              <Reveal key={article.slug} variant="right" delay={i * 0.08}>
                <NewsCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

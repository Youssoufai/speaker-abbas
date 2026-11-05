import PageHero from "@/components/ui/PageHero";
import { webImages } from "@/data/webImages";
import Reveal from "@/components/ui/Reveal";
import NewsCard from "@/components/cards/NewsCard";
import { news } from "@/data/news";
import { site } from "@/data/site";

export const metadata = {
  title: "News",
  description: `Reports of the legislative work, committee leadership and constituency projects of ${site.name} for Kogi East.`,
};

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="Reports" title={"From the Record"} image={webImages.mountPatti} description={`Reports of the legislative work, committee leadership and constituency projects of ${site.name}.`} height="h-[60vh] min-h-[420px]" />
    <section className="bg-paper px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">

        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((article, i) => (
            <Reveal key={article.slug} delay={(i % 3) * 0.08}>
              <NewsCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

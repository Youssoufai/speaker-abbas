import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { news } from "@/data/news";
import { formatDate } from "@/lib/format";

export async function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  if (!article) notFound();

  return (
    <article>
      <section className="relative flex h-[55vh] min-h-[400px] items-end overflow-hidden bg-forest-deep text-paper">
        <PlaceholderMedia
          src={article.image}
          alt={article.title}
          position={article.position}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1000px] px-6 pb-16 md:px-10">
          <Reveal>
            <span className="text-[12px] uppercase tracking-[0.2em] text-gold-soft">
              {article.category}
              {article.date ? ` · ${formatDate(article.date)}` : ""}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] tracking-tight">
              {article.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[760px]">
          <Reveal>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-forest"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              Back to News
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-10 text-[17px] leading-relaxed text-ink-soft/85">
              {article.content}
            </p>
          </Reveal>
        </div>
      </section>
    </article>
  );
}

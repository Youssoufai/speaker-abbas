import { site } from "@/data/site";
import { news } from "@/data/news";
import { speeches } from "@/data/speeches";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/leadership",
    "/legislative-work",
    "/agenda",
    "/constituency",
    "/news",
    "/speeches",
    "/gallery",
    "/contact",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));

  const newsRoutes = news.map((article) => ({
    url: `${site.url}/news/${article.slug}`,
    lastModified: article.date,
  }));

  const speechRoutes = speeches.map((speech) => ({
    url: `${site.url}/speeches/${speech.slug}`,
    lastModified: speech.date,
  }));

  return [...staticRoutes, ...newsRoutes, ...speechRoutes];
}

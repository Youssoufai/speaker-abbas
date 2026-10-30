import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import LeadershipTimeline from "@/components/sections/LeadershipTimeline";
import AgendaSection from "@/components/sections/AgendaSection";
import LegislativeWorkSection from "@/components/sections/LegislativeWorkSection";
import PublicServiceRecord from "@/components/sections/PublicServiceRecord";
import ConstituencySection from "@/components/sections/ConstituencySection";
import NewsSection from "@/components/sections/NewsSection";
import SpeechesSection from "@/components/sections/SpeechesSection";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <LeadershipTimeline compact />
      <AgendaSection />
      <LegislativeWorkSection limit={3} />
      <PublicServiceRecord limit={4} />
      <ConstituencySection />
      <NewsSection />
      <SpeechesSection />
      <GallerySection />
      <CTASection />
    </>
  );
}


import PageHero from "@/components/ui/PageHero";
import { webImages } from "@/data/webImages";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import { site } from "@/data/site";
import { portraits } from "@/data/portraits";

export const metadata = {
  title: "About",
  description: `Biography and public-service record of ${site.name} (Echocho), senator for Kogi East in the 10th National Assembly (2023–2027).`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={site.name}
        image={webImages.assembly}
        description="Economist, merchant banker and senator for Kogi East."
      />

      <section className="bg-paper px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={site.nickname}
              title="A life in public service"
              description="Born 28 February 1960. Senator for Kogi East in the 9th National Assembly and in the 10th (2023–2027)."
            />
            <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-ink-soft/80">
              <p>
                Jibrin Isah, widely known as Echocho, was born on 28 February 1960 in what is now Kogi East. He attended LGEA Primary School, Ajiolo-Ojaji, from 1967 to 1972, and Our Lady of School, Anyigba, from 1973 to 1977.
              </p>
              <p>
                He took a bachelor’s degree in economics at Bayero University, Kano, in 1983, a master’s in economics at the University of Lagos in 1991, a postgraduate degree in petroleum and energy at the University of Ibadan in 2002, and an MBA at the University of Nigeria, Nsukka, in 2003.
              </p>
              <p>
                Before the Senate he rose through merchant banking. He joined Chase Merchant Bank in 1988, moved to Afribank International Limited in 1991 as head of project finance and leasing, led its capital-market group from 1993, and in 1998 became managing director and chief executive of AIL Securities Limited.
              </p>
              <p>
                Kogi East elected him to the Senate in 2019 and returned him in 2023. He has served in the 9th National Assembly and in the 10th (2023–2027), sponsoring bills for health, education and agriculture, and speaking for the roads and livelihoods of the district.
              </p>
              <p>
                On 7 August 2023 the Senate named him chairman of the Committee on Customs, Excise and Tariff. In March 2024 it also asked him to chair the ad-hoc inquiry into Ways and Means and the Anchor Borrowers’ Programme.
              </p>
              <p>
                The pages that follow set out that service: the bills he sponsored, the committees he led, and the projects and visits he carried to the communities of Kogi East.
              </p>
            </div>
          </div>
          <div className="md:sticky md:top-28 md:self-start">
            <ImageReveal
              src={portraits.official.src}
              alt={portraits.official.alt}
              position={portraits.official.position}
              className="h-[440px] md:h-[620px]"
            />
            <Reveal delay={0.3} className="mt-5 flex items-center justify-between border-t border-line pt-4">
              <span className="text-[12px] uppercase tracking-[0.18em] text-ink-soft/60">Official portrait</span>
              <span className="font-display text-[15px] italic text-forest">{site.nickname}</span>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

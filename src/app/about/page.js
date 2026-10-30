import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { site } from "@/data/site";
import { portraits } from "@/data/portraits";

export const metadata = {
  title: "About",
  description: `Biography and public-service record of ${site.name} (Echocho), senator for Kogi East in the 10th National Assembly (2023–2027).`,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden bg-forest-deep text-paper">
        <PlaceholderMedia
          src={portraits.closeup.src}
          alt={portraits.closeup.alt}
          position={portraits.closeup.position}
          priority
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10">
          <Reveal>
            <span className="text-[12px] uppercase tracking-[0.24em] text-gold-soft">
              About
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-tight">
              {site.name}
            </h1>
          </Reveal>
        </div>
      </section>

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
          <Reveal variant="scale" className="h-[360px] md:h-[460px]">
            <PlaceholderMedia
              src={portraits.official.src}
              alt={portraits.official.alt}
              position={portraits.official.position}
              className="h-full w-full"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/cards/ProjectCard";
import Button from "@/components/ui/Button";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { projects } from "@/data/projects";
import { photos } from "@/data/photos";

export default function ConstituencySection() {
  return (
    <section className="bg-paper px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <SectionHeading
            eyebrow="On the Ground"
            title="Serving Kogi East"
            description="Development, community engagement and empowerment initiatives across Kogi East Senatorial District."
          />
          <Reveal
            variant="right"
            className="h-56 w-full overflow-hidden md:h-64"
          >
            <PlaceholderMedia
              src={photos.communityAddress.src}
              alt={photos.communityAddress.alt}
              position={photos.communityAddress.position}
              className="h-full w-full"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <Button href="/constituency" variant="outline" className="text-ink">
            Explore Kogi East Work
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

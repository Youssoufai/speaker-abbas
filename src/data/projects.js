import { photos } from "@/data/photos";

export const projectCategories = [
  "Infrastructure",
  "Education",
  "Empowerment",
  "Community Engagement",
  "Development",
];

export const projects = [
  {
    id: "market-stalls",
    title: "Lock-up shops",
    category: "Infrastructure",
    location: "Kogi East",
    description:
      "A row of lock-up shops under a metal roof, built for local traders.",
    image: photos.marketStalls.src,
    position: photos.marketStalls.position,
  },
  {
    id: "road-works",
    title: "Road construction",
    category: "Infrastructure",
    location: "Kogi East",
    description:
      "Excavation, drainage and foundation work on a constituency road project.",
    image: photos.roadWorks.src,
    position: photos.roadWorks.position,
    fit: photos.roadWorks.fit,
  },
  {
    id: "school-exam",
    title: "School examinations",
    category: "Education",
    location: "Kogi East",
    description: "Students sitting an examination in a constituency school.",
    image: photos.schoolExam.src,
    position: photos.schoolExam.position,
  },
  {
    id: "constituency-engagement",
    title: "Constituency engagement",
    category: "Community Engagement",
    location: "Kogi East",
    description:
      "Sen. Jibrin Isah with a constituent during an engagement in the district.",
    image: photos.engagement.src,
    position: photos.engagement.position,
  },
];

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
    id: "youth-empowerment",
    title: "Youth training, Kogi East",
    category: "Empowerment",
    location: "Kogi East",
    status: "November 2024",
    description:
      "Senator Jibrin Isah brought young people in Kogi East together for training and empowerment in November 2024, in collaboration with partner agencies.",
    image: photos.youthEmpowerment.src,
    position: photos.youthEmpowerment.position,
  },
  {
    id: "road-works",
    title: "Road construction",
    category: "Infrastructure",
    location: "Kogi East",
    status: "Constituency project",
    description:
      "Road works facilitated for communities in Kogi East, opening a better link for trade, farms and daily travel.",
    image: photos.roadWorks.src,
    position: photos.roadWorks.position,
    fit: photos.roadWorks.fit,
  },
  {
    id: "market-stalls",
    title: "Lock-up shops",
    category: "Infrastructure",
    location: "Kogi East",
    status: "Constituency project",
    description:
      "Lock-up shops provided for traders in Kogi East, giving local commerce a proper place to work.",
    image: photos.marketStalls.src,
    position: photos.marketStalls.position,
  },
  {
    id: "constituency-engagement",
    title: "Constituency engagement",
    category: "Community Engagement",
    location: "Kogi East",
    status: "Community visit",
    description:
      "Senator Jibrin Isah with a constituent during an engagement across Kogi East.",
    image: photos.engagement.src,
    position: photos.engagement.position,
  },
];

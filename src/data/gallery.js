import { portraits } from "@/data/portraits";
import { photos } from "@/data/photos";

export const galleryCategories = [
  "Infrastructure",
  "Education",
  "Empowerment",
  "Community Engagement",
  "Official Engagements",
  "Portraits",
];

export const gallery = [
  {
    id: "road-works",
    category: "Infrastructure",
    image: photos.roadWorks.src,
    caption: "Road construction facilitated for communities in Kogi East.",
    fit: photos.roadWorks.fit,
    position: "center",
  },
  {
    id: "exam-hall",
    category: "Education",
    image: photos.examHall.src,
    caption: photos.examHall.alt,
    position: photos.examHall.position,
  },
  {
    id: "lecture-hall",
    category: "Education",
    image: photos.lectureHall.src,
    caption: photos.lectureHall.alt,
    position: photos.lectureHall.position,
  },
  {
    id: "school-exam",
    category: "Education",
    image: photos.schoolExam.src,
    caption: "Students at an examination in Kogi East.",
    position: photos.schoolExam.position,
  },
  {
    id: "youth-empowerment",
    category: "Empowerment",
    image: photos.youthEmpowerment.src,
    caption:
      "Youth training and empowerment in Kogi East, November 2024, organised by Sen. Jibrin Isah Echocho.",
    position: photos.youthEmpowerment.position,
  },
  {
    id: "engagement",
    category: "Community Engagement",
    image: photos.engagement.src,
    caption: "Sen. Jibrin Isah with a constituent in Kogi East.",
    position: photos.engagement.position,
  },
  {
    id: "community-address",
    category: "Community Engagement",
    image: photos.communityAddress.src,
    caption: "Senator Jibrin Isah addressing a community in Kogi East.",
    position: photos.communityAddress.position,
  },
  {
    id: "market-stalls",
    category: "Infrastructure",
    image: photos.marketStalls.src,
    caption: "Lock-up shops provided for traders in Kogi East.",
    position: photos.marketStalls.position,
  },
  {
    id: "official-meeting",
    category: "Official Engagements",
    image: photos.officialMeeting.src,
    caption: "Senator Jibrin Isah at an official engagement in Kogi State.",
    position: photos.officialMeeting.position,
  },
  {
    id: "speaking",
    category: "Portraits",
    image: portraits.speaking.src,
    caption: "Sen. Jibrin Isah (Echocho) speaking for Kogi East.",
    position: portraits.speaking.position,
  },
  {
    id: "smile",
    category: "Portraits",
    image: portraits.smile.src,
    caption: "Sen. Jibrin Isah, Echocho.",
    position: portraits.smile.position,
  },
  {
    id: "closeup",
    category: "Portraits",
    image: portraits.closeup.src,
    caption: "Sen. Jibrin Isah, Echocho.",
    position: portraits.closeup.position,
  },
  {
    id: "official",
    category: "Portraits",
    image: portraits.official.src,
    caption: "Official portrait of Sen. Jibrin Isah, Echocho.",
    position: portraits.official.position,
  },
];

import { photos } from "@/data/photos";

export const news = [
  {
    slug: "examination-sitting",
    title: "Examination sitting in a lecture hall",
    excerpt:
      "Candidates fill a lecture hall for an examination, with TETFund desks in the front rows.",
    content:
      "Candidates are seated across a full lecture hall for an examination. TETFund desks line the front of the hall.",
    category: "Education",
    image: photos.lectureHall.src,
    position: photos.lectureHall.position,
    featured: true,
  },
  {
    slug: "youth-empowerment-kogi-east",
    title: "Youth training and empowerment in Kogi East",
    excerpt:
      "Training and empowerment of youths in Kogi East Senatorial District, November 2024.",
    content:
      "Young people gathered for a training and empowerment programme for youths in Kogi East Senatorial District in November 2024, held in collaboration with partner agencies.",
    date: "2024-11-13",
    category: "Empowerment",
    image: photos.youthEmpowerment.src,
    position: photos.youthEmpowerment.position,
    featured: false,
  },
  {
    slug: "community-address",
    title: "Community address in Kogi East",
    excerpt:
      "Residents gather outdoors for an address during a constituency engagement.",
    content:
      "Residents gathered outdoors while a speaker addressed them during a constituency engagement in Kogi East.",
    category: "Constituency",
    image: photos.communityAddress.src,
    position: photos.communityAddress.position,
    featured: false,
  },
  {
    slug: "official-engagement",
    title: "Official engagement",
    excerpt: "Sen. Jibrin Isah with colleagues at an official engagement.",
    content:
      "Sen. Jibrin Isah joined colleagues for an official engagement.",
    category: "Official Engagement",
    image: photos.officialMeeting.src,
    position: photos.officialMeeting.position,
    featured: false,
  },
];

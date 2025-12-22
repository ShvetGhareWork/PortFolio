// Featured Logos Data
export interface FeaturedLogo {
  id: string;
  name: string;
  logo: string;
  description: string;
  link?: string;
  category: "company" | "platform" | "publication" | "community";
}

export const featuredLogos: FeaturedLogo[] = [
  {
    id: "1",
    name: "GitHub",
    logo: "/logos/github.svg",
    description: "Active open source contributor",
    link: "https://github.com",
    category: "platform"
  },
  {
    id: "2",
    name: "Stack Overflow",
    logo: "/logos/stackoverflow.svg",
    description: "Top contributor in JavaScript",
    link: "https://stackoverflow.com",
    category: "community"
  },
  {
    id: "3",
    name: "Dev.to",
    logo: "/logos/devto.svg",
    description: "Technical writer and educator",
    link: "https://dev.to",
    category: "platform"
  },
  {
    id: "4",
    name: "Hashnode",
    logo: "/logos/hashnode.svg",
    description: "Published technical articles",
    link: "https://hashnode.com",
    category: "publication"
  },
  {
    id: "5",
    name: "Product Hunt",
    logo: "/logos/producthunt.svg",
    description: "Featured product launches",
    link: "https://producthunt.com",
    category: "platform"
  },
  {
    id: "6",
    name: "Indie Hackers",
    logo: "/logos/indiehackers.svg",
    description: "Community member",
    link: "https://indiehackers.com",
    category: "community"
  }
];

export function getFeaturedLogos(): FeaturedLogo[] {
  return featuredLogos;
}

export function getLogosByCategory(category: FeaturedLogo["category"]): FeaturedLogo[] {
  return featuredLogos.filter(logo => logo.category === category);
}

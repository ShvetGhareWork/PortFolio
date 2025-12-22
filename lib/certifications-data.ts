// Certifications Data
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  badgeImage?: string;
  skills: string[];
}

export const certificationsData: Certification[] = [
  {
    id: "1",
    title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    issuer: "Udemy",
    issueDate: "2025-06",
    expiryDate: "2035-12",
    verificationUrl: "https://www.udemy.com/certificate/",
    badgeImage: "/certifications/udemy-react.png",
    skills: ["React.js", "Next.js", "Redux", "Web Development"]
  },
  {
    id: "2",
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    issuer: "Udemy",
    issueDate: "2025-07",
    verificationUrl: "https://www.udemy.com/certificate/",
    badgeImage: "/certifications/udemy-node.png",
    skills: ["Node.js", "Express.js", "MongoDB", "Backend Development"]
  },
  {
    id: "3",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "2025-06",
    verificationUrl: "https://aws.amazon.com/training/",
    badgeImage: "/certifications/aws.png",
    skills: ["AWS", "Cloud Computing", "Cloud Architecture"]
  },
  {
    id: "4",
    title: "Build Real World AI Applications with Gemini and Imagen Skill Badge",
    issuer: "Google",
    issueDate: "2025-06",
    verificationUrl: "https://www.cloudskillsboost.google/",
    badgeImage: "/certifications/google-gemini.png",
    skills: ["Gemini AI", "Imagen", "AI Development", "Google Cloud"]
  },
  {
    id: "5",
    title: "Prompt Design in Vertex AI Skill Badge",
    issuer: "Google",
    issueDate: "2025-06",
    verificationUrl: "https://www.cloudskillsboost.google/",
    badgeImage: "/certifications/google-vertex.png",
    skills: ["Vertex AI", "Prompt Engineering", "AI/ML", "Google Cloud"]
  },
  {
    id: "6",
    title: "Introduction to MongoDB (For Students)",
    issuer: "MongoDB",
    issueDate: "2025-06",
    credentialId: "MDByqkotqsi4c",
    verificationUrl: "https://learn.mongodb.com/",
    badgeImage: "/certifications/mongodb-intro.png",
    skills: ["MongoDB", "NoSQL", "Database Design"]
  },
  {
    id: "7",
    title: "MongoDB Basics for Students",
    issuer: "MongoDB",
    issueDate: "2025-06",
    verificationUrl: "https://learn.mongodb.com/",
    badgeImage: "/certifications/mongodb-basics.png",
    skills: ["MongoDB", "Database Management", "NoSQL"]
  }
];

export function getCertifications(): Certification[] {
  return certificationsData;
}

export function getActiveCertifications(): Certification[] {
  const now = new Date();
  return certificationsData.filter(cert => {
    if (!cert.expiryDate) return true;
    return new Date(cert.expiryDate) > now;
  });
}

export function getCertificationsByIssuer(issuer: string): Certification[] {
  return certificationsData.filter(cert => cert.issuer === issuer);
}

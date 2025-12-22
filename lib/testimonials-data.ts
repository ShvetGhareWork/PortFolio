// Testimonials Data Structure
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  date: string;
  linkedIn?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Senior Product Manager",
    company: "TechCorp Inc.",
    image: "/testimonials/sarah.jpg",
    quote: "Working with this developer was an absolute pleasure. Their attention to detail and ability to translate complex requirements into elegant solutions is remarkable. The project was delivered ahead of schedule with exceptional quality.",
    rating: 5,
    date: "2024-11",
    linkedIn: "https://linkedin.com/in/sarahjohnson"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "StartupHub",
    image: "/testimonials/michael.jpg",
    quote: "Exceptional technical skills combined with great communication. They took our MVP from concept to production in record time. The code quality and architecture decisions have scaled beautifully as we've grown.",
    rating: 5,
    date: "2024-10",
    linkedIn: "https://linkedin.com/in/michaelchen"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Lead Designer",
    company: "Creative Studios",
    image: "/testimonials/emily.jpg",
    quote: "A rare developer who truly understands design. They brought our Figma designs to life with pixel-perfect precision and added thoughtful interactions that enhanced the user experience beyond our initial vision.",
    rating: 5,
    date: "2024-09",
    linkedIn: "https://linkedin.com/in/emilyrodriguez"
  },
  {
    id: "4",
    name: "David Park",
    role: "Engineering Manager",
    company: "DataFlow Systems",
    image: "/testimonials/david.jpg",
    quote: "Outstanding problem-solving abilities and a proactive approach to challenges. They identified and resolved potential scalability issues before they became problems. A true asset to any development team.",
    rating: 5,
    date: "2024-08",
    linkedIn: "https://linkedin.com/in/davidpark"
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "Founder & CEO",
    company: "EcoTech Solutions",
    image: "/testimonials/lisa.jpg",
    quote: "They transformed our outdated platform into a modern, responsive application that our users love. The performance improvements were dramatic, and the new features have directly contributed to our 40% growth this quarter.",
    rating: 5,
    date: "2024-07",
    linkedIn: "https://linkedin.com/in/lisathompson"
  },
  {
    id: "6",
    name: "James Wilson",
    role: "Technical Lead",
    company: "FinanceHub",
    image: "/testimonials/james.jpg",
    quote: "Incredibly reliable and professional. They handled our complex financial data requirements with expertise, ensuring security and compliance at every step. I wouldn't hesitate to work with them again.",
    rating: 5,
    date: "2024-06",
    linkedIn: "https://linkedin.com/in/jameswilson"
  }
];

export function getTestimonials(): Testimonial[] {
  return testimonialsData;
}

export function getFeaturedTestimonials(count: number = 3): Testimonial[] {
  return testimonialsData.slice(0, count);
}

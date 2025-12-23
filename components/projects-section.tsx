"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/lib/projects-data";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Create React App",
    description:
      "An officially supported way to create single-page React applications. Sets up a modern web app with no build configuration, allowing developers to focus on code.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", // developer coding concept
    tags: ["React", "JavaScript", "Webpack", "Babel"],
    category: "Development Tool",
    github: "https://github.com/facebook/create-react-app",
    live: "https://create-react-app.dev/",
    impact: {
      metric: "Zero-Config",
      description: "Simplified React project setup for beginners",
      performance: "Streamlined Development",
    },
  },
  {
    id: 2,
    title: "1Hub - Formula 1 Analytics Platform",
    description:
      "A production-ready MERN + Next.js Formula 1 analytics website with historical data and interactive visualizations.",
image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80",
    tags: ["Next.js", "Node.js", "MongoDB", "Python", "AI/ML"],
    category: "Full-Stack",
    github: "https://github.com/ShvetGhareWork/F1Hub",
    live: "https://formula1-hub-frontend.vercel.app/",
    impact: {
      metric: "1950-2025 Data",
      description: "Real-time analytics and interactive visualizations",
      performance: "Interactive Charts & Dashboards",
    },
  },
  {
    id: 3,
    title: "AI-Enhanced E-Commerce Platform",
    description:
      "A full-stack e-commerce platform powered by AI for intelligent recommendations, smart search, and fraud detection.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg", // ecommerce analytics/dashboard
    tags: ["React", "Node.js", "MongoDB", "Razorpay", "AI/ML"],
    category: "Full-Stack",
    github: "https://github.com/ShvetGhareWork/AI-Enhanced-E-Commerce-Platform",
    live: "https://ai-enhanced-e-commerce-platform.vercel.app/",
    impact: {
      metric: "8 AI Algorithms",
      description: "Optimized search and fraud detection",
      performance: "95+ Lighthouse Score",
    },
  },
  {
    id: 4,
    title: "CareerPath-AI",
    description:
      "An AI-powered career recommendation system that analyzes skills and interests to personalize guidance.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg", // career guidance & planning
    tags: ["React", "Node.js", "MongoDB", "Python", "AI/ML"],
    category: "AI/ML",
    github: "https://github.com/ShvetGhareWork/CareerPath-AI-Recommender",
    live: "https://career-path-ai-recommender.vercel.app/",
    impact: {
      metric: "AI-Powered",
      description: "Personalized career guidance",
      performance: "Real-time Recommendations",
    },
  },
  {
    id: 5,
    title: "Bug Bounty Simulation",
    description:
      "A curated platform for security enthusiasts to discover and practice bug bounty programs.",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg", // security / bug tracking
    tags: ["Next.js", "Node.js", "DB"],
    category: "Full-Stack",
    github: "https://github.com/ShvetGhareWork/BugBounty",
    live: "https://bug-bounty-frontend.vercel.app/",
    impact: {
      metric: "Security Platform",
      description: "Bug bounty program tracking",
      performance: "Organized Dashboard",
    },
  },
  {
    id: 6,
    title: "Stock Price Predictor",
    description:
      "An AI-powered stock market prediction model using machine learning algorithms.",
    image:
      "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg", // stock market chart concept
    tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    category: "AI/ML",
    github: "https://github.com/ShvetGhareWork/stockpricepredictor",
    live: "#",
    impact: {
      metric: "ML Predictions",
      description: "Historical data forecasting",
      performance: "Accurate Models",
    },
  },
  {
    id: 7,
    title: "AI Virtual Piano",
    description:
      "A computer vision-based AI project detecting hand gestures and playing virtual piano keys.",
    image:
      "https://images.pexels.com/photos/164712/pexels-photo-164712.jpeg", // hand gestures piano
    tags: ["Python", "OpenCV", "AI/ML"],
    category: "AI/ML",
    github: "https://github.com/ShvetGhareWork/Opencvpiano",
    live: "#",
    impact: {
      metric: "Real-Time Detection",
      description: "Hand gesture recognition",
      performance: "30+ FPS Processing",
    },
  },
  {
    id: 8,
    title: "ChargeStation",
    description:
      "A full-stack web app to locate and manage electric vehicle charging stations in real-time.",
    image:
      "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg", // EV charging stations map
    tags: ["Vue.js", "MongoDB", "CSS", "Vercel"],
    category: "Full-Stack",
    github: "https://github.com/ShvetGhareWork/ChargingStations",
    live: "https://charging-stations-frontend.vercel.app/",
    impact: {
      metric: "Location-Based",
      description: "Real-time EV station mapping",
      performance: "Interactive Maps",
    },
  },
  {
    id: 9,
    title: "Aniverse",
    description:
      "An interactive anime listing and information platform with a structured database.",
    image:
      "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg", // anime posters & listing
    tags: ["React", "Javascript", "Tailwind CSS"],
    category: "Full-Stack",
    github: "https://github.com/ShvetGhareWork/AniVerse",
    live: "https://ani-verse-red.vercel.app/",
    impact: {
      metric: "1000+ Anime",
      description: "Searchable anime database",
      performance: "Fast Load Times",
    },
  },
  {
    id: 10,
    title: "Creative Portfolio",
    description:
      "A stunning portfolio website for a creative agency with immersive animations.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg", // portfolio showcase UI
    tags: ["Next.js", "Typescript", "MongoDB", "Node.js"],
    category: "Design",
    github: "#",
    live: "#",
    impact: {
      metric: "60 FPS Animations",
      description: "Smooth interactions",
      performance: "Fully Responsive",
    },
  },
  {
    id: 11,
    title: "Use POPCORN",
    description: "A full-stack movie recommendation app with sleek UI.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=80",
    tags: ["Next.js", "Node.js", "DB"],
    category: "Full-Stack",
    github: "https://github.com/ShvetGhareWork/Usepopcorn",
    live: "https://v0-responsive-website-redesign-khaki.vercel.app/",
    impact: {
      metric: "Smart Recommendations",
      description: "Personalized movie suggestions",
      performance: "Real-time Updates",
    },
  },
  {
    id: 12,
    title: "Image to Poem Generator",
    description:
      "An AI web app that generates poems from uploaded images using Gemini API.",
image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80",
    tags: ["React", "Python", "Generative AI"],
    category: "AI/ML",
    github: "https://github.com/ShvetGhareWork/PoemAnyPoet",
    live: "https://poem-any-poet-olive.vercel.app/",
    impact: {
      metric: "AI-Powered",
      description: "Image-to-poem generation",
      performance: "< 2s Response Time",
    },
  },
];

const categories = ["All", "Full-Stack", "AI/ML", "Mobile", "Design", "IoT"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="from-purple-600 to-pink-600 bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, featuring innovative solutions and
            cutting-edge technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "hover:bg-purple-50 dark:hover:bg-purple-950"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group"
              >
                <Card className="overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
                    >
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Impact Metrics */}
                    {project.impact && (
                      <div className="mb-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-bold text-purple-700 dark:text-purple-300">
                            {project.impact.metric}
                          </span>
                          <Badge variant="outline" className="text-xs border-purple-300 dark:border-purple-700">
                            {project.impact.performance}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {project.impact.description}
                        </p>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern, full-featured e-commerce platform built with Next.js and Stripe integration.",
    image: "https://triftopia-frontend.vercel.app/Hero-pic.png",
    tags: ["React", "Javascript", "Razorpay", "Tailwind CSS"],
    category: "Full-Stack",
    github: "https://github.com/ShvetGhareWork/Triftopia-final",
    live: "https://triftopia-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Image to Poem Generator",
    description:
      "An innovative web app that generates poems based on uploaded images using AI.Uses Gemeni API for image analysis and poem generation.",
    image:
      "https://i.ytimg.com/vi/JJ-hkyK84Bg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLClk8NwAkqZv7k2jxaA6fm-ktwYug",
    tags: ["React", "Python", "Generative AI"],
    category: "AI/ML",
    github: "https://github.com/ShvetGhareWork/PoemAnyPoet",
    live: "https://poem-any-poet-olive.vercel.app/",
  },
  {
    id: 3,
    title: "Use POPCORN",
    description: "A full-stack movie recommendation app with sleek UI.",
    image:
      "https://www.tennessean.com/gcdn/-mm-/cdd1f619116f80c93da3c0ee0c1219a623da0fa4/c=732-0-3780-3048/local/-/media/2018/03/03/USATODAY/USATODAY/636556466259406124-AFP-AFP-11M370.jpg",
    tags: ["Next.js", "Node.js", "DB"],
    category: "Full-Stack",
    github: "https://github.com/ShvetGhareWork/Usepopcorn",
    live: "https://v0-responsive-website-redesign-khaki.vercel.app/",
  },
  {
    id: 4,
    title: "Creative Portfolio",
    description:
      "A stunning portfolio website for a creative agency with immersive animations.You are Lookiing at it BTW",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "Typescript", "MongoDB", "Node.js"],
    category: "Design",
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Aniverse",
    description:
      "AniVerse is an interactive anime listing and information platform, providing fans with a well-organized database",
    image:
      "https://i.pinimg.com/736x/50/08/ef/5008efb9df96969624d2674645027a3a.jpg",
    tags: ["React", "Javascript", "Razorpay", "Tailwind CSS"],
    category: "Full-Stack",
    github: "https://github.com/ShvetGhareWork/AniVerse",
    live: "https://ani-verse-red.vercel.app/",
  },
  {
    id: 6,
    title: "ChargeStation",
    description:
      "ChargingStations is a full-stack web application that helps users locate, add, and manage electric vehicle (EV) charging stations.",
    image:
      "https://images.unsplash.com/photo-1707341597123-c53bbb7e7f93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Vue.js", "MongoDB", "CSS", "Vercel"],
    category: "Full-Stack",
    github: "https://github.com/ShvetGhareWork/ChargingStations",
    live: "https://charging-stations-frontend.vercel.app/",
  },
  {
    id: 7,
    title: "Leafly Kitchen",
    description:
      "A recipe management and meal planner web app, allowing users to browse with a clean UI. Frontend Website only",
    image: "https://leafly-kitchen-gules.vercel.app/Cafe1.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full-Stack",
    github: "https://github.com/ShvetGhareWork/LeaflyKitchen",
    live: "https://leafly-kitchen-gules.vercel.app/",
  },
  {
    id: 8,
    title: "AI Virtual Piano",
    description:
      "A computer vision-based AI project using OpenCV to detect hand gestures and play virtual piano keys on screen in real-time.",
    image:
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "OpenCV", "AI/ML"],
    category: "AI/ML",
    github: "https://github.com/ShvetGhareWork/Opencvpiano",
    live: "#",
  },
  {
    id: 9,
    title: "Stock Price Predictor",
    description:
      "An AI-powered stock market prediction model using machine learning algorithms to forecast stock prices based on historical data.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    category: "AI/ML",
    github: "https://github.com/ShvetGhareWork/stockpricepredictor",
    live: "#",
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
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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

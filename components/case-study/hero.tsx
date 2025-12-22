"use client";

import { motion } from "framer-motion";
import { ProjectCaseStudy } from "@/lib/projects-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";

interface CaseStudyHeroProps {
  project: ProjectCaseStudy;
}

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            {project.category}
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            {project.subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="text-sm">
              <span className="font-semibold">Role:</span> {project.role}
            </div>
            <div className="text-sm">
              <span className="font-semibold">Timeline:</span> {project.timeline}
            </div>
            {project.team && (
              <div className="text-sm">
                <span className="font-semibold">Team:</span> {project.team}
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {project.links.live && (
              <Button
                variant="secondary"
                size="lg"
                asChild
              >
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Live
                </a>
              </Button>
            )}
            
            {project.links.github && (
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
              </Button>
            )}
            
            {project.links.demo && (
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

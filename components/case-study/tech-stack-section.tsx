"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCaseStudy } from "@/lib/projects-data";

interface TechStackSectionProps {
  techStack: ProjectCaseStudy['techStack'];
}

export function TechStackSection({ techStack }: TechStackSectionProps) {
  return (
    <section id="tech-stack">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Technology Stack</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600">
                      {category.category}
                    </Badge>
                  </h3>
                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                      >
                        <div className="font-semibold text-purple-600 dark:text-purple-400 mb-1">
                          {tech.name}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {tech.reason}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

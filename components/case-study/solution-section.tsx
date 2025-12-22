"use client";

import { motion } from "framer-motion";
import { Lightbulb, CheckCircle, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCaseStudy } from "@/lib/projects-data";

interface SolutionSectionProps {
  solution: ProjectCaseStudy['solution'];
}

export function SolutionSection({ solution }: SolutionSectionProps) {
  return (
    <section id="solution">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">{solution.title}</h2>
        </div>
        
        <Card className="mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-4">Technical Approach</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {solution.approach}
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solution.keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6 text-purple-600" />
              Architecture
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {solution.architecture.description}
            </p>
            {solution.architecture.diagram && (
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 flex items-center justify-center">
                <p className="text-gray-500">Architecture Diagram Placeholder</p>
                {/* Add actual diagram rendering here */}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

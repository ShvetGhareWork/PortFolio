"use client";

import { motion } from "framer-motion";
import { AlertCircle, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCaseStudy } from "@/lib/projects-data";

interface ProblemSectionProps {
  problem: ProjectCaseStudy['problem'];
}

export function ProblemSection({ problem }: ProblemSectionProps) {
  return (
    <section id="problem">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">{problem.title}</h2>
        </div>
        
        <Card className="mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-4">Context</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {problem.context}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-purple-600" />
              User Pain Points
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problem.painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">{point}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

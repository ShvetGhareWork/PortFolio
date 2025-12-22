"use client";

import { motion } from "framer-motion";
import { TrendingUp, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCaseStudy } from "@/lib/projects-data";

interface ImpactSectionProps {
  impact: ProjectCaseStudy['impact'];
}

export function ImpactSection({ impact }: ImpactSectionProps) {
  return (
    <section id="impact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">{impact.title}</h2>
        </div>
        
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {impact.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="font-semibold text-lg mb-2">{metric.label}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Outcomes */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Key Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {impact.outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-950/20"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">{outcome}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Testimonial */}
        {impact.testimonial && (
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-8">
              <Quote className="w-10 h-10 text-purple-600 mb-4" />
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-4">
                "{impact.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">{impact.testimonial.author}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {impact.testimonial.role}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </section>
  );
}

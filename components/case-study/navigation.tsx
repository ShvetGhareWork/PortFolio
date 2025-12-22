"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects-data";
import Link from "next/link";

interface CaseStudyNavigationProps {
  currentSlug: string;
}

export function CaseStudyNavigation({ currentSlug }: CaseStudyNavigationProps) {
  const allSlugs = getAllProjectSlugs();
  const currentIndex = allSlugs.indexOf(currentSlug);
  
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  
  const prevProject = prevSlug ? getProjectBySlug(prevSlug) : null;
  const nextProject = nextSlug ? getProjectBySlug(nextSlug) : null;

  return (
    <section id="navigation" className="border-t pt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Back to Projects */}
        <div className="text-center mb-8">
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <Link href="/#projects">
              <Grid className="w-5 h-5 mr-2" />
              Back to All Projects
            </Link>
          </Button>
        </div>
        
        {/* Prev/Next Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Previous Project */}
          {prevProject ? (
            <Link href={`/projects/${prevSlug}`}>
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <ArrowLeft className="w-4 h-4" />
                    Previous Project
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{prevProject.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {prevProject.subtitle}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <div></div>
          )}
          
          {/* Next Project */}
          {nextProject ? (
            <Link href={`/projects/${nextSlug}`}>
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-right">
                  <div className="flex items-center justify-end gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Next Project
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{nextProject.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {nextProject.subtitle}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

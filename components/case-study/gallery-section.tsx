"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Images, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProjectCaseStudy } from "@/lib/projects-data";

interface GallerySectionProps {
  gallery: ProjectCaseStudy['gallery'];
  title: string;
}

export function GallerySection({ gallery, title }: GallerySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  if (gallery.length === 0) return null;

  return (
    <section id="gallery">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
            <Images className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Project Gallery</h2>
        </div>
        
        <Card>
          <CardContent className="p-0">
            <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
              {/* Main Image/Video */}
              <div className="absolute inset-0 flex items-center justify-center">
                {gallery[currentIndex].type === 'image' || gallery[currentIndex].type === 'gif' ? (
                  <img
                    src={gallery[currentIndex].url || '/placeholder.svg'}
                    alt={gallery[currentIndex].alt}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Video Player Placeholder
                  </div>
                )}
              </div>
              
              {/* Navigation Arrows */}
              {gallery.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </>
              )}
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <p className="text-sm">{gallery[currentIndex].caption}</p>
              </div>
            </div>
            
            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="p-4 flex gap-2 overflow-x-auto">
                {gallery.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentIndex
                        ? 'border-purple-600 scale-105'
                        : 'border-gray-300 dark:border-gray-700'
                    }`}
                  >
                    <img
                      src={item.url || '/placeholder.svg'}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

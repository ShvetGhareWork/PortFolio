"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedLogos } from "@/lib/featured-logos-data";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function FeaturedSection() {
  const logos = getFeaturedLogos();

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Award className="w-3 h-3 mr-2" />
            Featured On
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured On
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Platforms and communities where I contribute
          </p>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="featured-logo-card p-6 h-full flex flex-col items-center justify-center text-center group cursor-pointer hover:scale-105 transition-transform">
                {logo.link ? (
                  <a
                    href={logo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center w-full"
                  >
                    {/* Logo placeholder - using text for now */}
                    <div className="w-16 h-16 mb-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl grayscale group-hover:grayscale-0 transition-all">
                      {logo.name.charAt(0)}
                    </div>
                    <div className="font-semibold text-sm mb-1">{logo.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {logo.description}
                    </div>
                  </a>
                ) : (
                  <>
                    <div className="w-16 h-16 mb-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl grayscale group-hover:grayscale-0 transition-all">
                      {logo.name.charAt(0)}
                    </div>
                    <div className="font-semibold text-sm mb-1">{logo.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {logo.description}
                    </div>
                  </>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

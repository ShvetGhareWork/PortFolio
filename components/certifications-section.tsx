"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCertifications } from "@/lib/certifications-data";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";

export default function CertificationsSection() {
  const certifications = getCertifications();

  const isActive = (expiryDate?: string) => {
    if (!expiryDate) return true;
    return new Date(expiryDate) > new Date();
  };

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
            Certifications
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Credentials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuously learning and validating expertise through industry-recognized certifications
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="certification-card p-6 h-full flex flex-col hover:scale-105 transition-transform">
                {/* Badge/Logo */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl">
                    <Award className="w-8 h-8" />
                  </div>
                  {isActive(cert.expiryDate) && (
                    <Badge variant="default" className="bg-green-500">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Active
                    </Badge>
                  )}
                </div>

                {/* Title & Issuer */}
                <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{cert.issuer}</p>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>
                    Issued {new Date(cert.issueDate).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4 flex-1">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Credential ID */}
                <div className="text-xs text-muted-foreground mb-4">
                  ID: {cert.credentialId}
                </div>

                {/* Verify Button */}
                {cert.verificationUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full group"
                  >
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify Credential
                      <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye, Star, Award, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const resumeStats = [
  { icon: Briefcase, label: "Years Experience", value: "2+" },
  { icon: Award, label: "Certifications", value: "5" },
  { icon: Star, label: "Projects Completed", value: "10+" },
  { icon: FileText, label: "Last Updated", value: "Jul 2025" },
];

const resumeHighlights = [
  "Full-Stack Development Expertise",
  "UI/UX Design Experience",
  "Team Leadership & Mentoring",
  "Open Source Contributions",
  "International Project Experience",
  "Continuous Learning & Certifications",
];

export function ResumeSection() {
  const handleDownload = () => {
    // In a real implementation, you would link to your actual PDF file
    // For now, this creates a placeholder download
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // You would upload your actual PDF here
    link.download = "Shvet_Ghare_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    // Open resume in new tab for preview
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Download My{" "}
            <span className="from-purple-600 to-pink-600 bg-clip-text">
              Resume
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get a comprehensive overview of my professional experience, skills,
            and achievements in a downloadable PDF format.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Resume Preview Image */}
                  <div className="aspect-[8.5/11] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center relative overflow-hidden">
                    <img
                      src="/placeholder.svg?height=600&width=460"
                      alt="Resume Preview"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay for better visual */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                    {/* Preview Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        <FileText className="w-3 h-3 mr-1" />
                        PDF
                      </Badge>
                    </div>
                  </div>

                  {/* Quick Actions Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4 transition-opacity duration-300"
                  >
                    <Button
                      onClick={handlePreview}
                      variant="secondary"
                      size="sm"
                      className="bg-white/90 text-gray-900 hover:bg-white"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button
                      onClick={handleDownload}
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Resume Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Download Section */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Professional Resume</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                My comprehensive resume includes detailed information about my
                professional experience, technical skills, education,
                certifications, and notable projects. Perfect for HR departments
                and hiring managers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button
                  onClick={handlePreview}
                  variant="outline"
                  size="lg"
                  className="border-2 hover:bg-purple-50 dark:hover:bg-purple-950 px-8 py-3 bg-transparent"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Preview Online
                </Button>
              </div>
            </div>

            {/* Resume Stats */}
            <div className="grid grid-cols-2 gap-4">
              {resumeStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center"
                >
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                    <stat.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume Highlights */}
            <div>
              <h4 className="text-xl font-semibold mb-4">What's Included</h4>
              <div className="space-y-3">
                {resumeHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                📄 File Information
              </h4>
              <div className="text-sm text-purple-700 dark:text-purple-400 space-y-1">
                <p>• Format: PDF (Optimized for ATS systems)</p>
                <p>• Size: ~1.5 MB</p>
                <p>• Pages: 1</p>
                <p>• Last Updated: July 2025</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                After reviewing my resume, if you think I'd be a great fit for
                your team or project, let's start a conversation about how we
                can work together.
              </p>
              <Button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="secondary"
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

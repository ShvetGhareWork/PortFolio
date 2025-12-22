"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Download, Mail, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRecruiterMode } from "@/hooks/use-recruiter-mode";

export function HiringCTASection() {
  const { isRecruiterMode } = useRecruiterMode();

  return (
    <section
      id="hiring-cta"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isRecruiterMode ? 0.3 : 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-2xl bg-white dark:bg-gray-900 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Column - Main CTA */}
                <div className="p-8 lg:p-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: isRecruiterMode ? 0.3 : 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                      Open to Opportunities
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4   from-purple-600 to-pink-600 bg-clip-text ">
                      Let's Build Something Amazing Together
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      I'm actively seeking new opportunities where I can contribute my skills in full-stack development, AI integration, and creating exceptional user experiences.
                    </p>

                    {/* Availability Info */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <MapPin className="w-5 h-5 mr-3 text-purple-600" />
                        <span>Remote / Hybrid / On-site (Flexible)</span>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <Clock className="w-5 h-5 mr-3 text-purple-600" />
                        <span>Available: Immediate / 2 weeks notice</span>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <Calendar className="w-5 h-5 mr-3 text-purple-600" />
                        <span>Full-time / Contract opportunities</span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                        onClick={() => window.open("https://calendly.com/your-calendly-link", "_blank")}
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Schedule Interview
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950"
                        onClick={() => {
                          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - Resume Downloads & Links */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-8 lg:p-12">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: isRecruiterMode ? 0.3 : 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold mb-6">Download Resume</h3>
                    
                    {/* Role-Specific Resumes */}
                    <div className="space-y-3 mb-8">
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left border-2 hover:border-purple-600 hover:bg-white dark:hover:bg-gray-800"
                        asChild
                      >
                        <a href="/resume.pdf" download="Resume_FullStack_Developer.pdf">
                          <Download className="w-4 h-4 mr-3" />
                          <div>
                            <div className="font-semibold">Full-Stack Developer</div>
                            <div className="text-xs text-gray-500">Comprehensive technical resume</div>
                          </div>
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full justify-start text-left border-2 hover:border-purple-600 hover:bg-white dark:hover:bg-gray-800"
                        asChild
                      >
                        <a href="/resume.pdf" download="Resume_Frontend_Developer.pdf">
                          <Download className="w-4 h-4 mr-3" />
                          <div>
                            <div className="font-semibold">Frontend Specialist</div>
                            <div className="text-xs text-gray-500">UI/UX focused resume</div>
                          </div>
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full justify-start text-left border-2 hover:border-purple-600 hover:bg-white dark:hover:bg-gray-800"
                        asChild
                      >
                        <a href="/resume.pdf" download="Resume_AI_ML_Developer.pdf">
                          <Download className="w-4 h-4 mr-3" />
                          <div>
                            <div className="font-semibold">AI/ML Engineer</div>
                            <div className="text-xs text-gray-500">AI projects highlighted</div>
                          </div>
                        </a>
                      </Button>
                    </div>

                    {/* Quick Links */}
                    <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
                      <h4 className="font-semibold mb-4">Connect With Me</h4>
                      <div className="flex gap-3">
                        <Button
                          size="icon"
                          variant="outline"
                          className="border-2 hover:border-purple-600"
                          asChild
                        >
                          <a
                            href="https://www.linkedin.com/in/shvetghare1234/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          className="border-2 hover:border-purple-600"
                          asChild
                        >
                          <a
                            href="mailto:shvetgharework@gmail.com"
                            aria-label="Email"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Notice Period Badge */}
                    <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Notice Period:</span>
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-0">
                          Immediate / 2 Weeks
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

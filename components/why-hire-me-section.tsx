"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Target,
  TrendingUp,
  Users,
  Award,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRecruiterMode } from "@/hooks/use-recruiter-mode";

const valuePropositions = [
  {
    icon: Zap,
    title: "Rapid Execution",
    description:
      "Ship production-ready features 40% faster with clean, maintainable code",
    metric: "40% faster delivery",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description:
      "Transform complex requirements into elegant solutions that scale",
    metric: "10+ complex projects",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Performance Focused",
    description:
      "Optimize applications for 60 FPS interactions and sub-3s load times",
    metric: "95+ Lighthouse scores",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Foster cross-functional teamwork and mentor junior developers",
    metric: "Strong communicator",
    color: "from-purple-500 to-pink-500",
  },
];

const achievements = [
  "Built full-stack e-commerce platform handling 10k+ products",
  "Developed AI-powered applications using Gemini API",
  "Optimized web performance achieving 95+ Lighthouse scores",
  "Created responsive designs supporting 5+ screen sizes",
  "Implemented real-time features with WebSocket connections",
  "Deployed production apps on Vercel, AWS, and cloud platforms",
];

const strengths = [
  "Full-Stack Development",
  "React & Next.js Expert",
  "TypeScript Proficiency",
  "UI/UX Design",
  "Performance Optimization",
  "AI/ML Integration",
  "Database Design",
  "DevOps & CI/CD",
];

export function WhyHireMeSection() {
  const { isRecruiterMode } = useRecruiterMode();

  return (
    <section
      id="why-hire-me"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isRecruiterMode ? 0.3 : 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why{" "}
            <span className="from-purple-600 to-pink-600 bg-clip-text ">
              Hire Me?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I bring a unique combination of technical expertise, creative
            problem-solving, and a proven track record of delivering
            high-impact solutions.
          </p>
        </motion.div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {valuePropositions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: isRecruiterMode ? 0.2 : 0.6,
                delay: isRecruiterMode ? 0 : index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={isRecruiterMode ? {} : { y: -8 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                    {item.description}
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300"
                  >
                    {item.metric}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements & Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: isRecruiterMode ? 0.3 : 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Key Achievements</h3>
                </div>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: isRecruiterMode ? 0.2 : 0.4,
                        delay: isRecruiterMode ? 0 : index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Core Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: isRecruiterMode ? 0.3 : 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Core Strengths</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={strength}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: isRecruiterMode ? 0.2 : 0.4,
                        delay: isRecruiterMode ? 0 : index * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={isRecruiterMode ? {} : { scale: 1.05 }}
                    >
                      <Badge
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium border-2 border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors"
                      >
                        {strength}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isRecruiterMode ? 0.3 : 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="border-0 shadow-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Build Something Amazing Together?
              </h3>
              <p className="text-lg mb-6 text-purple-100">
                Let's discuss how I can contribute to your team's success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Get In Touch
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition-colors inline-block border-2 border-white"
                >
                  Download Resume
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

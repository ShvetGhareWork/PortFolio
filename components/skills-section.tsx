"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Server,
  Globe,
  Layers,
  Cpu,
  LineChart,
  Users,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  years: number;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 80, years: 2 },
      { name: "Next.js", level: 70, years: 1 },
      { name: "TypeScript", level: 65, years: 1 },
      { name: "HTML/CSS", level: 95, years: 3 },
      { name: "Tailwind CSS", level: 80, years: 3 },
      { name: "Framer Motion", level: 50, years: 0.5 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 65, years: 1 },
      { name: "Express", level: 70, years: 1 },
      { name: "Python", level: 65, years: 2 },
      // { name: "GraphQL", level: 70, years: 2 },
      { name: "REST API", level: 70, years: 1 },
      // { name: "Serverless", level: 80, years: 3 },
    ],
  },
  {
    id: "database",
    name: "Database",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "MongoDB", level: 75, years: 2 },
      { name: "PostgreSQL", level: 80, years: 1 },
      // { name: "Firebase", level: 85, years:  },
      // { name: "Supabase", level: 75, years: 2 },
      // { name: "Redis", level: 70, years: 2 },
      // { name: "Prisma", level: 80, years: 2 },
    ],
  },
  {
    id: "design",
    name: "Design",
    icon: Palette,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Figma", level: 40, years: 1 },
      { name: "Adobe XD", level: 45, years: 1 },
      { name: "Photoshop", level: 45, years: 1 },
      { name: "Illustrator", level: 30, years: 1 },
      { name: "UI/UX Design", level: 35, years: 1 },
      { name: "Design Systems", level: 30, years: 1 },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    icon: Cpu,
    color: "from-yellow-500 to-amber-500",
    skills: [
      { name: "Docker", level: 80, years: 1 },
      { name: "CI/CD", level: 75, years: 1 },
      { name: "AWS", level: 70, years: 1 },
      { name: "Vercel", level: 90, years: 1 },
      { name: "GitHub Actions", level: 85, years: 1 },
      { name: "Kubernetes", level: 65, years: 1 },
    ],
  },
  {
    id: "other",
    name: "Other",
    icon: Globe,
    color: "from-indigo-500 to-violet-500",
    skills: [
      { name: "SEO", level: 80, years: 1 },
      { name: "Accessibility", level: 65, years: 2 },
      { name: "Performance", level: 70, years: 3 },
      { name: "Testing", level: 85, years: 1 },
      { name: "Agile/Scrum", level: 55, years: 1 },
      { name: "Technical Writing", level: 50, years: 0 },
    ],
  },
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            across various technologies and tools.
          </p>
        </motion.div>

        <Tabs
          defaultValue="frontend"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center gap-1 py-3 px-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
                >
                  <category.icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center mb-6">
                          <div
                            className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}
                          >
                            <category.icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold">
                            {category.name} Technologies
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          As I continue learning {category.name.toLowerCase()}{" "}
                          technologies, I enjoy experimenting with different
                          tools and frameworks while steadily growing my
                          knowledge and project experience.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          {category.skills.slice(0, 3).map((skill) => (
                            <div
                              key={skill.name}
                              className="flex flex-col"
                              onMouseEnter={() => setHoveredSkill(skill.name)}
                              onMouseLeave={() => setHoveredSkill(null)}
                            >
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">
                                  {skill.name}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="relative h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                <motion.div
                                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, ease: "easeOut" }}
                                />
                              </div>
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{
                                  opacity: hoveredSkill === skill.name ? 1 : 0,
                                  height:
                                    hoveredSkill === skill.name ? "auto" : 0,
                                }}
                                className="text-xs text-gray-500 dark:text-gray-400 mt-1"
                              >
                                {skill.years}{" "}
                                {skill.years === 1 ? "year" : "years"}{" "}
                                experience
                              </motion.div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        {category.skills.slice(3).map((skill) => (
                          <motion.div
                            key={skill.name}
                            className="relative"
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {skill.level}%
                              </span>
                            </div>
                            <Progress
                              value={skill.level}
                              className="h-2 bg-gray-100 dark:bg-gray-700"
                              indicatorClassName={`bg-gradient-to-r ${category.color}`}
                            />
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{
                                opacity: hoveredSkill === skill.name ? 1 : 0,
                                height:
                                  hoveredSkill === skill.name ? "auto" : 0,
                              }}
                              className="text-xs text-gray-500 dark:text-gray-400 mt-1"
                            >
                              {skill.years}{" "}
                              {skill.years === 1 ? "year" : "years"} experience
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: LineChart, title: "Years Experience", value: "2+" },
            { icon: Layers, title: "Projects Completed", value: "10+" },
            { icon: Globe, title: "Countries Worked With", value: "0" },
            { icon: Users, title: "Happy Clients", value: "0" },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-0 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "Proficient in architecting scalable, maintainable applications using React, Next.js, Node.js, and modern web frameworks.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Product Design",
    description:
      "Crafting engaging, user-centric interfaces with Figma, Adobe Creative Suite, and a keen eye for design systems.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    description:
      "Optimizing front-end and back-end performance for seamless, high-speed user experiences on web and mobile platforms.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Team Collaboration & Mentorship",
    description:
      "Driving cross-functional teams, fostering a collaborative culture, and mentoring developers to deliver impactful products.",
    color: "from-green-500 to-emerald-500",
  },
];

const timeline = [
  {
    year: "2025",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovation Co.",
    description:
      "Leading development of next-generation web applications using cutting-edge technologies.",
  },
  {
    year: "2023",
    title: "Full-Stack Developer",
    company: "Digital Solutions Inc.",
    description:
      "Developed and maintained multiple client projects, focusing on performance and user experience.",
  },
  {
    year: "2021",
    title: "Frontend Developer",
    company: "Creative Agency",
    description:
      "Specialized in creating responsive, interactive web interfaces for various clients.",
  },
  {
    year: "2020",
    title: "Computer Science Graduate",
    company: "University of Technology",
    description:
      "Graduated with honors, specializing in software engineering and web development.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About{" "}
            <span className=" from-purple-600 to-pink-600 bg-clip-text ">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm an aspiring full-stack developer and designer passionate about
            building clean, user-friendly digital experiences. Currently
            expanding my skills in modern web technologies like React, Next.js,
            and Node.js, while actively exploring cloud computing and DevOps
            fundamentals. I love turning ideas into interactive, meaningful
            products and am eager to keep growing in this ever-evolving tech
            space.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white dark:bg-gray-800">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">My Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <div className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                        {item.company}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

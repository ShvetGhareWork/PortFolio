"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Tv2 as Tv,
  Activity,
  Film,
  Camera,
  Code2,
  Book,
  Plane,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const personalInfo = {
  name: "Shvet Ghare",
  title: "Thriving Excellence in Development",
  location: "Mumbai, India",
  age: 19,
  bio: "I'm a passionate developer who believes in the power of technology to solve real-world problems. When I'm not coding, you'll find me exploring new coffee shops, capturing moments through photography, or planning my next adventure. I love the intersection of creativity and technology, which is why I enjoy both development and design.",
  longBio:
    "My journey into tech started during college. I'm fascinated by how good design and clean code can create experiences that truly matter to people. I believe in continuous learning, which is why I'm always exploring new technologies and methodologies. Outside of work, I'm an avid photographer and travel enthusiast - experiences that have taught me to see the world from different perspectives, a skill that greatly benefits my approach to problem-solving in development.",
};

const interests = [
  {
    icon: Camera,
    name: "Photography",
    description: "Street and landscape photography",
  },
  {
    icon: Book,
    name: "Reading",
    description: "Sci-fi, tech, and personal growth books",
  },
  {
    icon: Film,
    name: "Netflix & Movies",
    description: "Binge-watching thrillers, dramas, and mind-benders",
  },
  {
    icon: Activity,
    name: "Marathon Running",
    description: "Training for long-distance endurance runs",
  },
  {
    icon: Tv,
    name: "Anime",
    description: "Following seasonal anime and classics",
  },
  {
    icon: Code2,
    name: "Side Projects",
    description: "Building passion projects and experimenting with new tech",
  },
];

const funFacts = [
  "Built my first website at age 16",
  "Speaks 3 languages fluently",
  "I ran collection of 500+ cards of Pokemon ",
  "Completed a marathon in under 4 hours",
  "Can solve a Rubik's cube in under 2 minutes",
  "Enjoys painting and digital art",
];

const achievements = [
  {
    year: "2024",
    title: "Speaker at TechConf 2024",
    description: "Presented on modern web development practices",
  },
  {
    year: "2023",
    title: "Open Source Contributor",
    description: "Contributed to 10+ major open source projects",
  },
  {
    year: "2022",
    title: "Hackathon Winner",
    description: "1st place at Global Innovation Hackathon",
  },
  {
    year: "2021",
    title: "Mentor of the Year",
    description: "Recognized for mentoring junior developers",
  },
];

export function PersonalSection() {
  return (
    <section
      id="personal"
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
            Get to Know{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Beyond the code and designs, here's a glimpse into who I am as a
            person and what drives my passion for technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="h-32 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden bg-gray-200 dark:bg-gray-700"
                    >
                      <img
                        src="https://avatars.githubusercontent.com/u/202398354?v=4"
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
                <div className="pt-20 pb-6 px-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    {personalInfo.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                    {personalInfo.title}
                  </p>
                  <div className="flex items-center justify-center text-gray-600 dark:text-gray-300 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center justify-center text-gray-600 dark:text-gray-300 mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    {personalInfo.age} years old
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {personalInfo.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bio and Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></div>
                  My Story
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {personalInfo.longBio}
                </p>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                  Fun Facts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {funFacts.map((fact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {fact}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Interests & Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Interests & Hobbies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <interest.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      {interest.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {interest.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Timeline */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Recent Achievements
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
            {achievements.map((achievement, index) => (
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
                  <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        {achievement.year}
                      </Badge>
                      <h4 className="text-xl font-bold mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {achievement.description}
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

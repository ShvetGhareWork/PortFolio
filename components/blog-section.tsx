"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2025",
    excerpt:
      "Exploring the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Technology",
    slug: "future-web-development-2025",
  },
  {
    id: 2,
    title: "Building Scalable React Applications",
    excerpt:
      "Best practices and architectural patterns for creating maintainable and scalable React applications that grow with your business.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2025-01-10",
    readTime: "8 min read",
    category: "React",
    slug: "scalable-react-applications",
  },
  {
    id: 3,
    title: "Design Systems That Actually Work",
    excerpt:
      "How to create and maintain design systems that improve consistency, efficiency, and collaboration across your entire organization.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Design",
    slug: "design-systems-that-work",
  },
  {
    id: 4,
    title: "Performance Optimization Techniques",
    excerpt:
      "Advanced techniques for optimizing web application performance, including code splitting, lazy loading, and caching strategies.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-12-28",
    readTime: "7 min read",
    category: "Performance",
    slug: "performance-optimization-techniques",
  },
];

export function BlogSection() {
  return (
    <section
      id="blog"
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
            Latest{" "}
            <span className="from-purple-600 to-pink-600 bg-clip-text">
              Articles
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development, design, and
            technology trends. Haven't Written a Blog Post Yet, but Here are
            Some Ideas! Also looks good for UI Purpose...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className="self-start p-0 h-auto font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 hover:bg-purple-50 dark:hover:bg-purple-950"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

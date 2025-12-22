"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Briefcase, Code, Users, GitCommit } from "lucide-react";

interface Metric {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
  color: string;
  bgColor: string;
}

export default function SocialProofSection() {
  const metrics: Metric[] = [
    {
      icon: Briefcase,
      value: 50,
      label: "Projects Completed",
      suffix: "+",
      color: "text-blue-600",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Code,
      value: 5,
      label: "Years Experience",
      suffix: "+",
      color: "text-purple-600",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Users,
      value: 30,
      label: "Happy Clients",
      suffix: "+",
      color: "text-green-600",
      bgColor: "bg-green-500/10"
    },
    {
      icon: GitCommit,
      value: 2500,
      label: "Code Commits",
      suffix: "+",
      color: "text-orange-600",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <Card className="social-proof-card p-6 text-center hover:scale-105 transition-transform">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-full ${metric.bgColor} mb-4`}>
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </div>

                {/* Value */}
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${metric.color}`}>
                  <CountUp
                    end={metric.value}
                    duration={2.5}
                    separator=","
                    suffix={metric.suffix}
                  />
                </div>

                {/* Label */}
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {metric.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

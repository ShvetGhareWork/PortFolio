"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitBranch, Star, Users, GitCommit, FileCode, ExternalLink } from "lucide-react";
import { fetchGitHubStats, type GitHubStats } from "@/lib/github-stats";
import { motion } from "framer-motion";
import CountUp from "react-countup";

interface GitHubStatsSectionProps {
  username: string;
}

export default function GitHubStatsSection({ username }: GitHubStatsSectionProps) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      setLoading(true);
      const data = await fetchGitHubStats(username);
      setStats(data);
      setLoading(false);
    }

    loadStats();
  }, [username]);

  const statCards = [
    {
      icon: GitBranch,
      label: "Public Repos",
      value: stats?.totalRepos || 0,
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Star,
      label: "Total Stars",
      value: stats?.totalStars || 0,
      color: "text-yellow-600",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Users,
      label: "Followers",
      value: stats?.followers || 0,
      color: "text-purple-600",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: FileCode,
      label: "Public Gists",
      value: stats?.publicGists || 0,
      color: "text-green-600",
      bgColor: "bg-green-500/10",
    },
  ];

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
            <GitCommit className="w-3 h-3 mr-2" />
            GitHub Activity
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Open Source Contributions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Active contributor to the developer community with consistent engagement
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="github-stat-card p-6 text-center hover:scale-105 transition-transform">
                <div className={`inline-flex p-3 rounded-lg ${stat.bgColor} mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {loading ? (
                    <span className="text-muted-foreground">--</span>
                  ) : (
                    <CountUp end={stat.value} duration={2} separator="," />
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group"
          >
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch className="w-4 h-4 mr-2" />
              View Full GitHub Profile
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          {stats?.lastUpdated && (
            <p className="text-xs text-muted-foreground mt-4">
              Last updated: {new Date(stats.lastUpdated).toLocaleString()}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { generateContributionData, type ContributionDay } from "@/lib/github-stats";
import { motion } from "framer-motion";

export default function ContributionsHeatmap() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [selectedDay, setSelectedDay] = useState<ContributionDay | null>(null);

  useEffect(() => {
    const data = generateContributionData();
    setContributions(data);
  }, []);

  // Group contributions by week
  const weeks: ContributionDay[][] = [];
  let currentWeek: ContributionDay[] = [];
  
  contributions.forEach((day, index) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });
  
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  const getLevelColor = (level: number): string => {
    const colors = {
      0: "bg-gray-200 dark:bg-gray-800",
      1: "bg-green-200 dark:bg-green-900",
      2: "bg-green-400 dark:bg-green-700",
      3: "bg-green-600 dark:bg-green-500",
      4: "bg-green-800 dark:bg-green-300",
    };
    return colors[level as keyof typeof colors] || colors[0];
  };

  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);
  const currentStreak = calculateCurrentStreak(contributions);
  const longestStreak = calculateLongestStreak(contributions);

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
            Contribution Activity
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            365 Days of Code
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Consistent daily contributions to open source projects and personal development
          </p>
        </motion.div>

        <Card className="contributions-heatmap-card p-6 md:p-8">
          {/* Stats Summary */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600">
                {totalContributions}
              </div>
              <div className="text-sm text-muted-foreground">Total Contributions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">
                {currentStreak}
              </div>
              <div className="text-sm text-muted-foreground">Current Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600">
                {longestStreak}
              </div>
              <div className="text-sm text-muted-foreground">Longest Streak</div>
            </div>
          </div>

          {/* Heatmap */}
          <div className="overflow-x-auto">
            <div className="inline-flex gap-1">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <motion.div
                      key={day.date}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                      className="relative group"
                      onMouseEnter={() => setSelectedDay(day)}
                      onMouseLeave={() => setSelectedDay(null)}
                    >
                      <div
                        className={`w-3 h-3 rounded-sm ${getLevelColor(day.level)} 
                          hover:ring-2 hover:ring-purple-500 transition-all cursor-pointer`}
                      />
                      
                      {/* Tooltip */}
                      {selectedDay?.date === day.date && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-10">
                          <div className="bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                            <div className="font-semibold">{day.count} contributions</div>
                            <div className="text-gray-400">
                              {new Date(day.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-6">
            <span className="text-xs text-muted-foreground">Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`}
              />
            ))}
            <span className="text-xs text-muted-foreground">More</span>
          </div>
        </Card>
      </div>
    </section>
  );
}

function calculateCurrentStreak(contributions: ContributionDay[]): number {
  let streak = 0;
  for (let i = contributions.length - 1; i >= 0; i--) {
    if (contributions[i].count > 0) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

function calculateLongestStreak(contributions: ContributionDay[]): number {
  let longest = 0;
  let current = 0;
  
  contributions.forEach((day) => {
    if (day.count > 0) {
      current++;
      longest = Math.max(longest, current);
    } else {
      current = 0;
    }
  });
  
  return longest;
}

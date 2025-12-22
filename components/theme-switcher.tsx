"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Check } from "lucide-react";
import { useState } from "react";
import { useMultiTheme } from "@/hooks/use-multi-theme";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const themes = [
  {
    id: "light" as const,
    name: "Light",
    description: "Clean and bright",
    preview: "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)",
  },
  {
    id: "dark" as const,
    name: "Dark",
    description: "Professional dark mode",
    preview: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
  },
  {
    id: "anime" as const,
    name: "Anime",
    description: "Neon glow & vibrant",
    preview: "linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #f97316 100%)",
  },
  {
    id: "manga" as const,
    name: "Manga",
    description: "High contrast panels",
    preview: "linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, #000000 100%)",
  },
  {
    id: "recruiter" as const,
    name: "Recruiter",
    description: "Minimal & professional",
    preview: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
  },
  {
    id: "cyber" as const,
    name: "Cyber",
    description: "Futuristic tech",
    preview: "linear-gradient(135deg, #0c4a6e 0%, #06b6d4 50%, #10b981 100%)",
  },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useMultiTheme();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative overflow-hidden border-2 hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
          aria-label="Change theme"
        >
          <Palette className="w-5 h-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <Card className="border-0 shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Choose Theme</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="h-6 w-6"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <AnimatePresence mode="wait">
                {themes.map((themeOption, index) => (
                  <motion.button
                    key={themeOption.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      setTheme(themeOption.id);
                      setTimeout(() => setOpen(false), 300);
                    }}
                    className={`relative p-3 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                      theme === themeOption.id
                        ? "border-purple-600 dark:border-purple-400 shadow-lg"
                        : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                    }`}
                  >
                    {/* Theme Preview */}
                    <div
                      className="w-full h-16 rounded-md mb-2 relative overflow-hidden"
                      style={{ background: themeOption.preview }}
                    >
                      {theme === themeOption.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 flex items-center justify-center bg-black/20"
                        >
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                            <Check className="w-5 h-5 text-purple-600" />
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Theme Info */}
                    <div className="text-left">
                      <div className="font-semibold text-sm mb-0.5">
                        {themeOption.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {themeOption.description}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Theme persists across sessions
              </p>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}

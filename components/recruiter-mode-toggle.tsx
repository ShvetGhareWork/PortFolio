"use client";

import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";
import { useRecruiterMode } from "@/hooks/use-recruiter-mode";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function RecruiterModeToggle() {
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleRecruiterMode}
            className="relative overflow-hidden border-2 hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
            aria-label={
              isRecruiterMode
                ? "Switch to creative mode"
                : "Switch to recruiter mode"
            }
          >
            <motion.div
              initial={false}
              animate={{
                rotate: isRecruiterMode ? 0 : 360,
                scale: isRecruiterMode ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Briefcase className="w-5 h-5" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{
                rotate: isRecruiterMode ? 360 : 0,
                scale: isRecruiterMode ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-medium">
            {isRecruiterMode ? "Creative Mode" : "Recruiter Mode"}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {isRecruiterMode
              ? "Full animations & creative design"
              : "Simplified layout & reduced motion"}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

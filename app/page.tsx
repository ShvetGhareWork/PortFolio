"use client";

import { useEffect, useState } from "react";
import { useScroll, useSpring } from "framer-motion";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { PersonalSection } from "@/components/personal-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { ParticleBackground } from "@/components/particle-background";
import { ScrollProgress } from "@/components/scroll-progress";
import { ResumeSection } from "@/components/resume-section";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-x-hidden">
        <ParticleBackground />
        <ScrollProgress scaleX={scaleX} />
        <Navigation />

        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <PersonalSection />
          <SkillsSection />
          <ProjectsSection />
          <ResumeSection />
          <BlogSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
}

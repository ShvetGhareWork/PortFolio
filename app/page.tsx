"use client";

import { useEffect, useState } from "react";
import { useScroll, useSpring } from "framer-motion";
import { MultiThemeProvider } from "@/hooks/use-multi-theme";
import { RecruiterModeProvider } from "@/hooks/use-recruiter-mode";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { WhyHireMeSection } from "@/components/why-hire-me-section";
import { PersonalSection } from "@/components/personal-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { HiringCTASection } from "@/components/hiring-cta-section";
import { ParticleBackground } from "@/components/particle-background";
import { ScrollProgress } from "@/components/scroll-progress";
import { ResumeSection } from "@/components/resume-section";
import SocialProofSection from "@/components/social-proof-section";
import GitHubStatsSection from "@/components/github-stats-section";
import ContributionsHeatmap from "@/components/contributions-heatmap";
import TestimonialsSection from "@/components/testimonials-section";
import CertificationsSection from "@/components/certifications-section";
import FeaturedSection from "@/components/featured-section";
import { ScrollytellingSection } from "@/components/scrollytelling-section";

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
    <MultiThemeProvider>
      <RecruiterModeProvider>
        <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
          <ParticleBackground />
          <ScrollProgress scaleX={scaleX} />
          <Navigation />

          <main className="relative z-10">
            <HeroSection />
            <ScrollytellingSection />
            <SocialProofSection />
            <AboutSection />
            <WhyHireMeSection />
            <PersonalSection />
            <SkillsSection />
            <GitHubStatsSection username="ShvetGhareWork" />
            <ContributionsHeatmap />
            <ProjectsSection />
            <TestimonialsSection />
            <CertificationsSection />
            {/* <FeaturedSection /> */}
            <ResumeSection />
            <BlogSection />
            <HiringCTASection />
            <ContactSection />
          </main>
        </div>
      </RecruiterModeProvider>
    </MultiThemeProvider>
  );
}

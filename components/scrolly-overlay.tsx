"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useMultiTheme } from '@/hooks/use-multi-theme';

interface ScrollyOverlayProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function ScrollyOverlay({ containerRef }: ScrollyOverlayProps) {
  const { theme } = useMultiTheme();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: 0% - 25% scroll (fade out by 25%)
  const section1Opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const section1Y = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

  // Section 2: 25% - 50% scroll (fade in at 25%, fade out at 50%)
  const section2Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const section2X = useTransform(scrollYProgress, [0.25, 0.5], [-100, 0]);

  // Section 3: 55% - 80% scroll (fade in at 55%, fade out at 80%)
  const section3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const section3X = useTransform(scrollYProgress, [0.55, 0.8], [100, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Section 1: Center - Hero Introduction */}
      <motion.div
        style={{ opacity: section1Opacity, y: section1Y }}
        className="absolute inset-0 flex items-center justify-center text-center px-6"
      >
        <div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-foreground">
            Shvet Ghare
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light">
            Creative Developer
          </p>
        </div>
      </motion.div>

      {/* Section 2: Left Aligned */}
      <motion.div
        style={{ opacity: section2Opacity, x: section2X }}
        className="absolute inset-0 flex items-center justify-start px-8 md:px-16 lg:px-24"
      >
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            I build digital
            <br />
            <span className=" from-purple-600 via-pink-600 to-orange-500 bg-clip-text ">
              experiences
            </span>
          </h2>
        </div>
      </motion.div>

      {/* Section 3: Right Aligned */}
      <motion.div
        style={{ opacity: section3Opacity, x: section3X }}
        className="absolute inset-0 flex items-center justify-end px-8 md:px-16 lg:px-24"
      >
        <div className="max-w-2xl text-right">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Bridging
            <br />
            <span className=" from-cyan-500 via-blue-600 to-purple-600 bg-clip-text ">
              design & engineering
            </span>
          </h2>
        </div>
      </motion.div>
    </div>
  );
}

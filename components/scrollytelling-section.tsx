"use client";

import { useRef } from 'react';
import { useImagePreloader } from '@/hooks/use-image-preloader';
import { ScrollyCanvas } from './scrolly-canvas';
import { ScrollyOverlay } from './scrolly-overlay';
import { motion } from 'framer-motion';

const FRAME_COUNT = 136;
const SEQUENCE_PATH = '/sequence';

export function ScrollytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { images, isLoading, progress } = useImagePreloader(FRAME_COUNT, SEQUENCE_PATH);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#121212]"
      style={{ height: '500vh' }}
    >
      {/* Sticky container for canvas and overlay */}
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden z-20">
        {isLoading ? (
          // Loading state with progress indicator
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212]">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8"
              >
                <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-2xl font-bold text-white mb-2">Loading Experience</p>
                <p className="text-lg text-gray-400">{progress}%</p>
              </motion.div>
              
              {/* Progress bar */}
              <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Canvas renderer */}
            <ScrollyCanvas images={images} containerRef={containerRef} />
            
            {/* Parallax text overlays */}
            <ScrollyOverlay containerRef={containerRef} />
          </>
        )}
      </div>
    </section>
  );
}

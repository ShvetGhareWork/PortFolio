"use client";

import { useRef, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface ScrollyCanvasProps {
  images: HTMLImageElement[];
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function ScrollyCanvas({ images, containerRef }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Track scroll progress relative to the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to frame index
  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, images.length - 1]
  );

  // Debug: Log scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      console.log('Scroll Progress:', latest, 'Frame:', Math.floor(frameIndex.get()));
    });
    return unsubscribe;
  }, [scrollYProgress, frameIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const render = () => {
      const index = Math.min(
        Math.floor(frameIndex.get()),
        images.length - 1
      );

      const img = images[index];
      if (!img) return;

      // Set canvas size to match window
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      context.scale(dpr, dpr);

      // Calculate dimensions for object-fit: cover behavior
      const canvasAspect = window.innerWidth / window.innerHeight;
      const imgAspect = img.width / img.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspect > imgAspect) {
        // Canvas is wider than image
        drawWidth = window.innerWidth;
        drawHeight = drawWidth / imgAspect;
        offsetX = 0;
        offsetY = (window.innerHeight - drawHeight) / 2;
      } else {
        // Canvas is taller than image
        drawHeight = window.innerHeight;
        drawWidth = drawHeight * imgAspect;
        offsetX = (window.innerWidth - drawWidth) / 2;
        offsetY = 0;
      }

      // Clear and draw
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Initial render
    render();

    // Subscribe to scroll changes
    const unsubscribe = frameIndex.on('change', render);

    // Handle window resize
    const handleResize = () => {
      render();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [images, frameIndex]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      style={{ backgroundColor: '#121212' }}
    />
  );
}

"use client"

import { motion, type MotionValue } from "framer-motion"

interface ScrollProgressProps {
  scaleX: MotionValue<number>
}

export function ScrollProgress({ scaleX }: ScrollProgressProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 transform-origin-left z-50"
      style={{ scaleX }}
    />
  )
}

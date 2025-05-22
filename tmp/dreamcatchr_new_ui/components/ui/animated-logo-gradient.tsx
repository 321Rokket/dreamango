"use client"

import { motion, type Variants } from "framer-motion"
import Image from "next/image"

const containerVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
}

const floatVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export function AnimatedLogoGradient(): JSX.Element {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="relative w-64 h-64"
    >
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-xl" />
        <Image
          src="/dreamcatchr-logo.png"
          alt="DreamCatchr Logo"
          width={256}
          height={256}
          className="relative z-10"
          priority
        />
      </motion.div>
    </motion.div>
  )
} 
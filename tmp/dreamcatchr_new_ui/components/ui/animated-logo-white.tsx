"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AnimatedLogoWhite() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="relative w-64 h-64"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/dreamcatchr-logo.png"
          alt="DreamCatchr Logo"
          width={256}
          height={256}
          className="filter brightness-0 invert"
          priority
        />
      </motion.div>
    </motion.div>
  )
} 
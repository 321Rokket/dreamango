"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedLogoWhite } from "@/components/ui/animated-logo-white"
import { AnimatedLogoGradient } from "@/components/ui/animated-logo-gradient"

export default function Hero() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="w-64 h-64">
            {theme === "dark" ? <AnimatedLogoWhite /> : <AnimatedLogoGradient />}
          </div>

          {/* Hero Text */}
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Capture Your Dreams with{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                DreamCatchr
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Transform your ideas into reality with our AI-powered dream journaling platform.
              Track, analyze, and understand your dreams like never before.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="default" size="lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-muted/20" />
    </div>
  )
} 
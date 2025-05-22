"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, Users, BarChart3, Activity, TrendingUp } from "lucide-react"

export function AnimatedStats() {
  const [counts, setCounts] = useState({
    engagement: 0,
    reach: 0,
    conversion: 0,
    growth: 0,
  })

  const targets = {
    engagement: 3.8,
    reach: 1.2,
    conversion: 2.4,
    growth: 18.6,
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        engagement: Math.min(prev.engagement + 0.1, targets.engagement),
        reach: Math.min(prev.reach + 0.05, targets.reach),
        conversion: Math.min(prev.conversion + 0.1, targets.conversion),
        growth: Math.min(prev.growth + 0.5, targets.growth),
      }))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    {
      title: "Engagement Rate",
      value: counts.engagement.toFixed(1) + "%",
      change: "+0.8%",
      trend: "up",
      icon: Activity,
    },
    {
      title: "Audience Reach",
      value: counts.reach.toFixed(1) + "M",
      change: "+0.2M",
      trend: "up",
      icon: Users,
    },
    {
      title: "Conversion Rate",
      value: counts.conversion.toFixed(1) + "%",
      change: "-0.3%",
      trend: "down",
      icon: BarChart3,
    },
    {
      title: "YoY Growth",
      value: counts.growth.toFixed(1) + "%",
      change: "+2.4%",
      trend: "up",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <stat.icon className="h-5 w-5 text-muted-foreground" />
              <span
                className={`flex items-center text-xs font-medium ${
                  stat.trend === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.change}
                {stat.trend === "up" ? (
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                ) : (
                  <ArrowDownRight className="ml-1 h-3 w-3" />
                )}
              </span>
            </div>
            <div className="mt-3">
              <p className="text-xs font-medium text-muted-foreground">{stat.title}</p>
              <h3 className="mt-1 text-2xl font-bold">{stat.value}</h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

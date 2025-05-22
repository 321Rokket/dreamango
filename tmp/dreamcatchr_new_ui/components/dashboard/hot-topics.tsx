"use client"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function HotTopics() {
  const topics = [
    {
      name: "Data vs Airtime",
      category: "Product",
      engagement: 85,
      sentiment: "positive",
      trend: "up",
    },
    {
      name: "Network Coverage",
      category: "Service",
      engagement: 72,
      sentiment: "neutral",
      trend: "stable",
    },
    {
      name: "5G Rollout",
      category: "Technology",
      engagement: 68,
      sentiment: "positive",
      trend: "up",
    },
    {
      name: "Customer Service",
      category: "Support",
      engagement: 65,
      sentiment: "negative",
      trend: "down",
    },
    {
      name: "Pricing Plans",
      category: "Product",
      engagement: 62,
      sentiment: "neutral",
      trend: "stable",
    },
  ]

  return (
    <div className="space-y-4">
      {topics.map((topic, index) => (
        <div key={index} className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">{topic.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline">{topic.category}</Badge>
                <Badge
                  variant={
                    topic.sentiment === "positive"
                      ? "success"
                      : topic.sentiment === "negative"
                        ? "destructive"
                        : "secondary"
                  }
                >
                  {topic.sentiment}
                </Badge>
                <span
                  className={`text-xs ${
                    topic.trend === "up" ? "text-green-500" : topic.trend === "down" ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  {topic.trend === "up" ? "↑ Rising" : topic.trend === "down" ? "↓ Falling" : "→ Stable"}
                </span>
              </div>
            </div>
            <div className="text-2xl font-bold">{topic.engagement}%</div>
          </div>
          <div className="mt-2">
            <Progress
              value={topic.engagement}
              className={`h-2 ${
                topic.sentiment === "positive"
                  ? "bg-green-100"
                  : topic.sentiment === "negative"
                    ? "bg-red-100"
                    : "bg-gray-100"
              }`}
              indicatorClassName={
                topic.sentiment === "positive"
                  ? "bg-green-500"
                  : topic.sentiment === "negative"
                    ? "bg-red-500"
                    : "bg-gray-500"
              }
            />
          </div>
        </div>
      ))}
    </div>
  )
}

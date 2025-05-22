"use client"

import { motion } from "framer-motion"
import { BarChart, LineChart, PieChart, CheckCircle, AlertCircle, Target, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Users } from "lucide-react"

export function CampaignAnalysis() {
  // Sample data - would be replaced with real data in production
  const campaignData = {
    name: "Q2 Data Bundle Promotion",
    status: "Active",
    score: 78,
    strengths: ["High engagement in urban areas", "Strong conversion on TikTok", "Positive sentiment analysis (87%)"],
    weaknesses: ["Below average CTR on Facebook", "Low engagement during weekday mornings"],
    channelPerformance: [
      { channel: "TikTok", engagement: 92, conversion: 4.8 },
      { channel: "Instagram", engagement: 78, conversion: 3.2 },
      { channel: "Facebook", engagement: 45, conversion: 1.7 },
      { channel: "Twitter", engagement: 62, conversion: 2.1 },
    ],
    demographicInsights: {
      topAgeGroup: "18-24",
      topLocation: "Johannesburg",
      topInterest: "Music & Entertainment",
    },
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Campaign Analysis</CardTitle>
            <CardDescription>Performance insights and recommendations</CardDescription>
          </div>
          <Badge className="bg-green-500">{campaignData.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">{campaignData.name}</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Performance Score:</span>
              <span className="text-lg font-bold">{campaignData.score}/100</span>
            </div>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              className={`h-full ${
                campaignData.score >= 80 ? "bg-green-500" : campaignData.score >= 60 ? "bg-amber-500" : "bg-red-500"
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${campaignData.score}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>

        <Separator />

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-medium">Strengths</h3>
            <div className="space-y-2">
              {campaignData.strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                  <span className="text-sm">{strength}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium">Areas for Improvement</h3>
            <div className="space-y-2">
              {campaignData.weaknesses.map((weakness, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start gap-2"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 text-amber-500" />
                  <span className="text-sm">{weakness}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="mb-3 text-sm font-medium">Channel Performance</h3>
          <div className="space-y-3">
            {campaignData.channelPerformance.map((channel, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {channel.channel === "TikTok" && <BarChart className="h-4 w-4 text-pink-500" />}
                    {channel.channel === "Instagram" && <PieChart className="h-4 w-4 text-purple-500" />}
                    {channel.channel === "Facebook" && <LineChart className="h-4 w-4 text-blue-500" />}
                    {channel.channel === "Twitter" && <TrendingUp className="h-4 w-4 text-sky-500" />}
                    <span className="font-medium">{channel.channel}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {channel.engagement}% Engagement
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {channel.conversion}% Conversion
                    </Badge>
                  </div>
                </div>
                <Progress value={channel.engagement} className="h-1" />
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="mb-3 text-sm font-medium">Demographic Insights</h3>
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-muted/50 border-none">
              <CardContent className="p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-xs text-muted-foreground">Top Age Group</span>
                </div>
                <div className="text-sm font-medium">{campaignData.demographicInsights.topAgeGroup}</div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50 border-none">
              <CardContent className="p-3">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="h-4 w-4 text-amber-500" />
                  <span className="text-xs text-muted-foreground">Top Location</span>
                </div>
                <div className="text-sm font-medium">{campaignData.demographicInsights.topLocation}</div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50 border-none">
              <CardContent className="p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Target className="h-4 w-4 text-green-500" />
                  <span className="text-xs text-muted-foreground">Top Interest</span>
                </div>
                <div className="text-sm font-medium">{campaignData.demographicInsights.topInterest}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

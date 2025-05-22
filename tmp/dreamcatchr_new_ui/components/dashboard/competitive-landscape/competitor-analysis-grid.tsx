"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Download, Filter, ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react"
import Image from "next/image"

export function CompetitorAnalysisGrid() {
  const [activeTab, setActiveTab] = useState("overview")

  const competitors = [
    {
      id: "vodacom",
      name: "Vodacom",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-44-E53nhDuQU6sv9cfQ3qGQmaqzmJ3vAB.jpeg",
      marketShare: 42,
      contentVolume: 85,
      engagement: 4.2,
      sentiment: 72,
      trend: "up",
      strengths: ["Video content", "Influencer partnerships", "Sports sponsorships"],
      weaknesses: ["Customer service content", "Educational content", "Community engagement"],
      topContent: {
        title: "Vodacom Knockout Finals",
        platform: "Instagram",
        engagement: 8.5,
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-44-E53nhDuQU6sv9cfQ3qGQmaqzmJ3vAB.jpeg",
      },
    },
    {
      id: "mtn",
      name: "MTN",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maxresdefault-2.jpg-iI1gOa5f93LmKdLbDaxxgHr76bRthl.jpeg",
      marketShare: 38,
      contentVolume: 92,
      engagement: 3.8,
      sentiment: 68,
      trend: "stable",
      strengths: ["Music content", "Cultural relevance", "Consistent posting"],
      weaknesses: ["Video quality", "Response time", "Content variety"],
      topContent: {
        title: "MTN Music Festival",
        platform: "Facebook",
        engagement: 7.2,
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maxresdefault-2.jpg-iI1gOa5f93LmKdLbDaxxgHr76bRthl.jpeg",
      },
    },
    {
      id: "cell-c",
      name: "Cell C",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20231122-WCW-Telkom-Sponsorship-1.jpg-ypBGxzsg3DKoB3dB2TpL7aPacpB4RQ.jpeg",
      marketShare: 12,
      contentVolume: 45,
      engagement: 2.8,
      sentiment: 62,
      trend: "down",
      strengths: ["Promotional content", "Price messaging", "Simplicity"],
      weaknesses: ["Content frequency", "Engagement rate", "Visual branding"],
      topContent: {
        title: "Cell C Summer Deal",
        platform: "Twitter",
        engagement: 4.5,
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20231122-WCW-Telkom-Sponsorship-1.jpg-ypBGxzsg3DKoB3dB2TpL7aPacpB4RQ.jpeg",
      },
    },
    {
      id: "rain",
      name: "Rain",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hq720-5.jpg-hDOuvMumdZChxWrj2ZBJ8AVdVMHuoA.jpeg",
      marketShare: 8,
      contentVolume: 32,
      engagement: 3.5,
      sentiment: 75,
      trend: "up",
      strengths: ["Educational content", "Product focus", "Clear messaging"],
      weaknesses: ["Content volume", "Platform diversity", "Community building"],
      topContent: {
        title: "5G Explained",
        platform: "YouTube",
        engagement: 6.8,
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hq720-5.jpg-hDOuvMumdZChxWrj2ZBJ8AVdVMHuoA.jpeg",
      },
    },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <ArrowUpRight className="h-4 w-4 text-green-500" />
      case "down":
        return <ArrowDownRight className="h-4 w-4 text-red-500" />
      default:
        return <TrendingUp className="h-4 w-4 text-blue-500" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-500"
      case "down":
        return "text-red-500"
      default:
        return "text-blue-500"
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Competitor Content Analysis</CardTitle>
            <CardDescription>Compare content performance across competitors</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content Analysis</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {competitors.map((competitor) => (
                <Card key={competitor.id} className="overflow-hidden">
                  <div className="flex items-start p-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={competitor.logo} alt={competitor.name} />
                      <AvatarFallback>{competitor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{competitor.name}</h3>
                        <div className="flex items-center">
                          {getTrendIcon(competitor.trend)}
                          <span className={`text-xs ml-1 ${getTrendColor(competitor.trend)}`}>
                            {competitor.trend === "up"
                              ? "Rising"
                              : competitor.trend === "down"
                                ? "Declining"
                                : "Stable"}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div>
                          <div className="text-xs text-muted-foreground">Market Share</div>
                          <div className="text-lg font-medium">{competitor.marketShare}%</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Content Volume</div>
                          <div className="text-lg font-medium">{competitor.contentVolume}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Engagement</div>
                          <div className="text-lg font-medium">{competitor.engagement}%</div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="text-xs text-muted-foreground mb-1">Sentiment Score</div>
                        <div className="flex items-center">
                          <div className="w-full bg-slate-200 rounded-full h-2 mr-2">
                            <div
                              className={`h-2 rounded-full ${
                                competitor.sentiment > 70
                                  ? "bg-green-500"
                                  : competitor.sentiment > 50
                                    ? "bg-blue-500"
                                    : "bg-amber-500"
                              }`}
                              style={{ width: `${competitor.sentiment}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-medium">{competitor.sentiment}/100</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="text-xs text-muted-foreground mb-1">Top Performing Content</div>
                        <div className="flex items-center mt-2">
                          <div className="relative h-12 w-16 rounded overflow-hidden mr-3">
                            <Image
                              src={competitor.topContent.imageUrl || "/placeholder.svg"}
                              alt={competitor.topContent.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">{competitor.topContent.title}</div>
                            <div className="flex items-center justify-between mt-1">
                              <Badge variant="outline" className="text-xs">
                                {competitor.topContent.platform}
                              </Badge>
                              <div className="flex items-center">
                                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                                <span className="text-xs">{competitor.topContent.engagement}% engagement</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Content Volume Comparison</CardTitle>
                <CardDescription>Monthly content output by competitor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center">
                  <p className="text-muted-foreground">Content volume comparison chart visualization</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engagement">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Engagement Rate Comparison</CardTitle>
                <CardDescription>Average engagement rate by platform and competitor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center">
                  <p className="text-muted-foreground">Engagement rate comparison chart visualization</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sentiment">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Sentiment Analysis</CardTitle>
                <CardDescription>Audience sentiment towards competitor content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center">
                  <p className="text-muted-foreground">Sentiment analysis chart visualization</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

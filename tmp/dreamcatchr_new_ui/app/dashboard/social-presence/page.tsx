"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveRadar } from "@nivo/radar"
import { ResponsiveCalendar } from "@nivo/calendar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Filter, ArrowUpRight, Share2, Heart, Eye, Users } from "lucide-react"
import Image from "next/image"

export default function SocialPresencePage() {
  // Platform performance data
  const platformPerformance = [
    {
      id: "TikTok",
      data: [
        { x: "Jan", y: 45 },
        { x: "Feb", y: 52 },
        { x: "Mar", y: 48 },
        { x: "Apr", y: 61 },
        { x: "May", y: 55 },
        { x: "Jun", y: 67 },
        { x: "Jul", y: 78 },
        { x: "Aug", y: 85 },
      ],
    },
    {
      id: "Instagram",
      data: [
        { x: "Jan", y: 42 },
        { x: "Feb", y: 45 },
        { x: "Mar", y: 50 },
        { x: "Apr", y: 55 },
        { x: "May", y: 59 },
        { x: "Jun", y: 62 },
        { x: "Jul", y: 68 },
        { x: "Aug", y: 72 },
      ],
    },
    {
      id: "Facebook",
      data: [
        { x: "Jan", y: 38 },
        { x: "Feb", y: 40 },
        { x: "Mar", y: 42 },
        { x: "Apr", y: 45 },
        { x: "May", y: 48 },
        { x: "Jun", y: 50 },
        { x: "Jul", y: 52 },
        { x: "Aug", y: 55 },
      ],
    },
    {
      id: "Twitter",
      data: [
        { x: "Jan", y: 25 },
        { x: "Feb", y: 28 },
        { x: "Mar", y: 30 },
        { x: "Apr", y: 32 },
        { x: "May", y: 35 },
        { x: "Jun", y: 38 },
        { x: "Jul", y: 40 },
        { x: "Aug", y: 42 },
      ],
    },
  ]

  // Engagement metrics by platform
  const engagementByPlatform = [
    {
      platform: "TikTok",
      likes: 85,
      comments: 42,
      shares: 38,
    },
    {
      platform: "Instagram",
      likes: 72,
      comments: 35,
      shares: 28,
    },
    {
      platform: "Facebook",
      likes: 55,
      comments: 32,
      shares: 25,
    },
    {
      platform: "Twitter",
      likes: 42,
      comments: 30,
      shares: 35,
    },
  ]

  // Top performing content
  const topContent = [
    {
      id: 1,
      title: "Taxi Guy Pointing Meme",
      platform: "TikTok",
      engagement: 4.8,
      views: "245K",
      likes: "32.4K",
      shares: "5.6K",
      image: "/images/trending/taxi-guy.png",
    },
    {
      id: 2,
      title: "Brother Bernard Animation",
      platform: "TikTok",
      engagement: 5.2,
      views: "320K",
      likes: "45.6K",
      shares: "8.9K",
      image: "/images/trending/brother-bernard.png",
    },
    {
      id: 3,
      title: "Ushuni Show Promotion",
      platform: "Instagram",
      engagement: 4.5,
      views: "189K",
      likes: "28.5K",
      shares: "4.8K",
      image: "/images/trending/ushuni-show.png",
    },
    {
      id: 4,
      title: "Brakpan Investigation",
      platform: "YouTube",
      engagement: 4.7,
      views: "278K",
      likes: "38.2K",
      shares: "7.6K",
      image: "/images/trending/brakpan-guys.png",
    },
  ]

  // Radar chart data for content performance by type
  const contentTypePerformance = [
    {
      type: "Video",
      TikTok: 9,
      Instagram: 8,
      Facebook: 6,
      Twitter: 5,
    },
    {
      type: "Image",
      TikTok: 7,
      Instagram: 9,
      Facebook: 7,
      Twitter: 6,
    },
    {
      type: "Text",
      TikTok: 4,
      Instagram: 5,
      Facebook: 6,
      Twitter: 8,
    },
    {
      type: "Stories",
      TikTok: 8,
      Instagram: 9,
      Facebook: 7,
      Twitter: 3,
    },
    {
      type: "Live",
      TikTok: 9,
      Instagram: 8,
      Facebook: 7,
      Twitter: 4,
    },
  ]

  // Posting calendar data
  const today = new Date()
  const calendarData = Array.from({ length: 200 }, (_, i) => {
    const date = new Date()
    date.setDate(today.getDate() - 200 + i)
    return {
      day: date.toISOString().slice(0, 10),
      value: Math.floor(Math.random() * 5),
    }
  })

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "TikTok":
        return "bg-[#00f2ea] text-black"
      case "Instagram":
        return "bg-[#e1306c] text-white"
      case "YouTube":
        return "bg-[#ff0000] text-white"
      case "Facebook":
        return "bg-[#4267B2] text-white"
      case "Twitter":
        return "bg-[#1DA1F2] text-white"
      default:
        return "bg-slate-500 text-white"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-telkom-dark-blue dark:text-white">Social Presence</h1>
          <p className="text-muted-foreground">Analyze and optimize your social media performance</p>
        </div>
        <div className="flex gap-2">
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

      {/* Key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Total Followers</p>
                <h3 className="text-2xl font-bold mt-1">2.4M</h3>
                <div className="flex items-center mt-1 text-status-positive">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span className="text-xs">+15.2% MoM</span>
                </div>
              </div>
              <div className="bg-telkom-blue/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-telkom-blue" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Engagement Rate</p>
                <h3 className="text-2xl font-bold mt-1">5.2%</h3>
                <div className="flex items-center mt-1 text-status-positive">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span className="text-xs">+1.8% MoM</span>
                </div>
              </div>
              <div className="bg-telkom-teal/10 p-2 rounded-full">
                <Heart className="h-5 w-5 text-telkom-teal" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Total Impressions</p>
                <h3 className="text-2xl font-bold mt-1">8.7M</h3>
                <div className="flex items-center mt-1 text-status-positive">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span className="text-xs">+22.5% MoM</span>
                </div>
              </div>
              <div className="bg-telkom-green/10 p-2 rounded-full">
                <Eye className="h-5 w-5 text-telkom-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Share of Voice</p>
                <h3 className="text-2xl font-bold mt-1">28.4%</h3>
                <div className="flex items-center mt-1 text-status-positive">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span className="text-xs">+3.2% MoM</span>
                </div>
              </div>
              <div className="bg-telkom-orange/10 p-2 rounded-full">
                <Share2 className="h-5 w-5 text-telkom-orange" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Platform Overview</TabsTrigger>
          <TabsTrigger value="content">Content Performance</TabsTrigger>
          <TabsTrigger value="engagement">Engagement Analysis</TabsTrigger>
          <TabsTrigger value="calendar">Content Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Performance Trends</CardTitle>
              <CardDescription>Monthly engagement rates across social platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveLine
                  data={platformPerformance}
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: "point" }}
                  yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
                  yFormat=" >-.2f"
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Month",
                    legendOffset: 36,
                    legendPosition: "middle",
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Engagement Rate (%)",
                    legendOffset: -40,
                    legendPosition: "middle",
                  }}
                  colors={["#00f2ea", "#e1306c", "#4267B2", "#1DA1F2"]}
                  pointSize={10}
                  pointColor={{ theme: "background" }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: "serieColor" }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                  legends={[
                    {
                      anchor: "bottom-right",
                      direction: "column",
                      justify: false,
                      translateX: 100,
                      translateY: 0,
                      itemsSpacing: 0,
                      itemDirection: "left-to-right",
                      itemWidth: 80,
                      itemHeight: 20,
                      itemOpacity: 0.75,
                      symbolSize: 12,
                      symbolShape: "circle",
                      symbolBorderColor: "rgba(0, 0, 0, .5)",
                    },
                  ]}
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Platform Engagement Breakdown</CardTitle>
                <CardDescription>Likes, comments, and shares by platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveBar
                    data={engagementByPlatform}
                    keys={["likes", "comments", "shares"]}
                    indexBy="platform"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={["#ff671f", "#4495d4", "#89ba17"]}
                    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Engagement Rate (%)",
                      legendPosition: "middle",
                      legendOffset: -40,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    legends={[
                      {
                        dataFrom: "keys",
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        symbolShape: "square",
                      },
                    ]}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Type Performance</CardTitle>
                <CardDescription>Effectiveness of different content types by platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveRadar
                    data={contentTypePerformance}
                    keys={["TikTok", "Instagram", "Facebook", "Twitter"]}
                    indexBy="type"
                    maxValue={10}
                    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                    curve="linearClosed"
                    borderWidth={2}
                    borderColor={{ from: "color" }}
                    gridLevels={5}
                    gridShape="circular"
                    gridLabelOffset={36}
                    enableDots={true}
                    dotSize={10}
                    dotColor={{ theme: "background" }}
                    dotBorderWidth={2}
                    dotBorderColor={{ from: "color" }}
                    enableDotLabel={true}
                    dotLabel="value"
                    dotLabelYOffset={-12}
                    colors={["#00f2ea", "#e1306c", "#4267B2", "#1DA1F2"]}
                    fillOpacity={0.25}
                    blendMode="multiply"
                    animate={true}
                    motionConfig="wobbly"
                    legends={[
                      {
                        anchor: "top-left",
                        direction: "column",
                        translateX: -50,
                        translateY: -40,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: "#999",
                        symbolSize: 12,
                        symbolShape: "circle",
                        effects: [
                          {
                            on: "hover",
                            style: {
                              itemTextColor: "#000",
                            },
                          },
                        ],
                      },
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Content</CardTitle>
              <CardDescription>Content with highest engagement rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {topContent.map((content) => (
                  <Card key={content.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={content.image || "/placeholder.svg"}
                        alt={content.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className={getPlatformColor(content.platform)}>{content.platform}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-sm mb-2">{content.title}</h3>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="flex flex-col items-center">
                          <Eye className="h-3 w-3 text-muted-foreground mb-1" />
                          <span className="font-medium">{content.views}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Heart className="h-3 w-3 text-red-500 mb-1" />
                          <span className="font-medium">{content.likes}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Share2 className="h-3 w-3 text-green-500 mb-1" />
                          <span className="font-medium">{content.shares}</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Engagement</span>
                          <span className="font-medium text-telkom-blue">{content.engagement}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1">
                          <div
                            className="bg-telkom-blue h-1.5 rounded-full"
                            style={{ width: `${content.engagement * 10}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Engagement by Time of Day</CardTitle>
                <CardDescription>When your audience is most active</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveBar
                    data={[
                      { time: "6-9 AM", value: 35, platform: "TikTok" },
                      { time: "9-12 PM", value: 42, platform: "TikTok" },
                      { time: "12-3 PM", value: 58, platform: "TikTok" },
                      { time: "3-6 PM", value: 65, platform: "TikTok" },
                      { time: "6-9 PM", value: 85, platform: "TikTok" },
                      { time: "9-12 AM", value: 72, platform: "TikTok" },
                      { time: "12-3 AM", value: 45, platform: "TikTok" },
                      { time: "3-6 AM", value: 22, platform: "TikTok" },
                    ]}
                    keys={["value"]}
                    indexBy="time"
                    margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={"#00f2ea"}
                    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Engagement Rate (%)",
                      legendPosition: "middle",
                      legendOffset: -40,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement by Content Theme</CardTitle>
                <CardDescription>Which themes resonate most with your audience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveBar
                    data={[
                      { theme: "Music", value: 85, platform: "TikTok" },
                      { theme: "Comedy", value: 78, platform: "TikTok" },
                      { theme: "Dance", value: 72, platform: "TikTok" },
                      { theme: "Education", value: 45, platform: "TikTok" },
                      { theme: "Lifestyle", value: 62, platform: "TikTok" },
                      { theme: "Sports", value: 58, platform: "TikTok" },
                      { theme: "News", value: 42, platform: "TikTok" },
                    ]}
                    keys={["value"]}
                    indexBy="theme"
                    margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={"#e1306c"}
                    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Engagement Rate (%)",
                      legendPosition: "middle",
                      legendOffset: -40,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Calendar</CardTitle>
              <CardDescription>Posting frequency and performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveCalendar
                  data={calendarData}
                  from={calendarData[0].day}
                  to={calendarData[calendarData.length - 1].day}
                  emptyColor="#eeeeee"
                  colors={["#a9d9f7", "#8fc3ed", "#4495d4", "#3a7db4", "#254f74"]}
                  margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                  yearSpacing={40}
                  monthBorderColor="#ffffff"
                  dayBorderWidth={2}
                  dayBorderColor="#ffffff"
                  legends={[
                    {
                      anchor: "bottom-right",
                      direction: "row",
                      translateY: 36,
                      itemCount: 4,
                      itemWidth: 42,
                      itemHeight: 36,
                      itemsSpacing: 14,
                      itemDirection: "right-to-left",
                    },
                  ]}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

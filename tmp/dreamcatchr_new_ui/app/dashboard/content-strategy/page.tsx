"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Download, Filter, Plus, Zap } from "lucide-react"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveCalendar } from "@nivo/calendar"
import { ResponsiveHeatMap } from "@nivo/heatmap"

export default function ContentStrategyPage() {
  // Content performance data
  const contentPerformanceData = [
    { platform: "Instagram", engagement: 4.2, reach: 3.8, conversion: 2.1 },
    { platform: "TikTok", engagement: 5.1, reach: 4.5, conversion: 2.4 },
    { platform: "YouTube", engagement: 3.8, reach: 3.2, conversion: 1.9 },
    { platform: "Facebook", engagement: 2.9, reach: 2.5, conversion: 1.5 },
    { platform: "Twitter", engagement: 3.5, reach: 3.0, conversion: 1.7 },
  ]

  // Content category data
  const contentCategoryData = [
    { id: "Educational", value: 30, color: "hsl(210, 70%, 50%)" },
    { id: "Entertainment", value: 25, color: "hsl(160, 70%, 50%)" },
    { id: "Promotional", value: 20, color: "hsl(30, 70%, 50%)" },
    { id: "User-Generated", value: 15, color: "hsl(270, 70%, 50%)" },
    { id: "Behind-the-Scenes", value: 10, color: "hsl(0, 70%, 50%)" },
  ]

  // Calendar data (last 12 months)
  const today = new Date()
  const calendarData = Array.from({ length: 365 }, (_, i) => {
    const date = new Date()
    date.setDate(today.getDate() - 365 + i)
    return {
      day: date.toISOString().slice(0, 10),
      value: Math.floor(Math.random() * 5) + 1,
    }
  })

  // Content heatmap data
  const heatmapData = [
    { day: "Monday", morning: 45, afternoon: 60, evening: 75, night: 30 },
    { day: "Tuesday", morning: 50, afternoon: 65, evening: 70, night: 35 },
    { day: "Wednesday", morning: 55, afternoon: 70, evening: 80, night: 40 },
    { day: "Thursday", morning: 60, afternoon: 75, evening: 85, night: 45 },
    { day: "Friday", morning: 65, afternoon: 80, evening: 90, night: 50 },
    { day: "Saturday", morning: 70, afternoon: 85, evening: 95, night: 55 },
    { day: "Sunday", morning: 75, afternoon: 90, evening: 100, night: 60 },
  ]

  // Content opportunities data
  const opportunityImages = [
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Content Strategy</h2>
        <p className="text-muted-foreground">Plan, analyze, and optimize your content strategy across all platforms.</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 Days
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Content Plan
          </Button>
        </div>
      </div>

      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Content Performance</TabsTrigger>
          <TabsTrigger value="calendar">Content Calendar</TabsTrigger>
          <TabsTrigger value="opportunities">Content Opportunities</TabsTrigger>
          <TabsTrigger value="trends">Trending Content</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Top Performing Content</CardTitle>
                <CardDescription>Content with highest engagement rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                        {i}
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Content Title {i}</p>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            Video
                          </Badge>
                          <span className="text-xs text-muted-foreground">Posted 2 weeks ago</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                          <span className="text-green-600 font-medium">+{i * 2 + 3}% engagement</span>
                          <span className="text-muted-foreground">{i * 10 + 50}K views</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Platform Performance</CardTitle>
                <CardDescription>Engagement metrics by platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveBar
                    data={contentPerformanceData}
                    keys={["engagement", "reach", "conversion"]}
                    indexBy="platform"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    groupMode="grouped"
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={{ scheme: "nivo" }}
                    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Platform",
                      legendPosition: "middle",
                      legendOffset: 32,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Rate (%)",
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
                        effects: [
                          {
                            on: "hover",
                            style: {
                              itemOpacity: 1,
                            },
                          },
                        ],
                      },
                    ]}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Content Type Analysis</CardTitle>
                <CardDescription>Performance by content format</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsivePie
                    data={contentCategoryData}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: "color" }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
                    legends={[
                      {
                        anchor: "bottom",
                        direction: "row",
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: "#999",
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolSize: 18,
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

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Calendar</CardTitle>
              <CardDescription>Plan and schedule your content across all platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveCalendar
                  data={calendarData}
                  from={calendarData[0].day}
                  to={calendarData[calendarData.length - 1].day}
                  emptyColor="#eeeeee"
                  colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
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

          <Card>
            <CardHeader>
              <CardTitle>Optimal Posting Times</CardTitle>
              <CardDescription>Engagement heatmap by day and time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveHeatMap
                  data={heatmapData}
                  margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
                  valueFormat=">-.2s"
                  axisTop={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -90,
                    legend: "",
                    legendOffset: 46,
                  }}
                  axisRight={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Time of Day",
                    legendPosition: "middle",
                    legendOffset: 70,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Day of Week",
                    legendPosition: "middle",
                    legendOffset: -72,
                  }}
                  colors={{
                    type: "sequential",
                    scheme: "blues",
                    minValue: 0,
                    maxValue: 100,
                  }}
                  emptyColor="#555555"
                  legends={[
                    {
                      anchor: "bottom",
                      translateX: 0,
                      translateY: 30,
                      length: 400,
                      thickness: 8,
                      direction: "row",
                      tickPosition: "after",
                      tickSize: 3,
                      tickSpacing: 4,
                      tickOverlap: false,
                      tickFormat: ">-.2s",
                      title: "Engagement Score →",
                      titleAlign: "start",
                      titleOffset: 4,
                    },
                  ]}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="opportunities" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Content Opportunities</CardTitle>
                  <CardDescription>
                    AI-powered content recommendations based on audience interests and trends
                  </CardDescription>
                </div>
                <Button size="sm" className="gap-1">
                  <Zap className="h-4 w-4" />
                  Generate Ideas
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {opportunityImages.map((img, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-video bg-muted">
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Content opportunity ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-3">
                      <h3 className="text-sm font-medium">Content Opportunity {i + 1}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        This trending topic has high engagement potential for your audience.
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="outline" className="text-xs">
                          Trending
                        </Badge>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          Add to Calendar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Audience Interests</CardTitle>
                <CardDescription>Topics your audience is engaging with</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveBar
                    data={[
                      { topic: "Technology", interest: 85 },
                      { topic: "Fashion", interest: 72 },
                      { topic: "Travel", interest: 68 },
                      { topic: "Food", interest: 65 },
                      { topic: "Fitness", interest: 60 },
                      { topic: "Music", interest: 55 },
                    ]}
                    keys={["interest"]}
                    indexBy="topic"
                    margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={{ scheme: "nivo" }}
                    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Topic",
                      legendPosition: "middle",
                      legendOffset: 32,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Interest Score",
                      legendPosition: "middle",
                      legendOffset: -40,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Gap Analysis</CardTitle>
                <CardDescription>Content gaps in your current strategy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveBar
                    data={[
                      { category: "Educational", current: 65, potential: 90 },
                      { category: "Entertainment", current: 80, potential: 85 },
                      { category: "Promotional", current: 75, potential: 70 },
                      { category: "User-Generated", current: 40, potential: 85 },
                      { category: "Behind-the-Scenes", current: 35, potential: 80 },
                    ]}
                    keys={["current", "potential"]}
                    indexBy="category"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    groupMode="grouped"
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={{ scheme: "nivo" }}
                    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Category",
                      legendPosition: "middle",
                      legendOffset: 32,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Score",
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
                        effects: [
                          {
                            on: "hover",
                            style: {
                              itemOpacity: 1,
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

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trending Content Analysis</CardTitle>
              <CardDescription>Discover what's trending in your industry and with your audience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-[300px]">
                  <ResponsivePie
                    data={[
                      { id: "Short-form Video", value: 45, color: "hsl(210, 70%, 50%)" },
                      { id: "User Stories", value: 25, color: "hsl(160, 70%, 50%)" },
                      { id: "Live Streams", value: 15, color: "hsl(30, 70%, 50%)" },
                      { id: "Interactive Posts", value: 10, color: "hsl(270, 70%, 50%)" },
                      { id: "Long-form Content", value: 5, color: "hsl(0, 70%, 50%)" },
                    ]}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: "color" }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
                    legends={[
                      {
                        anchor: "bottom",
                        direction: "row",
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: "#999",
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolSize: 18,
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
                <div className="h-[300px]">
                  <ResponsiveBar
                    data={[
                      { platform: "TikTok", growth: 85 },
                      { platform: "Instagram Reels", growth: 75 },
                      { platform: "YouTube Shorts", growth: 65 },
                      { platform: "Twitter", growth: 45 },
                      { platform: "Facebook", growth: 35 },
                    ]}
                    keys={["growth"]}
                    indexBy="platform"
                    margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={{ scheme: "nivo" }}
                    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Platform",
                      legendPosition: "middle",
                      legendOffset: 32,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Growth Score",
                      legendPosition: "middle",
                      legendOffset: -40,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-video bg-muted">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt={`Trending content ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-3">
                      <h3 className="text-sm font-medium">Trending Topic {i}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        This topic is trending across multiple platforms with high engagement.
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="outline" className="text-xs">
                          Hot Topic
                        </Badge>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          Explore
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

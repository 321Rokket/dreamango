"use client"

import { useState } from "react"
import { Calendar, ChevronDown, Filter, Grid, Info, List, Settings } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AIAssistant } from "@/components/dashboard/ai-assistant"
import React from "react"
import { NivoCharts } from "@/components/dashboard/nivo-charts"

export function ContentPerformance() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showCalendar, setShowCalendar] = useState(true)

  // Sample data for charts
  const performanceTrendData = [
    {
      id: "Engagement",
      color: "#FF6B6B",
      data: [
        { x: "Jan", y: 2.1 },
        { x: "Feb", y: 2.3 },
        { x: "Mar", y: 2.5 },
        { x: "Apr", y: 2.2 },
        { x: "May", y: 2.6 },
        { x: "Jun", y: 2.8 },
        { x: "Jul", y: 3.0 },
        { x: "Aug", y: 3.2 },
        { x: "Sep", y: 3.5 },
        { x: "Oct", y: 3.8 },
        { x: "Nov", y: 4.0 },
        { x: "Dec", y: 4.2 },
      ],
    },
    {
      id: "Views",
      color: "#4ECDC4",
      data: [
        { x: "Jan", y: 800 },
        { x: "Feb", y: 850 },
        { x: "Mar", y: 900 },
        { x: "Apr", y: 950 },
        { x: "May", y: 1000 },
        { x: "Jun", y: 1050 },
        { x: "Jul", y: 1100 },
        { x: "Aug", y: 1150 },
        { x: "Sep", y: 1200 },
        { x: "Oct", y: 1250 },
        { x: "Nov", y: 1300 },
        { x: "Dec", y: 1350 },
      ],
    },
  ]

  const platformDistributionData = [
    { id: "TikTok", value: 40 },
    { id: "Instagram", value: 30 },
    { id: "YouTube", value: 15 },
    { id: "Facebook", value: 10 },
    { id: "Twitter", value: 5 },
  ]

  const contentTypeData = [
    { type: "Entertainment", count: 42, engagement: 3.2, conversion: 1.1 },
    { type: "Educational", count: 36, engagement: 2.4, conversion: 1.8 },
    { type: "Promotional", count: 24, engagement: 1.9, conversion: 2.4 },
    { type: "UGC", count: 18, engagement: 3.8, conversion: 0.9 },
    { type: "Creator Partnerships", count: 8, engagement: 4.2, conversion: 1.5 },
  ]

  const formatData = [
    { format: "Short Form", count: 68, engagement: 3.4 },
    { format: "Medium Form", count: 42, engagement: 2.8 },
    { format: "Long Form", count: 18, engagement: 2.1 },
    { format: "Stories/Reels", count: 36, engagement: 3.9 },
  ]

  return (
    <div className="flex h-full">
      <div className={`flex-1 overflow-auto p-4 lg:p-6 ${showCalendar ? "pr-0 lg:pr-0" : ""}`}>
        {/* Global Controls & Filters */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Last 30 Days
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              All Platforms
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              All Content Types
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              All Themes
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowCalendar(!showCalendar)}
              className={showCalendar ? "bg-muted" : ""}
            >
              <Calendar className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline" size="sm">
              Export
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              View Settings
            </Button>
          </div>
        </div>

        {/* Content Overview */}
        <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Volume Metrics</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-[200px] text-xs">
                        Total content pieces and engagement metrics across all platforms
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">128</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>Content Pieces</span>
                    <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">+12%</Badge>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1.2M</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>Total Views</span>
                    <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">+24%</Badge>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">35.4K</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>Engagements</span>
                    <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">+18%</Badge>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">2.8K</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>Conversions</span>
                    <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">+32%</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Performance Averages</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-[200px] text-xs">Average performance metrics across all content</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Engagement Rate</span>
                    <span className="font-medium">2.8%</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-green-500" style={{ width: "70%" }}></div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>0%</span>
                    <span>Benchmark: 2.1%</span>
                    <span>5%</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span>View Completion</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: "68%" }}></div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>0%</span>
                    <span>Benchmark: 65%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Trend Metrics</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-[200px] text-xs">Performance trends over the selected time period</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Content Performance</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Increasing</Badge>
                  </div>
                  <div className="mt-2 h-[40px]">
                    <NivoCharts.LineChart
                      data={[
                        {
                          id: "performance",
                          data: [
                            { x: "W1", y: 10 },
                            { x: "W2", y: 15 },
                            { x: "W3", y: 12 },
                            { x: "W4", y: 18 },
                          ],
                        },
                      ]}
                      margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                      xScale={{ type: "point" }}
                      yScale={{ type: "linear", min: 0, max: "auto" }}
                      curve="monotoneX"
                      axisTop={null}
                      axisRight={null}
                      axisBottom={null}
                      axisLeft={null}
                      enableGridX={false}
                      enableGridY={false}
                      colors={["#10b981"]}
                      enablePoints={false}
                      useMesh={true}
                      enableArea={true}
                      areaOpacity={0.2}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Publishing Frequency</span>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Stable</Badge>
                  </div>
                  <div className="mt-2 h-[40px]">
                    <NivoCharts.LineChart
                      data={[
                        {
                          id: "frequency",
                          data: [
                            { x: "W1", y: 8 },
                            { x: "W2", y: 7 },
                            { x: "W3", y: 9 },
                            { x: "W4", y: 8 },
                          ],
                        },
                      ]}
                      margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                      xScale={{ type: "point" }}
                      yScale={{ type: "linear", min: 0, max: "auto" }}
                      curve="monotoneX"
                      axisTop={null}
                      axisRight={null}
                      axisBottom={null}
                      axisLeft={null}
                      enableGridX={false}
                      enableGridY={false}
                      colors={["#3b82f6"]}
                      enablePoints={false}
                      useMesh={true}
                      enableArea={true}
                      areaOpacity={0.2}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Comparative Analysis</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-[200px] text-xs">Performance comparison across dimensions</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[150px]">
                <NivoCharts.BarChart
                  data={[
                    { dimension: "Engagement", current: 3.2, previous: 2.8, benchmark: 2.5 },
                    { dimension: "Reach", current: 4.5, previous: 3.8, benchmark: 4.0 },
                    { dimension: "Conversion", current: 1.8, previous: 1.5, benchmark: 1.6 },
                  ]}
                  keys={["current", "previous", "benchmark"]}
                  indexBy="dimension"
                  margin={{ top: 10, right: 10, bottom: 30, left: 30 }}
                  padding={0.3}
                  groupMode="grouped"
                  colors={["#3b82f6", "#8b5cf6", "#10b981"]}
                  axisBottom={{
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                  }}
                  axisLeft={null}
                  enableGridY={false}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                />
              </div>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Current
                </Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  Previous
                </Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Benchmark
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: showCalendar ? "2fr 1fr" : "1fr" }}>
          {/* Content Analysis Grid */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Content Analysis Grid</CardTitle>
                  <CardDescription>Analyze content performance across multiple dimensions</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-muted" : ""}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-muted" : ""}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="content-type">
                <TabsList className="mb-4">
                  <TabsTrigger value="content-type">By Content Type</TabsTrigger>
                  <TabsTrigger value="format">By Format</TabsTrigger>
                  <TabsTrigger value="theme">By Theme</TabsTrigger>
                  <TabsTrigger value="platform">By Platform</TabsTrigger>
                </TabsList>

                <TabsContent value="content-type">
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {contentTypeData.map((item, index) => (
                        <div key={index} className="rounded-lg border p-4">
                          <h3 className="font-medium mb-2">{item.type}</h3>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Content Count</span>
                              <span className="font-medium">{item.count}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Engagement Rate</span>
                              <span className="font-medium">{item.engagement}%</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Conversion Rate</span>
                              <span className="font-medium">{item.conversion}%</span>
                            </div>
                            <div className="h-[60px]">
                              <NivoCharts.LineChart
                                data={[
                                  {
                                    id: "performance",
                                    data: Array.from({ length: 12 }, (_, i) => ({
                                      x: i.toString(),
                                      y: Math.random() * 5 + item.engagement - 2,
                                    })),
                                  },
                                ]}
                                margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                                xScale={{ type: "point" }}
                                yScale={{ type: "linear", min: 0, max: "auto" }}
                                curve="monotoneX"
                                axisTop={null}
                                axisRight={null}
                                axisBottom={null}
                                axisLeft={null}
                                enableGridX={false}
                                enableGridY={false}
                                colors={["#3b82f6"]}
                                enablePoints={false}
                                useMesh={true}
                                enableArea={true}
                                areaOpacity={0.2}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="rounded-lg border overflow-hidden">
                        <div className="grid grid-cols-12 bg-muted p-3 text-sm font-medium">
                          <div className="col-span-3">Content Type</div>
                          <div className="col-span-2">Count</div>
                          <div className="col-span-2">Engagement</div>
                          <div className="col-span-2">Conversion</div>
                          <div className="col-span-3">Performance</div>
                        </div>
                        <div className="divide-y">
                          {contentTypeData.map((item, index) => (
                            <div key={index} className="grid grid-cols-12 p-3 text-sm">
                              <div className="col-span-3">{item.type}</div>
                              <div className="col-span-2">{item.count}</div>
                              <div className="col-span-2">{item.engagement}%</div>
                              <div className="col-span-2">{item.conversion}%</div>
                              <div className="col-span-3">
                                <Badge
                                  className={
                                    item.engagement > 3.0
                                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                                      : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                  }
                                >
                                  {item.engagement > 3.0 ? "High" : "Medium"}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="format">
                  <div className="h-[300px]">
                    <NivoCharts.BarChart
                      data={formatData.map((item) => ({
                        format: item.format,
                        count: item.count,
                        engagement: item.engagement,
                      }))}
                      keys={["count", "engagement"]}
                      indexBy="format"
                      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                      padding={0.3}
                      valueScale={{ type: "linear" }}
                      indexScale={{ type: "band", round: true }}
                      colors={{ scheme: "paired" }}
                      axisTop={null}
                      axisRight={null}
                      axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Format",
                        legendPosition: "middle",
                        legendOffset: 32,
                      }}
                      axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Value",
                        legendPosition: "middle",
                        legendOffset: -40,
                      }}
                      labelSkipWidth={12}
                      labelSkipHeight={12}
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
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formatData.map((item, index) => (
                      <div key={index} className="rounded-lg border p-3">
                        <div className="text-sm font-medium">{item.format}</div>
                        <div className="mt-1 text-2xl font-bold">{item.count}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{item.engagement}% engagement rate</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="theme">
                  <div className="h-[300px]">
                    <NivoCharts.PieChart
                      data={[
                        { id: "Lifestyle", value: 25 },
                        { id: "Technology", value: 20 },
                        { id: "Health", value: 15 },
                        { id: "Travel", value: 12 },
                        { id: "Food", value: 10 },
                        { id: "Fashion", value: 8 },
                        { id: "Beauty", value: 6 },
                        { id: "Fitness", value: 4 },
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
                      colors={{ scheme: "nivo" }}
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
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                      Lifestyle
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      Technology
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Health
                    </Badge>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                      Travel
                    </Badge>
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                      Food
                    </Badge>
                    <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                      Fashion
                    </Badge>
                    <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200">
                      Beauty
                    </Badge>
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                      Fitness
                    </Badge>
                  </div>
                </TabsContent>

                <TabsContent value="platform">
                  <div className="h-[300px]">
                    <NivoCharts.BarChart
                      data={[
                        { platform: "TikTok", users: 480000, engagement: 3.8 },
                        { platform: "Instagram", users: 420000, engagement: 2.9 },
                        { platform: "YouTube", users: 240000, engagement: 2.2 },
                        { platform: "Facebook", users: 140000, engagement: 1.8 },
                      ]}
                      keys={["users", "engagement"]}
                      indexBy="platform"
                      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                      padding={0.3}
                      valueScale={{ type: "linear" }}
                      indexScale={{ type: "band", round: true }}
                      colors={({ id, data }) => {
                        if (id === "users") return "#3b82f6"
                        return "#10b981"
                      }}
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
                        legend: "Value",
                        legendPosition: "middle",
                        legendOffset: -40,
                      }}
                      labelSkipWidth={12}
                      labelSkipHeight={12}
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
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="rounded-lg border p-3">
                      <div className="text-sm font-medium">TikTok</div>
                      <div className="mt-1 text-2xl font-bold">48</div>
                      <div className="mt-1 text-xs text-muted-foreground">3.8% engagement rate</div>
                    </div>
                    <div className="rounded-lg border p-3">
                      <div className="text-sm font-medium">Instagram</div>
                      <div className="mt-1 text-2xl font-bold">42</div>
                      <div className="mt-1 text-xs text-muted-foreground">2.9% engagement rate</div>
                    </div>
                    <div className="rounded-lg border p-3">
                      <div className="text-sm font-medium">YouTube</div>
                      <div className="mt-1 text-2xl font-bold">24</div>
                      <div className="mt-1 text-xs text-muted-foreground">2.2% engagement rate</div>
                    </div>
                    <div className="rounded-lg border p-3">
                      <div className="text-sm font-medium">Facebook</div>
                      <div className="mt-1 text-2xl font-bold">14</div>
                      <div className="mt-1 text-xs text-muted-foreground">1.8% engagement rate</div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Content Calendar View */}
          {showCalendar && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Content Calendar</CardTitle>
                <CardDescription>View content publication schedule and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        April 15-21, 2025
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        Week View
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Today
                      </Button>
                    </div>
                  </div>

                  {/* Calendar Grid - Week View */}
                  <div className="rounded-lg border overflow-hidden">
                    <div className="grid grid-cols-8 bg-muted">
                      <div className="p-2 text-center text-xs font-medium border-r">Time</div>
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                        <div key={day} className="p-2 text-center text-xs font-medium">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-8 gap-px bg-border">
                      {/* Time slots */}
                      {["9 AM", "12 PM", "3 PM", "6 PM", "9 PM"].map((time) => (
                        <React.Fragment key={time}>
                          <div className="bg-card p-2 min-h-[80px] text-xs text-muted-foreground border-r">{time}</div>
                          {/* Days of the week */}
                          {Array.from({ length: 7 }).map((_, dayIndex) => {
                            const hasContent = Math.random() > 0.7
                            return (
                              <div key={dayIndex} className="bg-card p-1 min-h-[80px] relative">
                                {hasContent && (
                                  <div
                                    className="rounded-sm p-1 text-xs truncate absolute inset-1"
                                    style={{
                                      backgroundColor: ["#e0f2fe", "#fef3c7", "#dcfce7"][Math.floor(Math.random() * 3)],
                                      color: ["#0369a1", "#92400e", "#166534"][Math.floor(Math.random() * 3)],
                                    }}
                                  >
                                    {["TikTok Post", "Instagram Story", "YouTube Short"][Math.floor(Math.random() * 3)]}
                                  </div>
                                )}
                              </div>
                            )
                          })}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Performance Heatmap */}
                  <div>
                    <h3 className="text-sm font-medium mb-2">Performance by Day/Time</h3>
                    <div className="h-[120px]">
                      <NivoCharts.BarChart
                        data={[
                          { day: "Mon", morning: 3.2, afternoon: 2.8, evening: 4.1 },
                          { day: "Tue", morning: 2.9, afternoon: 3.1, evening: 3.8 },
                          { day: "Wed", morning: 2.7, afternoon: 3.4, evening: 4.2 },
                          { day: "Thu", morning: 3.0, afternoon: 3.2, evening: 3.9 },
                          { day: "Fri", morning: 3.3, afternoon: 3.5, evening: 4.5 },
                          { day: "Sat", morning: 2.5, afternoon: 2.9, evening: 3.7 },
                          { day: "Sun", morning: 2.2, afternoon: 2.6, evening: 3.4 },
                        ]}
                        keys={["morning", "afternoon", "evening"]}
                        indexBy="day"
                        margin={{ top: 10, right: 10, bottom: 20, left: 30 }}
                        padding={0.2}
                        groupMode="grouped"
                        colors={["#60a5fa", "#f59e0b", "#8b5cf6"]}
                        axisBottom={{
                          tickSize: 0,
                          tickPadding: 5,
                          tickRotation: 0,
                        }}
                        axisLeft={{
                          tickSize: 0,
                          tickPadding: 5,
                          tickRotation: 0,
                          tickValues: 5,
                        }}
                        enableGridY={false}
                        enableLabel={false}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Top Performers Gallery */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Top Performers Gallery</CardTitle>
                <CardDescription>Highest performing content across platforms</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Sort By
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex-none w-[280px]">
                  <div className="rounded-lg border overflow-hidden">
                    <div className="aspect-video bg-slate-200 relative">
                      <img
                        src={`/placeholder.svg?height=158&width=280&text=Content+${i + 1}`}
                        alt={`Content ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-blue-500">TikTok</Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                        <h3 className="text-white font-medium text-sm truncate">Top Performing Content #{i + 1}</h3>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder.svg?height=24&width=24" />
                            <AvatarFallback>AC</AvatarFallback>
                          </Avatar>
                          <span className="text-xs font-medium">Acme Inc</span>
                        </div>
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                          Trending
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <div className="text-muted-foreground">Views</div>
                          <div className="font-medium">{(Math.random() * 100000).toFixed(0)}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Engagement</div>
                          <div className="font-medium">{(Math.random() * 5 + 2).toFixed(1)}%</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Conversion</div>
                          <div className="font-medium">{(Math.random() * 2 + 0.5).toFixed(1)}%</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Shares</div>
                          <div className="font-medium">{(Math.random() * 1000).toFixed(0)}</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-3">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline">View All Content</Button>
          </CardFooter>
        </Card>
      </div>

      {/* AI Assistant Panel */}
      <AIAssistant />
    </div>
  )
}

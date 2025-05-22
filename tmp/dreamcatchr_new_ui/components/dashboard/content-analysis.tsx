"use client"

import { useState } from "react"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveHeatMap } from "@nivo/heatmap"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveScatterPlot } from "@nivo/scatterplot"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Grid, List } from "lucide-react"

// Sample data for content type performance
const contentTypeData = [
  { type: "Entertainment", engagement: 3.2, views: 245000, conversion: 1.1 },
  { type: "Educational", engagement: 2.4, views: 180000, conversion: 1.8 },
  { type: "Promotional", engagement: 1.9, views: 120000, conversion: 2.4 },
  { type: "UGC", engagement: 3.8, views: 210000, conversion: 0.9 },
  { type: "Creator", engagement: 4.2, views: 280000, conversion: 1.5 },
]

// Sample data for format performance
const formatData = [
  { format: "Short Form", count: 68, engagement: 3.4 },
  { format: "Medium Form", count: 42, engagement: 2.8 },
  { format: "Long Form", count: 18, engagement: 2.1 },
  { format: "Stories/Reels", count: 36, engagement: 3.9 },
]

// Sample data for theme performance
const themeData = [
  { id: "Lifestyle", label: "Lifestyle", value: 42, color: "#8b5cf6" },
  { id: "Technology", label: "Technology", value: 38, color: "#3b82f6" },
  { id: "Health", label: "Health", value: 35, color: "#10b981" },
  { id: "Travel", label: "Travel", value: 32, color: "#f59e0b" },
  { id: "Food", label: "Food", value: 28, color: "#ef4444" },
  { id: "Fashion", label: "Fashion", value: 25, color: "#ec4899" },
  { id: "Beauty", label: "Beauty", value: 22, color: "#f472b6" },
  { id: "Fitness", label: "Fitness", value: 20, color: "#f97316" },
]

// Sample data for platform performance
const platformData = [
  { platform: "TikTok", count: 48, engagement: 3.8 },
  { platform: "Instagram", count: 42, engagement: 2.9 },
  { platform: "YouTube", count: 24, engagement: 2.2 },
  { platform: "Facebook", count: 14, engagement: 1.8 },
]

// Sample data for content performance over time
const timeSeriesData = [
  {
    id: "Views",
    data: [
      { x: "Jan", y: 120000 },
      { x: "Feb", y: 145000 },
      { x: "Mar", y: 210000 },
      { x: "Apr", y: 240000 },
      { x: "May", y: 280000 },
      { x: "Jun", y: 320000 },
    ],
  },
  {
    id: "Engagement",
    data: [
      { x: "Jan", y: 4200 },
      { x: "Feb", y: 5100 },
      { x: "Mar", y: 7350 },
      { x: "Apr", y: 8400 },
      { x: "May", y: 9800 },
      { x: "Jun", y: 11200 },
    ],
  },
]

// Sample data for content performance scatter plot
const scatterData = [
  {
    id: "Entertainment",
    data: Array.from({ length: 20 }, () => ({
      x: Math.random() * 10000 + 5000,
      y: Math.random() * 5 + 2,
    })),
  },
  {
    id: "Educational",
    data: Array.from({ length: 20 }, () => ({
      x: Math.random() * 8000 + 3000,
      y: Math.random() * 3 + 1.5,
    })),
  },
  {
    id: "Promotional",
    data: Array.from({ length: 20 }, () => ({
      x: Math.random() * 6000 + 2000,
      y: Math.random() * 2 + 1,
    })),
  },
  {
    id: "UGC",
    data: Array.from({ length: 20 }, () => ({
      x: Math.random() * 12000 + 8000,
      y: Math.random() * 6 + 3,
    })),
  },
]

// Sample data for time performance heatmap
const timeHeatmapData = [
  {
    id: "Monday",
    data: [
      { x: "9AM", y: 45 },
      { x: "12PM", y: 65 },
      { x: "3PM", y: 70 },
      { x: "6PM", y: 85 },
      { x: "9PM", y: 60 },
    ],
  },
  {
    id: "Tuesday",
    data: [
      { x: "9AM", y: 50 },
      { x: "12PM", y: 60 },
      { x: "3PM", y: 75 },
      { x: "6PM", y: 90 },
      { x: "9PM", y: 65 },
    ],
  },
  {
    id: "Wednesday",
    data: [
      { x: "9AM", y: 55 },
      { x: "12PM", y: 70 },
      { x: "3PM", y: 80 },
      { x: "6PM", y: 95 },
      { x: "9PM", y: 70 },
    ],
  },
  {
    id: "Thursday",
    data: [
      { x: "9AM", y: 60 },
      { x: "12PM", y: 75 },
      { x: "3PM", y: 85 },
      { x: "6PM", y: 100 },
      { x: "9PM", y: 75 },
    ],
  },
  {
    id: "Friday",
    data: [
      { x: "9AM", y: 65 },
      { x: "12PM", y: 80 },
      { x: "3PM", y: 90 },
      { x: "6PM", y: 95 },
      { x: "9PM", y: 85 },
    ],
  },
  {
    id: "Saturday",
    data: [
      { x: "9AM", y: 40 },
      { x: "12PM", y: 55 },
      { x: "3PM", y: 65 },
      { x: "6PM", y: 75 },
      { x: "9PM", y: 90 },
    ],
  },
  {
    id: "Sunday",
    data: [
      { x: "9AM", y: 35 },
      { x: "12PM", y: 50 },
      { x: "3PM", y: 60 },
      { x: "6PM", y: 70 },
      { x: "9PM", y: 80 },
    ],
  },
]

export function ContentAnalysis() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Telkom brand colors for charts
  const telkomColors = {
    primary: ["#4495d4", "#3a7db4", "#2f6694", "#254f74", "#1a3754"],
    secondary: ["#00a4a7", "#89ba17", "#ff671f", "#6e2585"],
    categorical: [
      "#4495d4", // Telkom blue
      "#00a4a7", // Teal
      "#89ba17", // Green
      "#ff671f", // Orange
      "#6e2585", // Purple
      "#00b2e3", // Cyan
      "#1e3c64", // Dark blue
      "#a9d9f7", // Light blue
    ],
  }

  return (
    <Card>
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
            <TabsTrigger value="time">By Time</TabsTrigger>
          </TabsList>

          <TabsContent value="content-type">
            <div className="space-y-6">
              {/* Content Type Bar Chart */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Content Type Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveBar
                      data={contentTypeData}
                      keys={["engagement", "conversion"]}
                      indexBy="type"
                      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                      padding={0.3}
                      valueScale={{ type: "linear" }}
                      indexScale={{ type: "band", round: true }}
                      colors={telkomColors.categorical}
                      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                      axisTop={null}
                      axisRight={null}
                      axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Content Type",
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
                      animate={false}
                      theme={{
                        tooltip: {
                          container: {
                            background: "#1e3c64",
                            color: "white",
                            fontSize: "12px",
                            borderRadius: "4px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                          },
                        },
                      }}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Content Performance Scatter Plot */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Content Performance Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveScatterPlot
                      data={scatterData}
                      margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
                      xScale={{ type: "linear", min: 0, max: "auto" }}
                      yScale={{ type: "linear", min: 0, max: "auto" }}
                      blendMode="multiply"
                      axisTop={null}
                      axisRight={null}
                      axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Views",
                        legendPosition: "middle",
                        legendOffset: 46,
                      }}
                      axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Engagement Rate (%)",
                        legendPosition: "middle",
                        legendOffset: -60,
                      }}
                      legends={[
                        {
                          anchor: "bottom-right",
                          direction: "column",
                          justify: false,
                          translateX: 130,
                          translateY: 0,
                          itemWidth: 100,
                          itemHeight: 12,
                          itemsSpacing: 5,
                          itemDirection: "left-to-right",
                          symbolSize: 12,
                          symbolShape: "circle",
                        },
                      ]}
                      animate={false}
                      colors={telkomColors.categorical}
                      theme={{
                        tooltip: {
                          container: {
                            background: "#1e3c64",
                            color: "white",
                            fontSize: "12px",
                            borderRadius: "4px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                          },
                        },
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="format">
            <div className="space-y-6">
              {/* Format Bar Chart */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Format Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveBar
                      data={formatData}
                      keys={["engagement"]}
                      indexBy="format"
                      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                      padding={0.3}
                      valueScale={{ type: "linear" }}
                      indexScale={{ type: "band", round: true }}
                      colors={telkomColors.primary}
                      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                      axisTop={null}
                      axisRight={null}
                      axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Content Format",
                        legendPosition: "middle",
                        legendOffset: 32,
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
                      animate={false}
                      theme={{
                        tooltip: {
                          container: {
                            background: "#1e3c64",
                            color: "white",
                            fontSize: "12px",
                            borderRadius: "4px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                          },
                        },
                      }}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Format Distribution Bubble Chart */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Format Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsivePie
                      data={formatData.map((item) => ({
                        id: item.format,
                        label: item.format,
                        value: item.count,
                      }))}
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
                      colors={telkomColors.primary}
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
                        },
                      ]}
                      animate={false}
                      theme={{
                        tooltip: {
                          container: {
                            background: "#1e3c64",
                            color: "white",
                            fontSize: "12px",
                            borderRadius: "4px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                          },
                        },
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="theme">
            <div className="space-y-6">
              {/* Theme Pie Chart */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Theme Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsivePie
                      data={themeData}
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
                      colors={{ datum: "data.color" }}
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
                        },
                      ]}
                      animate={false}
                      theme={{
                        tooltip: {
                          container: {
                            background: "#1e3c64",
                            color: "white",
                            fontSize: "12px",
                            borderRadius: "4px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                          },
                        },
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="platform">
            <div className="space-y-6">
              {/* Platform Bar Chart */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Platform Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveBar
                      data={platformData}
                      keys={["engagement"]}
                      indexBy="platform"
                      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                      padding={0.3}
                      valueScale={{ type: "linear" }}
                      indexScale={{ type: "band", round: true }}
                      colors={["#00f2ea", "#e1306c", "#ff0000", "#4267B2"]}
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
                        legend: "Engagement Rate (%)",
                        legendPosition: "middle",
                        legendOffset: -40,
                      }}
                      labelSkipWidth={12}
                      labelSkipHeight={12}
                      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                      animate={false}
                      theme={{
                        tooltip: {
                          container: {
                            background: "#1e3c64",
                            color: "white",
                            fontSize: "12px",
                            borderRadius: "4px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                          },
                        },
                      }}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Platform Time Series */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Platform Performance Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveLine
                      data={timeSeriesData}
                      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                      xScale={{ type: "point" }}
                      yScale={{
                        type: "linear",
                        min: "auto",
                        max: "auto",
                        stacked: false,
                        reverse: false,
                      }}
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
                        legend: "Count",
                        legendOffset: -40,
                        legendPosition: "middle",
                      }}
                      pointSize={10}
                      pointColor={{ theme: "background" }}
                      pointBorderWidth={2}
                      pointBorderColor={{ from: "serieColor" }}
                      pointLabelYOffset={-12}
                      useMesh={true}
                      colors={telkomColors.primary}
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
                      animate={false}
                      theme={{
                        tooltip: {
                          container: {
                            background: "#1e3c64",
                            color: "white",
                            fontSize: "12px",
                            borderRadius: "4px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                          },
                        },
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="time">
            <div className="space-y-6">
              {/* Time Heatmap */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Content Performance by Day & Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveHeatMap
                      data={timeHeatmapData}
                      margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
                      valueFormat=">-.2s"
                      axisTop={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: -45,
                        legend: "",
                        legendOffset: 46,
                      }}
                      axisRight={null}
                      axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Time of Day",
                        legendPosition: "middle",
                        legendOffset: 36,
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
                      animate={false}
                      legends={[
                        {
                          anchor: "right",
                          translateX: 30,
                          translateY: 0,
                          length: 200,
                          thickness: 10,
                          direction: "column",
                          tickPosition: "after",
                          tickSize: 3,
                          tickSpacing: 4,
                          tickOverlap: false,
                          tickFormat: ">-.2s",
                          title: "Engagement Score",
                          titleAlign: "start",
                          titleOffset: 4,
                        },
                      ]}
                      theme={{
                        tooltip: {
                          container: {
                            background: "#1e3c64",
                            color: "white",
                            fontSize: "12px",
                            borderRadius: "4px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                          },
                        },
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

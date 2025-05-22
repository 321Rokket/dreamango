"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, Filter, RefreshCw } from "lucide-react"
import { ResponsiveLine } from "@nivo/line"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveHeatMap } from "@nivo/heatmap"

export default function AnalyticsPage() {
  // Performance trends data
  const performanceData = [
    {
      id: "Impressions",
      color: "hsl(210, 70%, 50%)",
      data: [
        { x: "Jan", y: 1.2 },
        { x: "Feb", y: 1.5 },
        { x: "Mar", y: 1.8 },
        { x: "Apr", y: 2.1 },
        { x: "May", y: 2.4 },
        { x: "Jun", y: 2.7 },
      ],
    },
    {
      id: "Engagement",
      color: "hsl(160, 70%, 50%)",
      data: [
        { x: "Jan", y: 3.1 },
        { x: "Feb", y: 3.4 },
        { x: "Mar", y: 3.6 },
        { x: "Apr", y: 3.9 },
        { x: "May", y: 4.1 },
        { x: "Jun", y: 4.3 },
      ],
    },
    {
      id: "Conversion",
      color: "hsl(30, 70%, 50%)",
      data: [
        { x: "Jan", y: 1.8 },
        { x: "Feb", y: 2.0 },
        { x: "Mar", y: 2.2 },
        { x: "Apr", y: 2.4 },
        { x: "May", y: 2.6 },
        { x: "Jun", y: 2.8 },
      ],
    },
  ]

  // Channel distribution data
  const channelData = [
    { id: "Social", value: 45, color: "hsl(210, 70%, 50%)" },
    { id: "Search", value: 25, color: "hsl(160, 70%, 50%)" },
    { id: "Direct", value: 15, color: "hsl(30, 70%, 50%)" },
    { id: "Email", value: 10, color: "hsl(270, 70%, 50%)" },
    { id: "Referral", value: 5, color: "hsl(0, 70%, 50%)" },
  ]

  // Content performance data
  const contentData = [
    { type: "Video", organic: 85, paid: 45 },
    { type: "Image", organic: 65, paid: 35 },
    { type: "Text", organic: 40, paid: 20 },
    { type: "Story", organic: 55, paid: 30 },
    { type: "Carousel", organic: 70, paid: 40 },
    { type: "Live", organic: 90, paid: 50 },
  ]

  // Audience demographics data
  const demographicsData = [
    { id: "18-24", value: 25, color: "hsl(210, 70%, 50%)" },
    { id: "25-34", value: 35, color: "hsl(160, 70%, 50%)" },
    { id: "35-44", value: 20, color: "hsl(30, 70%, 50%)" },
    { id: "45-54", value: 12, color: "hsl(270, 70%, 50%)" },
    { id: "55+", value: 8, color: "hsl(0, 70%, 50%)" },
  ]

  // Audience behavior data
  const behaviorData = [
    { day: "Monday", morning: 45, afternoon: 60, evening: 75, night: 30 },
    { day: "Tuesday", morning: 50, afternoon: 65, evening: 70, night: 35 },
    { day: "Wednesday", morning: 55, afternoon: 70, evening: 80, night: 40 },
    { day: "Thursday", morning: 60, afternoon: 75, evening: 85, night: 45 },
    { day: "Friday", morning: 65, afternoon: 80, evening: 90, night: 50 },
    { day: "Saturday", morning: 70, afternoon: 85, evening: 95, night: 55 },
    { day: "Sunday", morning: 75, afternoon: 90, evening: 100, night: 60 },
  ]

  // Conversion funnel data
  const funnelData = [
    { stage: "Awareness", value: 100 },
    { stage: "Interest", value: 70 },
    { stage: "Consideration", value: 45 },
    { stage: "Intent", value: 30 },
    { stage: "Evaluation", value: 20 },
    { stage: "Purchase", value: 15 },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive analytics for your content and marketing performance</p>
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
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content Performance</TabsTrigger>
          <TabsTrigger value="audience">Audience Insights</TabsTrigger>
          <TabsTrigger value="conversion">Conversion Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.7M</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
                <div className="mt-4 h-1 w-full rounded-full bg-muted">
                  <div className="h-1 w-3/4 rounded-full bg-primary"></div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.3%</div>
                <p className="text-xs text-muted-foreground">+0.8% from last month</p>
                <div className="mt-4 h-1 w-full rounded-full bg-muted">
                  <div className="h-1 w-2/3 rounded-full bg-primary"></div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.8%</div>
                <p className="text-xs text-muted-foreground">+0.4% from last month</p>
                <div className="mt-4 h-1 w-full rounded-full bg-muted">
                  <div className="h-1 w-1/2 rounded-full bg-primary"></div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">320%</div>
                <p className="text-xs text-muted-foreground">+45% from last month</p>
                <div className="mt-4 h-1 w-full rounded-full bg-muted">
                  <div className="h-1 w-4/5 rounded-full bg-primary"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>Key metrics over the past 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveLine
                    data={performanceData}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: "point" }}
                    yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
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
                      legend: "Value",
                      legendOffset: -40,
                      legendPosition: "middle",
                    }}
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
                        effects: [
                          {
                            on: "hover",
                            style: {
                              itemBackground: "rgba(0, 0, 0, .03)",
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
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Channel Distribution</CardTitle>
                <CardDescription>Performance by marketing channel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsivePie
                    data={channelData}
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

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Performance Analysis</CardTitle>
              <CardDescription>Detailed breakdown of content performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px]">
                <ResponsiveBar
                  data={contentData}
                  keys={["organic", "paid"]}
                  indexBy="type"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  groupMode="grouped"
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={{ scheme: "nivo" }}
                  defs={[
                    {
                      id: "dots",
                      type: "patternDots",
                      background: "inherit",
                      color: "#38bcb2",
                      size: 4,
                      padding: 1,
                      stagger: true,
                    },
                    {
                      id: "lines",
                      type: "patternLines",
                      background: "inherit",
                      color: "#eed312",
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10,
                    },
                  ]}
                  fill={[
                    {
                      match: {
                        id: "paid",
                      },
                      id: "dots",
                    },
                  ]}
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
                    legend: "Engagement Score",
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
                  role="application"
                  ariaLabel="Content Performance Analysis"
                  barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in content type: ${e.indexValue}`}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Audience Demographics</CardTitle>
                <CardDescription>Breakdown of your audience by demographics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsivePie
                    data={demographicsData}
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
            <Card>
              <CardHeader>
                <CardTitle>Audience Behavior</CardTitle>
                <CardDescription>How your audience interacts with your content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveHeatMap
                    data={behaviorData}
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
          </div>
        </TabsContent>

        <TabsContent value="conversion" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Funnel</CardTitle>
              <CardDescription>Visualize your customer journey and conversion points</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveBar
                  data={funnelData}
                  keys={["value"]}
                  indexBy="stage"
                  margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                  padding={0.3}
                  layout="horizontal"
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={{ scheme: "category10" }}
                  borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Conversion Rate (%)",
                    legendPosition: "middle",
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Funnel Stage",
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
        </TabsContent>
      </Tabs>
    </div>
  )
}

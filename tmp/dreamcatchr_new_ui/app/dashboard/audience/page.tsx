"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, Filter, RefreshCw } from "lucide-react"
import { NivoCharts } from "@/components/dashboard/nivo-charts"

export default function AudiencePage() {
  // Age distribution data
  const ageDistributionData = [
    { id: "18-24", label: "18-24", value: 32 },
    { id: "25-34", label: "25-34", value: 38 },
    { id: "35-44", label: "35-44", value: 18 },
    { id: "45-54", label: "45-54", value: 8 },
    { id: "55+", label: "55+", value: 4 },
  ]

  // Gender distribution data
  const genderDistributionData = [
    { id: "Female", label: "Female", value: 58 },
    { id: "Male", label: "Male", value: 40 },
    { id: "Non-binary", label: "Non-binary", value: 2 },
  ]

  // Geographic distribution data
  const locationData = [
    { country: "South Africa", value: 42 },
    { country: "Nigeria", value: 15 },
    { country: "Kenya", value: 12 },
    { country: "Ghana", value: 8 },
    { country: "Tanzania", value: 6 },
    { country: "Uganda", value: 5 },
    { country: "Zimbabwe", value: 4 },
    { country: "Botswana", value: 3 },
    { country: "Namibia", value: 3 },
    { country: "Other", value: 2 },
  ]

  // Audience growth data
  const audienceGrowthData = [
    {
      id: "Total Audience",
      data: [
        { x: "Jan", y: 800000 },
        { x: "Feb", y: 850000 },
        { x: "Mar", y: 900000 },
        { x: "Apr", y: 950000 },
        { x: "May", y: 1000000 },
        { x: "Jun", y: 1050000 },
        { x: "Jul", y: 1080000 },
        { x: "Aug", y: 1100000 },
        { x: "Sep", y: 1130000 },
        { x: "Oct", y: 1150000 },
        { x: "Nov", y: 1180000 },
        { x: "Dec", y: 1200000 },
      ],
    },
  ]

  // Platform usage data
  const platformUsageData = [
    { platform: "TikTok", users: 480000 },
    { platform: "Instagram", users: 420000 },
    { platform: "YouTube", users: 240000 },
    { platform: "Facebook", users: 140000 },
    { platform: "Twitter", users: 120000 },
  ]

  // Content preferences data
  const contentPreferencesData = [
    { type: "Short Videos", value: 42 },
    { type: "Stories", value: 28 },
    { type: "Live Streams", value: 15 },
    { type: "Long Videos", value: 10 },
    { type: "Text Posts", value: 5 },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Audience Insights</h1>
          <p className="text-muted-foreground">Understand your audience demographics, behavior, and preferences</p>
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
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
          <TabsTrigger value="segmentation">Segmentation</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Audience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2M</div>
                <p className="text-xs text-muted-foreground">+15.2% from last month</p>
                <div className="mt-4 h-1 w-full rounded-full bg-muted">
                  <div className="h-1 w-3/4 rounded-full bg-primary"></div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">428K</div>
                <p className="text-xs text-muted-foreground">+8.7% from last month</p>
                <div className="mt-4 h-1 w-full rounded-full bg-muted">
                  <div className="h-1 w-2/3 rounded-full bg-primary"></div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8%</div>
                <p className="text-xs text-muted-foreground">+0.6% from last month</p>
                <div className="mt-4 h-1 w-full rounded-full bg-muted">
                  <div className="h-1 w-1/2 rounded-full bg-primary"></div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Session Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3:42</div>
                <p className="text-xs text-muted-foreground">+0:18 from last month</p>
                <div className="mt-4 h-1 w-full rounded-full bg-muted">
                  <div className="h-1 w-2/5 rounded-full bg-primary"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Audience Growth</CardTitle>
                <CardDescription>Monthly audience growth over the past year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <NivoCharts.LineChart
                    data={audienceGrowthData}
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
                      legend: "Audience",
                      legendOffset: -40,
                      legendPosition: "middle",
                      format: (value) => `${value / 1000}k`,
                    }}
                    colors={{ scheme: "category10" }}
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
                <CardTitle>Age Distribution</CardTitle>
                <CardDescription>Breakdown of audience by age groups</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <NivoCharts.PieChart
                    data={ageDistributionData}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{
                      from: "color",
                      modifiers: [["darker", 0.2]],
                    }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: "color" }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                      from: "color",
                      modifiers: [["darker", 2]],
                    }}
                    defs={[
                      {
                        id: "dots",
                        type: "patternDots",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.3)",
                        size: 4,
                        padding: 1,
                        stagger: true,
                      },
                      {
                        id: "lines",
                        type: "patternLines",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.3)",
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                      },
                    ]}
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

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Gender Distribution</CardTitle>
                <CardDescription>Breakdown of audience by gender</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <NivoCharts.PieChart
                    data={genderDistributionData}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{
                      from: "color",
                      modifiers: [["darker", 0.2]],
                    }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: "color" }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                      from: "color",
                      modifiers: [["darker", 2]],
                    }}
                    colors={["#e1306c", "#4267B2", "#8a2be2"]}
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
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Top locations of your audience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <NivoCharts.BarChart
                    data={locationData.map((item) => ({
                      country: item.country,
                      value: item.value,
                    }))}
                    keys={["value"]}
                    indexBy="country"
                    margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={{ scheme: "nivo" }}
                    borderColor={{
                      from: "color",
                      modifiers: [["darker", 1.6]],
                    }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: -45,
                      legend: "Country",
                      legendPosition: "middle",
                      legendOffset: 40,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Percentage",
                      legendPosition: "middle",
                      legendOffset: -40,
                      format: (value) => `${value}%`,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{
                      from: "color",
                      modifiers: [["darker", 1.6]],
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Demographics</CardTitle>
              <CardDescription>Comprehensive breakdown of your audience demographics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px]">
                <NivoCharts.BarChart
                  data={[
                    {
                      demographic: "18-24 Female",
                      value: 22,
                      engagement: 4.2,
                    },
                    {
                      demographic: "18-24 Male",
                      value: 10,
                      engagement: 3.8,
                    },
                    {
                      demographic: "25-34 Female",
                      value: 24,
                      engagement: 3.9,
                    },
                    {
                      demographic: "25-34 Male",
                      value: 14,
                      engagement: 3.5,
                    },
                    {
                      demographic: "35-44 Female",
                      value: 8,
                      engagement: 2.8,
                    },
                    {
                      demographic: "35-44 Male",
                      value: 10,
                      engagement: 2.5,
                    },
                    {
                      demographic: "45-54 Female",
                      value: 3,
                      engagement: 2.2,
                    },
                    {
                      demographic: "45-54 Male",
                      value: 5,
                      engagement: 1.9,
                    },
                    {
                      demographic: "55+ Female",
                      value: 1,
                      engagement: 1.5,
                    },
                    {
                      demographic: "55+ Male",
                      value: 3,
                      engagement: 1.2,
                    },
                  ]}
                  keys={["value", "engagement"]}
                  indexBy="demographic"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  groupMode="grouped"
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={{ scheme: "paired" }}
                  borderColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                  }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -45,
                    legend: "Demographic Group",
                    legendPosition: "middle",
                    legendOffset: 40,
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
                  labelTextColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                  }}
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
        </TabsContent>

        <TabsContent value="behavior" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Content Preferences</CardTitle>
                <CardDescription>What your audience engages with most</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <NivoCharts.PieChart
                    data={contentPreferencesData.map((item) => ({
                      id: item.type,
                      label: item.type,
                      value: item.value,
                    }))}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{
                      from: "color",
                      modifiers: [["darker", 0.2]],
                    }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: "color" }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                      from: "color",
                      modifiers: [["darker", 2]],
                    }}
                    colors={{ scheme: "category10" }}
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
                <CardTitle>Platform Usage</CardTitle>
                <CardDescription>Which platforms your audience prefers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <NivoCharts.BarChart
                    data={platformUsageData.map((item) => ({
                      platform: item.platform,
                      users: item.users / 1000, // Convert to thousands for display
                    }))}
                    keys={["users"]}
                    indexBy="platform"
                    margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={({ id, data }) => {
                      const platform = data.platform
                      switch (platform) {
                        case "TikTok":
                          return "#00f2ea"
                        case "Instagram":
                          return "#e1306c"
                        case "YouTube":
                          return "#ff0000"
                        case "Facebook":
                          return "#4267B2"
                        case "Twitter":
                          return "#1DA1F2"
                        default:
                          return "#4495d4"
                      }
                    }}
                    borderColor={{
                      from: "color",
                      modifiers: [["darker", 1.6]],
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
                      legend: "Users (thousands)",
                      legendPosition: "middle",
                      legendOffset: -40,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{
                      from: "color",
                      modifiers: [["darker", 1.6]],
                    }}
                    role="application"
                    ariaLabel="Platform usage chart"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="segmentation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Audience Segments</CardTitle>
              <CardDescription>Key audience segments and their characteristics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <NivoCharts.BarChart
                  data={[
                    {
                      segment: "Casual Viewers",
                      size: 45,
                      engagement: 1.8,
                      conversion: 0.5,
                    },
                    {
                      segment: "Regular Engagers",
                      size: 30,
                      engagement: 4.2,
                      conversion: 1.2,
                    },
                    {
                      segment: "Content Enthusiasts",
                      size: 15,
                      engagement: 7.5,
                      conversion: 2.8,
                    },
                    {
                      segment: "Brand Advocates",
                      size: 10,
                      engagement: 12.3,
                      conversion: 5.4,
                    },
                  ]}
                  keys={["size", "engagement", "conversion"]}
                  indexBy="segment"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  groupMode="grouped"
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={{ scheme: "nivo" }}
                  borderColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                  }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Audience Segment",
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
                  labelTextColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                  }}
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
        </TabsContent>
      </Tabs>
    </div>
  )
}

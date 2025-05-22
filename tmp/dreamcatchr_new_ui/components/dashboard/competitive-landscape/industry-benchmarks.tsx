"use client"

import { ResponsiveBar } from "@nivo/bar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function IndustryBenchmarks() {
  // Sample data for Telco Industry Benchmarks
  const telcoBenchmarks = [
    { metric: "Engagement Rate", brand: 4.2, industry: 3.1, percentile: 85 },
    { metric: "Follower Growth", brand: 12, industry: 8, percentile: 78 },
    { metric: "Content Output", brand: 120, industry: 95, percentile: 82 },
    { metric: "Response Time", brand: 45, industry: 120, percentile: 90 },
  ]

  // Sample data for Entertainment Industry Benchmarks
  const entertainmentBenchmarks = [
    { metric: "Video Views", brand: 25000, industry: 18000, percentile: 72 },
    { metric: "Comment Rate", brand: 2.8, industry: 3.5, percentile: 65 },
    { metric: "Share Rate", brand: 1.5, industry: 1.2, percentile: 80 },
    { metric: "Creator Collabs", brand: 24, industry: 30, percentile: 68 },
  ]

  // Sample data for Platform Benchmarks
  const platformBenchmarks = [
    { platform: "Instagram", brand: 3.8, industry: 3.2, percentile: 75 },
    { platform: "TikTok", brand: 5.2, industry: 4.5, percentile: 82 },
    { platform: "Twitter", brand: 2.1, industry: 1.8, percentile: 70 },
    { platform: "YouTube", brand: 4.5, industry: 3.9, percentile: 78 },
  ]

  return (
    <Tabs defaultValue="telco" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="telco">Telco Industry</TabsTrigger>
        <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
        <TabsTrigger value="platform">Platform Specific</TabsTrigger>
      </TabsList>

      <TabsContent value="telco" className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Telco Industry Comparison</CardTitle>
              <CardDescription className="text-xs">Your performance vs. industry average</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveBar
                  data={telcoBenchmarks.map((item) => ({
                    metric: item.metric,
                    "Your Brand": item.brand,
                    "Industry Avg": item.industry,
                  }))}
                  keys={["Your Brand", "Industry Avg"]}
                  indexBy="metric"
                  margin={{ top: 10, right: 10, bottom: 40, left: 60 }}
                  padding={0.3}
                  groupMode="grouped"
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={["hsl(215, 70%, 50%)", "hsl(0, 0%, 70%)"]}
                  borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -45,
                    legendPosition: "middle",
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendPosition: "middle",
                    legendOffset: -50,
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  legends={[
                    {
                      dataFrom: "keys",
                      anchor: "top",
                      direction: "row",
                      justify: false,
                      translateX: 0,
                      translateY: -20,
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

          <Card className="border shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Percentile Rankings</CardTitle>
              <CardDescription className="text-xs">Your position within the industry</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 py-2">
                {telcoBenchmarks.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{item.metric}</span>
                      <span className="font-medium">{item.percentile}th percentile</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${item.percentile}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="entertainment" className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Entertainment Industry Comparison</CardTitle>
              <CardDescription className="text-xs">Cross-industry benchmarking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveBar
                  data={entertainmentBenchmarks.map((item) => ({
                    metric: item.metric,
                    "Your Brand": item.brand,
                    "Industry Avg": item.industry,
                  }))}
                  keys={["Your Brand", "Industry Avg"]}
                  indexBy="metric"
                  margin={{ top: 10, right: 10, bottom: 40, left: 60 }}
                  padding={0.3}
                  groupMode="grouped"
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={["hsl(215, 70%, 50%)", "hsl(43, 70%, 50%)"]}
                  borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -45,
                    legendPosition: "middle",
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendPosition: "middle",
                    legendOffset: -50,
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  legends={[
                    {
                      dataFrom: "keys",
                      anchor: "top",
                      direction: "row",
                      justify: false,
                      translateX: 0,
                      translateY: -20,
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

          <Card className="border shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Percentile Rankings</CardTitle>
              <CardDescription className="text-xs">Your position within entertainment industry</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 py-2">
                {entertainmentBenchmarks.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{item.metric}</span>
                      <span className="font-medium">{item.percentile}th percentile</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: `${item.percentile}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="platform" className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Platform-Specific Benchmarks</CardTitle>
              <CardDescription className="text-xs">Engagement rates by platform (%)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveBar
                  data={platformBenchmarks.map((item) => ({
                    platform: item.platform,
                    "Your Brand": item.brand,
                    "Industry Avg": item.industry,
                  }))}
                  keys={["Your Brand", "Industry Avg"]}
                  indexBy="platform"
                  margin={{ top: 10, right: 10, bottom: 40, left: 60 }}
                  padding={0.3}
                  groupMode="grouped"
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={["hsl(215, 70%, 50%)", "hsl(273, 70%, 50%)"]}
                  borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -45,
                    legendPosition: "middle",
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendPosition: "middle",
                    legendOffset: -50,
                    legend: "Engagement Rate (%)",
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  legends={[
                    {
                      dataFrom: "keys",
                      anchor: "top",
                      direction: "row",
                      justify: false,
                      translateX: 0,
                      translateY: -20,
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

          <Card className="border shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Platform Percentile Rankings</CardTitle>
              <CardDescription className="text-xs">Your position by platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 py-2">
                {platformBenchmarks.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{item.platform}</span>
                      <span className="font-medium">{item.percentile}th percentile</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary rounded-full" style={{ width: `${item.percentile}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}

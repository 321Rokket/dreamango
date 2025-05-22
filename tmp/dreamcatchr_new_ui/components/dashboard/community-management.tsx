"use client"
import { ResponsiveLine } from "@nivo/line"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveBar } from "@nivo/bar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Sample data for response metrics
const responseTimeData = [
  {
    id: "Response Time",
    data: [
      { x: "Jan", y: 3.2 },
      { x: "Feb", y: 2.9 },
      { x: "Mar", y: 2.7 },
      { x: "Apr", y: 2.5 },
      { x: "May", y: 2.4 },
      { x: "Jun", y: 2.2 },
    ],
  },
  {
    id: "Target",
    data: [
      { x: "Jan", y: 2.5 },
      { x: "Feb", y: 2.5 },
      { x: "Mar", y: 2.5 },
      { x: "Apr", y: 2.5 },
      { x: "May", y: 2.5 },
      { x: "Jun", y: 2.5 },
    ],
  },
]

// Sample data for platform response performance
const platformResponseData = [
  { platform: "TikTok", time: 1.8, rate: 95 },
  { platform: "Instagram", time: 2.2, rate: 92 },
  { platform: "YouTube", time: 3.5, rate: 85 },
  { platform: "Facebook", time: 4.2, rate: 78 },
]

// Sample data for sentiment distribution
const sentimentData = [
  { id: "Positive", label: "Positive", value: 68, color: "#10b981" },
  { id: "Neutral", label: "Neutral", value: 22, color: "#94a3b8" },
  { id: "Negative", label: "Negative", value: 10, color: "#ef4444" },
]

// Sample data for sentiment trend
const sentimentTrendData = [
  {
    id: "Positive",
    data: [
      { x: "Jan", y: 62 },
      { x: "Feb", y: 64 },
      { x: "Mar", y: 66 },
      { x: "Apr", y: 67 },
      { x: "May", y: 68 },
      { x: "Jun", y: 70 },
    ],
  },
  {
    id: "Neutral",
    data: [
      { x: "Jan", y: 26 },
      { x: "Feb", y: 25 },
      { x: "Mar", y: 24 },
      { x: "Apr", y: 23 },
      { x: "May", y: 22 },
      { x: "Jun", y: 20 },
    ],
  },
  {
    id: "Negative",
    data: [
      { x: "Jan", y: 12 },
      { x: "Feb", y: 11 },
      { x: "Mar", y: 10 },
      { x: "Apr", y: 10 },
      { x: "May", y: 10 },
      { x: "Jun", y: 10 },
    ],
  },
]

// Sample data for engagement quality
const engagementQualityData = [
  { metric: "Question Rate", value: 18 },
  { metric: "UGC Generation Rate", value: 12 },
  { metric: "Community-to-Community", value: 32 },
  { metric: "Meaningful Interactions", value: 62 },
  { metric: "Repeat Engagement", value: 28 },
]

export function CommunityManagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Community Management</CardTitle>
        <CardDescription>Monitor and manage community interactions</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="response">
          <TabsList className="mb-4">
            <TabsTrigger value="response">Response</TabsTrigger>
            <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
            <TabsTrigger value="quality">Quality</TabsTrigger>
          </TabsList>

          <TabsContent value="response" className="space-y-6">
            {/* Response Time Trend */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Response Time Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveLine
                    data={responseTimeData}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: "point" }}
                    yScale={{
                      type: "linear",
                      min: "auto",
                      max: "auto",
                      stacked: false,
                      reverse: false,
                    }}
                    yFormat=" >-.1f"
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
                      legend: "Response Time (hours)",
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
                      },
                    ]}
                    animate={false}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Platform Response Performance */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Platform Response Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {platformResponseData.map((platform, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>{platform.platform}</span>
                        <span className="font-medium">{platform.time}h avg. time</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <Progress value={platform.rate} className="h-2">
                            <div className="h-full rounded-full bg-blue-500" style={{ width: `${platform.rate}%` }} />
                          </Progress>
                        </div>
                        <div className="w-16 text-sm text-right">{platform.rate}% rate</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pending Responses */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pending Responses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border overflow-hidden">
                  <div className="bg-muted p-2 text-xs font-medium">12 comments awaiting response</div>
                  <div className="divide-y">
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">TikTok comment</div>
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High Priority</Badge>
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">Waiting for 3.5 hours</div>
                      <div className="mt-2 text-sm">
                        "When will the new data bundle promotion be available in my area?"
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Instagram comment</div>
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Medium Priority</Badge>
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">Waiting for 2.1 hours</div>
                      <div className="mt-2 text-sm">
                        "I've been trying to reach customer service about my account issue."
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">YouTube comment</div>
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Medium Priority</Badge>
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">Waiting for 1.8 hours</div>
                      <div className="mt-2 text-sm">
                        "Great video! Can you do a tutorial on how to maximize data usage?"
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sentiment" className="space-y-6">
            {/* Sentiment Distribution */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Sentiment Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsivePie
                    data={sentimentData}
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
                  />
                </div>
              </CardContent>
            </Card>

            {/* Sentiment Trend */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Sentiment Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveLine
                    data={sentimentTrendData}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: "point" }}
                    yScale={{
                      type: "linear",
                      min: "auto",
                      max: "auto",
                      stacked: false,
                      reverse: false,
                    }}
                    yFormat=" >-.1f"
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
                      legend: "Percentage (%)",
                      legendOffset: -40,
                      legendPosition: "middle",
                    }}
                    pointSize={10}
                    pointColor={{ theme: "background" }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: "serieColor" }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    colors={["#10b981", "#94a3b8", "#ef4444"]}
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
                  />
                </div>
              </CardContent>
            </Card>

            {/* Sentiment by Platform */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Sentiment by Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>TikTok</span>
                      <span className="font-medium">72% positive</span>
                    </div>
                    <div className="mt-1 flex h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500" style={{ width: "72%" }}></div>
                      <div className="bg-gray-400" style={{ width: "18%" }}></div>
                      <div className="bg-red-500" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Instagram</span>
                      <span className="font-medium">65% positive</span>
                    </div>
                    <div className="mt-1 flex h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500" style={{ width: "65%" }}></div>
                      <div className="bg-gray-400" style={{ width: "25%" }}></div>
                      <div className="bg-red-500" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>YouTube</span>
                      <span className="font-medium">58% positive</span>
                    </div>
                    <div className="mt-1 flex h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500" style={{ width: "58%" }}></div>
                      <div className="bg-gray-400" style={{ width: "28%" }}></div>
                      <div className="bg-red-500" style={{ width: "14%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quality" className="space-y-6">
            {/* Engagement Quality Metrics */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Engagement Quality Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveBar
                    data={engagementQualityData.map((item) => ({ metric: item.metric, value: item.value }))}
                    keys={["value"]}
                    indexBy="metric"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={["#3b82f6"]}
                    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: -45,
                      legend: "Metric",
                      legendPosition: "middle",
                      legendOffset: 40,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Percentage (%)",
                      legendPosition: "middle",
                      legendOffset: -50,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    animate={false}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quality Score */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Community Quality Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <div className="relative h-40 w-40">
                    <svg className="h-full w-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="10"
                        strokeDasharray="282.7"
                        strokeDashoffset="62.2"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold">78</div>
                        <div className="text-xs text-muted-foreground">Quality Score</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Engagement Quality</span>
                      <span className="font-medium">82/100</span>
                    </div>
                    <Progress value={82} className="h-2">
                      <div className="h-full rounded-full bg-blue-500" style={{ width: "82%" }} />
                    </Progress>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Response Quality</span>
                      <span className="font-medium">76/100</span>
                    </div>
                    <Progress value={76} className="h-2">
                      <div className="h-full rounded-full bg-blue-500" style={{ width: "76%" }} />
                    </Progress>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Community Health</span>
                      <span className="font-medium">85/100</span>
                    </div>
                    <Progress value={85} className="h-2">
                      <div className="h-full rounded-full bg-blue-500" style={{ width: "85%" }} />
                    </Progress>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Engagement Drivers */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Top Engagement Drivers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border overflow-hidden">
                  <div className="divide-y">
                    <div className="p-3">
                      <div className="font-medium">Questions & Polls</div>
                      <div className="mt-1 text-sm text-muted-foreground">3.2x higher engagement rate</div>
                      <div className="mt-2 text-sm">
                        Interactive questions and polls drive significantly higher engagement from the community.
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="font-medium">User Mentions</div>
                      <div className="mt-1 text-sm text-muted-foreground">2.8x higher engagement rate</div>
                      <div className="mt-2 text-sm">
                        Mentioning and highlighting community members increases participation and loyalty.
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="font-medium">Trending Topics</div>
                      <div className="mt-1 text-sm text-muted-foreground">2.5x higher engagement rate</div>
                      <div className="mt-2 text-sm">
                        Content that leverages current trends and cultural moments performs exceptionally well.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

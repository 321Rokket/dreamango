"use client"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveNetwork } from "@nivo/network"
import { ResponsiveTreeMap } from "@nivo/treemap"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Sample data for hot topics
const hotTopicsData = [
  { id: "Data vs Airtime", value: 32, sentiment: "positive" },
  { id: "Amapiano Dance Challenge", value: 28, sentiment: "positive" },
  { id: "iPhone Filter", value: 22, sentiment: "positive" },
  { id: "Load Shedding Solutions", value: 18, sentiment: "mixed" },
  { id: "Fibre Expansion", value: 12, sentiment: "positive" },
  { id: "Township Connectivity", value: 8, sentiment: "positive" },
]

// Sample data for question trends
const questionTrendsData = [
  {
    name: "Product Information",
    children: [
      { name: "New Collection", loc: 42 },
      { name: "International Shipping", loc: 38 },
      { name: "Sizes", loc: 35 },
    ],
  },
  {
    name: "Usage & Tips",
    children: [
      { name: "Summer Styling", loc: 28 },
      { name: "Beginner Tips", loc: 25 },
      { name: "Product Care", loc: 22 },
    ],
  },
  {
    name: "Recommendations",
    children: [
      { name: "Sensitive Skin", loc: 18 },
      { name: "Beginner Products", loc: 15 },
      { name: "Alternatives", loc: 12 },
    ],
  },
]

// Sample data for sentiment analysis
const sentimentData = [
  { id: "Positive", label: "Positive", value: 68, color: "#10b981" },
  { id: "Neutral", label: "Neutral", value: 22, color: "#94a3b8" },
  { id: "Negative", label: "Negative", value: 10, color: "#ef4444" },
]

// Sample data for topic network
const networkData = {
  nodes: [
    { id: "Data Bundles", group: "product", size: 24 },
    { id: "Airtime", group: "product", size: 20 },
    { id: "Amapiano", group: "culture", size: 18 },
    { id: "Dance Challenge", group: "culture", size: 16 },
    { id: "iPhone", group: "technology", size: 14 },
    { id: "Filters", group: "technology", size: 12 },
    { id: "Load Shedding", group: "lifestyle", size: 10 },
    { id: "Power Solutions", group: "lifestyle", size: 8 },
    { id: "Fibre", group: "product", size: 6 },
    { id: "Township", group: "community", size: 4 },
  ],
  links: [
    { source: "Data Bundles", target: "Airtime", value: 8 },
    { source: "Amapiano", target: "Dance Challenge", value: 10 },
    { source: "iPhone", target: "Filters", value: 6 },
    { source: "Load Shedding", target: "Power Solutions", value: 5 },
    { source: "Data Bundles", target: "Fibre", value: 4 },
    { source: "Township", target: "Data Bundles", value: 3 },
    { source: "Township", target: "Fibre", value: 2 },
    { source: "Amapiano", target: "iPhone", value: 1 },
  ],
}

// Sample data for platform sentiment
const platformSentimentData = [
  { platform: "TikTok", positive: 72, neutral: 18, negative: 10 },
  { platform: "Instagram", positive: 65, neutral: 25, negative: 10 },
  { platform: "YouTube", positive: 58, neutral: 28, negative: 14 },
  { platform: "Facebook", positive: 52, neutral: 30, negative: 18 },
]

export function ConversationAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversation Analysis</CardTitle>
        <CardDescription>Analyze community conversations and trending topics</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="hot-topics">
          <TabsList className="mb-4">
            <TabsTrigger value="hot-topics">Hot Topics</TabsTrigger>
            <TabsTrigger value="questions">Question Trends</TabsTrigger>
            <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
            <TabsTrigger value="network">Topic Network</TabsTrigger>
          </TabsList>

          <TabsContent value="hot-topics" className="space-y-6">
            {/* Hot Topics Bubble Cloud */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Topic Bubble Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground">Bubble cloud visualization</p>
                    <p className="text-xs text-muted-foreground mt-2">Showing topic distribution by volume</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hot Topics Bar Chart */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Top Trending Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveBar
                    data={hotTopicsData.map((item) => ({ topic: item.id, value: item.value }))}
                    keys={["value"]}
                    indexBy="topic"
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
                      legend: "Topic",
                      legendPosition: "middle",
                      legendOffset: 40,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Volume (%)",
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

            {/* Topic Details */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Topic Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hotTopicsData.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <div className="font-medium">{topic.id}</div>
                        <div className="text-sm text-muted-foreground">Volume: {topic.value}%</div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          topic.sentiment === "positive"
                            ? "bg-green-100 text-green-800 border-green-200"
                            : topic.sentiment === "negative"
                              ? "bg-red-100 text-red-800 border-red-200"
                              : "bg-amber-100 text-amber-800 border-amber-200"
                        }
                      >
                        {topic.sentiment}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="questions" className="space-y-6">
            {/* Question Categorization Treemap */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Question Categorization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveTreeMap
                    data={{
                      name: "questions",
                      children: questionTrendsData,
                    }}
                    identity="name"
                    value="loc"
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                    labelSkipSize={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
                    parentLabelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
                    borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
                    animate={false}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Frequently Asked Questions */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-md">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Product Information</h3>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">42% of questions</Badge>
                    </div>
                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <p>"When will the new collection be available?"</p>
                      <p>"Do you ship internationally?"</p>
                      <p>"What sizes do you offer?"</p>
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Usage & Tips</h3>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">28% of questions</Badge>
                    </div>
                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <p>"How do I style this for summer?"</p>
                      <p>"Can you share tips for beginners?"</p>
                      <p>"What's the best way to care for this product?"</p>
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Recommendations</h3>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">18% of questions</Badge>
                    </div>
                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <p>"What do you recommend for sensitive skin?"</p>
                      <p>"Which product is best for beginners?"</p>
                      <p>"Can you suggest alternatives to this product?"</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sentiment" className="space-y-6">
            {/* Sentiment Distribution Pie Chart */}
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

            {/* Platform Sentiment */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Sentiment by Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveBar
                    data={platformSentimentData}
                    keys={["positive", "neutral", "negative"]}
                    indexBy="platform"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={["#10b981", "#94a3b8", "#ef4444"]}
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
                      legend: "Percentage (%)",
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
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="network" className="space-y-6">
            {/* Topic Network Graph */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Topic Relationship Network</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[500px]">
                  <ResponsiveNetwork
                    data={networkData}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    linkDistance={(e) => e.value * 10}
                    centeringStrength={0.3}
                    repulsivity={60}
                    nodeSize={(n) => n.size}
                    activeNodeSize={(n) => n.size * 1.5}
                    nodeColor={(n) =>
                      n.group === "product"
                        ? "#3b82f6"
                        : n.group === "culture"
                          ? "#8b5cf6"
                          : n.group === "technology"
                            ? "#10b981"
                            : n.group === "lifestyle"
                              ? "#f59e0b"
                              : "#ef4444"
                    }
                    nodeBorderWidth={1}
                    nodeBorderColor={{
                      from: "color",
                      modifiers: [["darker", 0.8]],
                    }}
                    linkThickness={(l) => 2 + 2 * l.value}
                    linkBlendMode="multiply"
                    motionConfig="gentle"
                    animate={false}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Topic Groups */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Topic Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="p-3 border rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                      <span className="font-medium">Product</span>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">Data Bundles, Airtime, Fibre</div>
                  </div>
                  <div className="p-3 border rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                      <span className="font-medium">Culture</span>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">Amapiano, Dance Challenge</div>
                  </div>
                  <div className="p-3 border rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="font-medium">Technology</span>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">iPhone, Filters</div>
                  </div>
                  <div className="p-3 border rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                      <span className="font-medium">Lifestyle</span>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">Load Shedding, Power Solutions</div>
                  </div>
                  <div className="p-3 border rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <span className="font-medium">Community</span>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">Township</div>
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

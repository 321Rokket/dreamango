import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { NivoCharts } from "@/components/dashboard/nivo-charts"
import { TrendingUp, Filter, Download, ArrowUpRight } from "lucide-react"

export default function TrendAnalysisPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trend Analysis</h1>
          <p className="text-muted-foreground">Analyze emerging trends and patterns across platforms and audiences.</p>
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

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="topics">Topics</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Trending Topics</CardTitle>
                <CardDescription>Top trending topics this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="font-medium">Amapiano Dance</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500">+242%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="font-medium">Brother Bernard</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500">+215%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="font-medium">Telkom Knockout</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500">+178%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="font-medium">Only In Africa</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500">+186%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="font-medium">Ushuni Show</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500">+128%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Trend Categories</CardTitle>
                <CardDescription>Distribution by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <NivoCharts.PieChart
                    data={[
                      { id: "Music", value: 35 },
                      { id: "Entertainment", value: 25 },
                      { id: "Sports", value: 15 },
                      { id: "Comedy", value: 15 },
                      { id: "Lifestyle", value: 10 },
                    ]}
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
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
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Platform Distribution</CardTitle>
                <CardDescription>Trends by platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <NivoCharts.PieChart
                    data={[
                      { id: "TikTok", value: 40 },
                      { id: "Instagram", value: 30 },
                      { id: "YouTube", value: 20 },
                      { id: "Facebook", value: 10 },
                    ]}
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
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
                    colors={({ id }) => {
                      if (id === "TikTok") return "#00f2ea"
                      if (id === "Instagram") return "#C13584"
                      if (id === "YouTube") return "#FF0000"
                      if (id === "Facebook") return "#4267B2"
                      return "#999999"
                    }}
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

          <Card>
            <CardHeader>
              <CardTitle>Trend Growth Timeline</CardTitle>
              <CardDescription>Growth trajectory of top trending topics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <NivoCharts.LineChart
                  data={[
                    {
                      id: "Amapiano Dance",
                      color: "#FF6B6B",
                      data: [
                        { x: "Week 1", y: 10 },
                        { x: "Week 2", y: 25 },
                        { x: "Week 3", y: 60 },
                        { x: "Week 4", y: 120 },
                        { x: "Week 5", y: 242 },
                      ],
                    },
                    {
                      id: "Brother Bernard",
                      color: "#4ECDC4",
                      data: [
                        { x: "Week 1", y: 5 },
                        { x: "Week 2", y: 15 },
                        { x: "Week 3", y: 40 },
                        { x: "Week 4", y: 80 },
                        { x: "Week 5", y: 215 },
                      ],
                    },
                    {
                      id: "Telkom Knockout",
                      color: "#F9C80E",
                      data: [
                        { x: "Week 1", y: 2 },
                        { x: "Week 2", y: 8 },
                        { x: "Week 3", y: 20 },
                        { x: "Week 4", y: 50 },
                        { x: "Week 5", y: 178 },
                      ],
                    },
                  ]}
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: "point" }}
                  yScale={{
                    type: "linear",
                    min: 0,
                    max: "auto",
                    stacked: false,
                    reverse: false,
                  }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Weeks",
                    legendOffset: 36,
                    legendPosition: "middle",
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Growth %",
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
        </TabsContent>

        <TabsContent value="platforms" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Trend Velocity</CardTitle>
                <CardDescription>Rate of trend adoption by platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <NivoCharts.BarChart
                    data={[
                      { platform: "TikTok", velocity: 8.4 },
                      { platform: "Instagram", velocity: 6.2 },
                      { platform: "YouTube", velocity: 4.8 },
                      { platform: "Facebook", velocity: 3.5 },
                      { platform: "Twitter", velocity: 5.1 },
                    ]}
                    keys={["velocity"]}
                    indexBy="platform"
                    margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                    padding={0.3}
                    colors={({ id, data }) => {
                      const platforms = {
                        TikTok: "#00f2ea",
                        Instagram: "#C13584",
                        YouTube: "#FF0000",
                        Facebook: "#4267B2",
                        Twitter: "#1DA1F2",
                      }
                      return platforms[data.platform] || "#999999"
                    }}
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
                      legend: "Velocity Score",
                      legendPosition: "middle",
                      legendOffset: -40,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Platform Trend Lifecycle</CardTitle>
                <CardDescription>Trend lifecycle stages by platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <NivoCharts.BarChart
                    data={[
                      { stage: "Early Adoption", TikTok: 40, Instagram: 30, YouTube: 20, Facebook: 10 },
                      { stage: "Growth", TikTok: 35, Instagram: 35, YouTube: 20, Facebook: 10 },
                      { stage: "Maturity", TikTok: 25, Instagram: 30, YouTube: 30, Facebook: 15 },
                      { stage: "Decline", TikTok: 15, Instagram: 25, YouTube: 35, Facebook: 25 },
                    ]}
                    keys={["TikTok", "Instagram", "YouTube", "Facebook"]}
                    indexBy="stage"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    groupMode="stacked"
                    colors={({ id }) => {
                      const platforms = {
                        TikTok: "#00f2ea",
                        Instagram: "#C13584",
                        YouTube: "#FF0000",
                        Facebook: "#4267B2",
                      }
                      return platforms[id] || "#999999"
                    }}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Lifecycle Stage",
                      legendPosition: "middle",
                      legendOffset: 32,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Percentage",
                      legendPosition: "middle",
                      legendOffset: -40,
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
          </div>
        </TabsContent>

        <TabsContent value="topics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Trending Topics</CardTitle>
              <CardDescription>Detailed analysis of trending topics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-medium">Amapiano Dance Challenge</h3>
                      <div className="flex items-center mt-1">
                        <Badge className="bg-[#00f2ea] text-black mr-2">TikTok</Badge>
                        <Badge className="bg-purple-100 text-purple-800">Music</Badge>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <ArrowUpRight className="h-5 w-5 text-green-500 mr-1" />
                      <span className="text-lg font-bold text-green-500">+242%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Viral Amapiano dance challenge featuring trending South African artists and dancers. Originated
                        on TikTok and quickly spread to Instagram and YouTube.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Views</div>
                          <div className="text-lg font-medium">845K</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Engagement</div>
                          <div className="text-lg font-medium">6.8%</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Shares</div>
                          <div className="text-lg font-medium">25.6K</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Virality Score</div>
                          <div className="text-lg font-medium">94/100</div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[150px]">
                      <NivoCharts.LineChart
                        data={[
                          {
                            id: "growth",
                            color: "#10b981",
                            data: [
                              { x: "Week 1", y: 10 },
                              { x: "Week 2", y: 25 },
                              { x: "Week 3", y: 60 },
                              { x: "Week 4", y: 120 },
                              { x: "Week 5", y: 242 },
                            ],
                          },
                        ]}
                        margin={{ top: 10, right: 10, bottom: 30, left: 40 }}
                        xScale={{ type: "point" }}
                        yScale={{
                          type: "linear",
                          min: 0,
                          max: "auto",
                        }}
                        curve="monotoneX"
                        axisBottom={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                        }}
                        axisLeft={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                        }}
                        enablePoints={true}
                        pointSize={8}
                        pointColor="#10b981"
                        pointBorderWidth={2}
                        pointBorderColor={{ from: "serieColor" }}
                        enableArea={true}
                        areaOpacity={0.15}
                        useMesh={true}
                        colors={["#10b981"]}
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-medium">Brother Bernard Movie</h3>
                      <div className="flex items-center mt-1">
                        <Badge className="bg-[#FF0000] text-white mr-2">YouTube</Badge>
                        <Badge className="bg-pink-100 text-pink-800">Entertainment</Badge>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <ArrowUpRight className="h-5 w-5 text-green-500 mr-1" />
                      <span className="text-lg font-bold text-green-500">+215%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Destiny Etiko and Fredrick Leonard's 'Brother Bernard' movie becoming a viral sensation across
                        social media platforms with numerous clips and memes.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Views</div>
                          <div className="text-lg font-medium">520K</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Engagement</div>
                          <div className="text-lg font-medium">7.2%</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Shares</div>
                          <div className="text-lg font-medium">18.9K</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Virality Score</div>
                          <div className="text-lg font-medium">91/100</div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[150px]">
                      <NivoCharts.LineChart
                        data={[
                          {
                            id: "growth",
                            color: "#10b981",
                            data: [
                              { x: "Week 1", y: 5 },
                              { x: "Week 2", y: 15 },
                              { x: "Week 3", y: 40 },
                              { x: "Week 4", y: 80 },
                              { x: "Week 5", y: 215 },
                            ],
                          },
                        ]}
                        margin={{ top: 10, right: 10, bottom: 30, left: 40 }}
                        xScale={{ type: "point" }}
                        yScale={{
                          type: "linear",
                          min: 0,
                          max: "auto",
                        }}
                        curve="monotoneX"
                        axisBottom={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                        }}
                        axisLeft={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                        }}
                        enablePoints={true}
                        pointSize={8}
                        pointColor="#10b981"
                        pointBorderWidth={2}
                        pointBorderColor={{ from: "serieColor" }}
                        enableArea={true}
                        areaOpacity={0.15}
                        useMesh={true}
                        colors={["#10b981"]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
                <CardDescription>Trend engagement by age group</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <NivoCharts.BarChart
                    data={[
                      { age: "13-17", value: 25 },
                      { age: "18-24", value: 40 },
                      { age: "25-34", value: 20 },
                      { age: "35-44", value: 10 },
                      { age: "45+", value: 5 },
                    ]}
                    keys={["value"]}
                    indexBy="age"
                    margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                    padding={0.3}
                    colors={["#3b82f6"]}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Age Group",
                      legendPosition: "middle",
                      legendOffset: 32,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Percentage",
                      legendPosition: "middle",
                      legendOffset: -40,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Trend engagement by region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <NivoCharts.BarChart
                    data={[
                      { region: "Gauteng", value: 35 },
                      { region: "Western Cape", value: 25 },
                      { region: "KwaZulu-Natal", value: 20 },
                      { region: "Eastern Cape", value: 10 },
                      { region: "Other", value: 10 },
                    ]}
                    keys={["value"]}
                    indexBy="region"
                    margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                    padding={0.3}
                    colors={["#8b5cf6"]}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Region",
                      legendPosition: "middle",
                      legendOffset: 32,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Percentage",
                      legendPosition: "middle",
                      legendOffset: -40,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

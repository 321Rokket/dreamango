"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, Filter, ArrowUpRight, ArrowDownRight, Target, Shield, AlertTriangle, Zap } from "lucide-react"
import { ResponsiveRadar } from "@nivo/radar"
import { ResponsiveTreeMap } from "@nivo/treemap"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsivePie } from "@nivo/pie"

export default function SwotAnalysisPage() {
  // SWOT data
  const strengthsData = {
    name: "strengths",
    children: [
      { name: "Strong brand recognition", loc: 85 },
      { name: "Extensive network infrastructure", loc: 78 },
      { name: "Diverse product portfolio", loc: 72 },
      { name: "Strong government relationships", loc: 68 },
      { name: "Established customer base", loc: 65 },
      { name: "Technical expertise", loc: 62 },
      { name: "Competitive pricing", loc: 58 },
    ],
  }

  const weaknessesData = {
    name: "weaknesses",
    children: [
      { name: "Lower social media engagement", loc: 75 },
      { name: "Slower digital transformation", loc: 68 },
      { name: "Limited youth market penetration", loc: 65 },
      { name: "Customer service perception", loc: 62 },
      { name: "Legacy systems", loc: 58 },
      { name: "Brand perception among Gen Z", loc: 55 },
      { name: "Content strategy gaps", loc: 52 },
    ],
  }

  const opportunitiesData = {
    name: "opportunities",
    children: [
      { name: "Growing TikTok presence", loc: 85 },
      { name: "Township connectivity expansion", loc: 78 },
      { name: "5G rollout", loc: 75 },
      { name: "Content creator partnerships", loc: 72 },
      { name: "Educational content", loc: 68 },
      { name: "Local cultural content", loc: 65 },
      { name: "Youth-focused campaigns", loc: 62 },
    ],
  }

  const threatsData = {
    name: "threats",
    children: [
      { name: "Competitor social strategies", loc: 82 },
      { name: "Market saturation", loc: 75 },
      { name: "Regulatory changes", loc: 68 },
      { name: "Economic downturn", loc: 65 },
      { name: "Changing consumer preferences", loc: 62 },
      { name: "New market entrants", loc: 58 },
      { name: "Technology disruption", loc: 55 },
    ],
  }

  // Competitor comparison data
  const competitorComparisonData = [
    {
      metric: "Social Media Engagement",
      Telkom: 65,
      Vodacom: 85,
      MTN: 80,
      "Cell C": 70,
    },
    {
      metric: "Content Quality",
      Telkom: 75,
      Vodacom: 80,
      MTN: 75,
      "Cell C": 65,
    },
    {
      metric: "Brand Perception",
      Telkom: 70,
      Vodacom: 85,
      MTN: 80,
      "Cell C": 60,
    },
    {
      metric: "Youth Appeal",
      Telkom: 60,
      Vodacom: 80,
      MTN: 85,
      "Cell C": 75,
    },
    {
      metric: "Digital Innovation",
      Telkom: 70,
      Vodacom: 85,
      MTN: 80,
      "Cell C": 65,
    },
  ]

  // Market share data
  const marketShareData = [
    { id: "Vodacom", label: "Vodacom", value: 42, color: "#e60000" },
    { id: "MTN", label: "MTN", value: 31, color: "#ffcc00" },
    { id: "Telkom", label: "Telkom", value: 18, color: "#4495d4" },
    { id: "Cell C", label: "Cell C", value: 9, color: "#f60" },
  ]

  // Growth opportunities data
  const growthOpportunitiesData = [
    { opportunity: "TikTok Content", value: 85, category: "Social" },
    { opportunity: "Township Connectivity", value: 78, category: "Infrastructure" },
    { opportunity: "Youth Campaigns", value: 75, category: "Marketing" },
    { opportunity: "5G Services", value: 72, category: "Technology" },
    { opportunity: "Content Creator Partnerships", value: 68, category: "Partnerships" },
    { opportunity: "Educational Content", value: 65, category: "Content" },
    { opportunity: "Local Cultural Content", value: 62, category: "Content" },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-telkom-dark-blue dark:text-white">SWOT Analysis</h1>
          <p className="text-muted-foreground">
            Strategic analysis of strengths, weaknesses, opportunities, and threats
          </p>
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
                <p className="text-sm text-muted-foreground">Strengths</p>
                <h3 className="text-2xl font-bold mt-1">7</h3>
                <div className="flex items-center mt-1 text-status-positive">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span className="text-xs">Key advantages</span>
                </div>
              </div>
              <div className="bg-telkom-blue/10 p-2 rounded-full">
                <Zap className="h-5 w-5 text-telkom-blue" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Weaknesses</p>
                <h3 className="text-2xl font-bold mt-1">7</h3>
                <div className="flex items-center mt-1 text-status-negative">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  <span className="text-xs">Areas to improve</span>
                </div>
              </div>
              <div className="bg-telkom-orange/10 p-2 rounded-full">
                <Shield className="h-5 w-5 text-telkom-orange" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Opportunities</p>
                <h3 className="text-2xl font-bold mt-1">7</h3>
                <div className="flex items-center mt-1 text-status-positive">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span className="text-xs">Growth potential</span>
                </div>
              </div>
              <div className="bg-telkom-green/10 p-2 rounded-full">
                <Target className="h-5 w-5 text-telkom-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Threats</p>
                <h3 className="text-2xl font-bold mt-1">7</h3>
                <div className="flex items-center mt-1 text-status-negative">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  <span className="text-xs">External risks</span>
                </div>
              </div>
              <div className="bg-telkom-purple/10 p-2 rounded-full">
                <AlertTriangle className="h-5 w-5 text-telkom-purple" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="swot">
        <TabsList className="mb-4">
          <TabsTrigger value="swot">SWOT Analysis</TabsTrigger>
          <TabsTrigger value="competitors">Competitor Comparison</TabsTrigger>
          <TabsTrigger value="market">Market Position</TabsTrigger>
          <TabsTrigger value="growth">Growth Opportunities</TabsTrigger>
        </TabsList>

        <TabsContent value="swot" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="bg-telkom-blue/10">
                <CardTitle className="text-telkom-blue">Strengths</CardTitle>
                <CardDescription>Key advantages and assets</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-80">
                  <ResponsiveTreeMap
                    data={strengthsData}
                    identity="name"
                    value="loc"
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                    labelSkipSize={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
                    parentLabelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
                    colors={{ scheme: "blues" }}
                    borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-telkom-orange/10">
                <CardTitle className="text-telkom-orange">Weaknesses</CardTitle>
                <CardDescription>Areas that need improvement</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-80">
                  <ResponsiveTreeMap
                    data={weaknessesData}
                    identity="name"
                    value="loc"
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                    labelSkipSize={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
                    parentLabelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
                    colors={{ scheme: "oranges" }}
                    borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-telkom-green/10">
                <CardTitle className="text-telkom-green">Opportunities</CardTitle>
                <CardDescription>Potential areas for growth</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-80">
                  <ResponsiveTreeMap
                    data={opportunitiesData}
                    identity="name"
                    value="loc"
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                    labelSkipSize={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
                    parentLabelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
                    colors={{ scheme: "greens" }}
                    borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-telkom-purple/10">
                <CardTitle className="text-telkom-purple">Threats</CardTitle>
                <CardDescription>External challenges and risks</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-80">
                  <ResponsiveTreeMap
                    data={threatsData}
                    identity="name"
                    value="loc"
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                    labelSkipSize={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
                    parentLabelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
                    colors={{ scheme: "purples" }}
                    borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="competitors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Competitor Comparison</CardTitle>
              <CardDescription>Performance across key metrics relative to competitors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveRadar
                  data={competitorComparisonData}
                  keys={["Telkom", "Vodacom", "MTN", "Cell C"]}
                  indexBy="metric"
                  maxValue={100}
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
                  colors={["#4495d4", "#e60000", "#ffcc00", "#f60"]}
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
        </TabsContent>

        <TabsContent value="market" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Market Share</CardTitle>
                <CardDescription>Current market share distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsivePie
                    data={marketShareData}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
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
                        itemWidth: 80,
                        itemHeight: 18,
                        itemTextColor: "#999",
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: "circle",
                      },
                    ]}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social Media Market Position</CardTitle>
                <CardDescription>Relative position in social media engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveBar
                    data={[
                      { platform: "TikTok", Telkom: 65, Vodacom: 85, MTN: 80, "Cell C": 70 },
                      { platform: "Instagram", Telkom: 70, Vodacom: 80, MTN: 85, "Cell C": 65 },
                      { platform: "Facebook", Telkom: 75, Vodacom: 75, MTN: 80, "Cell C": 60 },
                      { platform: "Twitter", Telkom: 72, Vodacom: 78, MTN: 75, "Cell C": 62 },
                      { platform: "YouTube", Telkom: 68, Vodacom: 82, MTN: 78, "Cell C": 58 },
                    ]}
                    keys={["Telkom", "Vodacom", "MTN", "Cell C"]}
                    indexBy="platform"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    groupMode="grouped"
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={["#4495d4", "#e60000", "#ffcc00", "#f60"]}
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
          </div>
        </TabsContent>

        <TabsContent value="growth" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Growth Opportunities</CardTitle>
              <CardDescription>Potential areas for strategic growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveBar
                  data={growthOpportunitiesData}
                  keys={["value"]}
                  indexBy="opportunity"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={({ data }) =>
                    data.category === "Social"
                      ? "#00f2ea"
                      : data.category === "Infrastructure"
                        ? "#4495d4"
                        : data.category === "Marketing"
                          ? "#ff671f"
                          : data.category === "Technology"
                            ? "#89ba17"
                            : data.category === "Partnerships"
                              ? "#6e2585"
                              : data.category === "Content"
                                ? "#00a4a7"
                                : "#1e3c64"
                  }
                  borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -45,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Opportunity Score",
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
        </TabsContent>
      </Tabs>
    </div>
  )
}

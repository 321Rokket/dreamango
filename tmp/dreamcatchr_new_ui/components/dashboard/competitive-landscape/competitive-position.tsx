"use client"

import { ResponsiveRadar } from "@nivo/radar"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CompetitivePosition() {
  // Sample data for Share of Voice
  const shareOfVoiceData = [
    { id: "Telkom", value: 35, color: "hsl(var(--primary))" },
    { id: "Vodacom", value: 30, color: "hsl(var(--info))" },
    { id: "MTN", value: 25, color: "hsl(var(--secondary))" },
    { id: "Cell C", value: 10, color: "hsl(var(--tertiary))" },
  ]

  // Sample data for Engagement Benchmarks
  const engagementData = [
    { competitor: "Telkom", value: 4.2, color: "hsl(var(--primary))" },
    { competitor: "Industry Avg", value: 3.1, color: "hsl(var(--muted))" },
    { competitor: "Vodacom", value: 3.8, color: "hsl(var(--info))" },
    { competitor: "MTN", value: 2.9, color: "hsl(var(--secondary))" },
    { competitor: "Cell C", value: 3.5, color: "hsl(var(--tertiary))" },
  ]

  // Sample data for Growth Comparison
  const growthData = [
    {
      id: "Telkom",
      color: "hsl(var(--primary))",
      data: [
        { x: "Jan", y: 10 },
        { x: "Feb", y: 15 },
        { x: "Mar", y: 18 },
        { x: "Apr", y: 25 },
        { x: "May", y: 32 },
        { x: "Jun", y: 38 },
      ],
    },
    {
      id: "Vodacom",
      color: "hsl(var(--info))",
      data: [
        { x: "Jan", y: 12 },
        { x: "Feb", y: 14 },
        { x: "Mar", y: 16 },
        { x: "Apr", y: 20 },
        { x: "May", y: 24 },
        { x: "Jun", y: 28 },
      ],
    },
    {
      id: "MTN",
      color: "hsl(var(--secondary))",
      data: [
        { x: "Jan", y: 8 },
        { x: "Feb", y: 10 },
        { x: "Mar", y: 12 },
        { x: "Apr", y: 15 },
        { x: "May", y: 19 },
        { x: "Jun", y: 22 },
      ],
    },
  ]

  // Sample data for Competitive Position Score
  const positionData = [
    {
      dimension: "Content Quality",
      Telkom: 85,
      Vodacom: 70,
      MTN: 65,
      "Cell C": 60,
    },
    {
      dimension: "Engagement",
      Telkom: 90,
      Vodacom: 75,
      MTN: 80,
      "Cell C": 70,
    },
    {
      dimension: "Growth Rate",
      Telkom: 75,
      Vodacom: 80,
      MTN: 60,
      "Cell C": 65,
    },
    {
      dimension: "Audience Size",
      Telkom: 65,
      Vodacom: 90,
      MTN: 85,
      "Cell C": 55,
    },
    {
      dimension: "Innovation",
      Telkom: 80,
      Vodacom: 60,
      MTN: 75,
      "Cell C": 70,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Share of Voice */}
      <Card className="border shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Share of Voice</CardTitle>
          <CardDescription className="text-xs">Market presence comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsivePie
              data={shareOfVoiceData}
              margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
              innerRadius={0.6}
              padAngle={0.5}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              colors={{ datum: "data.color" }}
              borderWidth={1}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
              enableArcLinkLabels={false}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
              legends={[]}
              tooltip={({ datum }) => (
                <div className="bg-card text-card-foreground p-2 text-xs shadow-md rounded-md border">
                  <strong>{datum.id}:</strong> {datum.value}%
                </div>
              )}
            />
          </div>
        </CardContent>
      </Card>

      {/* Engagement Benchmarks */}
      <Card className="border shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Engagement Benchmarks</CardTitle>
          <CardDescription className="text-xs">Avg. engagement rate (%)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveBar
              data={engagementData}
              keys={["value"]}
              indexBy="competitor"
              margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ datum: "data.color" }}
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
                legendOffset: -40,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              tooltip={({ data, value }) => (
                <div className="bg-card text-card-foreground p-2 text-xs shadow-md rounded-md border">
                  <strong>{data.competitor}:</strong> {value}%
                </div>
              )}
            />
          </div>
        </CardContent>
      </Card>

      {/* Growth Comparison */}
      <Card className="border shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Growth Comparison</CardTitle>
          <CardDescription className="text-xs">Follower growth over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveLine
              data={growthData}
              margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
              xScale={{ type: "point" }}
              yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: -40,
                legendPosition: "middle",
              }}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[]}
              colors={{ datum: "color" }}
              tooltip={({ point }) => (
                <div className="bg-card text-card-foreground p-2 text-xs shadow-md rounded-md border">
                  <strong>{point.serieId}:</strong> {point.data.y}K followers in {point.data.x}
                </div>
              )}
            />
          </div>
        </CardContent>
      </Card>

      {/* Competitive Position Score */}
      <Card className="border shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Position Score</CardTitle>
          <CardDescription className="text-xs">Multi-dimensional analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveRadar
              data={positionData}
              keys={["Telkom", "Vodacom", "MTN"]}
              indexBy="dimension"
              valueFormat=">-.2f"
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              borderColor={{ from: "color" }}
              gridLabelOffset={10}
              dotSize={8}
              dotColor={{ theme: "background" }}
              dotBorderWidth={2}
              colors={["hsl(var(--primary))", "hsl(var(--info))", "hsl(var(--secondary))"]}
              blendMode="multiply"
              motionConfig="wobbly"
              legends={[]}
              tooltip={({ data }) => (
                <div className="bg-card text-card-foreground p-2 text-xs shadow-md rounded-md border">
                  <strong>{data.dimension}:</strong>
                  <br />
                  Telkom: {data["Telkom"]}
                  <br />
                  Vodacom: {data["Vodacom"]}
                  <br />
                  MTN: {data["MTN"]}
                  <br />
                  Cell C: {data["Cell C"]}
                </div>
              )}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

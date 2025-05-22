"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"
import { ResponsivePie } from "@nivo/pie"

export function TelcoMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Telco-specific Metrics</CardTitle>
        <CardDescription>Key performance indicators for telecommunications</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="engagement">
          <TabsList className="w-full">
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="acquisition">Acquisition</TabsTrigger>
            <TabsTrigger value="retention">Retention</TabsTrigger>
          </TabsList>
          <TabsContent value="engagement" className="h-[300px] pt-4">
            <ResponsiveBar
              data={[
                { channel: "Social Media", value: 85, valueColor: "#3b82f6" },
                { channel: "Website", value: 65, valueColor: "#10b981" },
                { channel: "App", value: 72, valueColor: "#f59e0b" },
                { channel: "SMS", value: 45, valueColor: "#8b5cf6" },
                { channel: "Email", value: 38, valueColor: "#ec4899" },
                { channel: "Call Center", value: 25, valueColor: "#6b7280" },
              ]}
              keys={["value"]}
              indexBy="channel"
              margin={{ top: 10, right: 10, bottom: 40, left: 60 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={({ data }) => data.valueColor}
              borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Channel",
                legendPosition: "middle",
                legendOffset: 32,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Engagement Score",
                legendPosition: "middle",
                legendOffset: -50,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              animate={false}
              role="application"
              ariaLabel="Telco engagement metrics"
              barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in channel: ${e.indexValue}`}
            />
          </TabsContent>
          <TabsContent value="acquisition" className="h-[300px] pt-4">
            <ResponsiveLine
              data={[
                {
                  id: "New Subscribers",
                  data: [
                    { x: "Jan", y: 120 },
                    { x: "Feb", y: 140 },
                    { x: "Mar", y: 135 },
                    { x: "Apr", y: 155 },
                    { x: "May", y: 180 },
                    { x: "Jun", y: 210 },
                  ],
                },
                {
                  id: "Acquisition Cost",
                  data: [
                    { x: "Jan", y: 85 },
                    { x: "Feb", y: 82 },
                    { x: "Mar", y: 78 },
                    { x: "Apr", y: 75 },
                    { x: "May", y: 72 },
                    { x: "Jun", y: 68 },
                  ],
                },
              ]}
              margin={{ top: 10, right: 10, bottom: 40, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
              curve="monotoneX"
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
                legendOffset: -50,
                legendPosition: "middle",
              }}
              colors={["#3b82f6", "#f59e0b"]}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 40,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 120,
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
              animate={false}
            />
          </TabsContent>
          <TabsContent value="retention" className="h-[300px] pt-4">
            <ResponsivePie
              data={[
                { id: "Loyal (>2 years)", value: 45, color: "#10b981" },
                { id: "Stable (1-2 years)", value: 30, color: "#3b82f6" },
                { id: "Recent (6-12 months)", value: 15, color: "#f59e0b" },
                { id: "New (<6 months)", value: 10, color: "#8b5cf6" },
              ]}
              margin={{ top: 10, right: 10, bottom: 40, left: 10 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              colors={{ datum: "data.color" }}
              borderWidth={1}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
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
                  translateY: 30,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: "#999",
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 12,
                  symbolShape: "circle",
                },
              ]}
              animate={false}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

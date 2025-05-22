"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsivePie } from "@nivo/pie"

export function MarketingMetrics() {
  // Sample data for campaign performance
  const campaignPerformanceData = [
    {
      id: "Impressions",
      color: "hsl(215, 70%, 50%)",
      data: [
        { x: "Jan", y: 120000 },
        { x: "Feb", y: 150000 },
        { x: "Mar", y: 180000 },
        { x: "Apr", y: 220000 },
        { x: "May", y: 250000 },
        { x: "Jun", y: 280000 },
      ],
    },
    {
      id: "Clicks",
      color: "hsl(173, 70%, 50%)",
      data: [
        { x: "Jan", y: 12000 },
        { x: "Feb", y: 15000 },
        { x: "Mar", y: 18000 },
        { x: "Apr", y: 22000 },
        { x: "May", y: 25000 },
        { x: "Jun", y: 28000 },
      ],
    },
    {
      id: "Conversions",
      color: "hsl(43, 70%, 50%)",
      data: [
        { x: "Jan", y: 1200 },
        { x: "Feb", y: 1500 },
        { x: "Mar", y: 1800 },
        { x: "Apr", y: 2200 },
        { x: "May", y: 2500 },
        { x: "Jun", y: 2800 },
      ],
    },
  ]

  // Sample data for channel performance
  const channelPerformanceData = [
    { channel: "Social Media", value: 35, color: "hsl(215, 70%, 50%)" },
    { channel: "Search", value: 25, color: "hsl(173, 70%, 50%)" },
    { channel: "Email", value: 20, color: "hsl(43, 70%, 50%)" },
    { channel: "Direct", value: 15, color: "hsl(273, 70%, 50%)" },
    { channel: "Referral", value: 5, color: "hsl(323, 70%, 50%)" },
  ]

  // Sample data for ROI by campaign
  const roiData = [
    { campaign: "Summer Promo", roi: 320 },
    { campaign: "Back to School", roi: 280 },
    { campaign: "Holiday Special", roi: 420 },
    { campaign: "New Year", roi: 390 },
    { campaign: "Autumn Sale", roi: 350 },
  ]

  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle>Marketing Metrics</CardTitle>
        <CardDescription>Track campaign performance, channel effectiveness, and ROI</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="performance" className="space-y-4">
          <TabsList>
            <TabsTrigger value="performance">Campaign Performance</TabsTrigger>
            <TabsTrigger value="channels">Channel Performance</TabsTrigger>
            <TabsTrigger value="roi">ROI Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="performance">
            <div className="h-[400px] w-full">
              <ResponsiveLine
                data={campaignPerformanceData}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
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
          </TabsContent>

          <TabsContent value="channels">
            <div className="h-[400px] w-full">
              <ResponsivePie
                data={channelPerformanceData.map((item) => ({
                  id: item.channel,
                  label: item.channel,
                  value: item.value,
                  color: item.color,
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
              />
            </div>
          </TabsContent>

          <TabsContent value="roi">
            <div className="h-[400px] w-full">
              <ResponsiveBar
                data={roiData}
                keys={["roi"]}
                indexBy="campaign"
                margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={["hsl(215, 70%, 50%)"]}
                borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: -45,
                  legend: "Campaign",
                  legendPosition: "middle",
                  legendOffset: 40,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "ROI (%)",
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
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Filter,
  Download,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  ChevronDown,
  ArrowDownCircle,
  ArrowRightCircle,
} from "lucide-react"
import { motion } from "framer-motion"
import { Funnel, type FunnelDatum } from "@nivo/funnel"
import { Bar } from "@nivo/bar"

const FunnelVisualization = () => {
  const [view, setView] = useState("full")
  const [comparison, setComparison] = useState(false)

  // Sample data for funnel visualization
  const funnelData: FunnelDatum[] = [
    { id: "Impressions", value: 120000, label: "Impressions" },
    { id: "Clicks", value: 45000, label: "Clicks" },
    { id: "Sign-ups", value: 18000, label: "Sign-ups" },
    { id: "Activations", value: 9200, label: "Activations" },
    { id: "Conversions", value: 3800, label: "Conversions" },
  ]

  // Sample data for comparison (previous period)
  const comparisonData: FunnelDatum[] = [
    { id: "Impressions", value: 105000, label: "Impressions" },
    { id: "Clicks", value: 38000, label: "Clicks" },
    { id: "Sign-ups", value: 14500, label: "Sign-ups" },
    { id: "Activations", value: 7800, label: "Activations" },
    { id: "Conversions", value: 2900, label: "Conversions" },
  ]

  // Calculate conversion rates between stages
  const conversionRates = funnelData
    .map((item, index) => {
      if (index === funnelData.length - 1) return null
      return {
        from: item.id,
        to: funnelData[index + 1]?.id,
        rate: ((funnelData[index + 1]?.value / item.value) * 100).toFixed(1),
        fromValue: item.value,
        toValue: funnelData[index + 1]?.value,
      }
    })
    .filter(Boolean)

  // Calculate dropoff points
  const dropoffPoints = funnelData
    .map((item, index) => {
      if (index === funnelData.length - 1) return null
      const dropoff = item.value - funnelData[index + 1].value
      const dropoffPercentage = ((dropoff / item.value) * 100).toFixed(1)
      return {
        stage: item.id,
        dropoff,
        dropoffPercentage,
        nextStage: funnelData[index + 1].id,
      }
    })
    .filter(Boolean)

  // Custom theme for Nivo charts
  const nivoTheme = {
    background: "transparent",
    textColor: "#333333",
    fontSize: 12,
    axis: {
      domain: {
        line: {
          stroke: "#777777",
          strokeWidth: 1,
        },
      },
      ticks: {
        line: {
          stroke: "#777777",
          strokeWidth: 1,
        },
      },
    },
    grid: {
      line: {
        stroke: "#dddddd",
        strokeWidth: 1,
      },
    },
    tooltip: {
      container: {
        background: "white",
        color: "#333333",
        fontSize: "12px",
        borderRadius: "6px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
        padding: "8px 12px",
      },
    },
  }

  // Funnel colors
  const funnelColors = [
    "hsl(var(--funnel-9))",
    "hsl(var(--funnel-8))",
    "hsl(var(--funnel-7))",
    "hsl(var(--funnel-6))",
    "hsl(var(--funnel-5))",
  ]

  // Dropoff colors
  const dropoffColors = [
    "hsl(var(--dropoff-5))",
    "hsl(var(--dropoff-6))",
    "hsl(var(--dropoff-7))",
    "hsl(var(--dropoff-8))",
  ]

  // Custom tooltip for funnel
  const CustomTooltip = ({ datum }: { datum: any }) => {
    const comparisonItem = comparisonData.find((item) => item.id === datum.id)
    const change = comparisonItem ? (((datum.value - comparisonItem.value) / comparisonItem.value) * 100).toFixed(1) : 0

    return (
      <div className="bg-card p-3 border rounded-md shadow-md text-card-foreground">
        <p className="font-medium">{datum.id}</p>
        <p className="text-sm">Current: {datum.value.toLocaleString()}</p>
        {comparison && comparisonItem && (
          <>
            <p className="text-sm">Previous: {comparisonItem.value.toLocaleString()}</p>
            <p className={`text-sm ${Number(change) >= 0 ? "text-success" : "text-danger"}`}>Change: {change}%</p>
          </>
        )}
      </div>
    )
  }

  return (
    <Card className="col-span-12">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <ArrowDownCircle className="mr-2 h-5 w-5 text-primary" />
              Conversion Journey Visualization
            </CardTitle>
            <CardDescription>Interactive visualization of the customer conversion funnel</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setComparison(!comparison)}
              className={comparison ? "bg-primary/10 text-primary border-primary/20" : ""}
            >
              {comparison ? "Hide Comparison" : "Show Comparison"}
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="icon" size="sm">
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="card-content-fix">
        <Tabs defaultValue="full" onValueChange={setView}>
          <TabsList className="mb-4">
            <TabsTrigger value="full">Full Journey</TabsTrigger>
            <TabsTrigger value="stage">Stage Conversion</TabsTrigger>
            <TabsTrigger value="dropoff">Dropoff Analysis</TabsTrigger>
            <TabsTrigger value="path">Path Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="full">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-8">
                <motion.div
                  className="h-[400px] rounded-lg border p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium">Conversion Funnel</h3>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" size="sm">
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" size="sm">
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="h-[340px] w-full">
                    <Funnel
                      data={funnelData}
                      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                      valueFormat=">-.4s"
                      colors={funnelColors}
                      borderWidth={20}
                      labelColor={{
                        from: "color",
                        modifiers: [["darker", 3]],
                      }}
                      beforeSeparatorLength={100}
                      beforeSeparatorOffset={20}
                      afterSeparatorLength={100}
                      afterSeparatorOffset={20}
                      currentPartSizeExtension={10}
                      currentBorderWidth={40}
                      motionConfig="gentle"
                      tooltip={({ datum }) => <CustomTooltip datum={datum} />}
                      theme={nivoTheme}
                    />
                  </div>
                </motion.div>
              </div>

              <div className="col-span-12 lg:col-span-4">
                <motion.div
                  className="rounded-lg border h-[400px] p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-sm font-medium mb-4">Funnel Metrics</h3>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Overall Conversion Rate</div>
                      <div className="text-2xl font-bold text-primary">
                        {((funnelData[funnelData.length - 1].value / funnelData[0].value) * 100).toFixed(2)}%
                      </div>
                      {comparison && (
                        <div className="text-xs text-success">
                          +
                          {(
                            (funnelData[funnelData.length - 1].value / funnelData[0].value -
                              comparisonData[comparisonData.length - 1].value / comparisonData[0].value) *
                            100
                          ).toFixed(2)}
                          % vs previous period
                        </div>
                      )}
                    </div>

                    <div className="pt-2 border-t">
                      <div className="text-sm font-medium mb-2">Stage Conversion Rates</div>
                      <div className="space-y-2">
                        {conversionRates.map((rate, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                              <ArrowRightCircle className="h-3 w-3 mr-1 text-info" />
                              <span>
                                {rate.from} → {rate.to}
                              </span>
                            </div>
                            <span className="font-medium">{rate.rate}%</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t">
                      <div className="text-sm font-medium mb-2">Biggest Dropoff</div>
                      {dropoffPoints
                        .sort((a, b) => Number.parseFloat(b.dropoffPercentage) - Number.parseFloat(a.dropoffPercentage))
                        .slice(0, 1)
                        .map((point, index) => (
                          <div key={index}>
                            <div className="flex items-center justify-between text-sm">
                              <span>
                                {point.stage} → {point.nextStage}
                              </span>
                              <Badge className="bg-danger/10 text-danger border-danger/20">
                                {point.dropoffPercentage}%
                              </Badge>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {point.dropoff.toLocaleString()} users drop off at this stage
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="stage">
            <motion.div
              className="rounded-lg border p-4 h-[500px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium">Stage-by-Stage Conversion</h3>
                <Button variant="outline" size="sm">
                  Select Stages
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="h-[430px] w-full">
                <Bar
                  data={conversionRates}
                  keys={["rate"]}
                  indexBy="from"
                  margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={["hsl(var(--info))"]}
                  borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -45,
                    legend: "Funnel Stage",
                    legendPosition: "middle",
                    legendOffset: 50,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Conversion Rate (%)",
                    legendPosition: "middle",
                    legendOffset: -50,
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  animate={true}
                  motionConfig="gentle"
                  role="application"
                  theme={nivoTheme}
                  tooltip={({ id, value, color, indexValue }) => (
                    <div className="bg-card p-3 border rounded-md shadow-md text-card-foreground">
                      <p className="font-medium">
                        {indexValue} → {conversionRates.find((r) => r.from === indexValue)?.to}
                      </p>
                      <p className="text-sm">
                        Conversion Rate: <strong>{value}%</strong>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {conversionRates.find((r) => r.from === indexValue)?.fromValue.toLocaleString()} →{" "}
                        {conversionRates.find((r) => r.from === indexValue)?.toValue.toLocaleString()} users
                      </p>
                    </div>
                  )}
                />
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="dropoff">
            <motion.div
              className="rounded-lg border p-4 h-[500px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium">Dropoff Analysis</h3>
                <Button variant="outline" size="sm">
                  View Recommendations
                </Button>
              </div>

              <div className="h-[430px] w-full">
                <Bar
                  data={dropoffPoints}
                  keys={["dropoffPercentage"]}
                  indexBy="stage"
                  margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={dropoffColors}
                  borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -45,
                    legend: "Funnel Stage",
                    legendPosition: "middle",
                    legendOffset: 50,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Dropoff Rate (%)",
                    legendPosition: "middle",
                    legendOffset: -50,
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  animate={true}
                  motionConfig="gentle"
                  role="application"
                  theme={nivoTheme}
                  tooltip={({ id, value, color, indexValue }) => (
                    <div className="bg-card p-3 border rounded-md shadow-md text-card-foreground">
                      <p className="font-medium">
                        {indexValue} → {dropoffPoints.find((p) => p.stage === indexValue)?.nextStage}
                      </p>
                      <p className="text-sm">
                        Dropoff Rate: <strong>{value}%</strong>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {dropoffPoints.find((p) => p.stage === indexValue)?.dropoff.toLocaleString()} users dropped off
                      </p>
                    </div>
                  )}
                />
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="path">
            <motion.div
              className="rounded-lg border p-4 h-[500px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium">Path Analysis</h3>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter Paths
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-muted-foreground">Sankey diagram visualization would appear here</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Showing user flow from impressions through various channels to conversion
                  </p>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default FunnelVisualization

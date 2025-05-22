"use client"

import { useState } from "react"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveHeatMap } from "@nivo/heatmap"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Users, PieChart, BarChart3, Activity, Map, Filter, Download, RefreshCw } from "lucide-react"

export function AudienceSegmentation() {
  const [timeRange, setTimeRange] = useState("30d")
  const [segmentFilter, setSegmentFilter] = useState("all")

  // Sample data for charts
  const demographicData = [
    { id: "18-24", value: 32, color: "#60a5fa" },
    { id: "25-34", value: 38, color: "#34d399" },
    { id: "35-44", value: 18, color: "#a78bfa" },
    { id: "45-54", value: 8, color: "#fbbf24" },
    { id: "55+", value: 4, color: "#f87171" },
  ]

  const genderData = [
    { id: "Female", value: 58, color: "#ec4899" },
    { id: "Male", value: 40, color: "#3b82f6" },
    { id: "Non-binary", value: 2, color: "#a78bfa" },
  ]

  const locationData = [
    { country: "United States", value: 42 },
    { country: "United Kingdom", value: 15 },
    { country: "Canada", value: 12 },
    { country: "Australia", value: 8 },
    { country: "Germany", value: 6 },
    { country: "France", value: 5 },
    { country: "Brazil", value: 4 },
    { country: "Japan", value: 3 },
    { country: "India", value: 3 },
    { country: "Other", value: 2 },
  ]

  const interestData = [
    { interest: "Technology", value: 75 },
    { interest: "Fashion", value: 68 },
    { interest: "Travel", value: 62 },
    { interest: "Food", value: 58 },
    { interest: "Fitness", value: 52 },
    { interest: "Beauty", value: 48 },
    { interest: "Gaming", value: 45 },
    { interest: "Music", value: 42 },
    { interest: "Movies", value: 38 },
    { interest: "Sports", value: 35 },
  ]

  const engagementData = [
    { platform: "Instagram", casual: 25, regular: 35, power: 40 },
    { platform: "TikTok", casual: 30, regular: 40, power: 30 },
    { platform: "YouTube", casual: 40, regular: 30, power: 30 },
    { platform: "Facebook", casual: 50, regular: 30, power: 20 },
    { platform: "Twitter", casual: 45, regular: 35, power: 20 },
  ]

  const timeOfDayData = [
    { day: "Monday", "00-04": 2, "04-08": 5, "08-12": 10, "12-16": 15, "16-20": 20, "20-24": 12 },
    { day: "Tuesday", "00-04": 3, "04-08": 6, "08-12": 12, "12-16": 16, "16-20": 22, "20-24": 14 },
    { day: "Wednesday", "00-04": 2, "04-08": 5, "08-12": 13, "12-16": 18, "16-20": 24, "20-24": 15 },
    { day: "Thursday", "00-04": 3, "04-08": 7, "08-12": 14, "12-16": 17, "16-20": 25, "20-24": 16 },
    { day: "Friday", "00-04": 4, "04-08": 6, "08-12": 12, "12-16": 15, "16-20": 22, "20-24": 18 },
    { day: "Saturday", "00-04": 6, "04-08": 4, "08-12": 8, "12-16": 12, "16-20": 18, "20-24": 20 },
    { day: "Sunday", "00-04": 5, "04-08": 3, "08-12": 7, "12-16": 10, "16-20": 15, "20-24": 17 },
  ]

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Users className="h-5 w-5" />
          Audience Insights
        </CardTitle>
        <div className="flex items-center space-x-2">
          <Select onValueChange={setTimeRange}>
            <SelectTrigger className="text-sm h-8">
              <SelectValue placeholder="Last 30 days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="365d">Last 365 days</SelectItem>
            </SelectContent>
          </Select>
          <Button size="sm" variant="outline" className="h-8">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="demographics" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="demographics" className="flex items-center gap-1">
                <PieChart className="w-4 h-4" /> Demographics
              </TabsTrigger>
              <TabsTrigger value="geographic" className="flex items-center gap-1">
                <Map className="w-4 h-4" /> Geographic
              </TabsTrigger>
              <TabsTrigger value="engagement" className="flex items-center gap-1">
                <Activity className="w-4 h-4" /> Engagement
              </TabsTrigger>
              <TabsTrigger value="interests" className="flex items-center gap-1">
                <BarChart3 className="w-4 h-4" /> Interests
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <Select onValueChange={setSegmentFilter}>
                <SelectTrigger className="text-sm h-8">
                  <SelectValue placeholder="All Segments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Segments</SelectItem>
                  <SelectItem value="active">Active Users</SelectItem>
                  <SelectItem value="inactive">Inactive Users</SelectItem>
                  {/* Add more segments as needed */}
                </SelectContent>
              </Select>
              <Button size="sm" variant="outline" className="h-8">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button size="sm" className="h-8">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <TabsContent value="demographics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Age Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-52">
                    <ResponsivePie
                      data={demographicData}
                      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
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
                      legends={[]}
                      animate={true}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Gender Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-52">
                    <ResponsivePie
                      data={genderData}
                      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
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
                      legends={[]}
                      animate={true}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Placeholder for other demographic data */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Other Demographics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-52 flex items-center justify-center text-muted-foreground">
                    <Users className="w-6 h-6 mb-1" />
                    <p>More demographic insights here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="geographic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">User Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveBar
                    data={locationData}
                    keys={["value"]}
                    indexBy="country"
                    margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
                    padding={0.3}
                    colors={["#3b82f6"]}
                    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: -45,
                      legend: "Country",
                      legendPosition: "middle",
                      legendOffset: 50,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Users",
                      legendPosition: "middle",
                      legendOffset: -50,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    animate={true}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Platform Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveBar
                    data={engagementData}
                    keys={["casual", "regular", "power"]}
                    indexBy="platform"
                    margin={{ top: 20, right: 50, bottom: 50, left: 60 }}
                    padding={0.3}
                    colors={["#60a5fa", "#34d399", "#a78bfa"]}
                    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Platform",
                      legendPosition: "middle",
                      legendOffset: 40,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Engagement",
                      legendPosition: "middle",
                      legendOffset: -50,
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
                    animate={true}
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Activity by Time of Day</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveHeatMap
                    data={timeOfDayData}
                    keys={["00-04", "04-08", "08-12", "12-16", "16-20", "20-24"]}
                    indexBy="day"
                    margin={{ top: 20, right: 60, bottom: 60, left: 80 }}
                    colors={["#edf2f7", "#bdd4e7", "#60a5fa", "#2563eb"]}
                    emptyColor="#ffffff"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: -45,
                      legend: "Time of Day",
                      legendPosition: "middle",
                      legendOffset: 45,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Day",
                      legendPosition: "middle",
                      legendOffset: -60,
                    }}
                    cellBorderColor={{ from: "color", modifiers: [["darker", 0.5]] }}
                    labelTextColor="#ffffff"
                    animate={true}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interests" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Top Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveBar
                    data={interestData}
                    keys={["value"]}
                    indexBy="interest"
                    margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
                    padding={0.3}
                    colors={["#a78bfa"]}
                    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: -45,
                      legend: "Interest",
                      legendPosition: "middle",
                      legendOffset: 50,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Score",
                      legendPosition: "middle",
                      legendOffset: -50,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    animate={true}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

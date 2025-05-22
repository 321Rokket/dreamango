"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { NivoCharts } from "@/components/dashboard/nivo-charts"
import { Filter, Download, Globe, Users, TrendingUp } from "lucide-react"

export default function MarketExplorerPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Market Explorer</h1>
          <p className="text-muted-foreground">Analyze market dynamics, competitors, and audience segments.</p>
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
          <TabsTrigger value="competitors">Competitors</TabsTrigger>
          <TabsTrigger value="segments">Segments</TabsTrigger>
          <TabsTrigger value="trends">Market Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">Market Share</CardTitle>
                  <Globe className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <NivoCharts.PieChart
                    data={[
                      { id: "Telkom", value: 15 },
                      { id: "Vodacom", value: 35 },
                      { id: "MTN", value: 30 },
                      { id: "Cell C", value: 12 },
                      { id: "Others", value: 8 },
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
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">Audience Segments</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <NivoCharts.PieChart
                    data={[
                      { id: "Youth", value: 30 },
                      { id: "Young Adults", value: 25 },
                      { id: "Professionals", value: 20 },
                      { id: "Families", value: 15 },
                      { id: "Seniors", value: 10 },
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
                    colors={{ scheme: "category10" }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">Market Growth</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <NivoCharts.LineChart
                    data={[
                      {
                        id: "market",
                        color: "#3b82f6",
                        data: [
                          { x: "Q1", y: 100 },
                          { x: "Q2", y: 105 },
                          { x: "Q3", y: 112 },
                          { x: "Q4", y: 120 },
                          { x: "Q1", y: 130 },
                        ],
                      },
                    ]}
                    margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                    xScale={{ type: "point" }}
                    yScale={{
                      type: "linear",
                      min: "auto",
                      max: "auto",
                    }}
                    curve="monotoneX"
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Quarter",
                      legendOffset: 36,
                      legendPosition: "middle",
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Growth",
                      legendOffset: -40,
                      legendPosition: "middle",
                    }}
                    enablePoints={true}
                    pointSize={8}
                    pointColor="#3b82f6"
                    pointBorderWidth={2}
                    pointBorderColor={{ from: "serieColor" }}
                    enableArea={true}
                    areaOpacity={0.15}
                    useMesh={true}
                    colors={["#3b82f6"]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Market Comparison</CardTitle>
              <CardDescription>Comparative analysis across key metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <NivoCharts.RadarChart
                  data={[
                    {
                      metric: "Market Share",
                      Telkom: 15,
                      Vodacom: 35,
                      MTN: 30,
                      "Cell C": 12,
                    },
                    {
                      metric: "Customer Satisfaction",
                      Telkom: 75,
                      Vodacom: 70,
                      MTN: 65,
                      "Cell C": 60,
                    },
                    {
                      metric: "Brand Awareness",
                      Telkom: 65,
                      Vodacom: 85,
                      MTN: 80,
                      "Cell C": 55,
                    },
                    {
                      metric: "Digital Presence",
                      Telkom: 70,
                      Vodacom: 80,
                      MTN: 75,
                      "Cell C": 60,
                    },
                    {
                      metric: "Innovation",
                      Telkom: 75,
                      Vodacom: 70,
                      MTN: 65,
                      "Cell C": 50,
                    },
                  ]}
                  keys={["Telkom", "Vodacom", "MTN", "Cell C"]}
                  indexBy="metric"
                  maxValue={100}
                  margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                  curve="linearClosed"
                  borderWidth={2}
                  borderColor={{ from: "color" }}
                  gridLabelOffset={36}
                  dotSize={10}
                  dotColor={{ theme: "background" }}
                  dotBorderWidth={2}
                  dotBorderColor={{ from: "color" }}
                  enableDotLabel={true}
                  dotLabel="value"
                  dotLabelYOffset={-12}
                  colors={{ scheme: "category10" }}
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

        <TabsContent value="competitors" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Competitor Market Share</CardTitle>
                <CardDescription>Share distribution among key competitors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <NivoCharts.PieChart
                    data={[
                      { id: "Vodacom", value: 35 },
                      { id: "MTN", value: 30 },
                      { id: "Telkom", value: 15 },
                      { id: "Cell C", value: 12 },
                      { id: "Others", value: 8 },
                    ]}
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
                    colors={{ scheme: "nivo" }}
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

            <Card>
              <CardHeader>
                <CardTitle>Competitor Growth Trends</CardTitle>
                <CardDescription>Year-over-year growth comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <NivoCharts.LineChart
                    data={[
                      {
                        id: "Telkom",
                        color: "#FF6B6B",
                        data: [
                          { x: "2021", y: 100 },
                          { x: "2022", y: 110 },
                          { x: "2023", y: 125 },
                          { x: "2024", y: 145 },
                          { x: "2025", y: 170 },
                        ],
                      },
                      {
                        id: "Vodacom",
                        color: "#4ECDC4",
                        data: [
                          { x: "2021", y: 100 },
                          { x: "2022", y: 105 },
                          { x: "2023", y: 112 },
                          { x: "2024", y: 120 },
                          { x: "2025", y: 130 },
                        ],
                      },
                      {
                        id: "MTN",
                        color: "#F9C80E",
                        data: [
                          { x: "2021", y: 100 },
                          { x: "2022", y: 108 },
                          { x: "2023", y: 115 },
                          { x: "2024", y: 125 },
                          { x: "2025", y: 135 },
                        ],
                      },
                      {
                        id: "Cell C",
                        color: "#662E9B",
                        data: [
                          { x: "2021", y: 100 },
                          { x: "2022", y: 102 },
                          { x: "2023", y: 105 },
                          { x: "2024", y: 110 },
                          { x: "2025", y: 115 },
                        ],
                      },
                    ]}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: "point" }}
                    yScale={{
                      type: "linear",
                      min: "auto",
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
                      legend: "Year",
                      legendOffset: 36,
                      legendPosition: "middle",
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Growth Index (2021=100)",
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
          </div>
        </TabsContent>

        <TabsContent value="segments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Audience Segment Analysis</CardTitle>
              <CardDescription>Detailed breakdown of market segments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <NivoCharts.BarChart
                  data={[
                    { segment: "Youth (13-24)", Telkom: 25, Vodacom: 20, MTN: 22, "Cell C": 18 },
                    { segment: "Young Adults (25-34)", Telkom: 20, Vodacom: 25, MTN: 23, "Cell C": 15 },
                    { segment: "Professionals (35-44)", Telkom: 15, Vodacom: 30, MTN: 28, "Cell C": 12 },
                    { segment: "Families (45-54)", Telkom: 18, Vodacom: 15, MTN: 20, "Cell C": 10 },
                    { segment: "Seniors (55+)", Telkom: 12, Vodacom: 10, MTN: 7, "Cell C": 5 },
                  ]}
                  keys={["Telkom", "Vodacom", "MTN", "Cell C"]}
                  indexBy="segment"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  groupMode="grouped"
                  colors={{ scheme: "nivo" }}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Segment",
                    legendPosition: "middle",
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Market Share (%)",
                    legendPosition: "middle",
                    legendOffset: -40,
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
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
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Market Trend Analysis</CardTitle>
              <CardDescription>Key market trends and indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <NivoCharts.LineChart
                  data={[
                    {
                      id: "Data Usage",
                      color: "#3b82f6",
                      data: [
                        { x: "2021 Q1", y: 100 },
                        { x: "2021 Q2", y: 110 },
                        { x: "2021 Q3", y: 125 },
                        { x: "2021 Q4", y: 140 },
                        { x: "2022 Q1", y: 160 },
                        { x: "2022 Q2", y: 185 },
                        { x: "2022 Q3", y: 210 },
                        { x: "2022 Q4", y: 240 },
                        { x: "2023 Q1", y: 275 },
                        { x: "2023 Q2", y: 310 },
                        { x: "2023 Q3", y: 350 },
                        { x: "2023 Q4", y: 400 },
                      ],
                    },
                    {
                      id: "5G Adoption",
                      color: "#10b981",
                      data: [
                        { x: "2021 Q1", y: 5 },
                        { x: "2021 Q2", y: 8 },
                        { x: "2021 Q3", y: 12 },
                        { x: "2021 Q4", y: 18 },
                        { x: "2022 Q1", y: 25 },
                        { x: "2022 Q2", y: 35 },
                        { x: "2022 Q3", y: 45 },
                        { x: "2022 Q4", y: 60 },
                        { x: "2023 Q1", y: 75 },
                        { x: "2023 Q2", y: 95 },
                        { x: "2023 Q3", y: 120 },
                        { x: "2023 Q4", y: 150 },
                      ],
                    },
                    {
                      id: "IoT Connections",
                      color: "#f59e0b",
                      data: [
                        { x: "2021 Q1", y: 20 },
                        { x: "2021 Q2", y: 25 },
                        { x: "2021 Q3", y: 32 },
                        { x: "2021 Q4", y: 40 },
                        { x: "2022 Q1", y: 50 },
                        { x: "2022 Q2", y: 65 },
                        { x: "2022 Q3", y: 85 },
                        { x: "2022 Q4", y: 110 },
                        { x: "2023 Q1", y: 140 },
                        { x: "2023 Q2", y: 180 },
                        { x: "2023 Q3", y: 230 },
                        { x: "2023 Q4", y: 290 },
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
                    tickRotation: -45,
                    legend: "Quarter",
                    legendOffset: 36,
                    legendPosition: "middle",
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Growth Index (2021 Q1=100)",
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
      </Tabs>
    </div>
  )
}

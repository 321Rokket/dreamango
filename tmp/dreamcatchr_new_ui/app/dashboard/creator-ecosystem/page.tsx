"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Download, Filter, Search, UserPlus, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ResponsiveLine } from "@nivo/line"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveRadar } from "@nivo/radar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CreatorEcosystemPage() {
  // Creator performance data
  const creatorPerformanceData = [
    {
      id: "Engagement",
      color: "hsl(210, 70%, 50%)",
      data: [
        { x: "Jan", y: 3.2 },
        { x: "Feb", y: 3.5 },
        { x: "Mar", y: 3.8 },
        { x: "Apr", y: 4.1 },
        { x: "May", y: 4.4 },
        { x: "Jun", y: 4.7 },
      ],
    },
    {
      id: "Reach",
      color: "hsl(160, 70%, 50%)",
      data: [
        { x: "Jan", y: 2.1 },
        { x: "Feb", y: 2.4 },
        { x: "Mar", y: 2.7 },
        { x: "Apr", y: 3.0 },
        { x: "May", y: 3.3 },
        { x: "Jun", y: 3.6 },
      ],
    },
    {
      id: "Conversion",
      color: "hsl(30, 70%, 50%)",
      data: [
        { x: "Jan", y: 1.2 },
        { x: "Feb", y: 1.5 },
        { x: "Mar", y: 1.8 },
        { x: "Apr", y: 2.1 },
        { x: "May", y: 2.4 },
        { x: "Jun", y: 2.7 },
      ],
    },
  ]

  // Creator category distribution
  const categoryData = [
    { id: "Lifestyle", value: 35, color: "hsl(210, 70%, 50%)" },
    { id: "Fashion", value: 25, color: "hsl(160, 70%, 50%)" },
    { id: "Beauty", value: 15, color: "hsl(30, 70%, 50%)" },
    { id: "Tech", value: 10, color: "hsl(270, 70%, 50%)" },
    { id: "Food", value: 15, color: "hsl(0, 70%, 50%)" },
  ]

  // Creator platform distribution
  const platformData = [
    { platform: "Instagram", creators: 45 },
    { platform: "TikTok", creators: 35 },
    { platform: "YouTube", creators: 25 },
    { platform: "Twitter", creators: 15 },
    { platform: "Facebook", creators: 10 },
  ]

  // Creator radar data
  const radarData = [
    {
      creator: "Creator 1",
      engagement: 80,
      reach: 65,
      conversion: 70,
      loyalty: 85,
      growth: 75,
    },
    {
      creator: "Creator 2",
      engagement: 70,
      reach: 80,
      conversion: 60,
      loyalty: 75,
      growth: 85,
    },
    {
      creator: "Creator 3",
      engagement: 90,
      reach: 70,
      conversion: 80,
      loyalty: 65,
      growth: 75,
    },
  ]

  // Campaign data
  const campaignData = [
    {
      id: 1,
      name: "Summer Collection Launch",
      creators: 12,
      status: "Active",
      budget: "$25,000",
      roi: "+18%",
      startDate: "2023-06-01",
      endDate: "2023-07-15",
    },
    {
      id: 2,
      name: "Back to School Campaign",
      creators: 8,
      status: "Planning",
      budget: "$18,000",
      roi: "N/A",
      startDate: "2023-08-01",
      endDate: "2023-08-31",
    },
    {
      id: 3,
      name: "Holiday Special",
      creators: 15,
      status: "Upcoming",
      budget: "$30,000",
      roi: "N/A",
      startDate: "2023-11-15",
      endDate: "2023-12-31",
    },
    {
      id: 4,
      name: "Spring Collection",
      creators: 10,
      status: "Completed",
      budget: "$22,000",
      roi: "+22%",
      startDate: "2023-03-01",
      endDate: "2023-04-15",
    },
    {
      id: 5,
      name: "Brand Anniversary",
      creators: 20,
      status: "Completed",
      budget: "$40,000",
      roi: "+25%",
      startDate: "2023-05-01",
      endDate: "2023-05-31",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Creator Ecosystem</h2>
        <p className="text-muted-foreground">
          Manage your creator partnerships and discover new collaboration opportunities.
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search creators..." className="w-full bg-background pl-8 lg:w-[320px]" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <UserPlus className="mr-2 h-4 w-4" />
            Add Creator
          </Button>
        </div>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Creators</TabsTrigger>
          <TabsTrigger value="potential">Potential Collaborations</TabsTrigger>
          <TabsTrigger value="campaigns">Creator Campaigns</TabsTrigger>
          <TabsTrigger value="analytics">Creator Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`/placeholder.svg?height=48&width=48`} alt={`Creator ${i}`} />
                        <AvatarFallback>C{i}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">Creator Name {i}</CardTitle>
                        <CardDescription>@creator{i}</CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Followers:</span>
                      <span className="font-medium">{i * 100}K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Engagement:</span>
                      <span className="font-medium">{i + 2}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Content Type:</span>
                      <span className="font-medium">Video, Images</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Last Campaign:</span>
                      <span className="font-medium">2 weeks ago</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">ROI:</span>
                      <span className="font-medium text-green-600">+{i * 2 + 10}%</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="potential" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Potential Creator Matches</CardTitle>
                <CardDescription>Creators that align with your brand values and audience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start space-x-4 p-3 rounded-md border">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={`Potential Creator ${i}`} />
                        <AvatarFallback>PC{i}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium">Potential Creator {i}</h4>
                          <Badge variant="outline">{90 - i * 5}% Match</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {i * 50 + 100}K followers • {i + 3}% engagement rate
                        </p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {["Lifestyle", "Fashion", "Beauty"].slice(0, i).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Category Distribution</CardTitle>
                <CardDescription>Creator categories in your potential pool</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsivePie
                    data={categoryData}
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
              <CardTitle>Platform Distribution</CardTitle>
              <CardDescription>Where potential creators are most active</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveBar
                  data={platformData}
                  keys={["creators"]}
                  indexBy="platform"
                  margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={{ scheme: "nivo" }}
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
                    legend: "Number of Creators",
                    legendPosition: "middle",
                    legendOffset: -40,
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                All Campaigns
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
            <Button size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              New Campaign
            </Button>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Campaign Management</CardTitle>
              <CardDescription>Track and manage your creator-led marketing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign Name</TableHead>
                    <TableHead>Creators</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>ROI</TableHead>
                    <TableHead>Timeline</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaignData.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium">{campaign.name}</TableCell>
                      <TableCell>{campaign.creators}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            campaign.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : campaign.status === "Completed"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-orange-100 text-orange-800"
                          }
                        >
                          {campaign.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{campaign.budget}</TableCell>
                      <TableCell>{campaign.roi}</TableCell>
                      <TableCell>
                        {campaign.startDate} - {campaign.endDate}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>ROI and engagement metrics by campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveLine
                    data={creatorPerformanceData}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: "point" }}
                    yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
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
            <Card>
              <CardHeader>
                <CardTitle>Creator Allocation</CardTitle>
                <CardDescription>Budget allocation by creator type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsivePie
                    data={[
                      { id: "Mega", value: 40, color: "hsl(210, 70%, 50%)" },
                      { id: "Macro", value: 30, color: "hsl(160, 70%, 50%)" },
                      { id: "Micro", value: 20, color: "hsl(30, 70%, 50%)" },
                      { id: "Nano", value: 10, color: "hsl(270, 70%, 50%)" },
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
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Creators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">124</div>
                <p className="text-xs text-muted-foreground">+12 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Avg. Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.7%</div>
                <p className="text-xs text-muted-foreground">+0.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Creator ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2x</div>
                <p className="text-xs text-muted-foreground">+0.4x from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Content Produced</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">342</div>
                <p className="text-xs text-muted-foreground">+58 from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Creator Performance</CardTitle>
                <CardDescription>Key metrics over the past 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveLine
                    data={creatorPerformanceData}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: "point" }}
                    yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
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
            <Card>
              <CardHeader>
                <CardTitle>Creator Comparison</CardTitle>
                <CardDescription>Performance metrics by creator</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveRadar
                    data={radarData}
                    keys={["engagement", "reach", "conversion", "loyalty", "growth"]}
                    indexBy="creator"
                    maxValue="auto"
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
                    colors={{ scheme: "nivo" }}
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
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Content Performance by Creator Tier</CardTitle>
              <CardDescription>Engagement and conversion metrics by creator size</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveBar
                  data={[
                    { tier: "Nano (1K-10K)", engagement: 5.2, conversion: 2.8, ctr: 3.5 },
                    { tier: "Micro (10K-50K)", engagement: 4.8, conversion: 2.5, ctr: 3.2 },
                    { tier: "Mid (50K-500K)", engagement: 4.2, conversion: 2.2, ctr: 2.8 },
                    { tier: "Macro (500K-1M)", engagement: 3.8, conversion: 1.9, ctr: 2.5 },
                    { tier: "Mega (1M+)", engagement: 3.5, conversion: 1.7, ctr: 2.2 },
                  ]}
                  keys={["engagement", "conversion", "ctr"]}
                  indexBy="tier"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  groupMode="grouped"
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={{ scheme: "nivo" }}
                  defs={[
                    {
                      id: "dots",
                      type: "patternDots",
                      background: "inherit",
                      color: "#38bcb2",
                      size: 4,
                      padding: 1,
                      stagger: true,
                    },
                    {
                      id: "lines",
                      type: "patternLines",
                      background: "inherit",
                      color: "#eed312",
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10,
                    },
                  ]}
                  borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Creator Tier",
                    legendPosition: "middle",
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Rate (%)",
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
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

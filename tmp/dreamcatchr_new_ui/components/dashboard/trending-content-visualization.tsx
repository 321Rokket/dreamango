"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Heart, MessageSquare, Share2, TrendingUp, Filter, Download } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import * as d3 from "d3"
import { useEffect, useRef } from "react"
import { ResponsiveRadar } from "@nivo/radar"
import { ResponsivePie } from "@nivo/pie"

export function TrendingContentVisualization() {
  const [activeTab, setActiveTab] = useState("overview")
  const networkRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const trendingContent = [
    {
      id: "amapiano-2024",
      title: "Amapiano 2024 Dance Challenge",
      platform: "TikTok",
      views: 845000,
      likes: 132400,
      comments: 8850,
      shares: 25600,
      engagement: 6.8,
      category: "Music",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hq720-6.jpg-i3SGHHJp57AUQsUMfqdfVy0i4lqEtr.jpeg",
      description: "Viral Amapiano dance challenge featuring trending South African artists and dancers",
      growth: 242,
      viralityScore: 94,
    },
    {
      id: "ushuni-musician",
      title: "Ushuni Show Musician",
      platform: "Instagram",
      views: 389000,
      likes: 58500,
      comments: 4620,
      shares: 14800,
      engagement: 5.5,
      category: "Entertainment",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hq720-4.jpg-d683z4249ymBo99xJ4mVMp3eO6kKbf.jpeg",
      description: "Popular musician from the Ushuni Show gaining traction with South African audiences",
      growth: 128,
      viralityScore: 82,
    },
    {
      id: "brother-bernard",
      title: "Brother Bernard Movie",
      platform: "YouTube",
      views: 520000,
      likes: 85600,
      comments: 12850,
      shares: 18900,
      engagement: 7.2,
      category: "Entertainment",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maxresdefault-4.jpg-oKFInDwSgympb2pxFALqsNDwG0Ynpc.jpeg",
      description: "Destiny Etiko and Fredrick Leonard's 'Brother Bernard' movie becoming a viral sensation",
      growth: 215,
      viralityScore: 91,
    },
    {
      id: "telkom-knockout",
      title: "Telkom Knockout Tournament",
      platform: "Facebook",
      views: 478000,
      likes: 68200,
      comments: 9450,
      shares: 17600,
      engagement: 5.7,
      category: "Sports",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-44-E53nhDuQU6sv9cfQ3qGQmaqzmJ3vAB.jpeg",
      description: "Telkom-sponsored football tournament generating significant social media engagement",
      growth: 178,
      viralityScore: 85,
    },
    {
      id: "only-in-africa",
      title: "Only In Africa Compilation",
      platform: "TikTok",
      views: 698000,
      likes: 126400,
      comments: 21580,
      shares: 44200,
      engagement: 8.1,
      category: "Comedy",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maxresdefault-6.jpg-WJn1yLWaEfbufZ8D1TRV4kgKY96ykX.jpeg",
      description: "Viral compilation of uniquely African moments resonating with South African audiences",
      growth: 186,
      viralityScore: 89,
    },
  ]

  // D3 Network Visualization
  useEffect(() => {
    if (networkRef.current && activeTab === "network") {
      // Clear previous visualization
      d3.select(networkRef.current).selectAll("*").remove()

      const width = networkRef.current.clientWidth
      const height = 500

      // Create nodes for each content item
      const nodes = trendingContent.map((content) => ({
        id: content.id,
        title: content.title,
        platform: content.platform,
        category: content.category,
        viralityScore: content.viralityScore,
        imageUrl: content.imageUrl,
      }))

      // Create links between related content
      const links = [
        { source: "amapiano-2024", target: "only-in-africa", value: 5 },
        { source: "ushuni-musician", target: "brother-bernard", value: 8 },
        { source: "brother-bernard", target: "telkom-knockout", value: 3 },
        { source: "amapiano-2024", target: "telkom-knockout", value: 4 },
        { source: "only-in-africa", target: "brother-bernard", value: 2 },
      ]

      // Create SVG
      const svg = d3
        .select(networkRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto;")

      // Create a force simulation
      const simulation = d3
        .forceSimulation(nodes)
        .force(
          "link",
          d3
            .forceLink(links)
            .id((d: any) => d.id)
            .distance(150),
        )
        .force("charge", d3.forceManyBody().strength(-400))
        .force("center", d3.forceCenter(width / 2, height / 2))

      // Create links
      const link = svg
        .append("g")
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke", "#4495d4")
        .attr("stroke-opacity", 0.6)
        .attr("stroke-width", (d: any) => Math.sqrt(d.value))

      // Create node groups
      const node = svg
        .append("g")
        .selectAll("g")
        .data(nodes)
        .join("g")
        .call(d3.drag<SVGGElement, any>().on("start", dragstarted).on("drag", dragged).on("end", dragended))

      // Add circles to nodes
      node
        .append("circle")
        .attr("r", (d: any) => d.viralityScore / 10 + 10)
        .attr("fill", (d: any) => {
          switch (d.platform) {
            case "TikTok":
              return "#00f2ea"
            case "Instagram":
              return "#e1306c"
            case "YouTube":
              return "#ff0000"
            case "Facebook":
              return "#4267B2"
            default:
              return "#4495d4"
          }
        })
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)

      // Add labels to nodes
      node
        .append("text")
        .attr("dx", 15)
        .attr("dy", ".35em")
        .text((d: any) => d.title)
        .attr("font-size", "10px")
        .attr("fill", "#fff")

      // Add title for hover effect
      node.append("title").text((d: any) => `${d.title} (${d.platform})`)

      // Update positions on simulation tick
      simulation.on("tick", () => {
        link
          .attr("x1", (d: any) => d.source.x)
          .attr("y1", (d: any) => d.source.y)
          .attr("x2", (d: any) => d.target.x)
          .attr("y2", (d: any) => d.target.y)

        node.attr("transform", (d: any) => `translate(${d.x},${d.y})`)
      })

      // Drag functions
      function dragstarted(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x
        d.fy = d.y
      }

      function dragged(event: any, d: any) {
        d.fx = event.x
        d.fy = event.y
      }

      function dragended(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(0)
        d.fx = null
        d.fy = null
      }

      return () => {
        simulation.stop()
      }
    }
  }, [activeTab])

  // D3 Timeline Visualization
  useEffect(() => {
    if (timelineRef.current && activeTab === "timeline") {
      // Clear previous visualization
      d3.select(timelineRef.current).selectAll("*").remove()

      const width = timelineRef.current.clientWidth
      const height = 400
      const margin = { top: 20, right: 30, bottom: 30, left: 40 }

      // Sample timeline data (growth over time)
      const timelineData = [
        { date: "2023-08-01", "Amapiano 2024": 10, "Brother Bernard": 5, "Telkom Knockout": 2 },
        { date: "2023-08-08", "Amapiano 2024": 25, "Brother Bernard": 15, "Telkom Knockout": 8 },
        { date: "2023-08-15", "Amapiano 2024": 60, "Brother Bernard": 40, "Telkom Knockout": 20 },
        { date: "2023-08-22", "Amapiano 2024": 120, "Brother Bernard": 80, "Telkom Knockout": 50 },
        { date: "2023-08-29", "Amapiano 2024": 242, "Brother Bernard": 215, "Telkom Knockout": 178 },
      ]

      // Create SVG
      const svg = d3
        .select(timelineRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto;")

      // Parse dates
      const parseDate = d3.timeParse("%Y-%m-%d")
      const data = timelineData.map((d) => ({
        date: parseDate(d.date) as Date,
        "Amapiano 2024": d["Amapiano 2024"],
        "Brother Bernard": d["Brother Bernard"],
        "Telkom Knockout": d["Telkom Knockout"],
      }))

      // Set up scales
      const x = d3
        .scaleTime()
        .domain(d3.extent(data, (d) => d.date) as [Date, Date])
        .range([margin.left, width - margin.right])

      const y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, (d) => Math.max(d["Amapiano 2024"], d["Brother Bernard"], d["Telkom Knockout"])) as number,
        ])
        .nice()
        .range([height - margin.bottom, margin.top])

      const color = d3
        .scaleOrdinal()
        .domain(["Amapiano 2024", "Brother Bernard", "Telkom Knockout"])
        .range(["#ff671f", "#4495d4", "#89ba17"])

      // Add X axis
      svg
        .append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(5).tickSizeOuter(0))

      // Add Y axis
      svg
        .append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .call((g) => g.select(".domain").remove())
        .call((g) =>
          g
            .select(".tick:last-of-type text")
            .clone()
            .attr("x", 3)
            .attr("text-anchor", "start")
            .attr("font-weight", "bold")
            .text("Growth %"),
        )

      // Line generator
      const line = d3
        .line<any>()
        .defined((d) => !isNaN(d[1]))
        .x((d) => x(d[0]))
        .y((d) => y(d[1]))

      // Add lines
      const series = ["Amapiano 2024", "Brother Bernard", "Telkom Knockout"]
      series.forEach((s) => {
        svg
          .append("path")
          .datum(data.map((d) => [d.date, d[s as keyof typeof d]]))
          .attr("fill", "none")
          .attr("stroke", color(s) as string)
          .attr("stroke-width", 2.5)
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr("d", line)
      })

      // Add dots for each data point
      series.forEach((s) => {
        svg
          .selectAll(`.dot-${s.replace(/\s+/g, "-")}`)
          .data(data)
          .join("circle")
          .attr("class", `dot-${s.replace(/\s+/g, "-")}`)
          .attr("cx", (d) => x(d.date))
          .attr("cy", (d) => y(d[s as keyof typeof d] as number))
          .attr("r", 4)
          .attr("fill", color(s) as string)
      })

      // Add legend
      const legend = svg
        .append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "start")
        .selectAll("g")
        .data(series)
        .join("g")
        .attr("transform", (d, i) => `translate(${width - margin.right - 100},${margin.top + i * 20})`)

      legend
        .append("rect")
        .attr("x", 0)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", (d) => color(d) as string)

      legend
        .append("text")
        .attr("x", 20)
        .attr("y", 7.5)
        .attr("dy", "0.32em")
        .text((d) => d)
    }
  }, [activeTab])

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "TikTok":
        return "bg-[#00f2ea] text-black"
      case "Instagram":
        return "bg-[#e1306c] text-white"
      case "YouTube":
        return "bg-[#ff0000] text-white"
      case "Facebook":
        return "bg-[#4267B2] text-white"
      default:
        return "bg-slate-500 text-white"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Comedy":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "Music":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Entertainment":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Sports":
        return "bg-green-100 text-green-800 border-green-200"
      case "Fashion":
        return "bg-pink-100 text-pink-800 border-pink-200"
      default:
        return "bg-slate-100 text-slate-800 border-slate-200"
    }
  }

  const platformColors = {
    TikTok: "#00f2ea",
    Instagram: "#C13584",
    YouTube: "#FF0000",
    Facebook: "#4267B2",
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Trending Content Analysis</CardTitle>
            <CardDescription>Visualize and analyze trending content across platforms</CardDescription>
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
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="network">Network Analysis</TabsTrigger>
            <TabsTrigger value="timeline">Growth Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trendingContent.map((content) => (
                <motion.div
                  key={content.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="rounded-lg border overflow-hidden"
                >
                  <div className="aspect-video bg-slate-200 relative">
                    <Image
                      src={content.imageUrl || "/placeholder.svg"}
                      alt={content.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className={getPlatformColor(content.platform)}>{content.platform}</Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <h3 className="text-white font-medium text-sm truncate">{content.title}</h3>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className={getCategoryColor(content.category)}>
                        {content.category}
                      </Badge>
                      <div className="flex items-center">
                        <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                        <span className="text-xs font-medium text-green-500">{content.growth}% growth</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-1 text-xs mb-3">
                      <div className="flex flex-col items-center">
                        <Eye className="h-3 w-3 text-muted-foreground mb-1" />
                        <span className="font-medium">{(content.views / 1000).toFixed(1)}K</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Heart className="h-3 w-3 text-red-500 mb-1" />
                        <span className="font-medium">{(content.likes / 1000).toFixed(1)}K</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <MessageSquare className="h-3 w-3 text-blue-500 mb-1" />
                        <span className="font-medium">{(content.comments / 1000).toFixed(1)}K</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Share2 className="h-3 w-3 text-green-500 mb-1" />
                        <span className="font-medium">{(content.shares / 1000).toFixed(1)}K</span>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground mb-3">{content.description}</div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Virality Score</span>
                      <span className="font-medium text-telkom-blue">{content.viralityScore}/100</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1">
                      <div
                        className="bg-telkom-blue h-1.5 rounded-full"
                        style={{ width: `${content.viralityScore}%` }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium mb-2">Virality Metrics Comparison</h3>
                <div className="h-[300px]">
                  <ResponsiveRadar
                    data={[
                      {
                        metric: "Engagement",
                        "Amapiano 2024": 94,
                        "Brother Bernard": 80,
                        "Telkom Knockout": 75,
                      },
                      {
                        metric: "Shares",
                        "Amapiano 2024": 85,
                        "Brother Bernard": 70,
                        "Telkom Knockout": 65,
                      },
                      {
                        metric: "Comments",
                        "Amapiano 2024": 78,
                        "Brother Bernard": 85,
                        "Telkom Knockout": 60,
                      },
                      {
                        metric: "Growth Rate",
                        "Amapiano 2024": 90,
                        "Brother Bernard": 75,
                        "Telkom Knockout": 80,
                      },
                      {
                        metric: "Reach",
                        "Amapiano 2024": 88,
                        "Brother Bernard": 72,
                        "Telkom Knockout": 85,
                      },
                    ]}
                    keys={["Amapiano 2024", "Brother Bernard", "Telkom Knockout"]}
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
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium mb-2">Platform Distribution</h3>
                <div className="h-[300px]">
                  <ResponsivePie
                    data={
                      platformColors
                        ? Object.keys(platformColors).map((platform) => ({
                            id: platform,
                            label: platform,
                            value: Math.floor(Math.random() * 40) + 10,
                          }))
                        : [
                            { id: "TikTok", label: "TikTok", value: 40 },
                            { id: "Instagram", label: "Instagram", value: 30 },
                            { id: "YouTube", label: "YouTube", value: 20 },
                            { id: "Facebook", label: "Facebook", value: 10 },
                          ]
                    }
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
              </div>
            </div>
          </TabsContent>

          <TabsContent value="network">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Content Relationship Network</CardTitle>
                <CardDescription>
                  Visualizing how trending content relates to each other based on audience overlap and themes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px] bg-slate-900 rounded-lg" ref={networkRef}></div>
                <div className="mt-4 text-xs text-muted-foreground">
                  <p>
                    <span className="font-medium">Node size:</span> Represents virality score
                  </p>
                  <p>
                    <span className="font-medium">Node color:</span> Represents platform
                  </p>
                  <p>
                    <span className="font-medium">Connection strength:</span> Represents audience overlap
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Growth Timeline</CardTitle>
                <CardDescription>
                  Tracking the growth trajectory of top trending content over the past month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]" ref={timelineRef}></div>
                <div className="mt-4 text-xs text-muted-foreground">
                  <p>Growth percentage measured from baseline (first appearance). Data points collected weekly.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { ResponsiveLine } from "@nivo/line"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveRadar } from "@nivo/radar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, PieChart, LineChart, TrendingUp, Users, Share2, Heart, MessageSquare, Globe } from "lucide-react"

export function PerformanceMetrics({ isExpanded }: { isExpanded: boolean }) {
  const [timeRange, setTimeRange] = useState("30d")
  const [metricType, setMetricType] = useState("engagement")
  
  // Sample data for charts
  const engagementData = [
    {
      id: "Engagement Rate",
      data: [
        { x: "Jan", y: 2.4 },
        { x: "Feb", y: 2.8 },
        { x: "Mar", y: 3.2 },
        { x: "Apr", y: 2.9 },
        { x: "May", y: 3.1 },
      ]
    }
  ]
  
  const viewsData = [
    {
      id: "Views",
      data: [
        { x: "Jan", y: 120000 },
        { x: "Feb", y: 145000 },
        { x: "Mar", y: 210000 },
        { x: "Apr", y: 240000 },
        { x: "May", y: 280000 },
      ]
    }
  ]
  
  const conversionData = [
    {
      id: "Conversion Rate",
      data: [
        { x: "Jan", y: 0.8 },
        { x: "Feb", y: 0.9 },
        { x: "Mar", y: 1.2 },
        { x: "Apr", y: 1.1 },
        { x: "May", y: 1.4 },
      ]
    }
  ]
  
  const platformDistribution = [
    { id: "TikTok", value: 42 },
    { id: "Instagram", value: 38 },
    { id: "YouTube", value: 15 },
    { id: "Twitter", value: 5 }
  ]
  
  const contentTypePerformance = [
    { type: "Video", engagement: 4.2, views: 250000, conversion: 1.8 },
    { type: "Image", engagement: 3.1, views: 180000, conversion: 1.2 },
    { type: "Story", engagement: 2.8, views: 120000, conversion: 0.9 },
    { type: "Text", engagement: 1.5, views: 80000, conversion: 0.5 }
  ]
  
  const audienceMetrics = [
    { metric: "Reach", value: 1250000 },
    { metric: "Impressions", value: 3800000 },
    { metric: "Followers", value: 420000 },
    { metric: "Growth Rate", value: 2.8 }
  ]
  
  const lineChartTheme = {
    axis: {
      ticks: {
        text: {
          fill: "#94a3b8"
        }
      },
      legend: {
        text: {
          fill: "#94a3b8"
        }
      }
    },
    grid: {
      line: {
        stroke: "#1e293b",
        strokeWidth: 1
      }
    },
    crosshair: {
      line: {
        stroke: "#475569",
        strokeWidth: 1,
        strokeOpacity: 0.35
      }
    },
    tooltip: {
      container: {
        background: "#1e293b",
        color: "#f8fafc",
        fontSize: 12,
        borderRadius: 4,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      }
    }
  }
  
  const pieChartTheme = {
    ...lineChartTheme,
    labels: {
      text: {
        fill: "#f8fafc",
        fontSize: 12,
        fontWeight: 500
      }
    }
  }
  
  return (
    <Card className="w-full bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-cyan-500" />
              <h3 className="text-xl font-semibold text-white">Performance Metrics</h3>
              <Badge variant="outline" className="ml-2 bg-cyan-500/10 text-cyan-500 border-cyan-500/20">
                {timeRange === "7d" ? "Last 7 days" : timeRange === "30d" ? "Last 30 days" : "Last 90 days"}
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[130px] bg-slate-800 border-slate-700 text-slate-200">
                  <SelectValue placeholder="Time Range" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-5 bg-slate-800/50 mb-4">
              <TabsTrigger value="overview" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-500">
                <LineChart className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="engagement" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-500">
                <Heart className="h-4 w-4 mr-2" />
                Engagement
              </TabsTrigger>
              <TabsTrigger value="audience" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-500">
                <Users className="h-4 w-4 mr-2" />
                Audience
              </TabsTrigger>
              <TabsTrigger value="content" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-500">
                <BarChart className="h-4 w-4 mr-2" />
                Content
              </TabsTrigger>
              <TabsTrigger value="platforms" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-500">
                <Globe className="h-4 w-4 mr-2" />
                Platforms
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-slate-200">Engagement Rate Trend</h4>
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                      +12.5%
                    </Badge>
                  </div>
                  <div className="h-64">
                    <ResponsiveLine
                      data={engagementData}
                      margin={{ top: 10, right: 20, bottom: 40, left: 40 }}
                      xScale={{ type: 'point' }}
                      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                      curve="cardinal"
                      axisTop={null}
                      axisRight={null}
                      axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Month',
                        legendOffset: 36,
                        legendPosition: 'middle'
                      }}
                      axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Rate (%)',
                        legendOffset: -40,
                        legendPosition: 'middle'
                      }}
                      colors={['#06b6d4']}
                      lineWidth={3}
                      pointSize={8}
                      pointColor={{ theme: 'background' }}
                      pointBorderWidth={2}
                      pointBorderColor={{ from: 'serieColor' }}
                      enablePointLabel={false}
                      pointLabel="y"
                      pointLabelYOffset={-12}
                      enableArea={true}
                      areaOpacity={0.15}
                      useMesh={true}
                      theme={lineChartTheme}
                      animate={false}
                      defs={[
                        {
                          id: 'gradientA',
                          type: 'linearGradient',
                          colors: [
                            { offset: 0, color: '#06b6d4', opacity: 0.6 },
                            { offset: 100, color: '#06b6d4', opacity: 0 }
                          ]
                        }
                      ]}
                      fill={[{ match: '*', id: 'gradientA' }]}
                    />
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-slate-200">Platform Distribution</h4>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      <PieChart className="h-4 w-4 mr-1" /> Details
                    </Button>
                  </div>
                  <div className="h-64">
                    <ResponsivePie
                      data={platformDistribution}
                      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                      innerRadius={0.6}
                      padAngle={0.7}
                      cornerRadius={3}
                      activeOuterRadiusOffset={8}
                      borderWidth={1}
                      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                      arcLabelsSkipAngle={10}
                      arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                      colors={['#00f2ea', '#e1306c', '#ff0000', '#1da1f2']}
                      theme={pieChartTheme}
                      animate={false}
                      defs={[
                        {
                          id: 'dots',
                          type: 'patternDots',
                          background: 'inherit',
                          color: 'rgba(255, 255, 255, 0.3)',
                          size: 4,
                          padding: 1,
                          stagger: true
                        },
                        {
                          id: 'lines',
                          type: 'patternLines',
                          background: 'inherit',
                          color: 'rgba(255, 255, 255, 0.3)',
                          rotation: -45,
                          lineWidth: 6,
                          spacing: 10
                        }
                      ]}
                      legends={[
                        {
                          anchor: 'bottom',
                          direction: 'row',
                          justify: false,
                          translateX: 0,
                          translateY: 56,
                          itemsSpacing: 0,
                          itemWidth: 80,
                          itemHeight: 18,
                          itemTextColor: '#94a3b8',
                          itemDirection: 'left-to-right',
                          itemOpacity: 1,
                          symbolSize: 12,
                          symbolShape: 'circle'
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-slate-200">Content Type Performance</h4>
                  <Select defaultValue="engagement">
                    <SelectTrigger className="w-[130px] bg-slate-800 border-slate-700 text-slate-200">
                      <SelectValue placeholder="Metric" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                      <SelectItem value="engagement">Engagement</SelectItem>
                      <SelectItem value="views">Views</SelectItem>
                      <SelectItem value="conversion">Conversion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="h-64">
                  <ResponsiveBar
                    data={contentTypePerformance}
                    keys={['engagement']}
                    indexBy="type"
                    margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={['#06b6d4']}
                    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Content Type',
                      legendPosition: 'middle',
                      legendOffset: 32
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Engagement Rate (%)',
                      legendPosition: 'middle',
                      legendOffset: -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    animate={false}
                    theme={lineChartTheme}
                    defs={[
                      {
                        id: 'gradient',
                        type: 'linearGradient',
                        colors: [
                          { offset: 0, color: '#06b6d4' },
                          { offset: 100, color: '#0891b2' }
                        ]
                      }
                    ]}
                    fill={[{ match: '*', id: 'gradient' }]}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="engagement" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Avg. Engagement Rate</p>
                    <h4 className="text-2xl font-bold text-white">3.2%</h4>
                    <p className="text-xs text-emerald-500 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> +0.4% from last period
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                    <MessageSquare className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Comments per Post</p>
                    <h4 className="text-2xl font-bold text-white">128</h4>
                    <p className="text-xs text-emerald-500 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> +12% from last period
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-pink-500/20 flex items-center justify-center mr-4">
                    <Share2 className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Share Rate</p>
                    <h4 className="text-2xl font-bold text-white">1.8%</h4>
                    <p className="text-xs text-emerald-500 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> +0.3% from last period
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-slate-200">Engagement by Time of Day</h4>
                    <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                      Hourly
                    </Badge>
                  </div>
                  <div className="h-64">
                    <ResponsiveLine
                      data={[
                        {
                          id: "Engagement",
                          data: [
                            { x: "00:00", y: 1.2 },
                            { x: "03:00", y: 0.8 },
                            { x: "06:00", y: 1.5 },
                            { x: "09:00", y: 2.8 },
                            { x: "12:00", y: 3.2 },
                            { x: "15:00", y: 3.8 },
                            { x: "18:00", y: 4.1 },
                            { x: "21:00", y: 2.9 }
                          ]
                        }
                      ]}
                      margin={{ top: 10, right: 20, bottom: 40, left: 40 }}
                      xScale={{ type: 'point' }}
                      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                      curve="cardinal"
                      axisTop={null}
                      axisRight={null}
                      axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Time (24h)',
                        legendOffset: 36,
                        legendPosition: 'middle'
                      }}
                      axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Rate (%)',
                        legendOffset: -40,
                        legendPosition: 'middle'
                      }}
                      colors={['#a855f7']}
                      lineWidth={3}
                      pointSize={8}
                      pointColor={{ theme: 'background' }}
                      pointBorderWidth={2}
                      pointBorderColor={{ from: 'serieColor' }}
                      enablePointLabel={false}
                      pointLabel="y"
                      pointLabelYOffset={-12}
                      enableArea={true}
                      areaOpacity={0.15}
                      useMesh={true}
                      theme={lineChartTheme}
                      animate={false}
                      defs={[
                        {
                          id: 'gradientB',
                          type: 'linearGradient',
                          colors: [
                            { offset: 0, color: '#a855f7', opacity: 0.6 },
                            { offset: 100, color: '#a855f7', opacity: 0 }
                          ]
                        }
                      ]}
                      fill={[{ match: '*', id: 'gradientB' }]}
                    />
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-slate-200">Engagement by Content Format</h4>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      <BarChart className="h-4 w-4 mr-1" /> Details
                    </Button>
                  </div>
                  <div className="h-64">
                    <ResponsiveRadar
                      data={[
                        { format: "Video", value: 85 },
                        { format: "Image", value: 72 },
                        { format: "Carousel", value: 78 },
                        { format: "Story", value: 65 },
                        { format: "Text", value: 45 },
                        { format: "Live", value: 90 }
                      ]}
                      keys={['value']}
                      indexBy="format"
                      valueFormat=">-.2f"
                      margin={{ top: 20, right: 80, bottom: 40, left: 80 }}
                      borderColor={{ from: 'color' }}
                      gridLabelOffset={36}
                      dotSize={10}
                      dotColor={{ theme: 'background' }}
                      dotBorderWidth={2}
                      colors={['#ec4899']}
                      blendMode="multiply"
                      motionConfig="wobbly"
                      theme={lineChartTheme}
                      animate={false}
                      defs={[
                        {
                          id: 'gradientC',
                          type: 'linearGradient',
                          colors: [
                            { offset: 0, color: '#ec4899' },
                            { offset: 100, color: '#ec4899', opacity: 0.2 }
                          ]
                        }
                      ]}
                      fill={[{ match: '*', id: 'gradientC' }]}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="audience" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                {audienceMetrics.map((metric, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="text-sm text-slate-400">{metric.metric}</p>
                    <h4 className="text-2xl font-bold text-white">
                      {metric.metric === "Growth Rate" 
                        ? `${metric.value}%` 
                        : new Intl.NumberFormat().format(metric.value)}
                    </h4>
                    <div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" 
                        style={{ width: `${Math.min(100, metric.value / (metric.metric === "Growth Rate" ? 5 : 5000000) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-slate-200">Audience Demographics</h4>
                    <Select defaultValue="age">
                      <SelectTrigger className="w-[130px] bg-slate-800 border-slate-700 text-slate-200">
                        <SelectValue placeholder="Dimension" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                        <SelectItem value="age">Age</SelectItem>
                        <SelectItem value="gender">Gender</SelectItem>
                        <SelectItem value="location">Location</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="h-64">
                    <ResponsiveBar
                      data={[
                        { age: "13-17", value: 8 },
                        { age: "18-24", value: 32 },
                        { age: "25-34", value: 28 },
                        { age: "35-44", value: 18 },
                        { age: "45-54", value: 10 },
                        { age: "55+", value: 4 }
                      ]}
                      keys={['value']}
                      indexBy="age"
                      margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                      padding={0.3}
                      valueScale={{ type: 'linear' }}
                      indexScale={{ type: 'band', round: true }}
                      colors={['#0ea5e9']}
                      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                      axisTop={null}
                      axisRight={null}
                      axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Age Group',
                        legendPosition: 'middle',
                        legendOffset: 32
                      }}
                      axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Percentage (%)',
                        legendPosition: 'middle',
                        legendOffset: -40
                      }}
                      labelSkipWidth={12}
                      labelSkipHeight={12}
                      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                      animate={false}
                      theme={lineChartTheme}
                      defs={[
                        {
                          id: 'gradientD',
                          type: 'linearGradient',
                          colors: [
                            { offset: 0, color: '#0ea5e9' },
                            { offset: 100, color: '#0284c7' }
                          ]
                        }
                      ]}
                      fill={[{ match: '*', id: 'gradientD' }]}
                    />
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-slate-200">Audience Interests</h4>
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                      Top 6
                    </Badge>
                  </div>
                  <div className="h-64">
                    <ResponsivePie
                      data={[
                        { id: "Technology", value: 28 },
                        { id: "Fashion", value: 22 },
                        { id: "Travel", value: 18 },
                        { id: "Food", value: 15 },
                        { id: "Fitness", value: 12 },
                        { id: "Gaming", value: 5 }
                      ]}
                      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                      innerRadius={0.5}
                      padAngle={0.7}
                      cornerRadius={

\
I found some issues in the code block.

- unexpected token `\`

I will fix them.

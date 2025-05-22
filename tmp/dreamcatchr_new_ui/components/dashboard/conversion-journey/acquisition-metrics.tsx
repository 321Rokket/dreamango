"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { DollarSign, Users, TrendingUp, Calculator, ChevronDown, ArrowUpRight, ArrowDownRight } from "lucide-react"

const AcquisitionMetrics = () => {
  const [timeframe, setTimeframe] = useState("month")

  // Sample data for CAC over time
  const cacTimeData = [
    { month: "Jan", cac: 42 },
    { month: "Feb", cac: 43 },
    { month: "Mar", cac: 45 },
    { month: "Apr", cac: 44 },
    { month: "May", cac: 41 },
    { month: "Jun", cac: 38 },
    { month: "Jul", cac: 35 },
    { month: "Aug", cac: 32 },
  ]

  // Sample data for CAC by channel
  const cacChannelData = [
    { name: "Social", cac: 28, color: "#4f46e5" },
    { name: "Search", cac: 42, color: "#0ea5e9" },
    { name: "Display", cac: 38, color: "#10b981" },
    { name: "Email", cac: 22, color: "#f59e0b" },
    { name: "Referral", cac: 18, color: "#8b5cf6" },
  ]

  // Sample data for CLTV
  const cltvData = [
    { month: 1, value: 45 },
    { month: 3, value: 125 },
    { month: 6, value: 210 },
    { month: 12, value: 380 },
    { month: 24, value: 620 },
    { month: 36, value: 780 },
  ]

  // Sample data for ROI by channel
  const roiData = [
    { name: "Social", roi: 3.2, color: "#4f46e5" },
    { name: "Search", roi: 2.8, color: "#0ea5e9" },
    { name: "Display", roi: 1.9, color: "#10b981" },
    { name: "Email", roi: 4.5, color: "#f59e0b" },
    { name: "Referral", roi: 5.2, color: "#8b5cf6" },
  ]

  // Sample data for efficiency metrics
  const efficiencyData = {
    cac: { current: 32, previous: 38, target: 30 },
    cltv: { current: 780, previous: 720, target: 800 },
    cltvCacRatio: { current: 24.4, previous: 18.9, target: 25 },
    paybackPeriod: { current: 4.2, previous: 5.1, target: 4 },
  }

  return (
    <Card className="col-span-12">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <DollarSign className="mr-2 h-5 w-5 text-green-500" />
              Acquisition Metrics
            </CardTitle>
            <CardDescription>Customer acquisition cost and lifetime value analysis</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Timeframe: {timeframe === "month" ? "Monthly" : timeframe === "quarter" ? "Quarterly" : "Yearly"}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Calculator className="mr-2 h-4 w-4" />
              Recalculate
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="cac">CAC Analysis</TabsTrigger>
            <TabsTrigger value="cltv">CLTV Projection</TabsTrigger>
            <TabsTrigger value="roi">ROI Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-muted-foreground">Customer Acquisition Cost</div>
                          <div className="text-2xl font-bold">R{efficiencyData.cac.current}</div>
                          <div className="flex items-center text-xs text-green-600">
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                            {(
                              ((efficiencyData.cac.previous - efficiencyData.cac.current) /
                                efficiencyData.cac.previous) *
                              100
                            ).toFixed(1)}
                            % vs previous
                          </div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span>Current</span>
                          <span>Target: R{efficiencyData.cac.target}</span>
                        </div>
                        <Progress
                          value={(efficiencyData.cac.target / efficiencyData.cac.current) * 100}
                          className="h-1"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-muted-foreground">Customer Lifetime Value</div>
                          <div className="text-2xl font-bold">R{efficiencyData.cltv.current}</div>
                          <div className="flex items-center text-xs text-green-600">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            {(
                              ((efficiencyData.cltv.current - efficiencyData.cltv.previous) /
                                efficiencyData.cltv.previous) *
                              100
                            ).toFixed(1)}
                            % vs previous
                          </div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span>Current</span>
                          <span>Target: R{efficiencyData.cltv.target}</span>
                        </div>
                        <Progress
                          value={(efficiencyData.cltv.current / efficiencyData.cltv.target) * 100}
                          className="h-1"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium">CAC & CLTV Trends</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          CAC ↓ 15.8%
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          CLTV ↑ 8.3%
                        </Badge>
                      </div>
                    </div>

                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={cacTimeData.map((item, index) => ({
                            ...item,
                            cltv: 300 + index * 60,
                          }))}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis yAxisId="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <Tooltip />
                          <Legend />
                          <Line yAxisId="left" type="monotone" dataKey="cac" stroke="#10b981" name="CAC (R)" />
                          <Line yAxisId="right" type="monotone" dataKey="cltv" stroke="#3b82f6" name="CLTV (R)" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="col-span-12 lg:col-span-4">
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-sm font-medium mb-4">Efficiency Metrics</h3>

                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-sm">CLTV:CAC Ratio</div>
                          <div className="text-sm font-medium">{efficiencyData.cltvCacRatio.current}:1</div>
                        </div>
                        <Progress value={(efficiencyData.cltvCacRatio.current / 30) * 100} className="h-2" />
                        <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
                          <span>Previous: {efficiencyData.cltvCacRatio.previous}:1</span>
                          <span>Target: {efficiencyData.cltvCacRatio.target}:1</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-sm">Payback Period</div>
                          <div className="text-sm font-medium">{efficiencyData.paybackPeriod.current} months</div>
                        </div>
                        <Progress value={((8 - efficiencyData.paybackPeriod.current) / 8) * 100} className="h-2" />
                        <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
                          <span>Previous: {efficiencyData.paybackPeriod.previous} months</span>
                          <span>Target: {efficiencyData.paybackPeriod.target} months</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <h4 className="text-sm font-medium mb-3">Channel Efficiency</h4>
                        <div className="space-y-2">
                          {roiData.map((channel, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div className="text-sm">{channel.name}</div>
                              <div className="flex items-center">
                                <div className="w-16 mr-2">
                                  <Progress value={(channel.roi / 6) * 100} className="h-1.5" />
                                </div>
                                <div className="text-sm font-medium">{channel.roi}x</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <h4 className="text-sm font-medium mb-2">Recommendations</h4>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-start gap-2">
                            <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Increase investment in Referral channel (5.2x ROI)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Optimize Email campaigns to maintain high efficiency</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <TrendingUp className="h-4 w-4 text-amber-500 mt-0.5" />
                            <span>Review Display channel strategy to improve ROI</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cac">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-sm font-medium mb-4">CAC Trend Analysis</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={cacTimeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="cac" stroke="#10b981" name="CAC (R)" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="col-span-12 lg:col-span-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-sm font-medium mb-4">CAC by Channel</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={cacChannelData}
                          layout="vertical"
                          margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis dataKey="name" type="category" />
                          <Tooltip />
                          <Bar dataKey="cac" name="CAC (R)">
                            {cacChannelData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cltv">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-sm font-medium mb-4">CLTV Projection</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={cltvData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" label={{ value: "Months", position: "insideBottom", offset: -5 }} />
                          <YAxis label={{ value: "Value (R)", angle: -90, position: "insideLeft" }} />
                          <Tooltip />
                          <Line type="monotone" dataKey="value" stroke="#3b82f6" name="CLTV (R)" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="col-span-12 lg:col-span-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-sm font-medium mb-4">CLTV Components</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              { name: "Initial Purchase", value: 120, color: "#3b82f6" },
                              { name: "Repeat Purchases", value: 350, color: "#10b981" },
                              { name: "Upsells", value: 180, color: "#f59e0b" },
                              { name: "Referrals", value: 130, color: "#8b5cf6" },
                            ]}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {[
                              { name: "Initial Purchase", value: 120, color: "#3b82f6" },
                              { name: "Repeat Purchases", value: 350, color: "#10b981" },
                              { name: "Upsells", value: 180, color: "#f59e0b" },
                              { name: "Referrals", value: 130, color: "#8b5cf6" },
                            ].map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="roi">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-sm font-medium mb-4">ROI by Channel</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={roiData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="roi" name="ROI (x)">
                            {roiData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="col-span-12 lg:col-span-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-sm font-medium mb-4">ROI Analysis</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm mb-1">Overall Marketing ROI</div>
                        <div className="text-2xl font-bold">3.4x</div>
                        <div className="text-xs text-green-600">+0.6x vs previous period</div>
                      </div>

                      <div className="pt-2 border-t">
                        <div className="text-sm mb-2">Channel Efficiency</div>
                        <div className="space-y-2">
                          {roiData
                            .sort((a, b) => b.roi - a.roi)
                            .map((channel, index) => (
                              <div key={index} className="flex items-center justify-between">
                                <div className="text-sm">{channel.name}</div>
                                <div className="flex items-center">
                                  <div className="w-24 mr-2">
                                    <Progress value={(channel.roi / 6) * 100} className="h-1.5" />
                                  </div>
                                  <div className="text-sm font-medium">{channel.roi}x</div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t">
                        <div className="text-sm mb-2">Budget Allocation Recommendations</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Referral</span>
                            <Badge className="bg-green-100 text-green-800">Increase +15%</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Email</span>
                            <Badge className="bg-green-100 text-green-800">Increase +10%</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Social</span>
                            <Badge className="bg-blue-100 text-blue-800">Maintain</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Search</span>
                            <Badge className="bg-blue-100 text-blue-800">Maintain</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Display</span>
                            <Badge className="bg-red-100 text-red-800">Decrease -10%</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default AcquisitionMetrics

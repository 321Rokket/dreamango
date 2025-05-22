"use client"

import { motion } from "framer-motion"
import {
  MousePointerClick,
  ShoppingCart,
  DollarSign,
  Percent,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  RefreshCw,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function ConversionMetrics() {
  // Sample data for charts
  const conversionTrendData = [
    { date: "Jan", cr: 2.8, ctr: 3.2, cpc: 2.8, cpa: 82 },
    { date: "Feb", cr: 2.9, ctr: 3.4, cpc: 2.7, cpa: 80 },
    { date: "Mar", cr: 3.1, ctr: 3.5, cpc: 2.6, cpa: 78 },
    { date: "Apr", cr: 3.2, ctr: 3.7, cpc: 2.5, cpa: 76 },
    { date: "May", cr: 3.4, ctr: 3.8, cpc: 2.5, cpa: 75 },
    { date: "Jun", cr: 3.5, ctr: 3.9, cpc: 2.4, cpa: 72 },
    { date: "Jul", cr: 3.7, ctr: 4.1, cpc: 2.4, cpa: 70 },
    { date: "Aug", cr: 3.8, ctr: 4.2, cpc: 2.45, cpa: 85.2 },
  ]

  // Current metrics
  const metrics = {
    conversionRate: {
      value: "3.8%",
      change: "+0.6%",
      trend: "up",
    },
    ctr: {
      value: "4.2%",
      change: "+0.8%",
      trend: "up",
    },
    cpc: {
      value: "R2.45",
      change: "-0.32",
      trend: "up", // Down is good for CPC
    },
    cpa: {
      value: "R85.20",
      change: "-12.40",
      trend: "up", // Down is good for CPA
    },
    cpl: {
      value: "R42.50",
      change: "-5.80",
      trend: "up", // Down is good for CPL
    },
    exitRate: {
      value: "28.4%",
      change: "-2.1%",
      trend: "up", // Down is good for exit rate
    },
    abandonmentRate: {
      value: "65.2%",
      change: "-3.8%",
      trend: "up", // Down is good for abandonment rate
    },
  }

  const renderMetricCard = (title, icon, value, change, trend, iconBgColor, delay = 0) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay }}>
      <Card className="overflow-hidden border-none shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <div className={`rounded-full ${iconBgColor} p-1`}>{icon}</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
          <div className="flex items-center">
            {trend === "up" ? (
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
            ) : (
              <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
            )}
            <p className={`text-xs ${trend === "up" ? "text-green-500" : "text-red-500"}`}>{change} vs. last period</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {renderMetricCard(
          "Conversion Rate",
          <Percent className="h-4 w-4 text-green-500" />,
          metrics.conversionRate.value,
          metrics.conversionRate.change,
          metrics.conversionRate.trend,
          "bg-green-500/10",
        )}

        {renderMetricCard(
          "Click-Through Rate",
          <MousePointerClick className="h-4 w-4 text-blue-500" />,
          metrics.ctr.value,
          metrics.ctr.change,
          metrics.ctr.trend,
          "bg-blue-500/10",
          0.1,
        )}

        {renderMetricCard(
          "Cost Per Click",
          <DollarSign className="h-4 w-4 text-amber-500" />,
          metrics.cpc.value,
          metrics.cpc.change,
          metrics.cpc.trend,
          "bg-amber-500/10",
          0.2,
        )}

        {renderMetricCard(
          "Cost Per Action",
          <ShoppingCart className="h-4 w-4 text-purple-500" />,
          metrics.cpa.value,
          metrics.cpa.change,
          metrics.cpa.trend,
          "bg-purple-500/10",
          0.3,
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Conversion Metrics Trends</CardTitle>
          <CardDescription>Performance over the last 8 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={conversionTrendData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="cr"
                  name="Conversion Rate (%)"
                  stroke="#10b981"
                  activeDot={{ r: 8 }}
                />
                <Line yAxisId="left" type="monotone" dataKey="ctr" name="CTR (%)" stroke="#3b82f6" />
                <Line yAxisId="left" type="monotone" dataKey="cpc" name="CPC (R)" stroke="#f59e0b" />
                <Line yAxisId="right" type="monotone" dataKey="cpa" name="CPA (R)" stroke="#8b5cf6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {renderMetricCard(
          "Cost Per Lead",
          <Users className="h-4 w-4 text-indigo-500" />,
          metrics.cpl.value,
          metrics.cpl.change,
          metrics.cpl.trend,
          "bg-indigo-500/10",
        )}

        {renderMetricCard(
          "Exit Rate",
          <RefreshCw className="h-4 w-4 text-red-500" />,
          metrics.exitRate.value,
          metrics.exitRate.change,
          metrics.exitRate.trend,
          "bg-red-500/10",
          0.1,
        )}

        {renderMetricCard(
          "Abandonment Rate",
          <ShoppingCart className="h-4 w-4 text-orange-500" />,
          metrics.abandonmentRate.value,
          metrics.abandonmentRate.change,
          metrics.abandonmentRate.trend,
          "bg-orange-500/10",
          0.2,
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Conversion Funnel</CardTitle>
          <CardDescription>Visitor journey through conversion stages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Visitors</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-bold mr-2">24,500</span>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    100%
                  </Badge>
                </div>
              </div>
              <Progress value={100} className="h-3 bg-blue-100" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MousePointerClick className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Product Views</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-bold mr-2">12,250</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    50%
                  </Badge>
                </div>
              </div>
              <Progress value={50} className="h-3 bg-green-100" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ShoppingCart className="mr-2 h-4 w-4 text-amber-500" />
                  <span className="text-sm font-medium">Add to Cart</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-bold mr-2">4,900</span>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700">
                    20%
                  </Badge>
                </div>
              </div>
              <Progress value={20} className="h-3 bg-amber-100" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <DollarSign className="mr-2 h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">Purchases</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-bold mr-2">931</span>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700">
                    3.8%
                  </Badge>
                </div>
              </div>
              <Progress value={3.8} className="h-3 bg-purple-100" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

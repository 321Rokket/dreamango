"use client"

import { motion } from "framer-motion"
import { DollarSign, Wallet, Users, UserMinus, Clock, ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

export function CustomerMetrics() {
  // Sample data for charts
  const customerSegmentData = [
    { name: "New Customers", value: 35, color: "#3b82f6" },
    { name: "Returning", value: 45, color: "#10b981" },
    { name: "Loyal", value: 20, color: "#8b5cf6" },
  ]

  // Current metrics
  const metrics = {
    cac: {
      value: "R125",
      change: "-R15",
      trend: "up", // Down is good for CAC
    },
    clv: {
      value: "R3,250",
      change: "+R320",
      trend: "up",
    },
    churnRate: {
      value: "2.8%",
      change: "-0.5%",
      trend: "up", // Down is good for churn
    },
    retentionRate: {
      value: "78%",
      change: "+3%",
      trend: "up",
    },
    timeToPaybackCAC: {
      value: "4.2 months",
      change: "-0.8 months",
      trend: "up", // Down is good for payback time
    },
    clvCacRatio: {
      value: "26:1",
      change: "+4:1",
      trend: "up",
    },
    shareOfMarket: {
      value: "18.5%",
      change: "+2.3%",
      trend: "up",
    },
    shareOfWallet: {
      value: "42%",
      change: "+5.8%",
      trend: "up",
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
          "Customer Acquisition Cost",
          <DollarSign className="h-4 w-4 text-amber-500" />,
          metrics.cac.value,
          metrics.cac.change,
          metrics.cac.trend,
          "bg-amber-500/10",
        )}

        {renderMetricCard(
          "Customer Lifetime Value",
          <Wallet className="h-4 w-4 text-green-500" />,
          metrics.clv.value,
          metrics.clv.change,
          metrics.clv.trend,
          "bg-green-500/10",
          0.1,
        )}

        {renderMetricCard(
          "Churn Rate",
          <UserMinus className="h-4 w-4 text-red-500" />,
          metrics.churnRate.value,
          metrics.churnRate.change,
          metrics.churnRate.trend,
          "bg-red-500/10",
          0.2,
        )}

        {renderMetricCard(
          "Retention Rate",
          <Users className="h-4 w-4 text-blue-500" />,
          metrics.retentionRate.value,
          metrics.retentionRate.change,
          metrics.retentionRate.trend,
          "bg-blue-500/10",
          0.3,
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Customer Segments</CardTitle>
            <CardDescription>Distribution by customer type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={customerSegmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {customerSegmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Customer Value Metrics</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">CLV:CAC Ratio</span>
                  </div>
                  <span className="text-sm font-bold">{metrics.clvCacRatio.value}</span>
                </div>
                <Progress value={87} className="h-2" />
                <p className="text-xs text-muted-foreground">Target: 3:1 or higher</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">Time to Payback CAC</span>
                  </div>
                  <span className="text-sm font-bold">{metrics.timeToPaybackCAC.value}</span>
                </div>
                <Progress value={72} className="h-2" />
                <p className="text-xs text-muted-foreground">Target: 12 months or less</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-purple-500" />
                    <span className="text-sm font-medium">Share of Market</span>
                  </div>
                  <span className="text-sm font-bold">{metrics.shareOfMarket.value}</span>
                </div>
                <Progress value={18.5} className="h-2" />
                <p className="text-xs text-green-500">{metrics.shareOfMarket.change} vs last year</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Wallet className="mr-2 h-4 w-4 text-amber-500" />
                    <span className="text-sm font-medium">Share of Wallet</span>
                  </div>
                  <span className="text-sm font-bold">{metrics.shareOfWallet.value}</span>
                </div>
                <Progress value={42} className="h-2" />
                <p className="text-xs text-green-500">{metrics.shareOfWallet.change} vs last year</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

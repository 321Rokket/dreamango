"use client"

import { motion } from "framer-motion"
import {
  TrendingUp,
  Users,
  Globe,
  Search,
  MousePointerClick,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  Clock,
  RefreshCw,
  UserMinus,
  ShoppingCart,
  Wallet,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function MarketingMetricsOverview() {
  // Sample data - would be replaced with real data in production
  const websiteMetrics = {
    visitors: {
      value: "24.5K",
      change: "+12%",
      trend: "up",
    },
    pageViews: {
      value: "87.2K",
      change: "+8.5%",
      trend: "up",
    },
    avgSessionDuration: {
      value: "3:42",
      change: "+0:22",
      trend: "up",
    },
    bounceRate: {
      value: "42.3%",
      change: "-3.1%",
      trend: "up", // Down is good for bounce rate
    },
  }

  const conversionMetrics = {
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
  }

  const revenueMetrics = {
    roas: {
      value: "4.2x",
      change: "+0.5x",
      trend: "up",
    },
    roi: {
      value: "320%",
      change: "+45%",
      trend: "up",
    },
    arpu: {
      value: "R245",
      change: "+R18",
      trend: "up",
    },
    mrr: {
      value: "R1.2M",
      change: "+R120K",
      trend: "up",
    },
  }

  const customerMetrics = {
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
      <Tabs defaultValue="website" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="website">Website Metrics</TabsTrigger>
          <TabsTrigger value="conversion">Conversion Metrics</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Metrics</TabsTrigger>
          <TabsTrigger value="customer">Customer Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="website" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {renderMetricCard(
              "Visitors",
              <Users className="h-4 w-4 text-blue-500" />,
              websiteMetrics.visitors.value,
              websiteMetrics.visitors.change,
              websiteMetrics.visitors.trend,
              "bg-blue-500/10",
            )}

            {renderMetricCard(
              "Page Views",
              <Globe className="h-4 w-4 text-purple-500" />,
              websiteMetrics.pageViews.value,
              websiteMetrics.pageViews.change,
              websiteMetrics.pageViews.trend,
              "bg-purple-500/10",
              0.1,
            )}

            {renderMetricCard(
              "Avg. Session Duration",
              <Clock className="h-4 w-4 text-green-500" />,
              websiteMetrics.avgSessionDuration.value,
              websiteMetrics.avgSessionDuration.change,
              websiteMetrics.avgSessionDuration.trend,
              "bg-green-500/10",
              0.2,
            )}

            {renderMetricCard(
              "Bounce Rate",
              <RefreshCw className="h-4 w-4 text-amber-500" />,
              websiteMetrics.bounceRate.value,
              websiteMetrics.bounceRate.change,
              websiteMetrics.bounceRate.trend,
              "bg-amber-500/10",
              0.3,
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>SEO Metrics</CardTitle>
              <CardDescription>Search engine optimization performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Search className="mr-2 h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium">Domain Authority</span>
                      </div>
                      <span className="text-sm font-bold">42/100</span>
                    </div>
                    <Progress value={42} className="h-2" />
                    <p className="text-xs text-muted-foreground">+5 points since last quarter</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Organic Traffic</span>
                      </div>
                      <span className="text-sm font-bold">12.4K/month</span>
                    </div>
                    <Progress value={62} className="h-2" />
                    <p className="text-xs text-muted-foreground">+18% since last month</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg border p-3">
                    <div className="text-xs text-muted-foreground">Keyword Rankings</div>
                    <div className="mt-1 text-lg font-bold">128</div>
                    <div className="mt-1 flex items-center text-xs text-green-500">
                      <ArrowUpRight className="mr-1 h-3 w-3" />
                      +12 new rankings
                    </div>
                  </div>

                  <div className="rounded-lg border p-3">
                    <div className="text-xs text-muted-foreground">Backlinks</div>
                    <div className="mt-1 text-lg font-bold">842</div>
                    <div className="mt-1 flex items-center text-xs text-green-500">
                      <ArrowUpRight className="mr-1 h-3 w-3" />
                      +56 new links
                    </div>
                  </div>

                  <div className="rounded-lg border p-3">
                    <div className="text-xs text-muted-foreground">Page Load Time</div>
                    <div className="mt-1 text-lg font-bold">1.8s</div>
                    <div className="mt-1 flex items-center text-xs text-green-500">
                      <ArrowDownRight className="mr-1 h-3 w-3" />
                      -0.3s improvement
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversion" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {renderMetricCard(
              "Conversion Rate",
              <Percent className="h-4 w-4 text-green-500" />,
              conversionMetrics.conversionRate.value,
              conversionMetrics.conversionRate.change,
              conversionMetrics.conversionRate.trend,
              "bg-green-500/10",
            )}

            {renderMetricCard(
              "Click-Through Rate",
              <MousePointerClick className="h-4 w-4 text-blue-500" />,
              conversionMetrics.ctr.value,
              conversionMetrics.ctr.change,
              conversionMetrics.ctr.trend,
              "bg-blue-500/10",
              0.1,
            )}

            {renderMetricCard(
              "Cost Per Click",
              <DollarSign className="h-4 w-4 text-amber-500" />,
              conversionMetrics.cpc.value,
              conversionMetrics.cpc.change,
              conversionMetrics.cpc.trend,
              "bg-amber-500/10",
              0.2,
            )}

            {renderMetricCard(
              "Cost Per Action",
              <ShoppingCart className="h-4 w-4 text-purple-500" />,
              conversionMetrics.cpa.value,
              conversionMetrics.cpa.change,
              conversionMetrics.cpa.trend,
              "bg-purple-500/10",
              0.3,
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
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {renderMetricCard(
              "Return on Ad Spend",
              <DollarSign className="h-4 w-4 text-green-500" />,
              revenueMetrics.roas.value,
              revenueMetrics.roas.change,
              revenueMetrics.roas.trend,
              "bg-green-500/10",
            )}

            {renderMetricCard(
              "Marketing ROI",
              <TrendingUp className="h-4 w-4 text-blue-500" />,
              revenueMetrics.roi.value,
              revenueMetrics.roi.change,
              revenueMetrics.roi.trend,
              "bg-blue-500/10",
              0.1,
            )}

            {renderMetricCard(
              "Avg. Revenue Per User",
              <Users className="h-4 w-4 text-purple-500" />,
              revenueMetrics.arpu.value,
              revenueMetrics.arpu.change,
              revenueMetrics.arpu.trend,
              "bg-purple-500/10",
              0.2,
            )}

            {renderMetricCard(
              "Monthly Recurring Revenue",
              <RefreshCw className="h-4 w-4 text-amber-500" />,
              revenueMetrics.mrr.value,
              revenueMetrics.mrr.change,
              revenueMetrics.mrr.trend,
              "bg-amber-500/10",
              0.3,
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Attribution</CardTitle>
              <CardDescription>Revenue contribution by marketing channel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Social Media</span>
                      <span className="text-sm font-bold">R320,500</span>
                    </div>
                    <Progress value={32} className="h-2 bg-blue-100" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>32% of total</span>
                      <span className="text-green-500">+8.5% vs last month</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Search</span>
                      <span className="text-sm font-bold">R280,200</span>
                    </div>
                    <Progress value={28} className="h-2 bg-green-100" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>28% of total</span>
                      <span className="text-green-500">+5.2% vs last month</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Email</span>
                      <span className="text-sm font-bold">R220,100</span>
                    </div>
                    <Progress value={22} className="h-2 bg-amber-100" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>22% of total</span>
                      <span className="text-green-500">+12.3% vs last month</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Direct</span>
                      <span className="text-sm font-bold">R180,200</span>
                    </div>
                    <Progress value={18} className="h-2 bg-purple-100" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>18% of total</span>
                      <span className="text-red-500">-2.1% vs last month</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customer" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {renderMetricCard(
              "Customer Acquisition Cost",
              <DollarSign className="h-4 w-4 text-amber-500" />,
              customerMetrics.cac.value,
              customerMetrics.cac.change,
              customerMetrics.cac.trend,
              "bg-amber-500/10",
            )}

            {renderMetricCard(
              "Customer Lifetime Value",
              <Wallet className="h-4 w-4 text-green-500" />,
              customerMetrics.clv.value,
              customerMetrics.clv.change,
              customerMetrics.clv.trend,
              "bg-green-500/10",
              0.1,
            )}

            {renderMetricCard(
              "Churn Rate",
              <UserMinus className="h-4 w-4 text-red-500" />,
              customerMetrics.churnRate.value,
              customerMetrics.churnRate.change,
              customerMetrics.churnRate.trend,
              "bg-red-500/10",
              0.2,
            )}

            {renderMetricCard(
              "Retention Rate",
              <Users className="h-4 w-4 text-blue-500" />,
              customerMetrics.retentionRate.value,
              customerMetrics.retentionRate.change,
              customerMetrics.retentionRate.trend,
              "bg-blue-500/10",
              0.3,
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Customer Metrics</CardTitle>
              <CardDescription>Key customer performance indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">CLV:CAC Ratio</span>
                      </div>
                      <span className="text-sm font-bold">26:1</span>
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
                      <span className="text-sm font-bold">4.2 months</span>
                    </div>
                    <Progress value={72} className="h-2" />
                    <p className="text-xs text-muted-foreground">Target: 12 months or less</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-4 w-4 text-purple-500" />
                        <span className="text-sm font-medium">Share of Market</span>
                      </div>
                      <span className="text-sm font-bold">18.5%</span>
                    </div>
                    <Progress value={18.5} className="h-2" />
                    <p className="text-xs text-green-500">+2.3% vs last year</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Wallet className="mr-2 h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium">Share of Wallet</span>
                      </div>
                      <span className="text-sm font-bold">42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                    <p className="text-xs text-green-500">+5.8% vs last year</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

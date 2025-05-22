"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { Wrench, Check, ArrowRight, Lightbulb, ChevronDown, Filter, ThumbsUp, ThumbsDown, Star } from "lucide-react"

const OptimizationTools = () => {
  const [filterValue, setFilterValue] = useState("all")

  // Sample data for bottlenecks
  const bottleneckData = [
    {
      id: 1,
      stage: "Sign-up Form",
      impact: "high",
      dropoff: 42,
      description: "High form abandonment rate on mobile devices",
      recommendations: [
        "Simplify form to essential fields only",
        "Implement one-click social sign-up",
        "Add progress indicator for multi-step forms",
      ],
    },
    {
      id: 2,
      stage: "Pricing Page",
      impact: "high",
      dropoff: 38,
      description: "Users spending <30 seconds before leaving",
      recommendations: [
        "Highlight value proposition more clearly",
        "Add comparison table with competitors",
        "Implement exit-intent popup with special offer",
      ],
    },
    {
      id: 3,
      stage: "Onboarding",
      impact: "medium",
      dropoff: 28,
      description: "Only 45% of users complete all onboarding steps",
      recommendations: [
        "Reduce onboarding steps from 5 to 3",
        "Add skip option for non-essential steps",
        "Implement gamification elements",
      ],
    },
    {
      id: 4,
      stage: "Payment Process",
      impact: "high",
      dropoff: 35,
      description: "Cart abandonment during payment information entry",
      recommendations: [
        "Add more payment options including digital wallets",
        "Implement one-click payment for returning users",
        "Simplify the credit card form",
      ],
    },
  ]

  // Sample data for A/B test results
  const abTestData = [
    {
      id: 1,
      name: "Homepage Hero Section",
      status: "completed",
      winner: "B",
      improvement: 28,
      confidence: 98,
      variants: [
        { name: "A (Control)", conversionRate: 3.2 },
        { name: "B (Challenger)", conversionRate: 4.1 },
      ],
    },
    {
      id: 2,
      name: "Pricing Page Layout",
      status: "completed",
      winner: "A",
      improvement: 12,
      confidence: 94,
      variants: [
        { name: "A (Control)", conversionRate: 5.8 },
        { name: "B (Challenger)", conversionRate: 5.2 },
      ],
    },
    {
      id: 3,
      name: "Call-to-Action Button",
      status: "running",
      winner: null,
      improvement: null,
      confidence: 62,
      variants: [
        { name: "A (Control)", conversionRate: 4.2 },
        { name: "B (Challenger)", conversionRate: 4.5 },
      ],
    },
    {
      id: 4,
      name: "Checkout Process",
      status: "completed",
      winner: "B",
      improvement: 32,
      confidence: 99,
      variants: [
        { name: "A (Control)", conversionRate: 28 },
        { name: "B (Challenger)", conversionRate: 37 },
      ],
    },
  ]

  // Sample data for recommendations
  const recommendationData = [
    {
      id: 1,
      title: "Implement One-Click Sign-up",
      impact: "high",
      effort: "medium",
      stage: "Sign-up",
      description: "Add social login options and streamline the registration process to reduce friction",
      expectedImprovement: "35-45% reduction in sign-up abandonment",
      status: "pending",
    },
    {
      id: 2,
      title: "Redesign Mobile Checkout Flow",
      impact: "high",
      effort: "high",
      stage: "Checkout",
      description:
        "Optimize the checkout experience specifically for mobile users with simplified forms and larger touch targets",
      expectedImprovement: "25-30% increase in mobile conversion rate",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Add Social Proof Elements",
      impact: "medium",
      effort: "low",
      stage: "Product Page",
      description: "Incorporate customer testimonials, ratings, and usage statistics to build trust",
      expectedImprovement: "15-20% increase in add-to-cart rate",
      status: "pending",
    },
    {
      id: 4,
      title: "Implement Exit-Intent Offers",
      impact: "medium",
      effort: "low",
      stage: "All Pages",
      description: "Show special offers or lead capture forms when users show intent to leave the site",
      expectedImprovement: "10-15% recovery of abandoning visitors",
      status: "completed",
    },
  ]

  // Sample data for opportunity detection
  const opportunityData = [
    {
      id: 1,
      title: "High-Value Segment Underperforming",
      type: "segment",
      impact: "high",
      description: "25-34 age group has 42% lower conversion rate despite high engagement",
      recommendation: "Create targeted content and offers for this demographic",
    },
    {
      id: 2,
      title: "Untapped Referral Potential",
      type: "channel",
      impact: "high",
      description: "Only 8% of customers participate in referral program despite 4.5x ROI",
      recommendation: "Increase referral program visibility and improve incentives",
    },
    {
      id: 3,
      title: "Abandoned Cart Recovery",
      type: "process",
      impact: "medium",
      description: "Cart abandonment emails have 15% open rate but only 2% conversion",
      recommendation: "Test new email templates and timing sequences",
    },
    {
      id: 4,
      title: "Cross-Sell Opportunity",
      type: "product",
      impact: "medium",
      description: "Product A buyers show high affinity for Product C but low awareness",
      recommendation: "Implement targeted cross-sell recommendations",
    },
  ]

  const getImpactColor = (impact) => {
    switch (impact) {
      case "high":
        return { bg: "bg-red-100", text: "text-red-800", border: "border-red-200" }
      case "medium":
        return { bg: "bg-amber-100", text: "text-amber-800", border: "border-amber-200" }
      case "low":
        return { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-200" }
      default:
        return { bg: "bg-slate-100", text: "text-slate-800", border: "border-slate-200" }
    }
  }

  const getEffortColor = (effort) => {
    switch (effort) {
      case "high":
        return { bg: "bg-red-100", text: "text-red-800", border: "border-red-200" }
      case "medium":
        return { bg: "bg-amber-100", text: "text-amber-800", border: "border-amber-200" }
      case "low":
        return { bg: "bg-green-100", text: "text-green-800", border: "border-green-200" }
      default:
        return { bg: "bg-slate-100", text: "text-slate-800", border: "border-slate-200" }
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return { bg: "bg-green-100", text: "text-green-800", border: "border-green-200" }
      case "in-progress":
        return { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-200" }
      case "pending":
        return { bg: "bg-amber-100", text: "text-amber-800", border: "border-amber-200" }
      default:
        return { bg: "bg-slate-100", text: "text-slate-800", border: "border-slate-200" }
    }
  }

  return (
    <Card className="col-span-12">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <Wrench className="mr-2 h-5 w-5 text-purple-500" />
              Conversion Optimization Tools
            </CardTitle>
            <CardDescription>Tools and recommendations to improve conversion rates</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="bottlenecks">
          <TabsList className="mb-4">
            <TabsTrigger value="bottlenecks">Bottleneck Identifier</TabsTrigger>
            <TabsTrigger value="ab-tests">A/B Test Results</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunity Detection</TabsTrigger>
          </TabsList>

          <TabsContent value="bottlenecks">
            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium mb-4">Conversion Funnel Bottlenecks</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={bottleneckData} margin={{ top: 5, right: 30, left: 20, bottom: 70 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="stage"
                        tick={{ angle: -45, textAnchor: "end", dominantBaseline: "ideographic" }}
                        height={70}
                      />
                      <YAxis label={{ value: "Dropoff Rate (%)", angle: -90, position: "insideLeft" }} />
                      <Tooltip />
                      <Bar dataKey="dropoff" name="Dropoff Rate (%)">
                        {bottleneckData.map((entry, index) => {
                          const color =
                            entry.impact === "high" ? "#ef4444" : entry.impact === "medium" ? "#f59e0b" : "#3b82f6"
                          return <Cell key={`cell-${index}`} fill={color} />
                        })}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="space-y-4">
                {bottleneckData.map((bottleneck) => {
                  const impactColor = getImpactColor(bottleneck.impact)

                  return (
                    <div key={bottleneck.id} className="rounded-lg border p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">{bottleneck.stage}</h4>
                          <p className="mt-1 text-sm text-muted-foreground">{bottleneck.description}</p>
                        </div>
                        <Badge className={`${impactColor.bg} ${impactColor.text} ${impactColor.border}`}>
                          {bottleneck.impact === "high"
                            ? "High Impact"
                            : bottleneck.impact === "medium"
                              ? "Medium Impact"
                              : "Low Impact"}
                        </Badge>
                      </div>

                      <div className="mt-3">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-sm">Dropoff Rate</div>
                          <div className="text-sm font-medium">{bottleneck.dropoff}%</div>
                        </div>
                        <Progress value={bottleneck.dropoff} className="h-2" />
                      </div>

                      <div className="mt-4">
                        <div className="text-sm font-medium mb-2">Recommendations</div>
                        <div className="space-y-2">
                          {bottleneck.recommendations.map((recommendation, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5" />
                              <p className="text-sm">{recommendation}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button className="mt-4 w-full" size="sm">
                        Implement Fixes
                      </Button>
                    </div>
                  )
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ab-tests">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {abTestData.map((test) => {
                  const statusColor =
                    test.status === "completed"
                      ? { bg: "bg-green-100", text: "text-green-800", border: "border-green-200" }
                      : { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-200" }

                  return (
                    <div key={test.id} className="rounded-lg border p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">{test.name}</h4>
                          <div className="flex items-center mt-1">
                            <Badge className={`${statusColor.bg} ${statusColor.text} ${statusColor.border}`}>
                              {test.status === "completed" ? "Completed" : "Running"}
                            </Badge>
                            {test.status === "completed" && (
                              <Badge className="ml-2 bg-purple-100 text-purple-800 border-purple-200">
                                Winner: Variant {test.winner}
                              </Badge>
                            )}
                          </div>
                        </div>
                        {test.status === "completed" && (
                          <div className="text-right">
                            <div className="text-sm font-medium text-green-600">+{test.improvement}%</div>
                            <div className="text-xs text-muted-foreground">{test.confidence}% confidence</div>
                          </div>
                        )}
                      </div>

                      <div className="mt-4">
                        <div className="space-y-3">
                          {test.variants.map((variant, index) => (
                            <div key={index}>
                              <div className="flex items-center justify-between mb-1">
                                <div className="text-sm">{variant.name}</div>
                                <div className="text-sm font-medium">{variant.conversionRate}%</div>
                              </div>
                              <Progress
                                value={variant.conversionRate * 10}
                                className={`h-2 ${test.winner === variant.name.charAt(0) ? "bg-green-100" : "bg-slate-100"}`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {test.status === "completed" && (
                        <div className="mt-4 pt-4 border-t">
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Implementation Status</div>
                            <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                              Pending Implementation
                            </Badge>
                          </div>
                          <Button className="mt-3 w-full" size="sm">
                            Implement Winner
                          </Button>
                        </div>
                      )}

                      {test.status === "running" && (
                        <div className="mt-4 pt-4 border-t">
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Current Confidence</div>
                            <div className="text-sm font-medium">{test.confidence}%</div>
                          </div>
                          <Progress value={test.confidence} className="h-2 mt-1" />
                          <div className="text-xs text-muted-foreground mt-1">Estimated completion: 3 days</div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recommendations">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant={filterValue === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterValue("all")}
                >
                  All
                </Button>
                <Button
                  variant={filterValue === "high" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterValue("high")}
                >
                  High Impact
                </Button>
                <Button
                  variant={filterValue === "low-effort" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterValue("low-effort")}
                >
                  Low Effort
                </Button>
                <Button
                  variant={filterValue === "pending" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterValue("pending")}
                >
                  Pending
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {recommendationData.map((recommendation) => {
                const impactColor = getImpactColor(recommendation.impact)
                const effortColor = getEffortColor(recommendation.effort)
                const statusColor = getStatusColor(recommendation.status)

                return (
                  <div key={recommendation.id} className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{recommendation.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{recommendation.description}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className={`${impactColor.bg} ${impactColor.text} ${impactColor.border}`}>
                          {recommendation.impact === "high"
                            ? "High Impact"
                            : recommendation.impact === "medium"
                              ? "Medium Impact"
                              : "Low Impact"}
                        </Badge>
                        <Badge className={`${effortColor.bg} ${effortColor.text} ${effortColor.border}`}>
                          {recommendation.effort === "high"
                            ? "High Effort"
                            : recommendation.effort === "medium"
                              ? "Medium Effort"
                              : "Low Effort"}
                        </Badge>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium">Expected Improvement</div>
                        <div className="text-sm mt-1">{recommendation.expectedImprovement}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Funnel Stage</div>
                        <div className="text-sm mt-1">{recommendation.stage}</div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t flex items-center justify-between">
                      <Badge className={`${statusColor.bg} ${statusColor.text} ${statusColor.border}`}>
                        {recommendation.status === "completed"
                          ? "Completed"
                          : recommendation.status === "in-progress"
                            ? "In Progress"
                            : "Pending"}
                      </Badge>

                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          Helpful
                        </Button>
                        <Button variant="outline" size="sm">
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          Not Helpful
                        </Button>
                        <Button size="sm">
                          Implement
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="opportunities">
            <div className="space-y-4">
              {opportunityData.map((opportunity) => {
                const impactColor = getImpactColor(opportunity.impact)

                return (
                  <div key={opportunity.id} className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium flex items-center">
                          <Lightbulb className="h-4 w-4 mr-2 text-amber-500" />
                          {opportunity.title}
                        </h4>
                        <div className="flex items-center mt-1">
                          <Badge variant="outline">
                            {opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1)}
                          </Badge>
                          <Badge className={`ml-2 ${impactColor.bg} ${impactColor.text} ${impactColor.border}`}>
                            {opportunity.impact === "high"
                              ? "High Impact"
                              : opportunity.impact === "medium"
                                ? "Medium Impact"
                                : "Low Impact"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= (opportunity.impact === "high" ? 5 : opportunity.impact === "medium" ? 3 : 2) ? "text-amber-400 fill-amber-400" : "text-slate-300"}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="text-sm font-medium">Finding</div>
                      <p className="mt-1 text-sm">{opportunity.description}</p>
                    </div>

                    <div className="mt-3">
                      <div className="text-sm font-medium">Recommendation</div>
                      <p className="mt-1 text-sm">{opportunity.recommendation}</p>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <Button size="sm">
                        Create Action Plan
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default OptimizationTools

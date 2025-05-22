"use client"
import { ChevronDown, Filter, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedStats } from "@/components/dashboard/animated-stats"
import { PerformanceCharts } from "@/components/dashboard/performance-chart"
import { ContentCalendar } from "@/components/dashboard/content-calendar"
import { HotTopics } from "@/components/dashboard/hot-topics"

export function ExecutiveDashboard() {
  return (
    <div className="space-y-6 p-6">
      {/* Global Controls & Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border bg-card p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Last 30 Days
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            All Platforms
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            All Content Types
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            Export
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            View Settings
          </Button>
        </div>
      </div>

      {/* Animated Stats */}
      <AnimatedStats />

      {/* Performance Charts */}
      <PerformanceCharts />

      {/* Content Calendar */}
      <ContentCalendar />

      {/* Hot Topics & Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Hot Topics & Trends</CardTitle>
          <CardDescription>Current trending topics in your community</CardDescription>
        </CardHeader>
        <CardContent>
          <HotTopics />
        </CardContent>
      </Card>

      {/* Content Strategy */}
      <Card>
        <CardHeader>
          <CardTitle>Content Strategy</CardTitle>
          <CardDescription>Strategic content planning and insights</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="insights">
            <TabsList>
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              <TabsTrigger value="planning">Planning</TabsTrigger>
            </TabsList>
            <TabsContent value="insights" className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium mb-2">Top Performing Content Types</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Entertainment</span>
                      <span className="text-sm font-medium">3.2% engagement</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-blue-500" style={{ width: "80%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Educational</span>
                      <span className="text-sm font-medium">2.4% engagement</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-green-500" style={{ width: "60%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Promotional</span>
                      <span className="text-sm font-medium">1.9% engagement</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-amber-500" style={{ width: "48%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium mb-2">Content Gaps</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Morning Content (6-9 AM)</span>
                      <span className="text-sm font-medium text-amber-600">Low Coverage</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-amber-500" style={{ width: "30%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Weekend Content</span>
                      <span className="text-sm font-medium text-red-600">Very Low Coverage</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-red-500" style={{ width: "20%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Educational Content</span>
                      <span className="text-sm font-medium text-amber-600">Low Coverage</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-amber-500" style={{ width: "35%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="recommendations" className="mt-4">
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Increase Educational Content</h3>
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Educational content is showing 1.8% higher conversion rates than other content types. Consider
                    increasing educational content by 20% in your content mix.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Optimize Posting Times</h3>
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your audience is most active between 6-8 PM, but only 25% of your content is posted during this
                    time. Consider shifting more content to this time slot.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Leverage Trending Topics</h3>
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Content related to "Data vs Airtime" is trending in your community with 45% higher engagement.
                    Consider creating more content around this topic.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="planning" className="mt-4">
              <div className="rounded-lg border overflow-hidden">
                <div className="bg-muted p-3 text-sm font-medium">Content Planning Timeline</div>
                <div className="divide-y">
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Q2 Content Strategy</h3>
                      <span className="text-sm text-green-600">In Progress</span>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Focus on educational content and platform-specific optimizations
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-green-500" style={{ width: "65%" }}></div>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                      <span>Started: Apr 1</span>
                      <span>65% Complete</span>
                      <span>Due: Jun 30</span>
                    </div>
                  </div>

                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Creator Partnership Program</h3>
                      <span className="text-sm text-amber-600">Planning</span>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Identify and onboard 10 new creators for Q3 campaigns
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-amber-500" style={{ width: "25%" }}></div>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                      <span>Started: Apr 15</span>
                      <span>25% Complete</span>
                      <span>Due: Jul 15</span>
                    </div>
                  </div>

                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Platform Expansion</h3>
                      <span className="text-sm text-blue-600">Not Started</span>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Evaluate and launch presence on 2 new emerging platforms
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-blue-500" style={{ width: "0%" }}></div>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                      <span>Starts: Jun 1</span>
                      <span>0% Complete</span>
                      <span>Due: Aug 31</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

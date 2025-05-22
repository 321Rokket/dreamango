"use client"

import { useState } from "react"
import { ChevronDown, Filter, Info, Settings, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function AudienceCommunity() {
  const [showCommunityPanel, setShowCommunityPanel] = useState(true)

  return (
    <div className="flex h-full">
      <div className={`flex-1 overflow-auto p-4 lg:p-6 ${showCommunityPanel ? "pr-0 lg:pr-0" : ""}`}>
        {/* Global Controls & Filters */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border bg-card p-4 shadow-sm">
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
              All Segments
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              Demographics
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowCommunityPanel(!showCommunityPanel)}
              className={showCommunityPanel ? "bg-muted" : ""}
            >
              <Users className="h-4 w-4" />
            </Button>
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

        {/* Community Growth */}
        <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Follower Metrics</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-[200px] text-xs">Total followers and growth metrics across all platforms</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold">124.5K</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>Total Followers</span>
                    <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">+18.2%</Badge>
                  </div>
                  <div className="mt-2 h-[40px] bg-slate-100 rounded-md"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium">Net Growth</div>
                    <div className="text-xl font-bold">+3.8K</div>
                    <div className="text-xs text-muted-foreground">This month</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Growth Rate</div>
                    <div className="text-xl font-bold">3.2%</div>
                    <div className="text-xs text-muted-foreground">Monthly</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Engagement Trends</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-[200px] text-xs">Engagement metrics and trends over time</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Engagement Rate</div>
                    <div className="text-sm font-bold">2.8%</div>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-green-500" style={{ width: "70%" }}></div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>0%</span>
                    <span>Benchmark: 2.1%</span>
                    <span>5%</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Active Followers</div>
                    <div className="text-sm font-bold">32%</div>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: "32%" }}></div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>0%</span>
                    <span>Benchmark: 25%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Growth Velocity</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-[200px] text-xs">Rate of community growth and acceleration</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-32 w-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold">78</div>
                      <div className="text-xs text-muted-foreground">Velocity Score</div>
                    </div>
                  </div>
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="10"
                      strokeDasharray="282.7"
                      strokeDashoffset="62.2"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Accelerating</Badge>
                  <span className="text-sm text-muted-foreground">+12% vs last month</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Community Health</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-[200px] text-xs">Overall health score of your community</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-32 w-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold">82</div>
                      <div className="text-xs text-muted-foreground">Health Score</div>
                    </div>
                  </div>
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="10"
                      strokeDasharray="282.7"
                      strokeDashoffset="50.9"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
                <div className="mt-4 w-full space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>Engagement</span>
                    <span>85/100</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Sentiment</span>
                    <span>78/100</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Growth</span>
                    <span>88/100</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Retention</span>
                    <span>76/100</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

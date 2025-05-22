"use client"

import { useState } from "react"
import { ChevronDown, Filter, Settings, Share2, Calendar, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { OKRManagement } from "@/components/dashboard/okr-management"
import { ResourceAllocation } from "@/components/dashboard/resource-allocation"
import { TestingLab } from "@/components/dashboard/testing-lab"
import { PhasePlanning } from "@/components/dashboard/phase-planning"

export function StrategicPlanning() {
  const [showAIPanel, setShowAIPanel] = useState(true)

  return (
    <div className="flex h-full">
      <div className={`flex-1 overflow-auto p-4 lg:p-6 ${showAIPanel ? "pr-0 lg:pr-0" : ""}`}>
        {/* Global Controls & Filters */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Phase 1
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              Q3 2024
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              All Teams
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              All Initiatives
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
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              View Settings
            </Button>
          </div>
        </div>

        {/* Strategic Overview */}
        <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Phase Progress</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-[200px] text-xs">Overall progress of the current strategic phase</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold">68%</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>Phase 1 Progress</span>
                    <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">On Track</Badge>
                  </div>
                  <div className="mt-2">
                    <Progress value={68} className="h-2" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium">Start Date</div>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span>Jul 1, 2024</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">End Date</div>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span>Dec 31, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">OKR Health</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-[200px] text-xs">Overall health of objectives and key results</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Overall Health</div>
                    <div className="text-sm font-bold">82/100</div>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-green-500" style={{ width: "82%" }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-md bg-green-50 p-2">
                    <div className="text-xs text-muted-foreground">On Track</div>
                    <div className="text-lg font-bold text-green-600">12</div>
                  </div>
                  <div className="rounded-md bg-amber-50 p-2">
                    <div className="text-xs text-muted-foreground">At Risk</div>
                    <div className="text-lg font-bold text-amber-600">3</div>
                  </div>
                  <div className="rounded-md bg-red-50 p-2">
                    <div className="text-xs text-muted-foreground">Off Track</div>
                    <div className="text-lg font-bold text-red-600">1</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Resource Utilization</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-[200px] text-xs">Current resource utilization across all initiatives</p>
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
                      <div className="text-3xl font-bold">76%</div>
                      <div className="text-xs text-muted-foreground">Utilization</div>
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
                      strokeDashoffset="67.8"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
                <div className="mt-4 w-full space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>Budget</span>
                    <span>72%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Team Capacity</span>
                    <span>85%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Creator Investment</span>
                    <span>68%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Experiment Status</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-[200px] text-xs">Status of current experiments and tests</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-md bg-blue-50 p-3 text-center">
                    <div className="text-xs text-muted-foreground">Active</div>
                    <div className="text-2xl font-bold text-blue-600">8</div>
                  </div>
                  <div className="rounded-md bg-purple-50 p-3 text-center">
                    <div className="text-xs text-muted-foreground">Completed</div>
                    <div className="text-2xl font-bold text-purple-600">12</div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-xs font-medium">Recent Results</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-md bg-green-50 p-2 text-xs">
                      <span>Content Format Test</span>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+18% CTR</Badge>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-amber-50 p-2 text-xs">
                      <span>Pricing Display</span>
                      <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Inconclusive</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* OKR Management */}
          <OKRManagement />

          {/* Resource Allocation and Testing Lab */}
          <div className="grid gap-6" style={{ gridTemplateColumns: "2fr 1fr" }}>
            <ResourceAllocation />
            <TestingLab />
          </div>

          {/* Phase Planning */}
          <PhasePlanning />

          {/* Status Bar */}
          <div className="mt-6 flex items-center justify-between rounded-lg border bg-card p-2 text-xs text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="mr-1 h-2 w-2 rounded-full bg-green-500"></div>
                <span>Data: 15m ago</span>
              </div>
              <div className="flex items-center">
                <div className="mr-1 h-2 w-2 rounded-full bg-green-500"></div>
                <span>OKR System</span>
              </div>
              <div className="flex items-center">
                <div className="mr-1 h-2 w-2 rounded-full bg-green-500"></div>
                <span>Resource Management</span>
              </div>
              <div className="flex items-center">
                <div className="mr-1 h-2 w-2 rounded-full bg-amber-500"></div>
                <span>Testing Platform</span>
              </div>
            </div>
            <div>
              <span>User: Admin | Role: Strategic Planner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

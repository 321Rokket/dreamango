"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Users, DollarSign, Clock, Zap } from "lucide-react"

export function ResourceAllocation() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Resource Allocation</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Adjust Allocation
            </Button>
            <Button variant="outline" size="sm">
              View Details
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="teams">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="teams">Teams</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
          <TabsContent value="teams" className="space-y-4 pt-4">
            <div className="space-y-4">
              <ResourceItem
                name="Content Creation Team"
                icon={Users}
                allocation={85}
                status="Optimal"
                details="12 team members, 3 projects"
              />
              <ResourceItem
                name="Analytics & Research"
                icon={Users}
                allocation={65}
                status="Under-allocated"
                details="8 team members, 4 projects"
              />
              <ResourceItem
                name="Platform Development"
                icon={Users}
                allocation={95}
                status="Over-allocated"
                details="15 team members, 2 projects"
              />
              <ResourceItem
                name="Community Management"
                icon={Users}
                allocation={75}
                status="Optimal"
                details="6 team members, 3 projects"
              />
            </div>
          </TabsContent>
          <TabsContent value="budget" className="space-y-4 pt-4">
            <div className="space-y-4">
              <ResourceItem
                name="Content Production"
                icon={DollarSign}
                allocation={70}
                status="Optimal"
                details="$120,000 / $150,000"
              />
              <ResourceItem
                name="Technology & Tools"
                icon={DollarSign}
                allocation={85}
                status="Optimal"
                details="$85,000 / $100,000"
              />
              <ResourceItem
                name="Marketing & Promotion"
                icon={DollarSign}
                allocation={95}
                status="Over-allocated"
                details="$95,000 / $100,000"
              />
              <ResourceItem
                name="Research & Development"
                icon={DollarSign}
                allocation={45}
                status="Under-allocated"
                details="$45,000 / $100,000"
              />
            </div>
          </TabsContent>
          <TabsContent value="timeline" className="space-y-4 pt-4">
            <div className="space-y-4">
              <ResourceItem
                name="Phase 1 Planning"
                icon={Clock}
                allocation={100}
                status="Complete"
                details="Jul 1 - Jul 15, 2024"
              />
              <ResourceItem
                name="Content Strategy Development"
                icon={Clock}
                allocation={75}
                status="On Schedule"
                details="Jul 15 - Aug 15, 2024"
              />
              <ResourceItem
                name="Platform Enhancement"
                icon={Clock}
                allocation={60}
                status="Slight Delay"
                details="Aug 1 - Sep 30, 2024"
              />
              <ResourceItem
                name="Launch Preparation"
                icon={Clock}
                allocation={25}
                status="Not Started"
                details="Oct 1 - Oct 31, 2024"
              />
            </div>
          </TabsContent>
          <TabsContent value="tools" className="space-y-4 pt-4">
            <div className="space-y-4">
              <ResourceItem
                name="Content Management System"
                icon={Zap}
                allocation={90}
                status="Optimal"
                details="12 active users, 3 modules"
              />
              <ResourceItem
                name="Analytics Platform"
                icon={Zap}
                allocation={65}
                status="Under-utilized"
                details="8 active users, 4 dashboards"
              />
              <ResourceItem
                name="Collaboration Tools"
                icon={Zap}
                allocation={95}
                status="Over-utilized"
                details="25 active users, 10 projects"
              />
              <ResourceItem
                name="Testing Environment"
                icon={Zap}
                allocation={40}
                status="Under-utilized"
                details="5 active users, 2 test suites"
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

interface ResourceItemProps {
  name: string
  icon: React.ElementType
  allocation: number
  status:
    | "Optimal"
    | "Over-allocated"
    | "Under-allocated"
    | "Complete"
    | "On Schedule"
    | "Slight Delay"
    | "Not Started"
    | "Over-utilized"
    | "Under-utilized"
  details: string
}

function ResourceItem({ name, icon: Icon, allocation, status, details }: ResourceItemProps) {
  const getStatusColor = () => {
    switch (status) {
      case "Optimal":
      case "Complete":
      case "On Schedule":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "Over-allocated":
      case "Over-utilized":
      case "Slight Delay":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100"
      case "Under-allocated":
      case "Under-utilized":
      case "Not Started":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      default:
        return "bg-slate-100 text-slate-800 hover:bg-slate-100"
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-xs text-muted-foreground">{details}</div>
          </div>
        </div>
        <Badge className={getStatusColor()}>{status}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Progress value={allocation} className="h-2 flex-1" />
        <span className="text-sm font-medium">{allocation}%</span>
      </div>
    </div>
  )
}

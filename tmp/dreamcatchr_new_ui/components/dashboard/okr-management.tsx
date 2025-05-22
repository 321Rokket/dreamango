"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ChevronDown, Plus, Check, AlertTriangle, X } from "lucide-react"

export function OKRManagement() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-white dark:bg-slate-950 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">OKR Management</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Plus className="mr-1 h-4 w-4" />
              Add Objective
            </Button>
            <Button variant="outline" size="sm">
              View All
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid divide-y">
          <OKRItem
            title="Increase Creator Engagement"
            progress={75}
            status="On Track"
            keyResults={[
              { title: "Achieve 30% increase in creator content submissions", progress: 85, status: "On Track" },
              { title: "Reach 25% growth in creator community participation", progress: 65, status: "At Risk" },
              { title: "Attain 40% increase in creator monetization", progress: 75, status: "On Track" },
            ]}
          />
          <OKRItem
            title="Optimize Content Distribution"
            progress={60}
            status="At Risk"
            keyResults={[
              { title: "Improve content recommendation accuracy by 35%", progress: 55, status: "At Risk" },
              { title: "Increase cross-platform content sharing by 40%", progress: 70, status: "On Track" },
              { title: "Reduce content delivery latency by 25%", progress: 45, status: "Off Track" },
            ]}
          />
          <OKRItem
            title="Enhance Audience Retention"
            progress={90}
            status="On Track"
            keyResults={[
              { title: "Increase daily active users by 20%", progress: 95, status: "On Track" },
              { title: "Improve session duration by 15%", progress: 85, status: "On Track" },
              { title: "Reduce churn rate by 10%", progress: 90, status: "On Track" },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  )
}

interface KeyResult {
  title: string
  progress: number
  status: "On Track" | "At Risk" | "Off Track"
}

interface OKRItemProps {
  title: string
  progress: number
  status: "On Track" | "At Risk" | "Off Track"
  keyResults: KeyResult[]
}

function OKRItem({ title, progress, status, keyResults }: OKRItemProps) {
  const [expanded, setExpanded] = React.useState(false)

  const getStatusBadge = (status: "On Track" | "At Risk" | "Off Track") => {
    switch (status) {
      case "On Track":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <Check className="mr-1 h-3 w-3" />
            {status}
          </Badge>
        )
      case "At Risk":
        return (
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
            <AlertTriangle className="mr-1 h-3 w-3" />
            {status}
          </Badge>
        )
      case "Off Track":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <X className="mr-1 h-3 w-3" />
            {status}
          </Badge>
        )
    }
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">{title}</h3>
            {getStatusBadge(status)}
          </div>
          <div className="flex items-center gap-2">
            <Progress value={progress} className="h-2 flex-1" />
            <span className="text-sm font-medium">{progress}%</span>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="ml-4" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Collapse" : "Expand"}
          <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </Button>
      </div>

      {expanded && (
        <div className="mt-4 grid gap-3 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
          {keyResults.map((kr, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm">{kr.title}</span>
                {getStatusBadge(kr.status)}
              </div>
              <div className="flex items-center gap-2">
                <Progress value={kr.progress} className="h-1.5 flex-1" />
                <span className="text-xs font-medium">{kr.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

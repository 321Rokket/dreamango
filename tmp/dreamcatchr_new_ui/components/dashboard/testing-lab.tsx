"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, Plus, Play, CheckCircle, AlertCircle, XCircle } from "lucide-react"

export function TestingLab() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Testing Lab</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Plus className="mr-1 h-4 w-4" />
              New Test
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
          <TestItem
            title="Content Format A/B Test"
            status="Running"
            type="A/B Test"
            metrics={["CTR", "Engagement", "Conversion"]}
            progress={45}
            results="+18% CTR improvement"
          />
          <TestItem
            title="Pricing Display Experiment"
            status="Inconclusive"
            type="Multivariate"
            metrics={["Conversion", "AOV", "Bounce Rate"]}
            progress={100}
            results="No significant difference"
          />
          <TestItem
            title="Onboarding Flow Optimization"
            status="Successful"
            type="Sequential"
            metrics={["Completion Rate", "Time to Value", "Activation"]}
            progress={100}
            results="+22% completion rate"
          />
          <TestItem
            title="Creator Tools Usability"
            status="Planned"
            type="User Testing"
            metrics={["Task Success", "Satisfaction", "Time on Task"]}
            progress={0}
            results="Starts Sep 15, 2024"
          />
        </div>
      </CardContent>
    </Card>
  )
}

interface TestItemProps {
  title: string
  status: "Running" | "Successful" | "Failed" | "Planned" | "Inconclusive"
  type: string
  metrics: string[]
  progress: number
  results: string
}

function TestItem({ title, status, type, metrics, progress, results }: TestItemProps) {
  const getStatusBadge = () => {
    switch (status) {
      case "Running":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Play className="mr-1 h-3 w-3" />
            {status}
          </Badge>
        )
      case "Successful":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="mr-1 h-3 w-3" />
            {status}
          </Badge>
        )
      case "Failed":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <XCircle className="mr-1 h-3 w-3" />
            {status}
          </Badge>
        )
      case "Planned":
        return <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-100">{status}</Badge>
      case "Inconclusive":
        return (
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
            <AlertCircle className="mr-1 h-3 w-3" />
            {status}
          </Badge>
        )
    }
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">{title}</h3>
        {getStatusBadge()}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-2">
        <div>
          <div className="text-xs text-muted-foreground">Type</div>
          <div className="text-sm">{type}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Key Metrics</div>
          <div className="text-sm">{metrics.join(", ")}</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">{results}</div>
        <Button variant="ghost" size="sm">
          Details
        </Button>
      </div>
    </div>
  )
}

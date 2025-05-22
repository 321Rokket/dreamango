"use client"
import { ChevronDown, Filter, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NivoCharts } from "@/components/dashboard/nivo-charts"
import { TelcoMetrics } from "@/components/dashboard/telco-metrics"
import { HotTopics } from "@/components/dashboard/hot-topics"
// Update the import to use the renamed component
import { ContentOpportunities } from "@/components/dashboard/ugc-highlights"

export function ExecutiveOverview() {
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

      {/* Performance Charts */}
      <NivoCharts />

      {/* Telco-specific Metrics */}
      <TelcoMetrics />

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Hot Topics & Trends</CardTitle>
            <CardDescription>Current trending topics in your community</CardDescription>
          </CardHeader>
          <CardContent>
            <HotTopics />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            {/* Update the reference in the JSX */}
            <CardTitle>Viral Content Opportunities</CardTitle>
            <CardDescription>Trending content for collaboration and inspiration</CardDescription>
          </CardHeader>
          <CardContent>
            <ContentOpportunities />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

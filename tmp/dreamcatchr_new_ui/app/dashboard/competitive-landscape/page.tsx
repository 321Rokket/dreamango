"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CompetitivePosition } from "@/components/dashboard/competitive-landscape/competitive-position"
import { IndustryBenchmarks } from "@/components/dashboard/competitive-landscape/industry-benchmarks"
import { CompetitorAnalysisGrid } from "@/components/dashboard/competitive-landscape/competitor-analysis-grid"
import { CompetitiveAlerts } from "@/components/dashboard/competitive-landscape/competitive-alerts"

export default function CompetitiveLandscapePage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Competitive Landscape</h2>
        <p className="text-muted-foreground">Monitor your position in the market and track competitor activities.</p>
      </div>

      <Tabs defaultValue="position" className="space-y-4">
        <TabsList>
          <TabsTrigger value="position">Competitive Position</TabsTrigger>
          <TabsTrigger value="benchmarks">Industry Benchmarks</TabsTrigger>
          <TabsTrigger value="competitors">Competitor Analysis</TabsTrigger>
          <TabsTrigger value="alerts">Competitive Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="position" className="space-y-4">
          <CompetitivePosition />
        </TabsContent>

        <TabsContent value="benchmarks" className="space-y-4">
          <IndustryBenchmarks />
        </TabsContent>

        <TabsContent value="competitors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Competitor Analysis</CardTitle>
              <CardDescription>Detailed analysis of key competitors in your market</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="audience">Audience</TabsTrigger>
                  <TabsTrigger value="creators">Creators</TabsTrigger>
                  <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
                </TabsList>
                <div className="mt-6">
                  <CompetitorAnalysisGrid tab={activeTab} />
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <CompetitiveAlerts />
        </TabsContent>
      </Tabs>
    </div>
  )
}

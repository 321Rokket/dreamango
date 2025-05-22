import { TrendingContentVisualization } from "@/components/dashboard/trending-content-visualization"
import { ContentOpportunities } from "@/components/dashboard/content-opportunities"
import { ContentAnalysis } from "@/components/dashboard/content-analysis"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-3xl font-semibold text-telkom-dark-blue">Content Dashboard</h1>

      <TrendingContentVisualization />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ContentOpportunities />
        <div className="space-y-6">
          <ContentAnalysis />
        </div>
      </div>
    </div>
  )
}

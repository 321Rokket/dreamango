import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContentImpactTracker from "@/components/dashboard/conversion-journey/content-impact-tracker"
import OpportunityDetector from "@/components/dashboard/conversion-journey/opportunity-detector"
import CrossPlatformPerformance from "@/components/dashboard/conversion-journey/cross-platform-performance"

export default function ConversionJourneyPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Conversion Journey</h1>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content-impact">Content Impact</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="cross-platform">Cross-Platform</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContentImpactTracker />
            <OpportunityDetector />
          </div>
        </TabsContent>

        <TabsContent value="content-impact" className="mt-6">
          <ContentImpactTracker />
        </TabsContent>

        <TabsContent value="opportunities" className="mt-6">
          <OpportunityDetector />
        </TabsContent>

        <TabsContent value="cross-platform" className="mt-6">
          <CrossPlatformPerformance />
        </TabsContent>
      </Tabs>
    </div>
  )
}

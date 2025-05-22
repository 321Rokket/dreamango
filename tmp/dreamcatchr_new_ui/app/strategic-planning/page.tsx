import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StrategicPlanning } from "@/components/dashboard/strategic-planning"
import { OKRManagement } from "@/components/dashboard/okr-management"
import { ResourceAllocation } from "@/components/dashboard/resource-allocation"
import { TestingLab } from "@/components/dashboard/testing-lab"
import { PhasePlanning } from "@/components/dashboard/phase-planning"

export default function StrategicPlanningPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Strategic Planning</h1>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="okrs">OKRs</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="testing">Testing Lab</TabsTrigger>
          <TabsTrigger value="phases">Phase Planning</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <StrategicPlanning />
        </TabsContent>

        <TabsContent value="okrs" className="mt-6">
          <OKRManagement />
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <ResourceAllocation />
        </TabsContent>

        <TabsContent value="testing" className="mt-6">
          <TestingLab />
        </TabsContent>

        <TabsContent value="phases" className="mt-6">
          <PhasePlanning />
        </TabsContent>
      </Tabs>
    </div>
  )
}

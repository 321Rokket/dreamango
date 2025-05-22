import { StrategicPlanning } from "@/components/dashboard/strategic-planning"

export default function StrategicPlanningPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Strategic Planning</h2>
      </div>
      <StrategicPlanning />
    </div>
  )
}

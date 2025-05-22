"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Calendar, ArrowRight, CheckCircle, Clock } from "lucide-react"

export function PhasePlanning() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Phase Planning</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Current: Phase 1
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              Timeline View
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="current">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="current">Current Phase</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="current" className="pt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Phase 1: Foundation</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    Jul 1, 2024 - Dec 31, 2024
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">In Progress</Badge>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Key Milestones</h4>
                <div className="space-y-2">
                  {[
                    { title: "Platform Architecture Design", date: "Jul 15, 2024", status: "Completed" },
                    { title: "Content Strategy Framework", date: "Aug 10, 2024", status: "Completed" },
                    { title: "Creator Onboarding System", date: "Sep 30, 2024", status: "In Progress" },
                    { title: "Analytics Dashboard v1", date: "Oct 15, 2024", status: "Planned" },
                    { title: "Initial Market Testing", date: "Nov 30, 2024", status: "Planned" },
                  ].map((milestone, index) => (
                    <div key={index} className="flex items-center justify-between rounded-md border p-3">
                      <div className="flex items-center gap-2">
                        {milestone.status === "Completed" ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : milestone.status === "In Progress" ? (
                          <Clock className="h-5 w-5 text-blue-500" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-slate-300" />
                        )}
                        <div>
                          <div className="font-medium">{milestone.title}</div>
                          <div className="text-xs text-muted-foreground">{milestone.date}</div>
                        </div>
                      </div>
                      <Badge
                        className={
                          milestone.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : milestone.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-slate-100 text-slate-800"
                        }
                      >
                        {milestone.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Overall Phase Progress: 45%</div>
                <Button>
                  Phase Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="upcoming" className="pt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Phase 2: Expansion</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    Jan 1, 2025 - Jun 30, 2025
                  </div>
                </div>
                <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-100">Planned</Badge>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Key Objectives</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 rounded-md border p-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Scale creator ecosystem by 200%</span>
                  </li>
                  <li className="flex items-center gap-2 rounded-md border p-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Launch advanced monetization tools</span>
                  </li>
                  <li className="flex items-center gap-2 rounded-md border p-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Implement AI-powered content recommendations</span>
                  </li>
                  <li className="flex items-center gap-2 rounded-md border p-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Expand to 3 new market segments</span>
                  </li>
                </ul>
              </div>

              <Button variant="outline" className="w-full">
                View Phase 2 Planning Details
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="completed" className="pt-4">
            <div className="flex items-center justify-center p-8 text-center text-muted-foreground">
              <div>
                <p>No completed phases yet.</p>
                <p className="text-sm">Phase 1 is the initial phase of the project.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

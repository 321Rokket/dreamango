import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Download, Filter, Plus } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="generated">
        <TabsList>
          <TabsTrigger value="generated">Generated Reports</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
          <TabsTrigger value="custom">Custom Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="generated" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recently Generated Reports</CardTitle>
              <CardDescription>View and download your recently generated reports</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Generated</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Q1 Performance Summary",
                      type: "PDF",
                      date: "Apr 1, 2023",
                      size: "2.4 MB",
                    },
                    {
                      name: "March Campaign Analysis",
                      type: "Excel",
                      date: "Mar 31, 2023",
                      size: "4.8 MB",
                    },
                    {
                      name: "Content Engagement Metrics",
                      type: "PDF",
                      date: "Mar 15, 2023",
                      size: "1.2 MB",
                    },
                    {
                      name: "Audience Growth Report",
                      type: "CSV",
                      date: "Mar 1, 2023",
                      size: "3.5 MB",
                    },
                    {
                      name: "Conversion Funnel Analysis",
                      type: "PDF",
                      date: "Feb 28, 2023",
                      size: "5.1 MB",
                    },
                  ].map((report, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{report.name}</TableCell>
                      <TableCell>{report.type}</TableCell>
                      <TableCell>{report.date}</TableCell>
                      <TableCell>{report.size}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
              <CardDescription>Manage your recurring report schedules</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report Name</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Next Run</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Weekly Performance Summary",
                      frequency: "Weekly",
                      next: "Apr 7, 2023",
                      recipients: "5 team members",
                    },
                    {
                      name: "Monthly Analytics Overview",
                      frequency: "Monthly",
                      next: "May 1, 2023",
                      recipients: "3 team members",
                    },
                    {
                      name: "Content Engagement Digest",
                      frequency: "Bi-weekly",
                      next: "Apr 15, 2023",
                      recipients: "2 team members",
                    },
                  ].map((report, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{report.name}</TableCell>
                      <TableCell>{report.frequency}</TableCell>
                      <TableCell>{report.next}</TableCell>
                      <TableCell>{report.recipients}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="custom" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Custom Report Templates</CardTitle>
              <CardDescription>Create and manage custom report templates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Audience Growth Analysis",
                    description: "Track audience growth across platforms with demographic breakdowns",
                  },
                  {
                    name: "Content Performance Matrix",
                    description: "Analyze content performance by type, platform, and engagement metrics",
                  },
                  {
                    name: "Conversion Journey Map",
                    description: "Visualize the full conversion funnel with drop-off points",
                  },
                  {
                    name: "Campaign ROI Calculator",
                    description: "Calculate return on investment for marketing campaigns",
                  },
                  {
                    name: "Competitor Benchmark",
                    description: "Compare key metrics against industry competitors",
                  },
                ].map((template, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md">{template.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        Generate Report
                      </Button>
                    </CardContent>
                  </Card>
                ))}

                <Card className="flex flex-col items-center justify-center border-dashed">
                  <CardContent className="pt-6 text-center">
                    <Plus className="h-8 w-8 mb-2 mx-auto text-muted-foreground" />
                    <h3 className="text-md font-medium mb-1">Create New Template</h3>
                    <p className="text-sm text-muted-foreground mb-4">Design a custom report template</p>
                    <Button variant="outline" size="sm">
                      Create Template
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

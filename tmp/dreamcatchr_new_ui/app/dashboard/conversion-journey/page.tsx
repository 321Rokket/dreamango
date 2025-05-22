import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "@/components/dashboard/nivo-charts"
import { Button } from "@/components/ui/button"
import { Download, Filter, RefreshCw } from "lucide-react"

export default function ConversionJourneyPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Conversion Journey</h1>
          <p className="text-muted-foreground">
            Track and optimize your customer conversion funnel from awareness to purchase
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="funnel">Funnel Analysis</TabsTrigger>
          <TabsTrigger value="touchpoints">Touchpoints</TabsTrigger>
          <TabsTrigger value="optimization">Optimization</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.24%</div>
                <p className="text-xs text-muted-foreground">+0.5% from last month</p>
                <div className="mt-4 h-1 w-full rounded-full bg-muted">
                  <div className="h-1 w-1/3 rounded-full bg-primary"></div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Journey Length</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5.2 days</div>
                <p className="text-xs text-muted-foreground">-0.8 days from last month</p>
                <div className="mt-4 h-1 w-full rounded-full bg-muted">
                  <div className="h-1 w-1/2 rounded-full bg-primary"></div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42.8%</div>
                <p className="text-xs text-muted-foreground">-3.2% from last month</p>
                <div className="mt-4 h-1 w-full rounded-full bg-muted">
                  <div className="h-1 w-2/5 rounded-full bg-primary"></div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R 458.92</div>
                <p className="text-xs text-muted-foreground">+R 32.14 from last month</p>
                <div className="mt-4 h-1 w-full rounded-full bg-muted">
                  <div className="h-1 w-3/4 rounded-full bg-primary"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Conversion Trends</CardTitle>
                <CardDescription>Daily conversion rates over the past 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <LineChart />
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Conversion by Channel</CardTitle>
                <CardDescription>Which channels drive the most conversions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <PieChart />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Conversion by Device</CardTitle>
                <CardDescription>Conversion rates across different devices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <BarChart />
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Funnel Visualization</CardTitle>
                <CardDescription>Customer journey from awareness to purchase</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <div className="relative">
                      <div className="flex flex-col items-center">
                        <div className="w-full bg-blue-100 p-4 rounded-t-lg text-center">
                          <div className="font-bold">Awareness</div>
                          <div className="text-2xl font-bold">12,450</div>
                        </div>
                        <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-t-[20px] border-t-blue-100"></div>

                        <div className="w-[90%] bg-blue-200 p-4 text-center">
                          <div className="font-bold">Interest</div>
                          <div className="text-2xl font-bold">8,320</div>
                        </div>
                        <div className="w-0 h-0 border-l-[36px] border-l-transparent border-r-[36px] border-r-transparent border-t-[20px] border-t-blue-200"></div>

                        <div className="w-[80%] bg-blue-300 p-4 text-center">
                          <div className="font-bold">Consideration</div>
                          <div className="text-2xl font-bold">4,560</div>
                        </div>
                        <div className="w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-t-[20px] border-t-blue-300"></div>

                        <div className="w-[70%] bg-blue-400 p-4 text-center">
                          <div className="font-bold">Intent</div>
                          <div className="text-2xl font-bold">2,180</div>
                        </div>
                        <div className="w-0 h-0 border-l-[28px] border-l-transparent border-r-[28px] border-r-transparent border-t-[20px] border-t-blue-400"></div>

                        <div className="w-[60%] bg-blue-500 p-4 rounded-b-lg text-center text-white">
                          <div className="font-bold">Purchase</div>
                          <div className="text-2xl font-bold">980</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="funnel" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Funnel Analysis</CardTitle>
              <CardDescription>Breakdown of customer journey stages and drop-off points</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] flex items-center justify-center">
                <div className="w-full max-w-4xl">
                  <div className="grid grid-cols-5 gap-4">
                    <div className="space-y-2">
                      <div className="bg-blue-100 p-4 rounded-lg text-center h-[300px] flex flex-col justify-between">
                        <div className="font-bold">Awareness</div>
                        <div>
                          <div className="text-3xl font-bold">12,450</div>
                          <div className="text-sm text-muted-foreground">Total visitors</div>
                        </div>
                        <div className="text-sm">100%</div>
                      </div>
                      <div className="bg-blue-50 p-2 rounded text-center text-sm">
                        <div>4,130 drop-offs</div>
                        <div className="text-muted-foreground">33.2% lost</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-blue-200 p-4 rounded-lg text-center h-[250px] flex flex-col justify-between mt-[50px]">
                        <div className="font-bold">Interest</div>
                        <div>
                          <div className="text-3xl font-bold">8,320</div>
                          <div className="text-sm text-muted-foreground">Engaged users</div>
                        </div>
                        <div className="text-sm">66.8%</div>
                      </div>
                      <div className="bg-blue-50 p-2 rounded text-center text-sm">
                        <div>3,760 drop-offs</div>
                        <div className="text-muted-foreground">45.2% lost</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-blue-300 p-4 rounded-lg text-center h-[200px] flex flex-col justify-between mt-[100px]">
                        <div className="font-bold">Consideration</div>
                        <div>
                          <div className="text-3xl font-bold">4,560</div>
                          <div className="text-sm text-muted-foreground">Product views</div>
                        </div>
                        <div className="text-sm">36.6%</div>
                      </div>
                      <div className="bg-blue-50 p-2 rounded text-center text-sm">
                        <div>2,380 drop-offs</div>
                        <div className="text-muted-foreground">52.2% lost</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-blue-400 p-4 rounded-lg text-center h-[150px] flex flex-col justify-between mt-[150px]">
                        <div className="font-bold">Intent</div>
                        <div>
                          <div className="text-3xl font-bold">2,180</div>
                          <div className="text-sm text-muted-foreground">Add to cart</div>
                        </div>
                        <div className="text-sm">17.5%</div>
                      </div>
                      <div className="bg-blue-50 p-2 rounded text-center text-sm">
                        <div>1,200 drop-offs</div>
                        <div className="text-muted-foreground">55.0% lost</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-blue-500 p-4 rounded-lg text-center h-[100px] flex flex-col justify-between mt-[200px] text-white">
                        <div className="font-bold">Purchase</div>
                        <div>
                          <div className="text-3xl font-bold">980</div>
                          <div className="text-sm text-blue-100">Conversions</div>
                        </div>
                        <div className="text-sm">7.9%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="touchpoints" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Touchpoint Effectiveness</CardTitle>
                <CardDescription>Impact of different touchpoints on conversion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <BarChart />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Channel Attribution</CardTitle>
                <CardDescription>Which channels contribute most to conversions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <PieChart />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Rate Optimization</CardTitle>
              <CardDescription>Opportunities to improve conversion rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <LineChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

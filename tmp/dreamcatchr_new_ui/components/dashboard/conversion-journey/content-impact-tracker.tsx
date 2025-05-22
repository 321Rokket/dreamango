import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, TrendingUp, Activity, Zap, ArrowRight } from "lucide-react"

const ContentImpactTracker = () => {
  // Sample data for viral content performance
  const viralHitData = [
    { week: "W1", rate: 8 },
    { week: "W2", rate: 12 },
    { week: "W3", rate: 10 },
    { week: "W4", rate: 15 },
    { week: "W5", rate: 22 },
    { week: "W6", rate: 28 },
    { week: "W7", rate: 25 },
    { week: "W8", rate: 32 },
  ]

  // Sample data for content categories
  const categoryData = [
    { name: "Life Hacks", value: 38 },
    { name: "Tech Tips", value: 25 },
    { name: "Culture", value: 42 },
    { name: "Behind Scenes", value: 30 },
    { name: "Tutorials", value: 18 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Zap className="mr-2 h-5 w-5 text-purple-500" />
          Content Impact Tracker
        </CardTitle>
        <CardDescription>Measuring cultural impact and viral content performance</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="viral">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="viral">Viral Metrics</TabsTrigger>
            <TabsTrigger value="cultural">Cultural Impact</TabsTrigger>
            <TabsTrigger value="sentiment">Brand Sentiment</TabsTrigger>
          </TabsList>

          <TabsContent value="viral" className="mt-4">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-sm font-medium">Viral Hit Rate</div>
                  <div className="text-2xl font-bold">32%</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-600">+86%</div>
                  <div className="text-xs text-muted-foreground">vs. last quarter</div>
                </div>
              </div>

              <div className="h-40 bg-slate-100 rounded flex items-center justify-center">
                <span className="text-slate-400">Viral Hit Rate Chart</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Share Rate
                    </span>
                    <span className="font-medium">18.3%</span>
                  </div>
                  <Progress value={18.3} className="h-1" />
                  <div className="text-xs text-green-600">+4.2%</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center">
                      <Activity className="h-3 w-3 mr-1" />
                      Remix Rate
                    </span>
                    <span className="font-medium">11.7%</span>
                  </div>
                  <Progress value={11.7} className="h-1" />
                  <div className="text-xs text-green-600">+2.8%</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      Comment Rate
                    </span>
                    <span className="font-medium">7.9%</span>
                  </div>
                  <Progress value={7.9} className="h-1" />
                  <div className="text-xs text-green-600">+1.5%</div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cultural" className="mt-4">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-sm font-medium">Cultural Relevance Score</div>
                  <div className="text-2xl font-bold">72/100</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-600">+12</div>
                  <div className="text-xs text-muted-foreground">vs. last quarter</div>
                </div>
              </div>

              <div className="h-40 bg-slate-100 rounded flex items-center justify-center">
                <span className="text-slate-400">Cultural Relevance Chart</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border p-3">
                  <h4 className="text-sm font-medium">Top Cultural Moments</h4>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Load Shedding Challenge</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Trending
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span>Freedom Day Dance-Off</span>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        Viral
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span>Connectivity Heroes</span>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        Growing
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-3">
                  <h4 className="text-sm font-medium">Community Engagement</h4>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>UGC Submission Rate</span>
                      <span className="font-medium">28.3%</span>
                    </div>
                    <Progress value={28.3} className="h-1" />

                    <div className="flex items-center justify-between text-xs">
                      <span>Challenge Participation</span>
                      <span className="font-medium">42.7%</span>
                    </div>
                    <Progress value={42.7} className="h-1" />

                    <div className="flex items-center justify-between text-xs">
                      <span>Hashtag Usage</span>
                      <span className="font-medium">65.1%</span>
                    </div>
                    <Progress value={65.1} className="h-1" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sentiment" className="mt-4">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-sm font-medium">Brand Sentiment</div>
                  <div className="text-2xl font-bold">+68</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-600">+23</div>
                  <div className="text-xs text-muted-foreground">vs. pre-campaign</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-md bg-green-50 p-2 text-center">
                  <div className="text-xs font-medium text-green-700">Positive</div>
                  <div className="text-lg font-bold text-green-800">72%</div>
                  <div className="text-xs text-green-600">+18%</div>
                </div>
                <div className="rounded-md bg-blue-50 p-2 text-center">
                  <div className="text-xs font-medium text-blue-700">Neutral</div>
                  <div className="text-lg font-bold text-blue-800">24%</div>
                  <div className="text-xs text-blue-600">-11%</div>
                </div>
                <div className="rounded-md bg-red-50 p-2 text-center">
                  <div className="text-xs font-medium text-red-700">Negative</div>
                  <div className="text-lg font-bold text-red-800">4%</div>
                  <div className="text-xs text-red-600">-7%</div>
                </div>
              </div>

              <div className="rounded-lg border p-3">
                <h4 className="text-sm font-medium">Brand Association Shifts</h4>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>"Innovative"</span>
                    <div className="flex items-center">
                      <span className="font-medium">64%</span>
                      <ArrowRight className="h-3 w-3 mx-1" />
                      <span className="font-medium text-green-600">78%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span>"Relatable"</span>
                    <div className="flex items-center">
                      <span className="font-medium">42%</span>
                      <ArrowRight className="h-3 w-3 mx-1" />
                      <span className="font-medium text-green-600">68%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span>"Part of my life"</span>
                    <div className="flex items-center">
                      <span className="font-medium">37%</span>
                      <ArrowRight className="h-3 w-3 mx-1" />
                      <span className="font-medium text-green-600">52%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span>"Just like me"</span>
                    <div className="flex items-center">
                      <span className="font-medium">29%</span>
                      <ArrowRight className="h-3 w-3 mx-1" />
                      <span className="font-medium text-green-600">45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="ml-auto">
          View Detailed Analysis
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ContentImpactTracker

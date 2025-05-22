import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Zap, Globe, Video, Check } from "lucide-react"

const OpportunityDetector = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Zap className="mr-2 h-5 w-5 text-amber-500" />
          Opportunity Detector
        </CardTitle>
        <CardDescription>AI-detected opportunities aligned with viral content strategy</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="opportunity1">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="opportunity1">Trending Topics</TabsTrigger>
            <TabsTrigger value="opportunity2">Content Formula</TabsTrigger>
            <TabsTrigger value="opportunity3">Cross-Platform</TabsTrigger>
          </TabsList>

          <TabsContent value="opportunity1" className="mt-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-red-500" />
                    "Load Shedding Life Hacks" Trend
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Content related to power outage workarounds showing 5.8x higher engagement and 3.2x higher sharing
                    rate than other content
                  </p>
                </div>
              </div>

              <div className="mt-3 h-32 bg-slate-100 rounded flex items-center justify-center">
                <span className="text-slate-400">Trend Analysis Chart</span>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  High Impact
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Low Effort
                </Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  Culturally Relevant
                </Badge>
              </div>

              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">Create 3-5 practical mobile data-saving tips during outages</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">Partner with nano-influencer electricians for creative solutions</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">Launch "Powered by Telkom" challenge for user-generated workarounds</p>
                </div>
              </div>

              <Button className="mt-4 w-full" size="sm">
                Add to Content Calendar
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="opportunity2" className="mt-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium flex items-center">
                    <Video className="h-4 w-4 mr-2 text-blue-500" />
                    "Day in the Life" Content Formula Success
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Behind-the-scenes, day-in-the-life format videos showing 3.2x higher completion rates and 2.7x
                    higher follower conversion
                  </p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="aspect-video bg-slate-100 rounded flex items-center justify-center">
                  <span className="text-xs text-slate-400">Example 1</span>
                </div>
                <div className="aspect-video bg-slate-100 rounded flex items-center justify-center">
                  <span className="text-xs text-slate-400">Example 2</span>
                </div>
                <div className="aspect-video bg-slate-100 rounded flex items-center justify-center">
                  <span className="text-xs text-slate-400">Example 3</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  High Impact
                </Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  High Virality
                </Badge>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  Medium Effort
                </Badge>
              </div>

              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">
                    Create "Day in Telkom Engineer's Life" series highlighting infrastructure work
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">Show "Behind the Scenes" of fiber installations in different communities</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">Develop template for consistency while allowing authentic moments</p>
                </div>
              </div>

              <Button className="mt-4 w-full" size="sm">
                Add to Content Calendar
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="opportunity3" className="mt-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-purple-500" />
                    Cross-Platform Amplification Opportunity
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    TikTok content repurposed with platform-specific modifications performing 40% better than
                    platform-specific originals
                  </p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-4 gap-1">
                <div className="rounded bg-slate-100 p-2 text-center">
                  <div className="text-xs font-medium">TikTok</div>
                  <div className="mt-1 text-sm font-bold text-purple-700">5.2%</div>
                  <div className="text-xs text-green-600">Original</div>
                </div>
                <div className="rounded bg-slate-100 p-2 text-center">
                  <div className="text-xs font-medium">Instagram</div>
                  <div className="mt-1 text-sm font-bold text-purple-700">4.8%</div>
                  <div className="text-xs text-green-600">+40%</div>
                </div>
                <div className="rounded bg-slate-100 p-2 text-center">
                  <div className="text-xs font-medium">YouTube</div>
                  <div className="mt-1 text-sm font-bold text-purple-700">3.9%</div>
                  <div className="text-xs text-green-600">+45%</div>
                </div>
                <div className="rounded bg-slate-100 p-2 text-center">
                  <div className="text-xs font-medium">Facebook</div>
                  <div className="mt-1 text-sm font-bold text-purple-700">3.2%</div>
                  <div className="text-xs text-green-600">+38%</div>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  High Impact
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Low Effort
                </Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  Resource Efficient
                </Badge>
              </div>

              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">
                    Implement "Create Once, Distribute Everywhere" workflow with platform-specific edits
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">Test vertical vs horizontal formats (same content) across platforms</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">Develop templated intro/outro segments for platform optimization</p>
                </div>
              </div>

              <Button className="mt-4 w-full" size="sm">
                Create Cross-Platform Strategy
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default OpportunityDetector

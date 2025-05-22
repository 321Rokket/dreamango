import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Instagram, Youtube, Facebook, PieChart, Smartphone, Monitor, ArrowUpRight } from "lucide-react"

// TikTok icon custom component
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
)

const CrossPlatformPerformance = () => {
  // Sample data for cross-platform performance
  const platformData = [
    { day: "Mon", tiktok: 5.2, instagram: 3.8, youtube: 2.6, facebook: 2.1 },
    { day: "Tue", tiktok: 5.5, instagram: 4.0, youtube: 2.7, facebook: 2.3 },
    { day: "Wed", tiktok: 5.1, instagram: 3.9, youtube: 2.5, facebook: 2.0 },
    { day: "Thu", tiktok: 5.7, instagram: 4.2, youtube: 2.9, facebook: 2.5 },
    { day: "Fri", tiktok: 6.2, instagram: 4.5, youtube: 3.1, facebook: 2.7 },
    { day: "Sat", tiktok: 6.8, instagram: 4.9, youtube: 3.4, facebook: 2.9 },
    { day: "Sun", tiktok: 7.2, instagram: 5.2, youtube: 3.6, facebook: 3.1 },
  ]

  // Sample data for content adaptation performance
  const contentAdaptationData = [
    {
      id: 1,
      title: "Power Backup Life Hacks",
      original: "TikTok",
      adaptations: [
        { platform: "Instagram", performance: 92 },
        { platform: "YouTube", performance: 87 },
        { platform: "Facebook", performance: 75 },
      ],
    },
    {
      id: 2,
      title: "Data Bundle Explainer",
      original: "YouTube",
      adaptations: [
        { platform: "TikTok", performance: 88 },
        { platform: "Instagram", performance: 85 },
        { platform: "Facebook", performance: 72 },
      ],
    },
    {
      id: 3,
      title: "Network Coverage Dance",
      original: "Instagram",
      adaptations: [
        { platform: "TikTok", performance: 95 },
        { platform: "YouTube", performance: 82 },
        { platform: "Facebook", performance: 68 },
      ],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <PieChart className="mr-2 h-5 w-5 text-blue-500" />
          Cross-Platform Performance
        </CardTitle>
        <CardDescription>Analyzing content performance across social platforms</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-3">Engagement Rate by Platform</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={platformData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="tiktok" stroke="#FF0050" strokeWidth={2} name="TikTok" />
                <Line type="monotone" dataKey="instagram" stroke="#E1306C" strokeWidth={2} name="Instagram" />
                <Line type="monotone" dataKey="youtube" stroke="#FF0000" strokeWidth={2} name="YouTube" />
                <Line type="monotone" dataKey="facebook" stroke="#1877F2" strokeWidth={2} name="Facebook" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <div className="rounded-lg border p-3 flex flex-col items-center">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-pink-100 text-pink-600 mb-2">
              <TikTokIcon />
            </div>
            <div className="text-sm font-medium">TikTok</div>
            <div className="text-2xl font-bold">7.2%</div>
            <div className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +12.5%
            </div>
            <Progress value={72} className="h-1 mt-2 w-full" />
          </div>

          <div className="rounded-lg border p-3 flex flex-col items-center">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-600 mb-2">
              <Instagram className="h-4 w-4" />
            </div>
            <div className="text-sm font-medium">Instagram</div>
            <div className="text-2xl font-bold">5.2%</div>
            <div className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +8.3%
            </div>
            <Progress value={52} className="h-1 mt-2 w-full" />
          </div>

          <div className="rounded-lg border p-3 flex flex-col items-center">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600 mb-2">
              <Youtube className="h-4 w-4" />
            </div>
            <div className="text-sm font-medium">YouTube</div>
            <div className="text-2xl font-bold">3.6%</div>
            <div className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +5.9%
            </div>
            <Progress value={36} className="h-1 mt-2 w-full" />
          </div>

          <div className="rounded-lg border p-3 flex flex-col items-center">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 mb-2">
              <Facebook className="h-4 w-4" />
            </div>
            <div className="text-sm font-medium">Facebook</div>
            <div className="text-2xl font-bold">3.1%</div>
            <div className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +3.3%
            </div>
            <Progress value={31} className="h-1 mt-2 w-full" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">Content Adaptation Performance</h3>
          <div className="space-y-3">
            {contentAdaptationData.map((content) => (
              <div key={content.id} className="rounded-lg border p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{content.title}</div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    Original: {content.original}
                  </Badge>
                </div>
                <div className="space-y-2">
                  {content.adaptations.map((adaptation, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="text-sm">{adaptation.platform}</div>
                      <div className="flex items-center">
                        <div className="w-32 mr-2">
                          <Progress value={adaptation.performance} className="h-2" />
                        </div>
                        <div className="text-sm font-medium">{adaptation.performance}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border p-3">
            <h4 className="text-sm font-medium mb-2">Device Performance</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Smartphone className="h-4 w-4 mr-2 text-slate-500" />
                  <span className="text-sm">Mobile</span>
                </div>
                <div className="text-sm font-medium">78%</div>
              </div>
              <Progress value={78} className="h-1.5" />

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Monitor className="h-4 w-4 mr-2 text-slate-500" />
                  <span className="text-sm">Desktop</span>
                </div>
                <div className="text-sm font-medium">22%</div>
              </div>
              <Progress value={22} className="h-1.5" />
            </div>
          </div>

          <div className="rounded-lg border p-3">
            <h4 className="text-sm font-medium mb-2">Top Performing Content Types</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Short-form Video</span>
                <Badge className="bg-green-100 text-green-800">High Impact</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>User-generated Content</span>
                <Badge className="bg-green-100 text-green-800">High Impact</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Interactive Polls/Quizzes</span>
                <Badge className="bg-blue-100 text-blue-800">Medium Impact</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Long-form Educational</span>
                <Badge className="bg-blue-100 text-blue-800">Medium Impact</Badge>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CrossPlatformPerformance

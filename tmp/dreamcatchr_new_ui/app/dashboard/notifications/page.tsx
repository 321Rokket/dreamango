import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, MessageSquare, AlertTriangle, CheckCircle, Clock, Settings } from "lucide-react"

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_250px]">
        <div className="space-y-6">
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="read">Read</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4 mt-4">
              {[
                {
                  icon: <Bell className="h-5 w-5 text-blue-500" />,
                  title: "New feature available",
                  description: "The analytics dashboard has been updated with new visualization options.",
                  time: "Just now",
                  unread: true,
                },
                {
                  icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
                  title: "Campaign performance alert",
                  description: "Your 'Summer Promotion' campaign is performing below target metrics.",
                  time: "2 hours ago",
                  unread: true,
                },
                {
                  icon: <CheckCircle className="h-5 w-5 text-green-500" />,
                  title: "Report generated successfully",
                  description: "Your monthly performance report has been generated and is ready to view.",
                  time: "Yesterday",
                  unread: false,
                },
                {
                  icon: <MessageSquare className="h-5 w-5 text-purple-500" />,
                  title: "New comment on your post",
                  description: "John Smith commented on your latest content piece.",
                  time: "2 days ago",
                  unread: false,
                },
                {
                  icon: <Clock className="h-5 w-5 text-orange-500" />,
                  title: "Scheduled maintenance",
                  description: "The platform will be undergoing maintenance on April 15th from 2-4am.",
                  time: "3 days ago",
                  unread: false,
                },
              ].map((notification, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 rounded-lg border p-4 ${notification.unread ? "bg-muted/50" : ""}`}
                >
                  <div className="mt-1">{notification.icon}</div>
                  <div className="flex-1">
                    <h3 className={`text-sm font-medium ${notification.unread ? "font-semibold" : ""}`}>
                      {notification.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                  </div>
                  {notification.unread && <div className="h-2 w-2 rounded-full bg-blue-500"></div>}
                </div>
              ))}
            </TabsContent>

            <TabsContent value="unread" className="space-y-4 mt-4">
              {[
                {
                  icon: <Bell className="h-5 w-5 text-blue-500" />,
                  title: "New feature available",
                  description: "The analytics dashboard has been updated with new visualization options.",
                  time: "Just now",
                },
                {
                  icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
                  title: "Campaign performance alert",
                  description: "Your 'Summer Promotion' campaign is performing below target metrics.",
                  time: "2 hours ago",
                },
              ].map((notification, i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg border p-4 bg-muted/50">
                  <div className="mt-1">{notification.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold">{notification.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="read" className="space-y-4 mt-4">
              {[
                {
                  icon: <CheckCircle className="h-5 w-5 text-green-500" />,
                  title: "Report generated successfully",
                  description: "Your monthly performance report has been generated and is ready to view.",
                  time: "Yesterday",
                },
                {
                  icon: <MessageSquare className="h-5 w-5 text-purple-500" />,
                  title: "New comment on your post",
                  description: "John Smith commented on your latest content piece.",
                  time: "2 days ago",
                },
                {
                  icon: <Clock className="h-5 w-5 text-orange-500" />,
                  title: "Scheduled maintenance",
                  description: "The platform will be undergoing maintenance on April 15th from 2-4am.",
                  time: "3 days ago",
                },
              ].map((notification, i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="mt-1">{notification.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{notification.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                <p className="text-xs text-muted-foreground">Receive notifications via email for important updates</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <Switch id="push-notifications" defaultChecked />
                </div>
                <p className="text-xs text-muted-foreground">Receive notifications in your browser or mobile app</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="performance-alerts">Performance Alerts</Label>
                  <Switch id="performance-alerts" defaultChecked />
                </div>
                <p className="text-xs text-muted-foreground">Get notified when metrics drop below targets</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="system-notifications">System Updates</Label>
                  <Switch id="system-notifications" />
                </div>
                <p className="text-xs text-muted-foreground">Notifications about system maintenance and updates</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="marketing-notifications">Marketing Tips</Label>
                  <Switch id="marketing-notifications" />
                </div>
                <p className="text-xs text-muted-foreground">Receive tips and best practices for your campaigns</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

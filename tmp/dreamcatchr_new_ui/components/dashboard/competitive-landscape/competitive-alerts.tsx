"use client"

import { useState } from "react"
import { AlertCircle, ArrowUpRight, Bell, Eye, MessageSquare, ThumbsUp, Zap } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CompetitiveAlerts() {
  // Sample alert data
  const alerts = [
    {
      id: 1,
      type: "campaign",
      severity: "high",
      competitor: "Vodacom",
      logo: "/placeholder.svg?height=40&width=40&text=VC",
      title: "New Campaign Launch",
      description: "Vodacom has launched a new video campaign targeting your core audience segment.",
      date: "2 hours ago",
      metrics: {
        reach: "250K",
        engagement: "4.8%",
        sentiment: "Positive",
      },
      impact: "High",
      recommendation: "Consider a response campaign highlighting your unique value proposition.",
    },
    {
      id: 2,
      type: "strategy",
      severity: "medium",
      competitor: "MTN",
      logo: "/placeholder.svg?height=40&width=40&text=MTN",
      title: "Content Strategy Shift",
      description: "MTN has increased their video content output by 35% in the last 30 days.",
      date: "1 day ago",
      metrics: {
        contentIncrease: "35%",
        topFormat: "Short-form video",
        performance: "+22% engagement",
      },
      impact: "Medium",
      recommendation: "Evaluate your content mix and consider increasing video content.",
    },
    {
      id: 3,
      type: "threat",
      severity: "high",
      competitor: "Cell C",
      logo: "/placeholder.svg?height=40&width=40&text=CC",
      title: "Creator Partnership",
      description: "Cell C has partnered with a major influencer (2.5M followers) in your industry.",
      date: "3 days ago",
      metrics: {
        creatorFollowers: "2.5M",
        audienceOverlap: "65%",
        estimatedReach: "1.8M",
      },
      impact: "High",
      recommendation: "Identify alternative creator partnerships to maintain share of voice.",
    },
    {
      id: 4,
      type: "opportunity",
      severity: "medium",
      competitor: "Vodacom",
      logo: "/placeholder.svg?height=40&width=40&text=VC",
      title: "Negative Sentiment Spike",
      description: "Vodacom is experiencing a 28% increase in negative sentiment due to service issues.",
      date: "5 days ago",
      metrics: {
        sentimentChange: "-28%",
        issueType: "Service quality",
        mentionVolume: "+45%",
      },
      impact: "Medium",
      recommendation: "Highlight your service reliability in upcoming content.",
    },
  ]

  // State for viewed alerts
  const [viewedAlerts, setViewedAlerts] = useState<number[]>([])

  const markAsViewed = (alertId: number) => {
    if (!viewedAlerts.includes(alertId)) {
      setViewedAlerts([...viewedAlerts, alertId])
    }
  }

  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-danger text-danger-foreground"
      case "medium":
        return "bg-warning text-warning-foreground"
      case "low":
        return "bg-info text-info-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  // Get type icon
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "campaign":
        return <Zap className="h-4 w-4" />
      case "strategy":
        return <ArrowUpRight className="h-4 w-4" />
      case "threat":
        return <AlertCircle className="h-4 w-4" />
      case "opportunity":
        return <ThumbsUp className="h-4 w-4" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="all">All Alerts</TabsTrigger>
        <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
        <TabsTrigger value="threats">Threats</TabsTrigger>
        <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
      </TabsList>

      <TabsContent value="all" className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {alerts.map((alert) => (
            <Card
              key={alert.id}
              className={`border shadow-sm transition-opacity ${viewedAlerts.includes(alert.id) ? "opacity-70" : ""}`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge className={getSeverityColor(alert.severity)}>
                      {getTypeIcon(alert.type)}
                      <span className="ml-1">{alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}</span>
                    </Badge>
                    <span className="text-xs text-muted-foreground">{alert.date}</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => markAsViewed(alert.id)}>
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">Mark as viewed</span>
                  </Button>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={alert.logo} alt={alert.competitor} />
                    <AvatarFallback>{alert.competitor.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-sm font-medium">{alert.title}</CardTitle>
                    <CardDescription className="text-xs">{alert.competitor}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{alert.description}</p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-xs font-medium text-muted-foreground">Key Metrics:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(alert.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-2 pt-0">
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-muted-foreground">Potential Impact:</span>
                  <Badge variant={alert.impact === "High" ? "destructive" : "outline"}>{alert.impact}</Badge>
                </div>
                <div className="text-xs">
                  <span className="font-medium">Recommendation:</span>
                  <p className="mt-1 text-muted-foreground">{alert.recommendation}</p>
                </div>
                <div className="mt-2 flex w-full justify-end">
                  <Button size="sm" variant="outline" className="text-xs">
                    <MessageSquare className="mr-1 h-3 w-3" />
                    Create Response
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="campaigns" className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {alerts
            .filter((alert) => alert.type === "campaign")
            .map((alert) => (
              <Card
                key={alert.id}
                className={`border shadow-sm transition-opacity ${viewedAlerts.includes(alert.id) ? "opacity-70" : ""}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge className={getSeverityColor(alert.severity)}>
                        {getTypeIcon(alert.type)}
                        <span className="ml-1">Campaign</span>
                      </Badge>
                      <span className="text-xs text-muted-foreground">{alert.date}</span>
                    </div>
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => markAsViewed(alert.id)}>
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Mark as viewed</span>
                    </Button>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={alert.logo} alt={alert.competitor} />
                      <AvatarFallback>{alert.competitor.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-sm font-medium">{alert.title}</CardTitle>
                      <CardDescription className="text-xs">{alert.competitor}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{alert.description}</p>
                  <div className="mt-4 space-y-2">
                    <h4 className="text-xs font-medium text-muted-foreground">Key Metrics:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {Object.entries(alert.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-2 pt-0">
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-muted-foreground">Potential Impact:</span>
                    <Badge variant={alert.impact === "High" ? "destructive" : "outline"}>{alert.impact}</Badge>
                  </div>
                  <div className="text-xs">
                    <span className="font-medium">Recommendation:</span>
                    <p className="mt-1 text-muted-foreground">{alert.recommendation}</p>
                  </div>
                  <div className="mt-2 flex w-full justify-end">
                    <Button size="sm" variant="outline" className="text-xs">
                      <MessageSquare className="mr-1 h-3 w-3" />
                      Create Response
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
        </div>
      </TabsContent>

      <TabsContent value="threats" className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {alerts
            .filter((alert) => alert.type === "threat")
            .map((alert) => (
              <Card
                key={alert.id}
                className={`border shadow-sm transition-opacity ${viewedAlerts.includes(alert.id) ? "opacity-70" : ""}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge className={getSeverityColor(alert.severity)}>
                        {getTypeIcon(alert.type)}
                        <span className="ml-1">Threat</span>
                      </Badge>
                      <span className="text-xs text-muted-foreground">{alert.date}</span>
                    </div>
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => markAsViewed(alert.id)}>
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Mark as viewed</span>
                    </Button>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={alert.logo} alt={alert.competitor} />
                      <AvatarFallback>{alert.competitor.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-sm font-medium">{alert.title}</CardTitle>
                      <CardDescription className="text-xs">{alert.competitor}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{alert.description}</p>
                  <div className="mt-4 space-y-2">
                    <h4 className="text-xs font-medium text-muted-foreground">Key Metrics:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {Object.entries(alert.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-2 pt-0">
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-muted-foreground">Potential Impact:</span>
                    <Badge variant={alert.impact === "High" ? "destructive" : "outline"}>{alert.impact}</Badge>
                  </div>
                  <div className="text-xs">
                    <span className="font-medium">Recommendation:</span>
                    <p className="mt-1 text-muted-foreground">{alert.recommendation}</p>
                  </div>
                  <div className="mt-2 flex w-full justify-end">
                    <Button size="sm" variant="outline" className="text-xs">
                      <MessageSquare className="mr-1 h-3 w-3" />
                      Create Response
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
        </div>
      </TabsContent>

      <TabsContent value="opportunities" className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {alerts
            .filter((alert) => alert.type === "opportunity")
            .map((alert) => (
              <Card
                key={alert.id}
                className={`border shadow-sm transition-opacity ${viewedAlerts.includes(alert.id) ? "opacity-70" : ""}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-success text-success-foreground">
                        {getTypeIcon(alert.type)}
                        <span className="ml-1">Opportunity</span>
                      </Badge>
                      <span className="text-xs text-muted-foreground">{alert.date}</span>
                    </div>
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => markAsViewed(alert.id)}>
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Mark as viewed</span>
                    </Button>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={alert.logo} alt={alert.competitor} />
                      <AvatarFallback>{alert.competitor.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-sm font-medium">{alert.title}</CardTitle>
                      <CardDescription className="text-xs">{alert.competitor}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{alert.description}</p>
                  <div className="mt-4 space-y-2">
                    <h4 className="text-xs font-medium text-muted-foreground">Key Metrics:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {Object.entries(alert.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-2 pt-0">
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-muted-foreground">Potential Impact:</span>
                    <Badge variant="outline" className="bg-success/20 text-success hover:bg-success/30">
                      {alert.impact}
                    </Badge>
                  </div>
                  <div className="text-xs">
                    <span className="font-medium">Recommendation:</span>
                    <p className="mt-1 text-muted-foreground">{alert.recommendation}</p>
                  </div>
                  <div className="mt-2 flex w-full justify-end">
                    <Button size="sm" variant="outline" className="text-xs">
                      <MessageSquare className="mr-1 h-3 w-3" />
                      Create Response
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

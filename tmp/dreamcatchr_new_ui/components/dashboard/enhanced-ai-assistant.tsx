"use client"

import { CardDescription } from "@/components/ui/card"

import { cn } from "@/lib/utils"

import { useState, useRef, useEffect } from "react"
import {
  Bot,
  ChevronLeft,
  ChevronRight,
  Send,
  Mic,
  Image,
  ThumbsUp,
  ThumbsDown,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Globe,
  X,
  Zap,
  Target,
  Users,
  FileText,
  SlidersHorizontal,
  Filter,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function EnhancedAIAssistant() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [activeTab, setActiveTab] = useState("chat")
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi there! I'm your Telkom marketing assistant. How can I help you today?",
      timestamp: new Date().toISOString(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [showVoiceInput, setShowVoiceInput] = useState(false)
  const [showImageUpload, setShowImageUpload] = useState(false)
  const messagesEndRef = useRef(null)

  // Marketing-specific suggestions
  const suggestions = [
    "Analyze TikTok content performance",
    "Show data bundle usage trends",
    "Compare urban vs rural engagement",
    "Identify top performing content themes",
    "Generate content ideas for Amapiano challenge",
    "How can I improve my engagement rate?",
  ]

  // Analysis templates
  const analysisTemplates = [
    {
      id: "content-audit",
      title: "Content Audit",
      description: "Analyze content performance across channels",
      icon: <FileText className="h-4 w-4 text-blue-500" />,
    },
    {
      id: "audience-analysis",
      title: "Audience Analysis",
      description: "Detailed breakdown of audience demographics and behavior",
      icon: <Users className="h-4 w-4 text-green-500" />,
    },
    {
      id: "competitor-analysis",
      title: "Competitor Analysis",
      description: "Compare your performance against key competitors",
      icon: <Target className="h-4 w-4 text-purple-500" />,
    },
    {
      id: "campaign-planner",
      title: "Campaign Planner",
      description: "AI-powered campaign strategy and timeline",
      icon: <Lightbulb className="h-4 w-4 text-yellow-500" />,
    },
  ]

  // Quick insights for the Insights tab
  const quickInsights = [
    {
      id: "1",
      category: "opportunity",
      title: "TikTok Growth Potential",
      description: "Your TikTok engagement is 32% higher than other platforms",
      metrics: [
        { label: "Engagement Rate", value: "4.8%", change: "+1.2% MoM" },
        { label: "Follower Growth", value: "12%", change: "+5% MoM" },
      ],
    },
    {
      id: "2",
      category: "strength",
      title: "Data Bundle Campaign Success",
      description: "Weekend data bundle promotions outperforming weekday offers",
      metrics: [
        { label: "Conversion Rate", value: "8.3%", change: "+2.1% MoM" },
        { label: "Revenue Impact", value: "R2.4M", change: "+15% MoM" },
      ],
    },
  ]

  // Suggested questions by category
  const suggestedQuestions = [
    {
      category: "content",
      questions: [
        "What content types are performing best?",
        "When is the optimal time to post on TikTok?",
        "How can I improve video completion rates?",
      ],
    },
    {
      category: "audience",
      questions: [
        "Which audience segments have the highest LTV?",
        "What content resonates with Gen Z users?",
        "How does urban vs rural engagement differ?",
      ],
    },
    {
      category: "campaigns",
      questions: [
        "How effective was our last data bundle promotion?",
        "What's the optimal campaign frequency?",
        "Which call-to-action performs best?",
      ],
    },
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    setMessages([
      ...messages,
      {
        role: "user",
        content: inputValue,
        timestamp: new Date().toISOString(),
      },
    ])

    setIsTyping(true)
    setShowSuggestions(false)
    setShowVoiceInput(false)
    setShowImageUpload(false)

    // Simulate AI response with more relevant Telkom-specific content
    setTimeout(() => {
      const responses = [
        {
          content: `Based on your query about "${inputValue}", I've analyzed your TikTok content performance:`,
          buttons: [
            { label: "View detailed metrics", action: "viewMetrics" },
            { label: "Generate content ideas", action: "generateIdeas" },
          ],
          chart: "engagement",
          insights: [
            "Amapiano dance challenges: 3.8% engagement (↑32% vs avg)",
            "Township lifestyle content: 2.9% engagement (↑18% vs avg)",
            "Network reliability posts: 1.7% engagement (↓12% vs avg)",
          ],
        },
        {
          content: `I've analyzed your data bundle usage patterns for "${inputValue}":`,
          buttons: [
            { label: "View usage breakdown", action: "viewUsage" },
            { label: "Optimize bundle strategy", action: "optimizeBundles" },
          ],
          chart: "usage",
          insights: [
            "Weekend TikTok bundles: 24% increase in adoption",
            "Peak usage: Saturdays 6-9pm during load shedding windows",
            "Low-data content performs 37% better in rural areas",
          ],
        },
        {
          content: `Here's my analysis of network coverage impact on "${inputValue}":`,
          buttons: [
            { label: "View coverage map", action: "viewCoverage" },
            { label: "Optimize for low-bandwidth", action: "optimizeBandwidth" },
          ],
          chart: "coverage",
          insights: [
            "Strong correlation between 4G availability and content engagement",
            "Load shedding periods show 28% drop in video completion rates",
            "Township areas show 3.2x higher engagement with data-saving content",
          ],
        },
        {
          content: `For your query on "${inputValue}", here's my content strategy recommendation:`,
          buttons: [
            { label: "Generate content calendar", action: "generateCalendar" },
            { label: "View audience segments", action: "viewSegments" },
          ],
          chart: "strategy",
          insights: [
            "The Tswyza Show partnership: 42% higher engagement in target demographics",
            "Local cultural content outperforms generic content by 32%",
            "Short-form video (<15s) performs best during peak data usage hours",
          ],
        },
      ]

      const selectedResponse = responses[Math.floor(Math.random() * responses.length)]

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: selectedResponse.content,
          buttons: selectedResponse.buttons,
          insights: selectedResponse.insights,
          chart: selectedResponse.chart,
          timestamp: new Date().toISOString(),
        },
      ])

      setIsTyping(false)
    }, 1500)

    setInputValue("")
  }

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion)
    handleSendMessage()
  }

  const handleQuickAnalysis = (templateId) => {
    setActiveTab("chat")
    setMessages([
      ...messages,
      {
        role: "user",
        content: `Can you run a ${templateId} analysis for our marketing?`,
        timestamp: new Date().toISOString(),
      },
    ])

    setIsTyping(true)

    // Simulate analysis response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I'm preparing your ${templateId.replace(/-/g, " ")} analysis. This will be ready shortly.`,
          timestamp: new Date().toISOString(),
        },
      ])
      setIsTyping(false)
    }, 2000)
  }

  const handleButtonClick = (action) => {
    setMessages([
      ...messages,
      {
        role: "user",
        content: `I want to ${action}`,
        timestamp: new Date().toISOString(),
      },
    ])

    setIsTyping(true)

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I'm preparing your ${action.replace("view", "").replace("generate", "").replace("optimize", "")} data. This will be ready in your dashboard shortly.`,
          timestamp: new Date().toISOString(),
        },
      ])
      setIsTyping(false)
    }, 1000)
  }

  const renderChart = (chartType) => {
    switch (chartType) {
      case "engagement":
        return (
          <div className="h-24 w-full bg-blue-50 dark:bg-blue-900/20 rounded-md flex items-center justify-center">
            <BarChart className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-xs text-blue-700 dark:text-blue-300">Engagement metrics visualization</span>
          </div>
        )
      case "usage":
        return (
          <div className="h-24 w-full bg-green-50 dark:bg-green-900/20 rounded-md flex items-center justify-center">
            <PieChart className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-xs text-green-700 dark:text-green-300">Data usage breakdown</span>
          </div>
        )
      case "coverage":
        return (
          <div className="h-24 w-full bg-amber-50 dark:bg-amber-900/20 rounded-md flex items-center justify-center">
            <Globe className="h-5 w-5 text-amber-500 mr-2" />
            <span className="text-xs text-amber-700 dark:text-amber-300">Network coverage map</span>
          </div>
        )
      case "strategy":
        return (
          <div className="h-24 w-full bg-purple-50 dark:bg-purple-900/20 rounded-md flex items-center justify-center">
            <LineChart className="h-5 w-5 text-purple-500 mr-2" />
            <span className="text-xs text-purple-700 dark:text-purple-300">Content strategy forecast</span>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className={`border-l transition-all duration-300 ${isExpanded ? "w-96" : "w-12"} bg-background`}>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b p-3 bg-primary/5">
          <div className={`flex items-center gap-2 ${!isExpanded && "hidden"}`}>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-primary/10">
                <Bot className="h-4 w-4 text-primary" />
              </AvatarFallback>
            </Avatar>
            <div>
              <span className="font-medium text-sm">Telkom Assistant</span>
              <div className="text-xs text-muted-foreground">Powered by AI</div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)} className="h-8 w-8">
            {isExpanded ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {isExpanded && (
          <>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="insights">Insights</TabsTrigger>
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex-1 overflow-hidden">
              <TabsContent value="chat" className="h-full m-0">
                <div className="flex h-full flex-col">
                  <div className="flex-1 overflow-auto p-4 space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"} mb-4`}
                      >
                        {message.role === "assistant" && (
                          <Avatar className="h-8 w-8 mr-2 mt-1 flex-shrink-0">
                            <AvatarFallback className="bg-primary/10">
                              <Bot className="h-4 w-4 text-primary" />
                            </AvatarFallback>
                          </Avatar>
                        )}

                        <div className="flex flex-col max-w-[85%]">
                          <div
                            className={`rounded-lg px-4 py-2 ${
                              message.role === "assistant"
                                ? "bg-muted text-foreground rounded-tl-none"
                                : "bg-primary text-primary-foreground rounded-tr-none"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>

                            {message.chart && <div className="mt-3">{renderChart(message.chart)}</div>}

                            {message.insights && (
                              <div className="mt-3 space-y-2">
                                <div className="space-y-1.5">
                                  {message.insights.map((insight, i) => (
                                    <div key={i} className="flex items-start text-xs">
                                      <Lightbulb className="h-3.5 w-3.5 mr-1.5 mt-0.5 text-primary/70" />
                                      <span>{insight}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {message.buttons && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {message.buttons.map((button, i) => (
                                <Button
                                  key={i}
                                  variant="outline"
                                  size="sm"
                                  className="text-xs h-8"
                                  onClick={() => handleButtonClick(button.action)}
                                >
                                  {button.label}
                                </Button>
                              ))}
                            </div>
                          )}

                          {message.role === "assistant" && (
                            <div className="flex items-center mt-1 ml-1">
                              <Button variant="ghost" size="icon" className="h-6 w-6">
                                <ThumbsUp className="h-3 w-3 text-muted-foreground" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-6 w-6">
                                <ThumbsDown className="h-3 w-3 text-muted-foreground" />
                              </Button>
                              <span className="text-xs text-muted-foreground ml-1">
                                {new Date(message.timestamp).toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </span>
                            </div>
                          )}
                        </div>

                        {message.role === "user" && (
                          <Avatar className="h-8 w-8 ml-2 mt-1 flex-shrink-0">
                            <AvatarFallback className="bg-primary/10">
                              <span className="text-xs font-medium text-primary">You</span>
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex justify-start mb-4">
                        <Avatar className="h-8 w-8 mr-2 mt-1">
                          <AvatarFallback className="bg-primary/10">
                            <Bot className="h-4 w-4 text-primary" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-muted text-foreground rounded-lg rounded-tl-none px-4 py-2">
                          <div className="flex space-x-1">
                            <div
                              className="h-2 w-2 rounded-full bg-primary/40 animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="h-2 w-2 rounded-full bg-primary/40 animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="h-2 w-2 rounded-full bg-primary/40 animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {showSuggestions && messages.length === 1 && (
                      <div className="mt-6">
                        <p className="text-xs text-muted-foreground mb-2">Try asking about:</p>
                        <div className="flex flex-wrap gap-2">
                          {suggestions.map((suggestion, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="text-xs"
                              onClick={() => handleSuggestionClick(suggestion)}
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    <AnimatePresence>
                      {showVoiceInput && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="mt-4"
                        >
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex flex-col items-center justify-center space-y-4">
                                <div className="relative">
                                  <div className="absolute inset-0 animate-ping rounded-full bg-primary/20"></div>
                                  <Button size="lg" variant="outline" className="relative rounded-full h-16 w-16">
                                    <Mic className="h-6 w-6 text-primary" />
                                  </Button>
                                </div>
                                <p className="text-sm text-center">Listening... Tap to stop</p>
                                <Button variant="ghost" size="sm" onClick={() => setShowVoiceInput(false)}>
                                  <X className="h-4 w-4 mr-2" />
                                  Cancel
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {showImageUpload && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="mt-4"
                        >
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex flex-col items-center justify-center space-y-4">
                                <div className="border-2 border-dashed border-primary/20 rounded-lg p-8 w-full flex flex-col items-center">
                                  <Image className="h-8 w-8 text-primary/60 mb-2" />
                                  <p className="text-sm text-center">Drag & drop an image here or click to browse</p>
                                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG or GIF up to 5MB</p>
                                  <Button variant="outline" size="sm" className="mt-4">
                                    Browse files
                                  </Button>
                                </div>
                                <Button variant="ghost" size="sm" onClick={() => setShowImageUpload(false)}>
                                  <X className="h-4 w-4 mr-2" />
                                  Cancel
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div ref={messagesEndRef} />
                  </div>

                  <div className="border-t p-3">
                    <div className="mb-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="text-sm font-medium">Quick Analysis</h4>
                        <Button variant="ghost" size="sm" className="text-xs">
                          View All <ChevronRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {analysisTemplates.slice(0, 4).map((template) => (
                          <Button
                            key={template.id}
                            variant="outline"
                            className="h-auto flex-col items-start p-3 text-left"
                            onClick={() => handleQuickAnalysis(template.id)}
                          >
                            <div className="flex items-center gap-2">
                              {template.icon}
                              <span className="text-xs font-medium">{template.title}</span>
                            </div>
                            <span className="mt-1 text-[10px] text-muted-foreground">{template.description}</span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="Ask about content or network metrics..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleSendMessage()
                          }
                        }}
                        className="flex-1"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9"
                        onClick={() => {
                          setShowVoiceInput(true)
                          setShowImageUpload(false)
                        }}
                      >
                        <Mic className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9"
                        onClick={() => {
                          setShowImageUpload(true)
                          setShowVoiceInput(false)
                        }}
                      >
                        <Image className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Button size="icon" onClick={handleSendMessage} className="h-9 w-9 bg-primary">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Telkom AI can analyze content performance, network metrics, and audience engagement
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="insights" className="h-full m-0 p-4 overflow-auto">
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-sm font-medium flex items-center justify-between">
                      Quick Insights
                      <Button variant="outline" size="sm" className="text-xs">
                        <Filter className="mr-1 h-3 w-3" />
                        Filter
                      </Button>
                    </h3>
                    <div className="grid gap-3">
                      {quickInsights.map((insight) => (
                        <Card key={insight.id} className="overflow-hidden">
                          <CardHeader className="p-3 pb-0">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-sm flex items-center gap-2">
                                {insight.category === "strength" && <Zap className="h-4 w-4 text-green-500" />}
                                {insight.category === "opportunity" && <Target className="h-4 w-4 text-blue-500" />}
                                {insight.title}
                              </CardTitle>
                              <Badge
                                variant="outline"
                                className={cn(
                                  "text-xs capitalize",
                                  insight.category === "strength" && "bg-green-50 text-green-700 border-green-200",
                                  insight.category === "opportunity" && "bg-blue-50 text-blue-700 border-blue-200",
                                )}
                              >
                                {insight.category}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="p-3">
                            <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
                            {insight.metrics && (
                              <div className="grid grid-cols-2 gap-2">
                                {insight.metrics.map((metric, index) => (
                                  <div key={index} className="space-y-1">
                                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                                    <div className="flex items-baseline gap-2">
                                      <div className="text-sm font-medium">{metric.value}</div>
                                      <div className="text-xs text-green-500">{metric.change}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-medium">Key Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="overflow-hidden">
                        <CardHeader className="p-3 pb-0">
                          <CardTitle className="text-sm">Content Performance</CardTitle>
                        </CardHeader>
                        <CardContent className="p-3">
                          <div className="space-y-2">
                            <div>
                              <div className="flex items-center justify-between text-xs">
                                <span>Engagement Rate</span>
                                <span className="font-medium">4.8%</span>
                              </div>
                              <Progress value={48} className="h-1" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between text-xs">
                                <span>Video Completion</span>
                                <span className="font-medium">62%</span>
                              </div>
                              <Progress value={62} className="h-1" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between text-xs">
                                <span>Share Rate</span>
                                <span className="font-medium">2.1%</span>
                              </div>
                              <Progress value={21} className="h-1" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="overflow-hidden">
                        <CardHeader className="p-3 pb-0">
                          <CardTitle className="text-sm">Audience Growth</CardTitle>
                        </CardHeader>
                        <CardContent className="p-3">
                          <div className="space-y-2">
                            <div>
                              <div className="flex items-center justify-between text-xs">
                                <span>TikTok Followers</span>
                                <span className="font-medium">+12% MoM</span>
                              </div>
                              <Progress value={80} className="h-1" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between text-xs">
                                <span>Instagram Followers</span>
                                <span className="font-medium">+8% MoM</span>
                              </div>
                              <Progress value={60} className="h-1" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between text-xs">
                                <span>Twitter Followers</span>
                                <span className="font-medium">+5% MoM</span>
                              </div>
                              <Progress value={40} className="h-1" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="analysis" className="h-full m-0 p-4 overflow-auto">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Analysis Templates</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <SlidersHorizontal className="mr-1 h-3 w-3" />
                          Customize
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Analysis Options</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <FileText className="mr-2 h-4 w-4" />
                          Content Audit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="mr-2 h-4 w-4" />
                          Audience Analysis
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BarChart className="mr-2 h-4 w-4" />
                          Performance Report
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="grid gap-4">
                    {analysisTemplates.map((template) => (
                      <Card key={template.id} className="overflow-hidden">
                        <CardHeader className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="rounded-lg bg-primary/10 p-2">{template.icon}</div>
                              <div>
                                <CardTitle className="text-sm">{template.title}</CardTitle>
                                <CardDescription className="text-xs">{template.description}</CardDescription>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" onClick={() => handleQuickAnalysis(template.id)}>
                              Run Analysis
                            </Button>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-medium">Suggested Questions</h3>
                    <div className="space-y-4">
                      {suggestedQuestions.map((category, index) => (
                        <div key={index}>
                          <h4 className="mb-2 text-xs font-medium uppercase text-muted-foreground">
                            {category.category}
                          </h4>
                          <div className="grid gap-2">
                            {category.questions.map((question, qIndex) => (
                              <Button
                                key={qIndex}
                                variant="outline"
                                className="h-auto justify-start px-4 py-2 text-left"
                                onClick={() => {
                                  setActiveTab("chat")
                                  setInputValue(question)
                                }}
                              >
                                <span className="text-xs">{question}</span>
                              </Button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

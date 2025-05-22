// Fix the AI Assistant component to prevent duplicate sidebars
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, X, Zap, ChevronRight, MessageSquare, BarChart2, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)

  // Don't render the full panel if it's not open
  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90"
          onClick={() => setIsOpen(true)}
        >
          <Bot className="h-6 w-6 text-white" />
        </Button>
      </div>
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed top-0 right-0 bottom-0 w-80 z-50 bg-background border-l shadow-lg"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">AI Assistant</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <Tabs defaultValue="chat" className="flex-1 flex flex-col">
            <TabsList className="grid grid-cols-3 px-4 py-2">
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="suggestions">Ideas</TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="flex-1 overflow-hidden flex flex-col p-0">
              <div className="flex-1 overflow-auto p-4 space-y-4">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32&text=AI" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <Card className="flex-1">
                    <CardContent className="p-3">
                      <p className="text-sm">How can I help you with your marketing analytics today?</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex gap-3 justify-end">
                  <Card className="bg-primary/10 border-primary/20">
                    <CardContent className="p-3">
                      <p className="text-sm">Show me our top performing content this month</p>
                    </CardContent>
                  </Card>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32&text=You" />
                    <AvatarFallback>You</AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32&text=AI" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <Card className="flex-1">
                    <CardContent className="p-3">
                      <p className="text-sm">Here's a summary of your top performing content:</p>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• TikTok dance challenge: 245K views, 4.8% engagement</li>
                        <li>• Instagram product showcase: 189K views, 4.5% engagement</li>
                        <li>• YouTube tutorial: 156K views, 3.9% engagement</li>
                      </ul>
                      <p className="mt-2 text-sm">Would you like me to analyze why these are performing well?</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="border-t p-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ask me anything..."
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
                  />
                  <Button size="icon" className="absolute right-1 top-1 h-6 w-6">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="insights" className="flex-1 overflow-auto p-4 space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Content Performance</CardTitle>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">New</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <BarChart2 className="h-4 w-4 text-primary" />
                      <p className="text-sm">Your engagement rate is up 18% this week</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-amber-500" />
                      <p className="text-sm">Try posting more dance challenges - they're trending</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" size="sm" className="w-full">
                    View Full Analysis
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Audience Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <p className="text-sm">18-24 age group growing fastest at +24%</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-amber-500" />
                      <p className="text-sm">Consider more content targeting Gen Z interests</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" size="sm" className="w-full">
                    View Demographics
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="suggestions" className="flex-1 overflow-auto p-4 space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Content Ideas</CardTitle>
                  <CardDescription>Based on current trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="rounded-md border p-3">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-medium">Amapiano Dance Challenge</h3>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Create a dance challenge using trending Amapiano beats to boost engagement with 18-24
                        demographic
                      </p>
                    </div>
                    <div className="rounded-md border p-3">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-medium">Data Bundle Comparison</h3>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Create a short-form video comparing your data bundles to competitors with a humorous twist
                      </p>
                    </div>
                    <div className="rounded-md border p-3">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-medium">Creator Spotlight Series</h3>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Partner with local creators to showcase how they use your services in their daily work
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" size="sm" className="w-full">
                    Generate More Ideas
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

// Import for Users icon
import { Users } from "lucide-react"

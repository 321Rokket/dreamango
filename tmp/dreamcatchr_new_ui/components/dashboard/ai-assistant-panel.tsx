"use client"

import { useState } from "react"
import { X, Send, Bot, User, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface AIAssistantPanelProps {
  open?: boolean
  onClose?: () => void
}

export function AIAssistantPanel({ open = false, onClose }: AIAssistantPanelProps) {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your Telkom AI assistant. How can I help you today with your marketing dashboard?",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages([...messages, userMessage])
    setInput("")

    // Simulate AI response
    setIsLoading(true)
    setTimeout(() => {
      const responses = [
        "I can help you analyze your marketing metrics. Would you like to see a summary of your recent campaign performance?",
        "Looking at your dashboard, I notice your engagement rates have increased by 12% this month. That's excellent progress!",
        "Based on your audience data, I recommend focusing more content on the 25-34 age demographic, as they're showing the highest conversion rates.",
        "Your competitive analysis shows you're outperforming in social media engagement, but Vodacom is ahead in conversion rates. Would you like some strategies to improve?",
        "I've analyzed your content performance and noticed video content is generating 3x more engagement than static posts. Consider increasing video production.",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages([...messages, userMessage, { role: "assistant", content: randomResponse }])
      setIsLoading(false)
    }, 1500)
  }

  if (!open) return null

  return (
    <div className={cn("overlay-panel card-elevated bg-white", open ? "open" : "")}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-telkom-gray-200">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-telkom-blue" />
            <h2 className="text-heading-4">Telkom AI Assistant</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={cn("flex gap-3 max-w-[80%]", message.role === "user" ? "ml-auto" : "")}>
                {message.role === "assistant" && (
                  <div className="h-8 w-8 rounded-full bg-telkom-blue-100 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-telkom-blue" />
                  </div>
                )}
                <div
                  className={cn(
                    "rounded-lg p-3",
                    message.role === "user" ? "bg-telkom-blue text-white" : "bg-telkom-gray-100 text-telkom-gray-800",
                  )}
                >
                  {message.content}
                </div>
                {message.role === "user" && (
                  <div className="h-8 w-8 rounded-full bg-telkom-gray-200 flex items-center justify-center">
                    <User className="h-4 w-4 text-telkom-gray-600" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-telkom-blue-100 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-telkom-blue" />
                </div>
                <div className="rounded-lg p-3 bg-telkom-gray-100 text-telkom-gray-800">
                  <Loader2 className="h-5 w-5 animate-spin text-telkom-blue" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-telkom-gray-200">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about your marketing data..."
              className="flex-1 border-telkom-gray-300 focus:border-telkom-blue focus:ring-1 focus:ring-telkom-blue"
            />
            <Button
              type="submit"
              size="icon"
              className="bg-telkom-blue hover:bg-telkom-blue-600 text-white"
              disabled={!input.trim() || isLoading}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

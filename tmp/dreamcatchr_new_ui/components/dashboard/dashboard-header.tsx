"use client"

import { useState } from "react"
import { Bell, Search, Menu, Settings, HelpCircle, User, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TeamSwitcher } from "@/components/dashboard/team-switcher"
import { AIAssistantPanel } from "@/components/dashboard/ai-assistant-panel"
import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react"

interface DashboardHeaderProps {
  onMenuClick?: () => void
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const [showAIAssistant, setShowAIAssistant] = useState(false)

  const pathname = usePathname()

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    if (!pathname) return []

    const segments = pathname.split("/").filter(Boolean)
    return segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`
      return {
        label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
        href,
      }
    })
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      <div className="ml-4 hidden md:block">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                </BreadcrumbItem>
                {i < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-2 md:gap-4 flex-1">
        <TeamSwitcher />
        <div className="relative hidden md:flex">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 rounded-lg bg-background pl-8 border-telkom-gray-200 focus:border-telkom-blue focus:ring-1 focus:ring-telkom-blue"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-telkom-gray-500 hover:text-telkom-blue hover:bg-telkom-blue-50"
          onClick={() => setShowAIAssistant(!showAIAssistant)}
        >
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">AI Assistant</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-telkom-gray-500 hover:text-telkom-blue hover:bg-telkom-blue-50"
        >
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 border border-telkom-gray-200">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="bg-telkom-blue text-white">TU</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <AIAssistantPanel open={showAIAssistant} onClose={() => setShowAIAssistant(false)} />
    </header>
  )
}

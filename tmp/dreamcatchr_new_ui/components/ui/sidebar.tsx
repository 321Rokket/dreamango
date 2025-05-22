"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BarChart3,
  Users,
  LineChart,
  PieChart,
  Activity,
  TrendingUp,
  LayoutDashboard,
  Settings,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  Target,
  Compass,
} from "lucide-react"

interface SidebarProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Sidebar({ open = true, onOpenChange }: SidebarProps) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Load collapsed state from localStorage on initial render
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarCollapsed")
    if (savedState !== null) {
      setIsCollapsed(savedState === "true")
    }
  }, [])

  // Save collapsed state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", isCollapsed.toString())
  }, [isCollapsed])

  const toggleCollapsed = () => {
    const newState = !isCollapsed
    setIsCollapsed(newState)
    if (onOpenChange) {
      onOpenChange(!newState)
    }
  }

  const mainItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Audience",
      href: "/dashboard/audience",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Marketing Metrics",
      href: "/dashboard/marketing-metrics",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      title: "Conversion Journey",
      href: "/dashboard/conversion-journey",
      icon: <LineChart className="h-5 w-5" />,
    },
    {
      title: "Competitive Landscape",
      href: "/dashboard/competitive-landscape",
      icon: <PieChart className="h-5 w-5" />,
    },
    {
      title: "Strategic Planning",
      href: "/dashboard/strategic-planning",
      icon: <Target className="h-5 w-5" />,
    },
    {
      title: "Creator Ecosystem",
      href: "/dashboard/creator-ecosystem",
      icon: <UserPlus className="h-5 w-5" />,
    },
  ]

  const secondaryItems = [
    {
      title: "Content Performance",
      href: "/content-performance",
      icon: <Activity className="h-5 w-5" />,
    },
    {
      title: "Trend Analysis",
      href: "/dashboard/trend-analysis",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      title: "Market Explorer",
      href: "/dashboard/market-explorer",
      icon: <Compass className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  if (!open) {
    return null
  }

  return (
    <div
      className={cn(
        "relative flex flex-col border-r bg-sidebar-background transition-all duration-300",
        isCollapsed ? "w-[60px]" : "w-[240px]",
      )}
    >
      <div className="flex h-14 items-center px-3 border-b">
        {!isCollapsed && <div className="flex items-center gap-2 font-semibold text-white">Dreamcatchr</div>}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute right-2 top-3 h-8 w-8",
            isCollapsed && "right-[-12px] bg-background border rounded-full",
          )}
          onClick={toggleCollapsed}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <ScrollArea className="flex-1 py-2">
        <nav className="grid gap-1 px-2">
          {mainItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                pathname === item.href && "bg-sidebar-accent text-sidebar-accent-foreground",
                isCollapsed && "justify-center px-0",
              )}
            >
              {item.icon}
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
        <div className="my-2 px-4">{!isCollapsed && <div className="h-[1px] w-full bg-border" />}</div>
        <nav className="grid gap-1 px-2">
          {secondaryItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                pathname === item.href && "bg-sidebar-accent text-sidebar-accent-foreground",
                isCollapsed && "justify-center px-0",
              )}
            >
              {item.icon}
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}

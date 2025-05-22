"use client"

import React from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Zap, Menu, X, Bell, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { motion, AnimatePresence } from "framer-motion"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [aiPanelOpen, setAiPanelOpen] = useState(false)
  const [notificationsCount, setNotificationsCount] = useState(5)
  const [pageTitle, setPageTitle] = useState("Dashboard")

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Set page title based on current path
  useEffect(() => {
    if (!pathname) return

    const segments = pathname.split("/").filter(Boolean)
    if (segments.length === 1 && segments[0] === "dashboard") {
      setPageTitle("Dashboard")
    } else if (segments.length > 1) {
      const currentPage = segments[segments.length - 1]
      setPageTitle(currentPage.charAt(0).toUpperCase() + currentPage.slice(1).replace(/-/g, " "))
    }
  }, [pathname])

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

  // AI Assistant Panel
  const AiAssistantPanel = () => (
    <AnimatePresence>
      {aiPanelOpen && (
        <motion.div
          className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-slate-950 border-l shadow-lg z-50"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-semibold text-primary">AI Assistant</h2>
            <Button variant="ghost" size="icon" onClick={() => setAiPanelOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="p-4 h-[calc(100vh-64px)] overflow-auto">
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="text-sm">How can I help you with your conversion journey today?</p>
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                <div>
                  <p className="font-medium">Analyze current funnel</p>
                  <p className="text-xs text-muted-foreground">Get insights on your conversion funnel performance</p>
                </div>
              </Button>
              <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                <div>
                  <p className="font-medium">Optimize CAC</p>
                  <p className="text-xs text-muted-foreground">Recommendations to reduce customer acquisition cost</p>
                </div>
              </Button>
              <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                <div>
                  <p className="font-medium">Improve conversion rate</p>
                  <p className="text-xs text-muted-foreground">Tactics to boost conversion at critical stages</p>
                </div>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
        {isMobile ? (
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="absolute left-4 top-3 z-40 lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
        ) : (
          <Sidebar />
        )}
        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="flex h-14 items-center gap-4 border-b bg-white px-6 dark:bg-slate-950">
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-6 w-6" />
              </Button>
            )}

            {/* Breadcrumb navigation */}
            <Breadcrumb className="hidden md:flex">
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

            <div className="ml-auto flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setAiPanelOpen(true)}>
                <Zap className="h-5 w-5 text-primary" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notificationsCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {notificationsCount}
                  </span>
                )}
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6 relative">
            {children}
            <AiAssistantPanel />
          </main>
        </div>
      </div>
    </>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Users, ShoppingCart, LayoutDashboard, UserPlus, Globe, Flag, Settings } from "lucide-react"

// If there are any TabsContent components, they must be inside a Tabs component
// Example structure:
/*
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>

  <TabsContent value="tab1">\
    {/* Tab 1 content */ }
  </TabsContent>

  <TabsContent value="tab2">
{
  /* Tab 2 content */
}
</TabsContent>
</Tabs>
*/

export function Navigation() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const routes = [
    {
      title: "Executive Overview",
      href: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Content Performance",
      href: "/content-performance",
      icon: BarChart3,
    },
    {
      title: "Creator Ecosystem",
      href: "/creator-ecosystem",
      icon: UserPlus,
    },
    {
      title: "Audience & Community",
      href: "/audience-community",
      icon: Users,
    },
    {
      title: "Conversion Journey",
      href: "/conversion-journey",
      icon: ShoppingCart,
    },
    {
      title: "Competitive Landscape",
      href: "/competitive-landscape",
      icon: Globe,
    },
    {
      title: "Strategic Planning",
      href: "/strategic-planning",
      icon: Flag,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ]

  return (
    <nav className="flex h-14 items-center border-b bg-background px-4 lg:px-6">
      <div className="flex items-center gap-2 font-semibold">
        <BarChart3 className="h-6 w-6 text-primary" />
        <span>DreamCatchr</span>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="hidden md:flex">
          {routes.map((route) => {
            const isActive = pathname === route.href
            return (
              <Link
                key={route.href}
                href={route.href}
                className={`flex h-14 items-center border-b-2 px-4 text-sm font-medium transition-colors hover:text-primary ${
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:border-border"
                }`}
              >
                {route.title}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

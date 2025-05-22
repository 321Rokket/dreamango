"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageSquare, Share2, Eye, Play, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import { NivoCharts } from "@/components/dashboard/nivo-charts"

function ContentOpportunities() {
  const [selectedContent, setSelectedContent] = useState<string | null>(null)

  const contentOpportunities = [
    {
      id: "amapiano-dance-1",
      title: "Amapiano Dance Challenge",
      platform: "TikTok",
      views: 245000,
      likes: 32400,
      comments: 1850,
      shares: 5600,
      engagement: 4.8,
      category: "Dance",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hq720-6.jpg-i3SGHHJp57AUQsUMfqdfVy0i4lqEtr.jpeg",
      description: "Ushuni Ubomhlaba dance challenge featuring Telkom branding - collaboration opportunity",
    },
    {
      id: "telkom-netball",
      title: "Telkom Netball Sponsorship",
      platform: "Instagram",
      views: 189000,
      likes: 28500,
      comments: 1620,
      shares: 4800,
      engagement: 4.5,
      category: "Sports",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20231122-WCW-Telkom-Sponsorship-1.jpg-ypBGxzsg3DKoB3dB2TpL7aPacpB4RQ.jpeg",
      description: "Telkom-sponsored netball team gaining traction - potential for expanded content series",
    },
    {
      id: "brother-bernard",
      title: "Brother Bernard Movie",
      platform: "YouTube",
      views: 156000,
      likes: 22800,
      comments: 1240,
      shares: 3200,
      engagement: 3.9,
      category: "Entertainment",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maxresdefault-4.jpg-oKFInDwSgympb2pxFALqsNDwG0Ynpc.jpeg",
      description: "Viral movie with Telkom-themed parody potential",
    },
    {
      id: "funny-dance-challenge",
      title: "Funniest Dance Challenge",
      platform: "TikTok",
      views: 320000,
      likes: 45600,
      comments: 2850,
      shares: 8900,
      engagement: 5.2,
      category: "Comedy",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hq720-7.jpg-CAcjVUMxSCn0lF3frFppNZv0LpCHTV.jpeg",
      description: "Viral local content with opportunity for Telkom network coverage tie-in",
    },
    {
      id: "ushuni-musician",
      title: "Ushuni Show Musician",
      platform: "Instagram",
      views: 278000,
      likes: 38200,
      comments: 2450,
      shares: 7600,
      engagement: 4.7,
      category: "Music",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hq720-4.jpg-d683z4249ymBo99xJ4mVMp3eO6kKbf.jpeg",
      description: "Authentic South African musician with high engagement - collaboration opportunity",
    },
    {
      id: "chiefs-supersport",
      title: "Chiefs vs SuperSport",
      platform: "Facebook",
      views: 198000,
      likes: 26400,
      comments: 1580,
      shares: 4200,
      engagement: 4.1,
      category: "Sports",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maxresdefault-2.jpg-iI1gOa5f93LmKdLbDaxxgHr76bRthl.jpeg",
      description: "Premier Soccer League match highlights - potential for Telkom sponsorship tie-in",
    },
  ]

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "TikTok":
        return "bg-[#00f2ea] text-black"
      case "Instagram":
        return "bg-[#e1306c] text-white"
      case "YouTube":
        return "bg-[#ff0000] text-white"
      case "Facebook":
        return "bg-[#4267B2] text-white"
      default:
        return "bg-slate-500 text-white"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Dance":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Comedy":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "Music":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Sports":
        return "bg-green-100 text-green-800 border-green-200"
      case "Entertainment":
        return "bg-pink-100 text-pink-800 border-pink-200"
      default:
        return "bg-slate-100 text-slate-800 border-slate-200"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium text-muted-foreground">
          Discover trending content to collaborate with or draw inspiration from for your brand
        </div>
        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
          Viral Opportunities
        </Badge>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Content</TabsTrigger>
          <TabsTrigger value="tiktok">TikTok</TabsTrigger>
          <TabsTrigger value="instagram">Instagram</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>

        <div className="mt-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border p-4">
              <h3 className="text-sm font-medium mb-2">Engagement by Platform</h3>
              <div className="h-[200px]">
                <NivoCharts.BarChart
                  data={[
                    { platform: "TikTok", engagement: 4.8 },
                    { platform: "Instagram", engagement: 4.5 },
                    { platform: "YouTube", engagement: 3.9 },
                    { platform: "Facebook", engagement: 4.1 },
                  ]}
                  keys={["engagement"]}
                  indexBy="platform"
                  margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                  padding={0.3}
                  colors={["#3b82f6"]}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Platform",
                    legendPosition: "middle",
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Engagement %",
                    legendPosition: "middle",
                    legendOffset: -30,
                  }}
                />
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="text-sm font-medium mb-2">Content Categories</h3>
              <div className="h-[200px]">
                <NivoCharts.PieChart
                  data={[
                    { id: "Dance", value: 35 },
                    { id: "Comedy", value: 25 },
                    { id: "Music", value: 20 },
                    { id: "Sports", value: 15 },
                    { id: "Entertainment", value: 5 },
                  ]}
                  margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  borderWidth={1}
                  borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: "color" }}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
                  colors={{ scheme: "nivo" }}
                />
              </div>
            </div>
          </div>
        </div>

        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentOpportunities.map((content) => (
              <ContentCard
                key={content.id}
                content={content}
                isSelected={selectedContent === content.id}
                onSelect={() => setSelectedContent(selectedContent === content.id ? null : content.id)}
                getPlatformColor={getPlatformColor}
                getCategoryColor={getCategoryColor}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tiktok" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentOpportunities
              .filter((content) => content.platform === "TikTok")
              .map((content) => (
                <ContentCard
                  key={content.id}
                  content={content}
                  isSelected={selectedContent === content.id}
                  onSelect={() => setSelectedContent(selectedContent === content.id ? null : content.id)}
                  getPlatformColor={getPlatformColor}
                  getCategoryColor={getCategoryColor}
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="instagram" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentOpportunities
              .filter((content) => content.platform === "Instagram")
              .map((content) => (
                <ContentCard
                  key={content.id}
                  content={content}
                  isSelected={selectedContent === content.id}
                  onSelect={() => setSelectedContent(selectedContent === content.id ? null : content.id)}
                  getPlatformColor={getPlatformColor}
                  getCategoryColor={getCategoryColor}
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="trending" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentOpportunities
              .filter((content) => content.engagement > 4.5)
              .map((content) => (
                <ContentCard
                  key={content.id}
                  content={content}
                  isSelected={selectedContent === content.id}
                  onSelect={() => setSelectedContent(selectedContent === content.id ? null : content.id)}
                  getPlatformColor={getPlatformColor}
                  getCategoryColor={getCategoryColor}
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ContentCardProps {
  content: {
    id: string
    title: string
    platform: string
    views: number
    likes: number
    comments: number
    shares: number
    engagement: number
    category: string
    imageUrl: string
    description: string
  }
  isSelected: boolean
  onSelect: () => void
  getPlatformColor: (platform: string) => string
  getCategoryColor: (category: string) => string
}

function ContentCard({ content, isSelected, onSelect, getPlatformColor, getCategoryColor }: ContentCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`rounded-lg border overflow-hidden cursor-pointer ${isSelected ? "ring-2 ring-primary" : ""}`}
      onClick={onSelect}
    >
      <div className="aspect-video bg-slate-200 relative">
        <Image src={content.imageUrl || "/placeholder.svg"} alt={content.title} fill className="object-cover" />
        <div className="absolute top-2 right-2">
          <Badge className={getPlatformColor(content.platform)}>{content.platform}</Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <h3 className="text-white font-medium text-sm truncate">{content.title}</h3>
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className={getCategoryColor(content.category)}>
            {content.category}
          </Badge>
          <div className="flex items-center">
            <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
            <span className="text-xs font-medium text-green-500">{content.engagement}% engagement</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1 text-xs mb-3">
          <div className="flex flex-col items-center">
            <Eye className="h-3 w-3 text-muted-foreground mb-1" />
            <span className="font-medium">{(content.views / 1000).toFixed(1)}K</span>
          </div>
          <div className="flex flex-col items-center">
            <Heart className="h-3 w-3 text-red-500 mb-1" />
            <span className="font-medium">{(content.likes / 1000).toFixed(1)}K</span>
          </div>
          <div className="flex flex-col items-center">
            <MessageSquare className="h-3 w-3 text-blue-500 mb-1" />
            <span className="font-medium">{(content.comments / 1000).toFixed(1)}K</span>
          </div>
          <div className="flex flex-col items-center">
            <Share2 className="h-3 w-3 text-green-500 mb-1" />
            <span className="font-medium">{(content.shares / 1000).toFixed(1)}K</span>
          </div>
        </div>

        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-muted-foreground mb-3"
            >
              {content.description}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="w-1/2">
            <Play className="h-3 w-3 mr-2" />
            View Content
          </Button>
          <Button variant="outline" size="sm" className="w-1/2">
            <Users className="h-3 w-3 mr-2" />
            Collaborate
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export { ContentOpportunities }

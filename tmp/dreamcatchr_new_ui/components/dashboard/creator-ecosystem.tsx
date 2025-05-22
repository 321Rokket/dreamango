"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Instagram, Twitter, Youtube, TrendingUp, Users, DollarSign, Search, Filter } from "lucide-react"

type Creator = {
  id: number
  name: string
  image: string
  followers: number
  engagement: number
  platforms: string[]
  categories: string[]
  roi: number
  trending: boolean
}

export function CreatorEcosystem() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const creators: Creator[] = [
    {
      id: 1,
      name: "Sho Madjozi",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1682296067-612x612.jpg-NJXnTgU4MgEpLjJpI9FWbrShMCyOeX.jpeg",
      followers: 1200000,
      engagement: 4.8,
      platforms: ["Instagram", "TikTok", "Twitter"],
      categories: ["Music", "Fashion", "Culture"],
      roi: 3.2,
      trending: true,
    },
    {
      id: 2,
      name: "Siv Ngesi",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile.jpg-LsPANdsEa29Hsjan6XjKznLozIMVQU.jpeg",
      followers: 980000,
      engagement: 3.9,
      platforms: ["Instagram", "Twitter", "YouTube"],
      categories: ["Comedy", "Entertainment", "Activism"],
      roi: 2.8,
      trending: true,
    },
    {
      id: 3,
      name: "Mihlali Ndamase",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66bf7f0ebfa3fe2764910428_MrBeast-KmiWLrT9UzM4Vkh3hMlj5iDLNALJyE.png",
      followers: 1500000,
      engagement: 5.2,
      platforms: ["Instagram", "YouTube", "TikTok"],
      categories: ["Beauty", "Lifestyle", "Fashion"],
      roi: 4.1,
      trending: true,
    },
    {
      id: 4,
      name: "Trevor Noah",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile-2.jpg-Uk3ObU6UdN34Lqel5FJuZ9MSpfxOA4.jpeg",
      followers: 8500000,
      engagement: 4.5,
      platforms: ["Instagram", "Twitter", "YouTube"],
      categories: ["Comedy", "Entertainment", "News"],
      roi: 4.8,
      trending: false,
    },
    {
      id: 5,
      name: "Bonang Matheba",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-intro-photo-final-2.jpg-4i9rerUHj9NVxoimsHGgccAkOBKXFl.jpeg",
      followers: 4200000,
      engagement: 3.8,
      platforms: ["Instagram", "Twitter", "YouTube"],
      categories: ["Lifestyle", "Fashion", "Business"],
      roi: 3.9,
      trending: false,
    },
    {
      id: 6,
      name: "Kamo Mphela",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-47-5Qjxolbr8pN8AZZU1eQvVoQLckcKhT.jpeg",
      followers: 950000,
      engagement: 5.5,
      platforms: ["Instagram", "TikTok", "Twitter"],
      categories: ["Dance", "Music", "Entertainment"],
      roi: 3.6,
      trending: true,
    },
    {
      id: 7,
      name: "Thuso Mbedu",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/how-to-become-a-fulltime-content-creator.jpg-jXHyho3ow83tmXQAWeNmj7WdJ9k6kS.jpeg",
      followers: 2100000,
      engagement: 4.2,
      platforms: ["Instagram", "Twitter"],
      categories: ["Acting", "Fashion", "Lifestyle"],
      roi: 3.5,
      trending: false,
    },
    {
      id: 8,
      name: "Lasizwe Dambuza",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/64b3e1d8a56b78aa3ab618d1_Blog%20Cover_2023_06_Becoming%20a%20Content%20Creator_%20Your%20Expert%20Guide%20to%20Content%20in%202023%20%281%29-nMluaWcwNauGFXXll7pcdqDgMEItUV.png",
      followers: 1300000,
      engagement: 4.7,
      platforms: ["Instagram", "YouTube", "TikTok"],
      categories: ["Comedy", "Entertainment", "Lifestyle"],
      roi: 3.2,
      trending: true,
    },
    {
      id: 9,
      name: "Khaby Lame",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1682296067-612x612.jpg-NJXnTgU4MgEpLjJpI9FWbrShMCyOeX.jpeg", // Reusing first image
      followers: 15000000,
      engagement: 6.8,
      platforms: ["TikTok", "Instagram"],
      categories: ["Comedy", "Entertainment"],
      roi: 5.2,
      trending: true,
    },
    {
      id: 10,
      name: "Kagiso Rabada",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile-2.jpg-Uk3ObU6UdN34Lqel5FJuZ9MSpfxOA4.jpeg", // Reusing fourth image
      followers: 1800000,
      engagement: 3.5,
      platforms: ["Instagram", "Twitter"],
      categories: ["Sports", "Lifestyle"],
      roi: 2.9,
      trending: false,
    },
  ]

  const categories = Array.from(new Set(creators.flatMap((creator) => creator.categories)))

  const filteredCreators = creators.filter((creator) => {
    const matchesSearch = creator.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory ? creator.categories.includes(selectedCategory) : true
    return matchesSearch && matchesCategory
  })

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Instagram":
        return <Instagram className="h-4 w-4" />
      case "Twitter":
        return <Twitter className="h-4 w-4" />
      case "YouTube":
        return <Youtube className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-telkom-dark-blue">Creator Ecosystem</CardTitle>
          <CardDescription>Discover and analyze top South African content creators for your campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search creators..."
                className="pl-8 border-telkom-gray-200 focus:border-telkom-blue focus:ring-1 focus:ring-telkom-blue"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2" onClick={() => setSelectedCategory(null)}>
                <Filter className="h-4 w-4" />
                <span>All Categories</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className={cn(
                  "cursor-pointer hover:bg-telkom-blue-50",
                  selectedCategory === category ? "bg-telkom-blue text-white hover:bg-telkom-blue-600" : "",
                )}
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          <Tabs defaultValue="grid" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
            </TabsList>

            <TabsContent value="grid" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCreators.map((creator) => (
                  <Card key={creator.id} className="overflow-hidden">
                    <div className="aspect-video bg-slate-200 relative">
                      <img
                        src={creator.image || "/placeholder.svg"}
                        alt={creator.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {creator.trending && (
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-telkom-orange text-white">
                            <TrendingUp className="h-3 w-3 mr-1" /> Trending
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="text-heading-4 mb-2">{creator.name}</h3>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {creator.categories.map((category) => (
                          <Badge
                            key={category}
                            variant="outline"
                            className="bg-telkom-blue-50 text-telkom-blue border-telkom-blue-200"
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="flex flex-col items-center p-2 bg-telkom-gray-50 rounded">
                          <Users className="h-4 w-4 text-telkom-blue mb-1" />
                          <span className="text-sm font-medium">{formatNumber(creator.followers)}</span>
                          <span className="text-xs text-telkom-gray-500">Followers</span>
                        </div>
                        <div className="flex flex-col items-center p-2 bg-telkom-gray-50 rounded">
                          <TrendingUp className="h-4 w-4 text-telkom-green mb-1" />
                          <span className="text-sm font-medium">{creator.engagement}%</span>
                          <span className="text-xs text-telkom-gray-500">Engagement</span>
                        </div>
                        <div className="flex flex-col items-center p-2 bg-telkom-gray-50 rounded">
                          <DollarSign className="h-4 w-4 text-telkom-orange mb-1" />
                          <span className="text-sm font-medium">{creator.roi}x</span>
                          <span className="text-xs text-telkom-gray-500">ROI</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {creator.platforms.map((platform) => (
                          <Badge key={platform} variant="outline" className="flex items-center gap-1">
                            {getPlatformIcon(platform)}
                            <span>{platform}</span>
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="list">
              <div className="space-y-4">
                {filteredCreators.map((creator) => (
                  <Card key={creator.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative h-32 md:w-32 w-full bg-slate-200">
                        <img
                          src={creator.image || "/placeholder.svg"}
                          alt={creator.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="flex-1 pt-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <div>
                            <h3 className="text-heading-4">{creator.name}</h3>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {creator.categories.map((category) => (
                                <Badge
                                  key={category}
                                  variant="outline"
                                  className="bg-telkom-blue-50 text-telkom-blue border-telkom-blue-200"
                                >
                                  {category}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          {creator.trending && (
                            <Badge className="bg-telkom-orange text-white mt-2 md:mt-0">
                              <TrendingUp className="h-3 w-3 mr-1" /> Trending
                            </Badge>
                          )}
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-3">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-telkom-blue" />
                            <div>
                              <span className="text-sm font-medium">{formatNumber(creator.followers)}</span>
                              <span className="text-xs text-telkom-gray-500 block">Followers</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-telkom-green" />
                            <div>
                              <span className="text-sm font-medium">{creator.engagement}%</span>
                              <span className="text-xs text-telkom-gray-500 block">Engagement</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-telkom-orange" />
                            <div>
                              <span className="text-sm font-medium">{creator.roi}x</span>
                              <span className="text-xs text-telkom-gray-500 block">ROI</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {creator.platforms.map((platform) => (
                            <Badge key={platform} variant="outline" className="flex items-center gap-1">
                              {getPlatformIcon(platform)}
                              <span>{platform}</span>
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="trending">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCreators
                  .filter((creator) => creator.trending)
                  .map((creator) => (
                    <Card key={creator.id} className="overflow-hidden">
                      <div className="aspect-video bg-slate-200 relative">
                        <img
                          src={creator.image || "/placeholder.svg"}
                          alt={creator.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-telkom-orange text-white">
                            <TrendingUp className="h-3 w-3 mr-1" /> Trending
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="pt-4">
                        <h3 className="text-heading-4 mb-2">{creator.name}</h3>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {creator.categories.map((category) => (
                            <Badge
                              key={category}
                              variant="outline"
                              className="bg-telkom-blue-50 text-telkom-blue border-telkom-blue-200"
                            >
                              {category}
                            </Badge>
                          ))}
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-3">
                          <div className="flex flex-col items-center p-2 bg-telkom-gray-50 rounded">
                            <Users className="h-4 w-4 text-telkom-blue mb-1" />
                            <span className="text-sm font-medium">{formatNumber(creator.followers)}</span>
                            <span className="text-xs text-telkom-gray-500">Followers</span>
                          </div>
                          <div className="flex flex-col items-center p-2 bg-telkom-gray-50 rounded">
                            <TrendingUp className="h-4 w-4 text-telkom-green mb-1" />
                            <span className="text-sm font-medium">{creator.engagement}%</span>
                            <span className="text-xs text-telkom-gray-500">Engagement</span>
                          </div>
                          <div className="flex flex-col items-center p-2 bg-telkom-gray-50 rounded">
                            <DollarSign className="h-4 w-4 text-telkom-orange mb-1" />
                            <span className="text-sm font-medium">{creator.roi}x</span>
                            <span className="text-xs text-telkom-gray-500">ROI</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {creator.platforms.map((platform) => (
                            <Badge key={platform} variant="outline" className="flex items-center gap-1">
                              {getPlatformIcon(platform)}
                              <span>{platform}</span>
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}

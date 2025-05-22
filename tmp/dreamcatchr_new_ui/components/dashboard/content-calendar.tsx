"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { NivoCharts } from "@/components/dashboard/nivo-charts"

// Generate week dates
const generateWeekDates = (startDate = new Date()) => {
  const dates = []
  const currentDate = new Date(startDate)

  // Set to Monday of the current week
  const day = currentDate.getDay()
  const diff = currentDate.getDate() - day + (day === 0 ? -6 : 1)
  currentDate.setDate(diff)

  // Generate 7 days starting from Monday
  for (let i = 0; i < 7; i++) {
    const date = new Date(currentDate)
    date.setDate(currentDate.getDate() + i)
    dates.push(date)
  }

  return dates
}

// Generate time slots
const generateTimeSlots = () => {
  return ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]
}

// Sample content data
const generateContentItems = () => {
  const platforms = ["TikTok", "Instagram", "YouTube", "Facebook"]
  const contentTypes = ["Post", "Story", "Reel", "Short", "Live"]
  const themes = ["Product", "Lifestyle", "Educational", "Entertainment", "UGC"]

  const items = []

  // Generate 15-20 random content items
  const count = Math.floor(Math.random() * 6) + 15

  for (let i = 0; i < count; i++) {
    const dayIndex = Math.floor(Math.random() * 7)
    const timeIndex = Math.floor(Math.random() * 9)
    const platform = platforms[Math.floor(Math.random() * platforms.length)]
    const contentType = contentTypes[Math.floor(Math.random() * contentTypes.length)]
    const theme = themes[Math.floor(Math.random() * themes.length)]

    items.push({
      id: i,
      dayIndex,
      timeIndex,
      title: `${platform} ${contentType}`,
      platform,
      contentType,
      theme,
      status: Math.random() > 0.3 ? "scheduled" : Math.random() > 0.5 ? "draft" : "idea",
    })
  }

  return items
}

// Platform colors
const platformColors: Record<string, { bg: string; text: string; border: string }> = {
  TikTok: { bg: "bg-[#00f2ea]/10", text: "text-[#00f2ea]", border: "border-[#00f2ea]/30" },
  Instagram: { bg: "bg-[#C13584]/10", text: "text-[#C13584]", border: "border-[#C13584]/30" },
  YouTube: { bg: "bg-[#FF0000]/10", text: "text-[#FF0000]", border: "border-[#FF0000]/30" },
  Facebook: { bg: "bg-[#4267B2]/10", text: "text-[#4267B2]", border: "border-[#4267B2]/30" },
}

// Status colors
const statusColors: Record<string, { bg: string; text: string; border: string }> = {
  scheduled: { bg: "bg-green-100", text: "text-green-800", border: "border-green-200" },
  draft: { bg: "bg-amber-100", text: "text-amber-800", border: "border-amber-200" },
  idea: { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-200" },
}

export function ContentCalendar() {
  const [currentWeek, setCurrentWeek] = useState(new Date())
  const [weekDates, setWeekDates] = useState(generateWeekDates())
  const [timeSlots, setTimeSlots] = useState(generateTimeSlots())
  const [contentItems, setContentItems] = useState(generateContentItems())
  const [view, setView] = useState<"week" | "day">("week")
  const [selectedDay, setSelectedDay] = useState(0)

  // Navigate to previous week
  const prevWeek = () => {
    const newDate = new Date(currentWeek)
    newDate.setDate(newDate.getDate() - 7)
    setCurrentWeek(newDate)
    setWeekDates(generateWeekDates(newDate))
  }

  // Navigate to next week
  const nextWeek = () => {
    const newDate = new Date(currentWeek)
    newDate.setDate(newDate.getDate() + 7)
    setCurrentWeek(newDate)
    setWeekDates(generateWeekDates(newDate))
  }

  // Format date range for display
  const formatDateRange = () => {
    const firstDay = weekDates[0]
    const lastDay = weekDates[6]

    const firstMonth = firstDay.toLocaleString("default", { month: "short" })
    const lastMonth = lastDay.toLocaleString("default", { month: "short" })

    if (firstMonth === lastMonth) {
      return `${firstMonth} ${firstDay.getDate()}-${lastDay.getDate()}, ${lastDay.getFullYear()}`
    } else {
      return `${firstMonth} ${firstDay.getDate()} - ${lastMonth} ${lastDay.getDate()}, ${lastDay.getFullYear()}`
    }
  }

  // Get content for a specific day and time slot
  const getContentForSlot = (dayIndex: number, timeIndex: number) => {
    return contentItems.filter((item) => item.dayIndex === dayIndex && item.timeIndex === timeIndex)
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-slate-50 dark:bg-slate-800/50 flex flex-row items-center justify-between p-4">
        <CardTitle className="text-lg">Content Calendar</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={prevWeek}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="min-w-[180px]">
                <Calendar className="mr-2 h-4 w-4" />
                {formatDateRange()}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="center">
              {/* Calendar picker would go here */}
              <div className="p-4">
                <div className="text-center mb-2">Select a date</div>
                <Button className="w-full" onClick={() => setCurrentWeek(new Date())}>
                  Today
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          <Button variant="outline" size="sm" onClick={nextWeek}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Select value={view} onValueChange={(value: "week" | "day") => setView(value)}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="View" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Week View</SelectItem>
              <SelectItem value="day">Day View</SelectItem>
            </SelectContent>
          </Select>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Content
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-auto">
          {view === "week" ? (
            <div className="min-w-[800px]">
              {/* Week header */}
              <div className="grid grid-cols-[100px_repeat(7,1fr)] bg-muted">
                <div className="p-2 text-center text-xs font-medium border-r"></div>
                {weekDates.map((date, index) => (
                  <div
                    key={index}
                    className={`p-2 text-center text-xs font-medium border-r ${
                      date.toDateString() === new Date().toDateString() ? "bg-blue-50 text-blue-800" : ""
                    }`}
                  >
                    <div>{date.toLocaleString("default", { weekday: "short" })}</div>
                    <div className="text-sm font-bold">{date.getDate()}</div>
                  </div>
                ))}
              </div>

              {/* Time slots */}
              <div>
                {timeSlots.map((timeSlot, timeIndex) => (
                  <div key={timeIndex} className="grid grid-cols-[100px_repeat(7,1fr)] border-b">
                    <div className="p-2 text-xs text-muted-foreground border-r">{timeSlot}</div>
                    {weekDates.map((_, dayIndex) => {
                      const slotContent = getContentForSlot(dayIndex, timeIndex)

                      return (
                        <div key={dayIndex} className="p-1 min-h-[80px] border-r relative group">
                          {slotContent.map((content) => {
                            const platformColor = platformColors[content.platform] || {
                              bg: "bg-gray-100",
                              text: "text-gray-800",
                              border: "border-gray-200",
                            }
                            const statusColor = statusColors[content.status] || {
                              bg: "bg-gray-100",
                              text: "text-gray-800",
                              border: "border-gray-200",
                            }

                            return (
                              <motion.div
                                key={content.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className={`rounded-md p-1 mb-1 border ${platformColor.border} ${platformColor.bg} ${platformColor.text} text-xs`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-medium truncate">{content.title}</span>
                                  <Badge
                                    variant="outline"
                                    className={`text-[10px] ${statusColor.bg} ${statusColor.text} ${statusColor.border}`}
                                  >
                                    {content.status}
                                  </Badge>
                                </div>
                                <div className="text-[10px] opacity-80 truncate">{content.theme}</div>
                              </motion.div>
                            )
                          })}

                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5 pointer-events-none">
                            <Button size="sm" variant="ghost" className="pointer-events-auto">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              {/* Day view implementation */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium">
                  {weekDates[selectedDay].toLocaleDateString("default", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </h3>

                <div className="flex justify-center mt-2 space-x-1">
                  {weekDates.map((date, index) => (
                    <Button
                      key={index}
                      variant={selectedDay === index ? "default" : "outline"}
                      size="sm"
                      className="w-9 h-9 p-0"
                      onClick={() => setSelectedDay(index)}
                    >
                      {date.getDate()}
                    </Button>
                  ))}
                </div>

                <div className="mt-4 space-y-2">
                  {timeSlots.map((timeSlot, timeIndex) => {
                    const slotContent = getContentForSlot(selectedDay, timeIndex)

                    return (
                      <div key={timeIndex} className="flex border rounded-md overflow-hidden">
                        <div className="w-24 p-2 bg-muted text-xs font-medium flex items-center justify-center">
                          {timeSlot}
                        </div>
                        <div className="flex-1 p-2 min-h-[60px] flex items-center">
                          {slotContent.length > 0 ? (
                            <div className="w-full space-y-2">
                              {slotContent.map((content) => {
                                const platformColor = platformColors[content.platform] || {
                                  bg: "bg-gray-100",
                                  text: "text-gray-800",
                                  border: "border-gray-200",
                                }

                                return (
                                  <div
                                    key={content.id}
                                    className={`rounded-md p-2 border ${platformColor.border} ${platformColor.bg}`}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className={`font-medium ${platformColor.text}`}>{content.title}</span>
                                      <Badge
                                        variant="outline"
                                        className={`${statusColors[content.status].bg} ${statusColors[content.status].text} ${statusColors[content.status].border}`}
                                      >
                                        {content.status}
                                      </Badge>
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">{content.theme}</div>
                                  </div>
                                )
                              })}
                            </div>
                          ) : (
                            <Button variant="ghost" size="sm" className="w-full justify-center border border-dashed">
                              <Plus className="h-4 w-4 mr-2" />
                              Add Content
                            </Button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Performance Heatmap */}
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2">Performance by Day/Time</h3>
          <div className="h-[120px]">
            <NivoCharts.HeatMap
              data={[
                {
                  id: "Monday",
                  data: [
                    { x: "9AM", y: 3.2 },
                    { x: "12PM", y: 2.8 },
                    { x: "3PM", y: 4.1 },
                    { x: "6PM", y: 4.5 },
                    { x: "9PM", y: 3.8 },
                  ],
                },
                {
                  id: "Tuesday",
                  data: [
                    { x: "9AM", y: 2.9 },
                    { x: "12PM", y: 3.1 },
                    { x: "3PM", y: 3.8 },
                    { x: "6PM", y: 4.2 },
                    { x: "9PM", y: 3.5 },
                  ],
                },
                {
                  id: "Wednesday",
                  data: [
                    { x: "9AM", y: 2.7 },
                    { x: "12PM", y: 3.4 },
                    { x: "3PM", y: 4.2 },
                    { x: "6PM", y: 4.6 },
                    { x: "9PM", y: 3.9 },
                  ],
                },
                {
                  id: "Thursday",
                  data: [
                    { x: "9AM", y: 3.0 },
                    { x: "12PM", y: 3.2 },
                    { x: "3PM", y: 3.9 },
                    { x: "6PM", y: 4.3 },
                    { x: "9PM", y: 3.7 },
                  ],
                },
                {
                  id: "Friday",
                  data: [
                    { x: "9AM", y: 3.3 },
                    { x: "12PM", y: 3.5 },
                    { x: "3PM", y: 4.5 },
                    { x: "6PM", y: 4.8 },
                    { x: "9PM", y: 4.2 },
                  ],
                },
                {
                  id: "Saturday",
                  data: [
                    { x: "9AM", y: 2.5 },
                    { x: "12PM", y: 2.9 },
                    { x: "3PM", y: 3.7 },
                    { x: "6PM", y: 4.0 },
                    { x: "9PM", y: 4.5 },
                  ],
                },
                {
                  id: "Sunday",
                  data: [
                    { x: "9AM", y: 2.2 },
                    { x: "12PM", y: 2.6 },
                    { x: "3PM", y: 3.4 },
                    { x: "6PM", y: 3.8 },
                    { x: "9PM", y: 3.2 },
                  ],
                },
              ]}
              margin={{ top: 10, right: 10, bottom: 20, left: 60 }}
              valueFormat=">-.2s"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Time",
                legendPosition: "middle",
                legendOffset: 36,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Day",
                legendPosition: "middle",
                legendOffset: -40,
              }}
              colors={{
                type: "sequential",
                scheme: "blues",
                minValue: 2,
                maxValue: 5,
              }}
              emptyColor="#eeeeee"
              legends={[
                {
                  anchor: "bottom",
                  translateX: 0,
                  translateY: 30,
                  length: 140,
                  thickness: 8,
                  direction: "row",
                  tickPosition: "after",
                  tickSize: 3,
                  tickSpacing: 4,
                  tickOverlap: false,
                  tickFormat: ">-.2s",
                  title: "Engagement Rate",
                  titleAlign: "start",
                  titleOffset: 4,
                },
              ]}
            />
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            <p>Engagement rate by day and time. Darker colors indicate higher engagement.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

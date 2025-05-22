// Fix the growth timeline chart error
"use client"

import { useEffect, useRef } from "react"
import * as d3 from "d3"

interface DataPoint {
  date: Date
  revenue: number
  users: number
  conversions: number
}

interface PerformanceChartProps {
  data: DataPoint[]
  height?: number
  width?: number
  series?: string[]
}

export function PerformanceChart({
  data,
  height = 300,
  width = 600,
  series = ["revenue", "users", "conversions"],
}: PerformanceChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data || data.length === 0) return

    // Clear previous chart
    d3.select(svgRef.current).selectAll("*").remove()

    const margin = { top: 20, right: 80, bottom: 30, left: 50 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)

    // Create scales
    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date) as [Date, Date])
      .range([0, innerWidth])

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (d) => {
          return Math.max(d.revenue || 0, d.users || 0, d.conversions || 0)
        }) as number,
      ])
      .range([innerHeight, 0])

    // Add axes
    svg.append("g").attr("transform", `translate(0,${innerHeight})`).call(d3.axisBottom(x))

    svg.append("g").call(d3.axisLeft(y))

    // Color scale for different series
    const color = d3.scaleOrdinal<string>().domain(series).range(["#3b82f6", "#10b981", "#f59e0b"])

    // Create line generator
    const line = d3
      .line<DataPoint>()
      .x((d) => x(d.date))
      .y((d) => y(0))
      .curve(d3.curveMonotoneX)

    // Add lines for each series
    series.forEach((s) => {
      // Skip if the series doesn't exist in the data
      if (!(s in data[0])) return

      // Create a properly typed line generator for this series
      const typedLine = d3
        .line<DataPoint>()
        .x((d) => x(d.date))
        .y((d) => {
          const value = d[s as keyof DataPoint]
          return typeof value === "number" ? y(value) : y(0)
        })
        .curve(d3.curveMonotoneX)

      // Add the path with proper data
      const path = svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", color(s))
        .attr("stroke-width", 2.5)
        .attr("d", typedLine)

      // Animate the path
      const pathLength = path.node()?.getTotalLength() || 0

      path
        .attr("stroke-dasharray", pathLength)
        .attr("stroke-dashoffset", pathLength)
        .transition()
        .duration(2000)
        .attr("stroke-dashoffset", 0)
    })

    // Add legend
    const legend = svg
      .append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "start")
      .selectAll("g")
      .data(series)
      .enter()
      .append("g")
      .attr("transform", (d, i) => `translate(${innerWidth + 10},${i * 20})`)

    legend.append("rect").attr("x", 0).attr("width", 15).attr("height", 15).attr("fill", color)

    legend
      .append("text")
      .attr("x", 20)
      .attr("y", 9.5)
      .attr("dy", "0.32em")
      .text((d) => d.charAt(0).toUpperCase() + d.slice(1))
  }, [data, height, width, series])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg ref={svgRef} className="w-full h-full"></svg>
    </div>
  )
}

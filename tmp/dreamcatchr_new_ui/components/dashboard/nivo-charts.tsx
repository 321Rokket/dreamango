"use client"

import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveHeatMap } from "@nivo/heatmap"

// Export individual chart components
export function BarChart(props: any) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ResponsiveBar
        data={[
          { name: "Mobile", value: 45 },
          { name: "Desktop", value: 35 },
          { name: "Tablet", value: 20 },
        ]}
        keys={["value"]}
        indexBy="name"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "blues" }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        {...props}
      />
    </div>
  )
}

export function LineChart(props: any) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ResponsiveLine
        data={[
          {
            id: "Conversion Rate",
            data: [
              { x: "Jan", y: 2.3 },
              { x: "Feb", y: 2.5 },
              { x: "Mar", y: 2.7 },
              { x: "Apr", y: 2.9 },
              { x: "May", y: 3.1 },
              { x: "Jun", y: 3.3 },
              { x: "Jul", y: 3.2 },
              { x: "Aug", y: 3.4 },
              { x: "Sep", y: 3.6 },
              { x: "Oct", y: 3.8 },
              { x: "Nov", y: 4.0 },
              { x: "Dec", y: 4.2 },
            ],
          },
        ]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Month",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Conversion Rate (%)",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "blues" }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        {...props}
      />
    </div>
  )
}

export function PieChart(props: any) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ResponsivePie
        data={[
          { id: "Social", value: 35 },
          { id: "Search", value: 25 },
          { id: "Direct", value: 20 },
          { id: "Email", value: 15 },
          { id: "Referral", value: 5 },
        ]}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "blues" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: "color" }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#ffffff"
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
          },
        ]}
        {...props}
      />
    </div>
  )
}

export function HeatMap(props: any) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ResponsiveHeatMap
        data={[
          {
            id: "Monday",
            data: [
              { x: "00:00", y: 12 },
              { x: "04:00", y: 5 },
              { x: "08:00", y: 25 },
              { x: "12:00", y: 35 },
              { x: "16:00", y: 40 },
              { x: "20:00", y: 22 },
            ],
          },
          {
            id: "Tuesday",
            data: [
              { x: "00:00", y: 10 },
              { x: "04:00", y: 3 },
              { x: "08:00", y: 28 },
              { x: "12:00", y: 32 },
              { x: "16:00", y: 38 },
              { x: "20:00", y: 20 },
            ],
          },
          {
            id: "Wednesday",
            data: [
              { x: "00:00", y: 8 },
              { x: "04:00", y: 2 },
              { x: "08:00", y: 30 },
              { x: "12:00", y: 38 },
              { x: "16:00", y: 42 },
              { x: "20:00", y: 25 },
            ],
          },
          {
            id: "Thursday",
            data: [
              { x: "00:00", y: 9 },
              { x: "04:00", y: 4 },
              { x: "08:00", y: 32 },
              { x: "12:00", y: 36 },
              { x: "16:00", y: 40 },
              { x: "20:00", y: 24 },
            ],
          },
          {
            id: "Friday",
            data: [
              { x: "00:00", y: 15 },
              { x: "04:00", y: 6 },
              { x: "08:00", y: 24 },
              { x: "12:00", y: 30 },
              { x: "16:00", y: 35 },
              { x: "20:00", y: 30 },
            ],
          },
          {
            id: "Saturday",
            data: [
              { x: "00:00", y: 25 },
              { x: "04:00", y: 12 },
              { x: "08:00", y: 18 },
              { x: "12:00", y: 25 },
              { x: "16:00", y: 30 },
              { x: "20:00", y: 35 },
            ],
          },
          {
            id: "Sunday",
            data: [
              { x: "00:00", y: 22 },
              { x: "04:00", y: 10 },
              { x: "08:00", y: 15 },
              { x: "12:00", y: 22 },
              { x: "16:00", y: 28 },
              { x: "20:00", y: 32 },
            ],
          },
        ]}
        margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90,
          legend: "",
          legendOffset: 46,
        }}
        axisRight={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Day",
          legendPosition: "middle",
          legendOffset: 70,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Day",
          legendPosition: "middle",
          legendOffset: -72,
        }}
        colors={{
          type: "sequential",
          scheme: "blues",
          minValue: 0,
          maxValue: 50,
        }}
        emptyColor="#555555"
        legends={[
          {
            anchor: "bottom",
            translateX: 0,
            translateY: 30,
            length: 400,
            thickness: 8,
            direction: "row",
            tickPosition: "after",
            tickSize: 3,
            tickSpacing: 4,
            tickOverlap: false,
            tickFormat: ">-.2s",
            title: "Engagement",
            titleAlign: "start",
            titleOffset: 4,
          },
        ]}
        {...props}
      />
    </div>
  )
}

// Legacy exports for backward compatibility
export function NivoChartsBarChart(props: any) {
  return <BarChart {...props} />
}

export function NivoChartsLineChart(props: any) {
  return <LineChart {...props} />
}

export function NivoChartsPieChart(props: any) {
  return <PieChart {...props} />
}

export function NivoChartsHeatMap(props: any) {
  return <HeatMap {...props} />
}

export const NivoCharts = {
  BarChart,
  LineChart,
  PieChart,
  HeatMap,
}

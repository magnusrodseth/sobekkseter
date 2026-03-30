"use client";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ReferenceLine,
  Cell,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

interface RangeDataPoint {
  label: string;
  min: number;
  max: number;
  current: number;
  unit: string;
  key: string;
}

interface DayRangeChartProps {
  data: RangeDataPoint[];
}

const chartConfig = {
  range: {
    label: "Dagsintervall",
    theme: {
      light: "hsl(203, 40%, 39%)",
      dark: "hsl(203, 40%, 55%)",
    },
  },
  current: {
    label: "Nåværende",
    theme: {
      light: "hsl(15, 80%, 50%)",
      dark: "hsl(15, 80%, 60%)",
    },
  },
} satisfies ChartConfig;

const DayRangeChart: React.FC<DayRangeChartProps> = ({ data }) => {
  const chartData = data.map((d) => ({
    label: d.label,
    base: d.min,
    range: d.max - d.min,
    current: d.current,
    unit: d.unit,
    min: d.min,
    max: d.max,
  }));

  return (
    <ChartContainer config={chartConfig} className="aspect-auto h-[200px] w-full">
      <BarChart
        data={chartData}
        layout="vertical"
        margin={{ top: 8, right: 48, bottom: 8, left: 0 }}
        barCategoryGap="25%"
      >
        <XAxis type="number" hide />
        <YAxis
          type="category"
          dataKey="label"
          width={90}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(_value, _name, item) => {
                const d = item.payload;
                return (
                  <div className="flex flex-col gap-0.5 text-xs">
                    <span>Min: {d.min.toFixed(1)} {d.unit}</span>
                    <span>Nå: {d.current.toFixed(1)} {d.unit}</span>
                    <span>Maks: {d.max.toFixed(1)} {d.unit}</span>
                  </div>
                );
              }}
            />
          }
        />
        {/* Invisible base bar to offset the visible range */}
        <Bar dataKey="base" stackId="range" fill="transparent" radius={0} />
        {/* Visible range bar */}
        <Bar dataKey="range" stackId="range" radius={4}>
          {chartData.map((_entry, idx) => (
            <Cell key={idx} fill="var(--color-range)" fillOpacity={0.3} />
          ))}
        </Bar>
        {/* Reference lines for current values */}
        {chartData.map((d) => (
          <ReferenceLine
            key={d.label}
            x={d.current}
            stroke="var(--color-current)"
            strokeWidth={2}
            strokeDasharray="4 2"
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
};

export default DayRangeChart;

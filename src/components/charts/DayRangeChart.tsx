"use client";

import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import Wrapper from "@/components/Wrapper";

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
  min: {
    label: "Dagens laveste",
    theme: {
      light: "hsl(210, 70%, 55%)",
      dark: "hsl(210, 70%, 65%)",
    },
  },
  current: {
    label: "Nåværende",
    theme: {
      light: "hsl(155, 50%, 35%)",
      dark: "hsl(155, 50%, 50%)",
    },
  },
  max: {
    label: "Dagens høyeste",
    theme: {
      light: "hsl(0, 72%, 51%)",
      dark: "hsl(0, 72%, 60%)",
    },
  },
} satisfies ChartConfig;

function computeDomain(point: RangeDataPoint): [number, number] {
  const values = [point.min, point.current, point.max];
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);
  const range = dataMax - dataMin;

  // Add padding so bars don't fill the entire axis
  const padding = range > 0 ? range * 0.5 : Math.abs(dataMin) * 0.1 || 1;
  let bottom = Math.floor((dataMin - padding) * 10) / 10;
  const top = Math.ceil((dataMax + padding) * 10) / 10;

  // Only clamp to 0 when the minimum is actually 0 (e.g. wind with no wind).
  // Don't clamp for high-baseline metrics like humidity (91%) or pressure (1000mb)
  // where anchoring to 0 would flatten all bars.
  if (dataMin === 0) bottom = 0;

  return [bottom, top];
}

function MetricChart({ point }: { point: RangeDataPoint }) {
  const chartData = [
    {
      label: point.label,
      min: parseFloat(point.min.toFixed(1)),
      current: parseFloat(point.current.toFixed(1)),
      max: parseFloat(point.max.toFixed(1)),
      unit: point.unit,
    },
  ];

  const [domainMin, domainMax] = computeDomain(point);

  return (
    <Wrapper className="m-0">
      <p className="mb-1 text-sm font-medium text-[hsl(var(--foreground))]">
        {point.label}{" "}
        <span className="text-[hsl(var(--muted-foreground))]">({point.unit})</span>
      </p>
      <ChartContainer config={chartConfig} className="aspect-auto h-[180px] w-full">
        <BarChart
          data={chartData}
          margin={{ top: 8, right: 8, bottom: 0, left: -8 }}
          barGap={4}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="label" hide />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 13 }}
            width={65}
            domain={[domainMin, domainMax]}
            allowDataOverflow
            tickFormatter={(v: number) => Number.isInteger(v) ? v.toString() : v.toFixed(1)}
          />
          <ChartTooltip
            content={<ChartTooltipContent />}
          />
          <Bar
            dataKey="min"
            fill="var(--color-min)"
            radius={[4, 4, 0, 0]}
            barSize={32}

          />
          <Bar
            dataKey="current"
            fill="var(--color-current)"
            radius={[4, 4, 0, 0]}
            barSize={32}

          />
          <Bar
            dataKey="max"
            fill="var(--color-max)"
            radius={[4, 4, 0, 0]}
            barSize={32}

          />
        </BarChart>
      </ChartContainer>
    </Wrapper>
  );
}

const legendItems = [
  { key: "min", label: "Dagens laveste", className: "bg-[hsl(210,70%,55%)] dark:bg-[hsl(210,70%,65%)]" },
  { key: "current", label: "Nåværende", className: "bg-[hsl(155,50%,35%)] dark:bg-[hsl(155,50%,50%)]" },
  { key: "max", label: "Dagens høyeste", className: "bg-[hsl(0,72%,51%)] dark:bg-[hsl(0,72%,60%)]" },
] as const;

const DayRangeChart: React.FC<DayRangeChartProps> = ({ data }) => {
  return (
    <div className="space-y-4 px-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {data.map((point) => (
          <MetricChart key={point.key} point={point} />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
        {legendItems.map((item) => (
          <div key={item.key} className="flex items-center gap-1.5">
            <div className={`h-2.5 w-2.5 shrink-0 rounded-sm ${item.className}`} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayRangeChart;

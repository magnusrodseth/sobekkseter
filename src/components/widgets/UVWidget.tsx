import React from "react";
import Wrapper from "../Wrapper";
import { Muted } from "../ui/typography";

interface UVWidgetProps {
  index: string;
  dayHigh?: string;
}

function uvLabel(index: number): string {
  if (index <= 2) return "Lav";
  if (index <= 5) return "Moderat";
  if (index <= 7) return "Høy";
  if (index <= 10) return "Veldig høy";
  return "Ekstrem";
}

function uvColor(index: number): string {
  if (index <= 2) return "text-pine-600 dark:text-pine-400";
  if (index <= 5) return "text-amber-600 dark:text-amber-400";
  if (index <= 7) return "text-orange-600 dark:text-orange-400";
  if (index <= 10) return "text-red-600 dark:text-red-400";
  return "text-purple-600 dark:text-purple-400";
}

function uvBarWidth(index: number): string {
  const pct = Math.min((index / 11) * 100, 100);
  return `${pct}%`;
}

function uvBarColor(index: number): string {
  if (index <= 2) return "bg-pine-500";
  if (index <= 5) return "bg-amber-500";
  if (index <= 7) return "bg-orange-500";
  if (index <= 10) return "bg-red-500";
  return "bg-purple-500";
}

const UVWidget: React.FC<UVWidgetProps> = ({ index, dayHigh }) => {
  const parsed = parseFloat(index);
  if (isNaN(parsed)) return null;

  const dayHighParsed = dayHigh ? parseFloat(dayHigh) : null;

  return (
    <Wrapper>
      <div className="flex flex-row justify-between">
        <Muted>UV-indeks</Muted>
        {dayHighParsed !== null && !isNaN(dayHighParsed) && (
          <Muted className="font-bold">Maks: {dayHighParsed}</Muted>
        )}
      </div>
      <div className="mt-1 flex items-center gap-3">
        <span className={`text-2xl font-semibold ${uvColor(parsed)}`}>
          {parsed}
        </span>
        <span className={`text-sm font-medium ${uvColor(parsed)}`}>
          {uvLabel(parsed)}
        </span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[hsl(var(--muted))]">
        <div
          className={`h-full rounded-full transition-all ${uvBarColor(parsed)}`}
          style={{ width: uvBarWidth(parsed) }}
        />
      </div>
    </Wrapper>
  );
};

export default UVWidget;

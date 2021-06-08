import React from "react";
import { PieChart, Pie, Sector } from "recharts";
import {
  CHARTS_BLUE,
  CHARTS_GRAY,
  DEGREES_IN_CIRCLE_RATIO,
} from "../../constants";
import getDegreesForCharts from "../../utils/getDegreesForCharts";

/**
 * The plotted pie is split into data.length sectors.
 * This method finds the sector corresponding to the parsed value.
 *
 * @param value is the value to be converted into an index.
 * @returns an index corresponding to the parsed value.
 */
const getActiveSector = (value: number) => {
  const activeSector = Math.floor(value / DEGREES_IN_CIRCLE_RATIO);

  return activeSector;
};

const ActiveSector = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={CHARTS_BLUE}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={CHARTS_BLUE}
      />
    </g>
  );
};

interface CustomPieChartProps {
  width: number;
  height: number;
  value: string;
}

const CustomPieChart = ({ width, height, value }: CustomPieChartProps) => {
  const data = getDegreesForCharts();

  let parsedValue: number;

  // If an error occurred when parsing the value,
  // there is not need in displaying the Card component.
  try {
    parsedValue = parseFloat(value);
  } catch (error) {
    return null;
  }

  const activeSector = getActiveSector(parsedValue);

  return (
    <PieChart width={width} height={height}>
      <Pie
        activeIndex={activeSector}
        activeShape={ActiveSector}
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        startAngle={90}
        endAngle={-270}
        fill={CHARTS_GRAY}
        dataKey="value"
      />
    </PieChart>
  );
};

export default CustomPieChart;

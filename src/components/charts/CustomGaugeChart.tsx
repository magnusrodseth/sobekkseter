import React from "react";
import { PieChart, Pie } from "recharts";
import { CHARTS_BLUE } from "../../constants";

interface CustomGaugeChartProps {
  width: number;
  height: number;
  value: string;
}

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

/**
 * A custom gauge chart.
 * Note that by  setting cx="50%" and cy="100%", we convert a pie chart to a gauge chart.
 *
 * @returns a HTML representation of the chart.
 */
const CustomGaugeChart: React.FC<CustomGaugeChartProps> = ({
  width,
  height,
  value,
}: CustomGaugeChartProps) => {
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data01}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="100%"
        outerRadius={75}
        fill={CHARTS_BLUE}
      />
    </PieChart>
  );
};

export default CustomGaugeChart;

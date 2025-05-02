"use client";

import { Chart, useChart } from "@chakra-ui/charts";
import { Area, AreaChart } from "recharts";

// width="28" height="12"
type BalanceChartProps = {
  width: string | number;
  height: string | number;
};

export const BalanceChart = (props: BalanceChartProps) => {
  const chart = useChart({
    data: [
      { value: 10 },
      { value: 16 },
      { value: 19 },
      { value: 15 },
      { value: 12 },
      { value: 15 },
      { value: 10 },
      { value: 18 },
      { value: 10 },
      { value: 16 },
      { value: 19 },
      { value: 15 },
      { value: 12 },
      { value: 15 },
      { value: 10 },
      { value: 18 },
    ],
    series: [{ name: "value", color: "primary" }],
  });

  return (
    <Chart.Root {...props} chart={chart}>
      <AreaChart accessibilityLayer data={chart.data}>
        {chart.series.map((item) => (
          <defs key={item.name}>
            <Chart.Gradient
              id={`${item.name}-gradient`}
              stops={[
                { offset: "0%", color: "#2D83EC", opacity: 1 },
                { offset: "100%", color: "#1AC9FF", opacity: 0.01 },
              ]}
            />
          </defs>
        ))}

        {chart.series.map((item) => (
          <Area
            key={item.name}
            type="natural"
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={`url(#${item.name}-gradient)`}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </AreaChart>
    </Chart.Root>
  );
};

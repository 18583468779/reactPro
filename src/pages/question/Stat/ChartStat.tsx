import * as React from "react";
import * as echarts from "echarts";
import { Typography } from "antd";
import { useEffect, useRef } from "react";
type EChartsOption = echarts.EChartsOption;

const { Title } = Typography;

export const ChartStat: React.FC = () => {
  const pieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pieRef.current) return;
    const myChart = echarts.init(pieRef.current);
    const option: EChartsOption = {
      legend: {
        top: "bottom",
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: false },
          dataView: { show: false, readOnly: false },
          restore: { show: false },
          saveAsImage: { show: false },
        },
      },
      series: [
        {
          name: "数据的饼状",
          type: "pie",
          radius: [50, 100],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 8,
          },
          data: [
            { value: 40, name: "rose 1" },
            { value: 38, name: "rose 2" },
            { value: 32, name: "rose 3" },
            { value: 30, name: "rose 4" },
            { value: 28, name: "rose 5" },
            { value: 26, name: "rose 6" },
            { value: 22, name: "rose 7" },
            { value: 18, name: "rose 8" },
          ],
        },
      ],
    };
    option && myChart.setOption(option);
  }, []);

  return (
    <div>
      <Title level={3}>图表统计</Title>
      <div ref={pieRef} style={{ width: "380px", height: "400px" }}></div>
    </div>
  );
};

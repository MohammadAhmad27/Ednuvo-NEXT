import ReactECharts from "echarts-for-react";

export default function OrderOverviewChart() {
  const option = {
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderColor: "#eee",
      borderWidth: 1,
      textStyle: {
        color: "#333",
      },
      formatter: (params: any) => {
        const data = params[0];
        return `${data.name} 2024: ${data.value}`;
      },
    },
    grid: {
      left: "2%",
      right: "2%",
      bottom: "3%",
      top: "2%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisLine: {
        show: true,
        lineStyle: {
          color: "##00001A4D",
          width: 2,
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#eee",
          type: "dashed",
        },
      },
      axisLabel: {
        color: "##000000B2",
        fontSize: 12,
        fontWeight: 400,
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 60,
      interval: 10,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#eee",
          type: "dashed",
        },
      },
      axisLabel: {
        color: "##000000B2",
        fontSize: 12,
        fontWeight: 400,
      },
    },
    series: [
      {
        data: [14, 21, 29, 24, 26, 24, 19, 22, 36, 34, 9, 8],
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 8,
        itemStyle: {
          color: "#FFFFFF",
          borderWidth: 1,
          borderColor: "#5BBB7B",
        },
        lineStyle: {
          width: 2,
          color: "#5BBB7B",
          shadowColor: "#8979FF66",
          shadowBlur: 4,
          shadowOffsetX: 0,
          shadowOffsetY: 3,
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(91, 187, 123, 0.3)",
              },
              {
                offset: 1,
                color: "rgba(91, 187, 123, 0.05)",
              },
            ],
          },
        },
      },
    ],
  };

  return (
    <div className="w-full h-full px-2 pb-4">
      <ReactECharts
        option={option}
        style={{ height: "400px", width: "100%" }}
      />
      <div className="text-center text-[14px] font-normal text-black mt-2">
        2024
      </div>
    </div>
  );
}

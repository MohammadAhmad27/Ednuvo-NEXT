import ReactECharts from "echarts-for-react";

export default function RequestsOverviewChart() {
  const months = [
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
  ];
  const totalJobRequests = [19, 22, 34, 34, 30, 33, 27, 31, 50, 47, 13, 12];
  const completedJobs = [14, 22, 29, 24, 26, 24, 19, 22, 36, 34, 9, 8];

  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderWidth: 1,
      borderColor: "#E9E9E9",
      padding: 10,
      textStyle: {
        color: "#222222",
      },
      formatter: (params: any) => {
        const totalJobs = params[0].value;
        const completedJobs = params[1].value;
        return `${params[0].name}<br/>
                  <div style="margin-top:10px">
                  <span style="display:inline-block;margin-right:4px;border-radius:50%;width:10px;height:10px;background-color:#E1C041"></span> Total Job Requests: ${totalJobs}<br/>
                  <span style="display:inline-block;margin-right:4px;border-radius:50%;width:10px;height:10px;background-color:#5BBB7B"></span> Completed Jobs: ${completedJobs}
                  </div>`;
      },
    },
    legend: {
      data: ["Total Job Requests per Month", "Completed Jobs per Month"],
      bottom: 20,
      icon: "circle",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "#000000",
        fontSize: 12,
        fontWeight: 400,
      },
    },
    grid: {
      left: "1%",
      right: "1%",
      bottom: "15%",
      top: "1%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: months,
      axisLine: {
        lineStyle: {
          color: "#00001A4D",
          width: 1,
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#000000B2",
        fontSize: 12,
        fontWeight: 400,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#00001A26",
          type: "dashed",
        },
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
      axisLabel: {
        color: "#000000B2",
        fontSize: 12,
        fontWeight: 400,
      },
      splitLine: {
        lineStyle: {
          color: "#00001A26",
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "Total Job Requests per Month",
        type: "line",
        data: totalJobRequests,
        symbol: "circle",
        symbolSize: 8,
        itemStyle: {
          color: "#FFFFFF",
          borderWidth: 1,
          borderColor: "#E0C041",
        },
        lineStyle: {
          width: 2,
          color: "#E1C041",
          shadowColor: "#E1C04166",
          shadowBlur: 3,
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
                color: "rgba(225, 192, 65, 0.3)",
              },
              {
                offset: 1,
                color: "rgba(225, 192, 65, 0.05)",
              },
            ],
          },
        },
        smooth: true,
        z: 2,
      },
      {
        name: "Completed Jobs per Month",
        type: "line",
        data: completedJobs,
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
          shadowColor: "#5BBB7B66",
          shadowBlur: 3,
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
        smooth: true,
        z: 1,
      },
    ],
  };

  return (
    <div className="relative w-full h-full px-2">
      <ReactECharts
        option={options}
        style={{ height: "400px", width: "100%" }}
      />
      <p className="absolute bottom-24 left-[39px] flex items-center gap-1 text-[12px] font-semibold text-black">
        Year:
        <span className="font-normal">2024</span>
      </p>
    </div>
  );
}

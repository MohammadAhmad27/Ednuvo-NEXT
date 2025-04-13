import { analyticsCardData } from "@/app/service-requester-dashboard/content";

const AnalyticsCardComponent = () => {
  return (
    <div className="bg-white rounded-2xl shadow-blackshadow px-[15px] py-[14px]">
      <div className="w-full grid grid-cols-4 gap-4">
        {analyticsCardData?.map((item) => (
          <div
            key={item?.id}
            className="bg-[#55E2551A] rounded-xl flex flex-col gap-3 justify-between items-start px-4 py-3"
          >
            <h3 className="text-[16px] font-normal text-[#4B4E4D]">
              {item?.label}
            </h3>
            <p
              className={`flex items-center  ${
                item?.unit === "SAR"
                  ? "gap-2 flex-wrap md:max-lg:leading-none"
                  : ""
              } text-[30px] font-medium text-[#2E302F] `}
            >
              <span>{item?.value}</span>
              <span>{item?.unit}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsCardComponent;

import { AnalyticsCard } from "@/interfaces/Service-Requester-Dashboard";

interface AnalyticsCardProps {
  analyticsCardData: AnalyticsCard[];
}

const AnalyticsCardComponent = ({ analyticsCardData }: AnalyticsCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-blackshadow px-3 py-2">
      <div className="w-full grid max-md:grid-cols-2 md:grid-cols-4 gap-4">
        {analyticsCardData?.map((item) => (
          <div
            key={item?.id}
            className="bg-[#55E2551A] rounded-xl flex flex-col gap-3 justify-between items-start px-4 py-2"
          >
            <h3 className="text-[14px] font-normal text-[#4B4E4D]">
              {item?.label}
            </h3>
            <p
              className={`flex items-center  ${
                item?.unit === "SAR"
                  ? "gap-2 flex-wrap md:max-lg:leading-none"
                  : ""
              } text-[28px] font-medium text-[#2E302F] `}
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

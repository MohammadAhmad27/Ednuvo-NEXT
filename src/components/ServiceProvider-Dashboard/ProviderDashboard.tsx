import ProfileCompletion from "@/shared/ProfileCompletion";
import AnalyticsCardComponent from "../ui/Cards/AnalyticsCard";
import {
  activeOrdersData,
  ordersDataFilters,
  providerOrderAnalyticsData,
} from "@/app/service-provider-dashboard/content";
import OrderOverviewChart from "./sections/Dashboard/OrderOverviewChart";
import Image from "next/image";
import { useState } from "react";
import JobRequestCardComponent from "../ui/Cards/JobRequestCard";
import OrderCardComponent from "../ui/Cards/OrderCard";

const ProviderDashboard = () => {
  const [activeButton, setActiveButton] = useState(ordersDataFilters[0]?.label);
  return (
    <div className="w-full h-full flex flex-col gap-4 pt-2">
      {/* actual provider name */}
      <p className="text-[18px] font-normal text-[#2D2D2D]">
        Welcome, <span className="font-semibold">Saud Al-Faisal</span> Here’s
        your business overview.
      </p>
      <ProfileCompletion />
      <h2 className="text-[18px] font-semibold text-lightblack">Analytics</h2>
      <AnalyticsCardComponent analyticsCardData={providerOrderAnalyticsData} />
      <div className="w-full flex max-lg:flex-col items-stretch gap-4">
        {/* left */}
        <div className="xl:w-3/4 lg:w-2/3 max-lg:w-full bg-white border border-[#00000014] rounded-2xl">
          <div className="flex max-xl:flex-col justify-between items-center gap-2 px-5 py-5">
            <div className="flex items-center gap-2">
              <h3 className="text-[18px] font-semibold text-lightblack">
                Order Overview
              </h3>
              <Image
                src="/service-requester-dashboard/smartai.svg"
                alt="icon"
                width={20}
                height={20}
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              {ordersDataFilters?.map((item) => (
                <button
                  onClick={() => setActiveButton(item?.label)}
                  key={item?.id}
                  className={`text-12px] font-normal text-center rounded-full px-3 py-1 ${
                    activeButton === item?.label
                      ? "bg-[#181D27] text-white"
                      : "text-[#002F10] bg-[#F6F6F6] border border-[#DDE1F0]"
                  }`}
                >
                  {item?.label}
                </button>
              ))}
            </div>
          </div>
          <OrderOverviewChart />
        </div>
        {/* right */}
        <div className="xl:w-1/4 lg:w-1/3 max-lg:w-full space-y-2 bg-white border border-[#00000014] rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-[18px] font-semibold text-lightblack">
              New Job Request
            </h3>
            <Image
              src="/service-requester-dashboard/smartai.svg"
              alt="icon"
              width={20}
              height={20}
              className="object-cover"
            />
          </div>
          <JobRequestCardComponent />
        </div>
      </div>
      <div className="w-full space-y-3 bg-white border border-[#00000014] rounded-2xl px-5 py-4">
        <h3 className="text-[18px] font-semibold text-lightblack">
          Active Orders
        </h3>
        <OrderCardComponent orderData={activeOrdersData} orderType="active" />
      </div>
    </div>
  );
};

export default ProviderDashboard;

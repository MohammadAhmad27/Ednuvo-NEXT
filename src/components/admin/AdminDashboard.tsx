import Image from "next/image";
import { useState } from "react";
import { adminAnalyticsData, requestesDataFilters } from "@/app/admin/content";
import AnalyticsCardComponent from "../ui/Cards/AnalyticsCard";
import RequestsOverviewChart from "./sections/Dashboard/RequestsOverviewChart";

const AdminDashboard = () => {
  const [activeButton, setActiveButton] = useState(
    requestesDataFilters[0]?.label
  );

  return (
    <div className="w-full h-full flex flex-col gap-4 pt-2">
      <p className="text-[18px] font-normal text-[#2D2D2D]">
        Welcome, <span className="font-medium">Rayan</span> Here’s platform
        overview.
      </p>
      <h2 className="text-[18px] font-semibold text-lightblack">
        Platform Analytics
      </h2>
      <AnalyticsCardComponent analyticsCardData={adminAnalyticsData} />
      <div className="w-full flex max-lg:flex-col items-stretch gap-4">
        {/* left */}
        <div className="xl:w-3/4 lg:w-2/3 max-lg:w-full bg-white border border-[#00000014] rounded-2xl">
          <div className="flex max-xl:flex-col justify-between items-center gap-2 px-5 py-5">
            <div className="flex items-center gap-2">
              <h3 className="text-[18px] font-semibold text-lightblack">
                Jobs & Service Requests Overview
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
              {requestesDataFilters?.map((item) => (
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
          <RequestsOverviewChart />
        </div>
        {/* right */}
        {/* <div className="xl:w-1/4 lg:w-1/3 max-lg:w-full space-y-2 bg-white border border-[#00000014] rounded-2xl p-4">
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
              </div> */}
      </div>
    </div>
  );
};

export default AdminDashboard;

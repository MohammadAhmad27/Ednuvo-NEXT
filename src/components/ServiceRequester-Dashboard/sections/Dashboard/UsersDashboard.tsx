import {
  requesterJobAnalyticsData,
  searchOptions,
  userCardData,
} from "@/app/service-requester-dashboard/content";
import MUIAutoComplete from "@/components/ui/AutoComplete";
import AnalyticsCardComponent from "@/components/ui/Cards/AnalyticsCard";
import UserCardComponent from "@/components/ui/Cards/UserCard";
import ProfileCompletion from "@/shared/ProfileCompletion";
import Image from "next/image";

const UsersDashboard = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 pt-2">
      <div className="flex items-center justify-between gap-2">
        {/* actual requester name */}
        <p className="text-[18px] font-normal text-[#2D2D2D]">
          Welcome, <span className="font-semibold">Hassan Al-Omari</span> Here’s
          your business overview.
        </p>
        <button className="bg-primary text-[14px] font-medium text-white text-center rounded-full px-8 py-[6px]">
          Post a Job
        </button>
      </div>
      <ProfileCompletion />
      <h2 className="text-[18px] font-semibold text-lightblack">Analytics</h2>
      <AnalyticsCardComponent analyticsCardData={requesterJobAnalyticsData} />
      <div className="w-full flex items-center gap-2 bg-white rounded-2xl px-[15px] py-[14px]">
        <div className="w-4/5 flex items-center gap-2 pl-3 pr-1 py-2 ">
          <Image
            src="/service-requester-dashboard/search.svg"
            alt="search-icon"
            width={20}
            height={20}
            className="object-cover"
          />
          <input
            type="text"
            placeholder="Search by category"
            className="flex-1 outline-none text-[14px] placeholder:text-[14px] placeholder:font-normal placeholder:text-darkgray"
          />
          <button className="bg-primary text-[14px] font-medium text-white text-center rounded-full px-8 py-2">
            Search Now
          </button>
        </div>
        <button className="flex-1 text-[16px] font-normal text-darkgray bg-[#EEFCEE] rounded-xl px-6 py-3 flex items-center gap-2">
          <Image
            src="/service-requester-dashboard/filter.svg"
            alt="search-icon"
            width={20}
            height={20}
            className="object-cover"
          />
          Advance search
        </button>
      </div>
      {/* Card Component */}
      <div className="w-full flex flex-col gap-5 mt-1">
        <div className="w-full flex gap-2 justify-between items-center">
          <p className="text-[16px] font-normal text-darkgray">
            {userCardData?.length} Results
          </p>
          <div className="flex items-center gap-5">
            <p className="text-[16px] font-normal text-darkgray text-nowrap">
              Sort by:
            </p>
            <MUIAutoComplete
              options={searchOptions}
              label="Search by"
              width="100%"
              variant="green"
              onChange={(e: any) => console.log(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full h-full">
          <UserCardComponent />
        </div>
      </div>
    </div>
  );
};

export default UsersDashboard;

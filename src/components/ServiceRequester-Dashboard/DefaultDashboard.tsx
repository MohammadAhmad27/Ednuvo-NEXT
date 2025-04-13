import { ProfileCompletionComponent } from "./NewDashboard";
import AnalyticsCardComponent from "../ui/Cards/Analytics-Card";
import MUIAutoComplete from "../ui/AutoComplete";
import { searchOptions } from "@/app/service-requester-dashboard/content";
import UserCardComponent from "../ui/Cards/User-Card";

const DefaultDashboard = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 pt-2">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[18px] font-normal text-[#2D2D2D]">
          Welcome, <span className="font-semibold">Hassan Al-Omari</span> Here’s
          your business overview.
        </p>
        <button className="bg-primary text-[14px] font-medium text-white text-center rounded-full px-8 py-[6px]">
          Post a Job
        </button>
      </div>
      <ProfileCompletionComponent />
      <h2 className="text-[18px] font-semibold text-lightblack">Analytics</h2>
      <AnalyticsCardComponent />
      <div className="w-full bg-white rounded-2xl px-[15px] py-[14px] min-h-20"></div>
      {/* Card Component */}
      <div className="w-full flex flex-col gap-5 mt-1">
        <div className="w-full flex gap-2 justify-between items-center">
          <p className="text-[16px] font-normal text-darkgray">10 Results</p>
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

export default DefaultDashboard;

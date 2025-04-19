import Image from "next/image";
import {
  expertsCardData,
  searchOptions,
} from "@/app/service-requester-dashboard/content";
import ProfileCompletion from "@/shared/ProfileCompletion";
import MUIAutoComplete from "@/components/ui/AutoComplete";
import ExpertsCardComponent from "@/components/ui/Cards/ExpertsCard";

const NewDashboard = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 pt-2">
      <p className="text-[18px] font-normal text-[#2D2D2D]">
        Welcome, <span className="font-semibold">Hassan Al-Omari</span> Here’s
        your business overview.
      </p>
      <ProfileCompletion />
      <div className="mt-3 space-y-1">
        <div className="flex items-center gap-2">
          <h2 className="text-[22px] font-semibold text-black">
            Top 10 Matched Service Providers for Your Request
          </h2>
          <div className="relative group max-lg:hidden">
            <Image
              src="/service-requester-dashboard/smartai.svg"
              alt="icon"
              width={20}
              height={20}
              className="object-cover cursor-pointer"
            />
            <p className="invisible group-hover:visible absolute -top-[25px] -right-[97px] bg-white px-2 py-1 text-center text-nowrap text-[10px] font-normal text-black rounded-full">
              Powered by Smart AI
            </p>
          </div>
        </div>
        <p className="text-[16px] font-normal text-darkgray max-w-[900px]">
          Based on your job requirements, AI has selected the best professionals
          to fulfill your needs. Compare their profiles and choose the right
          expert for your task.
        </p>
        <p></p>
      </div>
      {/* Card Component */}
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex gap-2 justify-between items-center">
          <p className="text-[16px] font-normal text-darkgray">
            {expertsCardData?.length} Results
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
          <ExpertsCardComponent />
        </div>
      </div>
    </div>
  );
};

export default NewDashboard;

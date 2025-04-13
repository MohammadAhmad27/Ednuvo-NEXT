import Image from "next/image";
import ExpertsCardComponent from "../ui/Cards/Experts-Card";
import { searchOptions } from "@/app/service-requester-dashboard/content";
import MUIAutoComplete from "../ui/AutoComplete";

const value: number = 80;

const NewDashboard = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 pt-2">
      <p className="text-[18px] font-normal text-[#2D2D2D]">
        Welcome, <span className="font-semibold">Hassan Al-Omari</span> Here’s
        your business overview.
      </p>
      <ProfileCompletionComponent />
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
          <ExpertsCardComponent />
        </div>
      </div>
    </div>
  );
};

export const ProfileCompletionComponent = () => {
  return (
    <div className="w-full flex flex-col bg-white rounded-2xl px-4 py-2">
      <div className="flex items-center gap-2">
        <p className="text-[14px] font-semibold text-[#323232]">
          Profile completion
        </p>
        <p className="text-[14] font-semibold text-green">{value}%</p>
        <Image
          src="/service-requester-dashboard/frame.svg"
          alt="icon"
          width={20}
          height={20}
          className="object-cover ml-2"
        />
      </div>
      <p className="text-[10px] font-normal text-black">
        Complete your profile to receive better service provider matches and
        faster responses
      </p>
      <div className="bg-[#DDE1F0] w-full max-w-[550px] h-2 rounded-full mt-2">
        <div
          className="bg-green rounded-full h-2"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default NewDashboard;

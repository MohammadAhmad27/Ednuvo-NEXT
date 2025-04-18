import {
  portfolioData,
} from "@/app/service-requester-dashboard/content";
import MUIBreadCrumbs from "@/components/ui/BreadCrumbs";
import { UserCard } from "@/interfaces/Service-Requester-Dashboard";
import Image from "next/image";
import AllPortfolioCardComponent from "../ui/Cards/AllPortfolioCard";

interface UserProfileProps {
  user?: UserCard;
}

const UserPortfolios = ({ user }: UserProfileProps) => {
  return (
    <div className="w-full bg-white rounded-2xl px-4 py-5">
      <MUIBreadCrumbs
        items={[
          { label: "Dashboard", href: "/service-requester-dashboard" },
          {
            label: user?.name ?? "Username",
            href: `/service-requester-dashboard/profile/${user?.id}`,
          },
          { label: "Portfolio" },
        ]}
      />
      {/* profile image + cover */}
      <div className="relative w-full rounded-2xl bg-white pb-11 shadow-whiteshadow mt-5">
        <Image
          src="/service-requester-dashboard/profilecover.svg"
          alt=""
          width={100}
          height={100}
          className="object-cover w-full h-[200px] rounded-2xl"
        />
        <Image
          src="/service-requester-dashboard/profile.svg"
          alt="profile-photo"
          width={170}
          height={170}
          className="object-cover rounded-full shadow-profileshadow absolute bottom-6 left-8"
        />
        <div className="flex flex-col mt-5 ml-[230px] max-w-[550px]">
          <h1 className="text-[24px] font-bold text-[#181818] leading-tight">
            {user?.name}
          </h1>
          <p className="text-[16px] font-normal text-[#5BBB7B]">
            Plumber & Carpenter
          </p>
          <div className="flex flex-wrap gap-5 items-center">
            {/* 1st */}
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Image
                  src="/landing/popularservices/star.svg"
                  alt="star-icon"
                  width={20}
                  height={20}
                  className="object-cover"
                />
                <p className="text-[14px] font-normal text-lightblack">4.9</p>
              </div>
              <p className="text-[14px] font-normal text-darkgray">
                (20 Reviews)
              </p>
            </div>
            {/* 2nd */}
            <div className="flex items-center gap-2">
              <Image
                src="/service-provider-onboarding/location.svg"
                alt="location-icon"
                width={13}
                height={13}
                className="object-cover"
              />
              <p className="text-[14px] font-normal text-darkgray">
                Riyadh, Saudi Arabia
              </p>
            </div>
            {/* 3rd */}
            <div className="flex items-center gap-2">
              <Image
                src="/service-requester-dashboard/job.svg"
                alt="location-icon"
                width={17}
                height={17}
                className="object-cover"
              />
              <p className="text-[14px] font-normal text-darkgray">
                2 years experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolios  */}
      <div className="w-full space-y-3 border border-[#DDE1F0] rounded-2xl p-4 mt-6">
        <h2 className="text-[18px] font-semibold text-[#181D27]">Portfolio</h2>
        <p className="text-[16px] font-normal text-[#181D27] mt-2">
          {" "}
          Showing {portfolioData?.length} Portfolios
        </p>
        <AllPortfolioCardComponent portfolioData={portfolioData} />
      </div>
    </div>
  );
};

export default UserPortfolios;

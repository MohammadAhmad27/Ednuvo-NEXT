import { portfolioData } from "@/app/service-requester-dashboard/content";
import AllPortfolioCardComponent from "@/components/ui/Cards/AllPortfolioCard";
import Image from "next/image";
import Link from "next/link";

const UserPortfolios = () => {
  return (
    <div className="w-full bg-white rounded-2xl px-4 py-5">
      <Link href="/service-provider-dashboard?view=settings">
        <button className="text-[14px] font-medium text-primary text-center border border-primary rounded-full px-6 py-2">
          Back
        </button>
      </Link>
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
            {/* Actual logged in provider name   */}
            Saud Al-Faisal
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
        <div className="w-full flex justify-between items-center">
          <h2 className="text-[18px] font-semibold text-[#181D27]">
            Portfolio
          </h2>
          <button className="flex items-center gap-2 text-nowrap bg-primary rounded-full text-center text-[14px] font-medium text-white pl-[13px] pr-4 py-2">
            <Image
              src="/admin/add.svg"
              alt="add-icon"
              width={20}
              height={20}
              className="object-cover"
            />
            Add New Portfolio
          </button>
        </div>
        <p className="text-[16px] font-normal text-[#181D27] mt-2">
          {" "}
          Showing {portfolioData?.length} Portfolios
        </p>
        <AllPortfolioCardComponent portfolioData={portfolioData} image={true} />
      </div>
    </div>
  );
};

export default UserPortfolios;

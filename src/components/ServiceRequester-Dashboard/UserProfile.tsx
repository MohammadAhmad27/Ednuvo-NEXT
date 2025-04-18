"use client";
import { useEffect, useState } from "react";
import {
  featuredFreelancer,
  featuredFreelancerData,
  profileData,
  reviewsData,
  reviewsSearchOptions,
  skillsList,
} from "@/app/service-requester-dashboard/content";
import MUIBreadCrumbs from "@/components/ui/BreadCrumbs";
import { UserCard } from "@/interfaces/Service-Requester-Dashboard";
import Image from "next/image";
import dayjs from "dayjs";
import PackageCardComponent from "../ui/Cards/PackageCard";
import MUIAutoComplete from "../ui/AutoComplete";
import ReviewCardComponent from "../ui/Cards/ReviewCard";
import PortfolioCardComponent from "../ui/Cards/PortfolioCard";

interface UserProfileProps {
  user?: UserCard;
}

const UserProfile = ({ user }: UserProfileProps) => {
  const [currentTime, setCurrentTime] = useState(dayjs().format("hh:mm A"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("hh:mm A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white rounded-2xl px-4 py-5">
      <MUIBreadCrumbs
        items={[
          { label: "Dashboard", href: "/service-requester-dashboard" },
          { label: user?.name ?? "Username" },
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
      {/* profile data */}
      <div className="w-full flex flex-wrap items-center gap-8 my-8">
        {profileData?.map((item) => (
          <div key={item?.id} className="flex items-start gap-2">
            <Image
              src={item?.img}
              alt="icon"
              width={30}
              height={30}
              className="object-cover"
            />
            <div className="w-max flex flex-col gap-2">
              <h3 className="text-[15px] font-medium text-[#181818] text-nowrap">
                {item?.label}
              </h3>
              <p className="text-[14px] font-normal text-darkgray">
                {item?.value}
                {item?.label === "Response Rate" ? "%" : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* about */}
      <div className="w-full flex max-md:flex-col items-stretch gap-5">
        {/* left */}
        <div className="xl:w-3/4 lg:w-2/3 md:w-3/5 max-md:w-full space-y-1 border border-[#DDE1F0] rounded-2xl p-4">
          <h2 className="text-[18px] font-semibold text-[#181D27]">About</h2>
          <p className="text-[14px] font-normal text-darkgray text-justify">
            I am a skilled plumber and carpenter with expertise in designing,
            building, and repairing wooden structures and furniture, as well as
            installing and maintaining plumbing systems. From crafting custom
            cabinets and flooring to fixing leaks, installing pipes, I take
            pride in delivering high-quality craftsmanship with attention to
            detail. I ensure durability, precision, and a professional finish in
            every project.
            <br />
            <br />I collaborate closely with clients to bring their vision to
            life, providing reliable plumbing and carpentry solutions tailored
            to their needs. I specialize in refinishing while also handling pipe
            installations, drainage systems, and leak repairs, ensuring
            functionality, durability, and aesthetics in every service.
          </p>
        </div>
        {/* right */}
        <div className="xl:w-1/4 lg:w-1/3 md:w-2/5 max-md:w-full flex flex-col border border-[#DDE1F0] rounded-2xl">
          <div className="w-full p-4">
            <h2 className="text-[18px] font-bold text-[#181D27]">
              {user?.name}
            </h2>
            <p className="text-[12px] font-normal text-darkgray mt-[1px]">
              Online {currentTime} local time
            </p>
            <button className="w-full text-[14px] font-medium text-white bg-primary flex items-center justify-center gap-2 text-center rounded-full py-[10px] mt-4">
              <Image
                src="/service-requester-dashboard/send-icon.svg"
                alt="send-icon"
                width={18}
                height={18}
                className="object-cover"
              />
              Contact
            </button>
          </div>
          <div className="w-full h-px bg-[#DDE1F0]" />
          <div className="w-full p-4">
            <div className="w-full flex flex-col gap-2">
              {featuredFreelancer?.map((item) => (
                <div key={item?.id} className="w-full flex items-center gap-2">
                  <Image
                    src={item?.icon}
                    alt="icon"
                    width={22}
                    height={22}
                    className="object-cover"
                  />
                  <p className="text-[14px] font-normal text-[#2E302F]">
                    {item?.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-between items-center gap-4">
              {featuredFreelancerData?.map((item) => (
                <button
                  key={item?.id}
                  className="w-full flex justify-center items-center gap-2 border border-primary bg-white rounded-full py-[6px] mt-4"
                >
                  <Image
                    src={item?.icon}
                    alt="icon"
                    width={22}
                    height={22}
                    className="object-cover"
                  />
                  <p className="text-[14px] font-normal text-primary">
                    {item?.label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* skills */}
      <div className="w-full space-y-3 border border-[#DDE1F0] rounded-2xl p-4 mt-6">
        <h2 className="text-[18px] font-semibold text-[#181D27]">Skills</h2>
        <div className="w-full flex flex-wrap items-center gap-2">
          {skillsList?.map((item) => (
            <div
              key={item?.id}
              className="border border-gray rounded-full px-2 py-[5px]"
            >
              <p className="text-[12px] font-normal text-darkgray">
                {item?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* packages */}
      <div className="w-full space-y-3 border border-[#DDE1F0] rounded-2xl p-4 mt-6">
        <h2 className="text-[18px] font-semibold text-[#181D27]">Packages</h2>
        <PackageCardComponent />
      </div>
      {/* portfolio */}
      <div className="w-full space-y-3 border border-[#DDE1F0] rounded-2xl p-4 mt-6">
        <h2 className="text-[18px] font-semibold text-[#181D27]">Portfolio</h2>
        <PortfolioCardComponent user={user} />
      </div>
      {/* reviews */}
      <div className="w-full flex flex-col gap-2 border border-[#DDE1F0] rounded-2xl p-4 mt-6">
        <div className="flex items-center gap-2">
          <h2 className="text-[18px] font-semibold text-[#181D27]">Reviews</h2>
          <p className="text-[18px] font-semibold text-secondary">(4.9)</p>
        </div>
        <div className="w-full flex justify-between items-center gap-2">
          <p className="text-[14px] font-medium text-darkgray">
            1-5 out of {reviewsData?.length} Reviews
          </p>
          <div className="flex items-center gap-5">
            <p className="text-[16px] font-normal text-darkgray text-nowrap">
              Sort by:
            </p>
            <MUIAutoComplete
              options={reviewsSearchOptions}
              label="Search by"
              width="100%"
              variant="green"
              onChange={(e: any) => console.log(e.target.value)}
            />
          </div>
        </div>
        <ReviewCardComponent />
      </div>
    </div>
  );
};

export default UserProfile;

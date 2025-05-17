"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { statsData } from "@/app/(main)/content";

const Hero = () => {
  return (
    <div className="w-full bg-primary overflow-hidden flex justify-between items-start gap-10 bg-[url(/landing/hero/lining-group.svg)] bg-cover bg-no-repeat max-md:px-4 md:px-8 lg:px-10 xl:px-20 pt-10 max-md:pb-32 md:pb-36 lg:pb-40">
      <div className="max-lg:w-full lg:w-[55%] xl:w-3/5 flex flex-col gap-4">
        <h1 className="max-md:text-[28px] md:text-[36px] lg:text-[40px] xl:text-[60px] font-extrabold text-white max-lg:leading-tight lg:leading-none max-lg:text-center max-2xs:w-full 2xs:max-xs:w-[300px] xs:max-md:w-[380px] md:max-w-[500px] lg:max-w-[800px] max-lg:mx-auto">
          Find The Expert Service Providers For Your Home
        </h1>
        <p className="max-md:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-white font-normal max-lg:text-center max-w-[740px] max-lg:w-[90%] max-lg:mx-auto">
          Work with talented people at the most affordable price to get the most
          out of your time and cost
        </p>
        <div className="bg-white flex justify-between items-center gap-3 p-2 max-w-[730px] max-lg:w-[90%] max-lg:mx-auto rounded-full my-3">
          <Image
            src="/landing/hero/search.svg"
            alt="search-icon"
            width={20}
            height={20}
            className="object-cover pl-1"
          />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full outline-none max-lg:text-[12px] text-[14px] font-normal text-lightblack placeholder:max-lg:text-[12px] placeholder:text-[14px] placeholder:font-normal placeholder:text-darkgray"
          />
          <button className="bg-secondary text-white max-lg:text-[14px] text-[16px] font-medium px-5 py-2 rounded-full">
            Search
          </button>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mt-2">
          {statsData?.map((item) => (
            <div
              key={item?.id}
              className="flex flex-col items-center gap-[2px]"
            >
              <p className="max-md:text-[20px] text-[22px] text-white font-semibold leading-none flex items-center gap-[2px]">
                <CountUp end={item?.value} duration={3} />
                {item?.suffix}
              </p>
              <p className="max-md:text-[14px] text-[18px] text-white font-normal text-nowrap">
                {item?.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative lg:w-[45%] xl:w-2/5 max-lg:hidden">
        <div className="flex items-end justify-end gap-4">
          <Image
            src="/landing/hero/ref-image.svg"
            alt="reference-image"
            width={100}
            height={100}
            className="object-cover lg:w-[180px] lg:h-[250px] xl:w-[250px] xl:h-[255px] rounded-xl"
          />
          <Image
            src="/landing/hero/ref-image2.svg"
            alt="reference-image"
            width={100}
            height={100}
            className="object-cover lg:w-[180px] lg:h-[350px] xl:w-[250px] xl:h-[350px] rounded-xl"
          />
        </div>
        {/* 1st */}
        <div className="absolute lg:top-11 xl:top-10 lg:right-[160px] xl:right-[185px] bg-white flex items-center gap-3 rounded-xl px-3 py-2 lg:min-w-[200px] xl:min-w-[230px]">
          <div className="bg-[#E5F4F2] rounded-full p-[6px]">
            <Image
              src="/landing/hero/bulb.svg"
              alt="bulb-icon"
              width={20}
              height={20}
              className="object-cover"
            />
          </div>
          <p className="text-[12px] font-semibold text-lightblack">
            Proof of Quality
          </p>
        </div>
        {/* 2nd */}
        <div className="absolute lg:top-[200px] xl:top-[187px] lg:-right-10 xl:right-[-125px] bg-white flex items-center gap-3 rounded-xl px-3 py-2 lg:min-w-[200px] xl:min-w-[230px]">
          <div className="bg-[#E5F4F2] rounded-full p-[6px]">
            <Image
              src="/landing/hero/tick.svg"
              alt="tick-icon"
              width={20}
              height={20}
              className="object-cover"
            />
          </div>
          <p className="text-[12px] font-semibold text-lightblack">
            Safe and Secure
          </p>
        </div>
        {/* 3rd */}
        <div className="absolute lg:bottom-[-6px] xl:bottom-[-6px] lg:right-24 xl:right-40 bg-white flex items-center gap-5 rounded-xl px-3 py-2">
          <p className="text-[12px] font-semibold text-lightblack">
            300+ Professionals
          </p>
          <Image
            src="/landing/hero/icon-group.svg"
            alt="group-icon"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

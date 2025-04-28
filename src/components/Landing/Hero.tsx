"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { statsData } from "@/app/(main)/content";

const Hero = () => {
  return (
    <div className="w-full bg-primary overflow-hidden flex justify-between items-start gap-10 bg-[url(/landing/hero/lining-group.svg)] bg-cover bg-no-repeat px-20 pt-10 pb-40">
      <div className="w-3/5 flex flex-col gap-4">
        <h1 className="text-[60px] font-extrabold text-white leading-none max-w-[800px]">
          Find The Expert Service Providers For Your Home
        </h1>
        <p className="text-[18px] text-white font-normal max-w-[740px]">
          Work with talented people at the most affordable price to get the most
          out of your time and cost
        </p>
        <div className="bg-white flex justify-between items-center gap-3 p-2 max-w-[730px] rounded-full my-3">
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
            className="w-full outline-none text-[14px] font-normal text-lightblack placeholder:text-[14px] placeholder:font-normal placeholder:text-darkgray"
          />
          <button className="bg-secondary text-white text-[16px] font-medium px-5 py-2 rounded-full">
            Search
          </button>
        </div>
        <div className="flex items-center gap-5 mt-2">
          {statsData?.map((item) => (
            <div
              key={item?.id}
              className="flex flex-col items-center gap-[2px]"
            >
              <p className="text-[22px] text-white font-semibold leading-none flex items-center gap-[2px]">
                <CountUp end={item?.value} duration={3} />
                {item?.suffix}
              </p>
              <p className="text-[18px] text-white font-normal">
                {item?.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-2/5">
        <div className="flex items-end justify-end gap-4">
          <Image
            src="/landing/hero/ref-image.svg"
            alt="reference-image"
            width={100}
            height={100}
            className="object-cover w-[250px] h-[250px] rounded-xl"
          />
          <Image
            src="/landing/hero/ref-image2.svg"
            alt="reference-image"
            width={100}
            height={100}
            className="object-cover w-[250px] h-[350px] rounded-xl"
          />
        </div>
        {/* 1st */}
        <div className="absolute top-8 right-48 bg-white flex items-center gap-3 rounded-xl p-3 min-w-[250px]">
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
        <div className="absolute top-[187px] right-[-130px] bg-white flex items-center gap-3 rounded-xl p-3 min-w-[250px]">
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
        <div className="absolute bottom-[-15px] right-44 bg-white flex items-center gap-5 rounded-xl p-3">
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

import Image from "next/image";
import { staticContentData } from "@/app/(main)/content";

const NeedSomething = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-full bg-lightgreen flex max-md:flex-col md:justify-between md:items-start gap-2 max-md:pl-4 md:pl-8 lg:pl-10 xl:pl-20 max-lg:pt-10 pt-20 pb-10 max-2xs:w-[90%] max-md:w-4/5 max-md:rounded-r-[25px]">
        <div className="flex flex-col">
          <h2 className="max-lg:text-[20px] lg:text-[23px] xl:text-[26px] font-extrabold text-lightblack max-lg:leading-tight max-lg:mb-2">
            Need something Done In Your Home?
          </h2>
          <p className="max-md:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal text-darkgray">
            Most viewed and all-time top-selling services
          </p>
        </div>
        <div className="max-md:hidden">
        <Image
          src="/landing/needsomething/bg-image.svg"
          alt="need-something-image"
          width={100}
          height={100}
          className="object-cover md:w-[400px] lg:w-[500px] rounded-l-xl mt-[-40px]"
        />
        </div>
      <div className="max-md:relative max-2xs:left-5 max-md:left-7 md:absolute md:top-[105px] lg:top-36 md:left-8 lg:left-10 xl:left-20 flex max-md:flex-col items-stretch gap-4 z-10 mt-8">
        {staticContentData?.map((item) => (
          <div
            key={item?.id}
            className="flex flex-col gap-2 p-6 bg-white border border-gray shadow-grayshadow rounded-xl cursor-pointer"
          >
            <Image
              src={item?.icon}
              alt="icon"
              width={20}
              height={20}
              className="object-cover mb-1"
            />
            <h3 className="max-lg:text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-lightblack leading-none">
              {item?.title}
            </h3>
            <p className="max-lg:text-[12px] lg:text-[14px] xl:text-[16px] font-normal text-darkgray max-w-[250px]">
              {item?.desc}
            </p>
          </div>
        ))}
      </div>
      </div>

    </div>
  );
};

export default NeedSomething;

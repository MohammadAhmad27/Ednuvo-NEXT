import Image from "next/image";

const SkiledExperts = () => {
  return (
    <div className=" w-full bg-[#FFF5D0] gap-2 max-md:px-4 md:px-8 lg:px-10 xl:px-20 max-md:pt-10 max-md:pb-[133px] pt-[55px] pb-36">
      <div className="relative flex max-lg:flex-col justify-between items-start ">
        <div className="flex flex-col gap-2">
          <h2 className="max-lg:text-[20px] lg:text-[23px] xl:text-[26px] font-extrabold text-lightblack max-w-[520px] leading-tight">
            Find Skilled Experts For Your Next Project
          </h2>
          <p className="max-md:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal text-lightblack max-lg:max-w-[450px] lg:max-w-[560px]">
            Whether you need a plumber, carpenter, electrician, or home service
            expert, our AI-driven platform connects you with verified
            professionals in minutes.
          </p>
          <button className="w-max bg-primary max-lg:text-[12px] lg:text-[14px] xl:text-[16px]font-medium text-white rounded-full px-6 py-2">
            See More
          </button>
        </div>
        <div className="max-lg:absolute max-lg:top-[350px] max-lg:right-2 lg:right-0">
          <Image
            src="/landing/skilledexperts/person.svg"
            alt="skilled-expert-image"
            width={100}
            height={100}
            className="object-cover md:max-lg:w-full md:max-lg:h-[300px] lg:w-[510px] lg:h-[400px] md:max-lg:mr-[-135px] md:max-lg:-mt-[510px] lg:mr-[-85px] lg:-mt-[190px] z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default SkiledExperts;

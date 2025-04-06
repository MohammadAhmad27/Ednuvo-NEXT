import Image from "next/image";

const SkiledExperts = () => {
  return (
    <div className="w-full bg-[#FFF5D0] flex justify-between items-start gap-2 px-20 pt-16 pb-24">
      <div className="flex flex-col gap-2">
        <h2 className="text-[26px] font-extrabold text-lightblack max-w-[520px] leading-tight">
          Find Skilled Experts For Your Next Project
        </h2>
        <p className="TEXT-[18px] font-normal text-lightblack max-w-[560px]">
          Whether you need a plumber, carpenter, electrician, or home service
          expert, our AI-driven platform connects you with verified
          professionals in minutes.
        </p>
        <button className="w-max bg-primary text-[16px] font-medium text-white rounded-full px-7 py-2">
          See More
        </button>
      </div>
      <Image
        src="/landing/skilledexperts/person.svg"
        alt="skilled-expert-image"
        width={510}
        height={400}
        className="object-cover mr-[-85px] -mt-[190px] z-10"
      />
    </div>
  );
};

export default SkiledExperts;

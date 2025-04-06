import Image from "next/image";
import { staticContentData } from "@/app/(main)/content";

const NeedSomething = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-full bg-lightgreen flex justify-between items-start gap-2 pl-20 pt-20 pb-10">
        <div className="flex flex-col">
          <h2 className="text-[26px] font-extrabold text-lightblack">
            Need something Done In Your Home?
          </h2>
          <p className="text-[18px] font-normal text-darkgray">
            Most viewed and all-time top-selling services
          </p>
        </div>
        <Image
          src="/landing/needsomething/bg-image.svg"
          alt="need-something-image"
          width={100}
          height={100}
          className="object-cover w-[500px] rounded-l-xl mt-[-40px]"
        />
      </div>
      <div className="absolute top-36 left-20 flex items-stretch gap-4 z-10 mt-8">
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
            <h3 className="text-[18px] font-semibold text-lightblack leading-none">
              {item?.title}
            </h3>
            <p className="text-[16px] font-normal text-darkgray max-w-[250px]">
              {item?.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeedSomething;

import { packageCardData } from "@/app/service-requester-dashboard/content";
import Image from "next/image";

const PackageCardComponent = () => {
  return (
    <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {packageCardData?.map((item) => (
        <div
          key={item?.id}
          className="flex flex-col gap-2 p-2 bg-white border border-[#DDE1F0] shadow-grayshadow rounded-xl cursor-pointer"
        >
          <Image
            src={item?.bgImg}
            alt="cover-photo"
            width={100}
            height={100}
            className="object-cover w-full h-full rounded-lg"
          />
          <p className="text-[14px] font-medium text-[#181818] pl-1">
            {item?.desc}
          </p>
          <div className="flex items-center gap-2 mt-[2px]">
            <div className="flex items-center gap-1">
              <Image
                src={item?.starImg}
                alt="star-icon"
                width={20}
                height={20}
                className="object-cover"
              />
              <p className="text-[12px] font-normal text-lightblack">
                {item?.rating}
              </p>
            </div>
            <p className="text-[12px] font-normal text-darkgray">
              ({item?.reviews} Reviews)
            </p>
          </div>
          <div className="flex items-center gap-2 pl-1">
            <p className="text-[14px] font-normal text-darkgray">
              {item?.startingFrom}
            </p>
            <p className="text-[16px] font-semibold text-lightblack">
              {item?.value} SAR
            </p>
          </div>
          <button className="text-[14px] font-medium text-white text-center bg-secondary rounded-full py-2 shadow-greenshadow">
            {item?.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PackageCardComponent;

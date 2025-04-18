import { PortfolioCard } from "@/interfaces/Service-Requester-Dashboard";
import Image from "next/image";

const AllPortfolioCardComponent = ({
  portfolioData,
}: {
  portfolioData: PortfolioCard[];
}) => {
  return (
    <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {portfolioData?.map((item) => (
        <div
          key={item?.id}
          className="flex flex-col gap-2 p-2 bg-white border border-[#DDE1F0] shadow-grayshadow rounded-xl cursor-pointer"
        >
          <Image
            src={item?.mainImg}
            alt="cover-photo"
            width={100}
            height={100}
            className="object-contain w-full rounded-lg"
          />
          <div className="my-[2px] pl-1">
            <p className="text-[14px] font-normal text-darkgray">
              From: {item?.startTime}
            </p>
            <h3 className="text-[16px] font-semibold text-lightblack">
              {item?.projectTitle}
            </h3>
          </div>
          <p className="text-[14px] font-normal text-[#181818] text-justify px-1">
            {item?.projectDesc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllPortfolioCardComponent;

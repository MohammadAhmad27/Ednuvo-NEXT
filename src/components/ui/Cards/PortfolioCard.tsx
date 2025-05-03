import { useState } from "react";
import Image from "next/image";
import {
  PortfolioCard,
  UserCard,
} from "@/interfaces/ServiceRequesterDashboard";
import { portfolioData } from "@/app/service-requester-dashboard/content";
import Link from "next/link";

interface UserCardProps {
  user?: UserCard;
}

const PortfolioCardComponent = ({ user }: UserCardProps) => {
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioCard>(
    portfolioData[0]
  );

  return (
    <section className="w-full flex flex-col gap-6">
      {/* Featured Portfolio */}
      <div className="w-full flex max-lg:flex-col items-stretch gap-8">
        <Image
          src={selectedPortfolio?.mainImg[0]}
          alt="portfolio-cover"
          width={100}
          height={100}
          className="object-cover rounded-2xl xl:w-[400px] lg:w-[330px] max-lg:w-full"
        />
        <div className="flex-1 flex flex-col">
          <p className="text-[14px] font-normal text-darkgray mb-[1px]">
            From: {selectedPortfolio?.startTime}
          </p>
          <h3 className="text-[20px] font-semibold text-lightblack">
            {selectedPortfolio?.projectTitle}
          </h3>
          <p className="text-[14px] font-normal text-[#181818] text-justify max-w-[800px] mt-[10px]">
            {selectedPortfolio?.projectDesc}
          </p>

          <div className="flex flex-wrap gap-2 mt-[20px] mb-[20px]">
            {selectedPortfolio?.skills?.slice(0, 2)?.map((skill, index) => (
              <p
                key={index}
                className="text-[13px] font-medium text-darkgray border border-gray text-center rounded-full px-2 py-[5px]"
              >
                {skill}
              </p>
            ))}
            {selectedPortfolio?.skills?.length > 2 && (
              <span className="text-[13px] font-medium text-darkgray border border-gray text-center rounded-full px-3 py-[5px]">
                + {selectedPortfolio.skills.length - 2}
              </span>
            )}
          </div>

          <div className="flex items-center gap-10">
            <div>
              <p className="text-[14px] font-normal text-darkgray">
                Project Cost
              </p>
              <p className="text-[17px] font-semibold text-lightblack">
                {selectedPortfolio?.projectCost} {selectedPortfolio?.label}
              </p>
            </div>
            <div>
              <p className="text-[14px] font-normal text-darkgray">
                Project Duration
              </p>
              <p className="text-[17px] font-semibold text-lightblack">
                {selectedPortfolio?.projectDuration} Days
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Thumbnails */}
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {portfolioData?.slice(0, 4)?.map((portfolio) => {
          const isSelected = selectedPortfolio?.id === portfolio?.id;
          return (
            <Image
              key={portfolio?.id}
              onClick={() => setSelectedPortfolio(portfolio)}
              src={portfolio?.mainImg[0]}
              alt="portfolio-cover"
              width={200}
              height={200}
              className={`object-cover w-full h-full rounded-[20px] cursor-pointer border-2 ${
                isSelected ? "border-secondary" : "border-[#DDE1F0]"
              }`}
            />
          );
        })}

        {portfolioData && portfolioData?.length > 4 && (
          <Link
            href={`/service-requester-dashboard/profile/${user?.id}/portfolio`}
          >
            <div className="w-full h-full rounded-[20px] border border-gray flex items-center justify-center">
              <span className="text-[18px] font-medium text-lightblack">
                + {portfolioData?.length - 4} Projects
              </span>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
};

export default PortfolioCardComponent;

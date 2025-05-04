"use client";
import { PortfolioCard } from "@/interfaces/ServiceRequesterDashboard";
import Image from "next/image";
import PortfolioDialog from "../Dialogs/PortfolioDialog";
import { useState } from "react";

const AllPortfolioCardComponent = ({
  portfolioData,
  limit = false,
}: {
  portfolioData: PortfolioCard[];
  limit?: boolean;
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPortfolio, setSelectedPortfolio] =
    useState<PortfolioCard | null>(null);

  const handleCardClick = (item: PortfolioCard) => {
    setSelectedPortfolio(item);
    setIsModalOpen(true);
  };
  const portfoliosToDisplay = limit
    ? portfolioData?.slice(0, 4)
    : portfolioData;

  return (
    <>
      <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {portfoliosToDisplay?.map((item) => (
          <div
            key={item?.id}
            onClick={() => handleCardClick(item)}
            className="flex flex-col gap-2 p-2 bg-white border border-[#DDE1F0] shadow-grayshadow rounded-xl cursor-pointer"
          >
            <Image
              src={item?.mainImg[0]}
              alt="cover-photo"
              width={100}
              height={100}
              className="object-contain w-full h-[300px] rounded-lg"
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
      {selectedPortfolio && (
        <PortfolioDialog
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          portfolio={selectedPortfolio}
        />
      )}
    </>
  );
};

export default AllPortfolioCardComponent;

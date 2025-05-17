"use client";
import { useState, useEffect } from "react";
import Slider from "../ui/Sliders/Slider";
import { serviceButtons, serviceDataMap } from "@/app/(main)/content";
import ServiceCardComponent from "../ui/Cards/ServiceCard";

const getItemsPerSlide = (width: number): number => {
  if (width < 768) return 1;
  if (width < 1024) return 2;
  if (width < 1280) return 3;
  return 4;
};

const PopularServices = () => {
  const [activeButton, setActiveButton] = useState(serviceButtons[0]?.label);
  const cardData = serviceDataMap[activeButton] || [];
  const [itemsPerSlide, setItemsPerSlide] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide(window.innerWidth));
    };

    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (itemsPerSlide === null) {
    return (
      <div className="flex justify-center items-center h-40">Loading...</div>
    );
  }

  return (
    <div className="w-full bg-white max-md:px-4 md:px-8 lg:px-10 xl:px-20 max-md:pt-10 md:pt-14 lg:pt-16 max-md:pb-11 md:pb-14 lg:pb-16 -mt-20 z-10 max-lg:rounded-tl-[36px] rounded-tl-[60px] space-y-10">
      {/* Header */}
      <div className="w-full flex max-lg:flex-col max-lg:items-start lg:justify-between lg:items-center max-md:gap-4 md:max-lg:gap-6 lg:gap-2">
        <div className="flex flex-col">
          <h2 className="max-lg:text-[20px] lg:text-[23px] xl:text-[26px] font-extrabold text-lightblack max-lg:leading-tight max-lg:mb-2">
            Popular Services
          </h2>
          <p className="max-md:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal text-darkgray leading-tight">
            Most viewed and all-time top-selling services
          </p>
        </div>
        {/* Service Tabs */}
        <div className="max-md:grid grid-cols-2 md:flex items-center gap-5">
          {serviceButtons?.map((button) => (
            <button
              key={button?.id}
              onClick={() => setActiveButton(button?.label)}
              className={`max-lg:text-[12px] lg:text-[14px] xl:text-[16px] text-nowrap font-normal text-lightblack ${
                activeButton === button?.label
                  ? "text-secondary border border-gray px-3 py-2 rounded-full shadow-grayshadow"
                  : ""
              }`}
            >
              {button?.label}
            </button>
          ))}
        </div>
      </div>
      <Slider
        cards={cardData}
        renderCard={(card) => <ServiceCardComponent card={card} />}
        itemsPerSlide={itemsPerSlide}
      />
    </div>
  );
};

export default PopularServices;

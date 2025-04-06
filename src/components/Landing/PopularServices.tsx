"use client";
import { useState } from "react";
import Slider from "../ui/Sliders/Slider";
import { serviceButtons, serviceDataMap } from "@/app/(main)/content";
import ServiceCardComponent from "../ui/Cards/Service-Card";

const PopularServices = () => {
  const [activeButton, setActiveButton] = useState(serviceButtons[0]?.label);
  const cardData = serviceDataMap[activeButton] || [];

  return (
    <div className="w-full bg-white px-20 pt-20 pb-14 -mt-20 z-10 rounded-tl-[60px] space-y-10">
      {/* Header */}
      <div className="w-full flex justify-between items-center gap-2">
        <div className="flex flex-col">
          <h2 className="text-[26px] font-extrabold text-lightblack">
            Popular Services
          </h2>
          <p className="text-[18px] font-normal text-darkgray">
            Most viewed and all-time top-selling services
          </p>
        </div>
        {/* Service Tabs */}
        <div className="flex items-center gap-6">
          {serviceButtons?.map((button) => (
            <button
              key={button?.id}
              onClick={() => setActiveButton(button?.label)}
              className={`text-[16px] font-normal text-lightblack ${
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
      {/* Slider Section */}
      <Slider
        cards={cardData}
        renderCard={(card) => <ServiceCardComponent card={card} />}
        itemsPerSlide={4}
      />
    </div>
  );
};

export default PopularServices;

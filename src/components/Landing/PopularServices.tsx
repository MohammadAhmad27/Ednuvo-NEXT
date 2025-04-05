"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Helper function to chunk data
const chunkArray = (arr: any[], size: number) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const buttons = [
  { id: 1, label: "Plumbing Services" },
  { id: 2, label: "Electrical Services" },
  { id: 3, label: "Cleaning Services" },
  { id: 4, label: "Tiling & Flooring Services" },
];

const generateCards = (title: string) =>
  Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    coverImg: "/landing/popularservices/coverimage.svg",
    title,
    description: `Service ${i + 1} - ${title}`,
    starImg: "/landing/popularservices/star.svg",
    rating: 4.9,
    reviews: 123,
    userImg: "/landing/popularservices/user.svg",
    username: `User ${i + 1}`,
    startingAt: "Starting at:",
    price: 130,
    currency: "SAR",
  }));

const cardDataMap: Record<string, any[]> = {
  "Plumbing Services": generateCards("Plumbing Services"),
  "Electrical Services": generateCards("Electrical Services"),
  "Cleaning Services": generateCards("Cleaning Services"),
  "Tiling & Flooring Services": generateCards("Tiling & Flooring Services"),
};

const PopularServices = () => {
  const [activeButton, setActiveButton] = useState(buttons[0].label);
  const cardData = cardDataMap[activeButton] || [];

  const groupedSlides = chunkArray(cardData, 4); // Each slide has 4 cards

  return (
    <div className="w-full bg-white px-20 py-20 -mt-20 z-10 rounded-tl-[60px] space-y-10">
      {/* Header */}
      <div className="w-full flex justify-between items-center gap-2">
        <div className="flex flex-col">
          <h2 className="text-[26px] font-extrabold text-lightblack">Popular Services</h2>
          <p className="text-[18px] font-normal text-darkgray">
            Most viewed and all-time top-selling services
          </p>
        </div>
        <div className="flex items-center gap-6">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveButton(button.label)}
              className={`text-[16px] font-normal text-lightblack transition ${
                activeButton === button.label
                  ? "text-secondary border border-gray px-3 py-2 rounded-full shadow-grayshadow"
                  : ""
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full"
        
      >
        {groupedSlides.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-4 gap-4">
              {group.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray shadow-grayshadow rounded-xl"
                >
                  <Image
                    src={item.coverImg}
                    alt="cover-image"
                    width={100}
                    height={200}
                    className="object-cover w-full rounded-t-xl"
                  />
                  <div className="px-4 py-3 flex flex-col gap-1">
                    <h3 className="text-[18px] font-normal text-secondary">
                      {item.title}
                    </h3>
                    <p className="text-[18px] font-semibold text-lightblack leading-tight max-w-[350px]">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 mt-[2px]">
                      <Image
                        src={item.starImg}
                        alt="rating"
                        width={20}
                        height={20}
                      />
                      <p className="text-[14px] font-normal text-lightblack">
                        {item.rating}
                      </p>
                      <p className="text-[14px] font-normal text-darkgray">
                        ({item.reviews} Reviews)
                      </p>
                    </div>
                    <div className="w-full h-[0.5px] bg-[#0000004D] my-3" />
                    <div className="flex justify-between items-center gap-2">
                      <div className="flex items-center gap-2">
                        <Image
                          src={item.userImg}
                          alt="user"
                          width={40}
                          height={40}
                          className="object-cover rounded-full"
                        />
                        <p className="text-[12px] font-medium text-lightblack">
                          {item.username}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-[12px] font-normal text-darkgray">
                          {item.startingAt}
                        </p>
                        <p className="text-[14px] font-medium text-lightblack">
                          {item.price} {item.currency}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularServices;

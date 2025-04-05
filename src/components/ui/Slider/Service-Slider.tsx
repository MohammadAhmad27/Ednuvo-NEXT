"use client";
import { useRef } from "react";
import "./service-slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ServiceCardComponent from "../Cards/Service-Card";
import { chunkArray } from "@/utils/services-array";
import { ServiceCard } from "@/interfaces";
import { Swiper as SwiperType } from "swiper";

interface ServiceSliderProps {
  cards: ServiceCard[];
}

const ServiceSlider = ({ cards }: ServiceSliderProps) => {
  const groupedSlides = chunkArray(cards, 4);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay?.start();
  };

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="w-full"
    >
      {groupedSlides?.map((group, index) => (
        <SwiperSlide key={index}>
          <div className="w-full grid grid-cols-4 items-stretch gap-2">
            {group?.map((card) => (
              <div
                key={card?.id}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="h-full"
              >
                <ServiceCardComponent card={card} />
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;

"use client";
import { useRef, ReactNode } from "react";
import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper";
import { chunkArray } from "@/utils/services-array";

interface SliderProps<T> {
  cards: T[];
  renderCard: (card: T) => ReactNode;
  itemsPerSlide: number;
}

const Slider = <T,>({ cards, renderCard, itemsPerSlide }: SliderProps<T>) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay?.start();
  };

  const columnClassMap: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  // Dynamic rendering based on itemsPerSlide
  const slides =
    itemsPerSlide === 1
      ? cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="h-full"
            >
              {renderCard(card)}
            </div>
          </SwiperSlide>
        ))
      : chunkArray(cards, itemsPerSlide).map((group, index) => (
          <SwiperSlide key={index}>
            <div
              className={`w-full grid ${
                columnClassMap[itemsPerSlide] || "grid-cols-1"
              } items-stretch gap-2`}
            >
              {group.map((card, i) => (
                <div
                  key={i}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="h-full"
                >
                  {renderCard(card)}
                </div>
              ))}
            </div>
          </SwiperSlide>
        ));

  return (
    <div className="slider-container">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        className="w-full"
      >
        {slides}
      </Swiper>
      {/* Add an explicit pagination container */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Slider;

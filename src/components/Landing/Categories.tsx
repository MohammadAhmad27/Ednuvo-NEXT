"use client";
import {
  imagesData,
  serviceProvidersData,
  staticTestimonials,
} from "@/app/(main)/content";
import Image from "next/image";
import IndividualServiceCard from "../ui/Cards/IndividualServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Categories = () => {

  function Categories() {
    return (
      <>
        {imagesData?.map((item) => (
          <div key={item?.id} className="relative">
            <Image
              src={item?.icon}
              alt="category-image"
              width={100}
              height={100}
              className="object-cover w-full"
            />
            <div className="absolute top-2 p-5 space-y-2">
              <h3 className="text-[16px] font-medium text-white">
                {item?.name}
              </h3>
              <p className="text-[24px] font-bold text-white leading-none max-w-[250px]">
                {item?.desc}
              </p>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <div className="w-full bg-white max-md:px-4 md:px-8 lg:px-10 xl:px-20 max-md:pt-12 md:pt-14 max-md:pb-14 pb-40 flex flex-col gap-10">
      {/* Heading */}
      <div className="flex justify-between items-center gap-2">
        <h2 className="max-lg:text-[20px] lg:text-[23px] xl:text-[26px] font-extrabold text-lightblack">
          Browse Providers By Category
        </h2>
        <div className="bg-lightgreen flex items-center gap-2 rounded-full pl-3 pr-2 py-2 max-md:hidden">
          <button className="max-lg:text-[12px] lg:text-[14px] xl:text-[16px] font-medium text-secondary">
            View All Categories
          </button>
          <Image
            src="/landing/categories/arrow-right.svg"
            alt="arrow-right-icon"
            width={20}
            height={20}
            className="object-cover"
          />
        </div>
      </div>
      {/* 2nd */}
      <div className="slider-container md:hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, el: ".categories-swiper-pagination" }}
          navigation={false}
          modules={[Autoplay, Pagination]}
          className="w-full cursor-pointer"
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              centeredSlides: true,
              spaceBetween: 10,
            },
            // 768: {
            //   slidesPerView: 1.8,
            //   centeredSlides: true,

            //   spaceBetween: 10,
            // },
            // 1024: {
            //   slidesPerView: 5,
            //   centeredSlides: true,

            //   spaceBetween: 10,
            // },
          }}
        >
          {imagesData?.map((item) => (
            <SwiperSlide key={item?.id}>
              <div className="relative">
                <Image
                  src={item?.icon}
                  alt="category-image"
                  width={100}
                  height={100}
                  className="object-cover w-full"
                />
                <div className="absolute top-2 p-5 space-y-2">
                  <h3 className="text-14px] font-medium text-white">
                    {item?.name}
                  </h3>
                  <p className="text-[20px] font-bold text-white leading-none max-w-[250px]">
                    {item?.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Add an explicit pagination container */}
        <div className="categories-swiper-pagination swiper-pagination"></div>
      </div>

      <div className="w-full grid md:grid-cols-3 lg:grid-cols-5 gap-5 max-md:hidden">
        <Categories />
      </div>

      <div className="mx-auto w-max bg-lightgreen rounded-full pl-3 pr-2 py-2 md:hidden">
        <button className="max-lg:text-[12px] lg:text-[14px] xl:text-[16px] font-medium text-secondary flex items-center gap-2">
          View All Categories
          <Image
            src="/landing/categories/arrow-right.svg"
            alt="arrow-right-icon"
            width={20}
            height={20}
            className="object-cover"
          />
        </button>
      </div>

      {/* 3rd */}
      <div className="flex justify-center lg:justify-between xl:justify-center lg:max-xl:gap-[290px] xl:gap-[400px] items-center max-md:mt-0 md:mt-4 lg:mt-6 xl:mt-10  xl:px-20">
        {/* left */}
        <div className="relative max-lg:hidden">
          <div className="bg-white shadow-grayshadow2 rounded-xl px-6 py-8 space-y-5">
            <h4 className="text-[14px] font-semibold text-black">
              <span className="text-secondary">200+</span> Verified Service
              Providers
            </h4>
            <div className="flex flex-col gap-2">
              {serviceProvidersData?.map((item) => (
                <div key={item?.id} className="flex items-center gap-2">
                  <Image
                    src={item?.icon}
                    alt="user-image"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                  <div>
                    <p className="text-[12px] font-semibold text-lightblack">
                      {item?.name}
                    </p>
                    <p className="text-[12px] font-normal text-secondary">
                      {item?.profession}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-[100px] right-[-245px] z-10">
            <IndividualServiceCard />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-1">
          <h3 className="max-lg:text-[20px] lg:text-[23px] xl:text-[26px] font-extrabold text-lightblack">
            Trusted By Best Service Providers
          </h3>
          <p className="max-md:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal text-darkgray max-lg:max-w-[350px] lg:max-w-[450px] leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex flex-col gap-3 mt-4 mb-5">
            {staticTestimonials?.map((item) => (
              <div key={item?.id} className="flex items-center gap-3">
                <Image
                  src={item?.icon}
                  alt="testimonial-user-image"
                  width={20}
                  height={20}
                  className="object-cover"
                />
                <p className="max-md:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal text-lightblack">
                  {item?.desc}
                </p>
              </div>
            ))}
          </div>
          <button className="w-max bg-primary max-lg:text-[12px] lg:text-[14px] xl:text-[16px] font-medium text-white rounded-full px-6 py-2">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

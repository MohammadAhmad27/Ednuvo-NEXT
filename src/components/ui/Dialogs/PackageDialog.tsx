"use client";
import type { PackageCard } from "@/interfaces/ServiceRequesterDashboard";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useRef } from "react";

const PackageDialog = ({
  isModalOpen,
  setIsModalOpen,
  packageData,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  packageData: PackageCard;
}) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Dialog
      open={isModalOpen}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#FFFFFF",
          color: "#222222",
          borderRadius: "16px",
          boxShadow: "0px 4px 134px 0px #46B7D11F",
          border: "1px solid #E5E5E5",
          padding: "0px",
        },
        "& .MuiDialogTitle-root": {
          margin: "20px 30px !important",
          padding: "13px 18px !important",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "16px",
          backgroundColor: "#EEFCEE",
        },
        "& .MuiDialogContent-root": {
          padding: "0px 30px 20px 30px !important",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <DialogTitle>
        <h2 className="text-[20px] font-semibold text-black">Package</h2>
        <Image
          onClick={handleClose}
          src="/service-provider-onboarding/close.svg"
          alt="close-icon"
          width={20}
          height={20}
          className="object-cover cursor-pointer"
        />
      </DialogTitle>
      <DialogContent>
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // Fix navigation refs (Swiper needs them before mount)
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            slidesPerView={1}
            spaceBetween={10}
          >
            {packageData?.bgImg?.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`package-image-${index}`}
                  width={100}
                  height={100}
                  className="object-cover w-full h-[340px] rounded-2xl"
                />
              </SwiperSlide>
            ))}
            <div
              ref={prevRef}
              className="absolute left-4 top-1/2 z-10 flex items-center justify-center w-6 h-6 -mt-5 bg-white border border-[#EEF0F1] rounded-full cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 text-[#212223]" />
            </div>
            <div
              ref={nextRef}
              className="absolute right-4 top-1/2 z-10 flex items-center justify-center w-6 h-6 -mt-5 bg-white border border-[#EEF0F1] rounded-full cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 text-[#212223]" />
            </div>
          </Swiper>
        </div>

        <h3 className="text-[20px] font-semibold text-lightblack mt-2">
          {packageData?.title}
        </h3>
        <p className="text-[15px] font-normal text-[#181818] text-justify mt-2">
          {packageData?.desc}
        </p>
        <div className="space-y-1.5 mt-[18px]">
          <h4 className="text-[16px] font-semibold text-lightblack">
            Category
          </h4>
          <div className="w-max border border-gray rounded-full px-2 py-[5px]">
            <p className="text-[12px] font-medium text-darkgray">
              {packageData?.category}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-10 mt-[18px]">
          <div className="flex flex-col">
            <p className="text-[12px] font-normal text-darkgray">
              Pricing Mode
            </p>
            <p className="text-[16px] font-semibold text-lightblack">
              {packageData?.pricingMode}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[12px] font-normal text-darkgray">
              Package Price
            </p>
            <p className="text-[16px] font-semibold text-lightblack">
              {packageData?.value} SAR
            </p>
          </div>
        </div>
        <div className="w-full space-y-1.5 mt-3.5">
          <h4 className="text-[16px] font-semibold text-lightblack">
            Requirements
          </h4>
          <p className="text-[15px] font-normal text-[#181818] text-justify mt-[12px]">
            {packageData?.requirements}
          </p>
        </div>
        <div className="flex items-center justify-center mt-3.5">
          <button className="text-center text-[14px] font-medium text-white bg-secondary rounded-full px-8 py-2">
            Send job request
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PackageDialog;

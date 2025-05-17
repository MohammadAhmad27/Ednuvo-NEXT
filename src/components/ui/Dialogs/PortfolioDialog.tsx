"use client";
import type { PortfolioCard } from "@/interfaces/ServiceRequesterDashboard";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useRef } from "react";

const PortfolioDialog = ({
  isModalOpen,
  setIsModalOpen,
  portfolio,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  portfolio: PortfolioCard;
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
        <h2 className="text-[20px] font-semibold text-black">Portfolio</h2>
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
            {portfolio?.mainImg?.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`project-image-${index}`}
                  width={100}
                  height={100}
                  className="object-cover w-full h-[340px] rounded-2xl cursor-pointer"
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
        <div className="flex items-center gap-2 mt-3">
          <p className="text-[14px] font-medium text-darkgray">From:</p>
          <p className="text-[14px] font-medium text-darkgray">
            {portfolio?.startTime}
          </p>
        </div>
        <h3 className="text-[20px] font-semibold text-lightblack mt-[6px]">
          {portfolio?.projectTitle}
        </h3>
        <p className="text-[15px] font-normal text-[#181818] text-justify mt-[12px]">
          {portfolio.projectDesc}
        </p>
        <div className="w-full space-y-2 mt-[20px]">
          <h4 className="text-[16px] font-semibold text-lightblack">
            Project Skills
          </h4>
          <div className="w-full flex flex-wrap items-center gap-2">
            {portfolio?.skills?.map((item, index) => (
              <div
                key={index}
                className="border border-gray rounded-full px-2 py-[5px]"
              >
                <p className="text-[12px] font-medium text-darkgray">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-10 mt-[20px]">
          <div className="flex flex-col">
            <p className="text-[12px] font-normal text-darkgray">
              Project Cost
            </p>
            <p className="text-[16px] font-semibold text-lightblack">
              {portfolio?.projectCost} {portfolio?.label}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[12px] font-normal text-darkgray">
              Project Duration
            </p>
            <p className="text-[16px] font-semibold text-lightblack">
              {portfolio?.projectDuration} Days
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[12px] font-normal text-darkgray">
              Project Completion Date
            </p>
            <p className="text-[16px] font-semibold text-lightblack">
              {portfolio?.endTime}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioDialog;

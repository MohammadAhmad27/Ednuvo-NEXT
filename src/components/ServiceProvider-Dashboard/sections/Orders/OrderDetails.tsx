"use client";
import {
  jobRequirementsData,
  jobServiceDescriptionData,
  jobSupportData,
  skillsList,
} from "@/app/service-requester-dashboard/content";
import MUITextField from "@/components/ui/TextField";
import { OrderCard } from "@/interfaces/Service-Provider-Dashboard";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface OrderDetailsProps {
  order: OrderCard;
}

const OrderDetails = ({ order }: OrderDetailsProps) => {
  const [message, setMessage] = useState("");

  const getStatusClasses = (status: string) => {
    switch (status) {
      case "Ongoing":
        return "text-[#5BBB7B] border-[#5BBB7B]";
      case "Completed":
        return "text-[#848991] border-[#848991]";
      case "Cancelled":
        return "text-[#EB4335] border-[#EB4335]";
      default:
        return;
    }
  };

  if (!order) return <p>Order not found.</p>;

  return (
    <div className="w-full flex max-md:flex-col gap-4">
      {/* left */}
      <div className="xl:w-3/4 lg:w-2/3 md:w-3/5 max-md:w-full flex flex-col gap-3 bg-white rounded-2xl px-4 py-5">
        {/* message */}
        <div className="w-full bg-[#F6F6F6] rounded-lg px-5 py-4">
          <p className="text-[16px] font-semibold text-black">Order Started</p>
          <p className="text-[14px] font-normal text-black">
            <span className="font-semibold text-secondary">
              {order?.orderRequesterName}
            </span>{" "}
            sent all the information you need so you can start working on this
            order. You got this!
          </p>
        </div>
        {/* order details */}
        <div className="w-full space-y-2">
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-[16px] font-semibold text-black">
              Order Details
            </h2>
            <p
              className={`text-[14px] font-semibold border bg-white text-center rounded-full px-3 py-1 ${getStatusClasses(
                order?.status
              )}`}
            >
              {order?.status}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[14px] font-medium text-black">{order?.title}</p>
            <div className="w-full flex flex-wrap items-center gap-x-4 gap-y-2 leading-none">
              <div className="flex items-center gap-2">
                <p className="text-[14px] font-normal text-darkgray">
                  {order?.duration}:
                </p>
                <p className="text-[14px] font-normal text-black">
                  {order?.orderDuration} days
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[14px] font-normal text-darkgray">
                  {order?.orderStarted}:
                </p>
                <p className="text-[14px] font-normal text-black">
                  {order?.orderStartedDate}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[14px] font-normal text-darkgray">
                  {order?.price}:
                </p>
                <p className="text-[14px] font-normal text-black">
                  {order?.orderPrice} SAR
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[14px] font-normal text-darkgray">
                  Ordered by:
                </p>
                <p className="text-[14px] font-normal text-black">
                  {/* service-requester-name */}
                  {order?.orderRequesterName}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* separator */}
        <div className="w-full h-[0.5px] bg-[#0000004D] mt-[4px]" />
        {/* service description */}
        <div className="w-full flex flex-col gap-1 mt-1">
          <h2 className="text-[16px] font-semibold text-black">
            Service Description
          </h2>
          <p className="w-full text-[14px] font-normal text-[#323232] text-justify">
            We are seeking a skilled and experienced Plumbing Installation
            Technician to install and maintain plumbing systems in residential
            and commercial bathrooms and kitchens. The ideal candidate should
            have in-depth knowledge of plumbing systems, excellent
            problem-solving skills, and the ability to work independently or as
            part of a team.
          </p>
          <ul className="w-full flex flex-col gap-2 mt-1">
            {jobServiceDescriptionData?.map((item) => (
              <li key={item?.id} className="flex items-center gap-2">
                <Image
                  src={item?.icon}
                  alt="check-icon"
                  width={15}
                  height={15}
                  className="object-cover"
                />
                <p className="text-[14px] font-normal text-[#323232]">
                  {item?.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {/* separator */}
        <div className="w-full h-[0.5px] bg-[#0000004D] mt-[4px]" />
        {/* service requirements */}
        <div className="w-full flex flex-col gap-1 mt-1">
          <h2 className="text-[16px] font-semibold text-black">Requirements</h2>
          <p className="w-full text-[14px] font-normal text-[#323232] text-justify">
            We are seeking a skilled and experienced Plumbing Installation
            Technician to install and maintain plumbing systems in residential
            and commercial bathrooms and kitchens. The ideal candidate should
            have in-depth knowledge of plumbing systems, excellent
            problem-solving skills, and the ability to work independently or as
            part of a team.
          </p>
          <p className="text-[14px] font-semibold text-darkgray">
            Location:{" "}
            <span className="text-lightblack font-medium">
              Villa 23, Street 12, Al Muruj District, Riyadh
            </span>
          </p>
        </div>
        {/* skills */}
        <div className="w-full space-y-2">
          <h2 className="text-[16px] font-semibold text-black">Skills</h2>
          <div className="w-full flex flex-wrap items-center gap-2">
            {skillsList?.map((item) => (
              <div
                key={item?.id}
                className="border border-gray rounded-full px-2 py-[5px]"
              >
                <p className="text-[12px] font-normal text-darkgray">
                  {item?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* separator */}
        <div className="w-full h-[0.5px] bg-[#0000004D] mt-[4px]" />
        <div className="w-full space-y-5 mt-1">
          <h2 className="text-[16px] font-semibold text-black">
            Order Activity
          </h2>
          <div className="relative w-full">
            <div className="z-0">
              <MUITextField
                type="text"
                label="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline={true}
                rows={6}
              />
            </div>
            {/* Floating icons */}
            <div className="absolute bottom-2 right-3 flex items-center gap-2 z-50">
              <Image
                src="/service-requester-dashboard/attachment.svg"
                alt="attachment-icon"
                width={15}
                height={15}
                className="object-cover cursor-pointer z-50"
              />
              <Image
                src="/service-requester-dashboard/emoji-smile.svg"
                alt="emoji-smile-icon"
                width={15}
                height={15}
                className="object-cover cursor-pointer mr-[2px] z-50"
              />
              <div className="flex items-center gap-1 bg-[#5BBB7B26] rounded px-2 py-1 cursor-pointer z-50">
                <Image
                  src="/service-requester-dashboard/camera-video.svg"
                  alt="camera-video-icon"
                  width={15}
                  height={15}
                  className="object-cover cursor-pointer"
                />
                <p className="text-[12px] font-medium text-secondary">
                  Video Call
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="flex justify-end items-end">
          <button className="w-max text-center text-[14px] font-medium text-primary border border-primary rounded-full px-8 py-[6px] mt-1">
            Send
          </button>
        </div>
      </div>

      {/* right */}
      <div className="xl:w-1/4 lg:w-1/3 md:w-2/5 max-md:w-full flex flex-col gap-4">
        {/* 1st */}
        <div className="w-full flex flex-col gap-4 bg-white rounded-2xl px-4 py-3">
          <h2 className="text-[18px] font-semibold text-black">
            Job Requirements
          </h2>
          <div className="flex flex-col gap-3">
            {jobRequirementsData?.map((item) => (
              <div key={item?.id} className="flex items-center gap-2">
                <Image
                  src={item?.icon}
                  alt="icon"
                  width={30}
                  height={30}
                  className="object-cover"
                />
                <div className="flex flex-col">
                  <h3 className="text-[12px] font-semibold text-[#8A8A8A]">
                    {item?.label}
                  </h3>
                  <p className="text-[12px] font-medium text-[#323232]">
                    {item?.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full rounded-full bg-secondary shadow-greenshadow text-[14px] font-medium text-white text-center py-2">
            Deliver Now
          </button>
        </div>

        {/* 2nd */}
        <div className="w-full flex flex-col gap-2 bg-white rounded-2xl px-4 py-3">
          <h2 className="text-[18px] font-semibold text-black">
            Payment Protection
          </h2>
          <div className="flex items-center gap-2">
            <p>Payment Status</p>
            <button className="bg-white border border-secondary text-[14px] font-semibold text-secondary text-center rounded-full px-3 py-[2px]">
              Paid
            </button>
          </div>
          <p className="text-[12px] font-normal text-[#8A8A8A]">
            Your payment is securely present in escrow for this order
          </p>
        </div>
        {/* 3rd */}
        <div className="w-full flex flex-col gap-4 bg-white rounded-2xl px-4 py-3">
          <h2 className="text-[18px] font-semibold text-black">Support</h2>
          <div className="flex flex-col gap-3">
            {jobSupportData?.map((item) => (
              <>
                <Link
                  key={item?.id}
                  href={item?.href}
                  className="flex justify-between items-center gap-2"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={item?.icon}
                      alt="icon"
                      width={23}
                      height={23}
                      className="object-cover"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-[14px] font-semibold text-[#323232]">
                        {item?.label}
                      </h3>
                      <p className="text-[12px] font-normal text-[#8A8A8A]">
                        {item?.desc}
                      </p>
                    </div>
                  </div>
                  <Image
                    src="/service-requester-dashboard/forward-icon.svg"
                    alt="forward-icon"
                    width={10}
                    height={10}
                    className="object-cover"
                  />
                </Link>
                {item?.separator && <div className={`${item?.separator}`} />}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

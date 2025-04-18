"use client";
import {
  jobServiceDescriptionData,
  skillsList,
} from "@/app/service-requester-dashboard/content";
import { JobCard } from "@/interfaces/Service-Requester-Dashboard";
import Image from "next/image";
import Link from "next/link";
import MUITextField from "../ui/TextField";
import { useState } from "react";

interface JobDetailsProps {
  job: JobCard;
}

const JobDetails = ({ job }: JobDetailsProps) => {
  if (!job) return <p>Job not found.</p>;
  const [message, setMessage] = useState("");

  return (
    <div className="w-full flex gap-4">
      {/* left */}
      <div className="w-2/3 flex flex-col gap-3 bg-white rounded-2xl px-4 py-5">
        {/* message */}
        <div className="w-full bg-[#F6F6F6] rounded-lg px-5 py-4">
          <p className="text-[16px] font-semibold text-black">
            You have successfully posted a job request.
          </p>
          <p className="text-[14px] font-normal text-black">
            <span className="font-semibold text-secondary">
              {job?.jobProviderName}
            </span>{" "}
            accepts it. Your order has started. You can track or communicate
            through{" "}
            <Link className="font-semibold text-secondary" href="#">
              here.
            </Link>
          </p>
        </div>
        {/* order details */}
        <div className="w-full space-y-2">
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-[16px] font-semibold text-black">
              Order Details
            </h2>
            <p className="bg-[#BBF7D0] text-[14px] font-semibold text-secondary text-center rounded-full px-2 py-1">
              {job?.status}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[14px] font-medium text-black">{job?.title}</p>
            <div className="w-full flex items-center gap-4">
              <div className="flex items-center gap-2">
                <p className="text-[14px] font-normal text-darkgray">
                  {job?.duration}:
                </p>
                <p className="text-[14px] font-normal text-black">
                  {job?.jobDuration} days
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[14px] font-normal text-darkgray">
                  {job?.orderStarted}:
                </p>
                <p className="text-[14px] font-normal text-black">
                  {job?.jobStartedDate}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[14px] font-normal text-darkgray">
                  {job?.price}:
                </p>
                <p className="text-[14px] font-normal text-black">
                  {job?.jobPrice} SAR
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[14px] font-normal text-darkgray">
                  Ordered by:
                </p>
                <p className="text-[14px] font-normal text-black">
                  {/* service-requester-name */}
                  Hassan Al-Omari
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* separator */}
        <div className="w-full h-px bg-[#0000004D]" />
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
        <div className="w-full h-px bg-[#0000004D]" />
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
        <div className="w-full h-px bg-[#0000004D]" />
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
      {/* <div className="w-1/3 bg-white rounded-2xl px-4 py-5"></div> */}
    </div>
  );
};

export default JobDetails;

"use client";
import {
  jobRequirementsData,
  jobServiceDescriptionData,
  jobSupportData,
  skillsList,
} from "@/app/service-requester-dashboard/content";
import MUITextField from "@/components/ui/TextField";
import {
  JobCard,
  ReviewCategory,
} from "@/interfaces/ServiceRequesterDashboard";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type React from "react";
import { Alert, Snackbar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface JobDetailsProps {
  job: JobCard;
}

const JobDetails = ({ job }: JobDetailsProps) => {
  const pathname = usePathname();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleMarkComplete = () => {
    setIsCompleted(!isCompleted);
  };

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

  if (!job) return <p>Job not found.</p>;

  return (
    <div className="w-full flex max-md:flex-col gap-4">
      {/* left */}
      <div className="xl:w-3/4 lg:w-2/3 md:w-3/5 max-md:w-full flex flex-col gap-3 bg-white rounded-2xl px-4 py-5">
        {/* active job */}
        {pathname?.includes("activejob") && (
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
        )}
        {/* past job - completed */}
        {pathname?.includes("pastjob") && job?.status === "Completed" && (
          <div className="w-full bg-[#F6F6F6] rounded-lg px-5 py-4">
            <p className="text-[16px] font-semibold text-black">
              This job has been successfully completed.
            </p>
            <p className="text-[14px] font-normal text-secondary">
              Great work! You’ve completed this job with{" "}
              <span className="font-semibold text-secondary">
                {job?.jobProviderName}
              </span>
              . Check your earnings and feedback{" "}
              <Link className="font-semibold text-secondary" href="#">
                here.
              </Link>
            </p>
          </div>
        )}
        {/* past job - cancelled */}
        {pathname?.includes("pastjob") && job?.status === "Cancelled" && (
          <div className="w-full bg-[#F6F6F6] rounded-lg px-5 py-4">
            <p className="text-[16px] font-semibold text-black">
              This job was cancelled.
            </p>
            <p className="text-[14px] font-normal text-[#FF4D4F]">
              Unfortunately, this job with{" "}
              <span className="font-semibold text-[#FF4D4F]">
                {job?.jobProviderName}
              </span>{" "}
              was cancelled. Keep going—new opportunities are around the corner!
            </p>
          </div>
        )}

        {/* order details */}
        <div className="w-full space-y-2">
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-[16px] font-semibold text-black">
              Order Details
            </h2>
            <p
              className={`text-[14px] font-semibold border bg-white text-center rounded-full px-3 py-1 ${getStatusClasses(
                job?.status
              )}`}
            >
              {job?.status}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[14px] font-medium text-black">{job?.title}</p>
            <div className="w-full flex flex-wrap items-center gap-x-4 gap-y-2 leading-none">
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
        {!isCompleted ? <OrderActivity /> : <ReviewForm />}
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
          <button
            onClick={handleMarkComplete}
            className="w-full rounded-full bg-secondary shadow-greenshadow text-[14px] font-medium text-white text-center py-2"
          >
            {isCompleted ? "Mark As Completed" : "Mark As Complete"}
          </button>
        </div>

        {/* 2nd */}
        {/* this card data should come from user profile data */}
        <div className="w-full flex flex-col gap-3 bg-white rounded-2xl px-4 py-4">
          <div className="flex items-start gap-4">
            <Image
              src="/landing/popularservices/user.svg"
              alt="user-icon"
              width={70}
              height={70}
              className="object-cover rounded-full"
            />
            <div className="flex flex-col mt-[6px]">
              <div className="flex items-center gap-2">
                <h3 className="text-[20px] font-bold text-[#181818]">
                  {job?.jobProviderName}
                </h3>
                <Image
                  src="/service-requester-dashboard/check-icon.svg"
                  alt="check-icon"
                  width={17}
                  height={17}
                  className="object-cover"
                />
              </div>
              <p className="text-[12px] font-medium text-darkgray">
                Member since July27, 2020
              </p>
            </div>
          </div>
          {/* title */}
          <h4 className="text-[14px] font-semibold text-[#323232]">
            Professional Plumbing Installation Technician
          </h4>
          <p className="text-[12px] font-normal text-[#323232]">
            Skilled in bathroom and kitchen plumbing, including pipe fitting,
            fixture installation, and troubleshooting. Committed to delivering
            high-quality, efficient, and code-compliant plumbing solutions with
            excellent customer service.
          </p>
          <div className="w-full flex justify-between items-center gap-2">
            <div className="flex items-center gap-[6px]">
              <Image
                src="/service-requester-dashboard/location2.svg"
                alt="location-icon"
                width={10}
                height={10}
                className="object-cover"
              />
              <p className="text-[14px] font-medium text-[#8A8A8A]">
                Located In
              </p>
            </div>
            <p className="text-[14px] font-semibold text-[#323232]">
              Riyadh, Saudi Arabia
            </p>
          </div>
        </div>
        {/* 3rd */}
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
        {/* 4th */}
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

function OrderActivity() {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Message: ", message);
  };

  return (
    <form className="w-full space-y-4 mt-1" onSubmit={handleSubmit}>
      <h2 className="text-[16px] font-semibold text-black">Order Activity</h2>
      <div className="relative w-full">
        <div className="z-0">
          <MUITextField
            type="text"
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            multiline={true}
            rows={6}
          />
        </div>
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
            <p className="text-[12px] font-medium text-secondary">Video Call</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end">
        <button
          type="submit"
          className="w-max text-center text-[14px] font-medium text-primary border border-primary rounded-full px-8 py-[6px]"
        >
          Send
        </button>
      </div>
    </form>
  );
}

function ReviewForm() {
  const [reviewCategories, setReviewCategories] = useState<ReviewCategory[]>([
    {
      id: "communication",
      title: "Communication With Seller",
      question: "How responsive was the seller during the process?",
      rating: 0,
    },
    {
      id: "service",
      title: "Service as Described",
      question: "Did the result match the Gig's description?",
      rating: 0,
    },
    {
      id: "recommend",
      title: "Buy Again or Recommend",
      question: "Would you recommend buying this Gig?",
      rating: 0,
    },
  ]);

  const [reviewText, setReviewText] = useState<string>("");
  const [alertOpen, setAlertOpen] = useState<boolean>(false);

  // Handle star rating click
  const handleRatingChange = (categoryId: string, newRating: number) => {
    setReviewCategories(
      reviewCategories?.map((category) =>
        category?.id === categoryId
          ? { ...category, rating: newRating }
          : category
      )
    );
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    if (text.length <= 700) {
      setReviewText(text);
    } else {
      setReviewText(text.slice(0, 700));
      setAlertOpen(true);
    }
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Review submitted:", {
      categories: reviewCategories,
      reviewText,
    });
  };

  return (
    <div className="w-full mt-1">
      <h2 className="text-[16px] font-semibold text-black mb-3">
        Share your experience with the community to help them make better
        decisions.
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-2 mb-4">
          {reviewCategories?.map((category) => (
            <div
              key={category?.id}
              className="flex flex-col lg:flex-row lg:items-center items-start justify-between max-lg:gap-1"
            >
              <div>
                <h2 className="text-[14px] font-medium text-black">
                  {category?.title}
                </h2>
                <p className="text-[13px] font-normal text-[#323232]">
                  {category?.question}
                </p>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5]?.map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(category?.id, star)}
                    className="focus:outline-none"
                    aria-label={`Rate ${star} stars`}
                  >
                    {star <= category?.rating ? (
                      <StarIcon sx={{ color: "#5BBB7B", fontSize: 25 }} />
                    ) : (
                      <StarBorderIcon sx={{ color: "#5BBB7B", fontSize: 25 }} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Review Text Field */}
        <div className="mb-6">
          <h2 className="text-[16px] font-semibold mb-2">
            What was it like working with this Seller?
          </h2>
          <MUITextField
            multiline
            rows={6}
            value={reviewText}
            onChange={handleTextChange}
            placeholder="What did you like or didn't like about this seller's service? Share as many details as you can to help other buyers make the right decision for their needs."
            endAdornment={
              <div className="absolute bottom-2 right-4 text-darkgray">
                {reviewText?.length}/700
              </div>
            }
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end items-end">
          <button
            type="submit"
            className="w-max text-center text-[14px] font-medium text-primary border border-primary rounded-full px-8 py-[6px]"
          >
            Send
          </button>
        </div>
      </form>

      {/* Character Limit Alert */}
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleAlertClose}
          severity="warning"
          sx={{ width: "100%" }}
        >
          You can type up to 700 characters only!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default JobDetails;

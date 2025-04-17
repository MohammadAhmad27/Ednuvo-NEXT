import { reviewsData } from "@/app/service-requester-dashboard/content";
import Image from "next/image";
import React from "react";

const ReviewCardComponent = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      {reviewsData?.map((review) => (
        <div
          key={review?.id}
          className="w-full flex flex-col gap-2 border border-[#0000000D] rounded-xl px-8 py-6"
        >
          <div className="flex items-center gap-3">
            <Image
              src={review?.img}
              alt="profile-photo"
              width={45}
              height={45}
              className="object-cover rounded-full"
            />
            <div>
              <h3 className="text-[15px] font-medium text-black">
                {review?.name}
              </h3>
              <p className="text-[12px] font-normal text-[#676767]">
                {review?.location}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              {review?.starImg?.map((star, index) => (
                <Image
                  key={index}
                  src={star}
                  alt="star-icon"
                  width={20}
                  height={20}
                  className="object-cover"
                />
              ))}
            </div>
            <p className="text-[15px] font-medium text-black">
              {review?.rating?.toFixed(1)}
            </p>
            <p className="text-[12px] font-normal text-[#676767]">
              {review?.time}
            </p>
          </div>
          <p className="text-[14px] font-normal text-[#3E3E3E]">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewCardComponent;

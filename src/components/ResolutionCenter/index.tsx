"use client";
import { useState } from "react";
import MUITextField from "../ui/TextField";
import MUIAutoComplete from "../ui/AutoComplete";
import {
  refundReasons,
  resolutionCenterData,
} from "@/app/resolution-center/content";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ResolutionCenter = () => {
  const [activeBox, setActiveBox] = useState(resolutionCenterData[0].id);
  const [refundAmount, setRefundAmount] = useState<number>();
  const [description, setDescription] = useState<string>("");
  const [selectedReason, setSelectedReason] = useState<string | null>("");
  const router = useRouter();

  return (
    <div className="w-full flex flex-col gap-4 bg-white pb-10 pt-5">
      {/* 1st */}
      <div className="space-y-[3px] px-8">
        <div className="flex items-start gap-5">
          <Image
            onClick={() => router.back()}
            src="/service-requester-dashboard/backward-icon.svg"
            alt="backward-icon"
            width={10}
            height={10}
            className="object-cover mt-[6px] cursor-pointer"
          />
          <div>
            <h2 className="text-[18px] font-semibold text-[#2D2D2D]">
              Resolution Center
            </h2>
            <p className="text-[14px] font-normal text-darkgray">
              This is where you can try to resolve order issues.
            </p>
          </div>
        </div>
      </div>
      {/* 2nd */}
      <div className="flex flex-col gap-4 mt-3 px-[62px]">
        <p className="text-[16px] font-medium text-black">
          What do you want to do?
        </p>
        <div className="flex flex-col gap-[10px]">
          {resolutionCenterData?.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveBox(item.id)}
              className={`max-w-[300px] bg-white border rounded-lg px-4 py-2 cursor-pointer ${
                activeBox === item.id ? "border-secondary" : "border-gray"
              }`}
            >
              <p className="text-[14px] font-medium text-[#2D2D2D]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* 3rd */}
      <div className="space-y-[3px] mt-5 px-[62px]">
        <h2 className="text-[18px] font-semibold text-[#2D2D2D]">
          Offering a partial refund
        </h2>
        <p className="text-[15px] font-normal text-black">
          You can offer the buyer a partial refund of up to 60% of the original
          order price. If they accept your offer, you’ll still need to submit
          the delivery to complete the order. This means your completion rate
          won’t be affected.
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-5 px-[62px]">
        <p className="texr-[16px] font-medium text-secondary">Learn More</p>
        <p className="text-[16px] font-medium text-black mb-3">
          Original order amount: $140
        </p>
        <div className="w-full space-y-2">
          <div className="w-1/2">
            <MUITextField
              label="Refund Amount"
              type="number"
              value={refundAmount ?? ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setRefundAmount(
                  e.target.value === "" ? undefined : Number(e.target.value)
                )
              }
              placeholder="00 SAR"
            />
          </div>
          <p className="text-[14px] font-normal text-darkgray">
            Enter a refund amount between $5 to $84
          </p>
        </div>
      </div>
      {/* separator */}
      <div className="w-full h-[1px] bg-[#DDE1F0] mt-2 mb-3 px-[62px]" />

      {/* 4th */}
      <div className="flex flex-col gap-3 px-[62px]">
        <p className="text-[16px] font-normal text-lightblack">
          Let the buyer know why you’re offering a partial refund
        </p>
        <div className="w-1/2">
          <MUITextField
            type="text"
            placeholder="I’m offering a partial refund because..."
            label="Type your message here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline={true}
            rows={6}
          />
        </div>
        <p className="text-[14px] font-normal text-darkgray">
          Enter at least 10 characters
        </p>
      </div>
      {/* 5th */}
      <div className="flex flex-col mt-5 px-[62px]">
        <p className="text-[16px] font-normal text-lightblack mb-1">
          Tell us why you want to send a refund
        </p>
        <p className="text-[14px] font-normal text-darkgray mb-4">
          Your response won’t be shared with the buyer.
        </p>
        <MUIAutoComplete
          width="50%"
          options={refundReasons}
          value={selectedReason || ""}
          onChange={(_: React.SyntheticEvent, newValue: string | null) =>
            setSelectedReason(newValue)
          }
          label="Select reason"
        />
      </div>
      {/* separator */}
      <div className="w-full h-[1px] bg-[#DDE1F0] mt-2 mb-4 px-[62px]" />
      {/* buttons */}
      <div className="flex justify-end items-end gap-2 px-[62px]">
        <button className="text-[14px] font-medium text-primary border border-primary rounded-full text-center px-6 py-[6px]">
          Cancel
        </button>
        <button className="text-[14px] font-medium text-white bg-primary rounded-full text-center px-6 py-[6px]">
          Send Request
        </button>
      </div>
    </div>
  );
};

export default ResolutionCenter;

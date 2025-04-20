import { jobRequestCardData } from "@/app/service-provider-dashboard/content";
import Image from "next/image";

export default function JobRequestCardComponent() {
  return (
    <div className="grid grid-cols-1 h-[518px] overflow-auto">
      {jobRequestCardData?.map((item) => (
        <div className="w-full flex flex-col gap-2 bg-white border border-gray rounded-[10px] p-2">
          {/* Progress + Time */}
          <div className="flex items-center gap-2">
            <div className="bg-[#DDE1F0] w-full h-2 rounded-full mt-2">
              <div
                className="bg-[#17DB94] rounded-full h-2"
                style={{ width: `${item?.value}%` }}
              />
            </div>
            <Image
              src="/service-provider-dashboard/clock.svg"
              alt="icon"
              width={18}
              height={18}
              className="object-cover mt-[6px]"
            />
            <p className="text-[14px] font-medium text-lightblack mt-[6px]">
              {item?.time}
            </p>
          </div>

          {/* Title, Budget, Address */}
          <div className="flex flex-col gap-1 mt-2">
            <h4 className="text-[14px] font-semibold text-[#2E302F]">
              {item?.title}
            </h4>
            <div className="flex items-center gap-2">
              <p className="text-[12px] font-normal text-darkgray">Budget:</p>
              <p className="text-[12px] font-normal text-[#2E302F]">
                {item?.budget}
              </p>
            </div>
            <div className="flex items-start gap-2">
              <p className="text-[12px] font-normal text-darkgray">Address:</p>
              <p className="text-[12px] font-normal text-[#2E302F]">
                {item?.address}
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-[1px] bg-gray my-2" />

          {/* Profile */}
          <div className="flex items-center gap-3">
            <Image
              src={item?.image}
              alt="icon"
              width={37}
              height={37}
              className="object-cover rounded-full"
            />
            <div className="flex flex-col gap-[2px]">
              <h5 className="text-[12px] font-medium text-[#2E302F]">
                {item?.name}
              </h5>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Image
                    src="landing/popularservices/star.svg"
                    alt="star-icon"
                    width={18}
                    height={18}
                    className="object-cover"
                  />
                  <p className="text-[12px] font-normal text-lightblack">
                    {item?.rating}
                  </p>
                </div>
                <p className="text-[12px] font-normal text-darkgray">
                  ({item?.reviews} Reviews)
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="w-full flex justify-between items-center gap-2 mt-[14px] mb-3">
            <button className="w-1/2 flex justify-center items-center gap-2 text-[14px] font-medium text-[#EB4335] bg-white border border-[#EB4335] rounded-full px-4 py-2">
              <Image
                src="/service-provider-dashboard/decline.svg"
                alt="icon"
                width={15}
                height={15}
                className="object-cover rounded-full"
              />
              Decline
            </button>
            <button className="w-1/2 flex justify-center items-center gap-2 text-[14px] font-medium text-white bg-primary rounded-full px-4 py-2">
              <Image
                src="/service-provider-dashboard/accept.svg"
                alt="icon"
                width={15}
                height={15}
                className="object-cover rounded-full"
              />
              Accept
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

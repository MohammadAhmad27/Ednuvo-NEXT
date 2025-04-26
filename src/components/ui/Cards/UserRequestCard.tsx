import { userRequestCardData } from "@/app/admin/content";
import { jobRequestCardData } from "@/app/service-provider-dashboard/content";
import Image from "next/image";

const UserRequestCardComponent = () => {
  return (
    <div className="grid grid-cols-1 max-h-[395px] overflow-auto gap-2">
      {userRequestCardData?.map((item) => (
        <div className="w-full flex flex-col gap-2 bg-white border border-gray rounded-[10px] px-2 py-4">
          {/* Profile */}
          <div className="flex items-center gap-3">
            <Image
              src={item?.image}
              alt="icon"
              width={37}
              height={37}
              className="object-cover rounded-full"
            />
            <div className="flex flex-col">
              <h5 className="text-[14px] font-medium text-[#2E302F]">
                {item?.name}
              </h5>
              <div className="flex items-center gap-2">
                <Image
                  src={item?.icon}
                  alt="location-icon"
                  width={10}
                  height={10}
                  className="object-cover"
                />
                <p className="text-[12px] font-normal text-darkgray">
                  {item?.location}
                </p>
              </div>
            </div>
          </div>

          {/* content */}
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center gap-2">
              <p className="text-[12px] font-normal text-darkgray">Category:</p>
              <p className="text-[12px] font-normal text-lightblack">
                {item?.category}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[12px] font-normal text-darkgray">
                Test Score:
              </p>
              <p className="text-[12px] font-normal text-lightblack">
                {item?.testScore}
              </p>
            </div>
            <p className="text-[12px] font-normal text-lightblack">
              {item?.desc}
            </p>
          </div>

          {/* separator */}
          <div className="w-full h-px bg-gray mb-1" />

          {/* Buttons */}
          <div className="w-full flex justify-between items-center gap-2">
            <button className="w-1/2 flex justify-center items-center gap-2 text-[14px] font-medium text-[#EB4335] bg-white border border-[#EB4335] rounded-full px-4 py-[6px]">
              <Image
                src="/service-provider-dashboard/decline.svg"
                alt="icon"
                width={15}
                height={15}
                className="object-cover rounded-full"
              />
              Reject
            </button>
            <button className="w-1/2 flex justify-center items-center gap-2 text-[14px] font-medium text-white bg-primary rounded-full px-4 py-[6px]">
              <Image
                src="/service-provider-dashboard/accept.svg"
                alt="icon"
                width={15}
                height={15}
                className="object-cover rounded-full"
              />
              Approve
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserRequestCardComponent;

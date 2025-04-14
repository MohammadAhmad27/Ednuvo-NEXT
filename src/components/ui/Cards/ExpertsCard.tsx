import { expertsCardData } from "@/app/service-requester-dashboard/content";
import Image from "next/image";

const ExpertsCardComponent = () => {
  return (
    <div className="w-full h-full grid md:max-xl:grid-cols-2 xl:grid-cols-3 gap-4 pb-7">
      {expertsCardData?.map((item) => (
        <div
          key={item?.id}
          className="flex flex-col gap-2 p-4 bg-white border border-gray shadow-grayshadow rounded-xl"
        >
          <div className="flex items-center gap-2">
            <Image
              src={item?.profileImg}
              alt="profile-photo"
              width={80}
              height={80}
              className="object-cover rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="text-[18px] font-semibold text-lightblack leading-tight">
                {item?.name}
              </h3>
              <p className="text-[16px] font-normal text-secondary">
                {item?.occpation}
              </p>
              <div className="flex items-center gap-2 mt-[2px]">
                <div className="flex items-center gap-1">
                  <Image
                    src={item?.starImg}
                    alt="star-icon"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                  <p className="text-[14px] font-normal text-lightblack">
                    {item?.rating}
                  </p>
                </div>
                <p className="text-[14px] font-normal text-darkgray">
                  ({item?.reviews} Reviews)
                </p>
              </div>
            </div>
          </div>
          <p className="text-[14px] font-normal text-darkgray">{item?.desc}</p>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between gap-2">
              <div className="flex items-center gap-1">
                <Image
                  src={item?.budgetImg}
                  alt="budget-icon"
                  width={15}
                  height={15}
                  className="object-cover"
                />
                <p className="text-[12px] font-normal text-darkgray">
                  {item?.budget}
                </p>
              </div>
              <p className="text-[12px] font-medium text-lightblack">
                {item?.budgetValue} SAR
              </p>
            </div>
            <div className="flex justify-between gap-2">
              <div className="flex items-center gap-1">
                <Image
                  src={item?.locationImg}
                  alt="location-icon"
                  width={15}
                  height={15}
                  className="object-cover"
                />
                <p className="text-[12px] font-normal text-darkgray">
                  {item?.location}
                </p>
              </div>
              <p className="text-[12px] font-medium text-lightblack">
                {item?.locationVenue}
              </p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#D9D9D9] mt-[1px]" />
          <div className="flex gap-2 flex-wrap my-1">
            {item?.skills?.slice(0, 6).map((skillItem) => (
              <div
                key={skillItem?.id}
                className="px-2 py-1 bg-gray rounded-full"
              >
                <p className="text-[10px] font-normal text-darkgray">
                  {skillItem?.label}
                </p>
              </div>
            ))}
            {item?.skills?.length > 6 && (
              <p className="text-[12px] font-normal text-darkgray py-1">
                +{item.skills.length - 6} more
              </p>
            )}
          </div>
          <button className="w-full bg-secondary shadow-greenshadow text-[14px] font-medium text-white text-center rounded-full py-2">
            {item?.button}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExpertsCardComponent;

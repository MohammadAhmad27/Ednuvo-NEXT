import {
  individualServices,
  individualServicesData,
} from "@/app/(main)/content";
import Image from "next/image";

const IndividualServiceCard = () => {
  return (
    <div className="w-full bg-white shadow-grayshadow2 flex flex-col gap-2 justify-center items-center rounded-xl px-2 py-6">
      <Image
        src="/landing/popularservices/user.svg"
        alt="user-icon"
        width={50}
        height={50}
        className="object-cover rounded-full mb-[2px]"
      />
      <div className="flex flex-col items-center px-6">
        <h4 className="text-[14px] font-semibold text-lightblack">
          Muhammad Ibrahim
        </h4>
        <p className="text-[12px] font-normal text-darkgray">
          Plumbing Services
        </p>
        <div className="flex items-center gap-2 mt-[2px]">
          <div className="flex items-center gap-1">
            <Image
              src="/landing/popularservices/star.svg"
              alt="star-icon"
              width={20}
              height={20}
              className="object-cover"
            />
            <p className="text-[12px] font-normal text-lightblack">4.9</p>
          </div>
          <p className="text-[12px] font-normal text-darkgray">(620 Reviews)</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-6">
        {individualServices?.map((item) => (
          <div
            key={item?.id}
            className="bg-white border border-gray shadow-grayshadow3 rounded-full px-[10px] py-[6px]"
          >
            <p className="text-[10px] font-normal text-secondary">
              {item?.name}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full h-[0.5px] bg-[#00000033] mt-3 mb-2" />
      <div className="flex justify-between items-center gap-5">
        {individualServicesData?.map((item) => (
          <div key={item?.id} className="flex flex-col">
            <p className="text-[12px] font-medium text-lightblack">
              {item?.key}
            </p>
            <p className="text-[12px] font-normal text-lightblack">
              {item?.value}
              {item?.suffix}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualServiceCard;

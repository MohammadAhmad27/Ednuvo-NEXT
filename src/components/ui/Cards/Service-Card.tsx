import Image from "next/image";
import { ServiceCard } from "@/interfaces";

interface ServiceCardProps {
  card: ServiceCard;
}

const ServiceCardComponent = ({ card }: ServiceCardProps) => {
  return (
    <div className="h-full bg-white border border-gray shadow-grayshadow rounded-xl cursor-pointer">
      <Image
        src={card?.coverImg}
        alt="cover-image"
        width={100}
        height={200}
        className="object-cover w-full rounded-t-xl"
      />
      <div className="px-4 py-3 flex flex-col gap-1">
        <h3 className="text-[18px] font-normal text-secondary">
          {card?.title}
        </h3>
        <p className="text-[18px] font-semibold text-lightblack leading-tight max-w-[350px]">
          {card?.description}
        </p>
        <div className="flex items-center gap-2 mt-[2px]">
          <div className="flex items-center gap-1">
            <Image src={card?.starImg} alt="rating" width={20} height={20} />
            <p className="text-[14px] font-normal text-lightblack">
              {card?.rating}
            </p>
          </div>
          <p className="text-[14px] font-normal text-darkgray">
            ({card?.reviews} Reviews)
          </p>
        </div>
        <div className="w-full h-[0.5px] bg-[#0000004D] my-3" />
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={card?.userImg}
              alt="user"
              width={35}
              height={35}
              className="object-cover rounded-full"
            />
            <p className="text-[12px] font-medium text-lightblack">
              {card?.username}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[12px] font-normal text-darkgray">
              {card?.startingAt}
            </p>
            <p className="text-[14px] font-medium text-lightblack">
              {card?.price}
              {card?.currency}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardComponent;

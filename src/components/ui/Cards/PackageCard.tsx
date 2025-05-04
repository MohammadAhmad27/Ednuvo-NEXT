import { PackageCard } from "@/interfaces/ServiceRequesterDashboard";
import Image from "next/image";

const PackageCardComponent = ({
  packageData,
  show = true,
  limit = true,
  image = true,
  onEdit,
}: {
  packageData: PackageCard[];
  show?: boolean;
  limit?: boolean;
  image?: boolean;
  onEdit?: (pkg: PackageCard) => void;
}) => {
  const packagesToDisplay = limit ? packageData?.slice(0, 4) : packageData;
  return (
    <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {packagesToDisplay?.map((item) => (
        <div
          key={item?.id}
          className="flex flex-col gap-2 p-2 bg-white border border-[#DDE1F0] shadow-grayshadow rounded-xl cursor-pointer"
        >
          <div className="relative">
            <Image
              src={item?.bgImg}
              alt="cover-photo"
              width={100}
              height={100}
              className="object-cover w-full h-[300px] rounded-lg"
            />
            {image ? (
              <Image
                src={item?.heartImg}
                alt="heart-icon"
                width={25}
                height={25}
                className="object-cover absolute top-2 right-2"
              />
            ) : (
              <div className="absolute top-2 right-2 flex items-center gap-2">
                <Image
                  src="/service-provider-dashboard/edit-icon.svg"
                  alt="edit-icon"
                  width={25}
                  height={25}
                  className="object-cover"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit?.(item);
                  }}
                />
                <Image
                  src="/service-provider-dashboard/delete-icon.svg"
                  alt="delete-icon"
                  width={25}
                  height={25}
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <p className="text-[14px] font-medium text-[#181818] pl-1">
            {item?.desc}
          </p>
          {show && (
            <div className="flex items-center gap-2 mt-[2px]">
              <div className="flex items-center gap-1">
                <Image
                  src={item?.starImg}
                  alt="star-icon"
                  width={20}
                  height={20}
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
          )}

          <div className="flex items-center gap-2 pl-1">
            <p className="text-[14px] font-normal text-darkgray">
              {item?.startingFrom}
            </p>
            <p className="text-[16px] font-semibold text-lightblack">
              {item?.value} SAR
            </p>
          </div>
          {show && (
            <button className="text-[14px] font-medium text-white text-center bg-secondary rounded-full py-2 shadow-greenshadow">
              {item?.label}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PackageCardComponent;

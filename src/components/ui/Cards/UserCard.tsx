import { userCardData } from "@/app/service-requester-dashboard/content";
import Image from "next/image";
import { useRouter } from "next/navigation";

const UserCardComponent = () => {
  const router = useRouter();
  return (
    <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-7">
      {userCardData?.map((item) => (
        <div
          key={item?.id}
          className="flex flex-col gap-2 p-2 bg-white border border-[#DDE1F0] shadow-grayshadow rounded-xl cursor-pointer"
          onClick={() =>
            router.push(`/service-provider-dashboard/profile/${item?.id}`)
          }
        >
          <Image
            src={item?.bgImg}
            alt="cover-photo"
            width={100}
            height={100}
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="flex items-center gap-2 pl-1">
            <div className="relative">
              <Image
                src={item?.profileImg}
                alt="profile-photo"
                width={30}
                height={30}
                className="object-cover rounded-full shadow-profileshadow"
              />
              <div
                className={`absolute bottom-[2px] right-0 w-2 h-2 border border-white ${
                  item?.status === "online" ? "bg-[#5BBB7B]" : "bg-[#FF0000]"
                } rounded-full`}
              />
            </div>
            <h3 className="text-[12px] font-medium text-lightblack">
              {item?.name}
            </h3>
          </div>
          <p className="text-[14px] font-medium text-[#181818] pl-1">
            {item?.desc}
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
              <p className="text-[12px] font-normal text-lightblack">
                {item?.rating}
              </p>
            </div>
            <p className="text-[12px] font-normal text-darkgray">
              ({item?.reviews} Reviews)
            </p>
          </div>
          <div className="flex items-center gap-2 pl-1">
            <p className="text-[14px] font-normal text-darkgray">
              {item?.startingFrom}
            </p>
            <p className="text-[16px] font-semibold text-lightblack">
              {item?.value} SAR
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCardComponent;

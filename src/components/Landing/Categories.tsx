import {
  imagesData,
  serviceProvidersData,
  staticTestimonials,
} from "@/app/(main)/content";
import Image from "next/image";
import IndividualServiceCard from "../ui/Cards/IndividualServiceCard";

const Categories = () => {
  return (
    <div className="w-full bg-white px-20 pt-16 pb-40 flex flex-col gap-10">
      {/* 1st */}
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-[26px] font-extrabold text-lightblack">
          Browse Providers By Category
        </h2>
        <div className="bg-lightgreen flex items-center gap-2 rounded-full pl-3 pr-2 py-2">
          <button className="text-[16px] font-medium text-secondary">
            View All Categories
          </button>
          <Image
            src="/landing/categories/arrow-right.svg"
            alt="arrow-right-icon"
            width={20}
            height={20}
            className="object-cover"
          />
        </div>
      </div>
      {/* 2nd */}
      <div className="w-full grid grid-cols-5 gap-5">
        {imagesData?.map((item) => (
          <div key={item?.id} className="relative">
            <Image
              src={item?.icon}
              alt="category-image"
              width={100}
              height={100}
              className="object-cover w-full"
            />
            <div className="absolute top-2 p-5 space-y-2">
              <h3 className="text-[16px] font-medium text-white">
                {item?.name}
              </h3>
              <p className="text-[24px] font-bold text-white leading-none max-w-[250px]">
                {item?.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* 3rd */}
      <div className="flex md:justify-between xl:justify-center xl:gap-[400px] items-center gap-2 mt-10 px-20">
        {/* left */}
        <div className="relative">
          <div className="bg-white shadow-grayshadow2 rounded-xl px-6 py-8 space-y-5">
            <h4 className="text-[14px] font-semibold text-black">
              <span className="text-secondary">200+</span>
              Verified Service Providers
            </h4>
            <div className="flex flex-col gap-2">
              {serviceProvidersData?.map((item) => (
                <div key={item?.id} className="flex items-center gap-2">
                  <Image
                    src={item?.icon}
                    alt="user-image"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                  <div>
                    <p className="text-[12px] font-semibold text-lightblack">
                      {item?.name}
                    </p>
                    <p className="text-[12px] font-normal text-secondary">
                      {item?.profession}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-[100px] right-[-245px] z-10">
            <IndividualServiceCard />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-1">
          <h3 className="text-[26px] font-extrabold text-lightblack">
            Trusted By Best Service Providers
          </h3>
          <p className="text-[18px] font-normal text-darkgray max-w-[450px] leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex flex-col gap-3 mt-4 mb-5">
            {staticTestimonials?.map((item) => (
              <div key={item?.id} className="flex items-center gap-3">
                <Image
                  src={item?.icon}
                  alt="testimonial-user-image"
                  width={20}
                  height={20}
                  className="object-cover"
                />
                <p className="text-[18px] font-normal text-lightblack">
                  {item?.desc}
                </p>
              </div>
            ))}
          </div>
          <button className="w-max bg-primary text-[16px] font-medium text-white rounded-full px-7 py-2">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

import { imagesData, staticTestimonials } from "@/app/content";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="w-full bg-white px-20 pt-16 pb-28 flex flex-col gap-10">
      {/* 1st */}
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-[26px] font-extrabold text-lightblack capitalize">
          Browse Providers by category
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
          />
        </div>
      </div>
      {/* 2nd */}
      <div className="w-full grid grid-cols-5 gap-5">
        {imagesData?.map((item) => (
          <Image
            key={item?.id}
            src={item?.icon}
            alt="category-image"
            width={100}
            height={100}
            className="object-cover w-full"
          />
        ))}
      </div>
      {/* 3rd */}
      <div className="flex justify-between items-center gap-2 mt-10 px-20">
        <div>
          <div></div>
          <div></div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-1">
          <h4 className="text-[26px] font-extrabold text-lightblack">
            Trusted By Best Service Providers
          </h4>
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

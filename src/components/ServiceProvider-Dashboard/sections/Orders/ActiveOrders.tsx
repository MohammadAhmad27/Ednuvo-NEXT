import {
  activeOrdersData,
  searchOptions,
} from "@/app/service-provider-dashboard/content";
import MUIAutoComplete from "@/components/ui/AutoComplete";
import OrderCardComponent from "@/components/ui/Cards/OrderCard";
import Image from "next/image";

const ActiveOrders = () => {
  return (
    <>
      {activeOrdersData && activeOrdersData?.length ? (
        <div className="w-full h-full flex flex-col gap-4">
          {/* Search bar */}
          <div className="w-1/2 flex items-center gap-2 px-4 py-2 rounded-full border border-[#DDE1F0] shadow-searchshadow">
            <Image
              src="/service-requester-dashboard/search.svg"
              alt="search-icon"
              width={20}
              height={20}
              className="object-cover"
            />
            <input
              type="text"
              placeholder="Search by requester name or service"
              className="flex-1 outline-none text-[14px] font-normal text-lightblack placeholder:text-[14px] placeholder:font-normal placeholder:text-darkgray"
            />
          </div>
          {/* Card Component */}
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex gap-2 justify-between items-center">
              <p className="text-[16px] font-normal text-darkgray">
                {activeOrdersData?.length} Results
              </p>
              <div className="flex items-center gap-5">
                <p className="text-[16px] font-normal text-darkgray text-nowrap">
                  Sort by:
                </p>
                <MUIAutoComplete
                  options={searchOptions}
                  label="Search by"
                  width="100%"
                  variant="green"
                  onChange={(e: any) => console.log(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full h-full px-1">
              <OrderCardComponent
                orderData={activeOrdersData}
                orderType="active"
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <NoActiveOrders />
        </>
      )}
    </>
  );
};

function NoActiveOrders() {
  return (
    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
      <Image
        src="/service-requester-dashboard/noactivejobs.svg"
        alt="no-active-jobs"
        width={200}
        height={200}
        className="object-cover"
      />
      <h3 className="text-[24px] font-medium text-black leading-tight mt-2">
        No Active Order!
      </h3>
      <p className="text-[16px] font-medium text-darkgray">
        No active order at the moment
      </p>
    </div>
  );
}

export default ActiveOrders;

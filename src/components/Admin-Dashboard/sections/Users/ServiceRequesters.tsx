import { searchOptions, serviceRequestersData } from "@/app/admin/content";
import MUIAutoComplete from "@/components/ui/AutoComplete";
import ServiceRequesterTable from "@/components/ui/Tables/ServiceRequesterTable";
import Image from "next/image";

const ServiceRequesters = () => {
  return (
    <>
      { serviceRequestersData && serviceRequestersData?.length ? (
        <div className="w-full h-full flex flex-col gap-6">
          <div className="flex justify-between items-center gap-2">
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
                placeholder="Search by name, category and location"
                className="flex-1 outline-none text-[14px] placeholder:text-[14px] placeholder:font-normal placeholder:text-darkgray"
              />
            </div>
            <div>
              <MUIAutoComplete
                options={searchOptions}
                label="Search by"
                width="100%"
                variant="green"
                onChange={(e: any) => console.log(e.target.value)}
              />
            </div>
          </div>
          {/* Card Component */}
          <div className="flex-1 overflow-auto border border-[#DDE1F0] rounded-xl shadow-searchshadow">
           <ServiceRequesterTable data={serviceRequestersData} />
          </div>
        </div>
      ) : (
        <>
          <NoServiceRequesters />
        </>
      )}
    </>
  );
};

function NoServiceRequesters() {
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
        No Service Requester!
      </h3>
      <p className="text-[16px] font-medium text-darkgray">
        No service requester at the moment
      </p>
    </div>
  );
}

export default ServiceRequesters;



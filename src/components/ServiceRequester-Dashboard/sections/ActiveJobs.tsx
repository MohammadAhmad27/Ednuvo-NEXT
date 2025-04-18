import {
  activeJobsData,
  searchOptions,
} from "@/app/service-requester-dashboard/content";
import MUIAutoComplete from "@/components/ui/AutoComplete";
import JobCardComponent from "@/components/ui/Cards/JobCard";
import Image from "next/image";

const ActiveJobs = () => {
  return (
    <>
      {activeJobsData && activeJobsData?.length ? (
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
              placeholder="Search by provider name or service"
              className="flex-1 outline-none text-[14px] placeholder:text-[14px] placeholder:font-normal placeholder:text-darkgray"
            />
          </div>
          {/* Card Component */}
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex gap-2 justify-between items-center">
              <p className="text-[16px] font-normal text-darkgray">
                {activeJobsData?.length} Results
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
              <JobCardComponent jobData={activeJobsData} jobType="active"  />
            </div>
          </div>
        </div>
      ) : (
        <>
          <NoActiveJobs />
        </>
      )}
    </>
  );
};

function NoActiveJobs() {
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
        No Active Jobs!
      </h3>
      <p className="text-[16px] font-medium text-darkgray">
        No posted or active jobs at the moment
      </p>
      <button className="bg-primary text-[14px] font-medium text-white text-center rounded-full px-8 py-[6px] mt-2">
        Post a Job
      </button>
    </div>
  );
}

export default ActiveJobs;

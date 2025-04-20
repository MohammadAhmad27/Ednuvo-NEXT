import JobTabs from "./sections/Jobs/JobTabs";

const RequesterJobs = () => {
  return (
    <div className="w-full h-full space-y-4 bg-white rounded-2xl px-4 py-5">
      <h2 className="text-[18px] font-semibold text-[#2D2D2D]">Jobs</h2>
      <JobTabs />
    </div>
  );
};

export default RequesterJobs;

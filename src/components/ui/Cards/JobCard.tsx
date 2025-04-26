import { JobCard } from "@/interfaces/ServiceRequesterDashboard";
import { useRouter } from "next/navigation";

interface JobDataProps {
  jobData: JobCard[];
  jobType: "active" | "past";
}

const JobCardComponent = ({ jobData, jobType }: JobDataProps) => {
  const router = useRouter();
  const handleNavigate = (id: number | string) => {
    router.push(`/service-requester-dashboard/${jobType}job/${id}`);
  };

  const getStatusClasses = (status: string) => {
    switch (status) {
      case "Ongoing":
        return "text-[#5BBB7B] border-[#5BBB7B]";
      case "Completed":
        return "text-[#848991] border-[#848991]";
      case "Cancelled":
        return "text-[#EB4335] border-[#EB4335]";
      default:
        return;
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-2">
      {jobData?.map((item) => (
        <div
          key={item?.id}
          className="bg-[#EEFCEE] rounded-xl px-4 py-2 w-full grid md:grid-cols-[140px_auto_auto_auto_auto_auto_auto] lg:grid-cols-[170px_auto_auto_auto_auto_auto_auto] xl:grid-cols-[300px_auto_auto_auto_auto_auto_auto] items-center gap-4 cursor-pointer"
          onClick={() => handleNavigate(item?.id)}
        >
          <p className="text-[17px] font-semibold text-lightblack max-w-[250px]">
            {item?.title}
          </p>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[15px] font-normal text-darkgray">
              {item?.price}
            </p>
            <p className="text-[16px] font-normal text-black">
              {item?.jobPrice} SAR
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[15px] font-normal text-darkgray">
              {item?.duration}
            </p>
            <p className="text-[16px] font-normal text-black">
              {item?.jobDuration} days
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[15px] font-normal text-darkgray">
              {item?.orderStarted}
            </p>
            <p className="text-[16px] font-normal text-black">
              {item?.jobStartedDate}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[15px] font-normal text-darkgray">
              {item?.provider}
            </p>
            <p className="text-[16px] font-normal text-black">
              {item?.jobProviderName}
            </p>
          </div>
          <p
            className={`w-max mx-auto flex justify-center items-center rounded-full px-4 py-1 text-[14px] font-semibold border bg-white ${getStatusClasses(
              item?.status
            )}`}
          >
            {item?.status}
          </p>
          <p className="flex justify-center items-center text-[17px] font-medium text-primary">
            {item?.view}
          </p>
        </div>
      ))}
    </div>
  );
};

export default JobCardComponent;

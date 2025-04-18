import { JobDetailsCard } from "@/interfaces/Service-Requester-Dashboard";

interface JobDataProps {
  jobData: JobDetailsCard[];
}

const JobDetailsCardComponent = ({ jobData }: JobDataProps) => {
  const getStatusClasses = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Ongoing":
        return "bg-[#BBF7D0] text-[#5BBB7B]";
      case "Completed":
        return "bg-[#FF7F0266] text-[]";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-2">
      {jobData?.map((item) => (
        <div
          key={item?.id}
          className="bg-[#EEFCEE] rounded-xl p-4 w-full grid grid-cols-7 items-center gap-4"
        >
          <p className="text-[18px] font-semibold text-lightblack max-w-[250px]">
            {item?.title}
          </p>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[16px] font-normal text-darkgray">
              {item?.price}
            </p>
            <p className="text-[16px] font-normal text-black">
              {item?.value} SAR
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[16px] font-normal text-darkgray">
              {item?.duration}
            </p>
            <p className="text-[16px] font-normal text-black">
              {item?.days} days
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[16px] font-normal text-darkgray">
              {item?.orderStarted}
            </p>
            <p className="text-[16px] font-normal text-black">{item?.date}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[16px] font-normal text-darkgray">
              {item?.provider}
            </p>
            <p className="text-[16px] font-normal text-black">{item?.name}</p>
          </div>
          <p
            className={`w-1/2 mx-auto flex justify-center items-center rounded-full p-1 text-[14px] font-semibold ${getStatusClasses(
              item?.status
            )}`}
          >
            {item?.status}
          </p>
          <p className="flex justify-center items-center text-[18px] font-medium text-primary">
            {item?.view}
          </p>
        </div>
      ))}
    </div>
  );
};

export default JobDetailsCardComponent;

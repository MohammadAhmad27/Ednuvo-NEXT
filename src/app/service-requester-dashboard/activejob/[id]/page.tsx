import { activeJobsData } from "@/app/service-requester-dashboard/content";
import JobDetails from "@/components/ServiceRequester-Dashboard/JobDetails";

type PageProps = {
  params: {
    id: string;
  };
};

const page = ({ params }: PageProps) => {
  const job = activeJobsData?.find((job) => job.id === Number(params.id));

  if (!job) return;

  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto bg-lightgreen rounded-tl-[40px] px-5 py-6">
      <JobDetails job={job} />
    </div>
  );
};

export default page;

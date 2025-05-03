import { userCardData } from "@/app/service-requester-dashboard/content";
import UserPackages from "@/components/ServiceRequester-Dashboard/sections/Dashboard/UserPackages";

type PageProps = {
  params: {
    id: string;
  };
};

const page = ({ params }: PageProps) => {
  const user = userCardData?.find((user) => user.id === Number(params.id));

  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto bg-lightgreen rounded-tl-[40px] px-5 py-6">
      <UserPackages user={user} />
    </div>
  );
};

export default page;

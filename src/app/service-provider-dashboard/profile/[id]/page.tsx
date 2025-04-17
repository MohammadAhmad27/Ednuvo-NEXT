import { userCardData } from "@/app/service-requester-dashboard/content";
import UserProfile from "@/components/ServiceProvider-Dashboard/UserProfile";


type PageProps = {
  params: {
    id: string;
  };
};

const page = ({ params }: PageProps) => {
  const user = userCardData?.find((user) => user.id === Number(params.id));

  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto bg-lightgreen rounded-tl-[40px] pl-6 py-6 pr-12">
      <UserProfile user={user} />
    </div>
  );
};

export default page;
"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import RequesterDashboard from "@/components/ServiceRequester-Dashboard/RequesterDashboard";
import RequesterJobs from "@/components/ServiceRequester-Dashboard/RequesterJobs";
import RequesterDisputes from "@/components/ServiceRequester-Dashboard/RequesterDisputes";
import RequesterMessages from "@/components/ServiceRequester-Dashboard/RequesterMessages";

const validTabs = ["dashboard", "jobs", "disputes", "messages"];

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("view");

  useEffect(() => {
    if (!tab || !validTabs.includes(tab)) {
      router.replace("/service-requester-dashboard?view=dashboard");
    }
  }, [tab, router]);

  const RenderTabComponent = ({ tab }: { tab: string | null }) => {
    switch (tab) {
      case "dashboard":
        return <RequesterDashboard />;
      case "jobs":
        return <RequesterJobs />;
      case "disputes":
        return <RequesterDisputes />;
      case "messages":
        return <RequesterMessages />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full overflow-hidden bg-lightgreen rounded-tl-[40px] pl-5 py-5 pr-12">
      {<RenderTabComponent tab={tab} />}
    </div>
  );
};

export default Page;

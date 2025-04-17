"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import RequesterDashboard from "@/components/ServiceRequester-Dashboard/RequesterDashboard";
import RequesterJobs from "@/components/ServiceRequester-Dashboard/RequesterJobs";
import RequesterDisputes from "@/components/ServiceRequester-Dashboard/RequesterDisputes";
import RequesterMessages from "@/components/ServiceRequester-Dashboard/RequesterMessages";

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

const ClientComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("view");
  const validTabs = ["dashboard", "jobs", "disputes", "messages"];

  useEffect(() => {
    if (!tab || !validTabs.includes(tab)) {
      router.replace("/service-requester-dashboard?view=dashboard");
    }
  }, [tab, router]);

  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto bg-lightgreen rounded-tl-[40px] pl-6 py-6 pr-12">
      <RenderTabComponent tab={tab} />
    </div>
  );
};

export default ClientComponent;

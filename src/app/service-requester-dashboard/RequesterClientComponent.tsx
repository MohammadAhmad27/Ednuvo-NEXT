"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import RequesterDashboard from "@/components/ServiceRequester-Dashboard/RequesterDashboard";
import RequesterJobs from "@/components/ServiceRequester-Dashboard/RequesterJobs";
import RequesterDisputes from "@/components/ServiceRequester-Dashboard/RequesterDisputes";
import RequesterMessages from "@/components/ServiceRequester-Dashboard/RequesterMessages";
import RequesterSettings from "@/components/ServiceRequester-Dashboard/RequesterSettings";
import RequesterFaqs from "@/components/ServiceRequester-Dashboard/RequesterFaqs";
import RequesterPayment from "@/components/ServiceRequester-Dashboard/RequesterPayment";

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
      case "payment":
        return <RequesterPayment />;
    case "settings":
      return <RequesterSettings />;
      case "faqs":
        return <RequesterFaqs />;
    default:
      return null;
  }
};

const RequesterClientComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("view");
  const validTabs = ["dashboard", "jobs", "disputes", "messages", "payment", "settings", "faqs"];

  useEffect(() => {
    if (!tab || !validTabs.includes(tab)) {
      router.replace("/service-requester-dashboard?view=dashboard");
    }
  }, [tab, router]);

  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto bg-lightgreen rounded-tl-[40px] px-5 py-6">
      <RenderTabComponent tab={tab} />
    </div>
  );
};

export default RequesterClientComponent;

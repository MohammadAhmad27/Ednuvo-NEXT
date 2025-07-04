"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProviderDashboard from "@/components/ServiceProvider-Dashboard/ProviderDashboard";
import ProviderOrders from "@/components/ServiceProvider-Dashboard/ProviderOrders";
import ProviderDisputes from "@/components/ServiceProvider-Dashboard/ProviderDisputes";
import ProviderMessages from "@/components/ServiceProvider-Dashboard/ProviderMessages";
import ProviderSettings from "@/components/ServiceProvider-Dashboard/ProviderSettings";
import ProviderEarnings from "@/components/ServiceProvider-Dashboard/ProviderEarnings";
import ProviderBilling from "@/components/ServiceProvider-Dashboard/ProviderBilling";
import ProviderFaqs from "@/components/ServiceProvider-Dashboard/ProviderFaqs";

const RenderTabComponent = ({ tab }: { tab: string | null }) => {
  switch (tab) {
    case "dashboard":
      return <ProviderDashboard />;
    case "orders":
      return <ProviderOrders />;
    case "disputes":
      return <ProviderDisputes />;
    case "messages":
      return <ProviderMessages />;
    case "earnings":
      return <ProviderEarnings />;
    case "billing":
      return <ProviderBilling />;
    case "settings":
      return <ProviderSettings />;
      case "faqs":
        return <ProviderFaqs />;
    default:
      return null;
  }
};

const ProviderClientComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("view");
  const validTabs = [
    "dashboard",
    "orders",
    "disputes",
    "messages",
    "earnings",
    "billing",
    "settings",
    "faqs",
  ];

  useEffect(() => {
    if (!tab || !validTabs.includes(tab)) {
      router.replace("/service-provider-dashboard?view=dashboard");
    }
  }, [tab, router]);

  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto bg-lightgreen rounded-tl-[40px] px-5 py-6">
      <RenderTabComponent tab={tab} />
    </div>
  );
};

export default ProviderClientComponent;

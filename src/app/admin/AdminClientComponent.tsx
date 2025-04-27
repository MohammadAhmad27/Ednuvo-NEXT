"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AdminDashboard from "@/components/Admin/AdminDashboard";
import AdminJobs from "@/components/Admin/AdminJobs";
import AdminDisputes from "@/components/Admin/AdminDisputes";
import AdminUsers from "@/components/Admin/AdminUsers";
import AdminCategory from "@/components/Admin/AdminCategory";
import AdminTestQuestions from "@/components/Admin/AdminTestQuestions";
import AdminSettings from "@/components/Admin/AdminSettings";

const RenderTabComponent = ({ tab }: { tab: string | null }) => {
  switch (tab) {
    case "dashboard":
      return <AdminDashboard />;
    case "users":
      return <AdminUsers />;
    case "disputes":
      return <AdminDisputes />;
    case "jobs":
      return <AdminJobs />;
    case "category":
      return <AdminCategory />;
    case "testquestions":
      return <AdminTestQuestions />;
    case "settings":
      return <AdminSettings />;
    default:
      return null;
  }
};

const AdminClientComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("view");
  const validTabs = [
    "dashboard",
    "users",
    "disputes",
    "jobs",
    "category",
    "testquestions",
    "settings",
  ];

  useEffect(() => {
    if (!tab || !validTabs.includes(tab)) {
      router.replace("/admin?view=dashboard");
    }
  }, [tab, router]);

  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto bg-lightgreen rounded-tl-[40px] px-5 py-6">
      <RenderTabComponent tab={tab} />
    </div>
  );
};

export default AdminClientComponent;

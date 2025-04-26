import { adminAnalyticsData } from "@/app/admin/content";
import AnalyticsCardComponent from "../ui/Cards/AnalyticsCard";

const AdminDashboard = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 pt-2">
      <p className="text-[18px] font-normal text-[#2D2D2D]">
        Welcome, <span className="font-medium">Rayan</span> Here’s platform
        overview.
      </p>
      <h2 className="text-[18px] font-semibold text-lightblack">Platform Analytics</h2>
      <AnalyticsCardComponent analyticsCardData={adminAnalyticsData} />
    </div>
  );
};

export default AdminDashboard;

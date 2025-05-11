import { requesterPaymentAnalyticsData } from "@/app/service-requester-dashboard/content";
import AnalyticsCardComponent from "../ui/Cards/AnalyticsCard";
import RequesterPaymentTable from "../ui/Tables/RequesterPaymentTable";

const RequesterPayment = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 pt-2">
      <h2 className="text-[18px] font-semibold text-[#2D2D2D]">Payment</h2>
      <AnalyticsCardComponent
        analyticsCardData={requesterPaymentAnalyticsData}
      />
      <div className="flex-1 h-[calc(100vh-200px)] overflow-auto border border-[#DDE1F0] rounded-xl shadow-searchshadow mt-1">
        <RequesterPaymentTable />
      </div>
    </div>
  );
};

export default RequesterPayment;

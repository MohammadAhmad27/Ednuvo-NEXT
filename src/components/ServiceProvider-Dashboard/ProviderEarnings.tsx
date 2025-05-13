import { providerEarningAnalyticsData } from "@/app/service-provider-dashboard/content";
import AnalyticsCardComponent from "../ui/Cards/AnalyticsCard";
import ProviderEarningsTable from "../ui/Tables/ProviderEarningsTable";
import { useState } from "react";
import WithdrawBalanceDialog from "../ui/Dialogs/WithdrawBalanceDialog";

const ProviderEarnings = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <div className="w-full h-full flex flex-col gap-4 pt-2">
        <div className="w-full flex justify-between items-center gap-2">
          <h2 className="text-[18px] font-semibold text-[#2D2D2D]">Earnings</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary rounded-full text-[14px] font-medium text-white text-center px-4 py-2"
          >
            Withdraw Balance
          </button>
        </div>
        <AnalyticsCardComponent
          analyticsCardData={providerEarningAnalyticsData}
        />
        <div className="flex-1 h-[calc(100vh-200px)] overflow-auto border border-[#DDE1F0] rounded-xl shadow-searchshadow mt-1">
          <ProviderEarningsTable />
        </div>
      </div>
      <WithdrawBalanceDialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProviderEarnings;

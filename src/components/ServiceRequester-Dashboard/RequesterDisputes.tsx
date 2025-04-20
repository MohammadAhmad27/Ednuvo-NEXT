import RequesterDisputesTable from "./sections/Disputes/RequesterDisputesTable";

const RequesterDisputes = () => {
  return (
    <div className="w-full h-full space-y-6 bg-white rounded-2xl px-4 py-5">
      <h2 className="text-[18px] font-semibold text-[#2D2D2D]">Disputes</h2>
      <div className="flex-1 h-[calc(100vh-200px)] overflow-auto border border-[#DDE1F0] rounded-xl shadow-searchshadow">
        <RequesterDisputesTable />
      </div>
    </div>
  );
};

export default RequesterDisputes;

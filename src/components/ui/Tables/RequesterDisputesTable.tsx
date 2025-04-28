import { requesterDisputesData } from "@/app/service-requester-dashboard/content";
import { RequesterDisputes } from "@/interfaces/ServiceRequesterDashboard";
import DataTable, { type ColumnDef } from "@/shared/DataTable";
import Image from "next/image";

const columns: ColumnDef<RequesterDisputes>[] = [
  {
    header: "Ref #",
    accessorKey: "refNumber",
  },
  {
    header: "Employer Name",
    accessorKey: "employerName",
  },
  {
    header: "Dated",
    accessorKey: "date",
  },
  {
    header: "Amount",
    cell: (payment) => `${payment?.amount} ${payment?.currency}`,
  },
  {
    header: "Status",
    cell: (payment) => (
      <span className="w-max bg-secondary text-[14px] font-normal text-white px-2 py-1 rounded-md">
        {payment?.status}
      </span>
    ),
  },
  {
    header: "Action",
    cell: () => (
      <button className="flex items-center gap-[6px] text-[14px] font-normal text-darkgray">
        <Image
          src="/service-requester-dashboard/eye.svg"
          alt="eye-icon"
          width={17}
          height={17}
          className="object-cover"
        />
        View
      </button>
    ),
  },
];

export default function RequesterDisputesTable() {
  return (
    <DataTable
      data={requesterDisputesData}
      columns={columns}
      keyField="id"
    />
  );
}

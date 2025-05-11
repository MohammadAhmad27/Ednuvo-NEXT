import { requesterPaymentData } from "@/app/service-requester-dashboard/content";
import { RequesterPayment } from "@/interfaces/ServiceRequesterDashboard";
import DataTable, { type ColumnDef } from "@/shared/DataTable";
import Image from "next/image";

const columns: ColumnDef<RequesterPayment>[] = [
  {
    header: "Date",
    accessorKey: "date",
  },
  {
    header: "Service Provider",
    accessorKey: "serviceProvider",
  },
  {
    header: "Order ID",
    accessorKey: "orderId",
  },
  {
    header: "Service Title",
    accessorKey: "serviceTitle",
  },
  {
    header: "Amount Paid",
    cell: (payment) => `${payment?.amountPaid} SAR`,
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Invoice",
    cell: () => (
      <button className="flex items-center gap-[6px] text-[14px] font-normal text-darkgray">
        <Image
          src="/service-requester-dashboard/invoice.svg"
          alt="invoice-icon"
          width={10}
          height={10}
          className="object-cover"
        />
        View
      </button>
    ),
  },
];

export default function RequesterPaymentTable() {
  return (
    <DataTable data={requesterPaymentData} columns={columns} keyField="id" />
  );
}

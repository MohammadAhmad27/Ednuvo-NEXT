import { providerEarningsData } from "@/app/service-provider-dashboard/content";
import { ProviderEarnings } from "@/interfaces/Service-Provider-Dashboard";
import DataTable, { type ColumnDef } from "@/shared/DataTable";

const columns: ColumnDef<ProviderEarnings>[] = [
  {
    header: "Date",
    accessorKey: "date",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "From",
    accessorKey: "from",
  },
  {
    header: "Order Id",
    accessorKey: "orderId",
  },
  {
    header: "Amount",
    cell: (earning) => `${earning.amount} SAR`,
  },
];

export default function ProviderEarningsTable() {
  return (
    <DataTable
      data={providerEarningsData}
      columns={columns}
      keyField="orderId"
    />
  );
}

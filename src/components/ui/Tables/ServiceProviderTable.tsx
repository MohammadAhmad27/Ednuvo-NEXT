import { ServiceProviders } from "@/interfaces/Admin";
import DataTable, { type ColumnDef } from "@/shared/DataTable";
import Image from "next/image";

interface ServiceProviderTableProps {
  data: ServiceProviders[];
}

const columns: ColumnDef<ServiceProviders>[] = [
  {
    header: "Name",
    cell: (provider) => (
      <div className="flex items-center gap-2">
        <Image
          src={provider?.image}
          alt={provider?.name}
          width={30}
          height={30}
          className="object-cover"
        />
        <p>{provider?.name}</p>
      </div>
    ),
  },
  {
    header: "Location",
    accessorKey: "location",
  },
  {
    header: "Service Category",
    accessorKey: "serviceCategory",
  },
  {
    header: "Earnings",
    cell: (provider) => `${provider?.earnings} SAR`,
  },
  {
    header: "Total Jobs Completed",
    accessorKey: "totalJobsCompleted",
  },
  {
    header: "Status",
    cell: (provider) => (
      <span
        className={`w-max ${
          provider?.status === "Active" ? "bg-secondary" : "bg-[#9F9F9F]"
        } text-[14px] font-normal text-white px-2 py-1 rounded-md`}
      >
        {provider?.status}
      </span>
    ),
  },
  {
    header: "Action",
    cell: () => (
      <div className="flex items-center gap-1">
        <Image
          src="/admin/edit-icon.svg"
          alt="edit-icon"
          width={20}
          height={20}
          className="object-cover cursor-pointer"
        />
        <Image
          src="/admin/delete-icon.svg"
          alt="delete-icon"
          width={20}
          height={20}
          className="object-cover cursor-pointer"
        />
      </div>
    ),
  },
];

const ServiceProviderTable = ({ data }: ServiceProviderTableProps) => {
  return <DataTable data={data} columns={columns} keyField="id" />;
};

export default ServiceProviderTable;

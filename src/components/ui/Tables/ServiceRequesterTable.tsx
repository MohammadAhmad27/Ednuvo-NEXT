import DataTable, { type ColumnDef } from "@/shared/DataTable";
import Image from "next/image";
import { ServiceRequesters } from "@/interfaces/Admin";

interface ServiceRequesterTableProps {
  data: ServiceRequesters[];
}

const columns: ColumnDef<ServiceRequesters>[] = [
  {
    header: "Name",
    cell: (requester) => (
      <div className="flex items-center gap-2">
        <Image
          src={requester?.image}
          alt={requester?.name}
          width={30}
          height={30}
          className="object-cover"
        />
        <p>{requester?.name}</p>
      </div>
    ),
  },
  {
    header: "Location",
    accessorKey: "location",
  },
  {
    header: "Total Jobs Posted",
    accessorKey: "totalJobsPosted",
  },
  {
    header: "Completed Jobs",
    accessorKey: "completedJobs",
  },
  {
    header: "Pending Requests",
    accessorKey: "pendingRequests",
  },
  {
    header: "Spending",
    cell: (requester) => `${requester?.spending} SAR`,
  },
  {
    header: "Status",
    cell: (requester) => (
      <span
        className={`w-max ${
          requester?.status === "Active"
            ? "bg-secondary text-white"
            : "bg-[#DDE1F0] text-darkgray"
        } text-[14px] font-normal px-2 py-1 rounded-md`}
      >
        {requester?.status}
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

const ServiceRequesterTable = ({ data }: ServiceRequesterTableProps) => {
  return <DataTable data={data} columns={columns} keyField="id" />;
};

export default ServiceRequesterTable;

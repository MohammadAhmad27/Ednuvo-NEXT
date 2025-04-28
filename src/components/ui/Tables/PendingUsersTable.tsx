import DataTable, { type ColumnDef } from "@/shared/DataTable";
import Image from "next/image";
import { PendingUsers } from "@/interfaces/Admin";

interface PendingUsersTableProps {
  data: PendingUsers[];
}

const columns: ColumnDef<PendingUsers>[] = [
  {
    header: "Name",
    cell: (user) => (
      <div className="flex items-center gap-2">
        <Image
          src={user?.image}
          alt={user?.name}
          width={30}
          height={30}
          className="object-cover"
        />
        <p>{user?.name}</p>
      </div>
    ),
  },
  {
    header: "Service Category",
    accessorKey: "serviceCategory",
  },
  {
    header: "Test Score",
    accessorKey: "testScore",
  },
  {
    header: "Test Review Status",
    cell: (user) => (
      <p
        className={`w-max ${
          user?.testReviewStatus === "Reviewed"
            ? "bg-secondary text-white"
            : "bg-[#DDE1F0] text-darkgray"
        } text-[14px] font-normal px-2 py-1 rounded-md`}
      >
        {user?.testReviewStatus}
      </p>
    ),
  },
  {
    header: "Profile Completion %",
    cell: (user) => `${user?.profileCompletion}%`,
  },
  {
    header: "Date of Signup",
    accessorKey: "dateOfSignup",
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

const PendingUsersTable = ({ data }: PendingUsersTableProps) => {
  return <DataTable data={data} columns={columns} keyField="id" />;
};

export default PendingUsersTable;

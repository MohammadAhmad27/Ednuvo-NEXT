import DataTable, { type ColumnDef } from "@/shared/DataTable";
import { Category } from "@/interfaces/Admin";
import Image from "next/image";

interface CategoryTableProps {
  data: Category[];
}

const columns: ColumnDef<Category>[] = [
  {
    header: "Category Name",
    accessorKey: "category",
  },
  {
    header: "Subcategories",
    cell: (category: Category) => (
      <div className="flex flex-wrap gap-4">
        {category?.subcategory?.map((sub) => (
          <span key={sub?.id}>
            {sub?.name}
          </span>
        ))}
      </div>
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

const CategoryTable = ({
  data,
}: CategoryTableProps) => {
  return (
    <DataTable data={data} columns={columns} keyField="id" />
  );
};

export default CategoryTable;

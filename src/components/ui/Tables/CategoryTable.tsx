import DataTable, { type ColumnDef } from "@/shared/DataTable";
import { Category } from "@/interfaces/Admin";
import Image from "next/image";

interface CategoryTableProps {
  data: Category[];
  onDelete: (category: Category) => void;
  onEdit: (category: Category) => void;
}

const CategoryTable = ({ data, onDelete, onEdit }: CategoryTableProps) => {
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
            <span key={sub?.id}>{sub?.name}</span>
          ))}
        </div>
      ),
    },
    {
      header: "Action",
      cell: (category: Category) => (
        <div className="flex items-center gap-1">
          <Image
            src="/admin/edit-icon.svg"
            alt="edit-icon"
            width={20}
            height={20}
            className="object-cover cursor-pointer"
            onClick={() => onEdit(category)}
          />
          <Image
            src="/admin/delete-icon.svg"
            alt="delete-icon"
            width={20}
            height={20}
            className="object-cover cursor-pointer"
            onClick={() => onDelete(category)}
          />
        </div>
      ),
    },
  ];

  return <DataTable data={data} columns={columns} keyField="id" />;
};

export default CategoryTable;

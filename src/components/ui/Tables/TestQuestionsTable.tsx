import DataTable, { type ColumnDef } from "@/shared/DataTable";
import { TestQuestions } from "@/interfaces/Admin";
import Image from "next/image";

interface TestQuestionsTableProps {
  data: TestQuestions[];
  onDelete: (question: string) => void;
  onEdit: (question: TestQuestions) => void;
}

const columns = (
  onDelete: (question: string) => void,
  onEdit: (question: TestQuestions) => void
): ColumnDef<TestQuestions>[] => [
  {
    header: "Question",
    cell: (row) => <p className="max-w-[250px]">{row?.question}</p>,
  },
  {
    header: "Service Category",
    accessorKey: "serviceCategory",
  },
  {
    header: "Options",
    cell: (row) => (
      <div className="flex flex-col gap-1">
        {row?.options?.map((opt) => (
          <p
            key={opt?.label}
            className="max-w-[250px]"
          >{`${opt?.label} ${opt?.value}`}</p>
        ))}
      </div>
    ),
  },
  {
    header: "Correct Answer",
    cell: (row) => <p className="max-w-[250px]">{row?.correctAnswer}</p>,
  },
  {
    header: "Action",
    cell: (row) => (
      <div className="flex items-center gap-1">
        <Image
          src="/admin/edit-icon.svg"
          alt="edit-icon"
          width={20}
          height={20}
          className="object-cover cursor-pointer"
          onClick={() => onEdit(row)}
        />
        <Image
          src="/admin/delete-icon.svg"
          alt="delete-icon"
          width={20}
          height={20}
          className="object-cover cursor-pointer"
          onClick={() => onDelete(row.question)}
        />
      </div>
    ),
  },
];

const TestQuestionsTable = ({
  data,
  onDelete,
  onEdit,
}: TestQuestionsTableProps) => {
  return (
    <DataTable data={data} columns={columns(onDelete, onEdit)} keyField="id" />
  );
};

export default TestQuestionsTable;

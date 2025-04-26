import DataTable, { type ColumnDef } from "@/shared/DataTable";
import Image from "next/image";
import { Edit, Delete } from "@mui/icons-material";
import { TestQuestions } from "@/interfaces/Admin";

interface TestQuestionsTableProps {
  data: TestQuestions[];
}

const columns: ColumnDef<TestQuestions>[] = [
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
          <p key={opt?.label} className="max-w-[250px]">{`${opt?.label} ${opt?.value}`}</p>
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
    cell: () => (
      <div className="flex items-center gap-1">
        <Edit sx={{ fontSize: "20px", cursor: "pointer" }} />
        <Delete sx={{ fontSize: "20px", cursor: "pointer" }} />
      </div>
    ),
  },
];

const TestQuestionsTable = ({ data }: TestQuestionsTableProps) => {
  return <DataTable data={data} columns={columns} keyField="question" />;
};

export default TestQuestionsTable;

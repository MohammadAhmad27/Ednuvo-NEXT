import DataTable, { type ColumnDef } from "@/shared/DataTable";
import { Edit, Delete } from "@mui/icons-material";
import { TestQuestions } from "@/interfaces/Admin";

interface TestQuestionsTableProps {
  data: TestQuestions[];
  onDelete: (question: string) => void;
  onEdit: (question: TestQuestions) => void;
}

const columns = (onDelete: (question: string) => void, onEdit: (question: TestQuestions) => void): ColumnDef<TestQuestions>[] => [
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
    cell: (row) => (
      <div className="flex items-center gap-1">
        <Edit 
          sx={{ fontSize: "20px", cursor: "pointer" }} 
          onClick={() => onEdit(row)}
        />
        <Delete 
          sx={{ fontSize: "20px", cursor: "pointer" }} 
          onClick={() => onDelete(row.question)}
        />
      </div>
    ),
  },
];

const TestQuestionsTable = ({ data, onDelete, onEdit }: TestQuestionsTableProps) => {
  return <DataTable 
    data={data} 
    columns={columns(onDelete, onEdit)} 
    keyField="question" 
  />;
};

export default TestQuestionsTable;
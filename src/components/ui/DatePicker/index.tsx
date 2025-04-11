import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

interface MUIDatePickerProps {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  label: string;
  views?: ("year" | "month" | "day")[];
  format?: string;
}

export default function MUIDatePicker({
  value,
  onChange,
  label,
  views = ["year", "month", "day"],
  format = "YYYY/MM/DD",
}: MUIDatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={onChange}
        label={label}
        views={views}
        format={format}
      />
    </LocalizationProvider>
  );
}

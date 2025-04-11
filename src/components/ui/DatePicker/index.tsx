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
        slotProps={{
          textField: {
            fullWidth: true,
            size: "medium",
            sx: {
              backgroundColor: "#FFFFFFF !important",
              borderRadius: "6px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "6px",
                fontWeight: "500",
                fontSize: "16px",
                "& fieldset": {
                  borderColor: "#E9E9E9",
                },
                "&:hover fieldset": {
                  borderColor: "#E9E9E9",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#E9E9E9",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#222222",
                fontSize: "16px",
                fontWeight: "500",
              },
              "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root.MuiFormLabel-filled": {
                color: "#222222",
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
                color: "#222222",
              },
              "& .MuiOutlinedInput-input": {
                color: "#222222",
                fontSize: "16px",
                fontWeight: "500",
              },
              "& input:-webkit-autofill": {
                boxShadow: "0 0 0 1000px white inset !important",
                WebkitTextFillColor: "#222222 !important",
              },
              "& input[type=number]": {
                MozAppearance: "textfield", // Firefox
              },
              "& input[type=number]::-webkit-outer-spin-button": {
                WebkitAppearance: "none",
                margin: 0,
              },
              "& input[type=number]::-webkit-inner-spin-button": {
                WebkitAppearance: "none",
                margin: 0,
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Dayjs } from "dayjs";

interface MUITimePickerProps {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  label: string;
}

export default function MUITimePicker({ value, onChange, label }: MUITimePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        value={value}
        onChange={onChange}
        label={label}
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

import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { ChangeEvent } from "react";

interface MUITextFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  showPassword?: boolean;
  setShowPassword?: (show: boolean) => void;
}

const MUITextField = ({
  label,
  type,
  value,
  onChange,
  showPassword = false,
  setShowPassword,
}: MUITextFieldProps) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      type={type === "password" && showPassword ? "text" : type}
      value={value}
      onChange={onChange}
      fullWidth
      size="medium"
      InputProps={
        type === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword?.(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOffOutlined className="text-[#1E293B]" />
                    ) : (
                      <VisibilityOutlined className="text-[#1E293B]" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : undefined
      }
      sx={{
        backgroundColor: "#FFFFFFF",
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
          "&.Mui-focused fieldset": { borderColor: "#E9E9E9" },
        },
        "& .MuiInputLabel-root": {
          color: "#7D8BB7",
          fontSize: "16px",
          fontWeight: "500",
        },
        "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root.MuiFormLabel-filled":
          {
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
          WebkitTextFillColor: "#222222 !important",
        },
      }}
    />
  );
};

export default MUITextField;

import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { ChangeEvent, ReactNode } from "react";

interface MUITextFieldProps {
  label?: string;
  type?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  showPassword?: boolean;
  setShowPassword?: (show: boolean) => void;
  placeholder?: string | number;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  multiline?: boolean;
  rows?: number;
}

const MUITextField = ({
  label,
  type = "text",
  value,
  onChange,
  showPassword = false,
  setShowPassword,
  placeholder,
  startAdornment,
  endAdornment,
  multiline = false,
  rows = 0,
}: MUITextFieldProps) => {
  const isPassword = type === "password";
  const isNumber = type === "number";

  return (
    <TextField
      label={label}
      variant="outlined"
      type={isPassword && showPassword ? "text" : type}
      value={value}
      onChange={onChange}
      placeholder={placeholder?.toString()}
      fullWidth
      size="medium"
      multiline={multiline}
      rows={multiline ? rows : undefined}
      inputMode={isNumber ? "numeric" : undefined}
      InputProps={{
        startAdornment: startAdornment ? (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ) : undefined,
        endAdornment: isPassword ? (
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
        ) : endAdornment ? (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ) : undefined,
        ...(isNumber && {
          inputMode: "numeric",
        }),
      }}
      inputProps={
        isNumber
          ? {
              inputMode: "numeric",
              pattern: "[0-9]*",
              style: {
                MozAppearance: "textfield", // Firefox
              },
            }
          : undefined
      }
      sx={{
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
          boxShadow: "0 0 0 1000px white inset !important",
          WebkitTextFillColor: "#222222 !important",
        },
        // Hide arrows in Chrome/Safari
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
      }}
    />
  );
};

export default MUITextField;

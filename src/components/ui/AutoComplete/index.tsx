import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";

interface BaseProps {
  options: string[];
  width: string;
  label?: string;
  placeholder?: string | number;
  variant?: "default" | "green";
}

type MultiProps = BaseProps & {
  multiple: true;
  defaultValue?: string[];
  value?: string[];
  onChange: (
    event: React.SyntheticEvent,
    value: string[],
    reason: string,
    details?: any
  ) => void;
};

type SingleProps = BaseProps & {
  multiple?: false;
  defaultValue?: string;
  value?: string;
  onChange: (
    event: React.SyntheticEvent,
    value: string | null,
    reason: string,
    details?: any
  ) => void;
};

type AutoCompleteProps = MultiProps | SingleProps;

const MUIAutoComplete = ({
  options,
  width,
  variant = "default",
  label = "",
  placeholder,
  multiple = false,
  defaultValue,
  value,
  onChange,
}: AutoCompleteProps) => {
  const isGreen = variant === "green";
  const themeColor = isGreen ? "#1F4B3F" : "#222222";
  return (
    <Autocomplete
      disablePortal
      multiple={multiple}
      options={options}
      defaultValue={defaultValue as any}
      value={value as any}
      onChange={onChange as any}
      sx={{
        width: width,
        "& .MuiAutocomplete-inputRoot .MuiAutocomplete-input": {
          minWidth: "80px",
        },
        "& .MuiAutocomplete-endAdornment": {
          right: "4px !important",
        },
        "& .MuiSvgIcon-root": {
          color: isGreen ? "#1F4B3F" : "#606163",
        },
      }}
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <Chip
            label={option}
            {...getTagProps({ index })}
            sx={{
              borderRadius: "9999px",
              borderColor: "#E9E9E9",
              "& .MuiChip-deleteIcon": {
                color: "#757575",
                "&:hover": {
                  color: "#424242",
                },
              },
            }}
            variant="outlined"
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          size={isGreen ? "small" : "medium"}
          placeholder={placeholder?.toString()}
          sx={{
            backgroundColor: "#FFFFFFF",
            borderRadius: isGreen ? 100 : "6px",
            "& .MuiOutlinedInput-root": {
              borderRadius: isGreen ? 100 : "6px",
              fontWeight: "500",
              fontSize: "16px",
              "& fieldset": {
                borderColor: isGreen ? "#1F4B3F" : "#E9E9E9",
              },
              "&:hover fieldset": {
                borderColor: isGreen ? "#1F4B3F" : "#E9E9E9",
              },
              "&.Mui-focused fieldset": {
                borderColor: isGreen ? "#1F4B3F" : "#E9E9E9",
              },
            },
            "& .MuiInputLabel-root": {
              color: themeColor,
              fontSize: "16px",
              fontWeight: "500",
            },
            "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root.MuiFormLabel-filled":
              {
                color: themeColor,
              },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
              color: themeColor,
            },
            "& .MuiOutlinedInput-input": {
              color: themeColor,
              fontSize: "16px",
              fontWeight: "500",
            },
            "& input:-webkit-autofill": {
              boxShadow: "0 0 0 1000px white inset !important",
              WebkitTextFillColor: `${themeColor} !important`,
            },
            "& input[type=number]": {
              MozAppearance: "textfield",
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
      )}
    />
  );
};

export default MUIAutoComplete;

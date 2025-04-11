import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";

interface BaseProps {
  options: string[];
  label: string;
  width: string;
  placeholder?: string | number;
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
  label = "",
  width,
  placeholder,
  multiple = false,
  defaultValue,
  value,
  onChange,
}: AutoCompleteProps) => {
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
          right: "7px !important",
        },
        "& .MuiSvgIcon-root": {
          color: "#606163",
        },
      }}
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <Chip
            label={option}
            {...getTagProps({ index })}
            className="bg-gray-100"
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          size="medium"
          placeholder={placeholder?.toString()}
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

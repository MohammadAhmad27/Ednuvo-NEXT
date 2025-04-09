"use client";

import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateRangeIcon from "@mui/icons-material/DateRange";

interface DatePickerProps {
  selectedDate: any;
  minDate?: Date;
  maxDate?: Date;
  onChange: (date: any) => void;
  placeholder?: string;
  mode?: "date" | "time";
}

const DateRangePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  minDate,
  maxDate,
  onChange,
  placeholder = "Select date",
  mode = "date",
}) => {
  const CustomInput = forwardRef<
    HTMLInputElement,
    { value?: string; onClick?: () => void }
  >(({ value, onClick }, ref) => (
    <div
      className="w-full rounded-xl text-[14px] font-medium cursor-pointer border-[1px] bg-[#FFFFFF] border-[#E9E9E9] px-2 py-[8px]"
      onClick={onClick}
      ref={ref}
    >
      <div className="flex gap-2 items-center w-full">
        <DateRangeIcon className="text-[#606163]" sx={{ fontSize: 17 }} />
        <input
          type="text"
          value={value}
          readOnly
          className="border-none bg-transparent outline-none w-full"
          placeholder={placeholder}
        />
      </div>
    </div>
  ));
  CustomInput.displayName = "CustomInput";

  return (
    <DatePicker
      dateFormat={mode === "time" ? "hh:mm aa" : "yyyy/MM/dd"}
      selected={selectedDate}
      onChange={onChange}
      customInput={<CustomInput />}
      minDate={mode === "date" ? minDate : undefined}
      maxDate={mode === "date" ? maxDate : undefined}
      showTimeSelect={mode === "time"}
      showTimeSelectOnly={mode === "time"}
      timeIntervals={5}
      timeCaption="Time"
      showDisabledMonthNavigation={mode === "date"}
    />
  );
};

export default DateRangePicker;

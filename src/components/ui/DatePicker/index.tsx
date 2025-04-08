"use client";

import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateRangeIcon from "@mui/icons-material/DateRange";

interface DatePickerProps {
  selectedDate?: any;
  minDate?: Date;
  maxDate?: Date;
  onChange: (date: any) => void;
  placeholder?: string;
}

const DateRangePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  minDate,
  maxDate,
  onChange,
  placeholder = "Select date",
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
      dateFormat="yyyy/MM/dd"
      selected={selectedDate}
      onChange={(date: any) => onChange(date)}
      minDate={minDate}
      maxDate={maxDate}
      customInput={<CustomInput />}
      showDisabledMonthNavigation
    />
  );
};

export default DateRangePicker;

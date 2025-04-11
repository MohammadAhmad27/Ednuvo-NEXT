"use client";
import { useState, useEffect } from "react";
import {
  countries,
  paymentMethodImages,
} from "@/app/service-requester-onboarding/content";
import Image from "next/image";
import MUITextField from "../ui/TextField";
import DateRangePicker from "../ui/DatePicker";
import MUIAutoComplete from "../ui/AutoComplete";

interface PaymentMethodDetailsProps {
  formData: {
    paymentMethod: string;
    billedTo: string;
    cardNumber: number | String;
    expiration: Date | null;
    cvv: number | String;
    country: string;
    [key: string]: any;
  };
  onChange: (data: any) => void;
}

const PaymentMethodDetails = ({
  formData,
  onChange,
}: PaymentMethodDetailsProps) => {
  const handleStartDateChange = (date: Date) => {
    onChange({ expiration: date });
  };

  return (
    <div>
      <p className="text-[14px] text-primary font-normal mb-8">
        Let's start by setting up your profile. Enter your name, address, and
        phone number to help clients identify and contact you.
      </p>
      <div className="flex flex-col justify-start gap-2 mb-6">
        <label className="text-[14px] text-lightblack font-normal">
          Payment Method
        </label>
        <div className="flex flex-wrap items-stretch gap-4">
          {paymentMethodImages?.map((item) => (
            <div className="relative">
              <div
                key={item.label}
                className="flex items-center justify-center bg-white border border-gray rounded-md px-4 py-4"
              >
                <Image
                  src={item?.icon}
                  alt="icon"
                  width={75}
                  height={75}
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-1 -right-[6px]">
                <Image
                  src="/service-requester-onboarding/check.svg"
                  alt="check-icon"
                  width={15}
                  height={15}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full space-y-6 mb-6">
        <MUITextField
          label="Billed To"
          placeholder="Account Name"
          type="text"
          value={formData.paymentMethod}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange({ paymentMethod: e.target.value })
          }
        />
        <MUITextField
          label="Card Number"
          placeholder="9683 3663 7310 1268"
          type="number"
          value={formData.cardNumber.toString()}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange({ cardNumber: e.target.value })
          }
        />
      </div>
      <div className="w-full flex justify-between itms-center gap-4 mb-6">
        <div className="W-1/2 flex flex-col justify-start gap-1 mb-2">
          <label className="text-[14px] text-lightblack font-normal">
            Expiration
          </label>
          <DateRangePicker
            selectedDate={formData.expiration}
            onChange={handleStartDateChange}
            minDate={new Date()}
            maxDate={new Date(Date.now() + 1360 * 24 * 60 * 60 * 1000)}
            placeholder="MM/YY"
          />
        </div>
        <div className="w-1/2">
          <MUITextField
            label="CVV"
            placeholder="875"
            type="number"
            value={formData.cvv.toString()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange({ cvv: e.target.value })
            }
          />
        </div>
      </div>
      <MUIAutoComplete
        width="100%"
        options={countries}
        value={formData.country || ""}
        onChange={(_: React.SyntheticEvent, newValue: string | null) =>
          onChange({ country: newValue ?? "" })
        }
        placeholder="Country"
        label="Country"
      />
    </div>
  );
};

export default PaymentMethodDetails;

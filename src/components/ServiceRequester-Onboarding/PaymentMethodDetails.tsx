import {
  countries,
  paymentMethodImages,
} from "@/app/service-requester-onboarding/content";
import Image from "next/image";
import MUITextField from "../ui/TextField";
import MUIAutoComplete from "../ui/AutoComplete";
import dayjs, { Dayjs } from "dayjs";
import MUIDatePicker from "../ui/DatePicker";

interface PaymentMethodDetailsProps {
  formData: {
    paymentMethod: string;
    billedTo: string;
    cardNumber: number | string;
    expiration: Dayjs | null;
    cvv: number | string;
    country: string;
    [key: string]: any;
  };
  onChange: (data: any) => void;
}

const PaymentMethodDetails = ({
  formData,
  onChange,
}: PaymentMethodDetailsProps) => {
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
          {paymentMethodImages?.map((item) => {
            const isSelected = formData.paymentMethod === item.label;
            return (
              <div
                key={item.label}
                className={`relative flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer
                  ${
                    isSelected
                      ? "bg-lightgreen border-secondary"
                      : "bg-white border-gray"
                  }`}
                onClick={() => onChange({ paymentMethod: item.label })}
              >
                <Image
                  src={item?.icon}
                  alt={`${item.label}-icon`}
                  width={75}
                  height={75}
                  className="object-cover"
                />
                {isSelected && (
                  <div className="absolute -top-[6px] -right-[6px]">
                    <Image
                      src="/service-requester-onboarding/check.svg"
                      alt="check-icon"
                      width={16}
                      height={16}
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full space-y-6 mb-6">
        <MUITextField
          label="Billed To"
          placeholder="Account Name"
          type="text"
          value={formData.billedTo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange({ billedTo: e.target.value })
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
      <div className="w-full flex justify-between items-center gap-4 mb-6">
        <div className="w-1/2 flex flex-col">
          <MUIDatePicker
            value={formData.expiration ? dayjs(formData.expiration) : null}
            onChange={(date: Dayjs | null) =>
              onChange({ expiration: date ? date.toDate() : null })
            }
            label="Expiration"
            views={["year", "month"]}
            format="YYYY/MM"
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

import { useState } from "react";
import PayoutMethod from "./sections/Billing/PayoutMethod";
import MUITextField from "../ui/TextField";

const ProviderBilling = () => {
  const [value, setValue] = useState("paypal");
  const [bankName, setBankName] = useState<string>("");
  const [accountTitle, setAccountTitle] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<number>();
  const [iban, setIban] = useState<number>();

  return (
    <div className="w-full h-full space-y-5 bg-white rounded-2xl px-4 py-5">
      <h2 className="text-[18px] font-semibold text-[#2D2D2D] ">Billing</h2>
      <div className="flex-1 flex flex-col gap-4 h-[calc(100vh-200px)] overflow-auto">
        <PayoutMethod value={value} setValue={setValue} />
        <p className="text-[16px] font-medium text-darkgray">
          Choose any payment method to receive your earned amount direct to your
          desired account. Leaving this empty or unchecked will cause delay or
          no payments. For further information read our details{" "}
          <span className="text-secondary">Term and conditions</span> and{" "}
          <span className="text-secondary">Privacy Policy.</span>
        </p>
        <h3 className="text-[15px] font-semibold text-lightblack">
          Add Bank Information
        </h3>
        <div className="w-full space-y-5 mt-1">
          <div className="w-full flex justify-between items-center gap-4">
            <MUITextField
              label="Bank Name"
              type="text"
              value={bankName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBankName(e.target.value)
              }
              placeholder="Enter bank name"
            />
            <MUITextField
              label="Bank Account Title"
              type="text"
              value={accountTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAccountTitle(e.target.value)
              }
              placeholder="Enter bank account title"
            />
          </div>
          <div className="w-full flex justify-between items-center gap-4">
            <MUITextField
              label="Bank Account Number"
              type="number"
              value={accountNumber ?? ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAccountNumber(
                  e.target.value === "" ? undefined : Number(e.target.value)
                )
              }
              placeholder="Enter bank account number"
            />

            <MUITextField
              label="Email IBAN"
              type="number"
              value={iban ?? ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setIban(
                  e.target.value === "" ? undefined : Number(e.target.value)
                )
              }
              placeholder="Enter IBAN"
            />
          </div>
        </div>
        <p className="text-[16px] font-medium text-[#8A8A8A]">
          Add all required setting for the bank transfer.
        </p>
        <div className="w-full flex justify-end items-end gap-2">
          <button className="text-[14px] font-medium text-primary bg-white border border-primary rounded-full px-6 py-2">
            Cancel
          </button>
          <button className="text-[14px] font-medium text-white bg-primary rounded-full px-4 py-2">
            Save Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderBilling;

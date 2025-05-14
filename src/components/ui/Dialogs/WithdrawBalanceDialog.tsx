import { Dialog, DialogActions, DialogContent } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import MUITextField from "../TextField";
import { paymentMethodImages } from "@/app/service-requester-onboarding/content";

interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
}

const WithdrawBalanceDialog = ({ open, onClose }: ConfirmDialogProps) => {
  const [value, setValue] = useState<string>("");
  // dummy user object as user details will come from store
  const user: any = { paymentMethod: "visa" };

  const amount = parseFloat(value); // Convert input to number
  const canWithdraw = !isNaN(amount) && amount > 0;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#FFFFFF",
          color: "#222222",
          borderRadius: "32px",
          boxShadow: "0px 4px 134px 0px #46B7D11F",
          border: "1px solid #E5E5E5",
          padding: "0px",
        },
        "& .MuiDialogContent-root": {
          padding: "20px 40px 10px 40px !important",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
        "& .MuiDialogActions-root": {
          padding: "10px 10px 20px 10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <DialogContent className="w-full">
        <Image
          src="/service-provider-dashboard/withdraw-balance.svg"
          alt="delete-icon"
          width={65}
          height={65}
          className="object-cover"
        />
        <h2 className="text-[20px] font-semibold text-black mt-3 mb-4">
          Withdraw Balance
        </h2>

        <div className="w-3/5 mx-auto">
          <MUITextField
            label="Amount"
            placeholder="SAR 0.00"
            type="number"
            value={value || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e?.target?.value)
            }
          />
        </div>

        <div className="mt-[20px]">
          {paymentMethodImages
            ?.filter((item) => item.label === user?.paymentMethod)
            ?.map((item) => {
              const isSelected = user?.paymentMethod === item?.label;
              return (
                <div
                  key={item?.label}
                  className={`relative flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer
          ${
            isSelected
              ? "bg-lightgreen border-secondary"
              : "bg-white border-gray"
          }`}
                >
                  <Image
                    src={item?.icon}
                    alt={`${item?.label}-icon`}
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
      </DialogContent>
      <DialogActions>
        <button 
          onClick={onClose}
        className="bg-white border border-primary rounded-full text-center text-[16px] font-medium text-primary px-7 py-2">
          Cancel
        </button>
        <button
          onClick={onClose}
          disabled={!canWithdraw}
          className={`rounded-full text-center text-[16px] font-medium px-7 py-2 shadow-greenshadow2 transition
    ${
      canWithdraw
        ? "bg-primary text-white"
        : "bg-[#DEDEDE] text-[#8A8A8A] cursor-not-allowed"
    }`}
        >
          Confirm and withdraw
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default WithdrawBalanceDialog;

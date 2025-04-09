"use client";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Image from "next/image";

const ApplicationSubmission = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}) => {
  const router = useRouter();
  const handleLater = () => {
    setIsModalOpen(false);
    router.push("/");
  };

  const handleTakeTest = () => {
    setIsModalOpen(false);
    // pending
  };
  return (
    <Dialog
      open={isModalOpen}
      onClose={handleLater}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#FFFFFF",
          color: "#222222",
          borderRadius: "32px",
          boxShadow: "box-shadow: 0px 81.09px 76.98px 0px #0000000A",
          border: "none",
          padding: "0px",
        },
        "& .MuiDialogTitle-root": {
          padding: "30px",
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
        },
        "& .MuiDialogContent-root": {
          padding: "0px 60px 10px 60px !important",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        },
        "& .MuiDialogActions-root": {
          padding: "10px 10px 25px 10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        },
      }}
    >
      <DialogTitle>
        <div onClick={handleLater}>
          <Image
            src="/service-provider-onboarding/close.svg"
            alt="close-icon"
            width={20}
            height={20}
            className="object-cover cursor-pointer"
          />
        </div>
      </DialogTitle>

      <DialogContent>
        <Image
          src="/service-provider-onboarding/verified.svg"
          alt="verified-icon"
          width={100}
          height={100}
          className="object-cover"
        />
        <h3 className="text-[24px] font-semibold text-lightblack">
          {" "}
          Application Submitted for Review
        </h3>
        <p className="text-[18px] font-normal text-lightblack text-justify">
          Your application has been submitted for approval. Our team will review
          your details to ensure they meet our platform’s criteria. While you
          wait, please complete a short test to verify your expertise in your
          selected services.
        </p>
      </DialogContent>
      <DialogActions className="flex justify-center pb-6 px-6">
        <button
          onClick={handleLater}
          className="text-[14px] font-medium rounded-full px-8 py-[6px] border border-primary bg-white text-primary"
        >
          Later
        </button>
        <button
          onClick={handleTakeTest}
          className="text-[14px] font-medium rounded-full px-6 py-2 bg-primary text-white"
        >
          Take Test
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default ApplicationSubmission;

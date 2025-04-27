import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Image from "next/image";

interface buttonItem {
  label: string;
  href: string;
}

const ApplicationSubmission = ({
  isModalOpen,
  setIsModalOpen,
  title,
  desc,
  buttons,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  title: string;
  desc: string;
  buttons: buttonItem[];
}) => {
  const router = useRouter();
  const handleLater = () => {
    setIsModalOpen(false);
    router.push(buttons[0].href);
  };

  const handleTakeTest = () => {
    setIsModalOpen(false);
    router.push(buttons[1].href);
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
          boxShadow: "0px 81.09px 76.98px 0px #0000000A",
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
          width={90}
          height={90}
          className="object-cover"
        />
        <h3 className="text-[24px] font-semibold text-lightblack mt-1">
          {" "}
          {title}
        </h3>
        <p className="text-[18px] font-normal text-lightblack text-center">
          {desc}
        </p>
      </DialogContent>
      <DialogActions className="flex justify-center pb-6 px-6">
        <button
          onClick={handleLater}
          className="text-[14px] font-medium rounded-full px-8 py-[6px] border border-primary bg-white text-primary"
        >
          {buttons[0].label}
        </button>
        <button
          onClick={handleTakeTest}
          className="text-[14px] font-medium rounded-full px-6 py-2 bg-primary text-white"
        >
          {buttons[1].label}
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default ApplicationSubmission;

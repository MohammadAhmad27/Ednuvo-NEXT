import { Dialog, DialogActions, DialogContent } from "@mui/material";
import Image from "next/image";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  onCancel: () => void;
  onConfirm: () => void;
  confirmText: string;
  cancelText: string;
}

const DeleteDialog = ({
  open,
  title,
  description,
  onCancel,
  onConfirm,
  confirmText,
  cancelText,
}: ConfirmDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
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
      <DialogContent>
        <Image
          src={confirmText === "Logout" ? "/admin/logout.svg" : "/admin/delete.svg"}
          alt="delete-icon"
          width={40}
          height={40}
          className="object-cover"
        />
        <h2 className="text-[20px] font-semibold text-black mt-3">{title}</h2>
        <p className="text-[16px] font-medium text-lightblack mt-1">
          {description}
        </p>
      </DialogContent>
      <DialogActions>
        <button
          className="bg-white border border-primary rounded-full text-center text-[16px] font-medium text-primary px-7 py-2"
          onClick={onCancel}
        >
          {cancelText}
        </button>
        <button
          className="bg-primary rounded-full text-center text-[16px] font-medium text-white shadow-greenshadow2 px-7 py-2"
          onClick={onConfirm}
        >
          {confirmText}
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;

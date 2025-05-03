import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Box,
} from "@mui/material";
import Image from "next/image";
import MUITextField from "../TextField";
import MUIAutoComplete from "../AutoComplete";
import { Alert, Snackbar } from "@mui/material";

interface AddPackageDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddPackageDialog = ({ open, onClose }: AddPackageDialogProps) => {
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [snackMessage, setSnackMessage] = useState<string>("");

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="md"
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#FFFFFF",
            color: "#222222",
            borderRadius: "32px",
            boxShadow: "0px 4px 134px 0px #46B7D11F",
            border: "1px solid #E5E5E5",
            padding: "0px",
          },
          "& .MuiDialogTitle-root": {
            margin: "20px !important",
            padding: "13px 18px !important",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "16px",
            backgroundColor: "#EEFCEE",
          },
          "& .MuiDialogContent-root": {
            padding: "10px 20px 20px 20px !important",
            display: "flex",
            flexDirection: "column",
          },
          "& .MuiDialogActions-root": {
            padding: "0px 20px 20px 20px !important",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <DialogTitle>
          <h2 className="text-[20px] font-semibold text-black">Add Package</h2>
          <Image
            onClick={onClose}
            src="/service-provider-onboarding/close.svg"
            alt="close-icon"
            width={20}
            height={20}
            className="object-cover cursor-pointer"
          />
        </DialogTitle>

        <DialogContent className="w-full flex flex-col gap-4 mt-2">

        </DialogContent>
        <DialogActions>
          <button
            className="bg-white rounded-full text-[14px] font-medium text-primary border border-primary text-center px-6 py-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-primary rounded-full text-[14px] font-medium text-white text-center px-6 py-2"
            // onClick={handleSubmit}
          >
            Add Package
          </button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={() => setAlertOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setAlertOpen(false)}
          severity="warning"
          sx={{ width: "100%" }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddPackageDialog;

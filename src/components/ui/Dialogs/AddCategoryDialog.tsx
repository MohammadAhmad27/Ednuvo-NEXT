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
import AddIcon from "@mui/icons-material/Add";
import { Alert, Snackbar } from "@mui/material";

interface AddCategoryDialogProps {
  open: boolean;
  onClose: () => void;
  onAddCategory: (newCategory: {
    category: string;
    subcategory: { id: number; name: string }[];
  }) => void;
}

const AddCategoryDialog = ({
  open,
  onClose,
  onAddCategory,
}: AddCategoryDialogProps) => {
  const [categoryName, setCategoryName] = useState<string>("");
  const [subCategoryName, setSubCategoryName] = useState<string>("");
  const [subCategories, setSubCategories] = useState<
    { id: number; name: string }[]
  >([]);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [snackMessage, setSnackMessage] = useState<string>("");

  const handleAddSubCategory = () => {
    if (!subCategoryName?.trim()) {
      setSnackMessage("Please add subcategory name!");
      setAlertOpen(true);
      return;
    }

    setSubCategories([
      ...subCategories,
      { id: subCategories?.length + 1, name: subCategoryName?.trim() },
    ]);
    setSubCategoryName("");
  };

  const handleDeleteSub = (id: number) => {
    setSubCategories((prev) => prev?.filter((sub) => sub?.id !== id));
  };

  const handleSubmit = () => {
    if (!categoryName?.trim() || subCategories?.length === 0) {
      setSnackMessage("Please fill all fields!");
      setAlertOpen(true);
      return;
    }

    onAddCategory({
      category: categoryName?.trim(),
      subcategory: subCategories,
    });

    setCategoryName("");
    setSubCategoryName("");
    setSubCategories([]);
    onClose();
  };

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
          <h2 className="text-[20px] font-semibold text-black">Add Category</h2>
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
          <MUITextField
            label="Category Name"
            type="text"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <MUITextField
            label="Subcategory"
            type="text"
            placeholder="Enter subcategory name"
            value={subCategoryName}
            onChange={(e) => setSubCategoryName(e.target.value)}
            endAdornment={
              <button
                onClick={handleAddSubCategory}
                className="w-max text-nowrap flex justify-center items-center gap-1 text-[14px] font-medium text-primary bg-white border border-primary rounded-full pl-[8px] pr-3 py-1"
              >
                <AddIcon fontSize="small" sx={{ color: "#1F4B3F" }} />
                Add another subcategory
              </button>
            }
          />
          <Box className="w-full flex flex-wrap gap-2">
            {subCategories?.map((sub) => (
              <Chip
                key={sub?.id}
                label={sub?.name}
                variant="outlined"
                onDelete={() => handleDeleteSub(sub?.id)}
                sx={{
                  borderRadius: "9999px",
                  borderColor: "#E9E9E9",
                  // "& .MuiChip-label": {
                  //   fontSize: 14,
                  //   fontWeight: 400,
                  //   color: "#6B7177",
                  // },
                  "& .MuiChip-deleteIcon": {
                    color: "#757575",
                    "&:hover": {
                      color: "#424242",
                    },
                  },
                }}
              />
            ))}
          </Box>
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
            onClick={handleSubmit}
          >
            Add Category
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

export default AddCategoryDialog;

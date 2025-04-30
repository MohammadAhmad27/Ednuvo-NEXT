import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import MUITextField from "../TextField";
import { Category } from "@/interfaces/Admin";

interface EditCategoryDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (updatedCategory: Category) => void;
  category: Category | null;
}

const EditCategoryDialog = ({
  open,
  onClose,
  onSave,
  category,
}: EditCategoryDialogProps) => {
  const [editedCategory, setEditedCategory] = useState<Category | null>(null);

  useEffect(() => {
    if (category) {
      setEditedCategory({ ...category });
    }
  }, [category]);

  const handleSubEdit = (id: number, value: string) => {
    if (!editedCategory) return;
    setEditedCategory({
      ...editedCategory,
      subcategory: editedCategory?.subcategory?.map((sub) =>
        sub?.id === id ? { ...sub, name: value } : sub
      ),
    });
  };

  const handleDeleteSub = (id: number) => {
    if (!editedCategory) return;
    setEditedCategory({
      ...editedCategory,
      subcategory: editedCategory?.subcategory?.filter((sub) => sub?.id !== id),
    });
  };

  const handleAddSub = () => {
    if (!editedCategory) return;
    const newId =
      Math.max(0, ...editedCategory?.subcategory?.map((s) => s.id)) + 1;
    setEditedCategory({
      ...editedCategory,
      subcategory: [...editedCategory?.subcategory, { id: newId, name: "" }],
    });
  };

  const handleSave = () => {
    if (editedCategory) {
      onSave(editedCategory);
      onClose();
    }
  };

  return (
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
        <h2 className="text-[20px] font-semibold text-black">Edit Category</h2>
        <Image
          onClick={onClose}
          src="/service-provider-onboarding/close.svg"
          alt="close-icon"
          width={20}
          height={20}
          className="object-cover cursor-pointer"
        />
      </DialogTitle>
      <DialogContent className="flex flex-col gap-4">
        <MUITextField
          label="Category Name"
          type="text"
          placeholder="Enter category name"
          value={editedCategory?.category || ""}
          onChange={(e) =>
            setEditedCategory((prev) =>
              prev ? { ...prev, category: e.target.value } : prev
            )
          }
        />
        <div className="space-y-2">
          <h3 className="text-[18px] font-semibold text-black px-3">
            Subcategories
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {editedCategory?.subcategory?.map((sub) => (
              <MUITextField
                key={sub?.id}
                type="text"
                placeholder="Enter subcategory name"
                value={sub?.name}
                onChange={(e) => handleSubEdit(sub?.id, e.target.value)}
                endAdornment={
                  <Image
                    src="/admin/delete-icon.svg"
                    alt="delete-icon"
                    width={20}
                    height={20}
                    className="object-cover cursor-pointer"
                    onClick={() => handleDeleteSub(sub?.id)}
                  />
                }
              />
            ))}
          </div>
        </div>
        <button
          onClick={handleAddSub}
          className="w-max flex items-center gap-1 text-[16px] font-medium text-primary bg-lightgreen rounded-md pl-2 pr-2.5 py-1"
        >
          <AddIcon sx={{ color: "#1F4B3F" }} fontSize="small" />
          Add Subcategory
        </button>
      </DialogContent>
      <DialogActions>
        <button
          onClick={handleSave}
          className="text-[14px] font-medium bg-primary text-white rounded-full px-6 py-2"
        >
          Edit Category
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default EditCategoryDialog;

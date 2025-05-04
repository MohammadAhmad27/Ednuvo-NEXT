import { categories } from "@/app/service-requester-onboarding/content";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";

interface BrowseAllCategoriesProps {
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void;
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
  }
  
  const BrowseAllCategories = ({
    isModalOpen,
    setIsModalOpen,
    selectedCategory,
    onSelectCategory,
  }: BrowseAllCategoriesProps) => {
    const [activeButton, setActiveButton] = useState(categories[0]);
  
    // Reset activeButton when modal opens or when selectedCategory changes
    useEffect(() => {
      if (isModalOpen) {
        setActiveButton(categories[0]);
      }
    }, [isModalOpen, selectedCategory]);
  
    const handleLater = () => {
      setIsModalOpen(false);
    };
  
    const handleAddCategory = () => {
      onSelectCategory(activeButton);
      setIsModalOpen(false);
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
          <h3 className="text-[24px] font-semibold text-lightblack mt-1 mb-4">
            Select a Category:
          </h3>
          <p className="flex flex-wrap gap-3">
            {categories?.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setActiveButton(item)}
                  className={`border-[1px] border-secondary rounded-full ${
                    activeButton === item
                      ? "bg-secondary text-white"
                      : "bg-white text-secondary"
                  } py-1 px-4`}
                >
                  {item}
                </button>
              );
            })}
          </p>
        </DialogContent>
        <DialogActions className="flex items-center justify-center pb-6 px-6">
          <button
            onClick={handleAddCategory}
            className="text-[14px] font-medium rounded-full px-6 py-2 bg-primary text-white"
          >
            Add Category
          </button>
        </DialogActions>
      </Dialog>
    );
  };

  export default BrowseAllCategories;
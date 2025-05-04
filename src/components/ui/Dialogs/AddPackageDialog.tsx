"use client"
import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import MUITextField from "../TextField";
import MUIAutoComplete from "../AutoComplete";
import { Alert, Snackbar } from "@mui/material";
import { pricingModes } from "@/app/service-provider-onboarding/content";
import { Close } from "@mui/icons-material";
import { PackageCard } from "@/interfaces/ServiceRequesterDashboard";
import BrowseAllCategories from "./AllCategoriesDialog";

interface AddPackageDialogProps {
  open: boolean;
  onClose: () => void;
  onAddPackage: (newPackage: any) => void;
  currentPackages: PackageCard[];
}

const AddPackageDialog = ({
  open,
  onClose,
  onAddPackage,
  currentPackages,
}: AddPackageDialogProps) => {
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [snackMessage, setSnackMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] =
    useState<boolean>(false);
  const [formData, setFormData] = useState<{
    packageImages: File[];
    title: string;
    description: string;
    category: string;
    pricingMode: string;
    price: string | number;
    requirements: string;
  }>({
    packageImages: [] as File[],
    title: "",
    description: "",
    category: "",
    pricingMode: "",
    price: "",
    requirements: "",
  });

  const handleFormChange = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files) {
      const selectedFiles = Array?.from(e.target.files);
      const imageFiles = selectedFiles?.filter((file) =>
        file?.type?.startsWith("image/")
      );

      setFormData((prev) => ({
        ...prev,
        packageImages: [...prev?.packageImages, ...imageFiles],
      }));
    }
  };

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteImage = (imageIndex: number) => {
    const updatedImages = formData?.packageImages?.filter(
      (_, idx) => idx !== imageIndex
    );
    setFormData((prev) => ({
      ...prev,
      packageImages: updatedImages,
    }));
  };

  const handleAddPackage = () => {
    // Validate required fields
    if (
      !formData?.packageImages ||
      !formData?.title ||
      !formData?.description ||
      !formData?.category ||
      !formData?.price ||
      !formData?.pricingMode ||
      !formData?.requirements
    ) {
      setSnackMessage("Please fill all required fields!");
      setAlertOpen(true);
      return;
    }

    // Find the maximum existing ID
    const maxId = currentPackages?.reduce(
      (max, pkg) => Math?.max(max, pkg?.id),
      0
    );

    // Create new package object matching PackageCard structure
    const newPackage = {
      id: maxId + 1,
      bgImg:
        formData?.packageImages?.length > 0 &&
        URL.createObjectURL(formData?.packageImages[0]),
      title: formData?.title,
      desc: formData?.description,
      category: formData?.category,
      pricingMode: formData?.pricingMode,
      startingFrom: "Starting from",
      value: formData?.price,
      requirements: formData?.requirements,
    };

    onAddPackage(newPackage);

    setFormData({
      packageImages: [],
      title: "",
      description: "",
      category: "",
      pricingMode: "",
      price: "",
      requirements: "",
    });
    onClose();
  };

  console.log("AddPackage: ", formData);

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

        <DialogContent className="w-full flex flex-col gap-2">
          {/* Image Upload Section */}
          <div className="flex flex-col justify-start gap-2">
            <label className="text-[14px] text-lightblack font-normal">
              Package Images
            </label>
            <input
              type="file"
              placeholder="hidden"
              accept="image/*"
              multiple
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <div
              className="flex flex-col justify-center items-center p-4 border border-gray border-dashed rounded-xl cursor-pointer mb-4"
              onClick={handleDivClick}
            >
              <Image
                src="/service-provider-onboarding/upload.svg"
                alt="upload-icon"
                width={30}
                height={30}
                className="object-cover"
              />
              <p className="text-[14px] font-normal text-darkgray mt-2 text-center">
                <span className="font-medium text-secondary">
                  Upload images
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-[12px] font-normal text-darkgray">
                PNG, JPG or JPEG
              </p>
            </div>

            {/* Preview uploaded images */}
            {formData?.packageImages?.length > 0 && (
              <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
                {formData?.packageImages?.map((file, imgIndex) => {
                  const url = URL.createObjectURL(file);
                  return (
                    <div
                      key={imgIndex}
                      className="w-[50px] h-[50px] relative rounded group"
                    >
                      <Tooltip
                        title={
                          <p className="text-[10px] font-medium text-white">
                            {file?.name}
                          </p>
                        }
                        placement="bottom"
                        arrow
                      >
                        <div className="w-[50px] h-[50px] relative">
                          <Image
                            src={url}
                            alt={`uploaded-${imgIndex}`}
                            fill
                            className="object-cover rounded hover:grayscale hover:filter"
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteImage(imgIndex);
                            }}
                            className="absolute top-0 right-0 flex justify-center items-center p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black/50 rounded-full"
                          >
                            <Close sx={{ fontSize: 8, color: "white" }} />
                          </button>
                        </div>
                      </Tooltip>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* Title & Description */}
          <div className="w-full space-y-4 mb-4">
            <MUITextField
              label="Package Title"
              placeholder="Enter package title"
              type="text"
              value={formData?.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange({ title: e?.target?.value })
              }
            />
            <MUITextField
              label="Package Description"
              placeholder="Enter package description"
              type="text"
              value={formData?.description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange({ description: e?.target?.value })
              }
              multiline
              rows={4}
            />
          </div>
          {/* Browse All Categories */}
          <div className="flex flex-col gap-1 justify-start items-start mb-4">
            <label className="text-[14px] font-normal text-lightblack">
              Category
            </label>
            {formData?.category ? (
              <div className="mt-2">
                <Chip
                  label={formData?.category}
                  onDelete={() => handleFormChange({ category: "" })}
                  sx={{
                    borderRadius: "9999px",
                    borderColor: "#E9E9E9",
                    "& .MuiChip-deleteIcon": {
                      color: "#757575",
                      "&:hover": {
                        color: "#424242",
                      },
                    },
                  }}
                  variant="outlined"
                />
              </div>
            ) : (
              <button
                className="text-[14px] font-normal text-secondary mt-1"
                onClick={() => {
                  setIsCategoryModalOpen(true);
                }}
              >
                Browse all categories
              </button>
            )}
          </div>
          {/* Pricing Mode & Price */}
          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <MUIAutoComplete
              width="50%"
              options={pricingModes}
              value={formData?.pricingMode}
              onChange={(_: React.SyntheticEvent, newValue: string | null) =>
                handleFormChange({ pricingMode: newValue ?? "" })
              }
              placeholder="Fixed Price (e.g SAR 150 per project)"
              label="Pricing Modes"
            />
            <div className="w-1/2">
              <MUITextField
                label="Package Price"
                placeholder="Enter package price"
                type="number"
                value={formData?.price}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFormChange({ price: e?.target?.value })
                }
              />
            </div>
          </div>
          <div className="w-full mb-4">
            <MUITextField
              label="Requirements"
              placeholder="Enter requirements"
              type="text"
              value={formData?.requirements}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange({ requirements: e?.target?.value })
              }
              multiline
              rows={4}
            />
          </div>
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
            onClick={handleAddPackage}
          >
            Add Package
          </button>
        </DialogActions>
      </Dialog>

      <BrowseAllCategories
        isModalOpen={isCategoryModalOpen}
        setIsModalOpen={setIsCategoryModalOpen}
        selectedCategory={formData?.category || ""}
        onSelectCategory={(category) => {
          handleFormChange({ category });
          setIsCategoryModalOpen(false);
        }}
      />

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

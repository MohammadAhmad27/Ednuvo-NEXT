"use client";
import React, { useState, useRef, useEffect } from "react";
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
import { pricingModes } from "@/app/service-provider-onboarding/content";
import { Close } from "@mui/icons-material";
import { PackageCard } from "@/interfaces/ServiceRequesterDashboard";
import BrowseAllCategories from "./AllCategoriesDialog";
import { useToast } from "@/context/ToastContext";

interface EditPackageDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (updatedPackage: PackageCard) => void;
  packageToEdit: PackageCard | null;
}

const EditPackageDialog = ({
  open,
  onClose,
  onSave,
  packageToEdit,
}: EditPackageDialogProps) => {
  const { showToast } = useToast();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] =
    useState<boolean>(false);

  const [formData, setFormData] = useState<{
    packageImages: (File | string)[];
    title: string;
    description: string;
    category: string;
    pricingMode: string;
    price: string;
    requirements: string;
  }>({
    packageImages: [],
    title: "",
    description: "",
    category: "",
    pricingMode: "",
    price: "",
    requirements: "",
  });

  // Initialize form with package data when packageToEdit changes
  useEffect(() => {
    if (packageToEdit) {
      setFormData({
        packageImages: packageToEdit?.bgImg || [],
        title: packageToEdit?.title || "",
        description: packageToEdit?.desc || "",
        category: packageToEdit?.category || "",
        pricingMode: packageToEdit?.pricingMode || "",
        price: packageToEdit?.value || "",
        requirements: packageToEdit?.requirements || "",
      });
    }
  }, [packageToEdit]);

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

  const handleSave = () => {
    // Validate required fields
    if (
      !formData?.packageImages[0] ||
      !formData?.title.trim() ||
      !formData?.description.trim() ||
      !formData?.category.trim() ||
      !formData?.price.trim() ||
      !formData?.pricingMode.trim() ||
      !formData?.requirements.trim()
    ) {
      showToast("Please fill all required fields!", "warning");
      return;
    }

    if (!packageToEdit) return;

    // Create updated package object
    const updatedPackage: PackageCard = {
      ...packageToEdit,
      bgImg: formData?.packageImages?.map((file) => {
        if (typeof file === "string") return file; // Keep existing URLs
        return URL.createObjectURL(file); // Create URLs for new files
      }),
      title: formData?.title,
      desc: formData?.description,
      category: formData?.category,
      pricingMode: formData?.pricingMode,
      value: formData?.price,
      requirements: formData?.requirements,
    };

    onSave(updatedPackage);
    onClose();
  };

  // console.log("EditPackage: ", formData);

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
            padding: "10px 20px 10px 20px !important",
            display: "flex",
            flexDirection: "column",
          },
          "& .MuiDialogActions-root": {
            padding: "0px 20px 20px 20px !important",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          },
        }}
      >
        <DialogTitle>
          <h2 className="text-[20px] font-semibold text-black">Edit Package</h2>
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
              <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
                {formData?.packageImages?.map((file, index) => {
                  const url =
                    typeof file === "string" ? file : URL.createObjectURL(file);
                  const fileName =
                    typeof file === "string"
                      ? file.split("/").pop() || `image-${index}`
                      : file.name;

                  return (
                    <div
                      key={index}
                      className="w-[50px] h-[50px] relative rounded group"
                    >
                      <Tooltip
                        title={
                          <p className="text-[10px] font-medium text-white">
                            {fileName}
                          </p>
                        }
                        placement="bottom"
                        arrow
                      >
                        <div className="w-full h-full relative">
                          <Image
                            src={url}
                            alt={`uploaded-${index}`}
                            fill
                            className="object-cover rounded hover:grayscale hover:filter"
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteImage(index);
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

          {/* Rest of the form fields */}
          <div className="w-full space-y-4 mb-4">
            <MUITextField
              label="Package Title"
              placeholder="Enter package title"
              type="text"
              value={formData?.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange({ title: e.target.value })
              }
            />
            <MUITextField
              label="Package Description"
              placeholder="Enter package description"
              type="text"
              value={formData?.description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange({ description: e.target.value })
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
                onClick={() => setIsCategoryModalOpen(true)}
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
                  handleFormChange({ price: e.target.value })
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
                handleFormChange({ requirements: e.target.value })
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
            onClick={handleSave}
          >
            Save Changes
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
    </>
  );
};

export default EditPackageDialog;

"use client";
import { pricingModes } from "@/app/service-provider-onboarding/content";
import MUIAutoComplete from "../ui/AutoComplete";
import MUITextField from "../ui/TextField";
import { Add, Delete, Close } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import BrowseAllCategories from "../ui/Dialogs/AllCategoriesDialog";
import Image from "next/image";
import { Chip, Tooltip } from "@mui/material";

interface PackageData {
  packageImages: File[];
  title: string;
  description: string;
  pricingMode: string;
  price: string | number;
  category: string;
  requirements: string;
}

interface PackagesDetailProps {
  formData: {
    packages: PackageData[];
    [key: string]: any;
  };
  onChange: (data: any) => void;
}

export default function PackagesDetail({
  formData,
  onChange,
}: PackagesDetailProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPackageIndex, setSelectedPackageIndex] = useState<number>(0);
  const [packages, setPackages] = useState<PackageData[]>(
    formData?.packages || [
      {
        packageImages: [],
        title: "",
        description: "",
        pricingMode: "",
        price: "",
        category: "",
        requirements: "",
      },
    ]
  );

  // Update local state when formData changes
  useEffect(() => {
    if (formData?.packages && formData?.packages?.length > 0) {
      setPackages(formData?.packages);
    }
  }, [formData?.packages]);

  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleAddPackage = () => {
    const updatedPackages = [
      ...packages,
      {
        packageImages: [],
        title: "",
        description: "",
        pricingMode: "",
        price: "",
        category: "",
        requirements: "",
      },
    ];
    setPackages(updatedPackages);
    updateFormData(updatedPackages);
  };

  const handleRemovePackage = (index: number) => {
    if (packages?.length <= 1) return;
    const updatedPackages = [...packages];
    updatedPackages?.splice(index, 1);
    setPackages(updatedPackages);
    updateFormData(updatedPackages);
  };

  const updateFormData = (updatedPackages: PackageData[]) => {
    onChange({
      packages: updatedPackages,
    });
  };

  const handlePackageChange = (
    index: number,
    field: keyof PackageData,
    value: string
  ) => {
    const updatedPackages = [...packages];
    updatedPackages[index] = {
      ...updatedPackages[index],
      [field]: value,
    };
    setPackages(updatedPackages);
    updateFormData(updatedPackages);
  };

  const handleFileChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e?.target?.files) {
      const selectedFiles = Array?.from(e?.target?.files);
      const imageFiles = selectedFiles?.filter((file) =>
        file?.type?.startsWith("image/")
      );

      const updatedPackages = [...packages];
      const pkg = updatedPackages[index];

      updatedPackages[index] = {
        ...pkg,
        packageImages: [...pkg?.packageImages, ...imageFiles],
      };

      setPackages(updatedPackages);
      updateFormData(updatedPackages);
    }
  };

  const handleDivClick = (index: number) => {
    fileInputRefs?.current[index]?.click();
  };

  return (
    <>
      <div>
        <p className="text-[14px] text-primary font-normal text-center mb-10">
          Define your service packages with clear pricing and requirements to
          help clients choose the right option.
        </p>
        {packages?.map((pkg, index) => (
          <div key={index} className="mb-8">
            {packages?.length > 1 && (
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[16px] font-medium text-lightblack">
                  Package {index + 1}
                </h2>
                <button
                  onClick={() => handleRemovePackage(index)}
                  className="flex items-center justify-center gap-1 rounded-full bg-red-400 text-white py-[5px] px-4"
                >
                  <Delete sx={{ fontSize: 17, color: "#FFFFFF" }} />
                  Delete
                </button>
              </div>
            )}

            {/* Image Upload Section */}
            <div className="flex flex-col justify-start gap-2">
              <label className="text-[14px] text-lightblack font-normal">
                Package Thumbnail
              </label>
              <input
                type="file"
                placeholder="hidden"
                accept="image/*"
                multiple
                ref={(el: any) => (fileInputRefs.current[index] = el)}
                onChange={(e) => handleFileChange(index, e)}
                className="hidden"
              />
              <div
                className="flex flex-col justify-center items-center p-4 border border-gray border-dashed rounded-xl cursor-pointer mb-8"
                onClick={() => handleDivClick(index)}
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
            </div>

            {/* Preview uploaded images */}
            {pkg?.packageImages?.length > 0 && (
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                {pkg?.packageImages?.map((file, imgIndex) => {
                  const url = URL?.createObjectURL(file);
                  const handleDeleteImage = (
                    packageIndex: number,
                    imageIndex: number
                  ) => {
                    const updatedPackages = [...packages];

                    const updatedImages = updatedPackages[
                      packageIndex
                    ]?.packageImages?.filter((_, idx) => idx !== imageIndex);

                    updatedPackages[packageIndex] = {
                      ...updatedPackages[packageIndex],
                      packageImages: updatedImages,
                    };
                    setPackages(updatedPackages);
                    updateFormData(updatedPackages);
                  };
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
                        <div className="w-full h-full relative">
                          <Image
                            src={url}
                            alt={`uploaded-${imgIndex}`}
                            fill
                            className="object-cover rounded hover:grayscale hover:filter"
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteImage(index, imgIndex);
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

            <div className="w-full space-y-4 mb-6">
              <MUITextField
                label="Package Title"
                placeholder="Enter package title"
                type="text"
                value={pkg?.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handlePackageChange(index, "title", e?.target?.value)
                }
              />
              <MUITextField
                label="Package Description"
                placeholder="Enter package details"
                type="text"
                value={pkg?.description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handlePackageChange(index, "description", e?.target?.value)
                }
                multiline
                rows={4}
              />
            </div>

            <div className="flex flex-col gap-1 justify-start items-start mb-6">
              <label className="text-[14px] font-normal text-lightblack">
                Category
              </label>
              <p className="text-[14px] font-normal text-darkgray">
                Select a category so it's easy for clients to find your project.
              </p>

              {pkg?.category ? (
                <div className="mt-2">
                  <Chip
                    label={pkg?.category}
                    onDelete={() => handlePackageChange(index, "category", "")}
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
                    setSelectedPackageIndex(index);
                    setIsModalOpen(true);
                  }}
                >
                  Browse all categories
                </button>
              )}
            </div>

            <div className="w-full flex justify-between items-center gap-4 mb-6">
              <MUIAutoComplete
                width="50%"
                options={pricingModes}
                value={pkg?.pricingMode}
                onChange={(_: React.SyntheticEvent, newValue: string | null) =>
                  handlePackageChange(index, "pricingMode", newValue ?? "")
                }
                placeholder="Fixed Price (e.g SAR 150 per project)"
                label="Pricing Modes"
              />
              <div className="w-1/2">
                <MUITextField
                  label="Package Price"
                  placeholder="Enter package price"
                  type="number"
                  value={pkg?.price}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handlePackageChange(index, "price", e?.target?.value)
                  }
                />
              </div>
            </div>

            <div className="w-full mb-6">
              <MUITextField
                label="Requirements"
                placeholder="Enter requirements"
                type="text"
                value={pkg?.requirements}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handlePackageChange(index, "requirements", e?.target?.value)
                }
                multiline
                rows={4}
              />
            </div>
          </div>
        ))}

        <button
          onClick={handleAddPackage}
          className="flex items-center justify-center gap-1 rounded-full bg-secondary text-white py-[5px] px-4"
        >
          <Add sx={{ fontSize: 17, color: "#FFFFFF" }} />
          Add Another Package
        </button>
      </div>
      <BrowseAllCategories
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedCategory={packages[selectedPackageIndex]?.category}
        onSelectCategory={(category) => {
          handlePackageChange(selectedPackageIndex, "category", category);
          setIsModalOpen(false);
        }}
      />
    </>
  );
}

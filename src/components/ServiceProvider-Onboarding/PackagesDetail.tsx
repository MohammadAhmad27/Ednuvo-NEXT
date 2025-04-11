"use client";
import { pricingModes } from "@/app/service-provider-onboarding/content";
import MUIAutoComplete from "../ui/AutoComplete";
import MUITextField from "../ui/TextField";
import { Add, Delete } from "@mui/icons-material";
import { useEffect, useState } from "react";
import BrowseAllCategories from "../ui/Dialogs/AllCategories";

interface PackageData {
  title: string;
  description: string;
  pricingMode: string;
  price: string;
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
    formData.packages || [
      {
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
    if (formData.packages && formData.packages.length > 0) {
      setPackages(formData.packages);
    }
  }, [formData.packages]);

  const handleAddPackage = () => {
    const updatedPackages = [
      ...packages,
      {
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
    if (packages.length <= 1) return;
    const updatedPackages = [...packages];
    updatedPackages.splice(index, 1);
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

  return (
    <>
      <div>
        <p className="text-[14px] text-primary font-normal text-center mb-10">
          Define your service packages with clear pricing and requirements to
          help clients choose the right option.
        </p>
        {packages?.map((pkg, index) => (
          <div key={index} className="mb-8">
            {packages.length > 1 && (
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

            <div className="w-full space-y-4 mb-6">
              <MUITextField
                label="Package Title"
                placeholder="Enter package title"
                type="text"
                value={pkg.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handlePackageChange(index, "title", e.target.value)
                }
              />
              <MUITextField
                label="Package Description"
                placeholder="Enter package details"
                type="text"
                value={pkg.description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handlePackageChange(index, "description", e.target.value)
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
              <button
                className="text-[14px] font-normal text-secondary mt-1"
                onClick={() => {
                  setSelectedPackageIndex(index); // Set which package we're editing
                  setIsModalOpen(true);
                }}
              >
                Browse all categories
              </button>
            </div>

            <div className="w-full flex justify-between items-center gap-4 mb-6">
              <MUIAutoComplete
                width="50%"
                options={pricingModes}
                value={pkg.pricingMode}
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
                  value={pkg.price}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handlePackageChange(index, "price", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="w-full mb-6">
              <MUITextField
                label="Requirements"
                placeholder="Enter requirements"
                type="text"
                value={pkg.requirements}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handlePackageChange(index, "requirements", e.target.value)
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

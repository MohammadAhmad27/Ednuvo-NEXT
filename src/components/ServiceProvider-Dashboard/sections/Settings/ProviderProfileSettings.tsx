"use client";
import {
  providerSkillsList,
  userSkills,
} from "@/app/service-provider-dashboard/content";
import {
  experienceLevel,
  serviceCategories,
} from "@/app/service-provider-onboarding/content";
import MUIAutoComplete from "@/components/ui/AutoComplete";
import MUITextField from "@/components/ui/TextField";
import Image from "next/image";
import { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import {
  packageCardData,
  portfolioData,
} from "@/app/service-requester-dashboard/content";
import {
  PackageCard,
  PortfolioCard,
} from "@/interfaces/ServiceRequesterDashboard";
import AddPackageDialog from "@/components/ui/Dialogs/AddPackageDialog";
import Link from "next/link";
import AddPortfolioDialog from "@/components/ui/Dialogs/AddPortfolioDialog";
import PackageCardComponent from "@/components/ui/Cards/PackageCard";
import AllPortfolioCardComponent from "@/components/ui/Cards/AllPortfolioCard";
import EditPackageDialog from "@/components/ui/Dialogs/EditPackageDialog";
import DeleteDialog from "@/components/ui/Dialogs/DeleteDialog";
import EditPortfolioDialog from "@/components/ui/Dialogs/EditPortfolioDialog";
import { useToast } from "@/context/ToastContext";

const ProviderProfileSettings = () => {
  // Original data state (will only be updated on save)
  const [originalData, setOriginalData] = useState<{
    photo: File | null;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    countryCode: string;
    service: string[];
    experienceLevel: string;
    about: string;
    skills: string[];
    packages: PackageCard[];
    portfolios: PortfolioCard[];
  }>({
    photo: null,
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    countryCode: "+966",
    service: [],
    experienceLevel: "",
    about: "",
    skills: userSkills,
    packages: packageCardData,
    portfolios: portfolioData,
  });

  // Working copy state (modified in the UI)
  const [formData, setFormData] = useState(originalData);

  // Update working copy when original data changes
  useEffect(() => {
    setFormData(originalData);
  }, [originalData]);

  const { showToast } = useToast();
  const [selectedSkill, setSelectedSkill] = useState<string>("");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  // Package
  const [isAddPackageModalOpen, setIsAddPackageModalOpen] =
    useState<boolean>(false);
  const [isEditPackageModalOpen, setIsEditPackageModalOpen] =
    useState<boolean>(false);
  const [isDeletePackageModalOpen, setIsDeletePackageModalOpen] =
    useState<boolean>(false);
  // Portfolio
  const [isAddPortfolioModalOpen, setIsAddPortfolioModalOpen] =
    useState<boolean>(false);
  const [isEditPortfolioModalOpen, setIsEditPortfolioModalOpen] =
    useState<boolean>(false);
  const [isDeletePortfolioModalOpen, setIsDeletePortfolioModalOpen] =
    useState<boolean>(false);
  const [editingPackage, setEditingPackage] = useState<PackageCard | null>(
    null
  );
  const [packageToDelete, setPackageToDelete] = useState<PackageCard | null>(
    null
  );
  const [editingPortfolio, setEditingPortfolio] =
    useState<PortfolioCard | null>(null);

  const handleFormChange = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});

  // Check if all required fields are filled
  const validateForm = () => {
    const errors: Record<string, boolean> = {};
    let isValid = true;

    if (!formData?.photo) {
      errors.photo = true;
      isValid = false;
    }
    if (!formData?.firstName.trim()) {
      errors.firstName = true;
      isValid = false;
    }
    if (!formData?.lastName.trim()) {
      errors.lastName = true;
      isValid = false;
    }
    if (!formData?.address.trim()) {
      errors.address = true;
      isValid = false;
    }
    if (!formData?.phoneNumber.trim()) {
      errors.phoneNumber = true;
      isValid = false;
    }
    if (!formData?.service?.length) {
      errors.service = true;
      isValid = false;
    }
    if (!formData?.experienceLevel.trim()) {
      errors.experienceLevel = true;
      isValid = false;
    }
    if (!formData?.about.trim()) {
      errors.about = true;
      isValid = false;
    }
    if (!formData?.skills?.length) {
      errors.skills = true;
      isValid = false;
    }
    //

    setFieldErrors(errors);
    return isValid;
  };

  // Check if form has any changes
  // Custom deep comparison function that handles File objects
  const hasChanges = () => {
    // Compare photo separately since File objects can't be stringified
    const photoChanged =
      (formData?.photo === null && originalData?.photo !== null) ||
      (formData?.photo !== null && originalData?.photo === null) ||
      (formData?.photo instanceof File &&
        originalData?.photo instanceof File &&
        formData?.photo.name !== originalData.photo.name) ||
      (formData?.photo instanceof File &&
        !(originalData?.photo instanceof File)) ||
      (!(formData?.photo instanceof File) &&
        originalData?.photo instanceof File);

    if (photoChanged) return true;

    // Create copies of the objects without the photo property
    const formDataCopy = { ...formData, photo: null };
    const originalDataCopy = { ...originalData, photo: null };

    // Compare the rest of the data
    return JSON.stringify(formDataCopy) !== JSON.stringify(originalDataCopy);
  };

  // Check if form is empty (excluding skills, packages, portfolios which have initial values)
  const isEmptyForm = () => {
    const { skills, packages, portfolios, ...rest } = formData;
    return Object.values(rest).every(
      (value) =>
        value === null ||
        value === "" ||
        (Array.isArray(value) && value.length === 0)
    );
  };

  const handleSaveChanges = () => {
    // First validate all required fields
    if (!validateForm()) {
      showToast("Please fill all required fields!", "warning");
      return;
    }

    if (isEmptyForm()) {
      showToast("Please fill in some data before saving!", "warning");
      return;
    }

    if (!hasChanges()) {
      showToast("No changes detected to save!", "info");
      return;
    }

    // Update original data
    setOriginalData({
      ...formData,
      // If a new photo was uploaded, keep the reference
      photo:
        formData?.photo instanceof File ? formData?.photo : originalData?.photo,
    });

    showToast("Changes saved successfully!", "success");
  };

  const handleCancel = () => {
    if (isEmptyForm()) {
      showToast("No data to discard!", "info");
      return;
    }

    if (!hasChanges()) {
      showToast("No changes detected to cancel!", "info");
      return;
    }

    // Reset form data
    setFormData(originalData);

    // Update photo preview
    if (originalData?.photo instanceof File) {
      // Create new preview URL for the original photo
      const previewUrl = URL.createObjectURL(originalData?.photo);
      setPhotoPreview(previewUrl);
    } else {
      setPhotoPreview(null);
    }

    // Revoke current preview URL if it exists
    if (photoPreview) {
      URL.revokeObjectURL(photoPreview);
    }

    showToast("Changes discarded!", "info");
  };

  // Package Deletion
  const handleDeletePackageInitiate = (pkg: PackageCard) => {
    setPackageToDelete(pkg);
    setIsDeletePackageModalOpen(true);
  };

  const handleDeletePackageConfirm = () => {
    if (packageToDelete) {
      handleFormChange({
        packages: formData?.packages?.filter(
          (pkg) => pkg?.id !== packageToDelete?.id
        ),
      });
      showToast("Package deleted successfully!", "success");
    }
    setIsDeletePackageModalOpen(false);
    setPackageToDelete(null);
  };

  const handleDeletePackageCancel = () => {
    setIsDeletePackageModalOpen(false);
    setPackageToDelete(null);
  };

  // Portfolio Deletion
  const handleDeletePortfolioInitiate = (portfolio: PortfolioCard) => {
    setEditingPortfolio(portfolio);
    setIsDeletePortfolioModalOpen(true);
  };

  const handleDeletePortfolioConfirm = () => {
    if (editingPortfolio) {
      handleFormChange({
        portfolios: formData?.portfolios?.filter(
          (portfolio) => portfolio?.id !== editingPortfolio?.id
        ),
      });
      showToast("Portfolio deleted successfully!", "success");
    }
    setIsDeletePortfolioModalOpen(false);
    setEditingPortfolio(null);
  };

  const handleDeletePortfolioCancel = () => {
    setIsDeletePortfolioModalOpen(false);
    setEditingPortfolio(null);
  };

  // useEffect(() => {
  //   if (formData?.photo && !photoPreview) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       if (e?.target?.result) {
  //         setPhotoPreview(e?.target?.result as string);
  //       }
  //     };
  //     reader?.readAsDataURL(formData?.photo);
  //   }
  // }, [formData?.photo, photoPreview]);
  useEffect(() => {
    return () => {
      if (photoPreview) {
        URL.revokeObjectURL(photoPreview);
      }
    };
  }, [photoPreview]);

  // const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event?.target?.files && event?.target?.files[0]) {
  //     const file = event?.target?.files[0];
  //     handleFormChange({ photo: file });

  //     // Create preview URL
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       if (e?.target?.result) {
  //         setPhotoPreview(e?.target?.result as string);
  //       }
  //     };
  //     reader?.readAsDataURL(file);
  //   }
  // };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files && event?.target?.files[0]) {
      const file = event?.target?.files[0];

      // Revoke previous preview URL if it exists
      if (photoPreview) {
        URL.revokeObjectURL(photoPreview);
      }

      // Create new preview URL
      const previewUrl = URL.createObjectURL(file);
      setPhotoPreview(previewUrl);

      // Update form data
      setFormData((prev) => ({
        ...prev,
        photo: file,
      }));
    }
  };

  console.log("ProviderFormData: ", formData);

  return (
    <>
      <div className="w-full h-full flex flex-col px-5 py-8">
        {/* Edit Profile */}
        <div className="w-full space-y-4">
          <h3 className="text-[16px] font-semibold text-lightblack">
            Edit Profile
          </h3>
          <div className="flex justify-center mb-5">
            <div className="relative">
              <Image
                src={photoPreview || "/service-provider-onboarding/profile.svg"}
                width={100}
                height={100}
                alt="profile-photo"
                className="object-cover rounded-full shadow-profileshadow"
              />
              <div className="absolute -bottom-2 right-2 p-1 flex items-center justify-center rounded-full bg-primary size-8">
                <label htmlFor="upload-photo" className="cursor-pointer">
                  <input
                    accept="image/*"
                    id="upload-photo"
                    type="file"
                    hidden
                    onChange={handlePhotoChange}
                  />
                  <Image
                    src="/service-provider-onboarding/edit.svg"
                    width={25}
                    height={25}
                    alt="edit-icon"
                    className="object-cover"
                  />
                </label>
              </div>
            </div>
          </div>
          <p className="text-[14px] font-normal text-[#181D27] text-center">
            Upload Photo
          </p>
        </div>
        {/* Personal Details */}
        <div className="w-full space-y-4 mt-4">
          <h3 className="text-[16px] font-semibold text-lightblack">
            Personal Details
          </h3>
          <div className="space-y-6">
            <div className="w-full grid grid-cols-3 gap-4">
              <MUITextField
                label="First Name"
                placeholder="Enter your first name"
                type="text"
                value={formData?.firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFormChange({ firstName: e.target.value })
                }
              />
              <MUITextField
                label="Last Name"
                placeholder="Enter your last name"
                type="text"
                value={formData?.lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFormChange({ lastName: e.target.value })
                }
              />
              <MUITextField
                label="Address"
                placeholder="Villa 23, Street 12, Al Muruj District, Riyadh"
                type="text"
                value={formData?.address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFormChange({ address: e.target.value })
                }
                endAdornment={
                  <Image
                    src="/service-provider-onboarding/location.svg"
                    alt="location-marker"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                }
              />
            </div>
            <div className="w-full grid grid-cols-3 gap-4">
              <MUITextField
                label="Phone Number"
                placeholder="123445"
                type="number"
                value={formData?.phoneNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFormChange({ phoneNumber: e.target.value })
                }
                startAdornment={
                  <div className="flex items-center gap-[4px]">
                    <Image
                      src="/service-provider-onboarding/saudi-flag.svg"
                      alt="saudi-flag"
                      width={20}
                      height={20}
                      className="object-cover mr-"
                    />
                    <div className="flex items-center gap-2 mr-[18px]">
                      <span className="text-[16px] font-normal text-lightblack">
                        {formData?.countryCode}
                      </span>
                      <span className="w-[1px] h-5 bg-[#E0E0E0]" />
                    </div>
                  </div>
                }
              />
              <MUIAutoComplete
                label="Select Services You Provide"
                placeholder="Select service"
                width="100%"
                multiple
                options={serviceCategories}
                value={formData?.service || []}
                onChange={(
                  _: React.SyntheticEvent,
                  newValue: string[] | null
                ) => handleFormChange({ service: newValue ?? [] })}
              />
              <MUIAutoComplete
                label="Your Experience Level"
                placeholder="Entry level (0 to 2 years)"
                width="100%"
                options={experienceLevel}
                value={formData?.experienceLevel || ""}
                onChange={(_: React.SyntheticEvent, newValue: string | null) =>
                  handleFormChange({ experienceLevel: newValue ?? "" })
                }
              />
            </div>
          </div>
        </div>
        {/* About */}
        <div className="w-full space-y-4 mt-6">
          <h3 className="text-[16px] font-semibold text-lightblack">About</h3>
          <MUITextField
            placeholder="Type something..."
            type="text"
            multiline
            rows={6}
            value={formData?.about}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormChange({ about: e.target.value })
            }
          />
        </div>
        {/* Skills */}
        <div className="w-full flex flex-col gap-4 mt-6">
          <h3 className="text-[16px] font-semibold text-lightblack">Skills</h3>
          <div className="flex items-center gap-3">
            <MUIAutoComplete
              placeholder="Add skills or expertise"
              width="30%"
              options={providerSkillsList}
              value={selectedSkill}
              onChange={(_: React.SyntheticEvent, newValue: string | null) => {
                setSelectedSkill(newValue ?? "");
              }}
            />
            <button
              className="bg-primary rounded-full text-[14px] font-medium text-white text-center px-6 py-3"
              onClick={() => {
                if (!selectedSkill) {
                  showToast("Please add a skill!", "warning");

                  return;
                }

                if (formData?.skills?.includes(selectedSkill)) {
                  showToast(
                    "This skill is already added. Please select a different skill!",
                    "warning"
                  );
                  return;
                }

                handleFormChange({
                  skills: [...formData?.skills, selectedSkill],
                });
                setSelectedSkill("");
              }}
            >
              Add
            </button>
          </div>
          <div className="w-full flex flex-wrap items-center gap-2 mt-1.5">
            {formData?.skills?.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                onDelete={() => {
                  handleFormChange({
                    skills: formData?.skills?.filter((_, i) => i !== index),
                  });
                }}
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
            ))}
          </div>
        </div>
        {/* Packages */}
        <div className="w-full flex flex-col gap-4 mt-14">
          <div className="w-full flex items-center justify-between gap-2">
            <h3 className="text-[16px] font-semibold text-lightblack">
              Packages
            </h3>
            <button
              onClick={() => setIsAddPackageModalOpen(true)}
              className="flex items-center gap-2 text-nowrap bg-primary rounded-full text-center text-[14px] font-medium text-white pl-[13px] pr-4 py-2"
            >
              <Image
                src="/admin/add.svg"
                alt="add-icon"
                width={20}
                height={20}
                className="object-cover"
              />
              Add New Package
            </button>
          </div>
          <PackageCardComponent
            packageData={formData?.packages}
            limit={true}
            show={false}
            image={false}
            onEdit={(pkg) => {
              setEditingPackage(pkg);
              setIsEditPackageModalOpen(true);
            }}
            onDelete={handleDeletePackageInitiate}
          />
          {formData?.packages && formData?.packages?.length > 4 && (
            <Link href="/service-provider-dashboard/package">
              <div className="flex justify-center items-center">
                <button className="w-max bg-white border border-secondary rounded-full text-[16px] font-normal text-primary text-center px-6 py-2">
                  View All
                </button>
              </div>
            </Link>
          )}
        </div>
        {/* Portfolio */}
        <div className="w-full flex flex-col gap-4 mt-14">
          <div className="w-full flex items-center justify-between gap-2">
            <h3 className="text-[16px] font-semibold text-lightblack">
              Portfolios
            </h3>

            <button
              onClick={() => setIsAddPortfolioModalOpen(true)}
              className="flex items-center gap-2 text-nowrap bg-primary rounded-full text-center text-[14px] font-medium text-white pl-[13px] pr-4 py-2"
            >
              <Image
                src="/admin/add.svg"
                alt="add-icon"
                width={20}
                height={20}
                className="object-cover"
              />
              Add New Portfolio
            </button>
          </div>
          <AllPortfolioCardComponent
            portfolioData={formData?.portfolios}
            limit={true}
            image={true}
            onEdit={(portfolio) => {
              setEditingPortfolio(portfolio);
              setIsEditPortfolioModalOpen(true);
            }}
            onDelete={handleDeletePortfolioInitiate}
          />
          {formData?.portfolios && formData?.portfolios?.length > 4 && (
            <Link href="/service-provider-dashboard/portfolio">
              <div className="flex justify-center items-center">
                <button className="w-max bg-white border border-secondary rounded-full text-[16px] font-normal text-primary text-center px-6 py-2">
                  View All
                </button>
              </div>
            </Link>
          )}
        </div>
        {/* buttons */}
        <div className="w-full h-full flex justify-end items-end gap-2 mt-6">
          <button
            className="text-[14px] font-medium text-primary border border-primary rounded-full text-center px-6 py-[6px]"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="text-[14px] font-medium text-white bg-primary rounded-full text-center px-6 py-[6px]"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      </div>
      <AddPackageDialog
        open={isAddPackageModalOpen}
        onClose={() => setIsAddPackageModalOpen(false)}
        onAddPackage={(newPackage) => {
          handleFormChange({
            packages: [...formData?.packages, newPackage],
          });
          showToast("Package added successfully!", "success");
        }}
        currentPackages={formData?.packages}
      />
      <EditPackageDialog
        open={isEditPackageModalOpen}
        onClose={() => {
          setIsEditPackageModalOpen(false);
          setEditingPackage(null);
        }}
        onSave={(updatedPackage) => {
          handleFormChange({
            packages: formData?.packages?.map((pkg) =>
              pkg?.id === updatedPackage?.id ? updatedPackage : pkg
            ),
          });
          showToast("Package updated successfully!", "success");
        }}
        packageToEdit={editingPackage}
      />
      <DeleteDialog
        open={isDeletePackageModalOpen}
        title="Are You Sure?"
        description="Are you sure you want to delete this package?"
        onCancel={handleDeletePackageCancel}
        onConfirm={handleDeletePackageConfirm}
        confirmText="Delete"
        cancelText="Cancel"
      />
      <AddPortfolioDialog
        open={isAddPortfolioModalOpen}
        onClose={() => setIsAddPortfolioModalOpen(false)}
        onAddPortfolio={(newPortfolio) => {
          handleFormChange({
            portfolios: [...formData?.portfolios, newPortfolio],
          });
          showToast("Portfolio added successfully!", "success");
        }}
        currentPortfolios={formData?.portfolios}
      />
      <EditPortfolioDialog
        open={isEditPortfolioModalOpen}
        onClose={() => {
          setIsEditPortfolioModalOpen(false);
          setEditingPortfolio(null);
        }}
        onSave={(updatedPortfolio) => {
          handleFormChange({
            portfolios: formData?.portfolios?.map((portfolio) =>
              portfolio?.id === updatedPortfolio?.id
                ? updatedPortfolio
                : portfolio
            ),
          });
          showToast("Portfolio updated successfully!", "success");
        }}
        portfolioToEdit={editingPortfolio}
      />
      <DeleteDialog
        open={isDeletePortfolioModalOpen}
        title="Are You Sure?"
        description="Are you sure you want to delete this portfolio?"
        onCancel={handleDeletePortfolioCancel}
        onConfirm={handleDeletePortfolioConfirm}
        confirmText="Delete"
        cancelText="Cancel"
      />
    </>
  );
};

export default ProviderProfileSettings;

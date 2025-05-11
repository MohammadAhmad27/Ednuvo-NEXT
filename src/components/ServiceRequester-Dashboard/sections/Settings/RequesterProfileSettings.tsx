"use client";
import MUITextField from "@/components/ui/TextField";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Alert, Snackbar } from "@mui/material";

const RequesterProfileSettings = () => {
  // Original data state (will only be updated on save)
  const [originalData, setOriginalData] = useState<{
    photo: File | null;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    countryCode: string;
  }>({
    photo: null,
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    countryCode: "+966",
  });

  // Working copy state (modified in the UI)
  const [formData, setFormData] = useState(originalData);

  // Update working copy when original data changes
  useEffect(() => {
    setFormData(originalData);
  }, [originalData]);

  const [alertState, setAlertState] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "warning" | "error" | "info";
  }>({
    open: false,
    message: "",
    severity: "success",
  });
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
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
    setFieldErrors(errors);
    return isValid;
  };

  // Check if form has any changes
  const hasChanges = () => {
    // Compare photo separately since File objects can't be stringified
    const photoChanged =
      (formData?.photo === null && originalData?.photo !== null) ||
      (formData?.photo !== null && originalData?.photo === null) ||
      (formData?.photo instanceof File &&
        originalData?.photo instanceof File &&
        formData?.photo.name !== originalData?.photo.name) ||
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

  // Check if form is empty
  const isEmptyForm = () => {
    const { countryCode, ...rest } = formData;
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
      setAlertState({
        open: true,
        message: "Please fill all required fields!",
        severity: "warning",
      });
      return;
    }

    if (isEmptyForm()) {
      setAlertState({
        open: true,
        message: "Please fill in some data before saving!",
        severity: "warning",
      });
      return;
    }

    if (!hasChanges()) {
      setAlertState({
        open: true,
        message: "No changes detected to save!",
        severity: "info",
      });
      return;
    }

    // Update original data
    setOriginalData({
      ...formData,
      // If a new photo was uploaded, keep the reference
      photo:
        formData?.photo instanceof File ? formData?.photo : originalData?.photo,
    });

    setAlertState({
      open: true,
      message: "Changes saved successfully!",
      severity: "success",
    });
  };

  const handleCancel = () => {
    if (isEmptyForm()) {
      setAlertState({
        open: true,
        message: "No data to discard!",
        severity: "info",
      });
      return;
    }

    if (!hasChanges()) {
      setAlertState({
        open: true,
        message: "No changes detected to cancel!",
        severity: "info",
      });
      return;
    }

    // Reset form data
    setFormData(originalData);

    // Update photo preview
    if (originalData.photo instanceof File) {
      // Create new preview URL for the original photo
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e?.target?.result) {
          setPhotoPreview(e?.target?.result as string);
        }
      };
      reader.readAsDataURL(originalData.photo);
    } else {
      setPhotoPreview(null);
    }

    setAlertState({
      open: true,
      message: "Changes discarded",
      severity: "info",
    });
  };

  const handleFormChange = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files && event?.target?.files[0]) {
      const file = event?.target?.files[0];

      // Update form data
      setFormData((prev) => ({
        ...prev,
        photo: file,
      }));

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e?.target?.result) {
          setPhotoPreview(e?.target?.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Clean up photo preview when component unmounts
  useEffect(() => {
    return () => {
      if (photoPreview) {
        URL.revokeObjectURL(photoPreview);
      }
    };
  }, [photoPreview]);

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
            <div className="w-full grid grid-cols-2 gap-4">
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
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
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
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className="w-full h-full flex justify-end items-end gap-2 mt-6">
          <button
            onClick={handleCancel}
            className="text-[14px] font-medium text-primary border border-primary rounded-full text-center px-6 py-[6px]"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveChanges}
            className="text-[14px] font-medium text-white bg-primary rounded-full text-center px-6 py-[6px]"
          >
            Save Changes
          </button>
        </div>
      </div>
      <Snackbar
        open={alertState?.open}
        autoHideDuration={5000}
        onClose={() => setAlertState((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setAlertState((prev) => ({ ...prev, open: false }))}
          severity={alertState?.severity}
          sx={{ width: "100%" }}
        >
          {alertState?.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default RequesterProfileSettings;

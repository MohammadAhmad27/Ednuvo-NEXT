"use client";
import MUITextField from "@/components/ui/TextField";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Alert, Snackbar } from "@mui/material";

const RequesterProfileSettings = () => {
  const [formData, setFormData] = useState<{
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

  const handleFormChange = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  useEffect(() => {
    if (formData?.photo && !photoPreview) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e?.target?.result) {
          setPhotoPreview(e?.target?.result as string);
        }
      };
      reader?.readAsDataURL(formData?.photo);
    }
  }, [formData?.photo, photoPreview]);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files && event?.target?.files[0]) {
      const file = event?.target?.files[0];
      handleFormChange({ photo: file });

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e?.target?.result) {
          setPhotoPreview(e?.target?.result as string);
        }
      };
      reader?.readAsDataURL(file);
    }
  };

  console.log("ReuquesterFormData: ", formData);

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
          <button className="text-[14px] font-medium text-primary border border-primary rounded-full text-center px-6 py-[6px]">
            Cancel
          </button>
          <button className="text-[14px] font-medium text-white bg-primary rounded-full text-center px-6 py-[6px]">
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

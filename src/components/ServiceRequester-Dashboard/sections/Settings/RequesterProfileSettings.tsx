import {
  experienceLevel,
  serviceCategories,
} from "@/app/service-provider-onboarding/content";
import MUIAutoComplete from "@/components/ui/AutoComplete";
import MUITextField from "@/components/ui/TextField";
import Image from "next/image";
import { useState } from "react";

const RequesterProfileSettings = () => {
  const [formData, setFormData] = useState<{
    photo: File | null;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: number | string;
    countryCode: string;
    service: string[];
    experienceLevel: string;
    about: string;
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
  });

  const handleFormChange = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  console.log("ProfileFormData: ", formData);

  return (
    <div className="w-full h-full flex flex-col px-5 py-8">
      {/* Edit Profile */}
      <div className="w-full space-y-4">
        <h3 className="text-[16px] font-semibold text-lightblack">
          Edit Profile
        </h3>
        <div className="flex justify-center mb-5">
          <div className="relative">
            <Image
              src="/service-provider-onboarding/profile.svg"
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
                  // onChange={handlePhotoChange}
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
              value={formData?.phoneNumber?.toString()}
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
              onChange={(_: React.SyntheticEvent, newValue: string[] | null) =>
                handleFormChange({ service: newValue ?? [] })
              }
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
      {/* Personal Details */}
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
      <div className="w-full space-y-4 mt-6">
        <h3 className="text-[16px] font-semibold text-lightblack">Skills</h3>
        {/* start from here */}
      </div>
    </div>
  );
};

export default RequesterProfileSettings;

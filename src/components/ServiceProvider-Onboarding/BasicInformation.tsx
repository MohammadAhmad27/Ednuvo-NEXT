"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import MUITextField from "../ui/TextField";
import dynamic from "next/dynamic";
import { Skeleton } from "@mui/material";

const MapComponent = dynamic(() => import("../ui/MapComponent"), {
  ssr: false,
  loading: () => (
    <p className="">
      {" "}
      <Skeleton
        sx={{ width: "100%", height: "300px" }}
        animation="wave"
        variant="rectangular"
      />
    </p>
  ),
});

interface BasicInformationProps {
  formData: {
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: number | string;
    countryCode: string;
    photo: File | null;
  };
  onChange: (data: Partial<BasicInformationProps["formData"]>) => void;
}

export default function BasicInformation({
  formData,
  onChange,
}: BasicInformationProps) {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  useEffect(() => {
    if (formData.photo && !photoPreview) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPhotoPreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(formData.photo);
    }
  }, [formData.photo, photoPreview]);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      onChange({ photo: file });

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPhotoPreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <p className="text-[14px] text-primary font-normal mb-8">
        Let's start by setting up your profile. Enter your name, address, and
        phone number to help clients identify and contact you.
      </p>
      <div className="flex justify-center gap-2 mb-5">
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
      <p className="text-[14px] font-normal text-[#181D27] text-center mb-8">
        Upload Photo
      </p>
      <div className="w-full flex justify-between items-center gap-4 mb-6">
        <MUITextField
          label="First Name"
          placeholder="Enter your first name"
          type="text"
          value={formData?.firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange({ firstName: e.target.value })
          }
        />

        <MUITextField
          label="Last Name"
          placeholder="Enter your last name"
          type="text"
          value={formData?.lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange({ lastName: e.target.value })
          }
        />
      </div>
      <div className="w-full flex justify-between items-center gap-4 mb-6">
        <MUITextField
          label="Address"
          placeholder="Villa 23, Street 12, Al Muruj District, Riyadh"
          type="text"
          value={formData?.address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange({ address: e.target.value })
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
            onChange({ phoneNumber: e.target.value })
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
      <MapComponent address={formData.address} />
    </div>
  );
}

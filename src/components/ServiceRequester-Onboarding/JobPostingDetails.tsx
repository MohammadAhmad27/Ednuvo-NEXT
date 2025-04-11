"use client";
import React, { useEffect, useRef, useState } from "react";
import MUITextField from "../ui/TextField";
import MUIAutoComplete from "../ui/AutoComplete";
import {
  categories,
  experienceLevel,
  jobCategories,
  jobDuration,
  jobSubCategories,
} from "@/app/service-requester-onboarding/content";
import Image from "next/image";
import { pricingModes } from "@/app/service-provider-onboarding/content";
import DateRangePicker from "../ui/DatePicker";

interface JobDetailsProps {
  formData: {
    jobTitle: string;
    jobDescription: string;
    jobCategory: string;
    jobSubCategory: string;
    location: string;
    jobDuration: string;
    budgetMode: string;
    totalBudget: number | string;
    experienceLevel: string;
    jobStartDate: Date | null;
    categoriesList: string[];
    imagesList: File[];
    [key: string]: any;
  };
  onChange: (data: any) => void;
}

const JobPostingDetails = ({ formData, onChange }: JobDetailsProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<File[]>(formData.imagesList || []);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    formData.categoriesList || categories?.slice(0, 4)
  );

  useEffect(() => {
    setImages(formData.imagesList || []);
    setSelectedCategories(formData.categoriesList || categories?.slice(0, 4));
  }, [formData.imagesList, formData.categoriesList]);

  const toggleCategory = (category: string) => {
    const updatedCategories = selectedCategories?.includes(category)
      ? selectedCategories?.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onChange({ categoriesList: updatedCategories });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const imageFiles = selectedFiles.filter((file) =>
        file?.type?.startsWith("image/")
      );

      const newImages = [...images, ...imageFiles];
      setImages(newImages);
      onChange({ imagesList: newImages });
    }
  };

  const handleDivClick = () => {
    fileInputRef?.current?.click();
  };

  const handleStartDateChange = (date: Date) => {
    onChange({ jobStartDate: date });
  };

  return (
    <div>
      <p className="text-[14px] text-primary font-normal mb-8">
        Let's start by setting up your profile. Enter your name, address, and
        phone number to help clients identify and contact you.
      </p>

      <div className="w-full space-y-4 mb-6">
        <MUITextField
          label="Job Title"
          placeholder="Enter job title"
          type="text"
          value={formData.jobTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange({ jobTitle: e.target.value })
          }
        />
        <MUITextField
          label="Job Description"
          placeholder="Enter job description"
          type="text"
          value={formData.jobDescription}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange({ jobDescription: e.target.value })
          }
          multiline
          rows={4}
        />
      </div>
      {/* 1st */}
      <div className="w-full flex justify-between items-center gap-4 mb-6">
        <MUIAutoComplete
          width="50%"
          options={jobCategories}
          value={formData.jobCategory || ""}
          onChange={(_: React.SyntheticEvent, newValue: string | null) =>
            onChange({ jobCategory: newValue ?? "" })
          }
          placeholder="Enter job category"
          label="Job Category"
        />
        <MUIAutoComplete
          width="50%"
          options={jobSubCategories}
          value={formData.jobSubCategory || ""}
          onChange={(_: React.SyntheticEvent, newValue: string | null) =>
            onChange({ jobSubCategory: newValue ?? "" })
          }
          placeholder="Enter job sub-category"
          label="Job Sub-Category"
        />
      </div>
      {/* 2nd */}
      <div className="w-full flex justify-between items-center gap-4 mb-6">
        <div className="w-1/2">
          <MUITextField
            label="Location"
            placeholder="Enter location"
            type="text"
            value={formData?.location}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange({ location: e.target.value })
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
        <MUIAutoComplete
          width="50%"
          options={jobDuration}
          value={formData.jobDuration || ""}
          onChange={(_: React.SyntheticEvent, newValue: string | null) =>
            onChange({ jobDuration: newValue ?? "" })
          }
          placeholder="Enter job duration"
          label="Job Duration"
        />
      </div>
      {/* 3rd */}
      <div className="w-full flex justify-between items-center gap-4 mb-6">
        <MUIAutoComplete
          width="50%"
          options={pricingModes}
          value={formData.budgetMode || ""}
          onChange={(_: React.SyntheticEvent, newValue: string | null) =>
            onChange({ budgetMode: newValue ?? "" })
          }
          placeholder="Fixed Price (e.g SAR 150 per project)"
          label="Budget Mode"
        />
        <div className="w-1/2">
          <MUITextField
            label="Total Budget"
            placeholder="Enter budget"
            type="number"
            value={formData.totalBudget.toString()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange({ totalBudget: e.target.value })
            }
          />
        </div>
      </div>
      {/* 4th */}
      <div className="w-full flex items-center gap-4 mb-6">
        <MUIAutoComplete
          width="49%"
          options={experienceLevel}
          value={formData.experienceLevel || ""}
          onChange={(_: React.SyntheticEvent, newValue: string | null) =>
            onChange({ experienceLevel: newValue ?? "" })
          }
          placeholder="Entry experience level"
          label="Experience Level"
        />

        <div className="W-1/2 flex flex-col justify-start gap-1 mb-2">
          <label className="text-[14px] text-lightblack font-normal">
            Project Start Date
          </label>
          <DateRangePicker
            selectedDate={formData.jobStartDate}
            onChange={handleStartDateChange}
            minDate={new Date()}
            maxDate={new Date(Date.now() + 1360 * 24 * 60 * 60 * 1000)}
            placeholder="Select start date"
          />
        </div>
      </div>

      <div className="flex flex-col justify-start gap-2 mb-6">
        <label className="text-[14px] text-lightblack font-normal">
          Choose relevant service categories
        </label>
        <div className="flex flex-wrap gap-3">
          {categories?.map((category) => {
            const isSelected = selectedCategories?.includes(category);
            return (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`border-[1px] border-secondary rounded-full ${
                  isSelected
                    ? "bg-secondary text-white"
                    : "bg-white text-secondary"
                } py-1 px-4`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Image Upload Section */}
      <div className="flex flex-col justify-start gap-2 mb-8">
        <label className="text-[14px] text-lightblack font-normal">
          Attachments (Optional)
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
          className="flex flex-col justify-center items-center p-4 border border-gray border-dashed rounded-xl cursor-pointer"
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
              Click here to uplaod
            </span>{" "}
            or drag and drop
          </p>
          <p className="text-[12px] font-normal text-darkgray">
            PNG, JPG, JPEG only
          </p>
        </div>
      </div>

      {/* Preview uploaded images */}
      {images?.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          {images?.map((file, index) => {
            const url = URL.createObjectURL(file);
            return (
              <div key={index} className="w-[50px] h-[50px] relative rounded">
                <Image
                  src={url}
                  alt={`uploaded-${index}`}
                  fill
                  className="object-cover rounded"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default JobPostingDetails;

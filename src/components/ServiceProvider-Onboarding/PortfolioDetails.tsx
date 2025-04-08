"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import MUITextField from "../ui/TextField";
import { skillsList } from "@/app/service-provider-onboarding/content";
import DateRangePicker from "../ui/DatePicker";

interface PortfolioDetailsProps {
  formData: any;
  onChange: (data: any) => void;
}

export default function PortfolioDetails({
  formData,
  onChange,
}: PortfolioDetailsProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    formData?.skills || skillsList?.slice(0, 4)
  );

  const toggleSkill = (skill: string) => {
    const updatedSkills = selectedSkills?.includes(skill)
      ? selectedSkills?.filter((s) => s !== skill)
      : [...selectedSkills, skill];

    setSelectedSkills(updatedSkills);
    onChange({ ...formData, skills: updatedSkills });
  };
  console.log("selectedskills", selectedSkills);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const imageFiles = selectedFiles.filter((file) =>
        file?.type?.startsWith("image/")
      );

      setImages((prev) => [...prev, ...imageFiles]);
      onChange({
        ...formData,
        images: [...(formData?.images || []), ...imageFiles],
      });
    }
  };

  const handleDivClick = () => {
    fileInputRef?.current?.click();
  };

  const today = new Date();
  const maxAllowedDate = new Date();
  maxAllowedDate.setDate(today.getDate() + 1360);

  const [startDate, setStartDate] = useState<Date>(today);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
    if (endDate && endDate < date) {
      setEndDate(null);
    }
  };
  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
  };

  return (
    <div>
      <p className="text-[14px] text-primary font-normal text-center mb-8">
        Showcase your work by uploading project images, descriptions, and
        relevant tags. This helps clients understand your expertise.
      </p>

      {/* Image Upload Section */}
      <div className="flex flex-col justify-start gap-2">
        <label className="text-[14px] text-lightblack font-normal">
          Project Images
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
          className="flex flex-col justify-center items-center p-4 border border-[#E9E9E9] border-dashed rounded-xl cursor-pointer mb-8"
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
              Upload images of your projects
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
          {images.map((file, index) => {
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

      {/* Project Details Form */}
      <div className="w-full space-y-4 mb-6">
        <MUITextField
          label="Project Title"
          placeholder="Enter project title"
          type="text"
          value={formData?.title}
          onChange={(e) => onChange({ ...formData, title: e.target.value })}
        />
        <MUITextField
          label="Project Description"
          placeholder="Enter project details"
          type="text"
          value={formData?.description}
          onChange={(e) =>
            onChange({ ...formData, description: e.target.value })
          }
          multiline
          rows={4}
        />
      </div>

      {/* Skill Selection Section */}
      <div className="flex flex-col justify-start gap-2 bg-white">
        <label className="text-[14px] text-lightblack font-normal">
          Choose Relevant Skills
        </label>
        <div className="flex flex-wrap gap-3 mt-2 mb-8">
          {skillsList?.map((skill) => {
            const isSelected = selectedSkills?.includes(skill);
            return (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`border-[1px] border-secondary rounded-full ${
                  isSelected
                    ? "bg-secondary text-white"
                    : "bg-white text-secondary"
                } py-2 px-5`}
              >
                {skill}
              </button>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-2">
        <div className="flex flex-col justify-start gap-2">
          <label className="text-[14px] text-lightblack font-normal">
            Project Start Date
          </label>
          <DateRangePicker
            selectedDate={startDate}
            onChange={handleStartDateChange}
            minDate={today}
            maxDate={maxAllowedDate}
            placeholder="Select start date"
          />
        </div>
        <div className="flex flex-col justify-start gap-2">
          <label className="text-[14px] text-lightblack font-normal">
            Project Completion Date
          </label>
          <DateRangePicker
            selectedDate={endDate}
            onChange={handleEndDateChange}
            minDate={startDate}
            maxDate={maxAllowedDate}
            placeholder="Select end date"
          />
        </div>
      </div>
    </div>
  );
}

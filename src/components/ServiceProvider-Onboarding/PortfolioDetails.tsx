"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MUITextField from "../ui/TextField";
import { skillsList } from "@/app/service-provider-onboarding/content";
import dayjs, { Dayjs } from "dayjs";
import MUIDatePicker from "../ui/DatePicker";

interface PortfolioDetailsProps {
  formData: {
    projectTitle: string;
    projectDescription: string;
    skills: string[];
    images: File[];
    startDate: Dayjs | null;
    endDate: Dayjs | null;
    [key: string]: any;
  };
  onChange: (data: any) => void;
}

export default function PortfolioDetails({
  formData,
  onChange,
}: PortfolioDetailsProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<File[]>(formData.images || []);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    formData.skills || skillsList?.slice(0, 4)
  );

  useEffect(() => {
    setImages(formData.images || []);
    setSelectedSkills(formData.skills || skillsList?.slice(0, 4));
  }, [formData.images, formData.skills]);

  const toggleSkill = (skill: string) => {
    const updatedSkills = selectedSkills?.includes(skill)
      ? selectedSkills?.filter((s) => s !== skill)
      : [...selectedSkills, skill];

    setSelectedSkills(updatedSkills);
    onChange({ skills: updatedSkills });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const imageFiles = selectedFiles.filter((file) =>
        file?.type?.startsWith("image/")
      );

      const newImages = [...images, ...imageFiles];
      setImages(newImages);
      onChange({ images: newImages });
    }
  };

  const handleDivClick = () => {
    fileInputRef?.current?.click();
  };

  const handleStartDateChange = (date: Dayjs | null) => {
    onChange({ startDate: date ? date.toDate() : null });

    // if (formData.endDate && formData.endDate < date) {
    //   onChange({ startDate: date, endDate: null });
    // }
  };

  const handleEndDateChange = (date: Dayjs | null) => {
    onChange({ endDate: date ? date.toDate() : null });
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
          className="flex flex-col justify-center items-center p-4 border border-gray border-dashed rounded-xl cursor-pointer mb-8"
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

      <div className="w-full space-y-4 mb-6">
        <MUITextField
          label="Project Title"
          placeholder="Enter project title"
          type="text"
          value={formData.projectTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange({ projectTitle: e.target.value })
          }
        />
        <MUITextField
          label="Project Description"
          placeholder="Enter project description"
          type="text"
          value={formData.projectDescription}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange({ projectDescription: e.target.value })
          }
          multiline
          rows={4}
        />
      </div>

      <div className="flex flex-col justify-start gap-2">
        <label className="text-[14px] text-lightblack font-normal">
          Choose Relevant Skills
        </label>
        <div className="flex flex-wrap gap-3 mb-8">
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
                } py-1 px-4`}
              >
                {skill}
              </button>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-2">
        <div className="w-full flex flex-col">
          <MUIDatePicker
            value={formData.startDate ? dayjs(formData.startDate) : null}
            onChange={handleStartDateChange}
            label="Project Start Date"
          />
        </div>
        <div className="w-full flex flex-col">
          <MUIDatePicker
            value={formData.endDate ? dayjs(formData.endDate) : null}
            onChange={handleEndDateChange}
            label="Project Completion Date"
          />
        </div>
      </div>
    </div>
  );
}

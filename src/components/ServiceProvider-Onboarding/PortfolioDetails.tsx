"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MUITextField from "../ui/TextField";
import { skillsList } from "@/app/service-provider-onboarding/content";
import dayjs, { Dayjs } from "dayjs";
import MUIDatePicker from "../ui/DatePicker";
import { Add, Close, Delete } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

interface PortfolioData {
  projectTitle: string;
  projectDescription: string;
  skills: string[];
  portfolioImages: File[];
  startDate: Date | null;
  endDate: Date | null;
  projectCost: string;
}

interface PortfolioDetailsProps {
  formData: {
    portfolios: PortfolioData[];
    [key: string]: any;
  };
  onChange: (data: any) => void;
}

export default function PortfolioDetails({
  formData,
  onChange,
}: PortfolioDetailsProps) {
  const [portfolios, setPortfolios] = useState<PortfolioData[]>(
    formData?.portfolios || [
      {
        projectTitle: "",
        projectDescription: "",
        skills: [],
        portfolioImages: [],
        startDate: null,
        endDate: null,
        projectCost: "",
      },
    ]
  );

  // Update local state when formData changes
  useEffect(() => {
    if (formData?.portfolios && formData?.portfolios?.length > 0) {
      setPortfolios(formData?.portfolios);
    }
  }, [formData?.portfolios]);

  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleAddPortfolio = () => {
    const updatedPortfolios = [
      ...portfolios,
      {
        projectTitle: "",
        projectDescription: "",
        skills: [],
        portfolioImages: [],
        startDate: null,
        endDate: null,
        projectCost: "",
      },
    ];
    setPortfolios(updatedPortfolios);
    updateFormData(updatedPortfolios);
  };

  const handleRemovePortfolio = (index: number) => {
    if (portfolios?.length <= 1) return;
    const updatedPortfolios = [...portfolios];
    updatedPortfolios?.splice(index, 1);
    setPortfolios(updatedPortfolios);
    updateFormData(updatedPortfolios);
  };

  const updateFormData = (updatedPortfolios: PortfolioData[]) => {
    onChange({
      portfolios: updatedPortfolios,
    });
  };

  const toggleSkill = (index: number, skill: string) => {
    const updatedPortfolios = [...portfolios];
    const portfolio = updatedPortfolios[index];

    const updatedSkills = portfolio?.skills?.includes(skill)
      ? portfolio?.skills?.filter((s) => s !== skill)
      : [...portfolio?.skills, skill];

    updatedPortfolios[index] = {
      ...portfolio,
      skills: updatedSkills,
    };

    setPortfolios(updatedPortfolios);
    updateFormData(updatedPortfolios);
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

      const updatedPortfolios = [...portfolios];
      const portfolio = updatedPortfolios[index];

      updatedPortfolios[index] = {
        ...portfolio,
        portfolioImages: [...portfolio?.portfolioImages, ...imageFiles],
      };

      setPortfolios(updatedPortfolios);
      updateFormData(updatedPortfolios);
    }
  };

  const handleDivClick = (index: number) => {
    fileInputRefs?.current[index]?.click();
  };

  const handleStartDateChange = (index: number, date: Dayjs | null) => {
    const updatedPortfolios = [...portfolios];
    updatedPortfolios[index] = {
      ...updatedPortfolios[index],
      startDate: date ? date?.toDate() : null, // Convert to Date object
    };
    setPortfolios(updatedPortfolios);
    updateFormData(updatedPortfolios);
  };

  const handleEndDateChange = (index: number, date: Dayjs | null) => {
    const updatedPortfolios = [...portfolios];
    updatedPortfolios[index] = {
      ...updatedPortfolios[index],
      endDate: date ? date?.toDate() : null, // Convert to Date object
    };
    setPortfolios(updatedPortfolios);
    updateFormData(updatedPortfolios);
  };

  const handlePortfolioChange = (
    index: number,
    field: keyof PortfolioData,
    value: string
  ) => {
    const updatedPortfolios = [...portfolios];
    updatedPortfolios[index] = {
      ...updatedPortfolios[index],
      [field]: value,
    };
    setPortfolios(updatedPortfolios);
    updateFormData(updatedPortfolios);
  };

  return (
    <div>
      <p className="text-[14px] text-primary font-normal text-center mb-8">
        Showcase your work by uploading project images, descriptions, and
        relevant tags. This helps clients understand your expertise.
      </p>

      {portfolios?.map((portfolio, index) => (
        <div key={index} className="mb-8">
          {portfolios?.length > 1 && (
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[16px] font-medium text-lightblack">
                Portfolio {index + 1}
              </h2>
              <button
                onClick={() => handleRemovePortfolio(index)}
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
              Project Images
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
                  Upload images of your projects
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-[12px] font-normal text-darkgray">
                PNG, JPG or JPEG
              </p>
            </div>
          </div>

          {/* Preview uploaded images */}
          {portfolio?.portfolioImages?.length > 0 && (
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              {portfolio?.portfolioImages?.map((file, imgIndex) => {
                const url = URL?.createObjectURL(file);
                const handleDeleteImage = (
                  portfolioIndex: number,
                  imageIndex: number
                ) => {
                  const updatedPortfolios = [...portfolios];
                  const updatedImages = updatedPortfolios[
                    portfolioIndex
                  ]?.portfolioImages?.filter((_, idx) => idx !== imageIndex);

                  updatedPortfolios[portfolioIndex] = {
                    ...updatedPortfolios[portfolioIndex],
                    portfolioImages: updatedImages,
                  };

                  setPortfolios(updatedPortfolios);
                  updateFormData(updatedPortfolios);
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
              label="Project Title"
              placeholder="Enter project title"
              type="text"
              value={portfolio?.projectTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePortfolioChange(index, "projectTitle", e?.target?.value)
              }
            />
            <MUITextField
              label="Project Description"
              placeholder="Enter project description"
              type="text"
              value={portfolio?.projectDescription}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePortfolioChange(
                  index,
                  "projectDescription",
                  e?.target?.value
                )
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
                const isSelected = portfolio?.skills?.includes(skill);
                return (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(index, skill)}
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
          <div className="w-full grid grid-cols-3 gap-2">
            <MUIDatePicker
              value={portfolio?.startDate ? dayjs(portfolio?.startDate) : null}
              onChange={(date) => handleStartDateChange(index, date)}
              label="Project Start Date"
            />
            <MUIDatePicker
              value={portfolio?.endDate ? dayjs(portfolio?.endDate) : null}
              onChange={(date) => handleEndDateChange(index, date)}
              label="Project Completion Date"
            />
            <MUITextField
              label="Project Cost"
              placeholder="Enter project cost"
              type="number"
              value={portfolio?.projectCost}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePortfolioChange(index, "projectCost", e?.target?.value)
              }
            />
          </div>
        </div>
      ))}

      <button
        onClick={handleAddPortfolio}
        className="flex items-center justify-center gap-1 rounded-full bg-secondary text-white py-[5px] px-4"
      >
        <Add sx={{ fontSize: 17, color: "#FFFFFF" }} />
        Add Another Portfolio
      </button>
    </div>
  );
}

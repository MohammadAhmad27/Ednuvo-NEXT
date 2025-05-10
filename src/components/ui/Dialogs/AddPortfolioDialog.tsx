"use client";
import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import MUITextField from "../TextField";
import { Alert, Snackbar } from "@mui/material";
import { skillsList } from "@/app/service-provider-onboarding/content";
import MUIDatePicker from "../DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { Close } from "@mui/icons-material";
import { PortfolioCard } from "@/interfaces/ServiceRequesterDashboard";

interface AddPortfolioDialogProps {
  open: boolean;
  onClose: () => void;
  onAddPortfolio: (newPortfolio: PortfolioCard) => void;
  currentPortfolios: PortfolioCard[];
}

const AddPortfolioDialog = ({
  open,
  onClose,
  onAddPortfolio,
  currentPortfolios,
}: AddPortfolioDialogProps) => {
  const [alertState, setAlertState] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "warning" | "error" | "info";
  }>({
    open: false,
    message: "",
    severity: "success",
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState<{
    portfolioImages: File[];
    projectTitle: string;
    projectDescription: string;
    skills: string[];
    startDate: Date | null;
    endDate: Date | null;
    projectCost: string;
  }>({
    portfolioImages: [] as File[],
    projectTitle: "",
    projectDescription: "",
    skills: [] as string[],
    startDate: null,
    endDate: null,
    projectCost: "",
  });

  const handleFormChange = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const toggleSkill = (skill: string) => {
    const updatedSkills = formData?.skills?.includes(skill)
      ? formData?.skills?.filter((s) => s !== skill)
      : [...formData?.skills, skill];
    handleFormChange({ skills: updatedSkills });
  };

  const handleStartDateChange = (date: Dayjs | null) => {
    handleFormChange({ startDate: date ? date?.toDate() : null });
  };

  const handleEndDateChange = (date: Dayjs | null) => {
    handleFormChange({ endDate: date ? date?.toDate() : null });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files) {
      const selectedFiles = Array?.from(e?.target?.files);
      const imageFiles = selectedFiles?.filter((file) =>
        file?.type?.startsWith("image/")
      );
      handleFormChange({
        portfolioImages: [...formData.portfolioImages, ...imageFiles],
      });
    }
  };

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteImage = (index: number) => {
    const updatedImages = formData?.portfolioImages?.filter(
      (_, idx) => idx !== index
    );
    handleFormChange({ portfolioImages: updatedImages });
  };

  const handleAddPortfolio = () => {
    if (
      !formData?.portfolioImages[0] ||
      !formData?.projectTitle.trim() ||
      !formData?.projectDescription.trim() ||
      !formData?.skills[0].trim() ||
      !formData?.startDate ||
      !formData?.endDate ||
      !formData?.projectCost.trim()
    ) {
      setAlertState({
        open: true,
        message: "Please fill all required fields!",
        severity: "warning",
      });
      return;
    }
    const maxId = currentPortfolios?.reduce(
      (max, portfolio) => Math?.max(max, portfolio?.id),
      0
    );

    const formatDate = (date: Date | null) =>
      date ? dayjs(date)?.format("DD MMMM, YYYY") : "";

    // Calculate project duration in days
    const duration =
      formData?.startDate && formData?.endDate
        ? dayjs(formData?.endDate).diff(dayjs(formData?.startDate), "day")
        : 0;

    const newPortfolio = {
      id: maxId + 1,
      mainImg: formData?.portfolioImages?.map((file) =>
        URL.createObjectURL(file)
      ),
      startTime: formatDate(formData?.startDate),
      endTime: formatDate(formData?.endDate),
      projectTitle: formData?.projectTitle,
      projectDesc: formData?.projectDescription,
      skills: formData?.skills,
      projectCost: Number(formData?.projectCost),
      projectDuration: duration,
      label: "SAR",
    };

    onAddPortfolio(newPortfolio);

    setFormData({
      portfolioImages: [],
      projectTitle: "",
      projectDescription: "",
      skills: [],
      startDate: null,
      endDate: null,
      projectCost: "",
    });
    onClose();
  };

  // console.log("AddPortfolio: ", formData);

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="md"
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#FFFFFF",
            color: "#222222",
            borderRadius: "32px",
            boxShadow: "0px 4px 134px 0px #46B7D11F",
            border: "1px solid #E5E5E5",
            padding: "0px",
          },
          "& .MuiDialogTitle-root": {
            margin: "20px !important",
            padding: "13px 18px !important",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "16px",
            backgroundColor: "#EEFCEE",
          },
          "& .MuiDialogContent-root": {
            padding: "10px 20px 20px 20px !important",
            display: "flex",
            flexDirection: "column",
          },
          "& .MuiDialogActions-root": {
            padding: "10px 20px 20px 20px !important",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          },
        }}
      >
        <DialogTitle>
          <h2 className="text-[20px] font-semibold text-black">
            Add Portfolio
          </h2>
          <Image
            onClick={onClose}
            src="/service-provider-onboarding/close.svg"
            alt="close-icon"
            width={20}
            height={20}
            className="object-cover cursor-pointer"
          />
        </DialogTitle>

        <DialogContent className="w-full flex flex-col gap-2">
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
              className="flex flex-col justify-center items-center p-4 border border-gray border-dashed rounded-xl cursor-pointer mb-4"
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
                PNG, JPG or JPEG
              </p>
            </div>
          </div>

          {/* Preview uploaded images */}
          {formData?.portfolioImages?.length > 0 && (
            <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
              {formData?.portfolioImages?.map((file, index) => {
                const url = URL.createObjectURL(file);
                return (
                  <div
                    key={index}
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
                          alt={`uploaded-${index}`}
                          fill
                          className="object-cover rounded hover:grayscale hover:filter"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteImage(index);
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

          {/* Title & Description */}
          <div className="w-full space-y-4 mb-4">
            <MUITextField
              label="Project Title"
              placeholder="Enter project title"
              type="text"
              value={formData?.projectTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange({ projectTitle: e?.target?.value })
              }
            />
            <MUITextField
              label="Project Description"
              placeholder="Enter project description"
              type="text"
              value={formData?.projectDescription}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange({ projectDescription: e?.target?.value })
              }
              multiline
              rows={4}
            />
          </div>

          {/* Skills */}
          <div className="flex flex-col justify-start gap-2">
            <label className="text-[14px] text-lightblack font-normal">
              Choose Relevant Skills
            </label>
            <div className="flex flex-wrap gap-3 mb-6">
              {skillsList?.map((skill) => {
                const isSelected = formData?.skills?.includes(skill);
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

          {/* Date & Cost */}
          <div className="w-full grid grid-cols-3 gap-2">
            <MUIDatePicker
              value={formData?.startDate ? dayjs(formData?.startDate) : null}
              onChange={handleStartDateChange}
              label="Project Start Date"
            />
            <MUIDatePicker
              value={formData?.endDate ? dayjs(formData?.endDate) : null}
              onChange={handleEndDateChange}
              label="Project Completion Date"
            />
            <MUITextField
              label="Project Cost"
              placeholder="Enter project cost"
              type="number"
              value={formData?.projectCost}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange({ projectCost: e?.target?.value })
              }
            />
          </div>
        </DialogContent>
        <DialogActions>
          <button
            className="bg-white rounded-full text-[14px] font-medium text-primary border border-primary text-center px-6 py-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-primary rounded-full text-[14px] font-medium text-white text-center px-6 py-2"
            onClick={handleAddPortfolio}
          >
            Add Portfolio
          </button>
        </DialogActions>
      </Dialog>
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

export default AddPortfolioDialog;

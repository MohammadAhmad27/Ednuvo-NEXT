import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Box,
} from "@mui/material";
import Image from "next/image";
import MUITextField from "../TextField";
import MUIAutoComplete from "../AutoComplete";
import { Alert, Snackbar } from "@mui/material";
import {
  pricingModes,
  skillsList,
} from "@/app/service-provider-onboarding/content";
import MUIDatePicker from "../DatePicker";
import dayjs, { Dayjs } from "dayjs";

interface AddPackageDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddPortfolioDialog = ({ open, onClose }: AddPackageDialogProps) => {
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [snackMessage, setSnackMessage] = useState<string>("");
  const [formData, setFormData] = useState<{
    portfolioImages: File[];
    title: string;
    description: string;
    skills: string[];
    startDate: Date | null;
    endDate: Date | null;
    projectCost: string | number;
  }>({
    portfolioImages: [] as File[],
    title: "",
    description: "",
    skills: [] as string[],
    startDate: null as Date | null,
    endDate: null as Date | null,
    projectCost: "",
  });

  const handleFormChange = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const toggleSkill = (skill: string) => {
    console.log("skill: ", skill);
  };

  const handleStartDateChange = (date: Dayjs | null) => {};

  const handleEndDateChange = (date: Dayjs | null) => {};

  console.log("AddPortfolio: ", formData);

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
            padding: "0px 20px 20px 20px !important",
            display: "flex",
            justifyContent: "center",
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
              // ref={(el: any) => (fileInputRefs.current[index] = el)}
              // onChange={(e) => handleFileChange(index, e)}
              className="hidden"
            />
            <div
              className="flex flex-col justify-center items-center p-4 border border-gray border-dashed rounded-xl cursor-pointer mb-8"
              // onClick={() => handleDivClick(index)}
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
          {/* Title & Desription */}
          <div className="w-full space-y-4 mb-4">
            <MUITextField
              label="Project Title"
              placeholder="Enter project title"
              type="text"
              value={formData?.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange({ title: e?.target?.value })
              }
            />
            <MUITextField
              label="Project Description"
              placeholder="Enter project description"
              type="text"
              value={formData?.description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange({ description: e?.target?.value })
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
            <div className="flex flex-wrap gap-3 mb-8">
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
          {/* Date */}
          <div className="w-full grid grid-cols-3 gap-2">
            <MUIDatePicker
              value={formData?.startDate ? dayjs(formData?.startDate) : null}
              onChange={(date) => handleStartDateChange(date)}
              label="Project Start Date"
            />
            <MUIDatePicker
              value={formData?.endDate ? dayjs(formData?.endDate) : null}
              onChange={(date) => handleEndDateChange(date)}
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
          <button className="bg-primary rounded-full text-[14px] font-medium text-white text-center px-6 py-2">
            Add Portfolio
          </button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={() => setAlertOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setAlertOpen(false)}
          severity="warning"
          sx={{ width: "100%" }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddPortfolioDialog;

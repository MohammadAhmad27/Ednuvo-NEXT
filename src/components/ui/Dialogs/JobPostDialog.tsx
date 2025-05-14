import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Image from "next/image";
import { useToast } from "@/context/ToastContext";
import JobPostingDetails from "@/components/ServiceRequester-Onboarding/JobPostingDetails";

interface JobPostDialogProps {
  open: boolean;
  onClose: () => void;
}

const JobPostDialog = ({ open, onClose }: JobPostDialogProps) => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState<{
    jobTitle: string;
    jobDescription: string;
    jobCategory: string;
    jobSubCategory: string;
    location: string;
    jobDuration: string;
    budgetMode: string;
    totalBudget: string;
    experienceLevel: string;
    jobStartDate: Date | null;
    categoriesList: string[];
    imagesList: File[];
  }>({
    jobTitle: "",
    jobDescription: "",
    jobCategory: "",
    jobSubCategory: "",
    location: "",
    jobDuration: "",
    budgetMode: "",
    totalBudget: "",
    experienceLevel: "",
    jobStartDate: null,
    categoriesList: [],
    imagesList: [],
  });

  const handleFormChange = (newData: any) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  const handlePostJob = () => {
    if (
      !formData?.jobTitle.trim() ||
      !formData?.jobDescription.trim() ||
      !formData?.jobCategory.trim() ||
      !formData?.jobSubCategory.trim() ||
      !formData?.location.trim() ||
      !formData?.jobDuration.trim() ||
      !formData?.budgetMode.trim() ||
      !formData?.totalBudget.trim() ||
      !formData?.experienceLevel.trim() ||
      !formData?.jobStartDate ||
      !formData?.categoriesList.length ||
      !formData?.imagesList.length
    ) {
      showToast("Please fill all required fields!", "warning");
      return;
    }

    showToast("Job posted successfully!", "success");
    onClose();
    setFormData({
      jobTitle: "",
      jobDescription: "",
      jobCategory: "",
      jobSubCategory: "",
      location: "",
      jobDuration: "",
      budgetMode: "",
      totalBudget: "",
      experienceLevel: "",
      jobStartDate: null,
      categoriesList: [],
      imagesList: [],
    });
  };

  console.log("JobPostingData: ", formData);

  return (
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
          justifyContent: "end",
          alignItems: "center",
        },
      }}
    >
      <DialogTitle>
        <h2 className="text-[20px] font-semibold text-black">Post A Job</h2>
        <Image
          onClick={onClose}
          src="/service-provider-onboarding/close.svg"
          alt="close-icon"
          width={20}
          height={20}
          className="object-cover cursor-pointer"
        />
      </DialogTitle>

      <DialogContent>
        <JobPostingDetails
          formData={formData}
          onChange={handleFormChange}
          showParagraph={false}
        />
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
          onClick={handlePostJob}
        >
          Create
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default JobPostDialog;

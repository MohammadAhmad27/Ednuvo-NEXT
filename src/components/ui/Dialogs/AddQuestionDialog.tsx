import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import type { TestQuestions } from "@/interfaces/Admin";
import Image from "next/image";
import MUIAutoComplete from "../AutoComplete";
import MUITextField from "../TextField";

interface AddQuestionModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  onAddQuestion: (question: TestQuestions) => void;
  serviceCategories: string[];
}

const AddQuestionModal = ({
  isModalOpen,
  setIsModalOpen,
  onAddQuestion,
  serviceCategories,
}: AddQuestionModalProps) => {
  const [formData, setFormData] = useState<TestQuestions>({
    question: "",
    serviceCategory: "",
    options: [
      { label: "A)", value: "" },
      { label: "B)", value: "" },
      { label: "C)", value: "" },
      { label: "D)", value: "" },
    ],
    correctAnswer: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleOptionChange = (label: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      options: prev?.options?.map((opt: any) =>
        opt.label === label ? { ...opt, value } : opt
      ),
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.question ||
      !formData.serviceCategory ||
      formData.options.some((opt) => !opt.value) ||
      !formData.correctAnswer
    ) {
      alert("Please fill all fields");
      return;
    }
    onAddQuestion(formData);
    setFormData({
      question: "",
      serviceCategory: "",
      options: [
        { label: "A)", value: "" },
        { label: "B)", value: "" },
        { label: "C)", value: "" },
        { label: "D)", value: "" },
      ],
      correctAnswer: "",
    });
    setIsModalOpen(false);
  };

  const correctAnswerOptions = formData?.options?.map(
    (opt: any) => `${opt.label} ${opt.value}`
  );

  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
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
          padding: "0px 20px 20px 20px !important",
          display: "flex",
          flexDirection: "column",
        },
        "& .MuiDialogActions-root": {
          padding: "0px 20px 15px 20px !important",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <DialogTitle>
        <h2 className="text-[20px] font-semibold text-black">Add Question</h2>
        <Image
          onClick={() => setIsModalOpen(false)}
          src="/service-provider-onboarding/close.svg"
          alt="close-icon"
          width={20}
          height={20}
          className="object-cover cursor-pointer"
        />
      </DialogTitle>

      <DialogContent>
        <div className="w-full flex flex-col gap-6 py-2">
          <MUIAutoComplete
            label="Category"
            width="100%"
            placeholder="Select Category"
            options={serviceCategories}
            value={formData?.serviceCategory}
            onChange={(event: React.SyntheticEvent, newValue: string | null) =>
              handleChange("serviceCategory", newValue ?? "")
            }
          />

          <div className="w-full">
            <MUITextField
              label="Question"
              placeholder="Enter Question"
              value={formData?.question}
              onChange={(e) => handleChange("question", e.target.value)}
            />
          </div>

          <div className="w-full grid grid-cols-2 gap-4">
            {["A)", "B)", "C)", "D)"].map((label, index) => (
              <div key={label}>
                <MUITextField
                  label={`Option ${label.replace(")", "")}`}
                  placeholder={label}
                  value={formData?.options[index]?.value}
                  onChange={(e) => handleOptionChange(label, e.target.value)}
                />
              </div>
            ))}
          </div>

          <MUIAutoComplete
            label="Correct Answer"
            width="100%"
            placeholder="Select Option"
            options={correctAnswerOptions}
            value={formData?.correctAnswer}
            onChange={(event: React.SyntheticEvent, newValue: string | null) =>
              handleChange("correctAnswer", newValue ?? "")
            }
          />
        </div>
      </DialogContent>

      <DialogActions>
        <button
          onClick={handleSubmit}
          className="text-[14px] font-medium bg-primary text-white rounded-full px-6 py-2"
        >
          Add Question
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default AddQuestionModal;

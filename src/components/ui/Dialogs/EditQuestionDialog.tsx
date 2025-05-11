import { useState, useEffect } from "react";
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
import { useToast } from "@/context/ToastContext";

interface EditQuestionModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  onEditQuestion: (question: TestQuestions) => void;
  serviceCategories: string[];
  questionData: TestQuestions | null;
}

const defaultOptions = [
  { label: "A)", value: "" },
  { label: "B)", value: "" },
  { label: "C)", value: "" },
  { label: "D)", value: "" },
];

const EditQuestionDialog = ({
  isModalOpen,
  setIsModalOpen,
  onEditQuestion,
  serviceCategories,
  questionData,
}: EditQuestionModalProps) => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState<TestQuestions>({
    id: 0,
    question: "",
    serviceCategory: "",
    options: [...defaultOptions],
    correctAnswer: "",
  });

  useEffect(() => {
    if (questionData) {
      setFormData({
        ...questionData,
        options: questionData.options?.length
          ? [...questionData.options]
          : [...defaultOptions],
      });
    }
  }, [questionData]);

  const handleChange = (field: keyof TestQuestions, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleOptionChange = (index: number, value: string) => {
    setFormData((prev) => {
      const newOptions = [...prev.options];
      newOptions[index] = { ...newOptions[index], value };
      return { ...prev, options: newOptions };
    });
  };

  const handleSubmit = () => {
    if (
      !formData.question.trim() ||
      !formData.serviceCategory.trim() ||
      formData.options.some((opt) => !opt.value.trim()) ||
      !formData.correctAnswer.trim()
    ) {
      showToast("Please fill all required fields!", "warning");
      return;
    }

    const isValidAnswer = formData.options.some(
      (opt) => formData.correctAnswer === `${opt.label} ${opt.value}`
    );

    if (!isValidAnswer) {
      showToast("Correct answer must match one of the options!", "warning");
      return;
    }

    onEditQuestion(formData);
    setIsModalOpen(false);
  };

  const correctAnswerOptions = formData.options.map(
    (opt) => `${opt.label} ${opt.value}`
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
        <h2 className="text-[20px] font-semibold text-black">Edit Question</h2>
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
            {formData.options.map((opt, index) => (
              <MUITextField
                key={opt.label}
                label={`Option ${opt.label.replace(")", "")}`}
                placeholder={opt.label}
                value={opt?.value}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
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
          Edit Question
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default EditQuestionDialog;

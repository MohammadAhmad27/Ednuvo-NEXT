"use client";
import { useState } from "react";
import { Button } from "@mui/material";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import { questions } from "@/app/verification-test/content";
import VerificationTestDialog from "../ui/Dialogs/VerificationTestDialog";

export default function VerificationTest() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const question =
    questions?.find((q) => q?.id === currentQuestion) || questions[0];

  const progressPercentage = (currentQuestion / questions?.length) * 100;

  const handleSelectOption = (optionId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: optionId,
    });
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions?.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleFinish = () => {
    setIsModalOpen(true);
  };

  // Calculate the score based on selected answers
  const calculatedScore = () => {
    let score = 0;
    Object.entries(selectedAnswers)?.forEach(([questionId, selectedOption]) => {
      const question = questions?.find(
        (q) => q?.id === Number.parseInt(questionId)
      );
      if (question && selectedOption === question?.answer) {
        score += 10; 
      }
    });
    return score;
  };

  return (
    <>
      <div className="w-full h-[calc(100vh-200px)] overflow-auto max-w-5xl mx-auto bg-white border border-gray rounded-[32px] p-10 shadow-grayshadow4">
        <h1 className="text-[24px] font-semibold text-lightblack text-center mb-2">
          Verification Test
        </h1>
        <p className="text-[18px] font-normal text-darkgray text-center mb-12 max-w-[810px] mx-auto">
          Complete this test to verify your expertise and qualify for job
          opportunities. Passing ensures you meet our quality standards,
          boosting your credibility and chances of getting hired
        </p>

        {/* Progress bar */}
        <div className="h-3 w-[82%] mx-auto bg-white border border-gray rounded-full shadow-grayShadow5 mb-2">
          <div
            className="h-full rounded-full bg-secondary transition-all duration-300 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Question counter */}
        <div className="text-[16px] font-medium text-primary px-[85px] mb-4">
          Question {currentQuestion} of {questions?.length}
        </div>

        {/* Question */}
        <div className="w-[65%] mx-auto">
          <h2 className="text-[20px] font-normal text-darkgray mb-1">
            Question {currentQuestion}
          </h2>
          <p className="text-[18px] font-medium text-black mb-5">
            {question?.text}
          </p>

          {/* Options */}
          <div className="space-y-3">
            {question?.options?.map((option) => (
              <div
                key={option?.id}
                className={`border rounded-xl py-2 flex items-center justify-between cursor-pointer transition-all
                  ${
                    selectedAnswers[currentQuestion] === option?.id
                      ? "border-l-8 border-secondary pl-2 pr-4"
                      : "border-gray px-4"
                  }`}
                onClick={() => handleSelectOption(option.id)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-normal text-lightblack">
                    {option?.id})
                  </span>
                  <span className="text-[14px] font-normal text-lightblack">
                    {option?.text}
                  </span>
                </div>
                <div>
                  {selectedAnswers[currentQuestion] === option?.id ? (
                    <CheckCircle className="text-secondary" fontSize="small" />
                  ) : (
                    <RadioButtonUnchecked
                      className="text-secondary"
                      fontSize="small"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center items-center gap-3 mt-16">
          {currentQuestion > 1 ? (
            <Button
              variant="outlined"
              onClick={handlePrevious}
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: "#1F4B3F",
                borderColor: "#1F4B3F",
                borderRadius: "9999px",
                px: 4,
                py: 0.75,
                "&:hover": {
                  borderColor: "#1F4B3F",
                  backgroundColor: "#F8FAFC",
                },
              }}
            >
              Previous
            </Button>
          ) : (
            <div></div>
          )}

          {currentQuestion < questions?.length ? (
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={!selectedAnswers[currentQuestion]}
              sx={{
                fontSize: 14,
                fontWeight: 500,
                bgcolor: "#1F4B3F",
                borderRadius: "9999px",
                px: 4,
                py: 0.75,
                "&:hover": { bgcolor: "1e5e2e" },
                "&.Mui-disabled": { bgcolor: "#E9E9E9", color: "#6B7177" },
              }}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleFinish}
              disabled={!selectedAnswers[currentQuestion]}
              sx={{
                fontSize: 14,
                fontWeight: 500,
                bgcolor: "#1F4B3F",
                borderRadius: "9999px",
                px: 4,
                py: 0.75,
                "&:hover": { bgcolor: "1e5e2e" },
                "&.Mui-disabled": { bgcolor: "#E9E9E9", color: "#6B7177" },
              }}
            >
              Finish
            </Button>
          )}
        </div>
      </div>
      <VerificationTestDialog
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}

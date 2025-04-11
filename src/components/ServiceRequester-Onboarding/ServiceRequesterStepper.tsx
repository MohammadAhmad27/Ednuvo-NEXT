"use client";
import { useState } from "react";
import { Stepper, Step, StepLabel, styled } from "@mui/material";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import BasicInformation from "./BasicInformation";
import ApplicationSubmission from "../ui/Dialogs/ApplicationSubmission";
import JobPostingDetails from "./JobPostingDetails";
import PaymentMethodDetails from "./PaymentMethodDetails";
import { navigationButtons } from "@/app/service-requester-onboarding/content";

// Custom connector centered vertically
const CustomConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor: "#E9E9E9",
    borderRadius: 0,
  },
}));

// Custom styled components
const CustomStepLabel = styled(StepLabel)(() => ({
  "& .MuiStepLabel-label": {
    fontSize: 14,
    fontWeight: 400,
    color: "#222222",
    textAlign: "center",
    maxWidth: "100px",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .MuiStepLabel-label.Mui-active": {
    fontSize: 14,
    fontWeight: 400,
    color: "#5BBB7B",
  },
  "& .MuiStepLabel-iconContainer": {
    paddingRight: 0,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ ownerState }) => ({
  zIndex: 1,
  backgroundColor: "#FFFFFF",
  color: "#222222",
  fontSize: 24,
  fontWeight: 400,
  border: "1px solid #e9e9e9",
  width: 45,
  height: 45,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#5BBB7B",
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: 400,
  }),
  ...(ownerState.completed && {
    backgroundColor: "#5BBB7B",
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: 400,
  }),
}));

function CustomStepIcon(props: {
  active: boolean;
  completed: boolean;
  icon: React.ReactNode;
}) {
  const { active, completed, icon } = props;

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }}>
      {icon}
    </ColorlibStepIconRoot>
  );
}

// Step content components
const steps = [
  {
    label: "Basic Information",
    component: BasicInformation,
  },
  {
    label: "Job Posting Details",
    component: JobPostingDetails,
  },
  {
    label: "Payment Method",
    component: PaymentMethodDetails,
  },
];

const ServiceRequesterSteps = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [formData, setFormData] = useState<{
    // Basic Information
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: number | string;
    countryCode: string;
    photo: File | null;

    // Job Posting Details
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

    // Job Posting Details
    paymentMethod: string;
    billedTo: string;
    cardNumber: number | string;
    expiration: Date | null;
    cvv: number | string;
    country: string;
  }>({
    // Basic Information
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    countryCode: "+966",
    photo: null,

    // Job Posting Details
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
    categoriesList: [] as string[],
    imagesList: [] as File[],

    // Payment Method Detais
    paymentMethod: "razorpay",
    billedTo: "",
    cardNumber: "",
    expiration: null,
    cvv: "",
    country: "",
  });

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setIsModalOpen(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFormChange = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const CurrentStepComponent = steps[activeStep].component;

  console.log("formData:", formData);

  return (
    <>
      <div className="pt-14 px-16 pb-8">
        <h1 className="text-[24px] font-semibold text-[#222222] text-center mb-6">
          Profile Creation Steps
        </h1>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={<CustomConnector />}
          className="mb-4"
        >
          {steps?.map((step, index) => (
            <Step key={step.label}>
              <CustomStepLabel
                StepIconComponent={(props) => (
                  <CustomStepIcon
                    icon={index + 1}
                    active={props.active ?? false}
                    completed={props.completed ?? false}
                  />
                )}
              >
                {step.label}
              </CustomStepLabel>
            </Step>
          ))}
        </Stepper>

        <div className="mb-12">
          <CurrentStepComponent
            formData={formData}
            onChange={handleFormChange}
          />
        </div>

        <div className="w-full flex items-center justify-end gap-2">
          <button
            disabled={activeStep === 0}
            onClick={handleBack}
            className="bg-white text-[14px] font-medium text-primary border border-primary rounded-full px-6 py-2 disabled:hidden"
          >
            Back
          </button>

          <button
            onClick={handleNext}
            className="bg-primary text-[14px] font-medium text-white border border-primary rounded-full px-6 py-2"
          >
            {activeStep === steps.length - 1
              ? "Submit for verification"
              : "Next & Save"}
          </button>
        </div>
      </div>
      <ApplicationSubmission
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="Profile Created Successfully"
        desc="Your profile has been successfully created! Our team will review your details to ensure they meet our platform’s standards. You can now explore and connect with top-rated freelancers for your service needs."
        buttons={navigationButtons}
      />
    </>
  );
};

export default ServiceRequesterSteps;

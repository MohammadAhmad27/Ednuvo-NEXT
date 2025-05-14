"use client";
import { useState } from "react";
import { Stepper, Step, StepLabel, styled } from "@mui/material";
import BasicInformation from "./BasicInformation";
import ServiceExperience from "./ServiceExperience";
import PortfolioDetails from "./PortfolioDetails";
import PackageDetails from "./PackageDetails";
import VerificationDocument from "./VerificationDocument";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import ApplicationSubmission from "../ui/Dialogs/ApplicationSubmissionDialog";
import { navigationButtons } from "@/app/service-provider-onboarding/content";
import { useToast } from "@/context/ToastContext";

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

const ServiceProviderSteps = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { showToast } = useToast();


  const [formData, setFormData] = useState<{
    // Basic Information
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    countryCode: string;
    photo: File | null;

    // Service & Experience
    serviceCategories: string[];
    experienceLevel: string;
    startTime: Date | null;
    endTime: Date | null;

    // Portfolio Details
    portfolios: Array<{
      projectTitle: string;
      projectDescription: string;
      skills: string[];
      portfolioImages: File[];
      startDate: Date | null;
      endDate: Date | null;
      projectCost: string;
    }>;

    // Packages Detail
    packages: Array<{
      packageImages: File[];
      title: string;
      description: string;
      pricingMode: string;
      price: string;
      category: string;
      requirements: string;
    }>;

    // Verification Document
    verificationDocument: File[];
  }>({
    // Basic Information
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    countryCode: "+966",
    photo: null,

    // Service & Experience
    serviceCategories: [],
    experienceLevel: "",
    startTime: null as Date | null,
    endTime: null as Date | null,

    // Portfolio Details
    portfolios: [
      {
        projectTitle: "",
        projectDescription: "",
        skills: [] as string[],
        portfolioImages: [] as File[],
        startDate: null as Date | null,
        endDate: null as Date | null,
        projectCost: "",
      },
    ],

    // Packages Detail
    packages: [
      {
        packageImages: [] as File[],
        title: "",
        description: "",
        pricingMode: "",
        price: "",
        category: "",
        requirements: "",
      },
    ],

    // Verification Document
    verificationDocument: [] as File[],
  });

  const handleFormChange = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  // Add these validation functions in your ServiceProviderSteps.tsx
const validateBasicInformation = (data: any) => {
  return (
    data?.firstName?.trim() !== "" &&
    data?.lastName?.trim() !== "" &&
    data?.address?.trim() !== "" &&
    data?.phoneNumber?.trim() !== "" &&
    data?.photo !== null
  );
};

const validateServiceExperience = (data: any) => {
  return (
    data?.serviceCategories?.length > 0 &&
    data?.experienceLevel?.trim() !== "" &&
    data?.startTime !== null &&
    data?.endTime !== null
  );
};

const validatePortfolioDetails = (data: any) => {
  return data?.portfolios?.every((portfolio: any) => {
    return (
      portfolio?.projectTitle?.trim() !== "" &&
      portfolio?.projectDescription?.trim() !== "" &&
      portfolio?.skills.length > 0 &&
      portfolio?.portfolioImages?.length > 0 &&
      portfolio?.startDate !== null &&
      portfolio?.endDate !== null &&
      portfolio?.projectCost?.trim() !== ""
    );
  });
};

const validatePackageDetails = (data: any) => {
  return data?.packages?.every((pkg: any) => {
    return (
      pkg?.title?.trim() !== "" &&
      pkg?.description?.trim() !== "" &&
      pkg?.pricingMode?.trim() !== "" &&
      pkg?.price?.trim() !== "" &&
      pkg?.category?.trim() !== "" &&
      pkg?.requirements?.trim() !== "" &&
      pkg?.packageImages?.length > 0
    );
  });
};

const validateVerificationDocument = (data: any) => {
  return data.verificationDocument?.length >= 2;
};


// Step content components
const steps = [
  {
    label: "Basic Information",
    component: BasicInformation,
    validate: validateBasicInformation,
  },
  {
    label: "Service & Experience Details",
    component: ServiceExperience,
    validate: validateServiceExperience,
  },
  {
    label: "Portfolio Details",
    component: PortfolioDetails,
    validate: validatePortfolioDetails,
  },
  {
    label: "Packages Detail",
    component: PackageDetails,
    validate: validatePackageDetails,
  },
  {
    label: "Verification Document",
    component: VerificationDocument,
    validate: validateVerificationDocument,
  },
];

const handleNext = () => {
  const currentStep = steps[activeStep];
  
  if (!currentStep?.validate(formData)) {
    showToast("Please fill all required fields!", "warning");
    return;
  }

  if (activeStep === steps?.length - 1) {
    showToast("Onbaording complete!", "info");
    setIsModalOpen(true);
  } else {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }
};

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const CurrentStepComponent = steps[activeStep].component;

  console.log("formData:", formData);

  return (
    <>
      <div className="flex-1 h-[calc(100vh-170px)] max-w-5xl mx-auto flex flex-col bg-white border border-[#E5E5E5] rounded-[32px] shadow-grayshadow4 pt-14 px-16 pb-8">
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

        <div className="w-full overflow-y-auto mb-10">
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
        title="Application Submitted for Review"
        desc="Your application has been submitted for approval. Our team will review your details to ensure they meet our platform’s criteria. While you wait, please complete a short test to verify your expertise in your selected services."
        buttons={navigationButtons}
      />
    </>
  );
};

export default ServiceProviderSteps;

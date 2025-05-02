import {
  providerSkillsList,
  userSkills,
} from "@/app/service-provider-dashboard/content";
import {
  experienceLevel,
  serviceCategories,
} from "@/app/service-provider-onboarding/content";
import MUIAutoComplete from "@/components/ui/AutoComplete";
import MUITextField from "@/components/ui/TextField";
import Image from "next/image";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import { Alert, Snackbar } from "@mui/material";
import { portfolioData } from "@/app/service-requester-dashboard/content";

const ProviderProfileSettings = () => {
  const [formData, setFormData] = useState<{
    photo: File | null;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: number | string;
    countryCode: string;
    service: string[];
    experienceLevel: string;
    about: string;
    skills: string[];
  }>({
    photo: null,
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    countryCode: "+966",
    service: [],
    experienceLevel: "",
    about: "",
    skills: userSkills,
  });
  const [selectedSkill, setSelectedSkill] = useState<string>("");
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [snackMessage, setSnackMessage] = useState<string>("");

  const handleFormChange = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  console.log("ProfileFormData: ", formData);

  return (
    <>
      <div className="w-full h-full flex flex-col px-5 py-8">
        {/* Edit Profile */}
        <div className="w-full space-y-4">
          <h3 className="text-[16px] font-semibold text-lightblack">
            Edit Profile
          </h3>
          <div className="flex justify-center mb-5">
            <div className="relative">
              <Image
                src="/service-provider-onboarding/profile.svg"
                width={100}
                height={100}
                alt="profile-photo"
                className="object-cover rounded-full shadow-profileshadow"
              />
              <div className="absolute -bottom-2 right-2 p-1 flex items-center justify-center rounded-full bg-primary size-8">
                <label htmlFor="upload-photo" className="cursor-pointer">
                  <input
                    accept="image/*"
                    id="upload-photo"
                    type="file"
                    hidden
                    // onChange={handlePhotoChange}
                  />
                  <Image
                    src="/service-provider-onboarding/edit.svg"
                    width={25}
                    height={25}
                    alt="edit-icon"
                    className="object-cover"
                  />
                </label>
              </div>
            </div>
          </div>
          <p className="text-[14px] font-normal text-[#181D27] text-center">
            Upload Photo
          </p>
        </div>
        {/* Personal Details */}
        <div className="w-full space-y-4 mt-4">
          <h3 className="text-[16px] font-semibold text-lightblack">
            Personal Details
          </h3>
          <div className="space-y-6">
            <div className="w-full grid grid-cols-3 gap-4">
              <MUITextField
                label="First Name"
                placeholder="Enter your first name"
                type="text"
                value={formData?.firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFormChange({ firstName: e.target.value })
                }
              />
              <MUITextField
                label="Last Name"
                placeholder="Enter your last name"
                type="text"
                value={formData?.lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFormChange({ lastName: e.target.value })
                }
              />
              <MUITextField
                label="Address"
                placeholder="Villa 23, Street 12, Al Muruj District, Riyadh"
                type="text"
                value={formData?.address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFormChange({ address: e.target.value })
                }
                endAdornment={
                  <Image
                    src="/service-provider-onboarding/location.svg"
                    alt="location-marker"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                }
              />
            </div>
            <div className="w-full grid grid-cols-3 gap-4">
              <MUITextField
                label="Phone Number"
                placeholder="123445"
                type="number"
                value={formData?.phoneNumber?.toString()}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFormChange({ phoneNumber: e.target.value })
                }
                startAdornment={
                  <div className="flex items-center gap-[4px]">
                    <Image
                      src="/service-provider-onboarding/saudi-flag.svg"
                      alt="saudi-flag"
                      width={20}
                      height={20}
                      className="object-cover mr-"
                    />
                    <div className="flex items-center gap-2 mr-[18px]">
                      <span className="text-[16px] font-normal text-lightblack">
                        {formData?.countryCode}
                      </span>
                      <span className="w-[1px] h-5 bg-[#E0E0E0]" />
                    </div>
                  </div>
                }
              />
              <MUIAutoComplete
                label="Select Services You Provide"
                placeholder="Select service"
                width="100%"
                multiple
                options={serviceCategories}
                value={formData?.service || []}
                onChange={(
                  _: React.SyntheticEvent,
                  newValue: string[] | null
                ) => handleFormChange({ service: newValue ?? [] })}
              />
              <MUIAutoComplete
                label="Your Experience Level"
                placeholder="Entry level (0 to 2 years)"
                width="100%"
                options={experienceLevel}
                value={formData?.experienceLevel || ""}
                onChange={(_: React.SyntheticEvent, newValue: string | null) =>
                  handleFormChange({ experienceLevel: newValue ?? "" })
                }
              />
            </div>
          </div>
        </div>
        {/* Personal Details */}
        <div className="w-full space-y-4 mt-6">
          <h3 className="text-[16px] font-semibold text-lightblack">About</h3>
          <MUITextField
            placeholder="Type something..."
            type="text"
            multiline
            rows={6}
            value={formData?.about}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormChange({ about: e.target.value })
            }
          />
        </div>
        {/* Skills */}
        <div className="w-full flex flex-col gap-4 mt-6">
          <h3 className="text-[16px] font-semibold text-lightblack">Skills</h3>
          <div className="flex items-center gap-3">
            <MUIAutoComplete
              placeholder="Add skills or expertise"
              width="30%"
              options={providerSkillsList}
              value={selectedSkill}
              onChange={(_: React.SyntheticEvent, newValue: string | null) => {
                setSelectedSkill(newValue ?? "");
              }}
            />
            <button
              className="bg-primary rounded-full text-[14px] font-medium text-white text-center px-6 py-3"
              onClick={() => {
                if (!selectedSkill) {
                  setSnackMessage("Please add a skill!");
                  setAlertOpen(true);
                  return;
                }

                if (formData?.skills?.includes(selectedSkill)) {
                  setSnackMessage(
                    "This skill is already added. Please select a different skill!"
                  );
                  setAlertOpen(true);
                  return;
                }

                handleFormChange({
                  skills: [...formData?.skills, selectedSkill],
                });
                setSelectedSkill("");
              }}
            >
              Add
            </button>
          </div>
          <div className="w-full flex flex-wrap items-center gap-2 mt-1.5">
            {formData?.skills?.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                onDelete={() => {
                  handleFormChange({
                    skills: formData?.skills?.filter((_, i) => i !== index),
                  });
                }}
                sx={{
                  borderRadius: "9999px",
                  borderColor: "#E9E9E9",
                  "& .MuiChip-deleteIcon": {
                    color: "#757575",
                    "&:hover": {
                      color: "#424242",
                    },
                  },
                }}
                variant="outlined"
              />
            ))}
          </div>
        </div>
        {/* Portfolio */}
        <div className="w-full flex flex-col gap-4 mt-14">
          <div className="w-full flex items-center justify-between gap-2">
            <h3 className="text-[16px] font-semibold text-lightblack">
              Portfolio
            </h3>
            <button className="bg-primary rounded-full text-center text-[14px] font-medium text-white px-6 py-2">
              Add New Portfolio
            </button>
          </div>
          <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {portfolioData.slice(0, 4)?.map((item) => (
              <div
                key={item?.id}
                className="flex flex-col gap-2 p-2 bg-white border border-[#DDE1F0] shadow-grayshadow rounded-xl cursor-pointer"
              >
                <Image
                  src={item?.mainImg[0]}
                  alt="cover-photo"
                  width={100}
                  height={100}
                  className="object-contain w-full rounded-lg"
                />
                <div className="my-[2px] pl-1">
                  <p className="text-[14px] font-normal text-darkgray">
                    From: {item?.startTime}
                  </p>
                  <h3 className="text-[16px] font-semibold text-lightblack">
                    {item?.projectTitle}
                  </h3>
                </div>
                <p className="text-[14px] font-normal text-[#181818] text-justify px-1">
                  {item?.projectDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
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

export default ProviderProfileSettings;

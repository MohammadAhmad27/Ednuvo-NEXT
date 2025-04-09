"use client";

import { pricingModes } from "@/app/service-provider-onboarding/content";
import MUIAutoComplete from "../ui/AutoComplete";
import MUITextField from "../ui/TextField";
import { Add } from "@mui/icons-material";

interface PackagesDetailProps {
  formData: any;
  onChange: (data: any) => void;
}

export default function PackagesDetail({
  formData,
  onChange,
}: PackagesDetailProps) {
  return (
    <div>
      <p className="text-[14px] text-primary font-normal text-center mb-10">
        Showcase your work by uploading project images, descriptions, and
        relevant tags. This helps clients understand your expertise.
      </p>
      <div className="w-full space-y-4 mb-6">
        <MUITextField
          label="Project Title"
          placeholder="Enter package title"
          type="text"
          value={formData?.title}
          onChange={(e) =>
            onChange({ ...formData, packageTitle: e.target.value })
          }
        />
        <MUITextField
          label="Project Description"
          placeholder="Enter package details"
          type="text"
          value={formData?.description}
          onChange={(e) =>
            onChange({ ...formData, packageDescription: e.target.value })
          }
          multiline
          rows={4}
        />
      </div>
      <div className="flex flex-col gap-1 justify-start items-start mb-6">
        <label className="text-[14px] font-normal text-lightblack">
          Category
        </label>
        <p className="text-[14px] font-normal text-darkgray">
          Select a category so it’s easy for clients to find your project.
        </p>
        <button className="text-[14px] font-normal text-secondary mt-1">
          Browse all categories
        </button>
      </div>
      <div className="w-full flex justify-between items-center gap-2 mb-5">
        <MUIAutoComplete
          width="50%"
          options={pricingModes}
          onChange={(_: React.SyntheticEvent, newValue: string | null) =>
            onChange({ ...formData, pricingMode: newValue ?? "" })
          }
          placeholder="Fixed Price (e.g SAR 150 per project)"
          label="Pricing Modes"
        />
        <div className="w-1/2">
          <MUITextField
            label="Package Price"
            placeholder="Enter package price"
            type="number"
            value={formData?.packagePrice}
            onChange={(e) =>
              onChange({ ...formData, packagePrice: e.target.value })
            }
          />
        </div>
      </div>
      <div className="w-full mb-6">
        <MUITextField
          label="Requirements"
          placeholder="Enter quirements"
          type="text"
          value={formData?.requirements}
          onChange={(e) =>
            onChange({ ...formData, requirements: e.target.value })
          }
          multiline
          rows={4}
        />
      </div>
      <button className="flex items-center justify-center gap-1 rounded-full bg-secondary text-white py-[5px] px-4">
        <Add sx={{ fontSize: 17, color: "#FFFFFF" }} />
        Add Another Package
      </button>
    </div>
  );
}

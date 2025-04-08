"use client";
import { experienceLevel, serviceCategories } from "@/app/service-provider-onboarding/content";
import MUIAutoComplete from "../ui/AutoComplete";
import Image from "next/image";
import MUITextField from "../ui/TextField";

interface ServiceExperienceProps {
  formData: any;
  onChange: (data: any) => void;
}

export default function ServiceExperience({
  formData,
  onChange,
}: ServiceExperienceProps) {


  return (
    <div>
      <p className="text-[14px] text-primary font-normal mb-8">
        Tell us about the services you provide and your level of experience.
        This helps us match you with the right clients.
      </p>
      <div className="w-full flex justify-between items-center gap-4 mb-10">
        <MUIAutoComplete
          width="50%"
          multiple
          options={serviceCategories}
          defaultValue={formData.serviceCategories || []}
          onChange={(_: React.SyntheticEvent, newValue: string[] | null) =>
            onChange({ serviceCategories: newValue ?? [] })
          }
          placeholder="Select service"
          label="Select Services You Provide"
        />
        <MUIAutoComplete
          width="50%"
          options={experienceLevel}
          defaultValue={formData.experienceLevel || ""}
          onChange={(_: React.SyntheticEvent, newValue: string | null) =>
            onChange({ experienceLevel: newValue ?? "" })
          }
          placeholder="Entry level (0 to 2 Years)"
          label="Your Experience Level"
        />
      </div>
      <div className="w-full flex justify-between items-center gap-4">
        <MUITextField
          label="Start Time"
          placeholder="(hh:mm:ss)"
          type="time"
          value={formData?.startTime}
          onChange={(e) => onChange({ startTime: e.target.value })}
          startAdornment={
            <Image
              src="/service-provider-onboarding/calendar.svg"
              alt="location-marker"
              width={20}
              height={20}
              className="object-cover"
            />
          }
        />
        <MUITextField
          label="End Time"
          placeholder="(hh:mm:ss)"
          type="time"
          value={formData?.endTime}
          onChange={(e) => onChange({ endTime: e.target.value })}
          startAdornment={
              <Image
                src="/service-provider-onboarding/calendar.svg"
                alt="saudi-flag"
                width={20}
                height={20}
                className="object-cover mr-"
              />
          }
        />
        </div>
    </div>
  );
}

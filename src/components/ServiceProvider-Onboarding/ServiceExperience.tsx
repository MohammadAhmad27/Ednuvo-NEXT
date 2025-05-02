import {
  experienceLevel,
  serviceCategories,
} from "@/app/service-provider-onboarding/content";
import MUIAutoComplete from "../ui/AutoComplete";
import MUITimePicker from "../ui/TimePicker";
import dayjs, { Dayjs } from "dayjs";

interface ServiceExperienceProps {
  formData: {
    serviceCategories: string[];
    experienceLevel: string;
    startTime: Date | null;
    endTime: Date | null;
    [key: string]: any;
  };
  onChange: (data: any) => void;
}

export default function ServiceExperience({
  formData,
  onChange,
}: ServiceExperienceProps) {
  const handleStartTimeChange = (date: Dayjs | null) => {
    onChange({ startTime: date ? date?.toDate() : null });
  };

  const handleEndTimeChange = (date: Dayjs | null) => {
    onChange({ endTime: date ? date?.toDate() : null });
  };

  return (
    <div>
      <p className="text-[14px] text-primary font-normal mb-8">
        Tell us about the services you provide and your level of experience.
        This helps us match you with the right clients.
      </p>
      <div className="w-full flex justify-between items-center gap-4 mb-6">
        <MUIAutoComplete
          width="50%"
          multiple
          options={serviceCategories}
          value={formData?.serviceCategories || []}
          onChange={(_: React.SyntheticEvent, newValue: string[] | null) =>
            onChange({ serviceCategories: newValue ?? [] })
          }
          placeholder="Select service"
          label="Select Services You Provide"
        />
        <MUIAutoComplete
          width="50%"
          options={experienceLevel}
          value={formData?.experienceLevel || ""}
          onChange={(_: React.SyntheticEvent, newValue: string | null) =>
            onChange({ experienceLevel: newValue ?? "" })
          }
          placeholder="Entry level (0 to 2 Years)"
          label="Your Experience Level"
        />
      </div>
      <div className="w-full flex justify-between items-center gap-4">
        <div className="w-1/2 flex flex-col">
          <MUITimePicker
            value={formData?.startTime ? dayjs(formData?.startTime) : null}
            onChange={handleStartTimeChange}
            label="Start Time"
          />
        </div>

        <div className="w-1/2 flex flex-col">
          <MUITimePicker
            value={formData?.endTime ? dayjs(formData?.endTime) : null}
            onChange={handleEndTimeChange}
            label="End Time"
          />
        </div>
      </div>
    </div>
  );
}

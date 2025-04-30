import MUIAutoComplete from "@/components/ui/AutoComplete";
import { Switch } from "@mui/material";
import { useState } from "react";

const timeOptions = [
  "5 Minutes",
  "10 Minutes",
  "15 Minutes",
  "20 Minutes",
  "25 Minutes",
  "30 Minutes",
];

const NotificationSettings = () => {
  const [value, setValue] = useState<string>("");
  console.log(value);

  return (
    <div className="w-full h-full flex flex-col gap-4 px-5 py-8">
      {/* 1st */}
      <div className="space-y-4">
        <h3 className="text-[16px] font-semibold text-lightblack">
          Notifications
        </h3>
        <div className="space-y-3">
          <Notification
            title="Enable Desktop Notification"
            description="Receive notifications for all messages, contracts, and documents."
          />
          <Notification
            title="Enable Unread Notification Badge"
            description="Shows a red badge on the app icon when you have an unread message."
          />
          <Notification
            title="Push Notification Time-out"
            component={
              <MUIAutoComplete
                width="100%"
                options={timeOptions}
                value={value}
                onChange={(event, newValue) => {
                  if (typeof newValue === "string") {
                    setValue(newValue);
                  }
                }}
                placeholder="Set time"
                label="Time"
              />
            }
          />
        </div>
      </div>

      {/* 2nd */}
      <div className="space-y-4">
        <h3 className="text-[16px] font-semibold text-lightblack">
          Email Notifications
        </h3>
        <div className="space-y-3">
          <Notification
            title="Communication Emails"
            description="Receive emails for messages, contracts, and documents."
            defaultChecked={false}
          />
          <Notification
            title="Announcements & Updates"
            description="Receive emails about product updates, improvements, etc."
          />
        </div>
      </div>

      {/* 3rd */}
      <div className="space-y-4">
        <h3 className="text-[16px] font-semibold text-lightblack">Sounds</h3>
        <div>
          <Notification
            title="Disable All Notification Sounds"
            description="Mute all notifications for messages, contracts, and documents."
          />
        </div>
      </div>
    </div>
  );
};

const Notification = ({
  title,
  description,
  component,
  defaultChecked = true,
}: {
  title: string;
  description?: string;
  component?: React.ReactNode;
  defaultChecked?: boolean;
}) => {
  return (
    <div className="w-full flex justify-between items-center border border-[#DDE1F0] rounded-2xl px-4 py-2">
      <div className="flex flex-col gap-1">
        <h3 className="text-[14px] font-medium text-[#181D27]">{title}</h3>
        {description && (
          <p className="text-[14px] font-normal text-darkgray">{description}</p>
        )}
        {component && <div className="pt-2 w-full">{component}</div>}
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
};

export default NotificationSettings;

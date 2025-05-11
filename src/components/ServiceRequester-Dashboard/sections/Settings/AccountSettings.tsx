import { accountDeactivationData } from "@/app/service-requester-dashboard/content";
import MUITextField from "@/components/ui/TextField";
import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const AccountSettings = () => {
  // Original data state (will only be updated on save)
  const [originalData, setOriginalData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Working copy state (modified in the UI)
  const [formData, setFormData] = useState(originalData);

  // Update working copy when original data changes
  useEffect(() => {
    setFormData(originalData);
  }, [originalData]);

  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});
  const [alertState, setAlertState] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "warning" | "error" | "info";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  // Check if all required fields are filled
  const validateForm = () => {
    const errors: Record<string, boolean> = {};
    let isValid = true;

    if (!formData?.firstName.trim()) {
      errors.firstName = true;
      isValid = false;
    }
    if (!formData?.lastName.trim()) {
      errors.lastName = true;
      isValid = false;
    }
    if (!formData?.email.trim()) {
      errors.email = true;
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  // Check if there are any changes from original data
  const hasChanges = () => {
    return JSON.stringify(formData) !== JSON.stringify(originalData);
  };

  const handleSave = () => {
    // First validate all required fields
    if (!validateForm()) {
      setAlertState({
        open: true,
        message: "Please fill all required fields!",
        severity: "warning",
      });
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex?.test(formData?.email)) {
      setAlertState({
        open: true,
        message: "Please enter a valid email address!",
        severity: "warning",
      });
      return;
    }

    if (!hasChanges()) {
      setAlertState({
        open: true,
        message: "No changes detected to save!",
        severity: "info",
      });
      return;
    }

    // If validation passes and there are changes, save the data
    setOriginalData(formData);

    setAlertState({
      open: true,
      message: "Changes saved successfully!",
      severity: "success",
    });
  };

  const handleFormChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <div className="w-full h-full flex flex-col px-5 py-10">
        {/* top */}
        <div className="space-y-5">
          <div className="w-full flex justify-between items-center gap-4">
            <MUITextField
              label="First Name"
              type="text"
              value={formData?.firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("firstName", e.target.value)
              }
              placeholder="Enter your first name"
            />
            <MUITextField
              label="Last Name"
              type="text"
              value={formData?.lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("lastName", e.target.value)
              }
              placeholder="Enter your last name"
            />
          </div>
          <div className="w-full flex justify-between items-center gap-4">
            <div className="w-[49.5%]">
              <MUITextField
                label="Email Address"
                type="email"
                value={formData?.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFormChange("email", e.target.value)
                }
                placeholder="Enter your email"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-primary text-[14px] font-medium text-white text-center rounded-full py-2 px-4"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
        {/* separator */}
        <div className="w-full h-[1px] bg-[#DDE1F0] my-6" />
        {/* bottom */}
        <div className="w-full flex flex-col">
          <h3 className="text-[16px] font-semibold text-lightblack mb-1">
            Account Deactivation
          </h3>
          <p className="text-[14px] font-semibold text-lightblack my-3">
            What happens when you deactivate your account?
          </p>
          <ul className="flex flex-col gap-2">
            {accountDeactivationData?.map((item) => (
              <li
                key={item?.id}
                className="list-disc list-inside text-[14px] font-normal text-darkgray"
              >
                {item?.desc}
              </li>
            ))}
          </ul>
          <p className="text-[15px] font-semibold text-lightblack mt-3">
            Please{" "}
            <span className="text-secondary">withdraw your revenues</span>{" "}
            before deactivating your account.
          </p>
          <div className="flex justify-end mt-5">
            <button className="bg-white border border-primary text-[14px] font-medium text-primary text-center rounded-full py-2 px-4">
              Deactivate Account
            </button>
          </div>
        </div>
      </div>
      <Snackbar
        open={alertState.open}
        autoHideDuration={5000}
        onClose={() => setAlertState((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setAlertState((prev) => ({ ...prev, open: false }))}
          severity={alertState.severity}
          sx={{ width: "100%" }}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AccountSettings;

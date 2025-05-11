import MUITextField from "@/components/ui/TextField";
import { useEffect, useState } from "react";
import { useToast } from "@/context/ToastContext";

const PasswordAndSecurity = () => {
  const { showToast } = useToast();
  const [originalData, setOriginalData] = useState<{
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }>({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [formData, setFormData] = useState(originalData);

  useEffect(() => {
    setFormData(originalData);
  }, [originalData]);

  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});

  // Password visibility states
  const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  // Check if all required fields are filled and valid
  const validateForm = () => {
    const errors: Record<string, boolean> = {};
    let isValid = true;

    if (!formData?.oldPassword?.trim()) {
      errors.oldPassword = true;
      isValid = false;
    }
    if (!formData?.newPassword?.trim()) {
      errors.newPassword = true;
      isValid = false;
    }
    if (!formData?.confirmPassword?.trim()) {
      errors.confirmPassword = true;
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
    if (!validateForm()) {
      showToast("Please fill all required fields!", "warning");
      return;
    }

    const passwordLength =
      formData?.oldPassword?.length < 5 ||
      formData?.newPassword?.length < 5 ||
      formData?.confirmPassword?.length < 5;
    if (passwordLength) {
      showToast("Password must be at least 5 characters long!", "warning");
      return;
    }

    const mismatch = formData?.newPassword !== formData?.confirmPassword;
    if (mismatch) {
      showToast("New password and confirm password don't match!", "warning");
      return;
    }

    if (!hasChanges()) {
      showToast("No changes detected to save!", "info");
      return;
    }

    setOriginalData(formData);
    showToast("Password changed successfully!", "success");

    setShowOldPassword(false);
    setShowNewPassword(false);
    setShowConfirmPassword(false);
  };

  const handleFormChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-6 px-5 py-10">
      <div className="w-2/5">
        <MUITextField
          label="Old Password"
          type="password"
          value={formData?.oldPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("oldPassword", e.target.value)
          }
          placeholder="Enter your old password"
          showPassword={showOldPassword}
          setShowPassword={setShowOldPassword}
        />
      </div>
      <div className="w-2/5 space-y-3">
        <MUITextField
          label="New Password"
          type="password"
          value={formData?.newPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("newPassword", e.target.value)
          }
          placeholder="Enter your new password"
          showPassword={showNewPassword}
          setShowPassword={setShowNewPassword}
        />
        <p className="text-[12px] font-normal text-darkgray">
          Use 8+ characters with a mix of uppercase, lowercase, numbers, and
          special symbols (e.g., !@#$).
        </p>
      </div>
      <div className="w-2/5">
        <MUITextField
          label="Confirm Password"
          type="password"
          value={formData?.confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("confirmPassword", e.target.value)
          }
          placeholder="Confirm your new password"
          showPassword={showConfirmPassword}
          setShowPassword={setShowConfirmPassword}
        />
      </div>
      <div className="w-2/5">
        <button
          onClick={handleSave}
          className="w-full bg-primary text-[18px] font-medium text-white text-center rounded-full py-2 px-4"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PasswordAndSecurity;

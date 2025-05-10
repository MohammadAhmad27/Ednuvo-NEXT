import MUITextField from "@/components/ui/TextField";
import { useState } from "react";

const PasswordAndSecurity = () => {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // Individual password visibility states
  const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleSave = () => {
    console.log("OldPassword: ", oldPassword);
    console.log("NewPassword: ", newPassword);
    console.log("ConfirmPassword: ", confirmPassword);
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-6 px-5 py-10">
      <div className="w-2/5">
        <MUITextField
          label="Old Password"
          type="password"
          value={oldPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setOldPassword(e.target.value)
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
          value={newPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewPassword(e.target.value)
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
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
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

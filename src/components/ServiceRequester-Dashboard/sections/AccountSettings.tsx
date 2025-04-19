import { accountDeactivationData } from "@/app/service-requester-dashboard/content";
import MUITextField from "@/components/ui/TextField";
import { useState } from "react";

const AccountSettings = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSave = () => {
    console.log("FirstName: ", firstName);
    console.log("LasttName: ", lastName);
    console.log("Email: ", email);
  };

  return (
    <div className="w-full h-full flex flex-col px-5 py-10">
      {/* top */}
      <div className="space-y-5">
        <div className="w-full flex justify-between items-center gap-4">
          <MUITextField
            label="First Name"
            type="text"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
            placeholder="Enter your first name"
          />
          <MUITextField
            label="Last Name"
            type="text"
            value={lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
            placeholder="Enter your last name"
          />
        </div>
        <div className="w-full flex justify-between items-center gap-4">
          <div className="w-[49.5%]">
            <MUITextField
              label="Email Address"
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
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
          Please <span className="text-secondary">withdraw your revenues</span>{" "}
          before deactivating your account.
        </p>
        <div className="flex justify-end mt-5">
          <button
            onClick={handleSave}
            className="bg-white border border-primary text-[14px] font-medium text-primary text-center rounded-full py-2 px-4"
          >
            Deactivate Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;

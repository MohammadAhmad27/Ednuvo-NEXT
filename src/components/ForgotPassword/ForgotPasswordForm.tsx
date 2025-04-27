"use client";
import { useState } from "react";
import MUITextField from "../ui/TextField";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setIsLoading(true);
    console.log("email: ", email);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="space-y-3">
        <h1 className="text-[32px] font-semibold text-black text-center max-w-[500px]">
          Forgot Password
        </h1>
        <p className="text-[16px] font-medium text-darkgray text-center max-w-[400px]">
          Enter your email id below. Then inhale-exhale. The reset link will be
          sent in your email.
        </p>
      </div>
      <form
        className="flex flex-col gap-4 w-full max-w-[550px] mt-6"
        onSubmit={handleSubmit}
      >
        <MUITextField
          label="Email Address"
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <button
          type="submit"
          className="w-full text-[18px] font-medium text-white text-center bg-secondary rounded-full p-2 mt-2"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;

"use client";
import { useState } from "react";
import MUITextField from "../ui/TextField";
import { Alert, Snackbar } from "@mui/material";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alertState, setAlertState] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "warning" | "error" | "info";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setAlertState({
        open: true,
        message: "Email is required!",
        severity: "error",
      });
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex?.test(email)) {
      setAlertState({
        open: true,
        message: "Please enter a valid email address!",
        severity: "error",
      });
      return;
    }

    // setIsLoading(true);
    console.log("email: ", email);
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <div className="space-y-3">
          <h1 className="text-[32px] font-semibold text-black text-center max-w-[500px]">
            Forgot Password
          </h1>
          <p className="text-[16px] font-medium text-darkgray text-center max-w-[400px]">
            Enter your email id below. Then inhale-exhale. The reset link will
            be sent in your email.
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
      <Snackbar
        open={alertState?.open}
        autoHideDuration={5000}
        onClose={() => setAlertState((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setAlertState((prev) => ({ ...prev, open: false }))}
          severity={alertState?.severity}
          sx={{ width: "100%" }}
        >
          {alertState?.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ForgotPasswordForm;

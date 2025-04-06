"use client";
import { useState } from "react";
import MUITextField from "../ui/TextField";
import { signUpButtons } from "@/app/signup/content";
import Image from "next/image";
import Link from "next/link";

const SignUpForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("email", email + "password", password);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="space-y-3">
        <h1 className="text-[32px] font-semibold text-black text-center max-w-[500px]">
          Create Your Account
        </h1>
        <p className="text-[16px] font-medium text-darkgray text-center max-w-[400px]">
          Sign up now and experience seamless hiring and freelancing!
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
        <MUITextField
          label="Password"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <p className="texr-[12px] font-normal text-[#AAAAAA]">
          Use 8+ characters with a mix of uppercase, lowercase, numbers, and
          special symbols (e.g., !@#$).
        </p>
        <div className="flex justify-start items-center gap-2">
          <input
            type="checkbox"
            id="check"
            checked={isChecked}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setIsChecked(e.target.checked)
            }
            className="cursor-pointer"
          />
          <label
            htmlFor="check"
            className="text-[12px] font-normal text-lightblack cursor-pointer"
          >
            By clicking on “Create Account” you{" "}
            <span className="text-secondary">
              agree to terms and privacy policy
            </span>{" "}
            of Ednuvo
          </label>
        </div>
        <button
          type="submit"
          className="w-full text-[18px] font-medium text-white text-center bg-secondary rounded-full p-2"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex items-center gap-2 w-full max-w-[550px]">
        <div className="h-px w-full bg-[#DDE1F0]" />
        <p className="text-[14px] font-normal text-[#DDE1F0] whitespace-nowrap">
          OR
        </p>
        <div className="h-px w-full bg-[#DDE1F0]" />
      </div>
      <div className="flex flex-col gap-2 w-full max-w-[550px]">
        {signUpButtons?.map((item) => (
          <button
            key={item?.id}
            className="w-full flex items-center justify-center gap-2 bg-lightgreen rounded-full p-2"
          >
            <Image
              src={item?.icon}
              alt="social-icon"
              width={20}
              height={20}
              className={`object-contain ${
                item?.label === "Continue with Facebook" && "w-5 h-5"
              }
              ${
                item?.id === 2
                  ? "ml-[15px]"
                  : item?.id === 3
                  ? "ml-[-12px]"
                  : ""
              }  
              `}
            />
            <p className="text-[14px] font-normal text-[#101828]">
              {item?.label}
            </p>
          </button>
        ))}
      </div>
      <p className="flex items-center gap-[6px] text-[14px] font-normal text-[#101828] mt-[2px]">
        Already have an account?
        <Link href="/login" className="text-secondary">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;

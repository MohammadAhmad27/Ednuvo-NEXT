import React from "react";
import Image from "next/image";
import Link from "next/link";
import { authButtons, navigation } from "@/constants";

const Navbar = () => {
  return (
    <div className="w-full bg-primary flex justify-between items-center gap-2 border-b-[1px] border-gray px-20 py-4">
      <div className="flex items-center gap-8">
        <Image
          src="/ednuvo-logo.svg"
          alt="Ednuvo-logo"
          width={70}
          height={70}
          className="cursor-pointer"
        />
        <div className="flex items-center gap-4">
          {navigation?.map((item) => (
            <Link key={item?.id} href={item?.href}>
              <p className="text-[16px] font-medium text-white">
                {item?.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Link href="#">
          <p className="text-[16px] font-medium text-white mr-4">
            Become a Service Provider
          </p>
        </Link>
        {authButtons?.map((item) => (
          <Link key={item?.id} href={item?.href}>
            <p
              className={`text-[16px] font-medium  ${
                item?.label === "Sign Up"
                  ? "text-lightblack bg-white px-5 py-2 rounded-full"
                  : "text-white"
              }`}
            >
              {item?.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

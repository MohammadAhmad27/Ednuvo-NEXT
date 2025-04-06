"use client";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { registerCardData } from "@/app/register/content";
import Slider from "@/components/ui/Sliders/Slider";
import RegisterCardComponent from "@/components/ui/Cards/Register-Card";

interface RegisterProps {
  component: ReactNode;
}

const Register = ({ component }: RegisterProps) => {
  return (
    <div className="min-h-screen w-screen bg-lightgreen flex justify-between gap-2 py-4 pl-8 pr-4">
      {/* left */}
      <div className="w-1/2 flex flex-col gap-2 bg-[url(/register/lining-group.svg)] bg-cover bg-no-repeat">
        <Link href="/">
          <Image
            src="/register/ednuvo-dark.svg"
            alt="Ednuvo-logo"
            width={70}
            height={70}
            className="object-cover cursor-pointer"
          />
        </Link>
        {/* Slider Section */}
        <div className="flex-grow flex flex-col justify-center z-10">
          <Slider
            cards={registerCardData}
            renderCard={(card) => <RegisterCardComponent card={card} />}
            itemsPerSlide={1}
          />
        </div>
      </div>
      {/* right */}
      <div className="w-1/2 bg-white border border-[#E5E5E5] shadow-grayshadow4 flex flex-col justify-center items-center rounded-[32px] p-4">
        {component && component}
      </div>
    </div>
  );
};

export default Register;

"use client";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { registerCardData } from "@/app/register/content";
import Slider from "@/components/ui/Sliders/Slider";
import RegisterCardComponent from "@/components/ui/Cards/RegisterCard";

interface RegisterProps {
  component: ReactNode;
}

const Register = ({ component }: RegisterProps) => {
  return (
    <div className="min-h-screen w-screen bg-lightgreen flex justify-between gap-2 py-4 pl-8 pr-4">
      {/* left */}
      <div className="w-1/2 flex flex-col gap-2 bg-[url(/register/lining-group.svg)] bg-cover bg-no-repeat">
        <Link href="/" className="w-fit">
          <Image
            src="/register/ednuvo-dark.svg"
            alt="ednuvo-logo"
            width={80}
            height={80}
            className="object-cover"
          />
        </Link>
        {/* Slider Section */}
        <div className="flex-grow flex flex-col justify-center z-10 relative">
          {/* Card Wrapper */}
          <div className="relative">
            {/* Background Bubbles */}
            <div className="absolute md:-top-28 md:-right-10 lg:-top-28 lg:-right-14 xl:-top-36 xl:-right-16 2xl:-top-40 2xl:right-64 z-0 rounded-full bg-secondary size-80 blur-[210px]" />
            <div className="absolute md:bottom-40 md:-left-20 lg:bottom-36 lg:-left-20 xl:bottom-36 xl:left-16 2xl:bottom-36 2xl:left-80 z-0 rounded-full bg-secondary size-44 blur-[210px]" />
            {/* Card */}
            <div className="relative z-50">
              <Slider
                cards={registerCardData}
                renderCard={(card) => <RegisterCardComponent card={card} />}
                itemsPerSlide={1}
              />
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-1/2 bg-white border border-[#E5E5E5] shadow-grayshadow4 flex flex-col justify-center items-center rounded-[32px] p-4 z-50">
        {component && component}
      </div>
    </div>
  );
};

export default Register;

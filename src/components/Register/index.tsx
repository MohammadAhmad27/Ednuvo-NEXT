"use client";
import Image from "next/image";
import Link from "next/link";
import { registerCardData } from "@/app/register/content";
import Slider from "../ui/Sliders/Slider";
import RegisterCardComponent from "../ui/Cards/Register-Card";
import RoleSelectorCard from "../ui/Cards/Role-Selector-Card";

const Register = () => {
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
      <div className="w-1/2 bg-white border border-[#E5E5E5] shadow-grayshadow4 flex flex-col gap-10 justify-center items-center px-4 rounded-[32px]">
        <h1 className="text-[32px] font-semibold text-black text-center max-w-[500px]">
          Join As A Service Provider Or Service Requester
        </h1>
        <RoleSelectorCard />
      </div>
    </div>
  );
};

export default Register;

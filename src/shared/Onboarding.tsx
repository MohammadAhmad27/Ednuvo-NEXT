import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface RegisterProps {
  component: ReactNode;
}

const Onboarding = ({ component }: RegisterProps) => {
  return (
    <div className="h-screen w-screen bg-[url(/register/lining-group.svg)] bg-left bg-no-repeat bg-lightgreen flex flex-col gap-5 px-8 py-4">
      <Link href="/" className="w-fit">
        <Image
          src="/register/ednuvo-dark.svg"
          alt="Ednuvo-logo"
          width={80}
          height={80}
          className="object-cover"
        />
      </Link>
      <div className="min-h-full w-full max-w-5xl mx-auto pb-[136px] z-50">
        <div className="h-full w-full overflow-auto bg-white border border-[#E5E5E5] shadow-grayshadow4 rounded-[32px]">
          <div className="min-h-full flex flex-col items-center max-w-5xl mx-auto">
            {component && component}
          </div>
        </div>
      </div>
      {/* <div className="h-full md:px-[90px] pb-16 z-50">
        <div className="h-full w-full overflow-auto bg-white border border-[#E5E5E5] shadow-grayshadow4 flex flex-col justify-center items-center rounded-[32px]">
          {component && component}
        </div>
      </div> */}
    </div>
  );
};

export default Onboarding;

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface OnboardingProps {
  component: ReactNode;
}

const Onboarding = ({ component }: OnboardingProps) => {
  return (
    <div className="relative h-screen w-screen bg-[url(/register/lining-group.svg)] bg-left bg-no-repeat bg-lightgreen flex flex-col gap-5 px-8 py-4">
      <Link href="/" className="w-fit">
        <Image
          src="/register/ednuvo-dark.svg"
          alt="ednuvo-logo"
          width={80}
          height={80}
          className="object-cover"
        />
        <div className="absolute blur-[210px] md:-top-12 md:left-40 lg:-top-12 lg:left-48 xl:-top-10 xl:left-40 2xl:-top-20 2xl:left-[400px] z-0 rounded-full bg-secondary size-80" />
        <div className="absolute blur-[210px] md:bottom-40 md:right-0 lg:bottom-40 lg:right-0 xl:bottom-60 xl:right-6 2xl:top-[400px] 2xl:right-40 z-0 rounded-full bg-secondary size-80" />
      </Link>
      <div className="w-full z-50">{component && component}</div>
    </div>
  );
};

export default Onboarding;

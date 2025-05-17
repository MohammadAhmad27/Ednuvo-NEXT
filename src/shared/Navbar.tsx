import Image from "next/image";
import Link from "next/link";
import { authButtons, navigation } from "@/constants";

const Navbar = () => {
  return (
    <nav className="w-full overflow-hidden bg-primary flex justify-between items-center gap-2 border-b-[1px] border-gray max-md:px-4 md:px-8 lg:px-10 xl:px-20 py-4">
      {/* Left Side: Logo + Navigation Links */}
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image
            src="/navbar/ednuvo-light.svg"
            alt="ednuvo-logo"
            width={70}
            height={70}
            className="object-cover"
          />
        </Link>

        <ul className="flex items-center gap-4 max-lg:hidden">
          {navigation?.map((item) => (
            <li key={item?.id}>
              <Link href={item?.href}>
                <p className="lg:text-[14px] xl:text-[16px] font-medium text-white text-nowrap">
                  {item?.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Right Side: Auth Links */}
      {/*  above lg */}
      <div className="flex items-center gap-5 max-lg:hidden">
        <Link href="/service-provider-onboarding">
          <p className="lg:text-[14px] xl:text-[16px] font-medium text-white text-nowrap  xl:mr-4">
            Become a Service Provider
          </p>
        </Link>
        <ul className="flex items-center gap-4">
          {authButtons?.map((item) => (
            <li key={item?.id}>
              <Link href={item?.href}>
                <p
                  className={`lg:text-[14px] xl:text-[16px] font-medium ${
                    item?.label === "Sign Up"
                      ? "text-lightblack bg-white px-4 py-2 rounded-full"
                      : "text-white"
                  }`}
                >
                  {item?.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* below lg */}
      <div className="flex items-center gap-4 lg:hidden">
        <Link href="/signup">
          <p className="max-md:text-[12px] md:text-[14px] font-medium text-lightblack bg-white px-4 py-2 rounded-full">
            Sign Up
          </p>
        </Link>
        <Image
          src="/navbar/menu.svg"
          alt="menu-icon"
          width={33}
          height={33}
          className="object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;

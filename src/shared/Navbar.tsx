import Image from "next/image";
import Link from "next/link";
import { authButtons, navigation } from "@/constants";

const Navbar = () => {
  return (
    <nav className="w-full bg-primary flex justify-between items-center gap-2 border-b-[1px] border-gray px-20 py-4">
      {/* Left Side: Logo + Navigation Links */}
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image
            src="/navbar/ednuvo-logo.svg"
            alt="Ednuvo-logo"
            width={70}
            height={70}
            className="object-cover cursor-pointer"
          />
        </Link>

        <ul className="flex items-center gap-4">
          {navigation?.map((item) => (
            <li key={item?.id}>
              <Link href={item?.href}>
                <p className="text-[16px] font-medium text-white cursor-pointer">
                  {item?.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Right Side: Auth Links */}
      <div className="flex items-center gap-5">
        <Link href="#">
          <p className="text-[16px] font-medium text-white mr-4 cursor-pointer">
            Become a Service Provider
          </p>
        </Link>
        <ul className="flex items-center gap-4">
          {authButtons?.map((item) => (
            <li key={item?.id}>
              <Link href={item?.href}>
                <p
                  className={`text-[16px] font-medium cursor-pointer ${
                    item?.label === "Sign Up"
                      ? "text-lightblack bg-white px-5 py-2 rounded-full"
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
    </nav>
  );
};

export default Navbar;

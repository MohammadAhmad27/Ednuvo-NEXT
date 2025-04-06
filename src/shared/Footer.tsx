import Image from "next/image";
import Link from "next/link";
import { bottomLinks, footerData, socialIcons } from "@/constants";

const Footer = () => {
  return (
    <footer className="w-full bg-primary rounded-tr-[60px] -mt-24 z-10 px-20 pt-20 pb-5">
      {/* Top Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {footerData?.map((section) => (
          <div key={section?.id}>
            <h3 className="text-[16px] font-medium text-white mb-3">
              {section?.title}
            </h3>
            <ul className="space-y-3">
              {section?.items?.map((item, index) => (
                <li
                  key={index}
                  className="text-[14px] font-normal text-white cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 mb-5 w-full border-t border-[#E2E8F0]" />

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left */}
        <p className="text-[16px] font-normal text-white">
          @ 2025 Ednuvo. All rights reserved
        </p>

        {/* Right */}
        <div className="flex items-center justify-between gap-10">
          {/* Middle Links */}
          <div className="flex items-center gap-4">
            {bottomLinks?.map((link) => (
              <Link
                key={link?.id}
                href={link?.href}
                className="text-[16px] font-normal text-white cursor-pointer"
              >
                {link?.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialIcons?.map((social) => (
              <a
                key={social?.id}
                href={social?.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social?.label}
                title={social?.label}
              >
                <Image
                  src={social?.icon}
                  alt={social?.label}
                  width={20}
                  height={20}
                  className="object-cover"
                />
              </a>
            ))}
          </div>

          {/* App Store Button */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
            title="Download on the App Store"
          >
            <Image
              src="/footer/app-store.svg"
              alt="app-store-icon"
              width={85}
              height={85}
              className="object-cover"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

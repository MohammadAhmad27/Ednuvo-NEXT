"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MenuSection } from "@/interfaces/Service-Requester-Dashboard";

interface SidebarContentProps {
  menuLinks: MenuSection[];
  type: string;
}

const SidebarContent = ({ menuLinks, type }: SidebarContentProps) => {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("view");

  return (
    <div className="w-full h-screen overflow-x-hidden overflow-y-auto flex flex-col gap-8 bg-white px-5 py-8">
      {/* logo */}
      <Link href="/" className="w-fit mx-auto">
        <Image
          src="/register/ednuvo-dark.svg"
          alt="ednuvo-logo"
          width={80}
          height={80}
          className="object-cover"
        />
      </Link>

      {/* profile */}
      <div className="w-full flex flex-col gap-3 justify-center items-center border border-gray rounded-xl px-10 py-4">
        <Image
          src="/service-provider-onboarding/profile.svg"
          alt="profile-photo"
          width={80}
          height={80}
          className="object-cover rounded-full"
        />
        <h1 className="text-[14px] font-medium text-lightblack">
          Hassan Al-Omari
        </h1>
        <button className="text-nowrap text-[12px] font-normal text-secondary bg-white border border-gray rounded-full shadow-grayshadow px-8 py-[6px]">
          View Profile
        </button>
      </div>

      {/* links */}
      <div className="w-full flex flex-col justify-start items-start gap-5">
        {menuLinks?.map((item) => (
          <div key={item?.id} className="w-full flex flex-col gap-3">
            <h3 className="pl-4 text-[14px] font-medium text-lightblack">
              {item?.title}
            </h3>
            <div className="w-full flex flex-col justify-start items-start gap-2">
              {item?.links?.map((subItem) => {
                const isActive = activeTab === subItem.label.toLowerCase();
                return (
                  <Link
                    key={subItem?.id}
                    href={`/service-${type}-dashboard${subItem?.url}`}
                    className={`w-full flex gap-2 items-center ${
                      isActive ? "bg-secondary" : "bg-white"
                    } cursor-pointer rounded-full pl-4 py-[10px]`}
                  >
                    <Image
                      src={isActive ? subItem?.icon2 : subItem?.icon}
                      alt="icon"
                      width={18}
                      height={18}
                      className="object-cover"
                    />
                    <p
                      className={`text-[14px] ${
                        isActive
                          ? "font-semibold text-white"
                          : "font-medium text-[#8A8A8A]"
                      }`}
                    >
                      {subItem?.label}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface SidebarProps {
  menuLinks: MenuSection[];
  type: string;
}

const Sidebar = ({ menuLinks, type }: SidebarProps) => {
  return (
    <Suspense fallback={<div className="px-5 py-8">Loading...</div>}>
      <SidebarContent menuLinks={menuLinks} type={type} />
    </Suspense>
  );
};

export default Sidebar;

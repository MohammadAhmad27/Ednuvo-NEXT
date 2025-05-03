import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full bg-white flex justify-end items-center gap-2 px-5 py-4">
      <div className="border border-gray rounded-full p-2">
        <Image
          src="/service-requester-dashboard/language.svg"
          alt="language-icon"
          width={20}
          height={20}
          className="object-cover"
        />
      </div>
      <div className="border border-gray rounded-full p-2">
        <Image
          src="/service-requester-dashboard/notifications.svg"
          alt="notifications-icon"
          width={20}
          height={20}
          className="object-cover"
        />
      </div>
      <div className="flex items-center gap-2">
        <Image
          src="/service-provider-onboarding/profile.svg"
          alt="profile-photo"
          width={37}
          height={37}
          className="object-cover rounded-full shadow-profileshadow"
        />
        <p className="text-[14px] font-semibold text-lightblack">
          Hassan Al-Omari
        </p>
      </div>
    </div>
  );
};

export default Header;

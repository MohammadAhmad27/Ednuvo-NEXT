import Image from "next/image";

const ProfileCompletion = () => {
  const value: number = 80;
  return (
    <div className="w-full flex flex-col bg-white rounded-2xl px-4 py-2">
      <div className="flex items-center gap-2">
        <p className="text-[14px] font-semibold text-[#323232]">
          Profile completion
        </p>
        <p className="text-[14] font-semibold text-green">{value}%</p>
        <Image
          src="/service-requester-dashboard/frame.svg"
          alt="icon"
          width={20}
          height={20}
          className="object-cover ml-2"
        />
      </div>
      <p className="text-[10px] font-normal text-black">
        Complete your profile to receive better service provider matches and
        faster responses
      </p>
      <div className="bg-[#DDE1F0] w-full max-w-[550px] h-2 rounded-full mt-2">
        <div
          className="bg-[#17DB94] rounded-full h-2"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default ProfileCompletion;
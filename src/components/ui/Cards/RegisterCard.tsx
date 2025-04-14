import { RegisterCard } from "@/interfaces/Register";
import Image from "next/image";

interface RegisterCardProps {
  card: RegisterCard;
}
const RegisterCardComponent = ({ card }: RegisterCardProps) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col gap-10">
        <Image
          src={card?.coverImg}
          alt="cover-image"
          width={400}
          height={300}
          className="object-cover cursor-pointer"
        />
        <div className="space-y-3 max-w-[400px]">
          <h2 className="text-[22px] font-semibold text-[#263238] text-center leading-tight">
            {card?.title}
          </h2>
          <ul className="flex flex-col gap-2 list-outside list-disc">
            {card?.bullets?.map((bullet) => (
              <li
                key={bullet?.id}
                className="text-[16px] font-normal text-lightblack leading-tight"
              >
                {bullet?.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegisterCardComponent;

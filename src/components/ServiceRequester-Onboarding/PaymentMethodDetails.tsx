import { paymentMethodImages } from "@/app/service-requester-onboarding/content";
import Image from "next/image";

const PaymentMethodDetails = () => {
  return ( 
  <div>
        <div className="flex flex-col justify-start gap-5 mb-6">
            <label className="text-[14px] text-lightblack font-normal">
              Choose relevant service categories
            </label>
            <div className="flex flex-wrap gap-3">
              {paymentMethodImages?.map((item) => (
                <div key={item.id}>
                  <Image src={item?.icon} alt="icon" width={40} height={40} className="object-cover rounded-[10px]" />
                  </div>
              ))}
            </div>
          </div>
  </div>
);
};

export default PaymentMethodDetails;

import OrderDetails from "@/components/ServiceProvider-Dashboard/sections/Orders/OrderDetails";
import { activeOrdersData } from "../../content";

type PageProps = {
  params: {
    id: string;
  };
};

const page = ({ params }: PageProps) => {
  const order = activeOrdersData?.find((order) => order.id === Number(params.id));

  if (!order) return;

  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto bg-lightgreen rounded-tl-[40px] px-5 py-6">
      <OrderDetails order={order} />
    </div>
  );
};

export default page;

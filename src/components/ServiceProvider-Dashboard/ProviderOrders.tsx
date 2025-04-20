import OrderTabs from "./sections/Orders/OrderTabs";

const ProviderOrders = () => {
  return (
    <div className="w-full h-full space-y-4 bg-white rounded-2xl px-4 py-5">
      <h2 className="text-[18px] font-semibold text-[#2D2D2D]">Orders</h2>
      <OrderTabs />
    </div>
  );
};

export default ProviderOrders;

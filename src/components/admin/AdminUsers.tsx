import UserTabs from "./sections/Users/UserTabs";

const AdminUsers = () => {
  return (
    <div className="w-full h-full space-y-4 bg-white rounded-2xl px-4 py-5">
      <h2 className="text-[18px] font-semibold text-[#2D2D2D]">Users</h2>
      <UserTabs />
    </div>
  );
};

export default AdminUsers;

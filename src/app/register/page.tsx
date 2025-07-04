import RoleSelectorCard from "@/components/Register/RoleSelector";
import Register from "@/shared/Register";
const page = () => {
  return (
    <div className="w-full overflow-hidden">
      <Register component={<RoleSelectorCard />} />
    </div>
  );
};

export default page;

import LoginForm from "@/components/Login/LoginForm";
import Register from "@/shared/Register";

const page = () => {
  return (
    <div className="w-full overflow-hidden">
      <Register component={<LoginForm />} />
    </div>
  );
};

export default page;

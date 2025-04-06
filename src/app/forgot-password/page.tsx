import ForgotPasswordForm from "@/components/Forgot-Password/ForgotPasswordForm";
import Register from "@/shared/Register";

const page = () => {
  return (
    <div className="w-full overflow-hidden">
      <Register component={<ForgotPasswordForm />} />
    </div>
  );
};

export default page;

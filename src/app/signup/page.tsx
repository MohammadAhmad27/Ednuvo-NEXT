import SignUpForm from "@/components/SignUp/SignUpForm";
import Register from "@/shared/Register";

const page = () => {
  return (
    <div className="w-full overflow-hidden">
      <Register component={<SignUpForm />} />
    </div>
  );
};

export default page;

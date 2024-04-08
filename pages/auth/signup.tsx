import AuthNavigation from "@/components/Auth/AuthNavigation";
import AuthLayout from "@/layouts/AuthLayout";

const SignUp = () => {
  return (
    <AuthLayout>
      <AuthNavigation pageType="signup" />
    </AuthLayout>
  );
};

export default SignUp;

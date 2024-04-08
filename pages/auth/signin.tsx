import AuthLayout from "@/layouts/AuthLayout";
import AuthNavigation from "@/components/Auth/AuthNavigation";

const SignIn = () => {
  return (
    <AuthLayout>
      <AuthNavigation pageType="signin" />
    </AuthLayout>
  );
};

export default SignIn;

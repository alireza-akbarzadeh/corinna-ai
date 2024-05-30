import { SignInFormProvider } from "@/components/form/sign-in/form-provider";

const SignInPage = () => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignInFormProvider />
      </div>
    </div>
  );
};

export default SignInPage;

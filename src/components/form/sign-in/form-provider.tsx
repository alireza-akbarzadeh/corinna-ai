"use client";
import { AuthContextProvider } from "@/context/use-auth-context";
import { useSignInForm } from "@/hooks/sing-in/use-sign-in";
import { FormProvider } from "react-hook-form";
import { SignInFormAction } from "./form-action";
import { SingInFormFiled } from "./form-field";

export function SignInFormProvider() {
  const { methods, onHandleSubmit, loading } = useSignInForm();

  return (
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit} className="h-full">
          <div className="flex flex-col justify-between gap-3">
            <SingInFormFiled />
            <SignInFormAction loading={loading} />
          </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  );
}

"use client";
import { Loader } from "@/components/loader";
import { AuthContextProvider } from "@/context/use-auth-context";
import { useSignUpForm } from "@/hooks/sign-up/use-signup-form";
import { PropsWithChildren } from "react";
import { FormProvider } from "react-hook-form";

export function SignUpFormProvider(props: PropsWithChildren) {
  const { children } = props;
  const { loading, method, onHandleSubmit } = useSignUpForm();
  return (
    <AuthContextProvider>
      <FormProvider {...method}>
        <form onSubmit={onHandleSubmit} className="h-full">
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  );
}

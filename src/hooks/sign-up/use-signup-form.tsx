"use client";

import { onCompleteUserRegistration } from "@/actions/auth";
import { useToast } from "@/components/ui/use-toast";
import {
  UserRegistrationProps,
  UserRegistrationSchema,
} from "@/schemas/auth.schema";
import { useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function useSignUpForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const { isLoaded, setActive, signUp } = useSignUp();
  const router = useRouter();
  const method = useForm<UserRegistrationProps>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: {
      type: "owner",
    },
    mode: "onChange",
  });

  const onGenerateOTP = async (
    email: string,
    password: string,
    onNext: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (!isLoaded) return;
    try {
      await signUp.create({
        emailAddress: email,
        password: password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      onNext((prev) => prev + 1);
    } catch (error: any) {
      toast({ title: "Error", description: error.errors[0].longMessage });
    }
  };

  const onHandleSubmit = method.handleSubmit(
    async (valuse: UserRegistrationProps) => {
      if (!isLoaded) return;
      try {
        setLoading(true);
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code: valuse.otp,
        });
        if (completeSignUp.status !== "complete") {
          return { message: "Somthing Went wrong!" };
        }
        if (completeSignUp.status === "complete") {
          if (!signUp.createdUserId) return;

          const registered = await onCompleteUserRegistration(
            valuse.fullname,
            signUp.createdUserId,
            valuse.type
          );
          if (registered?.status == 200 && registered.user) {
            await setActive({ session: completeSignUp.createdSessionId });
            setLoading(false);
            router.push("/dashboard");
          }
          if (registered?.status == 400) {
            toast({ title: "Error", description: "Something went wrong!" });
          }
        }
      } catch (error) {}
    }
  );

  return { method, onGenerateOTP, onHandleSubmit, loading };
}

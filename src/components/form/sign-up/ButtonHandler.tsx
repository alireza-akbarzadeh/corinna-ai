"use client";

import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/use-auth-context";
import { useSignUpForm } from "@/hooks/sign-up/use-signup-form";
import { UserRegistrationProps } from "@/schemas/auth.schema";
import Link from "next/link";
import React, { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

export function ButtonHandler() {
  const { currentStep, setCurrentStep } = useAuthContext();
  const { formState, getFieldState, getValues } =
    useFormContext<UserRegistrationProps>();
  const { onGenerateOTP } = useSignUpForm();
  const { isDirty: isFullName } = getFieldState("fullname", formState);
  const { isDirty: isEmail } = getFieldState("email", formState);
  const { isDirty: isPssword } = getFieldState("password", formState);

  const isValid = [isFullName, isEmail, isPssword].every(Boolean);

  const steps: Record<number, ReactNode> = {
    1: (
      <div className="w-full flex flex-col gap-3 items-center">
        <Button
          type="submit"
          className="w-full"
          onClick={() => setCurrentStep(2)}
        >
          Continue
        </Button>
        <p>
          Already have an account?{" "}
          <Link href={"/auth/sign-in"} className="font-bold text-orange">
            Sign In
          </Link>
        </p>
      </div>
    ),
    2: (
      <div className="w-full flex items-center flex-col gap-3">
        <Button
          type="submit"
          loading={formState.isSubmitting}
          className="w-full"
          {...(isValid && {
            onClick: () => {
              onGenerateOTP(
                getValues("email"),
                getValues("password"),
                setCurrentStep
              );
            },
          })}
        >
          Continue
        </Button>
        <p>
          Already have an account?{" "}
          <Link href={"/auth/sign-in"} className="font-bold text-orange">
            Sign In
          </Link>
        </p>
      </div>
    ),
    3: (
      <div className="w-full flex items-center flex-col gap-3">
        <Button loading={formState.isSubmitting} className="w-full">
          Create An Account
        </Button>
        <p>
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="font-bold text-orange">
            Sign In
          </Link>
        </p>
      </div>
    ),
  };

  return steps[currentStep];
}

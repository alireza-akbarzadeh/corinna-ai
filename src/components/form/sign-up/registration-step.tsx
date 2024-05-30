"use client";
import { useAuthContext } from "@/context/use-auth-context";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { TypeSelectionForm } from "./type-selection-form";

type RegistrationFormStepProps = {};
export function RegistrationFormStep(props: RegistrationFormStepProps) {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const { currentStep } = useAuthContext();
  const [onOTP, setOnOTP] = useState<string>("");
  const [onUserType, setOnUserType] = useState<"owner" | "student">("owner");
  setValue("otp", onOTP);
  switch (currentStep) {
    case 1:
      return (
        <TypeSelectionForm
          register={register}
          setUserType={setOnUserType}
          userType={onUserType}
        />
      );
      break;
    case 2:
      break;
    case 3:
      break;
    default:
      break;
  }
  return <div></div>;
}

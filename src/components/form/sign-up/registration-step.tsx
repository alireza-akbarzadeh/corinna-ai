"use client";
import { useAuthContext } from "@/context/use-auth-context";
import React, { ReactNode, useState } from "react";
import { useFormContext } from "react-hook-form";
import { TypeSelectionForm } from "./type-selection-form";
import dynamic from "next/dynamic";
import { Spinner } from "@/components/spinner";

const DetailForm = dynamic(() => import("./detailed-form"), {
  ssr: false,
  loading: Spinner,
});
const OtpForm = dynamic(() => import("./otp-form"), {
  ssr: false,
  loading: Spinner,
});

export function RegistrationFormStep() {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const { currentStep } = useAuthContext();
  const [onOTP, setOnOTP] = useState<string>("");
  const [onUserType, setOnUserType] = useState<"owner" | "student">("owner");
  setValue("otp", onOTP);

  const formSteps: Record<number, ReactNode> = {
    1: (
      <TypeSelectionForm
        register={register}
        setUserType={setOnUserType}
        userType={onUserType}
      />
    ),
    2: <DetailForm errors={errors} register={register} />,
    3: <OtpForm opt={onOTP} setOnOTP={setOnOTP} />,
  };

  return formSteps[currentStep];
}

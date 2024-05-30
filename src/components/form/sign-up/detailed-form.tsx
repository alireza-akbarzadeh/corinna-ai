import { USER_REGISTRATION_FORM } from "@/constants/form";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FormGenerator } from "../form-generator";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowLeft, ChevronLeft } from "lucide-react";
import { useAuthContext } from "@/context/use-auth-context";

type DetailedFormProps = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

export default function DetailedForm(props: DetailedFormProps) {
  const { errors, register } = props;
  const { setCurrentStep } = useAuthContext();
  return (
    <>
      <Button
        className="border-orange border-2 flex-none p-2 cursor-pointer"
        variant="outline"
        size="icon"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <h2 className="text-gravel md:text-4xl font-bold">Account Details</h2>
      <p className="text-iridium md:text-sm">Enter Your email and password</p>
      {USER_REGISTRATION_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
        />
      ))}
    </>
  );
}

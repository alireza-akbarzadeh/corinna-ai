import { ReactNode } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type FormGeneratorProps = {
  type: "text" | "email" | "password";
  inputType: "select" | "input" | "textarea";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<FieldValues>;
  lines?: number;
  form?: string;
};

export function FormGenerator(props: FormGeneratorProps) {
  const {
    errors,
    inputType,
    name,
    register,
    type,
    form,
    label,
    lines,
    options,
    placeholder,
  } = props;

  const generator: Record<typeof inputType, ReactNode> = {
    input: (
      <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
        {label && label}
        <Input
          id={`input-${label}`}
          type={type}
          placeholder={placeholder}
          form={form}
          {...register(name)}
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p className="text-red-400 mt-2">
              {message === "Required" ? "" : message}
            </p>
          )}
        />
      </Label>
    ),
    select: (
      <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
        {label && label}
        <Textarea
          form={form}
          id={`input-${label}`}
          placeholder={placeholder}
          rows={lines}
          {...register(name)}
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p className="text-red-400 mt-2">
              {message === "Required" ? "" : message}
            </p>
          )}
        />
      </Label>
    ),
    textarea: (
      <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
        {label && label}
        <Input
          id={`input-${label}`}
          type={type}
          placeholder={placeholder}
          form={form}
          {...register(name)}
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p className="text-red-400 mt-2">
              {message === "Required" ? "" : message}
            </p>
          )}
        />
      </Label>
    ),
  };

  return generator[inputType] || <></>;
}

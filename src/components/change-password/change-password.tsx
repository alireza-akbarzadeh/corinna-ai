"use client";

import { useChangePassword } from "@/hooks/settings/use-settings";
import { FormGenerator } from "../form/form-generator";
import { Section } from "../section";
import { Button } from "../ui/button";

export function ChangePassword() {
  const { register, errors, loading, onChangePassword } = useChangePassword();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1">
        <Section label="Change Password" message="Reset your password" />
      </div>
      <form onSubmit={onChangePassword} className="lg:col-span-4">
        <div className="lg:w-[500px] flex flex-col gap-3">
          <FormGenerator
            register={register}
            errors={errors}
            name="password"
            placeholder="New Password"
            type="text"
            inputType="input"
          />
          <FormGenerator
            register={register}
            errors={errors}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="text"
            inputType="input"
          />
          <Button
            loading={loading}
            className="bg-grandis text-gray-700 font-semibold"
          >
            Change Password
          </Button>
        </div>
      </form>
    </div>
  );
}

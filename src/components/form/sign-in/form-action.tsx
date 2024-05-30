import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type SignInFormActionProps = {
  loading: boolean;
};
export const SignInFormAction = (props: SignInFormActionProps) => {
  const { loading } = props;
  return (
    <div className="w-full flex flex-col gap-3 items-center">
      <Button loading={loading} type="submit" className="w-full">
        Submit
      </Button>
      <p>
        Don’t have an account?{" "}
        <Link href="/auth/sign-up" className="font-bold text-orange">
          Create one
        </Link>
      </p>
    </div>
  );
};

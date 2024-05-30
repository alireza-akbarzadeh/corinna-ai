import { Otp } from "@/components/otp";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import React from "react";

type OtpFormProps = {
  setOnOTP: React.Dispatch<React.SetStateAction<string>>;
  opt: string;
};

export default function OtpForm(props: OtpFormProps) {
  const { opt, setOnOTP } = props;
  return (
    <>
      <Button
        className="border-orange border-2 flex-none p-2 cursor-pointer"
        variant="outline"
        size="icon"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <h2 className="text-gravel md:text-4xl font-bold">Enter OTP</h2>
      <p className="text-iridium md:text-sm">
        Enter the one time password was sent to your email.
      </p>
      <div className="w-full justify-center flex py-5">
        <Otp otp={opt} setOpt={setOnOTP} />
      </div>
    </>
  );
}

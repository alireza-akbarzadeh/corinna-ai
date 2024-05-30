import { Otp } from "@/components/otp";
import React from "react";

type OtpFormProps = {
  setOnOTP: React.Dispatch<React.SetStateAction<string>>;
  opt: string;
};

export default function OtpForm(props: OtpFormProps) {
  const { opt, setOnOTP } = props;
  return (
    <>
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

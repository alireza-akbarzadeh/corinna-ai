import React from "react";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";

type OtpProps = {
  otp: string;
  setOpt: React.Dispatch<React.SetStateAction<string>>;
};

export function Otp(props: OtpProps) {
  const { otp, setOpt } = props;

  return (
    <InputOTP maxLength={6} value={otp} onChange={(otp) => setOpt(otp)}>
      <div className="flex gap-3">
        <div>
          <InputOTPSlot index={0} />
        </div>
        <div>
          <InputOTPSlot index={1} />
        </div>
        <div>
          <InputOTPSlot index={2} />
        </div>
        <div>
          <InputOTPSlot index={3} />
        </div>
        <div>
          <InputOTPSlot index={4} />
        </div>
        <div>
          <InputOTPSlot index={5} />
        </div>
      </div>
    </InputOTP>
  );
}

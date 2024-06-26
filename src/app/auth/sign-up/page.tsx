import { ButtonHandler } from "@/components/form/sign-up/ButtonHandler";
import { SignUpFormProvider } from "@/components/form/sign-up/form-provider";
import { HighLightedBar } from "@/components/form/sign-up/highlighted-bar";
import { RegistrationFormStep } from "@/components/form/sign-up/registration-step";

export default function SignUp() {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full  gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-5">
            <RegistrationFormStep />
            <ButtonHandler />
          </div>
          <HighLightedBar />
        </SignUpFormProvider>
      </div>
    </div>
  );
}

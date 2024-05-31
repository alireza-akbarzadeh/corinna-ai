import { UserLoginProps, UserLoginSchema } from "@/schemas/auth.schema";
import { useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function useSignInForm() {
  const { isLoaded, setActive, signIn } = useSignIn();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const methods = useForm<UserLoginProps>({
    resolver: zodResolver(UserLoginSchema),
    mode: "onChange",
  });

  const onHandleSubmit = methods.handleSubmit(
    async (valuse: UserLoginProps) => {
      if (!isLoaded) return;
      try {
        setLoading(true);
        const authenticated = await signIn.create({
          password: valuse.password,
          identifier: valuse.email,
        });
        if (authenticated.status === "complete") {
          await setActive({ session: authenticated.createdSessionId });
          toast("Success", { description: "welcome back!" });
          router.push("/dashboard");
        }
      } catch (error: any) {
        setLoading(false);
        if (error.errors[0].code === "form_password_incorrect")
          toast("Error", {
            description: "email/password is incorrect try again",
          });
      }
    }
  );

  return {
    methods,
    onHandleSubmit,
    loading,
  };
}

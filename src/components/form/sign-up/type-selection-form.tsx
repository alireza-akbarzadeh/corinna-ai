import { FieldValues, UseFormRegister } from "react-hook-form";
import { UserTypeCard } from "./user-type-card";

type TypeSelectionFormProps = {
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};
export function TypeSelectionForm(props: TypeSelectionFormProps) {
  const { register, setUserType, userType } = props;
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold ">Create an account</h2>
      <p>
        Tell us about yourself! what do you do? Let`&rsquo;s tailor your
        <br />
        experience so it best suits you.
      </p>
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="owner"
        title="I own a busines"
        text="Setting up my account for my company."
      />
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="student"
        title="I a student"
        text="Looking to learn about the tool."
      />
    </>
  );
}

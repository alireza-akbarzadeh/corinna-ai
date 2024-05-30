"use client";

import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { User, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";

type UserTypeCardProps = {
  value: string;
  title: string;
  text: string;
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};
export function UserTypeCard(props: UserTypeCardProps) {
  const { register, text, title, userType, value, setUserType } = props;

  const Icon = value === "owner" ? User : GraduationCap;

  return (
    <Label htmlFor={value}>
      <Card
        className={cn(
          "w-full cursor-pointer",
          userType == value && "border-orange"
        )}
      >
        <CardContent className="flex justify-between p-2">
          <div className="flex items-center gap-3">
            <Card
              className={cn(
                "flex justify-center p-3",
                userType == value ? "border-orange" : "border-gray-400"
              )}
            >
              <Icon
                size={30}
                className={cn(
                  userType == value ? "text-orange" : "text-gray-400"
                )}
              />
            </Card>
            <div>
              <CardDescription
                className={cn(
                  "font-semibold",
                  userType == value ? "text-orange" : "text-gray-400"
                )}
              >
                {title}
              </CardDescription>
              <CardDescription className="font-light">{text}</CardDescription>
            </div>
          </div>
          <div>
            <div
              className={cn(
                "w-4 h-4 rounded-full",
                userType == value ? "bg-orange" : "bg-transparent"
              )}
            >
              <Input
                {...register("type", {
                  onChange: (event) => setUserType(event.target.value),
                })}
                value={value}
                id={value}
                className="hidden"
                type="radio"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Label>
  );
}

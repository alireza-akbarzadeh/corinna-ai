"use client";

import { useAuthContext } from "@/context/use-auth-context";
import { cn } from "@/lib/utils";
import React from "react";

type HighLightedBar = {};
export function HighLightedBar(props: HighLightedBar) {
  const { currentStep } = useAuthContext();

  return (
    <div className="grid grid-cols-3 gap-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "rounded-full h-2 col-span-1",
            currentStep === index + 1 ? "bg-orange" : "bg-platinum"
          )}
        ></div>
      ))}
    </div>
  );
}

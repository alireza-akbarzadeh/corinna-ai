import { BillingSetting } from "@/components/billing-setting";
import { ChangePassword } from "@/components/change-password/change-password";
import { DarkModeToggle } from "@/components/dark-mode/dark-mode";
import { InfoBar } from "@/components/Info-bar";
import React from "react";

function DashboardSetting() {
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-16">
        <BillingSetting />
        <DarkModeToggle />
        <ChangePassword />
      </div>
    </>
  );
}

export default DashboardSetting;

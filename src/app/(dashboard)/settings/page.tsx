import { BillingSetting } from "@/components/billing-setting";
import { InfoBar } from "@/components/Info-bar";
import React from "react";

function DashboardSetting() {
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
        <BillingSetting />
      </div>
    </>
  );
}

export default DashboardSetting;

"use client";

import React from "react";
import { useSidebar } from "../sidebar/use-sidebar";
import { Loader } from "../loader";
import { Switch } from "../ui/switch";

type InfoHeadProps = {
  title: string;
};

export function InfoHead(props: InfoHeadProps) {
  const {
    chatRoom,
    expand,
    loading,
    onActivateRealtime,
    onExpand,
    onSignOut,
    page,
    realtime,
  } = useSidebar();
  return (
    <div className="flex flex-col">
      <div className="flex gap-5 items-center">
        <h2 className="font-bold capitalize text-3xl">{page}</h2>
        {page == "conversation" && chatRoom && (
          <Loader loading={loading} noPadding>
            <Switch
              defaultChecked={realtime}
              onClick={(e) => onActivateRealtime(e)}
              className="data-[state=checked]:bg-orange data-[state=unchecked]:bg-peach"
            />
          </Loader>
        )}
      </div>
      <p className="text-gray-500 text-sm">
        {page == "settings"
          ? "Manage your account settings, preferences and integrations"
          : page == "dashboard"
          ? "A detailed overview of your metrics, usage, customers and more"
          : page == "appointment"
          ? "View and edit all your appointments"
          : page == "email-marketing"
          ? "Send bulk emails to your customers"
          : page == "integration"
          ? "Connect third-party applications into Corinna-AI"
          : "Modify domain settings, change chatbot options, enter sales questions and train your bot to do what you want it to."}
      </p>
    </div>
  );
}

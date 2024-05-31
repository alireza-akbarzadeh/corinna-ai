import { onLoginUser } from "@/actions/auth";
import { Sidebar } from "@/components/sidebar";
import { ChatProvider } from "@/context/use-chat-context";
import React, { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

async function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;
  const authenticated = await onLoginUser();
  if (!authenticated) return null;

  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        <Sidebar domains={authenticated.domains} />
      </div>
    </ChatProvider>
  );
}

export default DashboardLayout;

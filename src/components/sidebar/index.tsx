"use client";
import React from "react";
import { useSidebar } from "./use-sidebar";
import { cn } from "@/lib/utils";
import { MaxMenu } from "./maximized-menu";
import { MinMenu } from "./minimized-menu";

export type SidebarProps = {
  domains: { id: string; name: string; icon: string }[] | null | undefined;
};

export function Sidebar(props: SidebarProps) {
  const { domains } = props;
  const { expand, onExpand, onSignOut, page } = useSidebar();
  return (
    <div
      className={cn(
        "bg-cream h-full w-[60px] fill-mode-forwards fixed md:relative",
        expand === undefined && "",
        expand == true
          ? "animate-open-sidebar"
          : expand == false && "animate-close-sidebar"
      )}
    >
      {expand ? (
        <MaxMenu
          domains={domains}
          current={page!}
          onExpand={onExpand}
          onSingOut={onSignOut}
        />
      ) : (
        <MinMenu
          domains={domains}
          current={page!}
          onSignOut={onSignOut}
          onShrink={onExpand}
        />
      )}
    </div>
  );
}

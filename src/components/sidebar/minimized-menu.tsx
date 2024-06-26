import { SIDE_BAR_MENU } from "@/constants/menu";

import React from "react";

import { LogOut, MonitorSmartphone } from "lucide-react";
import { MenuLogo } from "@/icons/menu-logo";
import { MenuItem } from "./menu-item";
import { DomainsMenu } from "./domains-menu";
import { SidebarProps } from ".";
import { Logo } from "../logo";

type MinMenuProps = SidebarProps & {
  onShrink(): void;
  current: string;
  onSignOut(): void;
};

export const MinMenu = (props: MinMenuProps) => {
  const { onShrink, current, onSignOut, domains } = props;
  return (
    <div className="p-3 flex flex-col items-center h-full">
      <span className="animate-fade-in opacity-0 delay-300 fill-mode-forwards cursor-pointer">
        <Logo noLabel onClick={onShrink} />
      </span>
      <div className="animate-fade-in opacity-0 delay-300 fill-mode-forwards flex flex-col justify-between h-full pt-10">
        <div className="flex flex-col">
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem size="min" {...menu} key={key} current={current} />
          ))}
          <DomainsMenu min domains={domains} />
        </div>
        <div className="flex flex-col">
          <MenuItem
            size="min"
            label="Sign out"
            icon={<LogOut />}
            onSignOut={onSignOut}
          />
          <MenuItem
            size="min"
            label="Mobile App"
            icon={<MonitorSmartphone />}
          />
        </div>
      </div>
    </div>
  );
};

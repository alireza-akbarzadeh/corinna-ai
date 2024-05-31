import React from "react";
import { SidebarProps } from "./index";
import Image from "next/image";
import { Menu } from "lucide-react";
import { SIDE_BAR_MENU } from "@/constants/menu";
import { DomainsMenu } from "./domains-menu";
import { MenuItem } from "./menu-item";

type MaxMenuProps = SidebarProps & {
  onExpand(): void;
  current: string;
  onSingOut(): void;
};

export function MaxMenu(props: MaxMenuProps) {
  const { current, domains, onExpand, onSingOut } = props;

  return (
    <div className="py-3 px-4 flex flex-col h-full">
      <div className="flex justify-between items-center">
        <Image
          src="logo.svg"
          alt="logo"
          sizes="100vw"
          className="animate-fade-in opacity-0 delay-300 fill-mode-forwards"
          style={{ width: "50%", height: "auto" }}
          width={0}
          height={0}
        />
        <Menu
          className="cursor-pointer animate-fade-in opacity-0 delay-300 fill-mode-forwards"
          onClick={onExpand}
        />
      </div>
      <div className="animate-fade-in opacity-0 delay-300 fill-mode-forwards flex flex-col justify-between h-full pt-10">
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 mb-3">MENU</p>
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem size="max" {...menu} key={key} current={current} />
          ))}
          <DomainsMenu domains={domains} />
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type MenuItemProps = {
  size: "max" | "min";
  label: string;
  icon: JSX.Element;
  path?: string;
  current?: string;
  onSignOut?(): void;
};

export function MenuItem(props: MenuItemProps) {
  const { size, path, icon, label, current, onSignOut } = props;
  switch (size) {
    case "max":
      return (
        <Link
          onClick={onSignOut}
          className={cn(
            "flex items-center gap-2 px-1 py-2 rounded-md my-1",
            !current
              ? "text-gray-500 "
              : current == path
              ? "dark:bg-white  font-bold text-black bg-orange"
              : "text-gray-500 "
          )}
          href={path ? `/${path}` : "#"}
        >
          {icon} {label}
        </Link>
      );
    case "min":
      return (
        <Link
          onClick={onSignOut}
          className={cn(
            !current
              ? "text-gray-500"
              : current == path
              ? "dark:bg-white bg-orange  font-bold text-black"
              : "text-gray-500",
            "rounded-lg py-2 px-2 w-full my-1"
          )}
          href={path ? `/${path}` : "#"}
        >
          {icon}
        </Link>
      );
    default:
      return null;
  }
}

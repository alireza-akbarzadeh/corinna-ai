import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../toggleMode";

export default async function Navar() {
  return (
    <nav
      className="flex gap-5 justify-between items-center px-7  font-bold border-b border-solid dark:border-b-orange border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5 py-3"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <Image
          src="/logo.svg"
          alt="Company logo"
          sizes="100vw"
          style={{
            width: "50px",
            height: "auto",
          }}
          width={0}
          height={0}
        />
      </div>
      <ul
        role="menubar"
        className="gap-5 justify-between self-stretch my-auto text-sm leading-5 text-neutral-700 
        dark:text-gray-200
        max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex"
      >
        <li role="none">
          <Link
            href="/"
            role="menuitem"
            className="hover:underline font-semibold"
          >
            Home
          </Link>
        </li>
        <li role="none">
          <Link
            href="/pricing"
            role="menuitem"
            className="hover:underline font-semibold"
          >
            Pricing
          </Link>
        </li>
        <li role="none">
          <Link
            href="/news-room"
            role="menuitem"
            className="hover:underline  font-semibold"
          >
            News Room
          </Link>
        </li>
        <li role="none">
          <Link
            href="/features"
            role="menuitem"
            className="hover:underline font-semibold"
          >
            Features
          </Link>
        </li>
        <li role="none">
          <Link
            href="/contact-us"
            role="menuitem"
            className="hover:underline font-semibold"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-7">
        <Link
          href="/dashboard"
          className="bg-orange px-8 py-2 rounded-sm text-white"
          aria-label="Free Trial"
        >
          Free Trial
        </Link>
        <UserButton />
        <ModeToggle />
      </div>
    </nav>
  );
}

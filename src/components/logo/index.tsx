import Image from "next/image";
import React, { HTMLAttributes } from "react";

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  noLabel?: boolean;
};

export function Logo(props: LogoProps) {
  const { noLabel = false, ...rest } = props;

  return (
    <div className="flex items-center gap-2" {...rest}>
      <Image
        src="logo.svg"
        alt="logo"
        sizes="100vw"
        className="animate-fade-in opacity-0 delay-300 fill-mode-forwards"
        style={{ width: "50px", height: "auto" }}
        width={0}
        height={0}
      />
      {!noLabel && (
        <h4 className="text-iridium dark:text-cream tracking-wider">Corinna</h4>
      )}
    </div>
  );
}

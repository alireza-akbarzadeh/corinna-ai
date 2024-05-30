import Navar from "@/components/navabr";
import React, { PropsWithChildren } from "react";

function RootLayout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <>
      <Navar />
      <main>{children}</main>
    </>
  );
}

export default RootLayout;

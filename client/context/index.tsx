import React, { Fragment } from "react";
import AuthContextProvider from "./Auth";
import { ContextProps } from "@/Types";
export default function Context({ children }: ContextProps) {
  return (
    <Fragment>
      <AuthContextProvider>{children}</AuthContextProvider>
    </Fragment>
  );
}

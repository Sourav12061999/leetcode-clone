import React, { useContext } from "react";
import { Avatar, Button } from "@mantine/core";
import { AuthContext } from "../../../context";
import { UserButton } from "../../../Components/User";

type PropTypes = {
  placement: "Navbar" | "Drawer";
};

function Auth({ placement }: PropTypes) {
  const authContext = useContext(AuthContext);
  return (
    <>
      {authContext?.isAuthenticated ? (
        <>
          {placement === "Drawer" ? (
            <UserButton
              text={authContext.userData?.name[0].toUpperCase()}
              name={authContext.userData?.name}
              email={authContext.userData?.email}
            />
          ) : (
            <Avatar>{authContext.userData?.name[0].toUpperCase()}</Avatar>
          )}
        </>
      ) : (
        <>
          <Button variant="default">Log in</Button>
          <Button>Sign up</Button>
        </>
      )}
    </>
  );
}

export default Auth;

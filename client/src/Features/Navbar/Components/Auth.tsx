import React, { useContext } from "react";
import { Avatar, Button } from "@mantine/core";
import { AuthContext } from "../../../context";
import { UserButton } from "../../../Components/User";
import { Link } from "react-router-dom";

type PropTypes = {
  placement: "Navbar" | "Drawer";
};

function Auth({ placement }: PropTypes) {
  const authContext = useContext(AuthContext);
  return (
    <>
      {authContext?.authData.isAuthenticated ? (
        <>
          {placement === "Drawer" ? (
            <UserButton
              text={authContext.authData.userData?.name[0].toUpperCase()}
              name={authContext.authData.userData?.name}
              email={authContext.authData.userData?.email}
            />
          ) : (
            <Avatar>
              {authContext.authData.userData?.name[0].toUpperCase()}
            </Avatar>
          )}
        </>
      ) : (
        <>
          <Link to={"/signin"}>
            <Button variant="default">Log in</Button>
          </Link>
          <Link to={"/signup"}>
            <Button>Sign up</Button>
          </Link>
        </>
      )}
    </>
  );
}

export default Auth;

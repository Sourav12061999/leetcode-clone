import { AuthType, ServerResponseType, UserType } from "../../Types";
import { ContextProps } from "../../Types";
import { BACKEND_SERVER_URL } from "../../globals";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext<AuthType | null>(null);

function AuthContextProvider({ children }: ContextProps) {
  const [authData, setAuthData] = useState<AuthType>({
    isAuthenticated: false,
    token: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (!token) return;
    fetch(`${BACKEND_SERVER_URL}/auth/user`, {
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data: ServerResponseType<UserType>) => {
        if (data.isSuccess === true && data.isError === false && data.data) {
          setAuthData({
            isAuthenticated: true,
            token,
            userData: data.data,
          });
        }
      })
      .catch((error) => {
        setAuthData({
          isAuthenticated: false,
          token,
        });
      });
  }, []);

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;

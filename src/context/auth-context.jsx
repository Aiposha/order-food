import { createContext, useState } from "react";

export const authContext = createContext({
  isLogin: "",
});

export const AuthProvider = ({ children }) => {
  const [isLogin, setIslogin] = useState("");

  const getLoginEmail = (email) => {
    const newSplit = email.split("@");

    const newEmail = newSplit[0];
    setIslogin(newEmail)
  };

  return (
    <authContext.Provider value={{ isLogin, getLoginEmail }}>
      {children}
    </authContext.Provider>
  );
};

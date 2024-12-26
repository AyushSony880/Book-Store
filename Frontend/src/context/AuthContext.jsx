import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const useAuthContext = () => {
  const theme = useContext(AuthContext);
  return theme;
};

export const AuthProvider = (props) => {
  let themeData = localStorage.getItem("theme");
  let parseThemeData =
    themeData !== "undefined" ? JSON.parse(themeData) : false;
  const [theme, settheme] = useState(parseThemeData);

  let userData = localStorage.getItem("user");

  let parseUserData = userData !== "undefined" ? JSON.parse(userData) : null;
  const [user, setuser] = useState(parseUserData);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <AuthContext.Provider value={{ theme, settheme, user, setuser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  const [user, setUser] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log(backendUrl);
  const loadUserData = async () => {
    const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (data.success) {
      setUser(data.user);
    }
  };

  useEffect(() => {
    if (token) {
      loadUserData();
    } else setUser(false);
  }, [token]);

  return (
    <AppContext.Provider
      value={{
        setUser,
        user,
        token,
        setToken,
        backendUrl,
        loadUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

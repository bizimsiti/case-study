import React, { createContext, useState } from "react";

const UserDataContext = createContext(null);

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const values = {
    user,
    setUser
  };
  return (
    <UserDataContext.Provider value={values}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
